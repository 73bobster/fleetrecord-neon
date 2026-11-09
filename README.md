# FleetRecord – Neon test copy (proof of concept)

This is a **test copy** of FleetRecord that runs on a **Neon** database (Neon Auth + Neon Data API) instead of Supabase.
It lives at https://fleetrecord.cobaltpinksoftware.com and is not the live app (https://fleetrecord.app).

- Data is copied from the live system each night by a separate job (read-only on the live side) and reset. Changes made here are not kept and never reach the live system.
- Sign-in is a separate Neon Auth account, matched to the live user ids by email for allow-listed users only.
- Document upload and download are switched off on this copy.
- `supabase.js` is a build of `tools/entry.js` (Neon's Supabase-compatible client). Rebuild with esbuild: `esbuild tools/entry.js --bundle --minify --format=iife --outfile=supabase.js` (needs `@neon/neon-js` installed; see `tools/package.json`).
- The app code is copied from https://github.com/73bobster/FleetRecord. Only `config.js`, `supabase.js`, `test-banner.*`, `index.html` (banner, noindex) and `CNAME` differ.
