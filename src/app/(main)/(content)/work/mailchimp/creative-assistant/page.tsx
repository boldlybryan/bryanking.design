import type { Metadata } from "next";
import Link from "next/link";
import {
  CaseFigure,
  CaseHeader,
  CaseMetaList,
  CaseSection,
} from "@/app/components/case-study";

export const metadata: Metadata = {
  title: "Mailchimp Creative Assistant | Bryan King",
  description:
    "Creative Assistant onboarding — brand kit before generation. Designed and shipped React onboarding to millions in ~3 months, pre-ChatGPT.",
};

export default function CreativeAssistantPage() {
  return (
    <article className="pr-8 pb-8">
      <CaseHeader
        draft={false}
        title="Creative Assistant onboarding — brand kit before generation"
        company="Intuit Mailchimp"
        timeline="2021"
        role="Senior Product Designer (contract)"
        summary="Mailchimp acquired Creative Assistant (from Sawa)—AI that could generate marketing assets in seconds, but users got generic results. I redesigned and shipped the React onboarding so people built a complete brand kit before generating: website import, sample brand, or manual upload. Shipped to millions in ~3 months, pre-ChatGPT."
      />

      <CaseMetaList
        items={[
          {
            label: "Surfaces",
            value: "Brand kit import · Sample brand · Manual upload",
          },
          {
            label: "When",
            value: "2021 — pre-ChatGPT",
          },
          {
            label: "Ship",
            value: "~3 months; millions of Mailchimp users",
          },
        ]}
      />

      <CaseSection id="problem" title="The problem">
        <p>
          Mailchimp acquired Creative Assistant from Sawa—an AI graphic design tool that
          could create social graphics, email headers, and ad creative in seconds. The
          technology was promising. The results weren&apos;t.
        </p>
        <p>
          Users jumped straight into generating designs without enough brand context.
          Website scraping pulled assets but dropped people into the designer immediately.
          Incomplete kits—missing colors, fonts, or personality—produced generic,
          unusable output. Users without websites had no path in. There was no validation
          that brand assets were sufficient before generation.
        </p>
        <p>
          The core issue was garbage in, garbage out. The AI needed robust brand
          information to create on-brand designs, and users weren&apos;t providing it.
        </p>
      </CaseSection>

      <CaseSection id="challenge" title="The challenge">
        <p>
          Design an onboarding experience that guides users through a complete brand kit
          before generating, validates completeness and prompts for gaps, offers multiple
          entry points (website, sample brand, manual), and ships in three months with a
          single designer-developer—me.
        </p>
        <p>
          This was my first time using React, inside a complex front-end architecture with
          tricky state management across parent-child components.
        </p>
      </CaseSection>

      <CaseSection id="solution" title="Solution: three paths + validation gate">
        <p>
          I redesigned onboarding so users provided complete brand information before
          generating, with three pathways:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Import my brand</strong> — enter a URL; scrape logos, colors, fonts,
            and images; review complete/incomplete indicators; edit before proceeding
          </li>
          <li>
            <strong>Sample brand</strong> — a fully populated kit for users without
            websites or who want to explore first; customizable to match a real brand
          </li>
          <li>
            <strong>Manual upload</strong> — build from scratch with full editing control
          </li>
        </ol>
        <p>
          All paths converge on brand kit review: logos with application rules, color
          palette with hex values, primary/secondary fonts, personality sliders, and button
          style previews. Users can&apos;t proceed to generation until the kit is
          sufficiently complete.
        </p>
        <CaseFigure
          src="/thumbnails/mailchimp/import-brand.png"
          caption="Brand kit import"
        />
        <CaseFigure
          src="/thumbnails/mailchimp/sample-brand.png"
          caption="Sample brand"
        />
        <CaseFigure caption="Brand kit validation — complete vs incomplete" />
      </CaseSection>

      <CaseSection id="execution" title="Technical execution">
        <p>
          Stack was React and the Mailchimp design system. Timeline was three months,
          including the React learning curve. I designed, coded, and shipped the entire
          onboarding experience—collaborating with one engineer for backend integration
          (scraping and generation), with PM briefs from the Sawa founder and design
          manager guidance, otherwise operating independently.
        </p>
        <p>
          The hard technical pieces were multi-step state across parent-child components
          and integrating with backend systems for scraping and AI generation—constraints
          that only showed up once the flow lived in production code.
        </p>
      </CaseSection>

      <CaseSection id="impact" title="Impact">
        <p>
          Onboarding shipped to millions of Mailchimp users in about three months. Brand
          kit completion improved; confusion about off-brand results dropped; users without
          websites could try the product.
        </p>
        <p>
          After I left, Creative Assistant features were absorbed into core Mailchimp. In
          December 2024 the standalone product was sunset because those capabilities had
          rolled into the main platform—a success of absorption, not abandonment.
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
    </article>
  );
}
