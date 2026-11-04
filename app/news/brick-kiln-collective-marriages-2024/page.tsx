import type { Metadata } from "next";
import NewsLayout from "../../../components/NewsLayout";

export const metadata: Metadata = {
  title: "Breaking the Chains of Generational Slavery | COP Pakistan",
  description: "How The Church of Pentecost Pakistan helped eighteen couples and thirty-six families in a collective marriage celebration at a Sheikhupura brick kiln on December 6, 2024.",
  alternates: { canonical: "/news/brick-kiln-collective-marriages-2024" },
  openGraph: {
    type: "article",
    title: "Breaking the Chains of Generational Slavery",
    description: "18 couples married. 36 families reached. Over 2,000 guests. A story of Christian compassion and practical support.",
    url: "/news/brick-kiln-collective-marriages-2024",
    images: [{ url: "/assets/images/coppak/projects/collective-marriages/01.jpg" }]
  }
};

const base = "/assets/images/coppak/projects/collective-marriages/";
const photos = [
  ["01.jpg", "The collective marriage initiative in Sheikhupura District"],
  ["02.jpg", "Church and families gathered to celebrate"],
  ["03.jpg", "Community moments from the collective weddings"],
  ["04.jpg", "Wedding celebration and church ministry"],
  ["05.jpg", "Families celebrating a new beginning"],
  ["06.jpg", "Collective marriage event in Sheikhupura"],
  ["07.jpg", "Community gathering for the couples"],
  ["08.jpg", "Church compassion ministry in action"],
  ["09.jpg", "Moments from the wedding event"],
  ["10.jpg", "Celebration with couples and families"],
  ["11.jpg", "A moment of hope at the collective weddings"]
];
const sectionStyle = { padding: "32px 0", borderTop: "1px solid #e4e8e6" } as const;
const hStyle = { color: "#17383a", fontSize: "clamp(1.65rem, 3.5vw, 2.4rem)", lineHeight: 1.2 } as const;
export default function CollectiveWeddingReport() {
  return <NewsLayout>
    <article className="news-article news-shell">
      <nav className="news-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/news">News</a><span aria-hidden="true">/</span><span>Collective weddings</span></nav>
      <div className="news-article__content" style={{ maxWidth: 1100, margin: "0 auto", padding: "16px 12px 80px" }}>
        <header style={{ padding: "22px 0 28px" }}>
          <p className="news-eyebrow">PENTSOS · HUMANITARIAN IMPACT · SHEIKHUPURA, PAKISTAN</p>
          <h1 style={{ color: "#17383a", fontSize: "clamp(2.5rem, 6vw, 4.8rem)", lineHeight: 1.08, maxWidth: 960 }}>Breaking the Chains of Generational Slavery</h1>
          <p style={{ fontSize: "clamp(1.15rem, 2.4vw, 1.5rem)", lineHeight: 1.5, color: "#526a69" }}>Eighteen weddings bring hope and practical support to families in Sheikhupura.</p>
          <p style={{ color: "#677575" }}>Event: December 6, 2024 · The Church of Pentecost – Pakistan</p>
        </header>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", margin: "0 0 26px" }}>
          <a className="news-button news-report-download" href="/reports/breaking-the-chains-collective-weddings-web-edition.pdf" download>
            Download illustrated report (PDF) <span>11-page website edition ↓</span>
          </a>
          <span style={{ fontSize: 13, color: "#61716e" }}>Website edition illustrated with photos from the COP Pakistan archive.</span>
        </div>
        <figure style={{ margin: "0 0 28px" }}><img src={base + "01.jpg"} width={1400} height={850} alt="The Church of Pentecost Pakistan collective marriage celebration" style={{ width: "100%", height: "auto", maxHeight: 650, objectFit: "cover", borderRadius: 8 }} /><figcaption style={{ fontSize: 13, color: "#647674", paddingTop: 9 }}>A collective celebration of marriage and new beginnings in Sheikhupura District.</figcaption></figure>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(145px, 1fr))", gap: 12, padding: "18px 0 36px" }}>
          {([["18", "Couples married"], ["36", "Families reached"], ["2,000+", "Guests welcomed"], ["18", "Households equipped"]] as const).map(([value, label]) =>
            <div key={label} style={{ background: "#f3f0e9", padding: "21px 13px", textAlign: "center", borderRadius: 5 }}><strong style={{ display: "block", fontSize: 34, fontFamily: "Georgia, serif", color: "#17383a" }}>{value}</strong><span style={{ fontSize: 12, fontWeight: 700, color: "#596966", textTransform: "uppercase" }}>{label}</span></div>
          )}
        </div>
        <p style={{ fontSize: 19, fontWeight: 700, color: "#17383a" }}>The brides’ families’ outstanding kiln debts were cleared. The bridegrooms’ families were already debt-free.</p>
        <section style={sectionStyle}><p className="news-eyebrow">THE STORY</p><h2 style={hStyle}>Eighteen new beginnings</h2>
          <p>In January 2024, sixteen mothers, most of them widows, approached The Church of Pentecost Pakistan. Their families were struggling under brick-kiln debt, and they feared their daughters would inherit the same hardship. They hoped the church could help even one daughter begin a different life.</p>
          <p>On December 6, 2024, their appeal led to a collective wedding celebration for eighteen couples at a brick kiln in Sheikhupura District. Following nearly eleven months of prayer and preparation, the church welcomed more than 2,000 guests and provided furniture and household essentials for all eighteen couples.</p>
          <p>In total, the initiative reached 36 families across the brides’ and bridegrooms’ sides. It brought together prayer, pastoral care and meaningful practical help.</p>
        </section>
        <section style={sectionStyle}><p className="news-eyebrow">THE MOTHERS’ PLEA</p><h2 style={hStyle}>A request to help just one daughter</h2>
          <p>During a pastoral visit, the mothers spoke about exhausting work, debt deductions, and uncertainty about their children’s futures. Some families had experienced the burden of kiln-related debts for two generations. The cost of even modest weddings and basic household furnishings threatened to create yet more debt.</p>
          <p>One mother asked Rev. Dr. Jamil Nasir to write down the daughters’ names and select just one to receive help. She said the others would rejoice if even one daughter had that opportunity.</p>
          <p>Moved by the request, church leaders committed to supporting all sixteen daughters. When two additional families approached with similar needs, the plan grew to eighteen weddings.</p>
        </section>
        <section style={sectionStyle}><p className="news-eyebrow">PREPARATION & CELEBRATION</p><h2 style={hStyle}>A brick kiln becomes a wedding venue</h2>
          <p>Local pastors worked with the families throughout the year, coordinating wedding arrangements, hospitality, household goods, and discussions about kiln debts. The kiln owner agreed to make the premises available and suspend production for the occasion.</p>
          <p>Where families ordinarily worked under difficult conditions, a joyful celebration took place. Relatives, guests, church leaders and the community gathered as eighteen couples celebrated their marriages together.</p>
        </section>
        <section style={sectionStyle}><p className="news-eyebrow">PRACTICAL SUPPORT</p><h2 style={hStyle}>Furnishing eighteen new households</h2>
          <p>The church’s support extended beyond the wedding ceremonies. Each couple received household essentials, including beds, sofas, tables, cabinets and crockery. Buildings were not part of the provision.</p>
          <p>These items reduced the pressure to borrow for basic furnishings. The initiative also cleared the brides’ families’ outstanding kiln debts, helping them move forward without that particular obligation. The bridegrooms’ families had been debt-free already.</p>
          <p>The families continued their relationship with the church through fellowship, encouragement and spiritual support.</p>
        </section>
        <section style={sectionStyle}><p className="news-eyebrow">PHOTOGRAPHS</p><h2 style={hStyle}>The celebration in pictures</h2><p>Photographs from The Church of Pentecost Pakistan’s existing collective-marriages archive. Select an image to view it in full.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {photos.slice(1).map(([name, alt]) => <figure key={name} style={{ margin: 0 }}><a href={base + name} target="_blank" rel="noopener noreferrer"><img src={base + name} alt={alt} loading="lazy" width={800} height={520} style={{ width: "100%", height: 210, objectFit: "cover", borderRadius: 5 }} /></a><figcaption style={{ fontSize: 12, color: "#687674", paddingTop: 6 }}>{alt}</figcaption></figure>)}
          </div>
        </section>
        <section style={sectionStyle}><p className="news-eyebrow">FAITH EXPRESSED THROUGH COMPASSION</p><h2 style={hStyle}>Christian compassion in action</h2>
          <p>For The Church of Pentecost Pakistan, this ministry reflects the conviction that proclaiming the Gospel includes responding to people’s practical needs. Prayer, pastoral support and material assistance came together for families facing hardship.</p>
          <blockquote style={{ margin: "22px 0", padding: "16px 24px", borderLeft: "4px solid #b49353", fontFamily: "Georgia, serif", fontSize: 23, color: "#17383a" }}>“Let us not love in word, neither in tongue; but in deed and in truth.” — 1 John 3:18 (KJV)</blockquote>
          <p>Our prayer is that these couples will continue to grow in faith, strengthen their households, and build lives with greater stability and opportunity.</p>
        </section>
        <aside style={{ background: "#17383a", color: "#fff", borderRadius: 8, padding: "34px 28px", marginTop: 28 }}>
          <p style={{ color: "#d7b77b", fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", fontSize: 12 }}>Walk alongside these families</p>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.6rem, 3vw, 2.3rem)" }}>Pray and partner with us</h2>
          <p>Pray for these eighteen couples, their families and other mothers and children facing hardship in brick-kiln communities. We welcome conversations with churches, ministries and individuals interested in supporting this work.</p>
          <p><a href="mailto:info@coppak.org?subject=Partnership%20Inquiry%20-%20Collective%20Marriages" style={{ color: "#ffe0a8", fontWeight: 700 }}>Contact info@coppak.org ↗</a> &nbsp; | &nbsp; <a href="/donate" style={{ color: "#ffe0a8", fontWeight: 700 }}>Explore giving ↗</a></p>
        </aside>
        <p style={{ marginTop: 30 }}><a href="/news" className="news-text-link">← Back to news &amp; stories</a></p>
      </div>
    </article>
  </NewsLayout>;
}