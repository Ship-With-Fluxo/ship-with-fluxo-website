import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { NAV_LINKS, SITE } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container-x py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="/" aria-label="Fluxo home" className="inline-flex">
              <Image
                src="/images/fluxo-logo.png"
                alt="Fluxo"
                width={757}
                height={536}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">{SITE.tagline}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#top"
            className="inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:text-primary"
          >
            Back to top
            <ArrowUpRight className="size-4 text-primary" />
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; Fluxo. All rights reserved.</p>
          <p>Built for dispatch operators in Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
