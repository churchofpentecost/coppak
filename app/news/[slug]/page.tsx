import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NewsLayout from "../../../components/NewsLayout";
import { newsPosts, formatNewsDate } from "../../../data/news";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = newsPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | COPPAK.ORG`,
    description: post.excerpt,
    alternates: { canonical: `/news/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/news/${post.slug}`,
      publishedTime: post.publishedAt,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}
export default async function NewsArticle({ params }: Props) {
  const { slug } = await params;
  const post = newsPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  return (
    <NewsLayout>
      <article className="news-article news-shell">
        <nav className="news-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">/</span>
          <a href="/news">News</a>
        </nav>
        <header>
          <p className="news-eyebrow">{post.category}</p>
          <h1>{post.title}</h1>
          <div className="news-article__meta">
            <span>Event date: <time dateTime={post.date}>{formatNewsDate(post.date)}</time></span>
            <span>{post.location}</span><span>By {post.author}</span>
          </div>
          <p className="news-article__intro">{post.excerpt}</p>
          <a className="news-button news-report-download" href={post.reportFile} download>Download full report <span>PDF · {post.reportPages} pages ↓</span></a>
        </header>
        <img
          className="news-article__photo"
          src={post.image}
          alt={post.imageAlt}
          width={post.imageWidth}
          height={post.imageHeight}
          fetchPriority="high"
        />
        <div className="news-article__content">
          {post.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {post.sections.map((section) => <section key={section.heading} className="news-article__section">
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </section>)}
          <section aria-labelledby="gallery-title"><h2 id="gallery-title">In photographs</h2><p>Original photographs from this PENT Media Pakistan report. Select a photograph to view it in full.</p><div className="news-article__gallery">{post.gallery.map((photo) => <figure key={photo.src}>
            <a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`View full photograph: ${photo.alt}`}><img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" /></a>
            <figcaption>{photo.caption}</figcaption>
          </figure>)}</div></section>
          <aside className="news-article__source">
            <h2>Read the complete report</h2>
            <p>Adapted from the {post.author} report. Download the original {post.reportPages}-page PDF for the complete photo story, reflections and prayer requests.</p>
            <a className="news-button news-report-download" href={post.reportFile} download>Download full report <span>PDF ↓</span></a>
          </aside>
          <a className="news-text-link" href="/news">
            ← All news & stories
          </a>
        </div>
      </article>
    </NewsLayout>
  );
}
