import type { Metadata } from "next";
import NewsLayout from "../../../components/NewsLayout";
import "./article.css";

const base = "/assets/images/news/breaking-the-chains-generational-slavery";
const photos = [
  [
    "original_page_01_01.jpeg",
    "A bride and groom beside the wedding cake as guests gather behind them.",
    1430,
    955
  ],
  [
    "original_page_02_01.jpeg",
    "Church visitors meet workers beside rows of newly formed bricks.",
    1431,
    1056
  ],
  [
    "original_page_03_01.jpeg",
    "A family pictured beside brick-kiln housing in Sheikhupura District.",
    1430,
    955
  ],
  [
    "original_page_04_01.jpeg",
    "Women gathered at the church during the initiative documented in the report.",
    1535,
    1025
  ],
  [
    "original_page_05_01.jpeg",
    "Families and church visitors gathered among brick stacks at the kiln.",
    1431,
    1073
  ],
  [
    "original_page_06_01.jpeg",
    "A bride and accompanying guests approach the outdoor wedding celebration.",
    1299,
    866
  ],
  [
    "original_page_07_01.jpeg",
    "An elevated view of the wedding procession arriving at the venue.",
    1428,
    803
  ],
  [
    "original_page_08_01.jpeg",
    "Couples assembled on stage before the gathered community.",
    1299,
    866
  ],
  [
    "original_page_09_01.jpeg",
    "Couples kneel during prayer at the collective wedding ceremony.",
    1299,
    867
  ],
  [
    "original_page_10_01.jpeg",
    "Beds and cabinets arranged beside the kiln walls for the new households.",
    1428,
    803
  ],
  [
    "original_page_11_01.jpeg",
    "Wedding guests gather in front of the main stage.",
    1428,
    803
  ],
  [
    "original_page_12_01.jpeg",
    "A groom accompanied by relatives and guests at the celebration.",
    1430,
    955
  ],
  [
    "original_page_13_01.jpeg",
    "A groom makes his way through the gathering with family and friends.",
    1430,
    955
  ],
  [
    "original_page_14_01.jpeg",
    "An aerial view of the wedding venue and surrounding brick-kiln community.",
    1428,
    803
  ],
  [
    "original_page_15_01.jpeg",
    "The outdoor catering area prepared to serve guests at the celebration.",
    1430,
    955
  ],
  [
    "original_page_16_01.jpeg",
    "Large cooking pots lined up in the catering area beside the venue.",
    1430,
    955
  ],
  [
    "original_page_17_01.jpeg",
    "An aerial view of the entrance and seating at the wedding venue.",
    1428,
    803
  ],
  [
    "original_page_17_02.jpeg",
    "Brides and accompanying guests walk toward the ceremony.",
    1430,
    955
  ],
  [
    "original_page_18_01.jpeg",
    "A view along the stage as couples take part in the wedding service.",
    1430,
    955
  ],
  [
    "original_page_19_01.jpeg",
    "A minister reads during a wedding ceremony with a bride and groom.",
    1430,
    955
  ],
  [
    "original_page_20_01.jpeg",
    "A couple cuts the multi-tiered wedding cake.",
    1430,
    955
  ],
  [
    "original_page_21_01.jpeg",
    "A newly married couple speaks with church representatives beside household furniture.",
    1430,
    955
  ],
  [
    "original_page_22_01.jpeg",
    "A truck and packed household items ready for transportation from the venue.",
    1280,
    960
  ],
  [
    "original_page_23_01.jpeg",
    "An elevated view of couples assembled across the main stage.",
    1431,
    1073
  ],
  [
    "original_page_24_01.jpeg",
    "A newly married couple meets church representatives beside furnishings.",
    1430,
    953
  ],
  [
    "original_page_25_01.jpeg",
    "A groom and bride speak with church representatives after the ceremony.",
    1430,
    953
  ],
  [
    "original_page_26_01.jpeg",
    "Couples and guests walk along the carpet toward the celebration.",
    1430,
    953
  ],
  [
    "original_page_27_01.jpeg",
    "A truck loaded with furniture for the new households.",
    1430,
    955
  ],
  [
    "original_page_27_02.jpeg",
    "A loaded truck passes through a residential street.",
    1430,
    955
  ],
  [
    "original_page_28_01.jpeg",
    "Furniture and household goods loaded on a decorated truck.",
    1430,
    955
  ],
  [
    "original_page_29_01.jpeg",
    "Couples on stage beside The Church of Pentecost Pakistan flags.",
    1430,
    953
  ],
  [
    "original_page_30_01.jpeg",
    "Brides and grooms gathered across the stage during the celebration.",
    1430,
    953
  ],
  [
    "595117900_1199985242235279_3483781383811009436_n.jpg",
    "A view from the stage across the outdoor wedding gathering.",
    1280,
    960
  ],
  [
    "DSC_9321(2).JPG",
    "A bride and groom stand beside the wedding cake at sunset.",
    2048,
    1366
  ],
  [
    "IMG_5403.JPG",
    "A couple and family members pictured beside household furnishings.",
    2048,
    1365
  ],
  [
    "IMG_5410.JPG",
    "A newly married couple stands among furniture supplied for new homes.",
    2048,
    1365
  ],
  [
    "DSC_8588(1).JPG",
    "A truck carries furniture and household goods prepared for transportation.",
    2048,
    1366
  ],
  [
    "DSC_8643.JPG",
    "Rows of sofas, beds and cabinets assembled for the newly married households.",
    2048,
    1366
  ],
  [
    "DSC_9175.JPG",
    "A bride and groom take part in their wedding ceremony with a minister.",
    2048,
    1366
  ],
  [
    "DJI_0146(1).JPG",
    "An elevated view of the collective ceremony and couples on stage.",
    2048,
    1536
  ],
  [
    "06 (33).jpg",
    "An aerial view of seating and preparations at the outdoor wedding venue.",
    2048,
    1152
  ],
  [
    "DSC_9192(1).JPG",
    "A line of couples participating in the wedding celebrations.",
    2048,
    1366
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
  return <NewsLayout><article className="news-shell breaking-chains-article" style={{maxWidth:1100,margin:"0 auto",padding:"48px 20px 90px",color:"#1c2f3d"}}>
    <nav aria-label="Breadcrumb" className="news-breadcrumb"><a href="/">Home</a> / <a href="/news">News</a></nav>
    <header style={{textAlign:"center",maxWidth:900,margin:"28px auto 38px"}}>
      <p className="news-eyebrow">HUMANITARIAN IMPACT · SHEIKHUPURA, PAKISTAN · 6 DECEMBER 2024</p>
      <h1 style={{fontSize:"clamp(32px,5vw,64px)",lineHeight:1.12}}>Breaking the Chains of Generational Slavery</h1>
      <p style={{fontSize:"clamp(18px,2.5vw,25px)",lineHeight:1.55}}>18 daughters, 36 families, and a new beginning of hope</p>
      <p>How a plea from sixteen mothers became an extraordinary demonstration of Christian compassion and practical support.</p>
    </header>
    <figure style={{margin:"0 0 28px"}}><img src={`${base}/DJI_0146(1).JPG`} alt="Couples assembled on stage at the collective wedding celebration in Sheikhupura" width={2048} height={1536} fetchPriority="high" style={{width:"100%",height:"auto",borderRadius:12}}/><figcaption>Original documentary photograph supplied by The Church of Pentecost Pakistan.</figcaption></figure>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:12,margin:"24px auto 44px",textAlign:"center"}}>
      {([["18","Marriages"],["36","Families reached"],["2,000+","Guests"]] as const).map(([number,label])=><div key={label} style={{background:"#f2f5f6",padding:"20px 8px",borderRadius:9}}><strong style={{fontSize:"clamp(22px,3vw,38px)",display:"block"}}>{number}</strong><span>{label}</span></div>)}
    </div>
    <div className="breaking-chains-copy" style={{maxWidth:800,margin:"0 auto",fontSize:18,lineHeight:1.85}}>
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
      <p>These photographs were supplied by COP Pakistan in its documentary report and accompanying original image uploads. Select any photograph to view the original in full size.</p>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,290px),1fr))",gap:22,margin:"34px 0 50px"}}>
      {photos.map(([filename,caption,width,height])=><figure key={filename} style={{margin:0}}><a href={`${base}/${encodeURIComponent(filename)}`} target="_blank" rel="noopener noreferrer"><img src={`${base}/${encodeURIComponent(filename)}`} alt={caption} width={width} height={height} loading="lazy" decoding="async" style={{width:"100%",height:260,objectFit:"contain",background:"#f2f4f5",borderRadius:9}}/></a><figcaption style={{fontSize:14,marginTop:6}}>{caption}</figcaption></figure>)}
    </div>
    <aside style={{background:"#f2f5f6",borderRadius:12,padding:"clamp(22px,4vw,42px)"}}>
      <h2>Explore partnership in compassion</h2>
      <p>We welcome conversations with churches, mission organizations and partners who share a commitment to dignity, relief and lasting opportunity for vulnerable families.</p>
      <p><a href="mailto:info@coppak.org">Contact info@coppak.org</a></p>
      <p><a className="breaking-chains-download" href="/reports/COP_Pakistan_Breaking_the_Chains_Impact_Report_Expanded.pdf" download>Download the Full Impact Report <span>(PDF · 13 pages · 11.2 MB)</span></a></p>
    </aside>
    <p style={{marginTop:30}}><a href="/news">← Back to all news</a></p>
  </article></NewsLayout>;
}
