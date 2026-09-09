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
  title: "Mailchimp Marketing Dashboard | Bryan King",
  description:
    "Case study: Mailchimp's first aggregated marketing analytics dashboard—default landing experience for millions of users, designed inside a large design org.",
};

export default function AnalyticsDashboardPage() {
  return (
    <article className="pr-8 pb-8">
      <CaseHeader
        title="Mailchimp's first aggregated marketing dashboard"
        company="Intuit Mailchimp"
        timeline="2021–2022"
        role="Senior Product Designer (contract) — product design within a multi-squad design org"
        summary="Mailchimp's analytics lived in campaign-shaped silos. I designed the first cross-campaign marketing dashboard that became the default landing experience for millions of users—working through hard technical constraints on date ranges and the reality of shipping inside a large design organization."
      />

      <CaseMetaList
        items={[
          {
            label: "Outcome",
            value: "First aggregated analytics view; shipped as default landing",
          },
          {
            label: "Users",
            value: "Millions of Mailchimp customers",
          },
          {
            label: "Constraints",
            value: "Backend date-range limits, legacy analytics IA, multi-squad delivery",
          },
          {
            label: "Collaboration",
            value: "Design critiques, PM/eng pairing, shared Mailchimp design system",
          },
        ]}
      />

      <CaseSection id="context" title="The problem">
        <p>
          Marketers didn&apos;t experience their business one campaign at a time, but the
          product forced them to. Performance lived behind individual sends. Comparing
          periods, spotting regressions, and answering &ldquo;how are we doing?&rdquo;
          meant stitching screenshots together or exporting to spreadsheets.
        </p>
        <p>
          The opportunity was straightforward and politically loaded: give customers a
          single aggregated view of marketing performance—and make it trustworthy enough
          to become the first thing they see.
        </p>
      </CaseSection>

      <CaseSection id="collaboration" title="Design-org context">
        <p>
          This was not a lone-wolf project. I worked as a senior IC inside Mailchimp&apos;s
          design organization—critiques, design-system constraints, PM partners, and
          engineering teams with their own roadmaps. The craft bar was high; so was the
          need to socialize tradeoffs early.
        </p>
        <CaseCallout>
          <p>
            I call this out explicitly because my NaviStone work is sole-designer by
            necessity. Mailchimp is the counterexample: I know how to take feedback, share
            ownership of a surface, and ship through organizational reality—not around it.
          </p>
        </CaseCallout>
      </CaseSection>

      <CaseSection id="constraints" title="Designing inside technical constraints">
        <p>
          The hardest product decisions weren&apos;t visual. Backend realities limited how
          date ranges could be queried and compared. An honest dashboard that lied about
          completeness would be worse than no dashboard at all.
        </p>
        <p>
          We designed the experience around those constraints instead of papering over
          them: clear range affordances, aggregation rules that matched what the system
          could actually compute, and an information hierarchy that answered the first
          questions marketers ask before inviting them deeper into campaign detail.
        </p>
        <CaseFigure
          src="/thumbnails/mailchimp/marketing-dashboard.png"
          caption="Marketing Dashboard — aggregated performance as the default landing experience"
          note="Add annotated frames: date-range controls, empty/loading/error, drill-through to campaign detail"
        />
      </CaseSection>

      <CaseSection id="approach" title="Approach">
        <p>
          I framed the dashboard as a landing narrative, not a widget dump: orientation
          first (how am I doing?), then comparison, then investigation. That meant ruthless
          prioritization of metrics, careful empty states for newer accounts, and a path
          into existing campaign analytics without fracturing the mental model.
        </p>
        <p>
          Visual design stayed inside Mailchimp&apos;s system so the new surface felt native
          on day one. The novelty was the product model—aggregated marketing truth—not a
          custom visual language.
        </p>
        <CaseFigure caption="[Screenshot: Date-range constraint UI — how limits were communicated without breaking trust]" />
        <CaseFigure caption="[Screenshot: Dashboard → campaign drill-through]" />
      </CaseSection>

      <CaseSection id="outcome" title="What shipped">
        <p>
          The Marketing Dashboard shipped as Mailchimp&apos;s first aggregated analytics
          view and became the default landing experience for millions of users. It
          established a foundation for how Mailchimp talks about performance across
          campaigns—not just inside them.
        </p>
        <p className="pt-2">
          <Link href="/work/mailchimp/custom-reports" className="underline">
            Next: Custom Reports
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
          "Annotated dashboard screenshots (date range, metric hierarchy, empty states)",
          "Before: campaign-silo analytics path (if still available in archives)",
          "Any internal research quotes Bryan is cleared to share",
        ]}
      />
    </article>
  );
}
