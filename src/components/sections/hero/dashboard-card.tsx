import { ArrowUpRight } from "lucide-react";

import { MapIllustration } from "@/components/icons/pack";
import { ACTIVE_DELIVERIES, DASHBOARD_STATS } from "@/data/landing";
import { cn } from "@/lib/utils";

/**
 * The "Dispatch overview" product mock in the hero.
 * Swap <MapIllustration /> for the final map design (see pack.tsx note).
 */
export function DashboardCard() {
  return (
    <div
      aria-label="Fluxo dispatch dashboard preview"
      className="overflow-hidden rounded-xl border bg-card shadow-[0_30px_80px_-30px_rgba(26,22,18,0.25)]"
    >
      {/* Title bar */}
      <div className="flex items-center justify-between border-b px-4 py-3.5 sm:px-5">
        <div className="flex items-center gap-2.5">
          <span className="flex size-7 items-center justify-center rounded-md bg-accent text-xs font-bold text-primary">
            F
          </span>
          <span className="text-sm font-semibold">Dispatch overview</span>
        </div>
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="size-1.5 rounded-full bg-success" />
          Live
        </span>
      </div>

      {/* Stats */}
      <dl className="grid grid-cols-3 divide-x border-b">
        {DASHBOARD_STATS.map((stat) => (
          <div key={stat.label} className="px-3 py-3.5 sm:px-5">
            <dt className="text-[11px] text-muted-foreground sm:text-xs">{stat.label}</dt>
            <dd className="mt-1 text-2xl font-bold tracking-tight">{stat.value}</dd>
            <p
              className={cn(
                "mt-0.5 text-[11px] sm:text-xs",
                stat.subTone === "success" ? "font-medium text-success" : "text-muted-foreground",
              )}
            >
              {stat.sub}
            </p>
          </div>
        ))}
      </dl>

      {/* Map + deliveries */}
      <div className="grid gap-4 p-3 sm:p-4 md:grid-cols-[1.35fr_1fr]">
        <div className="relative aspect-[16/11] overflow-hidden rounded-lg border bg-[#F3EEE3] md:aspect-auto md:min-h-[230px]">
          <MapIllustration className="absolute inset-0 size-full" />
          <ul className="absolute right-2 bottom-2 flex items-center gap-3 rounded-md border bg-card/95 px-2.5 py-1.5 text-[10px] text-muted-foreground shadow-xs">
            <li className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-success" />
              On route
            </li>
            <li className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-warning" />
              Running late
            </li>
          </ul>
        </div>

        <div className="rounded-lg border bg-card p-3.5">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold">Active deliveries</p>
            <span className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-primary">
              View all <ArrowUpRight className="size-3" />
            </span>
          </div>

          <ul className="mt-2 divide-y">
            {ACTIVE_DELIVERIES.map((job) => (
              <li key={job.name} className="flex items-center gap-2.5 py-2.5">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-[10px] font-semibold text-muted-foreground">
                  {job.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold">{job.name}</p>
                  <p className="truncate text-[11px] text-muted-foreground">{job.route}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p
                    className={cn(
                      "flex items-center justify-end gap-1 text-[11px] font-semibold",
                      job.late ? "text-warning" : "text-foreground",
                    )}
                  >
                    <span
                      className={cn("size-1.5 rounded-full", job.late ? "bg-warning" : "bg-success")}
                    />
                    {job.status}
                  </p>
                  <p className="text-[11px] text-muted-foreground">{job.meta}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer strip */}
      <div className="flex items-center justify-between border-t px-4 py-2.5 text-[11px] text-muted-foreground sm:px-5">
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-success" />
          All systems operational
        </span>
        <span>Updated just now</span>
      </div>
    </div>
  );
}
