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
    "Turning an agency ops tool into a multi-tenant martech platform—RBAC, design systems, analytics, and production React/TypeScript.",
};

export default function NavistonePage() {
  return (
    <article className="pr-8 pb-8">
      <CaseHeader
        title="Turning an agency ops tool into a real platform"
        company="NaviStone"
        timeline="2022–present"
        role="Design engineer — first and only designer; product definition, UX, systems, and production React/TypeScript"
        summary="NaviStone ran as a software-enabled services shop and had stalled. I defined how multi-tenant product should work, designed the UI, and shipped a lot of it in code. The Oct 2025 Rails prototype is what finally got the company moving."
      />

      <CaseMetaList
        items={[
          {
            label: "Scope",
            value: "Platform model, RBAC, design system, analytics, ingestion, campaigns",
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
            label: "Scale",
            value: "Analytics for ~240 clients; house-file workflows that touch PII",
          },
        ]}
      />

      <CaseSection id="context" title="Why we were stuck">
        <p>
          The product looked like an internal agency tool because that&apos;s what it was.
          Strong domain knowledge. Real clients. But the software assumed NaviStone people
          would always be in the middle of the work.
        </p>
        <p>
          Revenue had plateaued around the services model. Earlier &ldquo;platform&rdquo;
          attempts kept rebuilding the same thing with nicer screens. Same ownership model.
          Same bottlenecks. Same stall.
        </p>
        <p>
          The job was to become multi-tenant SaaS—advertisers, agencies, and platform ops
          in one system—without blowing up the work that still paid for the company.
        </p>
        <CaseCallout>
          <p>
            I&apos;m the first and only designer. That means I write the product docs, design
            the flows, and often build the front end. I keep decisions written down and
            review them with eng and CS the way I learned in critiques at Mailchimp—so
            nobody has to guess what shipped or why.
          </p>
        </CaseCallout>
      </CaseSection>

      <CaseSection id="prototype" title="Oct 2025: the prototype that changed the conversation">
        <p>
          In October 2025 I spent about five days building a working Ruby on Rails app on
          Render. Tailwind for UI. Cursor and Claude Sonnet for speed. Figma MCP so I
          wasn&apos;t redrawing everything by hand. Shopify and Lob wired in for real
          integrations.
        </p>
        <p>
          It supported the three personas we kept talking about but never made concrete:
          platform admin, advertiser, and agency partner. You could click through the
          shape of the business instead of arguing about slides.
        </p>
        <CaseFigure
          src="/thumbnails/navistone/prototype.png"
          caption="Next-gen platform prototype — early multi-tenant surface"
          note="Replace with higher-res walkthrough frames or embed /videos/navistone-prototype.mp4 when available"
        />
        <p>
          Leadership finally had something shared to react to. Customers could poke at it
          too. That was the turning point. April 2026 we shipped the first internal
          platform release.
        </p>
      </CaseSection>

      <CaseSection id="rbac" title="RBAC is the product model">
        <p>
          Multi-tenancy fails if permissions are an afterthought. I wrote the product docs
          for a three-layer model:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong className="font-medium">Platform</strong> — NaviStone operators who
            configure the system and support tenants
          </li>
          <li>
            <strong className="font-medium">Advertiser</strong> — brands that own audiences,
            creative, and results
          </li>
          <li>
            <strong className="font-medium">Agency</strong> — partners who work on behalf of
            advertisers without owning the account
          </li>
        </ul>
        <p>
          Access grants sit between those layers. Explicit. Revocable. Visible in the UI.
          The hard part wasn&apos;t the matrix—it was making ownership and delegation
          obvious to people who use this every day. Who owns this? Who can touch it? What
          happens if I grant agency access?
        </p>
        <CaseFigure caption="[Screenshot: RBAC / access grants UI — platform, advertiser, agency with grant flows]" />
      </CaseSection>

      <CaseSection id="workspaces" title="Workspaces, analytics, house-file">
        <p>
          Workspaces hold tenant context, people, and artifacts in one place. Without that,
          multi-tenant work turns into a pile of tabs and tribal knowledge.
        </p>
        <p>
          Analytics has to work for ~240 clients. I designed website and cross-channel
          views ops and client teams can actually read—clear performance signals, not a
          wall of charts.
        </p>
        <CaseFigure
          src="/thumbnails/navistone/website-analytics.jpg"
          caption="Website analytics — visitor and behavioral views"
        />
        <CaseFigure
          src="/thumbnails/navistone/business-analytics.jpg"
          caption="Business analytics — cross-channel performance"
        />
        <p>
          House-file ingestion is the ugly, necessary work: FTP uploads, PII, validation,
          failure states. We moved it toward self-serve. Progress and errors have to be
          honest—this is not a flow you can paper over with a success toast.
        </p>
        <CaseFigure caption="[Screenshot: House-file ingestion — upload/validation states, self-serve flow (no client PII)]" />
      </CaseSection>

      <CaseSection id="design-system" title="Iris, then Zenith">
        <p>
          When I started, the UI was a frankenstein. In four weeks I stood up{" "}
          <strong className="font-medium">Iris</strong>: Figma, Vue, Storybook. Enough
          shared language for eng to stop reinventing buttons.
        </p>
        <CaseFigure
          src="/thumbnails/navistone/design-system.png"
          caption="Iris design system — Figma + Vue + Storybook"
        />
        <p>
          Later that became <strong className="font-medium">Zenith</strong>: Figma paired
          with React/shadcn so design and code stay the same conversation. When you&apos;re
          the only designer, a system that ships is how you keep up as the surface area
          grows.
        </p>
        <CaseFigure caption="[Screenshot: Zenith components in Figma alongside matching React/shadcn implementations]" />
      </CaseSection>

      <CaseSection id="iq-mail" title="Still shipping: IQ Mail, campaigns & segments">
        <p>
          2026 work is the marketing loop: IQ Mail, campaigns, segments. Still shipping.
          Same rules as the platform—tenant-aware objects, careful audience defaults, and
          a path from segment to campaign that doesn&apos;t require a services team to
          finish the job.
        </p>
        <CaseFigure caption="[Screenshot: IQ Mail / campaign builder]" />
        <CaseFigure caption="[Screenshot: Segment builder — rules, previews, tenant-safe defaults]" />
      </CaseSection>

      <CaseSection id="outcome" title="What changed">
        <p>
          We have a real multi-tenant model, a design system that lives in production code,
          analytics across the client base, and self-serve paths that used to stop at
          services. The Oct 2025 prototype is still the clearest example of how I work:
          when people are stuck arguing, ship something they can click.
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
