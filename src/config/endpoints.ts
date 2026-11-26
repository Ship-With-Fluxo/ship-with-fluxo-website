/**
 * All outgoing API endpoints live here (same convention as the other projects).
 *
 * `waitlist` is the Google Apps Script "Web app" URL (ends in /exec) that
 * appends each submission to the Fluxo Waitlist Google Sheet.
 * Set it in `.env.local` as NEXT_PUBLIC_WAITLIST_ENDPOINT (see docs/google-sheet-setup.md).
 */
export const ENDPOINTS = {
  waitlist: process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT ?? "",
} as const;
