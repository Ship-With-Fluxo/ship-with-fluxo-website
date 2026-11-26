"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { Eyebrow } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CTA } from "@/data/landing";
import { useWaitlist } from "@/providers/waitlist-provider";

export function Cta() {
  const { openWaitlist } = useWaitlist();
  const [email, setEmail] = useState("");

  return (
    <section className="pb-16 lg:pb-24">
      <div className="container-x">
        <div className="grid gap-10 rounded-xl border border-primary/15 bg-accent px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12 lg:py-14">
          <div>
            <Eyebrow className="text-primary">{CTA.eyebrow}</Eyebrow>
            <h2 className="mt-4 max-w-lg text-3xl leading-[1.1] font-bold tracking-tight sm:text-4xl">
              {CTA.title}
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">{CTA.description}</p>
          </div>

          <form
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              openWaitlist(email);
            }}
          >
            <p className="flex items-center gap-2 text-sm font-medium">
              <span className="size-2 rounded-full bg-success" />
              {CTA.badge}
            </p>

            <Label htmlFor="cta-email" className="mt-5">
              {CTA.label}
            </Label>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Input
                id="cta-email"
                type="email"
                autoComplete="email"
                placeholder={CTA.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-card sm:flex-1"
              />
              <Button type="submit" size="lg" className="shrink-0">
                Join the Waitlist
                <ArrowRight />
              </Button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">{CTA.note}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
