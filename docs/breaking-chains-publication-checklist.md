# Breaking the Chains — publication checklist (draft only)

This branch adds a new Next.js article route at `/news/breaking-the-chains-of-generational-slavery` without changing existing news content or the homepage.

## Required original assets — NOT YET UPLOADED TO THIS BRANCH

Source files supplied by the report owner:
- `COP_Pakistan_Website_Ready_Package_Expanded.zip`
- `COP_Pakistan_Breaking_the_Chains_Impact_Report_Expanded.pdf`

Before preview acceptance, extract every original photo in the ZIP under:
`public/assets/images/news/breaking-the-chains-generational-slavery/`

The route currently references these 11 original-file names:
- original_page_02_01.jpeg
- original_page_05_01.jpeg
- original_page_10_01.jpeg
- 595117900_1199985242235279_3483781383811009436_n.jpg
- DJI_0146(1).JPG
- DSC_9175.JPG
- DSC_8588(1).JPG
- DSC_8643.JPG
- IMG_5403.JPG
- IMG_5410.JPG
- DSC_9192(1).JPG

The full 41-placement standalone article preview includes additional originals in the archive. These must also be incorporated before publication to match the approved visual design.

Copy the PDF to:
`public/reports/COP_Pakistan_Breaking_the_Chains_Impact_Report_Expanded.pdf`

## Remaining steps

1. Add all original photos and the PDF from the supplied ZIP package, with no outside images.
2. Integrate the full 41-photo gallery, replacing the current initial 11-image selection.
3. Add a new card to `/news` linking to this route; do not overwrite existing stories.
4. Verify responsive layout and captions; avoid cropping faces or important context.
5. Validate download link, image requests and metadata in a real Vercel preview.
6. Get explicit owner approval before merging to `main` or deploying production.

**Important:** This PR is an integration draft; it is not publication ready until binary assets and complete gallery have been added and checked.
