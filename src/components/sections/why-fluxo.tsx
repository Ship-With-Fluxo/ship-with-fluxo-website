import { Eyebrow } from "@/components/shared/section-heading";
import { WHY_FLUXO } from "@/data/landing";

export function WhyFluxo() {
  return (
    <section id="why-fluxo" className="section-y scroll-mt-20 bg-secondary">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>{WHY_FLUXO.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-md text-3xl leading-[1.1] font-bold tracking-tight sm:text-4xl lg:text-[2.5rem]">
            {WHY_FLUXO.title}
          </h2>
        </div>

        <div>
          <h3 className="text-xl leading-snug font-bold tracking-tight text-balance sm:text-2xl">
            {WHY_FLUXO.subtitle}
          </h3>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {WHY_FLUXO.description}
          </p>

          <ul className="mt-8 grid gap-4">
            {WHY_FLUXO.points.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-card text-primary">
                  <Icon className="size-[18px]" strokeWidth={1.7} />
                </span>
                <span className="font-semibold">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
