import { NextRequest, NextResponse } from "next/server";

// Schema information to help the LLM understand our data structure
const SCHEMA_CONTEXT = `
You are a marketing segment query parser. Convert natural language queries into structured segment attributes.

Available attributes and their valid values:

DEMOGRAPHIC:
- age (numeric): Use operators eq, neq, gt, lt, gte, lte. Value is a number.
- gender (categorical): Values: male, female, non_binary, prefer_not_to_say. Operators: eq, neq, in, not_in.
- income (numeric): Use operators eq, neq, gt, lt, gte, lte. Value is a number (annual income in dollars).
- education (categorical): Values: less_than_high_school, high_school, some_college, associates, bachelors, masters, doctorate. Operators: eq, neq, in, not_in.
- marital_status (categorical): Values: single, married, divorced, widowed, domestic_partnership. Operators: eq, neq, in, not_in.
- occupation (text): Free text. Operators: eq, neq, contains, starts_with, ends_with.
- household_size (numeric): Use operators eq, neq, gt, lt, gte, lte. Value is a number.

GEOGRAPHIC:
- country (text): Free text country name. Operators: eq, neq, contains, starts_with, ends_with.
- state_region (text): Free text state/region. Operators: eq, neq, contains, starts_with, ends_with.
- city (text): Free text city name. Operators: eq, neq, contains, starts_with, ends_with.
- zip_code (text): Free text zip code. Operators: eq, neq, contains, starts_with, ends_with.
- area_type (categorical): Values: urban, suburban, rural. Operators: eq, neq, in, not_in.
- climate_zone (categorical): Values: tropical, arid, mediterranean, temperate, continental, polar. Operators: eq, neq, in, not_in.

BEHAVIORAL:
- purchase_frequency (numeric): Number of purchases. Operators: eq, neq, gt, lt, gte, lte.
- last_purchase_date (date): Use operators eq, before, after, in_last, not_in_last. Value is YYYY-MM-DD or "X days" for in_last/not_in_last.
- avg_order_value (numeric): Average order value in dollars. Operators: eq, neq, gt, lt, gte, lte.
- product_categories (categorical): Values: electronics, clothing, home_garden, health_beauty, sports_outdoors, food_beverage, automotive, toys_games. Operators: eq, neq, in, not_in.
- channel_preference (categorical): Values: online_web, mobile_app, in_store, phone, social_media. Operators: eq, neq, in, not_in.
- loyalty_status (categorical): Values: none, bronze, silver, gold, platinum. Operators: eq, neq, in, not_in.

PSYCHOGRAPHIC:
- interests (categorical): Values: technology, travel, fitness, entertainment, food_cooking, fashion, finance, arts_culture, gaming, pets. Operators: eq, neq, in, not_in.
- lifestyle (categorical): Values: active, family_oriented, career_focused, eco_conscious, luxury_seeker, budget_conscious, early_adopter, homebody. Operators: eq, neq, in, not_in.
- values (categorical): Values: sustainability, quality, convenience, innovation, tradition, community, independence. Operators: eq, neq, in, not_in.
- personality_type (categorical): Values: analytical, driver, expressive, amiable. Operators: eq, neq, in, not_in.
- brand_affinity (text): Free text brand name. Operators: eq, neq, contains, starts_with, ends_with.

OPERATORS:
- eq: equals/is
- neq: not equals/is not
- gt: greater than
- lt: less than
- gte: greater than or equal/at least
- lte: less than or equal/at most
- contains: contains text
- starts_with: starts with text
- ends_with: ends with text
- in: is any of (for categorical)
- not_in: is none of (for categorical)
- before: date is before
- after: date is after
- in_last: within the last X days
- not_in_last: not within the last X days

Respond ONLY with a valid JSON array of objects. Each object must have:
- attribute: the attribute key (e.g., "gender", "income", "marital_status")
- operator: the operator key (e.g., "eq", "gt", "lt")
- value: the value (string for categorical/text, number as string for numeric)

Example input: "single men who make over 250000"
Example output: [{"attribute":"marital_status","operator":"eq","value":"single"},{"attribute":"gender","operator":"eq","value":"male"},{"attribute":"income","operator":"gt","value":"250000"}]

Example input: "women in urban areas interested in technology"
Example output: [{"attribute":"gender","operator":"eq","value":"female"},{"attribute":"area_type","operator":"eq","value":"urban"},{"attribute":"interests","operator":"eq","value":"technology"}]
`;

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();

    if (!query || typeof query !== "string") {
      return NextResponse.json(
        { error: "Query is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "OpenAI API key not configured. Please add OPENAI_API_KEY to your environment." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: SCHEMA_CONTEXT,
          },
          {
            role: "user",
            content: query,
          },
        ],
        temperature: 0.1,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("OpenAI API error:", error);
      return NextResponse.json(
        { error: "Failed to parse query with AI" },
        { status: 500 }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      return NextResponse.json(
        { error: "No response from AI" },
        { status: 500 }
      );
    }

    // Parse the JSON response
    try {
      // Clean up the response - remove markdown code blocks if present
      let cleanContent = content.trim();
      if (cleanContent.startsWith("```json")) {
        cleanContent = cleanContent.slice(7);
      } else if (cleanContent.startsWith("```")) {
        cleanContent = cleanContent.slice(3);
      }
      if (cleanContent.endsWith("```")) {
        cleanContent = cleanContent.slice(0, -3);
      }
      cleanContent = cleanContent.trim();

      const attributes = JSON.parse(cleanContent);

      if (!Array.isArray(attributes)) {
        throw new Error("Response is not an array");
      }

      // Validate each attribute
      const validatedAttributes = attributes.filter(
        (attr: { attribute?: string; operator?: string; value?: string }) =>
          attr.attribute && attr.operator && attr.value !== undefined
      );

      return NextResponse.json({ attributes: validatedAttributes });
    } catch (parseError) {
      console.error("Failed to parse AI response:", content, parseError);
      return NextResponse.json(
        { error: "Failed to parse AI response" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Parse segment error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

