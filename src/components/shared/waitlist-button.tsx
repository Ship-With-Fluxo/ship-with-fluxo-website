"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useWaitlist } from "@/providers/waitlist-provider";

type Props = Omit<React.ComponentProps<typeof Button>, "onClick" | "children"> & {
  children?: React.ReactNode;
  showArrow?: boolean;
};

/** Every "Join the Waitlist" button on the site is this one component. */
export function WaitlistButton({
  children = "Join the Waitlist",
  showArrow = true,
  ...props
}: Props) {
  const { openWaitlist } = useWaitlist();

  return (
    <Button type="button" onClick={() => openWaitlist()} {...props}>
      {children}
      {showArrow && <ArrowRight />}
    </Button>
  );
}
