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
    "How I helped turn NaviStone's agency ops tool into a multi-tenant platform—five-day Rails prototype, RBAC, Iris to Zenith, and the work that followed.",
};

export default function NavistonePage() {
  return (
    <article className="pr-8 pb-8">
      <CaseHeader
        title="NaviStone's next platform"
        company="NaviStone"
        timeline="2022–present"
        role="Design engineer. First and only designer. I write the product docs, design the UI, and ship a lot of the React myself."
        summary="NaviStone had real clients and a product that still felt like an internal ops tool. We kept saying platform. We kept shipping agency software with better screens. In October 2025 I spent about five days building a Rails app you could actually click—and I think it changed the direction of the company."
      />

      <CaseMetaList
        items={[
          {
            label: "What I touch",
            value: "Product model, RBAC, design system, analytics, house-file, campaigns",
          },
          {
            label: "Tools",
            value: "Figma, React, TypeScript, shadcn, Storybook, Rails, Cursor, Claude",
          },
          {
            label: "Dates that matter",
            value: "Oct 2025 prototype → Apr 2026 first internal platform release",
          },
          {
            label: "Scale, roughly",
            value: "~240 clients on analytics; house-file flows that handle PII",
          },
        ]}
      />

      <CaseSection id="context" title="The loop">
        <p>
          We&apos;re a direct mail software company with years of domain knowledge and a
          stubborn habit of rebuilding the same internal tool. The UI got nicer. The
          ownership model didn&apos;t. Advertisers still needed us in the middle. Agencies
          still lived in our inbox. &ldquo;Platform&rdquo; was a slide, not a product.
        </p>
        <p>
          Services revenue plateaued. Prior platform attempts stalled for the same reason:
          same mental model, new paint. I got tired of that loop.
        </p>
        <CaseCallout>
          <p>I&apos;m the only designer here. That&apos;s not a flex. It&apos;s the job.</p>
        </CaseCallout>
      </CaseSection>

      <CaseSection id="prototype" title="Five days in October">
        <p>
          October 2025. Me, Cursor, and Claude Sonnet. Ruby on Rails on Render. Tailwind.
          Figma MCP so I wasn&apos;t redrawing every screen by hand. Shopify for CRM data.
          Lob for print and postage.
        </p>
        <p>
          The brief I gave myself: Klaviyo for direct mail. Advertisers sign up, invite
          people into a workspace, pull Shopify data, upload creative, send campaigns.
          Platform admin / advertiser / agency partner as real personas, not sticky notes.
        </p>
        <p>
          In 5 days I shipped a functioning v1—access control, usage-based billing, print
          API. Ugly in places. Clickable everywhere that mattered. Leadership could argue
          about a thing instead of a deck. Customers could poke it. I wrote about this on
          the blog if you want the longer version.
        </p>
        <CaseFigure
          src="/thumbnails/navistone/prototype.png"
          caption="The Oct 2025 prototype"
          note="Swap in walkthrough frames or /videos/navistone-prototype.mp4 when you've got them"
        />
        <p>
          April 2026 we cut the first internal platform release. Same company. Different
          conversation.
        </p>
      </CaseSection>

      <CaseSection id="rbac" title="Who owns what">
        <p>
          Multi-tenant means nothing if you can&apos;t explain who owns an account and who
          is just visiting. I wrote the product docs for three layers:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong className="font-medium">Platform</strong> — us, configuring the system
            and supporting tenants
          </li>
          <li>
            <strong className="font-medium">Advertiser</strong> — the brand that owns
            audiences, creative, results
          </li>
          <li>
            <strong className="font-medium">Agency</strong> — partners who operate on behalf
            of an advertiser without becoming the owner
          </li>
        </ul>
        <p>
          Grants sit between those layers. You can see them. You can revoke them. The hard
          part is the copy and the flows—making blast radius obvious to someone who lives
          in this tool eight hours a day. Who owns this? Who can touch it? What did I just
          give the agency?
        </p>
        <CaseFigure caption="[Screenshot: RBAC / access grants UI — platform, advertiser, agency]" />
      </CaseSection>

      <CaseSection id="workspaces" title="The unglamorous stuff">
        <p>
          Workspaces keep tenant context, people, and artifacts from turning into tribal
          knowledge and twenty browser tabs.
        </p>
        <p>
          Analytics has to work for ~240 clients. Website views. Cross-channel performance.
          Ops and client teams need to read them without a custom report from someone on
          our side every time.
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
          House-file ingestion is FTP, PII, validation errors, and people who will blame
          the UI when a file fails. We pushed it toward self-serve. Progress states have to
          be boring and honest. No magic success toast on a dangerous upload.
        </p>
        <CaseFigure caption="[Screenshot: House-file ingestion — upload/validation (no client PII)]" />
      </CaseSection>

      <CaseSection id="design-system" title="Iris, then Zenith">
        <p>
          Day one UI was frankenstein. In four weeks I stood up Iris—Figma, Vue, Storybook—
          so eng had one set of buttons instead of seventeen.
        </p>
        <CaseFigure
          src="/thumbnails/navistone/design-system.png"
          caption="Iris"
        />
        <p>
          Zenith is the grown-up version: Figma next to React/shadcn. Design and code stay
          in the same conversation. When you&apos;re solo, that&apos;s how you keep
          shipping while the surface area explodes.
        </p>
        <CaseFigure caption="[Screenshot: Zenith in Figma next to matching React/shadcn]" />
      </CaseSection>

      <CaseSection id="iq-mail" title="Still shipping">
        <p>
          2026 is IQ Mail, campaigns, segments. Not done. Same rules as the platform work:
          tenant-aware objects, careful audience defaults, segment → campaign without
          waiting on services to finish the job.
        </p>
        <CaseFigure caption="[Screenshot: IQ Mail / campaign builder]" />
        <CaseFigure caption="[Screenshot: Segment builder]" />
      </CaseSection>

      <CaseSection id="outcome" title="Where we are">
        <p>
          Clickable multi-tenant product. Design system in production code. Analytics
          across the client base. Self-serve paths that used to dead-end in someone&apos;s
          queue. The five-day prototype is still the clearest proof I&apos;ve got: if the
          company is stuck arguing, build the thing.
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
