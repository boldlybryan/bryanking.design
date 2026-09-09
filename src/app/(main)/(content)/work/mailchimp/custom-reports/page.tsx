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
    "CodePen prototype and UserTesting that validated Mailchimp Custom Reports before a six-month engineering build.",
};

export default function CustomReportsPage() {
  return (
    <article className="pr-8 pb-8">
      <CaseHeader
        title="Custom Reports: prove the UX before six months of eng"
        company="Intuit Mailchimp"
        timeline="2021–2022"
        role="Senior Product Designer (contract) — UX, functional prototype, research"
        summary="A flexible query builder is expensive to get wrong. I built a working CodePen prototype, ran UserTesting on it, and locked preview-by-default. That validated the interaction model before ~6 months of engineering. Shipped pixel-for-pixel."
      />

      <CaseMetaList
        items={[
          {
            label: "Method",
            value: "CodePen functional prototype + UserTesting",
          },
          {
            label: "Decision",
            value: "Preview by default",
          },
          {
            label: "Risk cut",
            value: "~6 months of eng validated before build-out",
          },
          {
            label: "Ship bar",
            value: "Pixel-for-pixel from the validated prototype",
          },
        ]}
      />

      <CaseSection id="context" title="The problem">
        <p>
          Dashboards answer the questions you already know. Custom Reports had to answer
          the ones you don&apos;t—the cut the product hasn&apos;t productized yet. That
          flexibility costs real eng time. A bad interaction model burns a half-year and
          customers still export CSV.
        </p>
        <p>
          The question wasn&apos;t whether we could make a query builder look tidy. It was
          whether someone could build a report, understand it, and trust it before they
          hit save.
        </p>
      </CaseSection>

      <CaseSection id="prototype" title="CodePen + UserTesting">
        <p>
          Static mockups lie about query builders. I built a functional CodePen prototype—
          filters, fields, live feedback—so people could do the actual work in research
          sessions.
        </p>
        <CaseFigure
          src="/thumbnails/mailchimp/custom-report.png"
          caption="Custom Reports — query builder and report surface"
          note="Add CodePen capture or linked prototype recording if still available"
        />
        <p>
          UserTesting ran against that prototype, not slides. You watch someone stall on
          an affordance and the debate ends. We changed the interaction model while changes
          were still cheap.
        </p>
        <CaseCallout>
          <p>
            When the cost of being wrong is high, put the argument in something people can
            click.
          </p>
        </CaseCallout>
      </CaseSection>

      <CaseSection id="preview" title="Preview by default">
        <p>
          The big UX call: preview by default. Don&apos;t make people configure in the dark
          and hope. Keep the report preview up while the query changes. That drove layout,
          empty states, errors, and how a saved report related to a working query.
        </p>
        <p>
          Eng had a clear target: the UI is a live read of the query, not a form that
          sometimes spits out a chart.
        </p>
        <CaseFigure caption="[Screenshot: Preview-by-default — query controls beside live report preview]" />
        <CaseFigure caption="[Screenshot: UserTesting insight → UI change (annotated if possible)]" />
      </CaseSection>

      <CaseSection id="outcome" title="What shipped">
        <p>
          Engineering built the validated model. Shipped UI matched the prototype
          pixel-for-pixel where it mattered. Six months of build, without discovering the
          UX was wrong in month five.
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
