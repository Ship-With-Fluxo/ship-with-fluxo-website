import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: string;
  /** Short supporting text shown on the right (desktop) of the heading. */
  aside?: string;
  align?: "split" | "center";
  className?: string;
};

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-xs font-semibold tracking-[0.08em] text-muted-foreground uppercase",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, aside, align = "split", className }: Props) {
  if (align === "center") {
    return (
      <div className={cn("mx-auto max-w-2xl text-center", className)}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 text-3xl leading-[1.1] font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.5rem]">
          {title}
        </h2>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16",
        className,
      )}
    >
      <div className="max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 text-3xl leading-[1.1] font-bold tracking-tight sm:text-4xl lg:text-[2.5rem]">
          {title}
        </h2>
      </div>
      {aside && (
        <p className="max-w-xs text-base leading-relaxed text-muted-foreground lg:pb-1.5">
          {aside}
        </p>
      )}
    </div>
  );
}
