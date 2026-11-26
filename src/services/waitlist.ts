import { ENDPOINTS } from "@/config/endpoints";
import type { WaitlistPayload } from "@/types/waitlist";

/**
 * Sends one waitlist signup to the Google Sheet (via the Apps Script web app).
 *
 * Apps Script web apps don't send CORS headers, so the request is a "simple"
 * form POST with `no-cors`. The browser can't read the reply, which means a
 * resolved promise = "request sent", not "Google confirmed it". That is the
 * standard trade-off for this approach; check the sheet when testing.
 */
export async function submitWaitlist(payload: WaitlistPayload): Promise<void> {
  const url = ENDPOINTS.waitlist;

  if (!url) {
    if (process.env.NODE_ENV !== "production") {
      // Lets you test the whole modal flow before the Google Sheet is wired up.
      console.warn(
        "[waitlist] NEXT_PUBLIC_WAITLIST_ENDPOINT is not set. Simulating a successful submit.",
        payload,
      );
      await new Promise((resolve) => setTimeout(resolve, 900));
      return;
    }
    throw new Error("Waitlist endpoint is not configured.");
  }

  const body = new URLSearchParams();
  Object.entries(payload).forEach(([key, value]) => {
    body.set(key, value ?? "");
  });

  await fetch(url, {
    method: "POST",
    mode: "no-cors",
    body,
  });
}
