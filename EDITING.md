# Updating the COPPAK website

The Next.js website is connected to the Vercel project `coppak` in the COPPAK team.

- Production website: https://coppak.org
- Vercel address: https://coppak.vercel.app
- Project dashboard: https://vercel.com/coppak/coppak
- Source: https://github.com/churchofpentecost/coppak

## Make a small text change on GitHub

1. Open the relevant `app/.../page.tsx` file. The homepage is `app/page.tsx`; contact information is in `app/contact/page.tsx` and `components/SiteFooter.tsx`.
2. Click the pencil icon to edit. Change the text while keeping the surrounding JSX tags intact.
3. Commit the change to `main`. Vercel automatically builds and publishes successful commits from that branch.
4. Check the deployment status in Vercel, then refresh the website after it reports Ready.

For larger changes, create a branch and pull request so the Vercel preview can be reviewed before merging to `main`.

## Pages and images

- Page content: `app/**/page.tsx`
- Shared navigation: `components/SiteHeader.tsx`
- Footer and shared contact details: `components/SiteFooter.tsx`
- Photos and theme assets: `public/assets/`
- Styles: `public/styles/` and the existing theme styles in `public/assets/`

Keep existing URLs and image paths unless you also update their links. This site uses code-based editing; it does not include a visual CMS.

## Local development

Use Node.js 22 or newer. Run `npm ci`, then `npm run dev`. Before committing larger changes, run `npm run typecheck` and `npm run build`.

## Hosting and domain

GitHub stores the source; Vercel builds and hosts it. Cloudflare currently hosts DNS only for the apex website connection, with its web proxy disabled. Hostinger email DNS records are preserved. Moving DNS entirely away from Cloudflare is a separate nameserver migration at the domain registrar.

The contact form opens an email draft. Visitors must send it from their own email application; no server-side email service is configured.
