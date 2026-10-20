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

## Publish a news article

The News page is at `/news`, linked from the desktop menu, mobile menu and footer. News articles live in `data/news.ts`; ministry spotlights live in `app/news/page.tsx`.

Add an object inside `newsPosts` in `data/news.ts` with these fields:

- `slug`: a unique URL name such as `community-gathering` (lowercase letters, numbers and hyphens).
- `title`, `category`, `excerpt`: the article heading, category and short summary.
- `date`: the actual publication date in `YYYY-MM-DD` format.
- `image`: an existing public image path, such as `/assets/images/coppak/outreach/alpha-groups/01.jpg`.
- `imageAlt`: a short, accurate description of the photo.
- `paragraphs`: an array of quoted text paragraphs forming the article.

Commit to `main`. Vercel publishes the article at `/news/your-slug`, adds its card to News (newest first), and includes it in the sitemap. Use real, approved news only; the announcements section currently has no posts. No dashboard or CMS is required.

## Update the Books page

The Books page is at `/books`, with links in the desktop menu, mobile menu and footer. Edit `app/books/page.tsx` to update the book description or Amazon destination. Book covers are stored in `public/assets/images/books/`; page styles are in `public/styles/pages/books.css`. The featured book links to Amazon ASIN `B0HK3NZWLH`. Prices are shown on Amazon so they stay current.

The second book, **Does the Bible Prohibit Alcohol?**, uses the supplied `Alcohol_Book_Cover.jpg` artwork, optimized as `public/assets/images/books/does-the-bible-prohibit-alcohol.webp`. The page displays the front panel of the full cover spread. Its subtitle follows the supplied cover. Its **Find on Amazon** button searches by exact title and author because the direct product listing has not been verified. When the correct listing is available, replace `alcoholBookAmazonUrl` in `app/books/page.tsx`, change the button to **View on Amazon**, and update the search explanation beneath it. Do not reuse the Cana book’s ASIN for this title.

## Homepage hero carousel

Edit the three slides in `components/HomeHero.tsx`; visual styles are in `public/styles/pages/home-hero.css`. Each slide has its own photograph, heading, description and links. The carousel advances every seven seconds and supports previous/next controls, slide indicators, pause/play, arrow keys and touch swiping. It pauses on hover, keyboard interaction and when the browser tab is hidden. Visitors who prefer reduced motion start with autoplay paused. Manual slide selection also pauses autoplay until the visitor chooses Play.
