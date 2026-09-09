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
    "Mailchimp's first aggregated marketing dashboard—default landing for millions, designed under ugly date-range backend limits.",
};

export default function AnalyticsDashboardPage() {
  return (
    <article className="pr-8 pb-8">
      <CaseHeader
        title="Marketing Dashboard"
        company="Intuit Mailchimp"
        timeline="2021–2022"
        role="Senior Product Designer (contract)"
        summary="Mailchimp made you check performance one campaign at a time. That's not how anyone runs a business. We built the first dashboard that pulled it together, under ugly backend limits on date ranges, and it became the default landing for millions of people."
      />

      <CaseMetaList
        items={[
          {
            label: "Shipped",
            value: "First aggregated analytics view. Default landing.",
          },
          {
            label: "Audience",
            value: "Millions of Mailchimp customers",
          },
          {
            label: "The ugly part",
            value: "Backend couldn't support every date range people wanted",
          },
          {
            label: "Room I was in",
            value: "Critiques, design manager, peers, PM, eng. Solo for 6–8 weeks post-reorg, then onboarded two designers.",
          },
        ]}
      />

      <CaseSection id="context" title="One campaign at a time">
        <p>
          Performance lived behind individual sends. Want last month vs this month? Open
          three screens. Export a CSV. Squint. Marketers don&apos;t experience their
          business that way, but the product forced them to.
        </p>
        <p>
          The ask was simple and annoying: one aggregated view that was honest enough to
          be the first thing you saw after login.
        </p>
      </CaseSection>

      <CaseSection id="constraints" title="Date ranges, not pixels">
        <p>
          Half the product decisions were backend limits. The system couldn&apos;t query
          every range or comparison people asked for. Fake flexibility trains people to
          distrust the page. So the UI showed what we could actually compute—range
          controls that told the truth, aggregation that matched the data, no pretend
          power-user mode.
        </p>
        <CaseFigure
          src="/thumbnails/mailchimp/marketing-dashboard.png"
          caption="Marketing Dashboard"
          note="Need annotated frames: date ranges, empty/loading/error, drill-through"
        />
        <p>
          Layout priority was boring on purpose. How am I doing. Then compare. Then open a
          campaign. Empty states for new accounts. Drill into existing campaign analytics
          without inventing a second product.
        </p>
        <CaseFigure caption="[Screenshot: Date-range limits shown clearly]" />
        <CaseFigure caption="[Screenshot: Dashboard → campaign drill-through]" />
      </CaseSection>

      <CaseSection id="team" title="The room">
        <p>
          Critiques with a design manager and peers. Shared Mailchimp system. PM and eng
          with their own roadmaps. If a tradeoff didn&apos;t survive critique, it wasn&apos;t
          surviving build either.
        </p>
        <p>
          After a reorg I ran the surface alone for six or eight weeks, then onboarded two
          designers. Same critiques. Same system. More hands once the direction was set.
        </p>
      </CaseSection>

      <CaseSection id="outcome" title="Shipped">
        <p>
          First aggregated analytics view. Default landing for millions of users. That&apos;s
          the whole punchline.
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
