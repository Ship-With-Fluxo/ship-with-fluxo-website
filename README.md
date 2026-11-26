# Fluxo website

Marketing / waitlist site for Fluxo (dispatch and rider tracking for Nigerian operators). Single landing page, built from the approved Lovable design.

**Stack:** Next.js (App Router) + TypeScript, Tailwind CSS v4, shadcn/ui (Radix), lucide-react, TanStack Query, react-hook-form + zod. Inter is self-hosted (no Google Fonts request).

## Run it

```bash
npm install
cp .env.example .env.local     # then set NEXT_PUBLIC_WAITLIST_ENDPOINT (see below)
npm run dev                    # http://localhost:3000
npm run build && npm start     # production check
```

With `NEXT_PUBLIC_WAITLIST_ENDPOINT` empty, `npm run dev` simulates a successful submit (and logs the payload to the console) so you can test the whole modal flow. A production build with no endpoint shows the error state instead.

## Waitlist -> Google Sheet

Every "Join the Waitlist" button opens one modal. Submissions go to a Google Sheet via Apps Script. Setup steps and the script are in [`docs/google-sheet-setup.md`](docs/google-sheet-setup.md).

## Structure

```
src/
  app/
    layout.tsx               fonts, metadata, QueryProvider
    (public)/layout.tsx      header, footer, WaitlistProvider
    (public)/page.tsx        landing page (sections in order)
    icon.png, apple-icon.png favicons
    globals.css              design tokens (colours, radius) + utilities
  components/
    ui/                      shadcn: button, input, label, dialog, select, accordion
    icons/pack.tsx           ALL custom SVGs (hero map illustration, pin)
    layout/                  header, footer
    sections/                hero (+ hero/dashboard-card), problem, how-it-works,
                             features, why-fluxo, audience, cta, faq
    shared/                  waitlist-modal, waitlist-button, section-heading
  config/
    endpoints.ts             all API endpoints (waitlist)
    site.ts                  site meta + nav links
  data/landing.ts            all page copy and list content
  providers/                 query-provider, waitlist-provider
  services/waitlist.ts       POST to the Google Sheet
  types/ lib/ fonts/
public/images/               logo (full, mark, wordmark)
public/images/dashboard/     dashboard images (e.g. the final map)
docs/                        Google Sheet setup + Apps Script
```

## Editing content

All copy lives in `src/data/landing.ts`. Change text there, not in the section components. Nav links are in `src/config/site.ts`.

## Replacing the hero map

The map in the hero card is a drawn illustration (`MapIllustration` in `components/icons/pack.tsx`). To use the final map design:

1. Export it (PNG/WebP, about 1200 px wide) to `public/images/dashboard/map.png`.
2. In `src/components/sections/hero/dashboard-card.tsx`, replace `<MapIllustration ... />` with
   `<Image src="/images/dashboard/map.png" alt="..." fill sizes="(min-width: 1024px) 380px, 90vw" className="object-cover" />` (import `Image` from `next/image`).
3. The "On route / Running late" legend is an HTML overlay in the same file. Delete it if the design already includes one.

## Brand tokens

Defined in `src/app/globals.css`: primary `#D26433`, background `#FDFCF9`, section grey `#F6F4F0`, peach accent `#FFF1E6`. Container: `container-x` (max 1280px). Section spacing: `section-y`.

## Notes

- Button sizes: default is `h-10` (forms, modal); `lg` is `h-12` and is used only for the large marketing CTAs to match the design.
- Next.js 16 `cacheComponents` is on (scaffold default), so avoid `new Date()` / `Math.random()` in server components.
