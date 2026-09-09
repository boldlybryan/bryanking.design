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
    "Front-end development at Flagstar Bank: design system, WCAG AA accessibility, and marketing tooling across a large financial services site.",
};

export default function FlagstarPage() {
  return (
    <article className="pr-8 pb-8">
      <CaseHeader
        title="Design systems, accessibility, and marketing tooling at Flagstar"
        company="Flagstar Bank"
        timeline="2015–2021"
        role="Front-end Developer — HTML/CSS systems, accessibility, marketing site features"
        summary="I started as an intern and became the resident HTML & CSS owner for Flagstar's marketing web platform—componentizing the UI, driving WCAG AA compliance, and shipping the tools marketers used to publish at scale."
      />

      <CaseMetaList
        items={[
          {
            label: "Focus",
            value: "Design system, a11y/ADA, authoring tools, site features",
          },
          {
            label: "Team",
            value: "Tight-knit agile squad — high output, strong craft culture",
          },
          {
            label: "Notable",
            value: "Tokenized system reused to stand up Desert Community Bank quickly",
          },
        ]}
      />

      <CaseSection id="system" title="A zero-dependency design system that actually shipped">
        <p>
          The site inherited legacy jQuery-era patterns. I led the slow migration toward a
          componentized, tokenized front-end—flexbox and modern CSS, fewer dependencies,
          clearer ownership of UI primitives. The payoff was practical: the system was
          coherent enough that we stood up a full marketing site for Desert Community Bank
          in a couple of weeks by re-skinning the tokens.
        </p>
        <CaseFigure
          src="/thumbnails/flagstar/home-page.png"
          caption="Flagstar.com — responsive marketing homepage"
        />
        <p>
          Archives for context:{" "}
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

      <CaseSection id="a11y" title="Accessibility as a product requirement">
        <p>
          Financial services sites don&apos;t get to treat accessibility as a polish pass.
          I worked WCAG Level AA compliance into the component layer and page templates—
          keyboard paths, semantics, contrast, and the unglamorous regression work that
          keeps a large site honest over time.
        </p>
      </CaseSection>

      <CaseSection id="tools" title="Website building tool & feature work">
        <p>
          Before Webflow/Framer were the default answer, we built an internal website
          building tool: components, layouts, drag-and-drop assembly, style variants. That
          experience shaped how I think about design systems—not as documentation, but as
          authoring power for non-engineers.
        </p>
        <p>
          Feature work spanned the marketing surface area: branch & ATM locator, localized
          product availability and mortgage rates, loan officer profiles and personalized
          materials, live chat, site search, and more.
        </p>
        <CaseFigure
          src="/thumbnails/flagstar/search-results.png"
          caption="Site search — filtering and relevance across the marketing site"
        />
        <CaseFigure
          src="/thumbnails/flagstar/locator.png"
          caption="Branch & ATM locator — map, filters, directions, branch detail"
        />
        <CaseFigure
          src="/thumbnails/flagstar/product-page.png"
          caption="Regionalized product pages — location-aware availability"
        />
      </CaseSection>

      <CaseSection id="outcome" title="What stuck">
        <p>
          Flagstar taught me production discipline on a large, regulated surface—and what
          it feels like to ship inside a high-trust engineering team. The design-system and
          accessibility instincts I use now started here.
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
