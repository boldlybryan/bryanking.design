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
    "Case study: CodePen functional prototype and UserTesting that de-risked a six-month engineering build for Mailchimp Custom Reports.",
};

export default function CustomReportsPage() {
  return (
    <article className="pr-8 pb-8">
      <CaseHeader
        title="De-risking Custom Reports before six months of engineering"
        company="Intuit Mailchimp"
        timeline="2021–2022"
        role="Senior Product Designer (contract) — UX, functional prototyping, research synthesis"
        summary="Custom Reports was a high-cost bet: a flexible query builder that had to feel obvious and ship pixel-for-pixel. I built a CodePen functional prototype, ran UserTesting against it, and locked a preview-by-default interaction model that de-risked roughly six months of engineering."
      />

      <CaseMetaList
        items={[
          {
            label: "Method",
            value: "CodePen functional prototype + UserTesting",
          },
          {
            label: "Key decision",
            value: "Preview-by-default report experience",
          },
          {
            label: "Risk removed",
            value: "~6 months of engineering investment validated before build-out",
          },
          {
            label: "Ship bar",
            value: "Pixel-for-pixel implementation from validated prototype",
          },
        ]}
      />

      <CaseSection id="context" title="The problem">
        <p>
          Dashboards answer known questions. Custom Reports had to answer the unknown
          ones—the analyst who needs a cut the product hasn&apos;t productized yet. That
          flexibility is expensive. A wrong interaction model would burn a half-year of
          engineering and still leave customers stuck exporting CSVs.
        </p>
        <p>
          The design risk wasn&apos;t &ldquo;can we make a query builder look clean?&rdquo;
          It was &ldquo;will people successfully build, understand, and trust a report
          before they commit to saving it?&rdquo;
        </p>
      </CaseSection>

      <CaseSection id="prototype" title="Prototype first, opinions later">
        <p>
          Static mockups lie about query builders. I built a functional CodePen prototype
          that let people actually assemble reports—filters, fields, and feedback included—
          so research participants exercised the real cognitive load.
        </p>
        <CaseFigure
          src="/thumbnails/mailchimp/custom-report.png"
          caption="Custom Reports — query builder and report surface"
          note="Add CodePen capture or linked prototype recording if still available"
        />
        <p>
          UserTesting sessions ran against that prototype, not a slide deck. Watching
          people succeed, stall, and misread affordances compressed months of debate into
          evidence. We iterated the interaction model while change was still cheap.
        </p>
        <CaseCallout>
          <p>
            This is the same muscle I use as a design engineer: when the cost of being wrong
            is high, move the argument into something runnable.
          </p>
        </CaseCallout>
      </CaseSection>

      <CaseSection id="preview" title="Preview by default">
        <p>
          The pivotal UX decision was preview-by-default. Instead of asking customers to
          configure in the dark and hope the output made sense, the report preview stayed
          present as the source of truth while the query evolved.
        </p>
        <p>
          That single principle clarified layout priority, empty states, error handling,
          and how &ldquo;saved report&rdquo; related to &ldquo;working query.&rdquo; It also
          gave engineering a stable north star: the UI was a live interpretation of the
          query, not a form that occasionally produced a chart.
        </p>
        <CaseFigure caption="[Screenshot: Preview-by-default — query controls beside live report preview]" />
        <CaseFigure caption="[Screenshot: UserTesting insight → UI change (annotated if possible)]" />
      </CaseSection>

      <CaseSection id="outcome" title="What shipped">
        <p>
          Engineering built against a validated model. The shipped product matched the
          prototype pixel-for-pixel where it mattered—proof that research-backed
          interaction design can survive contact with a long build without dying in
          translation.
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
