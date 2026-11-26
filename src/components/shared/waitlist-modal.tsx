"use client";

import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FLEET_SIZES } from "@/data/landing";
import { submitWaitlist } from "@/services/waitlist";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(1, "Enter a phone or WhatsApp number.")
    .refine((v) => /^\+?[0-9\s()-]{7,20}$/.test(v), "Enter a valid phone number."),
  company: z.string().trim().min(2, "Enter your company or business name."),
  fleetSize: z.string().optional(),
  website: z.string().optional(), // honeypot
});

type FormValues = z.infer<typeof schema>;

const EMPTY: FormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  fleetSize: undefined,
  website: "",
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  prefillEmail?: string;
};

export function WaitlistModal({ open, onOpenChange, prefillEmail = "" }: Props) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: EMPTY,
  });

  const mutation = useMutation({
    mutationFn: (values: FormValues) =>
      submitWaitlist({
        name: values.name,
        email: values.email,
        phone: values.phone,
        company: values.company,
        fleetSize: values.fleetSize ?? "",
        website: values.website ?? "",
      }),
  });

  // Fresh form every time the modal opens (pre-filled with the CTA email, if any).
  useEffect(() => {
    if (open) {
      mutation.reset();
      reset({ ...EMPTY, email: prefillEmail });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, prefillEmail, reset]);

  const onSubmit = handleSubmit((values) => mutation.mutate(values));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px]">
        {mutation.isSuccess ? (
          <div className="flex flex-col items-center gap-4 py-6 text-center" role="status">
            <span className="flex size-14 items-center justify-center rounded-full bg-accent text-primary">
              <CheckCircle2 className="size-7" />
            </span>
            <DialogHeader className="items-center pr-0 text-center">
              <DialogTitle>You&apos;re on the list.</DialogTitle>
              <DialogDescription className="max-w-sm">
                Thanks for joining the Fluxo waitlist. We&apos;ll be in touch as pilot onboarding
                in Nigeria progresses.
              </DialogDescription>
            </DialogHeader>
            <DialogClose asChild>
              <Button className="mt-2 min-w-32">Close</Button>
            </DialogClose>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Join the Fluxo waitlist</DialogTitle>
              <DialogDescription>
                Tell us a little about your dispatch operation and we&apos;ll follow up about the
                pilot.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={onSubmit} noValidate className="grid gap-4">
              <Field label="Full name" htmlFor="wl-name" error={errors.name?.message}>
                <Input
                  id="wl-name"
                  autoComplete="name"
                  placeholder="Adaeze Okafor"
                  aria-invalid={!!errors.name}
                  {...register("name")}
                />
              </Field>

              <Field label="Email address" htmlFor="wl-email" error={errors.email?.message}>
                <Input
                  id="wl-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  {...register("email")}
                />
              </Field>

              <Field label="Phone / WhatsApp" htmlFor="wl-phone" error={errors.phone?.message}>
                <Input
                  id="wl-phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="0803 000 0000"
                  aria-invalid={!!errors.phone}
                  {...register("phone")}
                />
              </Field>

              <Field label="Company name" htmlFor="wl-company" error={errors.company?.message}>
                <Input
                  id="wl-company"
                  autoComplete="organization"
                  placeholder="Your dispatch company"
                  aria-invalid={!!errors.company}
                  {...register("company")}
                />
              </Field>

              <Field label="Fleet size (optional)" htmlFor="wl-fleet">
                <Controller
                  control={control}
                  name="fleetSize"
                  render={({ field }) => (
                    <Select value={field.value ?? ""} onValueChange={field.onChange}>
                      <SelectTrigger id="wl-fleet">
                        <SelectValue placeholder="How many riders do you manage?" />
                      </SelectTrigger>
                      <SelectContent>
                        {FLEET_SIZES.map((size) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </Field>

              {/* Honeypot: hidden from people, irresistible to bots. */}
              <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="wl-website">Website</label>
                <input
                  id="wl-website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register("website")}
                />
              </div>

              {mutation.isError && (
                <p
                  role="alert"
                  className="rounded-md border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive"
                >
                  Something went wrong sending your details. Check your connection and try again.
                </p>
              )}

              <Button type="submit" disabled={mutation.isPending} className="mt-1 w-full">
                {mutation.isPending ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Join the Waitlist
                    <ArrowRight />
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                We&apos;ll only use your details for Fluxo pilot updates.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error && (
        <p className="text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
