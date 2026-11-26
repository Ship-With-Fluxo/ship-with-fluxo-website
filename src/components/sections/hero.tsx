import { ArrowDownRight } from "lucide-react";

import { WaitlistButton } from "@/components/shared/waitlist-button";
import { HERO } from "@/data/landing";

import { DashboardCard } from "./hero/dashboard-card";

export function Hero() {
  return (
    <section id="top" className="relative scroll-mt-24 pt-12 pb-16 sm:pt-16 lg:pt-[88px] lg:pb-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.12fr] lg:gap-14">
        <div>
          <p className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.06em] text-primary uppercase">
            <span className="size-2 shrink-0 rounded-full bg-primary" />
            {HERO.eyebrow}
          </p>

          <h1 className="mt-6 text-[2.6rem] leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
            {HERO.titleLead} <span className="text-primary">{HERO.titleAccent}</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {HERO.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <WaitlistButton size="lg" />
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-[15px] font-semibold transition-colors hover:text-primary"
            >
              See How It Works
              <ArrowDownRight className="size-4 text-primary" />
            </a>
          </div>

          <p className="mt-8 flex items-center gap-2.5 text-sm text-muted-foreground">
            <span className="size-2 shrink-0 rounded-full bg-success" />
            {HERO.note}
          </p>
        </div>

        <DashboardCard />
      </div>
    </section>
  );
}
