import { SectionHeading } from "@/components/shared/section-heading";
import { STEPS } from "@/data/landing";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-y scroll-mt-20 bg-secondary">
      <div className="container-x">
        <SectionHeading align="center" eyebrow={STEPS.eyebrow} title={STEPS.title} />

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STEPS.items.map(({ icon: Icon, title, description }, index) => (
            <li key={title}>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-primary tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span aria-hidden className="h-px w-9 bg-border" />
                <Icon className="size-[18px] text-muted-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
