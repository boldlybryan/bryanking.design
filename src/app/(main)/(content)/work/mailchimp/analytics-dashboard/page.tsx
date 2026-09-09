import type { Metadata } from "next";
import Link from "next/link";
import {
  CaseFigure,
  CaseHeader,
  CaseMetaList,
  CaseSection,
} from "@/app/components/case-study";

export const metadata: Metadata = {
  title: "Mailchimp Marketing Dashboard | Bryan King",
  description:
    "Mailchimp’s first aggregated marketing dashboard—shipped July 2022 as the default analytics landing for millions of users.",
};

export default function AnalyticsDashboardPage() {
  return (
    <article className="pr-8 pb-8">
      <CaseHeader
        draft={false}
        title="Mailchimp’s first aggregated marketing dashboard"
        company="Intuit Mailchimp"
        timeline="Apr–Jul 2022"
        role="Senior Product Designer (contract)"
        summary="Mailchimp users could only view campaign metrics one campaign at a time. I shepherded the first cross-campaign Marketing Dashboard to ship in July 2022—default landing for analytics, during post-acquisition chaos—working inside real date-range infrastructure limits and leading design solo for 6–8 weeks before onboarding two designers."
      />

      <CaseMetaList
        items={[
          {
            label: "Shipped",
            value: "July 2022 — first aggregated analytics view; default landing",
          },
          {
            label: "Audience",
            value: "13M+ Mailchimp users",
          },
          {
            label: "Role",
            value: "First designer on analytics team; solo 6–8 weeks",
          },
        ]}
      />

      <CaseSection id="problem" title="The problem">
        <p>
          Mailchimp users could only view campaign metrics one campaign at a time. There
          was no way to see overall marketing performance, identify trends, or understand
          if an email program was working.
        </p>
        <p>
          As Mailchimp moved upmarket from newsletter tool to marketing platform,
          professional marketers needed answers: is the program improving or declining?
          Which campaigns drive conversions? How does this month compare to last month?
          What&apos;s the overall click rate trend?
        </p>
        <p>
          The technical blocker was architecture. Legacy systems couldn&apos;t support
          cross-campaign analytics until an events-based migration unlocked aggregated
          views for the first time. This had been Mailchimp&apos;s most requested feature
          for over a year, delayed by technical constraints and shifting priorities after
          the Intuit acquisition in September 2021. When I joined the analytics team in
          March 2022 after a post-acquisition reorg, the work was in-flight but needed
          someone to shepherd it across the finish line.
        </p>
      </CaseSection>

      <CaseSection id="role" title="Role and context">
        <p>
          I joined as the first designer on the newly formed analytics team. For the first
          6–8 weeks I was solo—taking work-in-progress and driving it toward shippable
          quality. Two designers joined in April/May; I continued leading design execution
          while they ramped. The mid-summer ship date stayed put.
        </p>
        <p>
          Context was post-acquisition chaos: Intuit had bought Mailchimp for $12B the
          previous September. Priorities shifted, teams reorganized, and the aggressive
          timeline still applied. Focus was refine concepts, coordinate with engineering,
          understand constraints, and ship on time.
        </p>
      </CaseSection>

      <CaseSection id="constraints" title="Designing inside technical constraints">
        <p>
          One of the first tasks was date range selection. I explored a flexible custom
          date picker that would let users select any arbitrary range. Through discussions
          with engineering, I learned the data infrastructure couldn&apos;t support complex
          custom date queries without significant performance issues—it was optimized for
          preset ranges, not arbitrary calculations across millions of campaigns.
        </p>
        <p>
          I pivoted to meaningful flexibility within those limits: presets (last 7/30/90/365
          days, last week/month/quarter, quarter-to-date), a simple custom picker for clear
          start/end dates, and smart comparison defaults that matched the selected period.
        </p>
        <CaseFigure
          src="/thumbnails/mailchimp/marketing-dashboard.png"
          caption="Marketing Dashboard"
        />
        <CaseFigure caption="Date-range presets and comparison defaults" />
      </CaseSection>

      <CaseSection id="shipped" title="What shipped July 2022">
        <p>The Marketing Dashboard launched with three core capabilities:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Monitor</strong> — revenue, orders, click rate, email/SMS breakdown,
            and up/down trend indicators at a glance
          </li>
          <li>
            <strong>Compare</strong> — previous period or audience averages, answering
            &ldquo;Am I getting better or worse?&rdquo;
          </li>
          <li>
            <strong>Trends</strong> — line charts over time with day/week/month
            granularity, metric switching, and message-name filters
          </li>
        </ul>
        <p>
          It shipped on time to 13M+ Mailchimp users. Within weeks it became the default
          landing page for analytics—replacing the campaign list as the primary entry
          point. The PM called it the smoothest analytics launch the team had ever done.
        </p>
        <CaseFigure caption="Dashboard → campaign drill-through" />
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
    </article>
  );
}
