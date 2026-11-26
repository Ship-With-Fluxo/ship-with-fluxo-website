import { SectionHeading } from "@/components/shared/section-heading";
import { PROBLEMS } from "@/data/landing";

export function Problem() {
  return (
    <section aria-labelledby="problem-title" className="section-y border-t">
      <div className="container-x">
        <SectionHeading
          eyebrow={PROBLEMS.eyebrow}
          title={PROBLEMS.title}
          aside={PROBLEMS.aside}
        />

        <ol className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-3 lg:mt-14">
          {PROBLEMS.items.map(({ icon: Icon, title, description }, index) => (
            <li key={title} className="border-t pt-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon className="size-5 text-primary" strokeWidth={1.6} />
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-3 max-w-sm leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
