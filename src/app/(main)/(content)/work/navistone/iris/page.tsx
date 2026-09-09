import type { Metadata } from "next";
import Link from "next/link";
import {
  CaseFigure,
  CaseHeader,
  CaseMetaList,
  CaseSection,
} from "@/app/components/case-study";

export const metadata: Metadata = {
  title: "Iris Design System | Bryan King",
  description:
    "NaviStone legacy-platform design system — Figma + Vue + Storybook, built in about four weeks.",
};

export default function IrisDesignSystemPage() {
  return (
    <article className="pr-8 pb-8">
      <CaseHeader
        draft={false}
        title="Iris design system"
        company="NaviStone"
        timeline="2022"
        role="First designer — built a complete design system in Figma, Vue, and Storybook in about four weeks"
        summary="I was hired into NaviStone's existing (legacy) platform line. The UI was a frankenstein of inherited patterns. Iris gave engineering a shared language fast enough to stop the bleeding and ship product."
      />

      <CaseMetaList
        items={[
          {
            label: "Stack",
            value: "Figma, Vue.js, Storybook (no external CSS dependencies)",
          },
          {
            label: "Timeline",
            value: "Complete system stood up in ~4 weeks",
          },
          {
            label: "Platform",
            value: "Legacy product line — later exited; not the NXP / Zenith work",
          },
        ]}
      />

      <CaseSection id="context" title="What I walked into">
        <p>
          When I started, there was no design system—just accumulated UI. Screens drifted.
          Engineering had no shared components to lean on. As the first designer in the
          company&apos;s history, standing up a coherent system was the first job, not a
          nice-to-have.
        </p>
      </CaseSection>

      <CaseSection id="build" title="Standing up Iris">
        <p>
          I built Iris end to end: tokens and components in Figma, Vue implementations, and
          Storybook documentation. Roughly four weeks to a complete system—enough coverage
          that product work could move on shared primitives instead of one-off markup.
        </p>
        <CaseFigure
          src="/thumbnails/navistone/design-system.png"
          caption="Iris — Figma + Vue + Storybook"
        />
        <p>
          What it unlocked: UI bugs dropped to near-zero once teams stopped inventing
          controls per screen, and the shared language was enough for the team to ship a
          new product line in about ten weeks.
        </p>
      </CaseSection>

      <CaseSection id="scope" title="Scope and what came after">
        <p>
          Iris belonged to the old platform I was hired into. That product line was
          eventually exited. Clear, not tragic—the work did its job while that line was
          alive.
        </p>
        <p>
          Iris is not related to Zenith or the NXP multi-tenant platform work. Different
          era, different stack, different product. The NXP flagship case is here:{" "}
          <Link href="/work/navistone" className="underline">
            NaviStone multi-tenant platform
          </Link>
          .
        </p>
      </CaseSection>
    </article>
  );
}
