import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { FEATURES } from "@/data/landing";

export function Features() {
  return (
    <section id="features" className="section-y scroll-mt-20">
      <div className="container-x">
        <SectionHeading
          eyebrow={FEATURES.eyebrow}
          title={FEATURES.title}
          aside={FEATURES.aside}
        />

        <ul className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {FEATURES.items.map(({ icon: Icon, title, description }) => (
            <li key={title} className="group border-t pt-6">
              <div className="flex items-start justify-between">
                <span className="flex size-9 items-center justify-center rounded-md bg-accent text-primary">
                  <Icon className="size-[18px]" strokeWidth={1.7} />
                </span>
                <ArrowUpRight
                  aria-hidden
                  className="size-4 text-muted-foreground transition-colors group-hover:text-primary"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-3 max-w-xs leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
