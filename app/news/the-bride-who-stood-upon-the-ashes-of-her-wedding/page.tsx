import type { Metadata } from "next";
import NewsLayout from "../../../components/NewsLayout";
import blocks from "./story.json";
import "./article.css";

const title = "The Bride Who Stood Upon the Ashes of Her Wedding";
const description = "Sahar’s story of loss in the Jaranwala attacks, a promise of practical help, and a new beginning through The Church of Pentecost Pakistan.";
const storyPath = "/news/the-bride-who-stood-upon-the-ashes-of-her-wedding";
const reportPath = "/reports/sahar-story.pdf";

export const metadata: Metadata = {
  title: `${title} | COP Pakistan`,
  description,
  alternates: { canonical: storyPath },
  openGraph: { title, description, url: storyPath, type: "article", publishedTime: "2026-11-10T12:00:00-05:00", images: [{ url: "/assets/images/news/sahar-story/image2.jpeg", alt: "Rev. Dr. Jamil Nasir speaks with Sahar in Jaranwala" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/assets/images/news/sahar-story/image2.jpeg"] },
};

export default function SaharStory() {
  return <NewsLayout>
    <article className="sahar-story news-shell">
      <nav className="news-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/news">News &amp; Stories</a></nav>
      <header className="sahar-story__header">
        <p className="news-eyebrow">FAITH IN ACTION · JARANWALA, PAKISTAN</p>
        <h1>{title}</h1>
        <p className="sahar-story__subtitle">From the Flames of Persecution to a New Life of Hope, Dignity, and Restoration</p>
        <p className="sahar-story__byline">An eyewitness account by Rev. Dr. Jamil Nasir<br/><time dateTime="2026-11-10">Published 10 November 2026</time></p>
        <a className="sahar-story__download" href={reportPath} download>Download the complete story (PDF)</a>
      </header>
      <div className="sahar-story__body">
        {blocks.map((block, index) => {
          if (block.type === "image") return <figure key={index} className="sahar-story__photo">
            <a href={block.src} target="_blank" rel="noopener noreferrer" aria-label={`View original photograph: ${block.alt}`}>
              <img src={block.src} alt={block.alt} width={block.width} height={block.height} loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "auto"} decoding="async" />
            </a>
            <figcaption>{block.alt}</figcaption>
          </figure>;
          if (block.type === "heading") return <h2 key={index}>{block.text}</h2>;
          if (block.type === "quote") return <blockquote key={index}>{block.text}</blockquote>;
          return <p key={index}>{block.text}</p>;
        })}
      </div>
      <aside className="sahar-story__source"><p>Based on the oral eyewitness testimony of Rev. Dr. Jamil Nasir, with photographs supplied by The Church of Pentecost Pakistan. Personal recollections, local history and reported figures are presented as part of that account.</p></aside>
      <aside className="sahar-story__contact">
        <p className="news-eyebrow">THE CHURCH OF PENTECOST PAKISTAN</p>
        <h2>Stand with families rebuilding their lives</h2>
        <p>Learn more about our compassion ministry and explore how you can partner with us.</p>
        <div className="sahar-story__actions"><a className="sahar-story__download" href="/contact">Contact our team</a><a className="sahar-story__download" href={reportPath} download>Download the story (PDF)</a></div>
        <p><a href="mailto:info@coppak.org">info@coppak.org</a><br/><a href="tel:+14379859633">+1 437-985-9633</a> · <a href="https://wa.me/923004179633">WhatsApp +92 300-4179633</a></p>
      </aside>
      <p className="sahar-story__back"><a href="/news">← Back to News &amp; Stories</a></p>
    </article>
  </NewsLayout>;
}
