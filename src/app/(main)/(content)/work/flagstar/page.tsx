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
  title: "Flagstar Bank | Bryan King",
  description:
    "Front-end at Flagstar Bank — design system, WCAG AA, site builder. Notes from resume.",
};

export default function FlagstarPage() {
  return (
    <article className="pr-8 pb-8">
      <CaseHeader
        title="Flagstar"
        company="Flagstar Bank"
        timeline="2015–2021"
        role="Front-end Developer"
        summary="Sole front-end owner for the bank's web properties and martech tooling (2015–2021)."
      />

      <CaseMetaList
        items={[
          {
            label: "Focus",
            value: "Design system, WCAG AA / ADA, site builder, marketing site features",
          },
          {
            label: "Years",
            value: "2015–2021",
          },
        ]}
      />

      <CaseSection id="notes" title="Notes">
        <ul className="list-disc list-inside space-y-2">
          <li>
            Sole front-end owner for the bank&apos;s web properties and martech tooling
            (2015–2021)
          </li>
          <li>
            Design system from scratch, token white-label for two acquisitions, full rebrand
            across thousands of pages
          </li>
          <li>WCAG AA compliance that resolved a 2017 ADA lawsuit</li>
          <li>
            Built a no-code AEM site builder so marketing published without eng queues
          </li>
          <li>Optional write-up later — notes + screens are enough for now.</li>
        </ul>
        <CaseFigure
          src="/thumbnails/flagstar/home-page.png"
          caption="Flagstar.com"
        />
        <CaseFigure
          src="/thumbnails/flagstar/search-results.png"
          caption="Site search"
        />
        <CaseFigure
          src="/thumbnails/flagstar/locator.png"
          caption="Branch & ATM locator"
        />
        <CaseFigure
          src="/thumbnails/flagstar/product-page.png"
          caption="Regionalized product pages"
        />
        <p>
          Archives:{" "}
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
      </CaseSection>

      <p className="mb-12">
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

      <CaseNextSteps
        items={[
          "Design system / component inventory screenshots if archives exist",
          "Website builder UI screenshots (if cleared)",
          "Any ADA/compliance before-after Bryan wants public",
        ]}
      />
    </article>
  );
}
