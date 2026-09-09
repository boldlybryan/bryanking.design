"use client";

import Link from "next/link";
import { useId, useMemo, useState } from "react";

type Metric = "open_rate" | "click_rate" | "subscribers" | "revenue";
type DateRange = "7d" | "30d" | "90d" | "ytd";
type CampaignType = "all" | "regular" | "automated";
type Audience = "all" | "newsletter" | "product";

const metrics: { value: Metric; label: string; format: "percent" | "number" | "currency" }[] = [
  { value: "open_rate", label: "Open rate", format: "percent" },
  { value: "click_rate", label: "Click rate", format: "percent" },
  { value: "subscribers", label: "Subscribers", format: "number" },
  { value: "revenue", label: "Revenue", format: "currency" },
];

const dateRanges: { value: DateRange; label: string }[] = [
  { value: "7d", label: "Last 7 days" },
  { value: "30d", label: "Last 30 days" },
  { value: "90d", label: "Last 90 days" },
  { value: "ytd", label: "Year to date" },
];

const campaignTypes: { value: CampaignType; label: string }[] = [
  { value: "all", label: "All campaigns" },
  { value: "regular", label: "Regular" },
  { value: "automated", label: "Automated" },
];

const audiences: { value: Audience; label: string }[] = [
  { value: "all", label: "All audiences" },
  { value: "newsletter", label: "Newsletter" },
  { value: "product", label: "Product updates" },
];

const periodLabels: Record<DateRange, string[]> = {
  "7d": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  "30d": ["W1", "W2", "W3", "W4"],
  "90d": ["Jan", "Feb", "Mar"],
  ytd: ["Q1", "Q2", "Q3", "Q4"],
};

/** Deterministic fake series so the preview always feels responsive. */
function buildSeries(
  metric: Metric,
  dateRange: DateRange,
  campaignType: CampaignType,
  audience: Audience
): number[] {
  const labels = periodLabels[dateRange];
  const base = { open_rate: 22, click_rate: 3.4, subscribers: 12400, revenue: 8400 }[metric];
  const rangeFactor = { "7d": 0.85, "30d": 1, "90d": 1.15, ytd: 1.3 }[dateRange];
  const campaignFactor = { all: 1, regular: 0.92, automated: 1.08 }[campaignType];
  const audienceFactor = { all: 1, newsletter: 1.05, product: 0.9 }[audience];
  const seed = base * rangeFactor * campaignFactor * audienceFactor;

  return labels.map((_, i) => {
    const wave = 1 + Math.sin(i * 1.3 + seed) * 0.12 + (i % 3) * 0.04;
    return Math.max(0, seed * wave);
  });
}

function formatValue(value: number, format: "percent" | "number" | "currency"): string {
  if (format === "percent") return `${value.toFixed(1)}%`;
  if (format === "currency") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  }
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value);
}

const selectClassName =
  "w-full p-2 bg-transparent border-b border-neutral-400 dark:border-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:border-neutral-800 dark:focus:border-neutral-300 cursor-pointer transition-colors";

export default function PreviewByDefaultPage() {
  const metricId = useId();
  const dateRangeId = useId();
  const campaignId = useId();
  const audienceId = useId();

  const [metric, setMetric] = useState<Metric>("open_rate");
  const [dateRange, setDateRange] = useState<DateRange>("30d");
  const [campaignType, setCampaignType] = useState<CampaignType>("all");
  const [audience, setAudience] = useState<Audience>("all");

  const metricConfig = metrics.find((m) => m.value === metric)!;
  const series = useMemo(
    () => buildSeries(metric, dateRange, campaignType, audience),
    [metric, dateRange, campaignType, audience]
  );
  const labels = periodLabels[dateRange];
  const max = Math.max(...series);
  const average = series.reduce((sum, n) => sum + n, 0) / series.length;
  const latest = series[series.length - 1];

  return (
    <div className="pb-12">
      <Link href="/experiments" className="block mb-4 underline">
        Experiments
      </Link>

      <header className="max-w-2xl mb-10">
        <h1 className="heading mb-4">Preview by default</h1>
        <div className="body space-y-3 text-base/6">
          <p>
            Custom Reports at Mailchimp was headed for ~6 months of engineering. Before that
            spend, the interaction model had to be right: can someone build a report, read it,
            and trust it before they hit save?
          </p>
          <p>
            The call was preview by default. Keep the report up while the query changes. No
            &ldquo;generate report&rdquo; dead end. You see what you&apos;re building as you
            build it.
          </p>
          <p>
            This is a tiny recreation of that pattern—fake local data, a handful of controls.
            The write-up is on{" "}
            <Link href="/work/mailchimp/custom-reports" className="underline">
              Custom Reports
            </Link>
            .
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(16rem,20rem)_1fr] gap-6 lg:gap-8 items-start border-t border-neutral-300 dark:border-neutral-800 pt-6">
        <section aria-labelledby="query-heading" className="flex flex-col gap-5">
          <h2 id="query-heading" className="text-sm uppercase tracking-wider text-neutral-500">
            Query
          </h2>

          <div className="flex flex-col gap-1">
            <label htmlFor={metricId} className="text-sm text-neutral-500">
              Metric
            </label>
            <select
              id={metricId}
              className={selectClassName}
              value={metric}
              onChange={(e) => setMetric(e.target.value as Metric)}
            >
              {metrics.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor={dateRangeId} className="text-sm text-neutral-500">
              Date range
            </label>
            <select
              id={dateRangeId}
              className={selectClassName}
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value as DateRange)}
            >
              {dateRanges.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor={campaignId} className="text-sm text-neutral-500">
              Campaign type
            </label>
            <select
              id={campaignId}
              className={selectClassName}
              value={campaignType}
              onChange={(e) => setCampaignType(e.target.value as CampaignType)}
            >
              {campaignTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor={audienceId} className="text-sm text-neutral-500">
              Audience
            </label>
            <select
              id={audienceId}
              className={selectClassName}
              value={audience}
              onChange={(e) => setAudience(e.target.value as Audience)}
            >
              {audiences.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </section>

        <section
          aria-labelledby="preview-heading"
          aria-live="polite"
          className="border border-neutral-300 dark:border-neutral-700 p-4 sm:p-6 min-h-[20rem]"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-6">
            <h2 id="preview-heading" className="text-sm uppercase tracking-wider text-neutral-500">
              Live preview
            </h2>
            <p className="text-sm text-neutral-500">
              {dateRanges.find((d) => d.value === dateRange)?.label} ·{" "}
              {campaignTypes.find((c) => c.value === campaignType)?.label} ·{" "}
              {audiences.find((a) => a.value === audience)?.label}
            </p>
          </div>

          <div className="mb-8">
            <p className="text-sm text-neutral-500 mb-1">{metricConfig.label}</p>
            <p className="title tabular-nums">{formatValue(latest, metricConfig.format)}</p>
            <p className="body mt-1 text-neutral-500">
              Avg {formatValue(average, metricConfig.format)} across the selected range
            </p>
          </div>

          <div
            className="flex items-end gap-2 sm:gap-3 h-40"
            role="img"
            aria-label={`${metricConfig.label} chart for ${dateRanges.find((d) => d.value === dateRange)?.label}`}
          >
            {series.map((value, index) => {
              const height = max > 0 ? (value / max) * 100 : 0;
              return (
                <div key={labels[index]} className="flex-1 flex flex-col justify-end items-stretch h-full gap-2">
                  <div
                    className="w-full bg-neutral-800 dark:bg-neutral-200 transition-[height] duration-300 ease-out"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-center text-xs text-neutral-500">{labels[index]}</span>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
