# Breaking the Chains — publication verification

Scope: the new article, its News listing card and supporting assets only. Other news articles, shared navigation and the homepage remain unchanged.

The owner authorized publication after successful verification on 4 November 2026.

## Completed

- Added all 42 original photographs and the 13-page PDF from `COP_Pakistan_GitHub_Original_Media_Upload.zip`.
- Verified all 43 files against the ZIP with SHA-256; originals are unchanged.
- Decoded all photographs successfully and matched every gallery filename, including case and spaces.
- Reviewed all photographs and replaced generic captions with descriptions of the visible scenes.
- Added intrinsic image dimensions and URL encoding for original-photo links.
- Rendered and inspected all 13 PDF pages.
- TypeScript check and production build pass.
- Browser checks pass at 1440, 768, 390 and 320 pixels; no horizontal overflow, failed requests or page errors.
- The News card opens the correct article; all 42 original links and all 43 asset HTTP responses match source hashes.
- A real browser PDF download matches the ZIP original byte for byte.

## Required before publication

- Confirm the Vercel preview is READY for the final branch commit and test that exact preview.
- Confirm the final diff changes no other news article, then merge PR #9.
- Verify the production article and download after deployment.

Article: `/news/breaking-the-chains-of-generational-slavery`

Original photographs: `public/assets/images/news/breaking-the-chains-generational-slavery/`

Report: `public/reports/COP_Pakistan_Breaking_the_Chains_Impact_Report_Expanded.pdf`
