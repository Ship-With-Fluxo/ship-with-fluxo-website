"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { WaitlistButton } from "@/components/shared/waitlist-button";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b bg-background/90 backdrop-blur transition-shadow",
        scrolled && "shadow-[0_1px_12px_rgba(26,22,18,0.06)]",
      )}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6 lg:h-[78px]">
        <Link href="/" aria-label="Fluxo home" className="flex shrink-0 items-center">
          <Image
            src="/images/fluxo-logo.png"
            alt="Fluxo"
            width={757}
            height={536}
            priority
            className="h-12 w-auto lg:h-[52px]"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
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

        <div className="flex items-center gap-2">
          <WaitlistButton size="lg" className="hidden sm:inline-flex" />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="border-t bg-background md:hidden">
          <nav aria-label="Mobile" className="container-x flex flex-col py-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-1 py-3 text-base font-medium text-foreground hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <WaitlistButton size="lg" className="mt-2 w-full sm:hidden" />
          </nav>
        </div>
      )}
    </header>
  );
}
