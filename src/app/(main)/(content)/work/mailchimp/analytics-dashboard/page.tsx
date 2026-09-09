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
  title: "Mailchimp Marketing Dashboard | Bryan King",
  description:
    "Mailchimp's first aggregated marketing analytics dashboard—default landing for millions of users, built under real date-range constraints.",
};

export default function AnalyticsDashboardPage() {
  return (
    <article className="pr-8 pb-8">
      <CaseHeader
        title="Mailchimp's first aggregated marketing dashboard"
        company="Intuit Mailchimp"
        timeline="2021–2022"
        role="Senior Product Designer (contract)"
        summary="Analytics lived inside individual campaigns. I designed the first cross-campaign dashboard, and it became the default landing page for millions of users. Backend date-range limits shaped half the product decisions."
      />

      <CaseMetaList
        items={[
          {
            label: "Shipped",
            value: "First aggregated analytics view; default landing",
          },
          {
            label: "Users",
            value: "Millions of Mailchimp customers",
          },
          {
            label: "Hard constraint",
            value: "Backend limits on date ranges and comparisons",
          },
          {
            label: "Team",
            value: "Design org with critiques, PM, eng; led solo 6–8 weeks post-reorg, then onboarded two designers",
          },
        ]}
      />

      <CaseSection id="context" title="The problem">
        <p>
          Customers don&apos;t run a business one campaign at a time. The product made them
          act like they did. Performance hid behind individual sends. Want a period
          comparison? Screenshot a few screens or dump CSV into a spreadsheet.
        </p>
        <p>
          We needed one place that answered &ldquo;how are we doing?&rdquo; honestly enough
          to be the first screen people saw after login.
        </p>
      </CaseSection>

      <CaseSection id="constraints" title="Date ranges were the real design problem">
        <p>
          The backend couldn&apos;t support every range and comparison people wanted. If we
          faked completeness, the dashboard would train people to distrust it. So the UI
          had to show what the system could actually compute—clear range controls,
          aggregation rules that matched the data, and no pretend flexibility.
        </p>
        <CaseFigure
          src="/thumbnails/mailchimp/marketing-dashboard.png"
          caption="Marketing Dashboard — aggregated performance as the default landing"
          note="Add annotated frames: date-range controls, empty/loading/error, drill-through to campaign detail"
        />
        <p>
          Hierarchy was simple on purpose: how am I doing, then compare, then dig into a
          campaign. Empty states for new accounts. Drill-through into existing campaign
          analytics without inventing a second mental model.
        </p>
        <CaseFigure caption="[Screenshot: Date-range constraint UI — limits shown clearly]" />
        <CaseFigure caption="[Screenshot: Dashboard → campaign drill-through]" />
      </CaseSection>

      <CaseSection id="team" title="How the work actually happened">
        <p>
          This lived inside Mailchimp&apos;s design org. Critiques with a design manager and
          peers. Shared design system. PM and eng with their own roadmaps. Tradeoffs got
          aired early or they died in build.
        </p>
        <p>
          After a reorg I led the surface solo for about six to eight weeks, then onboarded
          two designers onto the work. Same critique culture, same system constraints—
          just more hands once the direction was set.
        </p>
        <p>
          Visual design stayed in Mailchimp&apos;s system. The new thing was the product
          model: performance across campaigns, not only inside them.
        </p>
      </CaseSection>

      <CaseSection id="outcome" title="What shipped">
        <p>
          First aggregated analytics view at Mailchimp. Shipped as the default landing for
          millions of users.
        </p>
        <p className="pt-2">
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
          "Annotated dashboard screenshots (date range, metric hierarchy, empty states)",
          "Before: campaign-silo analytics path (if still available in archives)",
          "Any internal research quotes Bryan is cleared to share",
        ]}
      />
    </article>
  );
}
