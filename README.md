# COPPAK — Next.js website

The Church of Pentecost Pakistan website, migrated from the deployed Astro site at https://coppak.org to Next.js 16, React 19, and TypeScript.

## Run locally

Use Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Production: `npm run build` then `npm start`. Type checking: `npm run typecheck`.

## Editing the website

- `app/**/page.tsx`: 38 editable React pages, preserving the original URLs and content.
- `components/SiteHeader.tsx`, `SiteFooter.tsx`, `SiteOverlays.tsx`: shared navigation and footer.
- `public/assets/`: recovered photographs, stylesheets, fonts, and theme JavaScript.
- `public/styles/pages/`: page-specific styles recovered from the original site.
- `components/LegacyScripts.tsx`: loads the existing theme plugins after React hydration. Internal links intentionally use full-page navigation to keep those plugins stable.
- `app/sitemap.ts`, `app/robots.ts`: search engine discovery.

## Deploy on Vercel

Import `churchofpentecost/coppak`, choose the Next.js framework, and use the repository root. Build command: `npm run build`. Leave the output directory on its framework default. No application secrets are required.

## Migration notes

The original authoring repository was not available. These React components were reconstructed from the published site, and the Cloudflare Worker asset manifest was used to recover the static files. The original Oxpins theme styling and client-side plugins are retained; this is not a redesign.

The old contact form used `https://formspree.io/f/YOUR_FORM_ID`, an unconfigured placeholder. The migrated form opens an email draft addressed to the existing website contact, `rev.jamil.nasir@gmail.com`. It explicitly asks the visitor to review and send the draft in their email application. Direct server-side email delivery requires configuring an email service later.

The existing public bank/PayPal donation information, external links, ministry statistics, and contact details are preserved. Migration does not validate payment processing, send messages, or update historical ministry figures.

Cloudflare analytics injection is removed. The existing Worker session and image bindings are not required for these static pages. The map continues to use Leaflet and OpenStreetMap; Google Fonts and existing external video/payment links remain external dependencies.

Unused template PHP handlers and HTML demos are not published by Next.js. No credentials, environment files, or Cloudflare account exports belong in this repository.

## Domain cutover

Validate the Vercel deployment before moving the domain. Use Vercel's project-specific DNS targets. The old Cloudflare Worker has a custom-domain binding for `coppak.org`, which must be detached during cutover. Preserve all Hostinger MX, SPF, DKIM, DMARC, and mail discovery records. Retain the existing Worker until the new site has been checked for rollback.

Domain registration and DNS hosting are separate from website hosting. Hosting can move to Vercel while DNS stays at Cloudflare; fully moving DNS additionally requires copying the zone and changing nameservers at the registrar.
