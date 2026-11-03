import type { Metadata } from "next";
import NewsLayout from "../../../components/NewsLayout";

export const metadata: Metadata = {
  title: "Breaking the Chains: 18 Daughters, 18 New Beginnings | COP Pakistan",
  description: "The Church of Pentecost Pakistan's collective wedding and family restoration initiative at a brick kiln in Sheikhupura, December 6, 2024.",
  alternates: { canonical: "/news/brick-kiln-collective-marriages-2024" },
  openGraph: {
    type: "article",
    title: "Breaking the Chains: 18 Daughters, 18 New Beginnings",
    description: "From a mother's appeal for one daughter to eighteen weddings and thirty-six families reached.",
    url: "/news/brick-kiln-collective-marriages-2024",
    images: [{ url: "/assets/images/coppak/projects/collective-marriages/01.jpg", width: 1200, height: 800 }],
    publishedTime: "2026-11-02T12:00:00Z",
  },
};

const marriage = "/assets/images/coppak/projects/collective-marriages/";
const kiln = "/assets/images/coppak/projects/brick-kiln/";

type Photo = { src: string; alt: string; caption: string };
const photos: Photo[] = [
  { src: kiln + "01.jpg", alt: "Church representatives meet families at a brick kiln", caption: "The story began with listening to families facing hardship at a brick kiln." },
  { src: kiln + "03.jpg", alt: "The brick kiln community in Sheikhupura", caption: "A community whose working lives were shaped by the brick-kiln economy." },
  { src: marriage + "01.jpg", alt: "Brides and grooms at the collective wedding event", caption: "The grounds of the brick kiln became a setting for honour, prayer and celebration." },
  { src: marriage + "02.jpg", alt: "Multiple couples celebrating on the wedding platform", caption: "Eighteen couples celebrated a new beginning together." },
  { src: marriage + "03.jpg", alt: "Families and guests witnessing the marriage ceremony", caption: "Church leaders and families gathered around the couples." },
  { src: marriage + "05.jpg", alt: "Wedding ceremony with brides in white dresses", caption: "Pastors guided the couples through a public Christian marriage service." },
  { src: marriage + "07.jpg", alt: "Couples taking part in the collective marriage", caption: "Every couple was honoured with a dignified celebration." },
  { src: marriage + "09.jpg", alt: "Wedding celebration at the brick kiln", caption: "The community witnessed a day of faith, joy and shared hope." },
  { src: marriage + "11.jpg", alt: "The Church of Pentecost Pakistan collective weddings", caption: "The ministry's work continued beyond the wedding ceremonies." },
  { src: kiln + "07.jpg", alt: "Brick kiln families in a rural working environment", caption: "The wider mission is to help vulnerable households move toward stability and freedom." },
  { src: kiln + "10.jpg", alt: "A brick kiln setting in Pakistan", caption: "The need for practical and sustained family support remains." },
  { src: kiln + "14.jpg", alt: "Church outreach among brick kiln families", caption: "Partnership can help the church stand beside more families facing inherited debt." },
];

const chapters = [
  {
    eyebrow: "01 / THE ENCOUNTER",
    title: "Sixteen mothers. One desperate appeal.",
    paragraphs: [
      "In January 2024, a pastoral visit to a congregation in Sheikhupura District brought the leadership of The Church of Pentecost Pakistan face to face with a painful reality: families working at a brick kiln described years of inherited debt and financial insecurity.",
      "Sixteen women, most of them widows, appealed for help. Several had watched their daughters grow up amid exhausting work, limited means and the constant threat of new borrowing. The mothers feared that marriage expenses could bind another generation to the same cycle of debt.",
      "They did not ask for a grand programme. One mother suggested that the names of all sixteen daughters be placed in a lottery so at least one young woman might receive help. The other mothers would celebrate the opportunity given to her.",
    ],
    image: 0,
  },
  {
    eyebrow: "02 / A DECISION OF FAITH",
    title: "The church refused to choose only one.",
    paragraphs: [
      "The plea deeply moved Rev. Dr. Jamil Nasir and the church leadership. What would happen to the fifteen mothers whose daughters were not selected? Rather than drawing one name, the church committed to helping all sixteen daughters.",
      "Two more families later came forward with similar needs, expanding the undertaking to eighteen young women. The commitment was far larger than the resources immediately available, but it gave the congregation a shared mission: to make the Gospel visible through compassion.",
    ],
    image: 1,
  },
  {
    eyebrow: "03 / ELEVEN MONTHS OF PREPARATION",
    title: "Faith became practical action.",
    paragraphs: [
      "Through months of prayer and planning, pastors listened to families, coordinated with the brick-kiln owner, prepared marriage arrangements, and worked to address the financial pressures facing the households.",
      "The undertaking included more than a ceremony. It required hospitality, food for guests, furniture and basic household supplies to help couples begin married life without taking on new wedding-related debt.",
    ],
    image: 2,
  },
  {
    eyebrow: "04 / DECEMBER 6, 2024",
    title: "The brick kiln became a place of celebration.",
    paragraphs: [
      "On December 6, 2024, the same grounds associated with strenuous labour became a place of music, prayer, dignity and public rejoicing. The kiln owner made the premises available, and brick production was suspended for the occasion.",
      "Eighteen couples were married in a collective Christian celebration attended, according to the church's report, by more than 2,000 guests. Mothers who once believed even one wedding was beyond their reach watched the couples honoured before their families and community.",
    ],
    image: 3,
  },
  {
    eyebrow: "05 / MORE THAN A WEDDING",
    title: "A foundation for eighteen new households.",
    paragraphs: [
      "The Church of Pentecost Pakistan provided household furnishings and necessities—including beds, sofas, tables, cabinets, crockery and other essential items—to help the newly married couples establish homes.",
      "Such gifts were not simply ceremonial. They were practical measures intended to reduce the need for fresh borrowing, strengthen household stability and restore a sense of dignity to families living under intense economic pressure.",
      "The church's account describes thirty-six families connected to the eighteen marriages as having been reached through the initiative. Sustained freedom, however, depends on continued economic opportunity, protection and community support.",
    ],
    image: 8,
  },
];

const fullImageStyle: React.CSSProperties = {
  width: "100%", height: "100%", display: "block", objectFit: "contain", background: "#efece5"
};

function PhotoBlock({ photo, wide = false }: { photo: Photo; wide?: boolean }) {
  return <figure className={wide ? "brick-photo brick-photo--wide" : "brick-photo"}>
    <a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={"View full photograph: " + photo.alt}>
      <div className="brick-photo__frame"><img src={photo.src} alt={photo.alt} loading="lazy" width={1600} height={1000} style={fullImageStyle} /></div>
    </a>
    <figcaption>{photo.caption}</figcaption>
  </figure>;
}

export default function BrickKilnImpactStory() {
  return <NewsLayout>
    <link rel="stylesheet" href="/styles/pages/brick-kiln-impact.css" />
    <article className="brick-story">
      <header className="brick-hero">
        <div className="brick-container">
          <nav className="brick-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/news">News</a><span>/</span><span>Brick-kiln families</span></nav>
          <p className="brick-kicker">HUMANITARIAN IMPACT · SHEIKHUPURA, PAKISTAN · 6 DECEMBER 2024</p>
          <h1>Breaking the Chains<span>18 daughters. 18 new beginnings.</span></h1>
          <p className="brick-deck">A mother's plea to save just one daughter became a collective act of faith and compassion that helped eighteen young women begin married life with dignity and hope.</p>
          <div className="brick-hero__links"><a href="#the-story">Read their story <span aria-hidden="true">↓</span></a><a href="/contact">Discuss partnership <span aria-hidden="true">↗</span></a></div>
          <div className="brick-hero__image"><img src={marriage + "01.jpg"} alt="Collective Christian wedding ceremony organized by The Church of Pentecost Pakistan in Sheikhupura" width={1600} height={1000} fetchPriority="high" /></div>
          <p className="brick-hero__credit">The Church of Pentecost Pakistan · Collective marriage initiative · December 2024</p>
        </div>
      </header>

      <section className="brick-impact" aria-label="At a glance">
        <div className="brick-container brick-impact__grid">
          <div><strong>18</strong><span>young women supported</span></div>
          <div><strong>18</strong><span>collective marriages</span></div>
          <div><strong>36</strong><span>families reached</span></div>
          <div><strong>2,000+</strong><span>guests at the celebration</span></div>
        </div>
      </section>

      <section id="the-story" className="brick-opening brick-container">
        <p className="brick-kicker">THE STORY BEHIND THE PHOTOGRAPHS</p>
        <h2>They hoped for one wedding.<br /><em>Compassion made room for eighteen.</em></h2>
        <p>For families caught in generational debt at Pakistan's brick kilns, the cost of a daughter's wedding can be more than an impossible expense. It can be the beginning of another loan, another burden, and another generation with too few choices. In Sheikhupura, sixteen mothers approached the church with a request so modest that it revealed the depth of their desperation: <strong>please help even one daughter.</strong></p>
      </section>

      <div className="brick-container">
        {chapters.map((chapter, index) => <section className="brick-chapter" key={chapter.title}>
          <div className="brick-chapter__copy">
            <p className="brick-kicker">{chapter.eyebrow}</p>
            <h2>{chapter.title}</h2>
            {chapter.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
          <PhotoBlock photo={photos[chapter.image]} wide />
          {index === 2 && <div className="brick-inline-gallery">
            <PhotoBlock photo={photos[4]} /><PhotoBlock photo={photos[5]} />
          </div>}
          {index === 3 && <div className="brick-inline-gallery">
            <PhotoBlock photo={photos[6]} /><PhotoBlock photo={photos[7]} />
          </div>}
        </section>)}
      </div>

      <section className="brick-quote">
        <div className="brick-container">
          <p className="brick-kicker">FAITH EXPRESSED THROUGH LOVE</p>
          <blockquote>“Let us not love in word, neither in tongue; but in deed and in truth.”</blockquote>
          <p>1 John 3:18 · KJV</p>
        </div>
      </section>

      <section className="brick-gallery brick-container">
        <p className="brick-kicker">THE PEOPLE & THE MISSION</p>
        <h2>A documentary journey, in photographs</h2>
        <p className="brick-gallery__intro">Every image tells part of the story: listening to families, organising a celebration, honouring newly married couples and working toward a future beyond inherited debt.</p>
        <div className="brick-gallery__grid">
          {photos.slice(9).map((photo) => <PhotoBlock key={photo.src} photo={photo} />)}
        </div>
      </section>

      <section className="brick-partner" aria-labelledby="brick-partner-title">
        <div className="brick-container brick-partner__grid">
          <div>
            <p className="brick-kicker">AN INVITATION TO PARTNER</p>
            <h2 id="brick-partner-title">Help more families write a different future.</h2>
            <p>The work does not end when a wedding celebration concludes. Families need lasting paths to security, education, employment and freedom from exploitative debt. The Church of Pentecost Pakistan invites churches, ministries and humanitarian partners to help extend this work to more vulnerable households.</p>
          </div>
          <div className="brick-partner__actions">
            <a className="brick-cta" href="/contact">Explore a partnership <span aria-hidden="true">↗</span></a>
            <a className="brick-cta brick-cta--outline" href="/donate">Support the mission <span aria-hidden="true">↗</span></a>
            <a className="brick-cta brick-cta--text" href="/projects/brick-kiln-deliverance">Learn about brick-kiln deliverance <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <footer className="brick-end brick-container">
        <p><strong>About this report:</strong> Adapted from the Church of Pentecost Pakistan's account of the Sheikhupura collective wedding initiative of December 6, 2024. The figures on this page—18 marriages and 36 families reached—follow that specific report. Other project summaries may refer to different totals, which should be reconciled in the ministry's official records.</p>
        <p><a href="/news">← Return to News & Stories</a> · <a href="/projects/collective-marriages">Explore the collective marriages ministry</a></p>
      </footer>
    </article>
  </NewsLayout>;
}
