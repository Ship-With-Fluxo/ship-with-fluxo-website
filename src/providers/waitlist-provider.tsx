"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

import { WaitlistModal } from "@/components/shared/waitlist-modal";

type WaitlistContextValue = {
  /** Open the waitlist modal, optionally pre-filling the email field. */
  openWaitlist: (email?: string) => void;
};

const WaitlistContext = createContext<WaitlistContextValue | null>(null);

export function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [prefillEmail, setPrefillEmail] = useState("");

  const openWaitlist = useCallback((email?: string) => {
    setPrefillEmail(email?.trim() ?? "");
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ openWaitlist }), [openWaitlist]);

  return (
    <WaitlistContext.Provider value={value}>
      {children}
      <WaitlistModal open={open} onOpenChange={setOpen} prefillEmail={prefillEmail} />
    </WaitlistContext.Provider>
  );
}

export function useWaitlist() {
  const ctx = useContext(WaitlistContext);
  if (!ctx) {
    throw new Error("useWaitlist must be used inside <WaitlistProvider>");
  }
  return ctx;
}
