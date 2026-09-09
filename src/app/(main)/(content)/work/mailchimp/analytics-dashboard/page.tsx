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
    "Mailchimp's first cross-campaign analytics view, shipped to millions of users.",
};

export default function AnalyticsDashboardPage() {
  return (
    <article className="pr-8 pb-8">
      <CaseHeader
        title="Marketing Dashboard"
        company="Intuit Mailchimp"
        timeline="2021–2022"
        role="Senior Product Designer (contract)"
        summary="Mailchimp's first cross-campaign analytics view, shipped to millions of users"
      />

      <CaseMetaList
        items={[
          {
            label: "Shipped",
            value: "First aggregated analytics view; default landing",
          },
          {
            label: "Audience",
            value: "Millions of Mailchimp customers",
          },
        ]}
      />

      <CaseSection id="notes" title="Notes">
        <ul className="list-disc list-inside space-y-2">
          <li>
            Embedded on multi-designer product teams; design critiques, design manager, peer
            designers, researchers, PMs, eng; only contractor in the department
          </li>
          <li>
            Shipped Mailchimp&apos;s first aggregated Marketing Dashboard to millions —
            most-requested analytics after a year of blockers; became the default analytics
            landing
          </li>
          <li>
            Led Marketing Dashboard execution solo for 6–8 weeks post-reorg, then onboarded
            and aligned two new designers while still hitting the mid-summer ship date
          </li>
          <li>
            Still need my own write-up on the date-range constraints and what we fought with
            eng about.
          </li>
        </ul>
        <CaseFigure
          src="/thumbnails/mailchimp/marketing-dashboard.png"
          caption="Marketing Dashboard"
          note="Need annotated frames: date ranges, empty/loading/error, drill-through"
        />
        <CaseFigure caption="[Screenshot: Date-range limits shown clearly]" />
        <CaseFigure caption="[Screenshot: Dashboard → campaign drill-through]" />
      </CaseSection>

      <p className="mb-12">
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
