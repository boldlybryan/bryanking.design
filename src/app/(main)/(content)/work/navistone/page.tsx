import type { Metadata } from "next";
import Link from "next/link";
import {
  CaseFigure,
  CaseHeader,
  CaseMetaList,
  CaseSection,
} from "@/app/components/case-study";

export const metadata: Metadata = {
  title: "NaviStone Multi-tenant Platform | Bryan King",
  description:
    "From agency ops tool to multi-tenant SaaS — product model, RBAC, design system, and the October 2025 prototype that moved the company.",
};

export default function NavistonePage() {
  return (
    <article className="pr-8 pb-8">
      <CaseHeader
        draft={false}
        title="From agency ops tool to multi-tenant platform"
        company="NaviStone"
        timeline="2022–present"
        role="Design engineer — first designer; product definition, UX, design systems, and production React/TypeScript"
        summary="NaviStone needed to stop plateauing as a software-enabled services business and become a real multi-tenant SaaS platform. I defined the product model, ownership and access rules, design system, and core workflows—then shipped a lot of it in code. The October 2025 prototype is what finally got the company moving."
      />

      <CaseMetaList
        items={[
          {
            label: "Scope",
            value:
              "Platform product, RBAC, design system, analytics, ingestion, campaigns",
          },
          {
            label: "Stack",
            value: "Figma, React, TypeScript, shadcn, Storybook, Rails",
          },
          {
            label: "Turning point",
            value:
              "Oct 2025 Rails prototype → Apr 2026 first internal platform release",
          },
          {
            label: "Scale",
            value:
              "Analytics for ~240 client accounts; PII-aware house-file workflows",
          },
        ]}
      />

      <CaseSection id="context" title="Context">
        <p>
          NaviStone had strong domain expertise and durable client relationships, but the
          product still behaved like an internal agency operations tool. Growth had
          plateaued around a services-shaped model. Earlier attempts to stand up a
          &ldquo;real platform&rdquo; kept rebuilding the same ownership model with nicer
          screens—and stalled for the same reasons.
        </p>
        <p>
          The brief was to become multi-tenant SaaS that advertisers, agencies, and
          platform operators could inhabit, without breaking the operational work that
          still paid the bills. I was the first and only designer, which meant owning
          product definition end to end—not just screens.
        </p>
      </CaseSection>

      <CaseSection id="prototype" title="The October 2025 prototype">
        <p>
          Previous platform efforts failed by looking familiar. In October 2025 I spent
          about five days building a working Ruby on Rails proof-of-concept (Render,
          Tailwind, Cursor and Claude, Figma MCP), wired enough to Shopify and Lob to feel
          real.
        </p>
        <p>
          It made the multi-tenant shape concrete: platform admin, advertiser, and agency
          partner personas; workspaces; access control; enough workflow fidelity that
          leadership and customers could argue from a shared artifact instead of a deck.
        </p>
        <p>
          That alignment held. April 2026 shipped the first internal platform release—the
          point where the company stopped debating whether to become SaaS and started
          operating like one.
        </p>
        <p>
          I wrote a longer essay about how that week changed how I work:{" "}
          <Link
            href="https://www.bryanking.net/posts/no-more-hog-butchering"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            No More Hog Butchering
          </Link>
          .
        </p>
        <CaseFigure
          src="/thumbnails/navistone/prototype.png"
          caption="Oct 2025 prototype"
        />
        <CaseFigure caption="Walkthrough video / frames" />
      </CaseSection>

      <CaseSection id="rbac" title="RBAC as the product model">
        <p>
          Multi-tenancy fails if permissions are an afterthought. I co-authored the product
          definition for a three-layer model with eng:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Platform</strong> — NaviStone operators who configure the system and
            support tenants
          </li>
          <li>
            <strong>Advertiser</strong> — brands that own audiences, creative, and results
          </li>
          <li>
            <strong>Agency</strong> — partners who operate on behalf of advertisers without
            becoming the owner of record
          </li>
        </ul>
        <p>
          Access grants sit between those layers: explicit, revocable, and visible in the
          UI. The hard design problem wasn&apos;t drawing role matrices—it was making
          ownership, delegation, and blast radius understandable to people who live in the
          tool all day.
        </p>
        <CaseFigure caption="RBAC / access grants UI" />
      </CaseSection>

      <CaseSection id="workspaces" title="Workspaces, analytics, house-file">
        <p>
          Workspaces became the organizing unit for day-to-day work: tenant context,
          collaborators, and artifacts in one place.
        </p>
        <p>
          Analytics had to serve roughly 240 clients without turning into a one-off report
          factory. I designed website and cross-channel surfaces ops and client teams can
          actually use.
        </p>
        <CaseFigure
          src="/thumbnails/navistone/website-analytics.jpg"
          caption="Website analytics"
        />
        <CaseFigure
          src="/thumbnails/navistone/business-analytics.jpg"
          caption="Business analytics"
        />
        <p>
          House-file ingestion was the unglamorous unlock: moving FTP/PII-laden list
          workflows toward self-serve. Progress, validation, and failure states had to make
          a dangerous operation feel supervised rather than magical.
        </p>
        <CaseFigure caption="House-file ingestion (no PII)" />
      </CaseSection>

      <CaseSection id="systems" title="Iris, then Zenith">
        <p>
          When I joined, the UI was a frankenstein of inherited patterns. Early on I stood
          up Iris: a complete design system in Figma, Vue, and Storybook in four
          weeks—enough coherence to stop the bleeding.
        </p>
        <CaseFigure
          src="/thumbnails/navistone/design-system.png"
          caption="Iris"
        />
        <p>
          As the platform matured, Iris gave way to Zenith: a Figma↔code system grounded in
          shadcn/React patterns, so design and implementation stayed the same conversation.
          The system wasn&apos;t a side quest—it was how a solo design owner stayed
          unblocked while the surface area grew.
        </p>
        <CaseFigure caption="Zenith Figma ↔ React/shadcn" />
      </CaseSection>

      <CaseSection id="shipping" title="Still shipping: IQ Mail, campaigns & segments">
        <p>
          With the platform spine in place, 2026 work turned toward the revenue-critical
          marketing loop: IQ Mail, campaigns, and segments. Same through-line: tenant-aware
          objects, careful audience defaults, and a path from segment to campaign without a
          services bottleneck.
        </p>
        <CaseFigure caption="Campaign builder" />
        <CaseFigure caption="Segment builder" />
      </CaseSection>

      <CaseSection id="outcome" title="Outcome">
        <p>
          The company has a coherent multi-tenant product model, a design system that ships
          in production code, analytics across the client base, and self-serve paths that
          used to stop at services. The Oct 2025 prototype remains the clearest example of
          how I de-risk product: when alignment is the blocker, make the future clickable.
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
    </article>
  );
}
