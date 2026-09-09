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
    "Front-end at Flagstar: design system, WCAG AA after an ADA lawsuit, and the marketing tools behind a big bank site.",
};

export default function FlagstarPage() {
  return (
    <article className="pr-8 pb-8">
      <CaseHeader
        title="Flagstar"
        company="Flagstar Bank"
        timeline="2015–2021"
        role="Front-end Developer. HTML, CSS, a11y, the marketing site's guts."
        summary="I started as an intern and somehow became the HTML & CSS person for Flagstar's marketing web platform. Componentized the UI, dragged us toward WCAG AA after an ADA lawsuit, and built the tools marketers used to publish without filing a ticket every time."
      />

      <CaseMetaList
        items={[
          {
            label: "Mostly",
            value: "Design system, WCAG AA / ADA, authoring tools, site features",
          },
          {
            label: "Team",
            value: "Tight-knit agile squad. High output. Lived by the book more than most.",
          },
          {
            label: "Weird win",
            value: "Re-skinned tokens and stood up Desert Community Bank in a couple of weeks",
          },
        ]}
      />

      <CaseSection id="system" title="Stop reinventing buttons">
        <p>
          Legacy jQuery everywhere. I spent years slowly turning that into a componentized,
          tokenized front end—flexbox, modern CSS, fewer dependencies. Not glamorous. It
          paid off when we stood up Desert Community Bank&apos;s marketing site in a
          couple of weeks by re-skinning the tokens.
        </p>
        <CaseFigure
          src="/thumbnails/flagstar/home-page.png"
          caption="Flagstar.com"
        />
        <p>
          Waybacks if you&apos;re curious:{" "}
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

      <CaseSection id="a11y" title="Then the lawsuit">
        <p>
          Accessibility stopped being a nice-to-have after an ADA lawsuit. WCAG Level AA
          into components and templates—keyboard, semantics, contrast, and the regression
          work nobody puts on a conference slide.
        </p>
      </CaseSection>

      <CaseSection id="tools" title="A site builder before Webflow was the answer">
        <p>
          We built an internal website builder: components, layouts, drag-and-drop, style
          variants. Design systems matter when a marketer can publish with them.
        </p>
        <p>
          Also shipped: branch & ATM locator, localized products and mortgage rates, loan
          officer profiles, live chat, site search. A lot of bank website.
        </p>
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
      </CaseSection>

      <CaseSection id="outcome" title="Six years">
        <p>
          Large regulated marketing site. High-trust eng team. This is where I learned
          production discipline, design systems that ship, and accessibility that isn&apos;t
          a polish pass.
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
