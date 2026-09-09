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
    "Case study: designing and coding React onboarding for Mailchimp Creative Assistant—brand kit import and sample brand—AI creative tooling before ChatGPT.",
};

export default function CreativeAssistantPage() {
  return (
    <article className="pr-8 pb-8">
      <CaseHeader
        title="Creative Assistant onboarding — AI creative tooling before ChatGPT"
        company="Intuit Mailchimp"
        timeline="2021"
        role="Senior Product Designer (contract) — designed and coded React onboarding"
        summary="Creative Assistant needed a trustworthy first run: teach the model a brand, then let people experiment safely. I designed and built the React onboarding for brand kit import and a sample brand—shipping AI product craft before mainstream ChatGPT expectations existed."
      />

      <CaseMetaList
        items={[
          {
            label: "Contribution",
            value: "Designed + coded React onboarding flows",
          },
          {
            label: "Surfaces",
            value: "Brand kit import · Sample brand playground",
          },
          {
            label: "Context",
            value: "2021 AI creative product — pre-ChatGPT mental models",
          },
          {
            label: "Team",
            value: "Embedded with Mailchimp design + eng partners",
          },
        ]}
      />

      <CaseSection id="context" title="The problem">
        <p>
          Generative creative tools fail quietly when onboarding is vague. If the brand
          context is wrong, every output feels off—and users blame the AI instead of the
          setup. In 2021 there was no widespread consumer intuition for &ldquo;chat with
          a model.&rdquo; We had to teach a new kind of product behavior from scratch.
        </p>
        <p>
          Two jobs mattered on day one: get a real brand kit into the system, and give
          people a safe sample brand so they could learn the tool without risking their
          live identity.
        </p>
      </CaseSection>

      <CaseSection id="brand-kit" title="Brand kit import">
        <p>
          The brand kit flow treated onboarding as model training, not account decoration.
          Customers needed to understand what assets mattered, what was optional, and how
          those inputs would constrain creative output later.
        </p>
        <CaseFigure
          src="/thumbnails/mailchimp/import-brand.png"
          caption="Brand kit import — training Creative Assistant on brand assets"
        />
        <p>
          I designed the flow and implemented it in React, closing the gap between
          intention and interaction detail—loading states, validation, and the awkward
          middle where uploads are partial but the user still wants to continue.
        </p>
        <CaseFigure caption="[Screenshot: Brand kit partial/complete states and creative guardrail explanation]" />
      </CaseSection>

      <CaseSection id="sample-brand" title="Sample brand as a learning environment">
        <p>
          Not everyone arrives with a tidy brand system. The sample brand gave customers an
          interactive sandbox: experiment with AI creative tools against a coherent fictional
          identity, learn the loops, then switch to their own kit with confidence.
        </p>
        <CaseFigure
          src="/thumbnails/mailchimp/sample-brand.png"
          caption="Sample brand — interactive environment for experimenting with AI creative tools"
        />
        <CaseCallout>
          <p>
            Designing the sample brand was as much product strategy as UI. It reduced
            activation fear, made demos reliable, and created a shared reference point for
            design, PM, and eng when debating model behavior.
          </p>
        </CaseCallout>
      </CaseSection>

      <CaseSection id="craft" title="Designed and coded">
        <p>
          Shipping onboarding in React meant the prototype wasn&apos;t a handoff artifact—
          it was the path to production. That mattered for an AI surface where edge cases
          (missing logos, odd color contrast, incomplete kits) show up constantly and look
          like &ldquo;model bugs&rdquo; if the UI doesn&apos;t absorb them gracefully.
        </p>
        <p>
          Working inside Mailchimp&apos;s design org kept the work grounded: critiques on
          clarity and trust, engineering constraints on what the assistant could actually
          use, and a shared system language so the new AI entry points felt like Mailchimp—
          not a bolted-on lab experiment.
        </p>
      </CaseSection>

      <CaseSection id="outcome" title="What it demonstrates">
        <p>
          Early AI product design is mostly onboarding design: teach the system, teach the
          human, and keep both from embarrassing each other. Creative Assistant was that
          problem in production—before the industry had a standard vocabulary for it.
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
