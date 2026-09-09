import type { Metadata } from "next";
import Link from "next/link";
import {
  CaseFigure,
  CaseHeader,
  CaseMetaList,
  CaseNextSteps,
  CaseSection,
} from "@/app/components/case-study";

export const metadata: Metadata = {
  title: "Mailchimp Custom Reports | Bryan King",
  description:
    "CodePen prototype that validated query builder UX before 6-month engineering investment.",
};

export default function CustomReportsPage() {
  return (
    <article className="pr-8 pb-8">
      <CaseHeader
        title="Custom Reports"
        company="Intuit Mailchimp"
        timeline="2021–2022"
        role="Senior Product Designer (contract)"
        summary="CodePen prototype that validated query builder UX before 6-month engineering investment"
      />

      <CaseMetaList
        items={[
          {
            label: "Method",
            value: "CodePen functional prototype + UserTesting",
          },
          {
            label: "Ship bar",
            value: "Nearly pixel-for-pixel",
          },
          {
            label: "Interaction",
            value: "Preview-by-default",
          },
        ]}
      />

      <CaseSection id="notes" title="Notes">
        <ul className="list-disc list-inside space-y-2">
          <li>
            Partnered with a design manager to de-risk Custom Reports via CodePen prototype
            + UserTesting before a multi-month eng commitment
          </li>
          <li>Production shipped nearly pixel-for-pixel</li>
          <li>Preview-by-default became the interaction standard</li>
          <li>
            <Link href="/experiments/preview-by-default" className="underline">
              /experiments/preview-by-default
            </Link>
          </li>
          <li>
            Still need my own write-up — what broke in testing, why preview-by-default, what
            we argued about.
          </li>
        </ul>
        <CaseFigure
          src="/thumbnails/mailchimp/custom-report.png"
          caption="Custom Reports"
          note="Drop CodePen link or prototype recording here if it still exists"
        />
        <CaseFigure caption="[Screenshot: Preview-by-default — query + live preview]" />
        <CaseFigure caption="[Screenshot: UserTesting insight → UI change]" />
      </CaseSection>

      <p className="mb-12">
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
