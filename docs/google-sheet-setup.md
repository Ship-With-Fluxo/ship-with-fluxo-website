# Waitlist -> Google Sheet setup

The waitlist modal posts every signup to a Google Sheet through a small Google Apps Script web app. No backend, no database.

## 1. Create the sheet and script

1. Create a new Google Sheet and name it **Fluxo Waitlist**.
2. Open **Extensions -> Apps Script**.
3. Delete the default code and paste the contents of [`google-apps-script.gs`](./google-apps-script.gs).
4. Save (Ctrl/Cmd + S).

The script creates a `Waitlist` tab with a header row the first time someone signs up.

## 2. Deploy it as a web app

1. Click **Deploy -> New deployment**.
2. Click the gear icon and choose **Web app**.
3. Set **Execute as: Me** and **Who has access: Anyone**.
4. Click **Deploy**, authorise when Google asks (Advanced -> Go to project), and copy the **Web app URL**. It ends in `/exec`.

Open that URL in a browser. You should see `{"ok":true,"service":"Fluxo waitlist"}`.

## 3. Connect the website

Create `.env.local` in the project root (copy `.env.example`):

```
NEXT_PUBLIC_WAITLIST_ENDPOINT=https://script.google.com/macros/s/XXXXXXXX/exec
```

Restart `npm run dev`. On the host (Vercel etc.), add the same variable and redeploy: `NEXT_PUBLIC_*` values are baked in at build time.

## 4. Test

Submit the form once and check that a new row appears in the `Waitlist` tab.

> The browser cannot read Google's reply (the request is `no-cors`), so the "You're on the list" screen means the request was sent, not that Google confirmed it. The sheet is the source of truth.

## Changing the script later

Use **Deploy -> Manage deployments -> Edit (pencil) -> Version: New version -> Deploy**. This keeps the same `/exec` URL. Creating a brand new deployment gives a different URL that you would have to update in `.env.local`.

## Changing the form fields

1. `src/components/shared/waitlist-modal.tsx`: schema + inputs.
2. `src/types/waitlist.ts` and `src/services/waitlist.ts`: payload.
3. `docs/google-apps-script.gs`: `HEADERS` and the `appendRow` list. Redeploy as a new version.
