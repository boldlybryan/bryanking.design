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
  title: "NaviStone Multi-tenant Platform | Bryan King",
  description:
    "Case study: transforming an agency ops tool into a multi-tenant martech platform—RBAC, design systems, workspaces, analytics, and production React/TypeScript.",
};

export default function NavistonePage() {
  return (
    <article className="pr-8 pb-8">
      <CaseHeader
        title="From agency ops tool to multi-tenant martech platform"
        company="NaviStone"
        timeline="2022–present"
        role="Design engineer — sole design owner; product definition, UX, design systems, and production React/TypeScript"
        summary="NaviStone needed to stop plateauing as a software-enabled services business and become a real multi-tenant SaaS platform. I defined the product model, ownership and access rules, design system, and core workflows—then shipped them in code alongside engineering."
      />

      <CaseMetaList
        items={[
          {
            label: "Scope",
            value: "Platform product, RBAC, design system, analytics, ingestion, campaigns",
          },
          {
            label: "Stack",
            value: "Figma, React, TypeScript, shadcn, Storybook, Rails prototype",
          },
          {
            label: "Turning point",
            value: "Oct 2025 Rails prototype → Apr 2026 first internal platform release",
          },
          {
            label: "Scale context",
            value: "Analytics serving ~240 clients; PII-aware house-file workflows",
          },
        ]}
      />

      <CaseSection id="context" title="The problem">
        <p>
          NaviStone had strong domain expertise and durable client relationships, but the
          product still looked like an internal agency operations tool. Growth had
          plateaued in a services-shaped model. Prior attempts to stand up a &ldquo;real
          platform&rdquo; reused the same mental model—and stalled for the same reasons.
        </p>
        <p>
          The brief was existential: evolve into a multi-tenant martech platform (NXP/CDP
          direction) that advertisers, agencies, and platform operators could actually
          inhabit—without breaking the operational reality that still paid the bills.
        </p>
        <CaseCallout>
          <p>
            I was the first and only designer. That meant owning product definition end to
            end—not just screens. It also meant being deliberate about collaboration habits
            I&apos;d learned on larger design teams at Mailchimp/Intuit, so decisions stayed
            legible to eng, CS, and leadership.
          </p>
        </CaseCallout>
      </CaseSection>

      <CaseSection id="role" title="How I worked">
        <p>
          Day to day I moved between three altitudes: product framing (who is the tenant,
          what do they own, what can they grant), interaction design, and production
          front-end. When the fastest way to de-risk a decision was a working surface, I
          built it.
        </p>
        <p>
          Being sole design owner is high leverage and high risk. I countered the &ldquo;hero
          designer&rdquo; failure mode with written product rules, shared Figma↔code
          systems, stakeholder interviews across eng/PM/CS/ops, and prototypes that other
          people could click—not decks they had to interpret.
        </p>
      </CaseSection>

      <CaseSection id="prototype" title="Chapter 1 — The Oct 2025 prototype as turning point">
        <p>
          Previous platform efforts failed by looking familiar. In October 2025 I ran a
          concentrated solo build: a Ruby on Rails proof-of-concept hosted on Render,
          styled with Tailwind, accelerated with Cursor and Claude, and wired to Figma via
          MCP so design intent could move into working UI without a translation layer.
        </p>
        <p>
          The prototype wasn&apos;t a visual exploration—it was a political and product
          instrument. It made multi-tenant reality concrete: advertiser, agency partner,
          and platform admin personas; Shopify and Lob integrations; and enough workflow
          fidelity that leadership and customers could argue about the future from a shared
          artifact.
        </p>
        <CaseFigure
          src="/thumbnails/navistone/prototype.png"
          caption="Next-gen platform prototype — early multi-tenant surface used to align the business"
          note="Replace with higher-res walkthrough frames or embed /videos/navistone-prototype.mp4 when available"
        />
        <p>
          That alignment held. April 2026 shipped the first internal platform release—the
          point where the company stopped debating whether to become SaaS and started
          operating like one.
        </p>
      </CaseSection>

      <CaseSection id="rbac" title="RBAC as product definition">
        <p>
          Multi-tenancy wasn&apos;t a permissions spreadsheet bolted on later. It was the
          product. I defined a three-layer model:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong className="font-medium">Platform</strong> — NaviStone operators who
            configure the system of record and support tenants
          </li>
          <li>
            <strong className="font-medium">Advertiser</strong> — brands who own audiences,
            creative, and performance outcomes
          </li>
          <li>
            <strong className="font-medium">Agency</strong> — partners who operate on behalf
            of advertisers without becoming the owner of record
          </li>
        </ul>
        <p>
          Access grants sat between those layers: explicit, revocable, and visible in the
          UI. The hard design problem wasn&apos;t drawing role matrices—it was making
          ownership, delegation, and blast radius understandable to people who live in the
          tool all day.
        </p>
        <CaseFigure caption="[Screenshot: RBAC / access grants UI — platform, advertiser, agency with grant flows]" />
      </CaseSection>

      <CaseSection id="workspaces" title="Workspaces, analytics, and house-file ingestion">
        <p>
          Workspaces became the organizing unit for day-to-day work: a place where tenant
          context, collaborators, and artifacts stayed coherent as the platform grew past
          single-team usage.
        </p>
        <p>
          Analytics had to serve roughly 240 clients without turning into a one-off report
          factory. I designed cross-channel and website analytics surfaces that operations
          and client teams could actually use—prioritizing clarity of performance signals
          over dashboard theater.
        </p>
        <CaseFigure
          src="/thumbnails/navistone/website-analytics.jpg"
          caption="Website analytics — visitor and behavioral insight surfaces"
        />
        <CaseFigure
          src="/thumbnails/navistone/business-analytics.jpg"
          caption="Business analytics — cross-channel performance for campaign optimization"
        />
        <p>
          House-file ingestion was the unglamorous unlock: moving FTP/PII-laden list
          workflows toward self-serve without pretending compliance was a tooltip. The
          design problem was trust—progress, validation, and failure states that made a
          dangerous operation feel supervised rather than magical.
        </p>
        <CaseFigure caption="[Screenshot: House-file ingestion — upload/validation states, self-serve flow (no client PII)]" />
      </CaseSection>

      <CaseSection id="design-system" title="Iris, then Zenith — design system as shipping infrastructure">
        <p>
          When I joined, the UI was a frankenstein of inherited patterns. Early on I stood
          up <strong className="font-medium">Iris</strong>: a complete design system in
          Figma, Vue, and Storybook in four weeks—enough coherence to stop the bleeding and
          give engineering a shared language.
        </p>
        <CaseFigure
          src="/thumbnails/navistone/design-system.png"
          caption="Iris design system — Figma + Vue + Storybook foundation"
        />
        <p>
          As the platform matured, Iris gave way to{" "}
          <strong className="font-medium">Zenith</strong>: a Figma↔code system grounded in
          shadcn/React patterns, so design and implementation stayed the same conversation.
          The system wasn&apos;t a side quest—it was how a solo design owner stayed
          unblocked while the product surface area exploded.
        </p>
        <CaseFigure caption="[Screenshot: Zenith components in Figma alongside matching React/shadcn implementations]" />
      </CaseSection>

      <CaseSection id="iq-mail" title="Chapter 2 — IQ Mail, campaigns & segments">
        <p>
          With the platform spine in place, 2026 work turned toward the revenue-critical
          marketing loop: IQ Mail, campaigns, and segments. This chapter is still shipping—
          treated here as an addendum rather than a closed case.
        </p>
        <p>
          The design through-line is the same as the platform work: tenant-aware objects,
          safe defaults around audience definition, and interfaces that let operators move
          from segment → campaign without a services bottleneck.
        </p>
        <CaseFigure caption="[Screenshot: IQ Mail / campaign builder]" />
        <CaseFigure caption="[Screenshot: Segment builder — rules, previews, tenant-safe defaults]" />
      </CaseSection>

      <CaseSection id="outcome" title="What changed">
        <p>
          The company has a coherent multi-tenant product model, a design system that
          ships in production code, analytics that scale across the client base, and a
          path from services muscle memory to self-serve platform workflows. The Oct 2025
          prototype remains the clearest example of how I work: when alignment is the
          blocker, make the future clickable.
        </p>
        <p>
          For hiring managers evaluating team fit: sole ownership at NaviStone proves
          end-to-end range. Mailchimp proves I can also operate inside a mature design org—
          critiques, shared systems, and shipping through other people&apos;s constraints.
          I want the next role to use both muscles.
        </p>
        <p className="pt-2">
          <Link href="/work/mailchimp/analytics-dashboard" className="underline">
            Mailchimp Marketing Dashboard
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
          <Link href="/work/mailchimp/creative-assistant" className="underline">
            Creative Assistant
          </Link>
        </p>
      </CaseSection>

      <CaseNextSteps
        items={[
          "Prototype walkthrough video at /videos/navistone-prototype.mp4 (or Figma prototype embeds)",
          "RBAC / access grants UI screenshots (scrub any tenant identifiers)",
          "House-file ingestion flow screenshots (no PII; synthetic filenames only)",
          "Zenith Figma ↔ code comparison frames",
          "IQ Mail campaign builder and segment builder screenshots",
          "Optional: before/after of inherited UI vs Iris/Zenith",
        ]}
      />
    </article>
  );
}
