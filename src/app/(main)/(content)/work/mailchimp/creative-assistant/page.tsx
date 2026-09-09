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
    "Designed and coded React onboarding for Mailchimp Creative Assistant—brand kit and sample brand—AI creative tooling before ChatGPT.",
};

export default function CreativeAssistantPage() {
  return (
    <article className="pr-8 pb-8">
      <CaseHeader
        title="Creative Assistant onboarding (before ChatGPT)"
        company="Intuit Mailchimp"
        timeline="2021"
        role="Senior Product Designer (contract) — designed and coded the React onboarding"
        summary="If brand setup is wrong, every generative output looks wrong. I designed and built the React onboarding for brand kit import and a sample brand—in 2021, before people already knew how to talk to a model."
      />

      <CaseMetaList
        items={[
          {
            label: "What I shipped",
            value: "Designed + coded React onboarding",
          },
          {
            label: "Surfaces",
            value: "Brand kit import · Sample brand",
          },
          {
            label: "Context",
            value: "2021 AI creative product — pre-ChatGPT",
          },
          {
            label: "Team",
            value: "Mailchimp design + eng partners",
          },
        ]}
      />

      <CaseSection id="context" title="Onboarding is the product">
        <p>
          Early AI creative tools die in setup. Bad brand context in → weird output out →
          user blames the model. In 2021 nobody had a default mental model for this. We
          had to teach the product behavior ourselves.
        </p>
        <p>
          Day one needed two things: get a real brand kit into the system, and give people
          a sample brand so they could try the tool without risking their live identity.
        </p>
      </CaseSection>

      <CaseSection id="brand-kit" title="Brand kit import">
        <p>
          Brand kit isn&apos;t account decoration. It&apos;s training data with a UI.
          People need to know what matters, what&apos;s optional, and how those inputs will
          constrain creative later.
        </p>
        <CaseFigure
          src="/thumbnails/mailchimp/import-brand.png"
          caption="Brand kit import — feeding brand assets into Creative Assistant"
        />
        <p>
          I designed the flow and wrote it in React—loading, validation, and the messy
          middle where uploads are partial but the user still wants to continue.
        </p>
        <CaseFigure caption="[Screenshot: Brand kit partial/complete states and creative guardrail explanation]" />
      </CaseSection>

      <CaseSection id="sample-brand" title="Sample brand">
        <p>
          Not everyone shows up with a tidy brand system. The sample brand is a sandbox:
          poke at AI creative against a coherent fake identity, learn the loops, then
          switch to your own kit.
        </p>
        <CaseFigure
          src="/thumbnails/mailchimp/sample-brand.png"
          caption="Sample brand — try the tools without risking a live brand"
        />
        <CaseCallout>
          <p>
            It also made demos reliable. Design, PM, and eng could argue about model
            behavior against the same reference instead of whoever&apos;s brand happened to
            be in the build.
          </p>
        </CaseCallout>
      </CaseSection>

      <CaseSection id="craft" title="Designed and coded">
        <p>
          Building onboarding in React meant fewer handoff gaps. Missing logos, weird
          contrast, incomplete kits—those show up constantly, and they look like model bugs
          if the UI doesn&apos;t handle them.
        </p>
        <p>
          Critiques kept the trust and clarity bar honest. Eng constrained what the
          assistant could actually use. Shared system language kept it feeling like
          Mailchimp, not a lab bolt-on.
        </p>
      </CaseSection>

      <CaseSection id="outcome" title="What shipped">
        <p>
          Working onboarding for an AI creative product before the industry had a standard
          vocabulary for it. Brand kit in. Sample brand to learn on. React code that
          shipped.
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
            NaviStone platform
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
