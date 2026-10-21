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
      publishedTime: post.date,
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
          <time dateTime={post.date}>{formatNewsDate(post.date)}</time>
          <p className="news-article__intro">{post.excerpt}</p>
        </header>
        <img
          className="news-article__photo"
          src={post.image}
          alt={post.imageAlt}
          width={1200}
          height={800}
          fetchPriority="high"
        />
        <div className="news-article__content">
          {post.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {post.gallery && post.gallery.length > 0 && (
            <section aria-label="Ministry photo gallery" style={{ margin: "2.5rem 0" }}>
              <h2 style={{ marginBottom: "1.25rem" }}>Faith in action — photo gallery</h2>
              <p style={{ marginBottom: "1.5rem" }}>
                Photographs from the Church of Pentecost Pakistan ministry archive, illustrating the prayer, outreach and youth ministry described in this report.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "1.25rem" }}>
                {post.gallery.map((photo) => (
                  <figure key={photo.image} style={{ margin: 0 }}>
                    <img src={photo.image} alt={photo.alt} width={640} height={430} loading="lazy" style={{ width: "100%", height: "auto", aspectRatio: "3 / 2", objectFit: "cover", borderRadius: "12px" }} />
                    <figcaption style={{ fontSize: "0.92rem", lineHeight: 1.5, paddingTop: "0.65rem" }}>{photo.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}
          <a className="news-text-link" href="/news">
            ← All news & stories
          </a>
        </div>
      </article>
    </NewsLayout>
  );
}
