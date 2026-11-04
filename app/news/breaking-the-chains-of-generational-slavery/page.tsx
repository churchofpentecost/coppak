import type { Metadata } from "next";
import NewsLayout from "../../../components/NewsLayout";

const base = "/assets/images/news/breaking-the-chains-generational-slavery";
const photos = [
  [
    "original_page_01_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 1"
  ],
  [
    "original_page_02_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 2"
  ],
  [
    "original_page_03_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 3"
  ],
  [
    "original_page_04_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 4"
  ],
  [
    "original_page_05_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 5"
  ],
  [
    "original_page_06_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 6"
  ],
  [
    "original_page_07_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 7"
  ],
  [
    "original_page_08_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 8"
  ],
  [
    "original_page_09_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 9"
  ],
  [
    "original_page_10_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 10"
  ],
  [
    "original_page_11_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 11"
  ],
  [
    "original_page_12_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 12"
  ],
  [
    "original_page_13_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 13"
  ],
  [
    "original_page_14_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 14"
  ],
  [
    "original_page_15_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 15"
  ],
  [
    "original_page_16_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 16"
  ],
  [
    "original_page_17_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 17"
  ],
  [
    "original_page_17_02.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 18"
  ],
  [
    "original_page_18_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 19"
  ],
  [
    "original_page_19_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 20"
  ],
  [
    "original_page_20_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 21"
  ],
  [
    "original_page_21_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 22"
  ],
  [
    "original_page_22_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 23"
  ],
  [
    "original_page_23_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 24"
  ],
  [
    "original_page_24_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 25"
  ],
  [
    "original_page_25_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 26"
  ],
  [
    "original_page_26_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 27"
  ],
  [
    "original_page_27_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 28"
  ],
  [
    "original_page_27_02.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 29"
  ],
  [
    "original_page_28_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 30"
  ],
  [
    "original_page_29_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 31"
  ],
  [
    "original_page_30_01.jpeg",
    "Original documentary photograph from the COP Pakistan 2024 report",
    "Original report photograph 32"
  ],
  [
    "595117900_1199985242235279_3483781383811009436_n.jpg",
    "Original photograph supplied by COP Pakistan of the marriage celebration and household assistance",
    "Additional supplied photograph 1"
  ],
  [
    "DSC_9321(2).JPG",
    "Original photograph supplied by COP Pakistan of the marriage celebration and household assistance",
    "Additional supplied photograph 2"
  ],
  [
    "IMG_5403.JPG",
    "Original photograph supplied by COP Pakistan of the marriage celebration and household assistance",
    "Additional supplied photograph 3"
  ],
  [
    "IMG_5410.JPG",
    "Original photograph supplied by COP Pakistan of the marriage celebration and household assistance",
    "Additional supplied photograph 4"
  ],
  [
    "DSC_8588(1).JPG",
    "Original photograph supplied by COP Pakistan of the marriage celebration and household assistance",
    "Additional supplied photograph 5"
  ],
  [
    "DSC_8643.JPG",
    "Original photograph supplied by COP Pakistan of the marriage celebration and household assistance",
    "Additional supplied photograph 6"
  ],
  [
    "DSC_9175.JPG",
    "Original photograph supplied by COP Pakistan of the marriage celebration and household assistance",
    "Additional supplied photograph 7"
  ],
  [
    "DJI_0146(1).JPG",
    "Original photograph supplied by COP Pakistan of the marriage celebration and household assistance",
    "Additional supplied photograph 8"
  ],
  [
    "06 (33).jpg",
    "Original photograph supplied by COP Pakistan of the marriage celebration and household assistance",
    "Additional supplied photograph 9"
  ],
  [
    "DSC_9192(1).JPG",
    "Original photograph supplied by COP Pakistan of the marriage celebration and household assistance",
    "Additional supplied photograph 10"
  ]
] as const;

export const metadata: Metadata = {
  title: "Breaking the Chains of Generational Slavery | COP Pakistan",
  description: "Discover how The Church of Pentecost Pakistan supported 18 marriages and reached 36 families affected by generational debt bondage in Sheikhupura, Pakistan.",
  alternates: { canonical: "/news/breaking-the-chains-of-generational-slavery" },
  openGraph: {
    title: "Breaking the Chains of Generational Slavery | COP Pakistan",
    description: "Eighteen marriages, 36 families reached and a community united in hope.",
    url: "/news/breaking-the-chains-of-generational-slavery",
    images: [{ url: `${base}/DJI_0146(1).JPG`, alt: "Collective wedding celebration in Sheikhupura" }]
  }
};

export default function BreakingChainsArticle() {
  return <NewsLayout><article className="news-shell" style={{maxWidth:1100,margin:"0 auto",padding:"48px 20px 90px",color:"#1c2f3d"}}>
    <nav aria-label="Breadcrumb" className="news-breadcrumb"><a href="/">Home</a> / <a href="/news">News</a></nav>
    <header style={{textAlign:"center",maxWidth:900,margin:"28px auto 38px"}}>
      <p className="news-eyebrow">HUMANITARIAN IMPACT · SHEIKHUPURA, PAKISTAN · 6 DECEMBER 2024</p>
      <h1 style={{fontSize:"clamp(32px,5vw,64px)",lineHeight:1.12}}>Breaking the Chains of Generational Slavery</h1>
      <p style={{fontSize:"clamp(18px,2.5vw,25px)",lineHeight:1.55}}>18 daughters, 36 families, and a new beginning of hope</p>
      <p>How a plea from sixteen mothers became an extraordinary demonstration of Christian compassion and practical support.</p>
    </header>
    <figure style={{margin:"0 0 28px"}}><img src={`${base}/DJI_0146(1).JPG`} alt="Eighteen couples at a collective wedding celebration in Sheikhupura" style={{width:"100%",height:"auto",borderRadius:12}}/><figcaption>Original documentary photograph supplied by The Church of Pentecost Pakistan.</figcaption></figure>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:12,margin:"24px auto 44px",textAlign:"center"}}>
      {([["18","Marriages"],["36","Families reached"],["2,000+","Guests"]] as const).map(([number,label])=><div key={label} style={{background:"#f2f5f6",padding:"20px 8px",borderRadius:9}}><strong style={{fontSize:"clamp(22px,3vw,38px)",display:"block"}}>{number}</strong><span>{label}</span></div>)}
    </div>
    <div style={{maxWidth:800,margin:"0 auto",fontSize:18,lineHeight:1.85}}>
      <h2>The plea that began everything</h2>
      <p>In January 2024, during a pastoral visit to a congregation in Sheikhupura District, church leadership learned about families struggling under longstanding debts connected to brick-kiln work. Sixteen women, most of them widows, described the exhausting labour and financial pressure affecting their families. Their deepest concern was the future of their daughters.</p>
      <p>Several families had lived and worked in the kiln environment across generations. The mothers feared that borrowing additional money to arrange marriages would pass their existing burden of debt to another generation.</p>
      <h2>One mother’s request; a decision for sixteen</h2>
      <p>One mother suggested that the church draw a single daughter’s name by lottery. The others would rejoice if at least one young woman could receive help. Rev. Dr. Jamil Nasir and the church leadership instead committed to helping all sixteen daughters. As the initiative developed, two more families were welcomed, bringing the total to eighteen.</p>
      <p>The months that followed involved prayer, preparation, engagement with the families, discussions concerning debts and arrangements with the brick-kiln owner.</p>
      <h2>December 6, 2024: a brick kiln transformed</h2>
      <p>The collective wedding celebration took place at the same brick kiln where many of the families had worked. According to the church’s report, the owner made the premises available and suspended brick production for the occasion.</p>
      <p>More than 2,000 guests attended the celebration. The church coordinated wedding ceremonies, hospitality, seating, food and practical support. What had been a place of hardship became a place of communal celebration and dignity.</p>
      <h2>Beyond the wedding day: equipping new households</h2>
      <p>The initiative extended beyond wedding ceremonies. The church reports providing the eighteen couples with furniture and household necessities, including beds, sofas, tables, cabinets and crockery, to help them establish new homes without starting married life with another wedding loan.</p>
      <h2>Thirty-six families reached</h2>
      <p>According to The Church of Pentecost Pakistan’s account, thirty-six families connected to the eighteen marriages benefited through the wider initiative, including efforts to address existing debt burdens. These are the church’s reported outcomes; the report does not establish independent verification of permanent freedom from debt or employment exploitation.</p>
      <h2>Faith expressed through compassion</h2>
      <p>The account reflects the church’s conviction that faith in Jesus Christ must be shown through practical service, dignity and love. The relationships formed with families continued beyond the celebration, with fellowship and spiritual encouragement.</p>
      <blockquote style={{borderLeft:"4px solid #a7762c",paddingLeft:20,margin:"30px 0",fontStyle:"italic"}}>“Let us not love in word, neither in tongue; but in deed and in truth.” — 1 John 3:18 (KJV)</blockquote>
      <h2>Original photographs from the initiative</h2>
      <p>These photographs were supplied by COP Pakistan in its documentary report and accompanying original image uploads. They are grouped to illustrate the work, wedding celebration and household assistance.</p>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,290px),1fr))",gap:22,margin:"34px 0 50px"}}>
      {photos.map(([filename,alt,caption])=><figure key={filename} style={{margin:0}}><a href={`${base}/${filename}`} target="_blank" rel="noopener noreferrer"><img src={`${base}/${filename}`} alt={alt} loading="lazy" style={{width:"100%",height:260,objectFit:"contain",background:"#f2f4f5",borderRadius:9}}/></a><figcaption style={{fontSize:14,marginTop:6}}>{caption}</figcaption></figure>)}
    </div>
    <aside style={{background:"#f2f5f6",borderRadius:12,padding:"clamp(22px,4vw,42px)"}}>
      <h2>Explore partnership in compassion</h2>
      <p>We welcome conversations with churches, mission organizations and partners who share a commitment to dignity, relief and lasting opportunity for vulnerable families.</p>
      <p><a href="mailto:info@coppak.org">Contact info@coppak.org</a></p>
      <p><a href="/reports/COP_Pakistan_Breaking_the_Chains_Impact_Report_Expanded.pdf" download>Download the Full Impact Report (PDF)</a></p>
    </aside>
    <p style={{marginTop:30}}><a href="/news">← Back to all news</a></p>
  </article></NewsLayout>;
}
