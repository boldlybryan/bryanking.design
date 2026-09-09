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
    "Front-end at Flagstar Bank: design system, WCAG AA after an ADA lawsuit, and the marketing tools behind a large bank site.",
};

export default function FlagstarPage() {
  return (
    <article className="pr-8 pb-8">
      <CaseHeader
        title="Design system, accessibility, and marketing tools at Flagstar"
        company="Flagstar Bank"
        timeline="2015–2021"
        role="Front-end Developer — HTML/CSS systems, a11y, marketing site features"
        summary="Started as an intern. Became the HTML & CSS person for Flagstar's marketing web platform. Componentized the UI, pushed WCAG AA after an ADA lawsuit, and shipped the tools marketers used to publish."
      />

      <CaseMetaList
        items={[
          {
            label: "Focus",
            value: "Design system, WCAG AA / ADA, authoring tools, site features",
          },
          {
            label: "Team",
            value: "Tight-knit agile squad — high output",
          },
          {
            label: "Reuse",
            value: "Tokenized system stood up Desert Community Bank in a couple of weeks",
          },
        ]}
      />

      <CaseSection id="system" title="Design system without the ceremony">
        <p>
          The site was stuck in legacy jQuery patterns. I slowly moved us to a
          componentized, tokenized front end—flexbox, modern CSS, fewer dependencies.
          Practical payoff: we stood up Desert Community Bank&apos;s marketing site in a
          couple of weeks by re-skinning the tokens.
        </p>
        <CaseFigure
          src="/thumbnails/flagstar/home-page.png"
          caption="Flagstar.com — responsive marketing homepage"
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

      <CaseSection id="a11y" title="WCAG AA after an ADA lawsuit">
        <p>
          Accessibility stopped being optional after an ADA lawsuit. I worked WCAG Level AA
          into components and templates—keyboard paths, semantics, contrast, and the boring
          regression work that keeps a big site honest.
        </p>
      </CaseSection>

      <CaseSection id="tools" title="Website builder & the rest of the site">
        <p>
          Before Webflow and Framer were the default answer, we built an internal site
          builder: components, layouts, drag-and-drop, style variants. Design systems
          matter when non-engineers can publish with them.
        </p>
        <p>
          Other shipping: branch & ATM locator, localized products and mortgage rates,
          loan officer profiles, live chat, site search, and plenty more.
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

      <CaseSection id="outcome" title="What stuck">
        <p>
          Six years on a large, regulated marketing site. Learned how to ship inside a
          high-trust eng team. The design-system and accessibility habits I still use
          started here.
        </p>
        <p className="pt-2">
          <Link href="/work/navistone" className="underline">
            NaviStone platform
          </Link>
          <span className="mx-2 opacity-50" aria-hidden>
            ·
          </span>
          <Link href="/work/mailchimp/analytics-dashboard" className="underline">
            Mailchimp work
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
