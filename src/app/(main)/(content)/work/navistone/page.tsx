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
  title: "NaviStone Multi-tenant Platform | Bryan King",
  description:
    "NaviStone next platform — Oct 2025 Rails prototype and working notes on the multi-tenant work that followed.",
};

export default function NavistonePage() {
  return (
    <article className="pr-8 pb-8">
      <CaseHeader
        title="NaviStone's next platform"
        company="NaviStone"
        timeline="2022–present"
        role="Design engineer. First designer in company history. Official title: Senior Product Designer."
        summary="I've worked for a direct mail software company for a few years now, and we've not been able to get this done, much to my dismay. In October 2025, me, Cursor, and Claude Sonnet 4.5 built a Ruby on Rails app—Klaviyo for direct mail. In 5 days I shipped a functioning v1. And I think it's changed the direction of the company, if not only my career."
      />

      <CaseMetaList
        items={[
          {
            label: "What I touch",
            value: "product model, RBAC, design system, analytics, house-file, campaigns",
          },
          {
            label: "Tools",
            value: "Figma, React, TypeScript, shadcn, Storybook, Rails, Cursor, Claude",
          },
          {
            label: "Dates",
            value: "Oct 2025 prototype → Apr 2026 first internal platform release",
          },
          {
            label: "Scale",
            value: "analytics for ~240 client accounts",
          },
        ]}
      />

      <CaseSection id="prototype" title="The prototype">
        <p>
          In October 2025, me, Cursor, and Claude Sonnet 4.5 began building a Ruby on Rails
          app. It&apos;s goal: to build Klaviyo for direct mail. Allow Advertisers to sign
          themselves up, invite collaborators to their private workspace, integrate with
          their Shopify store to pull in CRM data, upload postcard creative files, and send
          campaigns to their customers.
        </p>
        <p>
          I&apos;ve worked for a direct mail software company for a few years now, and
          we&apos;ve not been able to get this done, much to my dismay.
        </p>
        <p>
          As a designer, I&apos;ve had grand ambitions of building a multi-channel lifecycle
          marketing tool, one that allows advertisers to send email, SMS, postcards, and
          more to their customers.
        </p>
        <p>It seems straightforward, but I guess most things that do are not.</p>
        <p>
          Over the last couple of years, I have tried and failed to make progress, with the
          help of our AI overlords. I don&apos;t have the backend chops to do it on my own,
          and while earlier AI models could help me make dents, I was never able to get
          something working in reasonable time.
        </p>
        <p>
          But whatever voodoo magic is happening at Cursor and Anthropic has changed that.
        </p>
        <p>
          In 5 days, I shipped a functioning v1, with robust access control, usage-based
          billing, and a print-postage API.
        </p>
        <p>
          And I think it&apos;s changed the direction of the company, if not only my career.
        </p>
        <p>
          No, I&apos;m not claiming to be the billion-dollar engineer, and my company
          isn&apos;t the 70-person unicorn. Not yet, anyway.
        </p>
        <p>
          But what happened over those 5 days matters. One person, armed with AI, can ship
          big things fast. Really fast.
        </p>
        <p>
          There&apos;s a skillset I have that, paired with agentic coding tools, makes me
          capable of being a surgeon. Just enough back-end knowledge to architect the
          system, design sense to build something people actually want, front-end chops to
          ship a working interface, and product judgment to know what matters.
        </p>
        <p>
          If I were deficient in design but world-class at backend, it wouldn&apos;t work.
          I&apos;d get kneecapped by my own system rather than build something valuable for
          real people. If I were purely a designer with no technical chops, I&apos;d never
          get past the implementation details.
        </p>
        <p>
          AI amplifies these skills. It lets me execute on all of them at once. But it also
          hallucinates, writes suboptimal code, and generates verbose documentation that
          nobody can parse.
        </p>
        <p>
          Five days, one person, a functioning product with multitenancy, billing, and
          three API integrations.
        </p>
        <p>April 2026 we shipped the first internal platform release.</p>
        <p>
          <Link
            href="https://www.bryanking.net/posts/no-more-hog-butchering"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Full essay on the blog
          </Link>
        </p>
        <CaseFigure
          src="/thumbnails/navistone/prototype.png"
          caption="The Oct 2025 prototype"
          note="Swap in walkthrough frames or /videos/navistone-prototype.mp4 when you've got them"
        />
      </CaseSection>

      <CaseSection id="notes" title="Other work (notes)">
        <p>These are working notes until I write them properly.</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            First designer in company history; sole design + front-end owner for the new
            multi-tenant platform; set product direction with eng/CTO leads across Campaigns
            and Data Foundations.
          </li>
          <li>
            Built Zenith (@zenith/ui, shadcn) with 1:1 Figma↔code; migrated auth, settings,
            admin, and core workflows.
          </li>
          <li>
            Drove platform architecture in the UI layer — workspaces, tenancy shell,
            campaign/segment/ingestion surfaces — and shipped them design-through-merge.
          </li>
          <li>
            Analytics for ~240 client accounts; Apr 2026 first platform release (invites,
            workspace switching, agency admin); hardened house-file upload so CS/ops could
            run ingestion without orphaned jobs.
          </li>
          <li>
            Earlier: Figma + Vue + Storybook system in 4 weeks (Iris); prototypes that
            killed six-figure eng investments.
          </li>
          <li>
            Co-authored foundational multi-tenant RBAC with eng (platform / advertiser /
            agency) and implemented the admin UX.
          </li>
          <li>
            Design lead across two eng teams — Linear design intake/boards for CTO leads; FE
            review on fulfillment-critical PRs.
          </li>
        </ul>
        <CaseFigure
          src="/thumbnails/navistone/website-analytics.jpg"
          caption="Website analytics"
        />
        <CaseFigure
          src="/thumbnails/navistone/business-analytics.jpg"
          caption="Business analytics"
        />
        <CaseFigure caption="[Screenshot: RBAC / access grants UI — platform, advertiser, agency]" />
        <CaseFigure caption="[Screenshot: House-file ingestion — upload/validation (no client PII)]" />
        <CaseFigure
          src="/thumbnails/navistone/design-system.png"
          caption="Iris"
        />
        <CaseFigure caption="[Screenshot: Zenith in Figma next to matching React/shadcn]" />
        <CaseFigure caption="[Screenshot: IQ Mail / campaign builder]" />
        <CaseFigure caption="[Screenshot: Segment builder]" />
      </CaseSection>

      <CaseSection id="still" title="Still to write">
        <p>
          Still need my own write-up on RBAC / access grants, house-file ingestion,
          Iris→Zenith, and IQ Mail campaigns &amp; segments. Notes above until then.
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
