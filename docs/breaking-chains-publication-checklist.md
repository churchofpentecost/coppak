# Breaking the Chains — draft publication checklist

**Status: DRAFT. Do not merge or publish to the public website.**

- The new article route is created: `/news/breaking-the-chains-of-generational-slavery`.
- The News listing contains a draft card for the new article.
- The route references all **42 distinct original photos** (32 extracted from the 30-page report, plus 10 additional images supplied by the user).
- The article references the 13-page expanded PDF.
- **The binary photos and PDF are not yet in GitHub**. Until uploaded, the website deployment will show broken images/download links.

## Original media prepared for upload

The user-facing archive `COP_Pakistan_GitHub_Original_Media_Upload.zip` has the exact destination hierarchy:

- `public/assets/images/news/breaking-the-chains-generational-slavery/` — 42 original photographs.
- `public/reports/COP_Pakistan_Breaking_the_Chains_Impact_Report_Expanded.pdf` — downloadable PDF.

Extract this archive and upload its `public/` directory to **this draft branch**, never `main`.

## Quality and publication gate

1. Upload 42 photographs and one PDF to the draft branch.
2. Verify all 42 photo paths (correct spelling, case, image sizes and quality).
3. Confirm PDF download works.
4. Review and improve all 42 descriptive captions against actual photographs. Do not publish generic captions as final.
5. Check the event details, beneficiary privacy and sensitive information.
6. Check layouts on desktop and mobile and correct any overflow.
7. Create and test a Vercel preview URL.
8. Obtain explicit final approval from the site owner before merging or publishing.

**Scope:** New article and News card only. Leave homepage, navigation and all previous news articles unchanged.
