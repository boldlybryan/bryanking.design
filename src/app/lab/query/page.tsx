"use client";

import { useState } from "react";

// Attribute types for context-aware operators
type AttributeType = "numeric" | "text" | "date" | "categorical";

interface AttributeOption {
  value: string;
  label: string;
  type: AttributeType;
  valueOptions?: { value: string; label: string }[];
}

interface AttributeCategory {
  label: string;
  options: AttributeOption[];
}

interface AttributeRow {
  id: string;
  attribute: string;
  operator: string;
  value: string;
}

// Categorized marketing segmentation attributes
const attributeCategories: AttributeCategory[] = [
  {
    label: "Demographic",
    options: [
      { value: "age", label: "Age", type: "numeric" },
      {
        value: "gender",
        label: "Gender",
        type: "categorical",
        valueOptions: [
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
          { value: "non_binary", label: "Non-binary" },
          { value: "prefer_not_to_say", label: "Prefer not to say" },
        ],
      },
      { value: "income", label: "Income", type: "numeric" },
      {
        value: "education",
        label: "Education",
        type: "categorical",
        valueOptions: [
          { value: "less_than_high_school", label: "Less than High School" },
          { value: "high_school", label: "High School" },
          { value: "some_college", label: "Some College" },
          { value: "associates", label: "Associate's Degree" },
          { value: "bachelors", label: "Bachelor's Degree" },
          { value: "masters", label: "Master's Degree" },
          { value: "doctorate", label: "Doctorate" },
        ],
      },
      {
        value: "marital_status",
        label: "Marital Status",
        type: "categorical",
        valueOptions: [
          { value: "single", label: "Single" },
          { value: "married", label: "Married" },
          { value: "divorced", label: "Divorced" },
          { value: "widowed", label: "Widowed" },
          { value: "domestic_partnership", label: "Domestic Partnership" },
        ],
      },
      { value: "occupation", label: "Occupation", type: "text" },
      { value: "household_size", label: "Household Size", type: "numeric" },
    ],
  },
  {
    label: "Geographic",
    options: [
      { value: "country", label: "Country", type: "text" },
      { value: "state_region", label: "State/Region", type: "text" },
      { value: "city", label: "City", type: "text" },
      { value: "zip_code", label: "Zip Code", type: "text" },
      {
        value: "area_type",
        label: "Urban/Suburban/Rural",
        type: "categorical",
        valueOptions: [
          { value: "urban", label: "Urban" },
          { value: "suburban", label: "Suburban" },
          { value: "rural", label: "Rural" },
        ],
      },
      {
        value: "climate_zone",
        label: "Climate Zone",
        type: "categorical",
        valueOptions: [
          { value: "tropical", label: "Tropical" },
          { value: "arid", label: "Arid/Desert" },
          { value: "mediterranean", label: "Mediterranean" },
          { value: "temperate", label: "Temperate" },
          { value: "continental", label: "Continental" },
          { value: "polar", label: "Polar/Arctic" },
        ],
      },
    ],
  },
  {
    label: "Behavioral",
    options: [
      { value: "purchase_frequency", label: "Purchase Frequency", type: "numeric" },
      { value: "last_purchase_date", label: "Last Purchase Date", type: "date" },
      { value: "avg_order_value", label: "Average Order Value", type: "numeric" },
      {
        value: "product_categories",
        label: "Product Categories",
        type: "categorical",
        valueOptions: [
          { value: "electronics", label: "Electronics" },
          { value: "clothing", label: "Clothing & Apparel" },
          { value: "home_garden", label: "Home & Garden" },
          { value: "health_beauty", label: "Health & Beauty" },
          { value: "sports_outdoors", label: "Sports & Outdoors" },
          { value: "food_beverage", label: "Food & Beverage" },
          { value: "automotive", label: "Automotive" },
          { value: "toys_games", label: "Toys & Games" },
        ],
      },
      {
        value: "channel_preference",
        label: "Channel Preference",
        type: "categorical",
        valueOptions: [
          { value: "online_web", label: "Online (Website)" },
          { value: "mobile_app", label: "Mobile App" },
          { value: "in_store", label: "In-Store" },
          { value: "phone", label: "Phone" },
          { value: "social_media", label: "Social Media" },
        ],
      },
      {
        value: "loyalty_status",
        label: "Loyalty Status",
        type: "categorical",
        valueOptions: [
          { value: "none", label: "None" },
          { value: "bronze", label: "Bronze" },
          { value: "silver", label: "Silver" },
          { value: "gold", label: "Gold" },
          { value: "platinum", label: "Platinum" },
        ],
      },
    ],
  },
  {
    label: "Psychographic",
    options: [
      {
        value: "interests",
        label: "Interests",
        type: "categorical",
        valueOptions: [
          { value: "technology", label: "Technology" },
          { value: "travel", label: "Travel" },
          { value: "fitness", label: "Fitness & Wellness" },
          { value: "entertainment", label: "Entertainment" },
          { value: "food_cooking", label: "Food & Cooking" },
          { value: "fashion", label: "Fashion" },
          { value: "finance", label: "Finance & Investing" },
          { value: "arts_culture", label: "Arts & Culture" },
          { value: "gaming", label: "Gaming" },
          { value: "pets", label: "Pets" },
        ],
      },
      {
        value: "lifestyle",
        label: "Lifestyle",
        type: "categorical",
        valueOptions: [
          { value: "active", label: "Active & Athletic" },
          { value: "family_oriented", label: "Family-Oriented" },
          { value: "career_focused", label: "Career-Focused" },
          { value: "eco_conscious", label: "Eco-Conscious" },
          { value: "luxury_seeker", label: "Luxury Seeker" },
          { value: "budget_conscious", label: "Budget-Conscious" },
          { value: "early_adopter", label: "Early Adopter" },
          { value: "homebody", label: "Homebody" },
        ],
      },
      {
        value: "values",
        label: "Values",
        type: "categorical",
        valueOptions: [
          { value: "sustainability", label: "Sustainability" },
          { value: "quality", label: "Quality over Quantity" },
          { value: "convenience", label: "Convenience" },
          { value: "innovation", label: "Innovation" },
          { value: "tradition", label: "Tradition" },
          { value: "community", label: "Community" },
          { value: "independence", label: "Independence" },
        ],
      },
      {
        value: "personality_type",
        label: "Personality Type",
        type: "categorical",
        valueOptions: [
          { value: "analytical", label: "Analytical" },
          { value: "driver", label: "Driver" },
          { value: "expressive", label: "Expressive" },
          { value: "amiable", label: "Amiable" },
        ],
      },
      { value: "brand_affinity", label: "Brand Affinity", type: "text" },
    ],
  },
];

// Operators based on attribute type
const operatorsByType: Record<AttributeType, { value: string; label: string }[]> = {
  numeric: [
    { value: "eq", label: "is" },
    { value: "neq", label: "is not" },
    { value: "gt", label: "greater than" },
    { value: "lt", label: "less than" },
    { value: "gte", label: "at least" },
    { value: "lte", label: "at most" },
  ],
  text: [
    { value: "eq", label: "is" },
    { value: "neq", label: "is not" },
    { value: "contains", label: "contains" },
    { value: "starts_with", label: "starts with" },
    { value: "ends_with", label: "ends with" },
  ],
  date: [
    { value: "eq", label: "is" },
    { value: "before", label: "is before" },
    { value: "after", label: "is after" },
    { value: "in_last", label: "in the last" },
    { value: "not_in_last", label: "not in the last" },
  ],
  categorical: [
    { value: "eq", label: "is" },
    { value: "neq", label: "is not" },
    { value: "in", label: "is any of" },
    { value: "not_in", label: "is none of" },
  ],
};

// Helper to get attribute config from value
function getAttributeConfig(attributeValue: string): AttributeOption | undefined {
  for (const category of attributeCategories) {
    const option = category.options.find((opt) => opt.value === attributeValue);
    if (option) return option;
  }
  return undefined;
}

// Helper to get attribute type from value
function getAttributeType(attributeValue: string): AttributeType {
  const config = getAttributeConfig(attributeValue);
  return config?.type || "text";
}

// Helper to get value options for an attribute
function getValueOptions(attributeValue: string): { value: string; label: string }[] | undefined {
  const config = getAttributeConfig(attributeValue);
  return config?.valueOptions;
}

// Generate unique ID
function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

// Create a new empty row
function createEmptyRow(): AttributeRow {
  return {
    id: generateId(),
    attribute: "",
    operator: "",
    value: "",
  };
}

export default function QueryPage() {
  const [rows, setRows] = useState<AttributeRow[]>([createEmptyRow()]);

  const addRow = () => {
    setRows([...rows, createEmptyRow()]);
  };

  const removeRow = (id: string) => {
    if (rows.length > 1) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const updateRow = (id: string, field: keyof AttributeRow, value: string) => {
    setRows(
      rows.map((row) => {
        if (row.id !== id) return row;

        // If attribute changes, reset operator and value
        if (field === "attribute") {
          return { ...row, attribute: value, operator: "", value: "" };
        }

        return { ...row, [field]: value };
      })
    );
  };

  return (
    <div className="border-t border-neutral-800 pt-4">
      {/* Segment Summary */}
      {rows.some((r) => r.attribute && r.operator && r.value) && (
        <div className="mb-12 p-4 border border-neutral-700 bg-neutral-900/50">
          <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-3">Segment Preview</h2>
          <p className="text-lg">
            {rows
              .filter((r) => r.attribute && r.operator && r.value)
              .map((r, i) => {
                const attrConfig = getAttributeConfig(r.attribute);
                const attrLabel = attrConfig?.label || r.attribute;
                const opLabel =
                  operatorsByType[getAttributeType(r.attribute)]?.find((o) => o.value === r.operator)?.label ||
                  r.operator;
                // Get the display label for the value if it has predefined options
                const valueLabel = attrConfig?.valueOptions?.find((v) => v.value === r.value)?.label || r.value;
                return (
                  <span key={r.id}>
                    {i > 0 && <span className="text-neutral-500"> AND </span>}
                    <span className="text-blue-400">{attrLabel}</span>{" "}
                    <span className="text-neutral-400">{opLabel}</span>{" "}
                    <span className="text-green-400">{valueLabel}</span>
                  </span>
                );
              })}
          </p>
        </div>
      )}

      <h1 className="ml-3 mb-10">Add attributes to build your segment</h1>

      <div className="flex flex-col gap-2">
        {rows.map((row, index) => {
          const attributeType = getAttributeType(row.attribute);
          const operators = row.attribute ? operatorsByType[attributeType] : [];
          const valueOptions = getValueOptions(row.attribute);
          const isLastRow = index === rows.length - 1;

          return (
            <div key={row.id} className="grid grid-cols-[1fr_1fr_1fr_auto] gap-4">
              {/* Attribute Select */}
              <select
                className="p-2 text-3xl border-b border-neutral-500 bg-transparent hover:bg-neutral-800 cursor-pointer transition-colors"
                value={row.attribute}
                onChange={(e) => updateRow(row.id, "attribute", e.target.value)}
              >
                <option value="">Select attribute...</option>
                {attributeCategories.map((category) => (
                  <optgroup key={category.label} label={category.label}>
                    {category.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>

              {/* Operator Select */}
              <select
                className="p-2 text-3xl border-b border-neutral-500 bg-transparent hover:bg-neutral-800 cursor-pointer transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                value={row.operator}
                onChange={(e) => updateRow(row.id, "operator", e.target.value)}
                disabled={!row.attribute}
              >
                <option value="">Select operator...</option>
                {operators.map((op) => (
                  <option key={op.value} value={op.value}>
                    {op.label}
                  </option>
                ))}
              </select>

              {/* Value Input - Select for predefined options, Input for free text */}
              {valueOptions ? (
                <select
                  className="p-2 text-3xl border-b border-neutral-500 bg-transparent hover:bg-neutral-800 cursor-pointer transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  value={row.value}
                  onChange={(e) => updateRow(row.id, "value", e.target.value)}
                  disabled={!row.operator}
                >
                  <option value="">Select value...</option>
                  {valueOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={attributeType === "numeric" ? "number" : attributeType === "date" ? "date" : "text"}
                  className="p-2 text-3xl border-b border-neutral-500 bg-transparent hover:bg-neutral-800 cursor-pointer transition-colors placeholder:text-neutral-600 disabled:opacity-40 disabled:cursor-not-allowed"
                  placeholder="Enter value..."
                  value={row.value}
                  onChange={(e) => updateRow(row.id, "value", e.target.value)}
                  disabled={!row.operator}
                />
              )}

              {/* Action Button: Plus for last row, Trash for others */}
              {isLastRow ? (
                <button
                  onClick={addRow}
                  className="self-center w-10 h-10 flex items-center justify-center border border-neutral-700 hover:bg-neutral-800 hover:border-neutral-500 cursor-pointer transition-colors"
                  aria-label="Add attribute"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={() => removeRow(row.id)}
                  className="self-center w-10 h-10 flex items-center justify-center border border-neutral-700 hover:bg-red-900/50 hover:border-red-700 cursor-pointer transition-colors text-neutral-400 hover:text-red-400"
                  aria-label="Remove attribute"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                  </svg>
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
