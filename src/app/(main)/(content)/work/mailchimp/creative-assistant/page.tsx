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
  title: "Mailchimp Creative Assistant | Bryan King",
  description:
    "Designed and coded React onboarding for Mailchimp Creative Assistant—brand kit and sample brand—before ChatGPT.",
};

export default function CreativeAssistantPage() {
  return (
    <article className="pr-8 pb-8">
      <CaseHeader
        title="Creative Assistant"
        company="Intuit Mailchimp"
        timeline="2021"
        role="Senior Product Designer (contract). Designed it. Coded the React onboarding."
        summary="This was 2021. Nobody knew how to talk to a model yet. Creative Assistant still needed a first run that didn't make every output look broken. I designed the onboarding and wrote the React: get a brand kit in, or play on a sample brand first."
      />

      <CaseMetaList
        items={[
          {
            label: "What I did",
            value: "Designed + coded React onboarding",
          },
          {
            label: "Surfaces",
            value: "Brand kit import. Sample brand.",
          },
          {
            label: "When",
            value: "2021 — pre-ChatGPT",
          },
          {
            label: "Room",
            value: "Mailchimp design + eng",
          },
        ]}
      />

      <CaseSection id="context" title="Setup or die">
        <p>
          Bad brand context in, weird output out, user blames the AI. Yeah, duh—except in
          2021 we were still inventing the onboarding for that failure mode. There was no
          consumer habit for this product category yet.
        </p>
        <p>
          Two jobs on day one. Import a real brand kit. Or give people a sample brand so
          they could mess around without risking their live identity.
        </p>
      </CaseSection>

      <CaseSection id="brand-kit" title="Brand kit">
        <p>
          Logos, colors, the assets that actually constrain creative later. People need to
          know what matters and what&apos;s optional. Partial uploads happen. Validation
          fails. Users still want to continue. Those states lived in the React I wrote.
        </p>
        <CaseFigure
          src="/thumbnails/mailchimp/import-brand.png"
          caption="Brand kit import"
        />
        <CaseFigure caption="[Screenshot: partial/complete brand kit states]" />
      </CaseSection>

      <CaseSection id="sample-brand" title="Sample brand">
        <p>
          Not everyone shows up with a tidy brand system. The sample brand is a sandbox—
          try the tools against a coherent fake identity, learn the loops, switch to yours
          later.
        </p>
        <CaseFigure
          src="/thumbnails/mailchimp/sample-brand.png"
          caption="Sample brand"
        />
        <CaseCallout>
          <p>
            Also: demos stopped depending on whoever&apos;s brand happened to be in the
            build that week. Design, PM, and eng could argue about the same reference.
          </p>
        </CaseCallout>
      </CaseSection>

      <CaseSection id="craft" title="I wrote the React">
        <p>
          Missing logos. Odd contrast. Incomplete kits. Those look like model bugs if the
          UI shrugs. Building onboarding in code meant fewer handoff gaps and fewer
          &ldquo;we&apos;ll fix it in eng&rdquo; moments that never get fixed.
        </p>
        <p>
          Critiques kept the trust bar honest. Eng said what the assistant could actually
          use. Shared system so it felt like Mailchimp, not a lab experiment glued on.
        </p>
      </CaseSection>

      <CaseSection id="outcome" title="Shipped">
        <p>
          Working onboarding for an AI creative product before the industry had vocabulary
          for it. Brand kit. Sample brand. React that shipped.
        </p>
        <p className="pt-2">
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
      </CaseSection>

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
