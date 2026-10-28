import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ministry Blog | Apostle Dr. Jamil Nasir | The Church of Pentecost Pakistan",
  description:
    "Personal reflections on faith, calling, church planting, discipleship and compassion from Apostle Dr. Jamil Nasir, National Head of The Church of Pentecost Pakistan.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Ministry Blog | The Church of Pentecost Pakistan",
    description: "Stories of faith, ministry and compassion from Apostle Dr. Jamil Nasir.",
    url: "/blog",
    images: [{ url: "/assets/images/coppak/about/history/01.jpg" }],
  },
};

const firstPost = {
  title: "From a Living Room to a Nation: My Journey of Faith and Ministry",
  href: "/blog/from-a-living-room-to-a-nation",
  date: "28 October 2026",
};

export default function BlogPage() {
  return (
    <>
      <header className="bj-hero">
        <div className="bj-container bj-hero-inner">
          <nav className="bj-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a><span aria-hidden="true">/</span><strong>Ministry Blog</strong>
          </nav>
          <span className="bj-eyebrow">The Church of Pentecost Pakistan · Journal</span>
          <h1>Faith in every step.<br /><em>Hope in every story.</em></h1>
          <p>Personal reflections on following Christ, serving people, planting churches and witnessing God's faithfulness—from Lahore to the communities we serve today.</p>
        </div>
      </header>
      <section className="bj-section" aria-labelledby="blog-latest">
        <div className="bj-container">
          <div className="bj-section-head">
            <div>
              <span className="bj-eyebrow">From the National Head</span>
              <h2 id="blog-latest">Our first blog story</h2>
            </div>
            <p>A place for ministry journeys, lessons learned in faith, and stories that give glory to God.</p>
          </div>
          <article className="bj-feature">
            <a className="bj-feature-media" href={firstPost.href} aria-label={"Read " + firstPost.title}>
              <img src="/assets/images/coppak/about/history/01.jpg" alt="The Church of Pentecost Pakistan's ministry journey in Lahore" />
            </a>
            <div className="bj-feature-content">
              <span className="bj-eyebrow">Ministry Journey · Featured Article</span>
              <span className="bj-feature-date" style={{ marginTop: 9 }}>{firstPost.date} · Apostle Dr. Jamil Nasir</span>
              <h3><a href={firstPost.href}>{firstPost.title}</a></h3>
              <p>A small gathering in our Lahore home grew into a mission beyond the walls of a building. This is a testimony of prayer, perseverance, the Gospel and Christ's love in action.</p>
              <a className="bj-link-button" href={firstPost.href}>Read the first blog <span aria-hidden="true">→</span></a>
            </div>
          </article>
          <div className="bj-callout">
            <div>
              <h3>More than a story. A shared mission.</h3>
              <p>Discover more about the church's mission, outreach and work of compassion.</p>
            </div>
            <a href="/news">Explore church news <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
