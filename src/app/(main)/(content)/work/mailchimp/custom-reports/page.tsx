import type { Metadata } from "next";
import Link from "next/link";
import {
  CaseFigure,
  CaseHeader,
  CaseMetaList,
  CaseSection,
} from "@/app/components/case-study";

export const metadata: Metadata = {
  title: "Mailchimp Custom Reports | Bryan King",
  description:
    "CodePen prototype and UserTesting that validated the Custom Reports query builder—and preview-by-default—before six months of engineering.",
};

export default function CustomReportsPage() {
  return (
    <article className="pr-8 pb-8">
      <CaseHeader
        draft={false}
        title="Custom Reports — validate the query builder before six months of eng"
        company="Intuit Mailchimp"
        timeline="Sep–Dec 2022"
        role="Senior Product Designer (contract)"
        summary="Marketers needed custom reports the Marketing Dashboard couldn’t answer. I built a functional CodePen prototype, ran UserTesting with 10 sophisticated marketers, and locked preview-by-default after we found the preview was too hidden. That de-risked ~6 months of engineering. Production shipped nearly pixel-for-pixel in early 2023."
      />

      <CaseMetaList
        items={[
          {
            label: "Method",
            value: "CodePen functional prototype + UserTesting",
          },
          {
            label: "Ship bar",
            value: "Nearly pixel-for-pixel in early 2023",
          },
          {
            label: "Interaction",
            value: "Preview-by-default",
          },
        ]}
      />

      <CaseSection id="problem" title="The problem">
        <p>
          Marketers needed custom reports to answer specific questions about their
          data—questions the Marketing Dashboard couldn&apos;t answer.
        </p>
        <p>
          Dashboards show how marketing is doing generally, over time. Reports answer
          specific questions on fixed time periods for recording and communicating outside
          the system. Example questions:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            &ldquo;How did our July 4th promotion perform compared to Memorial Day?&rdquo;
          </li>
          <li>
            &ldquo;Which audience segments drove the most revenue last quarter?&rdquo;
          </li>
          <li>
            &ldquo;What were total fulfilled orders by email name for Q3?&rdquo;
          </li>
        </ul>
        <p>
          Users needed a way to build custom queries, export the results, and share them
          with stakeholders. The dashboard wasn&apos;t built for this—reports were.
        </p>
      </CaseSection>

      <CaseSection id="hard-part" title="The hard part">
        <p>
          Building a visual query builder is straightforward from a UI perspective. The
          hard part is whether users understand how to use it: metrics, groupings, filters,
          and predicting what a report will look like before running it.
        </p>
        <p>
          Through discussions with engineers, I learned reports could take 2+ minutes to
          run—sometimes much longer under load. Users couldn&apos;t afford trial-and-error.
          If they built the wrong query, they&apos;d waste minutes waiting, then start
          over.
        </p>
        <p>
          The critical question: can users translate their reporting needs into query
          logic? If not, we&apos;d build a feature that frustrated users and wasted
          engineering time.
        </p>
      </CaseSection>

      <CaseSection id="prototype" title="When prototypes need real code">
        <p>
          A Figma click-through wouldn&apos;t answer that question. Query builders require
          users to think—to translate reporting needs into metrics, groupings, and
          filters. I needed to watch them struggle, succeed, and reveal mental models in
          real time.
        </p>
        <p>
          So I built a functional prototype in CodePen using HTML, CSS, and jQuery. Users
          could type, select, and manipulate real elements. localStorage persisted
          reports so they could create, save, and return to their work—without a backend
          or production codebase baggage.
        </p>
        <CaseFigure
          src="/thumbnails/mailchimp/custom-report.png"
          caption="Custom Reports prototype"
        />
      </CaseSection>

      <CaseSection id="testing" title="User testing">
        <p>
          I collaborated with a design manager to set up unmoderated testing on
          UserTesting.com. We recruited 10 users matching Mailchimp&apos;s sophisticated
          marketer ICP. Task-based scenarios (&ldquo;Build a report showing revenue by
          audience&rdquo;) plus open-ended qualitative questions at the end—users
          interacted with the live CodePen prototype.
        </p>
        <p>
          Testing validated the visual query builder approach. Users understood the mental
          model and could successfully build reports. But we found one critical issue: the
          report preview was hidden behind a &ldquo;Show layout preview&rdquo; toggle.
        </p>
        <p>
          My hypothesis was that users would want to preview their query before committing
          to a 2-minute wait. The hypothesis was correct—but the preview was too hidden.
          Users didn&apos;t know the feature existed, so they weren&apos;t using it to
          validate queries.
        </p>
        <p>
          The change: show the preview by default. Don&apos;t make users discover it. Given
          the wait time, every user needed to see the structure before committing.
        </p>
        <p>
          Interactive recreation:{" "}
          <Link href="/experiments/preview-by-default" className="underline">
            /experiments/preview-by-default
          </Link>
        </p>
        <CaseFigure caption="Preview-by-default — query + live preview" />
        <CaseFigure caption="UserTesting insight → UI change" />
      </CaseSection>

      <CaseSection id="shipped" title="What shipped">
        <p>The final design gave users a visual query builder with instant feedback:</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Report setup</strong> — name, audience (subscriber list), date range
          </li>
          <li>
            <strong>Build the query</strong> — metrics, group by, optional filters
          </li>
          <li>
            <strong>Preview &amp; run</strong> — table structure with column headers and
            empty rows, then &ldquo;Run report&rdquo;
          </li>
          <li>
            <strong>Report library</strong> — save, re-run on different date ranges,
            access from a library
          </li>
        </ol>
        <p>
          Custom Reports shipped in early 2023, nearly pixel-perfect to the CodePen
          prototype. I handed off in December 2022; the team shipped shortly after. One
          notable change from prototype to production: the &ldquo;Report type&rdquo;
          dropdown was removed—likely a scope reduction or data architecture decision made
          after I left.
        </p>
        <CaseFigure caption="Prototype frame vs shipped UI" />
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
    </article>
  );
}
