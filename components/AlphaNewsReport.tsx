import NewsLayout from "./NewsLayout";
import { alphaPost as post, alphaPhotoSections } from "../data/alpha-report";

export default function AlphaNewsReport() {
  return (
    <NewsLayout>
      <link rel="stylesheet" href="/styles/pages/alpha-report.css" />
      <article className="alpha-report">
        <header className="alpha-report__header news-shell">
          <nav className="news-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/news">News & stories</a><span aria-hidden="true">/</span><span aria-current="page">Alpha Pakistan</span></nav>
          <div className="alpha-report__title-grid">
            <div><p className="news-eyebrow">THE COPPAK JOURNAL · MISSION IN PAKISTAN</p><h1>{post.title}</h1></div>
            <div className="alpha-report__summary"><p>{post.excerpt}</p><p className="alpha-report__date"><time dateTime="2026-10-08">8</time>–<time dateTime="2026-10-09">9 October 2026</time><span>Pakistan · National Alpha Refresher Training</span></p></div>
          </div>
          <nav className="alpha-report__links" aria-label="Report navigation"><a href="#alpha-story">Read the story <span aria-hidden="true">↓</span></a><a href="#alpha-photos">Explore 33 photographs <span aria-hidden="true">↓</span></a><a href={post.reportFile} download>Download the report <span>PDF · 8 pages ↓</span></a></nav>
        </header>
        <figure className="alpha-report__hero news-shell"><a href={post.image} target="_blank" rel="noopener noreferrer" aria-label="Open original group photograph"><img src={post.image} alt={post.imageAlt} width={post.imageWidth} height={post.imageHeight} fetchPriority="high" /></a><figcaption>{post.imageAlt}</figcaption></figure>
        <dl className="alpha-report__numbers news-shell" aria-label="Alpha ministry highlights"><div><dt>293</dt><dd>leaders equipped at this refresher</dd></div><div><dt>800+</dt><dd>leaders trained since 2023</dd></div><div><dt>35,000+</dt><dd>Alpha course completions since 2023</dd></div></dl>
        <div id="alpha-story" className="alpha-report__opening news-shell"><p className="news-eyebrow">FAITH. CONVERSATION. DISCIPLESHIP.</p><p>{post.paragraphs[0]}</p><div className="alpha-report__byline">By {post.author}<span>Published 23 October 2026</span></div></div>
        <div id="alpha-photos" className="alpha-report__photostory news-shell">
          <p className="alpha-report__photo-note">A photo story from the gathering. Select any photograph to open the original in full.</p>
          {alphaPhotoSections.map((section, index) => <section className="alpha-report__chapter" key={section.heading} aria-labelledby={`chapter-${index}`}>
            <div className="alpha-report__chapter-heading"><span aria-hidden="true">0{index + 1}</span><div><p className="news-eyebrow">{index === 6 ? "PRAYER & PARTNERSHIP" : "ALPHA PAKISTAN"}</p><h2 id={`chapter-${index}`}>{section.heading}</h2></div></div>
            <div className="alpha-report__prose">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <div className="alpha-report__photos">{section.photos.map((photo) => <figure key={photo.src}><a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`Open original photograph: ${photo.alt}`}><img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async" /></a><figcaption>{photo.caption}</figcaption></figure>)}</div>
          </section>)}
        </div>
        <section className="alpha-report__closing news-shell" aria-labelledby="alpha-prayer-title"><div><p className="news-eyebrow">THE GREAT COMMISSION</p><blockquote>“Go therefore and make disciples of all the nations.”<cite>Matthew 28:19</cite></blockquote></div><div><h2 id="alpha-prayer-title">Pray with us.<br />Be part of the mission.</h2><p>Stand alongside the leaders taking Alpha into new communities across Pakistan.</p><a className="news-button" href="mailto:info@coppak.org?subject=Alpha%20Pakistan%20ministry%20partnership">Connect with our team <span aria-hidden="true">↗</span></a><a className="alpha-report__download" href={post.reportFile} download>Download the complete 8-page report ↓</a></div></section>
        <footer className="alpha-report__footer news-shell"><a className="news-text-link" href="/news">← All news & stories</a><p>Report and original photographs: The Church of Pentecost Pakistan.</p></footer>
      </article>
    </NewsLayout>
  );
}
