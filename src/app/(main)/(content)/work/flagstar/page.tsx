import type { Metadata } from "next";
import Link from "next/link";
import {
  CaseFigure,
  CaseHeader,
  CaseMetaList,
  CaseSection,
} from "@/app/components/case-study";

export const metadata: Metadata = {
  title: "Flagstar Bank | Bryan King",
  description:
    "Sole front-end owner at Flagstar Bank, 2015–2021 — design system, WCAG AA / ADA, AEM site builder, and marketing site features.",
};

export default function FlagstarPage() {
  return (
    <article className="pr-8 pb-8">
      <CaseHeader
        draft={false}
        title="Flagstar"
        company="Flagstar Bank"
        timeline="2015–2021"
        role="Front-end Developer — sole front-end owner for the bank’s web properties and martech tooling"
        summary="Sole front-end owner for Flagstar’s marketing web properties and martech tooling for six years. Built the design system from scratch, white-labeled it for acquisitions including Desert Community Bank, drove WCAG AA compliance that resolved a 2017 ADA lawsuit, and shipped a no-code AEM site builder so marketing could publish without eng queues."
      />

      <CaseMetaList
        items={[
          {
            label: "Focus",
            value: "Design system, WCAG AA / ADA, AEM site builder, marketing site features",
          },
          {
            label: "Years",
            value: "2015–2021",
          },
          {
            label: "Scope",
            value: "Thousands of pages; two acquisition re-skins; company rebrand",
          },
        ]}
      />

      <CaseSection id="system" title="Design system and Desert Community Bank">
        <p>
          I owned front-end architecture for five-plus years. During the 2017 redesign I
          built a design system from scratch—pure CSS, no external dependencies—then
          white-labeled it via design tokens for two bank acquisitions, including Desert
          Community Bank. The system carried through a complete company rebrand across
          thousands of pages.
        </p>
        <CaseFigure
          src="/thumbnails/flagstar/home-page.png"
          caption="Flagstar.com"
        />
        <CaseFigure
          src="/thumbnails/flagstar/product-page.png"
          caption="Regionalized product pages"
        />
      </CaseSection>

      <CaseSection id="accessibility" title="WCAG AA and the 2017 ADA lawsuit">
        <p>
          Accessibility wasn&apos;t a checklist exercise. Achieving WCAG AA compliance
          resolved a 2017 ADA lawsuit and raised the baseline for everyone using the
          bank&apos;s public sites—search, locator, product pages, and the rest of the
          marketing surface.
        </p>
        <CaseFigure
          src="/thumbnails/flagstar/search-results.png"
          caption="Site search"
        />
        <CaseFigure
          src="/thumbnails/flagstar/locator.png"
          caption="Branch & ATM locator"
        />
      </CaseSection>

      <CaseSection id="builder" title="AEM site builder">
        <p>
          Marketing needed to ship pages without waiting on an eng queue. I built a
          no-code website builder on Adobe Experience Manager—custom components,
          responsive layout grids, and templating—so the team could publish independently.
          It predated the wave of visual builders that later became table stakes.
        </p>
      </CaseSection>

      <CaseSection id="archives" title="Archives">
        <p>
          Public snapshots of the work as it lived on the web:
        </p>
        <p>
          <Link
            href="https://web.archive.org/web/20181227102529/https://www.flagstar.com/"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Flagstar (2018)
          </Link>
          <span className="mx-2 opacity-50" aria-hidden>
            ·
          </span>
          <Link
            href="https://web.archive.org/web/20180604103204/https://dcbk.org/"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Desert Community Bank
          </Link>
        </p>
        <p className="pt-2">
          <Link href="/work/navistone" className="underline">
            NaviStone
          </Link>
          <span className="mx-2 opacity-50" aria-hidden>
            ·
          </span>
          <Link href="/work/mailchimp/analytics-dashboard" className="underline">
            Mailchimp
          </Link>
        </p>
      </CaseSection>
    </article>
  );
}
