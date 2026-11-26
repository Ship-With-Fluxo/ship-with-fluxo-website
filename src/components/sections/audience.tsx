import { SectionHeading } from "@/components/shared/section-heading";
import { AUDIENCE } from "@/data/landing";

export function Audience() {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow={AUDIENCE.eyebrow}
          title={AUDIENCE.title}
          aside={AUDIENCE.aside}
        />

        <ul className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-3 lg:mt-14">
          {AUDIENCE.items.map(({ icon: Icon, title, description }) => (
            <li key={title} className="border-t pt-6">
              <Icon className="size-5 text-primary" strokeWidth={1.6} />
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-3 max-w-xs leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
