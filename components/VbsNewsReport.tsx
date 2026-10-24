import NewsLayout from "./NewsLayout";
import { vbsPost as post, vbsPhotos, vbsPhotoSections } from "../data/vbs-report";

const lessons = [
  ["Know God", "Jeremiah 9:23–24"],
  ["Grow in Christ", "2 Peter 3:18"],
  ["Shine at home", "Ephesians 6:1–3"],
  ["Be light", "Matthew 5:14–16"],
  ["Transform society", "1 Timothy 4:12"],
];
const partnership = [
  "Equip facilitators with training and age-appropriate teaching guides.",
  "Provide children’s Bibles, learning materials, crafts and supplies.",
  "Support safe, welcoming VBS activities in underserved assemblies.",
  "Help strengthen follow-up Sunday School and family discipleship.",
];
function Photo({ photo, priority = false }: { photo: (typeof vbsPhotos)[number]; priority?: boolean }) {
  return <figure>
    <a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full photograph: ${photo.alt}`}>
      <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : undefined} decoding="async" />
    </a>
    <figcaption>{photo.caption}</figcaption>
  </figure>;
}
export default function VbsNewsReport() {
  return <NewsLayout>
    <link rel="stylesheet" href="/styles/pages/vbs-report.css" />
    <article className="vbs-report">
      <header className="vbs-header news-shell">
        <nav className="news-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/news">News & stories</a><span aria-hidden="true">/</span><span aria-current="page">VBS 2026</span></nav>
        <p className="news-eyebrow">CHILDREN’S MINISTRY · PAKISTAN · 2026 IMPACT REPORT</p>
        <div className="vbs-title-grid"><h1>{post.title}</h1><div className="vbs-header-summary"><p>{post.excerpt}</p><p className="vbs-date"><time dateTime="2026-09-07">7</time>–<time dateTime="2026-09-12">12 September 2026</time><span>Five instructional days · Participating local assemblies</span></p></div></div>
        <nav className="vbs-links" aria-label="Report navigation"><a href="#vbs-story">Read the photo story <span aria-hidden="true">↓</span></a><a href={post.reportFile} download>Download original report <span>PDF · 6 pages ↓</span></a></nav>
      </header>
      <div className="vbs-cover news-shell"><Photo photo={vbsPhotos[0]} priority /><Photo photo={vbsPhotos[1]} /></div>
      <div className="vbs-impact news-shell">
        <div className="vbs-theme"><p className="news-eyebrow">OUR SHARED VISION</p><h2>Children unleashed<br />to transform society.</h2><p>Matthew 5:13–16</p></div>
        <dl><div><dt>629</dt><dd>children registered</dd></div><div><dt>27</dt><dd>facilitators</dd></div><div><dt>5</dt><dd>instructional days</dd></div></dl>
      </div>
      <div id="vbs-story" className="vbs-opening news-shell"><p>{post.paragraphs[0]}</p><div className="vbs-byline">The Church of Pentecost Pakistan · Children’s Ministry<span>Published 23 October 2026</span></div><p className="vbs-photo-note">20 original photographs from the report. Select any photograph to view it in full.</p></div>
      <div className="vbs-chapters news-shell">
        {vbsPhotoSections.map((section, index) => <section className="vbs-chapter" key={section.heading} aria-labelledby={`vbs-chapter-${index}`}>
          <div className="vbs-chapter-heading"><span className="vbs-number" aria-hidden="true">0{index + 1}</span><div><p className="news-eyebrow">{section.eyebrow}</p><h2 id={`vbs-chapter-${index}`}>{section.heading}</h2></div></div>
          <div className="vbs-prose">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          {index === 1 && <ol className="vbs-lessons" aria-label="The five Bible lessons">{lessons.map(([title, reference], i) => <li key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{reference}</p></li>)}</ol>}
          <div className={`vbs-photos${index === 3 ? " vbs-photos--prayer" : ""}`}>{section.photos.map((photo) => <Photo key={photo.src} photo={photo} />)}</div>
          {index === 4 && <aside className="vbs-partnership"><h3>How churches and ministries can help</h3><ul>{partnership.map((item) => <li key={item}>{item}</li>)}</ul></aside>}
        </section>)}
      </div>
      <section className="vbs-closing news-shell" aria-labelledby="vbs-partner-title"><div><p className="news-eyebrow">LOOKING TOWARDS VBS 2027</p><h2 id="vbs-partner-title">Invest in the next generation of Pakistan.</h2><p>Help children discover the Scriptures and carry their faith into everyday life.</p></div><div className="vbs-closing-links"><a className="news-button" href="mailto:info@coppak.org?subject=VBS%202027%20partnership">Discuss a partnership <span aria-hidden="true">↗</span></a><a href={post.reportFile} download>Download the complete report ↓</a><a href="/ministries/children">Explore Children’s Ministry →</a></div></section>
      <footer className="vbs-footer news-shell"><a className="news-text-link" href="/news">← All news & stories</a><p>All 20 photographs were supplied by the church and extracted from the original report. Presented in their original proportions, without filters, retouching or generated replacements.</p></footer>
    </article>
  </NewsLayout>;
}
