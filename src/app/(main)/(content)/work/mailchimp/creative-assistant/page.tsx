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
  title: "Mailchimp Creative Assistant | Bryan King",
  description:
    "Designed and coded React onboarding for brand kit import and sample brand (2021, pre-ChatGPT).",
};

export default function CreativeAssistantPage() {
  return (
    <article className="pr-8 pb-8">
      <CaseHeader
        title="Creative Assistant"
        company="Intuit Mailchimp"
        timeline="2021"
        role="Senior Product Designer (contract)"
        summary="Designed and coded React onboarding for brand kit import and sample brand (2021, pre-ChatGPT)."
      />

      <CaseMetaList
        items={[
          {
            label: "Surfaces",
            value: "Brand kit import · Sample brand",
          },
          {
            label: "When",
            value: "2021 — pre-ChatGPT",
          },
        ]}
      />

      <CaseSection id="notes" title="Notes">
        <ul className="list-disc list-inside space-y-2">
          <li>
            Designed and coded Creative Assistant onboarding in React (brand-kit
            completeness, sample brand) with design-manager guidance — shipped to millions
            pre-ChatGPT
          </li>
          <li>Still need my own write-up on the onboarding story.</li>
        </ul>
        <CaseFigure
          src="/thumbnails/mailchimp/import-brand.png"
          caption="Brand kit import"
        />
        <CaseFigure caption="[Screenshot: partial/complete brand kit states]" />
        <CaseFigure
          src="/thumbnails/mailchimp/sample-brand.png"
          caption="Sample brand"
        />
      </CaseSection>

      <p className="mb-12">
          <Link href="/work/mailchimp/analytics-dashboard" className="underline">
            Marketing Dashboard
          </Link>
          <span className="mx-2 opacity-50" aria-hidden>
            ·
          </span>
          <Link href="/work/mailchimp/custom-reports" className="underline">
            Custom Reports
          </Link>
          <span className="mx-2 opacity-50" aria-hidden>
            ·
          </span>
          <Link href="/work/navistone" className="underline">
            NaviStone
          </Link>
        </p>

      <CaseNextSteps
        items={[
          "Additional brand kit steps (permissioned product screenshots)",
          "Sample brand interaction frames or short screen recording",
          "Any cleared copy about model inputs / creative guardrails",
        ]}
      />
    </article>
  );
}
