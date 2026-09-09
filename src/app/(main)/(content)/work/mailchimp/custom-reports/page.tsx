import type { Metadata } from "next";
import Link from "next/link";
import {
  CaseCallout,
  CaseFigure,
  CaseHeader,
  CaseMetaList,
  CaseNextSteps,
  CaseSection,
} from "@/app/components/case-study";

export const metadata: Metadata = {
  title: "Mailchimp Custom Reports | Bryan King",
  description:
    "CodePen prototype and UserTesting that validated Mailchimp Custom Reports before ~6 months of engineering.",
};

export default function CustomReportsPage() {
  return (
    <article className="pr-8 pb-8">
      <CaseHeader
        title="Custom Reports"
        company="Intuit Mailchimp"
        timeline="2021–2022"
        role="Senior Product Designer (contract)"
        summary="Mockups lie about query builders. I made a CodePen you could use, ran UserTesting on it, and we stopped guessing. Preview stayed up while you changed the query. Eng spent ~6 months building that—not discovering in month five that the UX was wrong. Shipped pixel-for-pixel."
      />

      <CaseMetaList
        items={[
          {
            label: "How",
            value: "Working CodePen + UserTesting",
          },
          {
            label: "The call",
            value: "Preview by default",
          },
          {
            label: "What we avoided",
            value: "~6 months of eng on a wrong interaction model",
          },
          {
            label: "Ship bar",
            value: "Pixel-for-pixel from the prototype",
          },
        ]}
      />

      <CaseSection id="context" title="Expensive to get wrong">
        <p>
          Dashboards answer the questions you already know. Custom Reports had to answer
          the weird ones—the cut nobody productized yet. That flexibility is real eng
          time. Get the interaction model wrong and you burn a half-year and customers
          still live in CSV.
        </p>
        <p>
          Nobody was arguing about whether the buttons looked nice. The question was: can
          someone build a report, understand it, and trust it before they hit save?
        </p>
      </CaseSection>

      <CaseSection id="prototype" title="CodePen">
        <p>
          I built a functional prototype in CodePen. Filters, fields, live feedback.
          Research participants used the thing—they didn&apos;t narrate a Figma file.
        </p>
        <CaseFigure
          src="/thumbnails/mailchimp/custom-report.png"
          caption="Custom Reports"
          note="Drop CodePen link or prototype recording here if it still exists"
        />
        <p>
          UserTesting on that prototype ended a lot of meetings early. You watch someone
          stall on an affordance and the debate is over. We changed the model while change
          was still cheap.
        </p>
        <CaseCallout>
          <p>Stop debating the mockup. Put something clickable in front of people.</p>
        </CaseCallout>
      </CaseSection>

      <CaseSection id="preview" title="Preview by default">
        <p>
          Don&apos;t make people configure in the dark. Keep the report preview up while
          the query changes. That one decision sorted layout, empty states, errors, and
          what &ldquo;saved&rdquo; even meant relative to the working query.
        </p>
        <p>
          Eng&apos;s job got clearer: build a live read of the query, not a form that
          occasionally coughs up a chart.
        </p>
        <CaseFigure caption="[Screenshot: Preview-by-default — query + live preview]" />
        <CaseFigure caption="[Screenshot: UserTesting insight → UI change]" />
      </CaseSection>

      <CaseSection id="outcome" title="Shipped">
        <p>
          Validated model. ~6 months of engineering. Pixel-for-pixel where it mattered. We
          didn&apos;t find out in month five that the UX was wrong.
        </p>
        <p className="pt-2">
          <Link href="/work/mailchimp/analytics-dashboard" className="underline">
            Marketing Dashboard
          </Link>
          <span className="mx-2 opacity-50" aria-hidden>
            ·
          </span>
          <Link href="/work/mailchimp/creative-assistant" className="underline">
            Creative Assistant
          </Link>
        </p>
      </CaseSection>

      <CaseNextSteps
        items={[
          "CodePen embed link or archived prototype video",
          "UserTesting highlight reel / permissioned quotes",
          "Side-by-side: prototype frame vs shipped UI (pixel-for-pixel claim)",
          "Preview-by-default annotated screenshot",
        ]}
      />
    </article>
  );
}
