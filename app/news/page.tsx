import type { Metadata } from "next";
import NewsLayout from "../../components/NewsLayout";
import { getNewsPosts, formatNewsDate } from "../../data/news";

export const metadata: Metadata = {
  title: "News & Stories | COPPAK.ORG",
  description:
    "News, announcements and stories of faith in action from The Church of Pentecost Pakistan.",
  alternates: { canonical: "/news" },
  openGraph: {
    title: "News & Stories | COPPAK.ORG",
    description:
      "Life, faith and community at The Church of Pentecost Pakistan.",
    url: "/news",
    images: [
      {
        url: "/assets/images/news/youth-pensa-august-2026/rally/rally-19.jpeg",
        width: 2048,
        height: 1365,
      },
    ],
  },
};

const stories = [
  {
    category: "Health & compassion",
    title: "Bringing care closer to communities",
    description:
      "Explore how our free medical camps bring healthcare to people who need it.",
    href: "/projects/free-medical-camps",
    image: "/assets/images/coppak/projects/medical-camps/01.jpg",
    alt: "A doctor caring for a patient at a COPPAK medical camp",
  },
  {
    category: "Education",
    title: "Opening doors through learning",
    description:
      "Discover our adult literacy work with women, widows and brick-kiln workers.",
    href: "/projects/adult-literacy",
    image: "/assets/images/coppak/projects/adult-literacy/01.jpg",
    alt: "COPPAK adult literacy programme",
  },
  {
    category: "Community & dignity",
    title: "Standing alongside families",
    description:
      "Learn about the ministry helping families leave bonded labour behind.",
    href: "/projects/brick-kiln-deliverance",
    image: "/assets/images/coppak/projects/brick-kiln/01.jpg",
    alt: "COPPAK gathering with families at a brick kiln",
  },
];

export default function NewsPage() {
  const posts = getNewsPosts();
  return (
    <NewsLayout>
      <section className="news-hero news-shell" aria-labelledby="news-title">
        <nav className="news-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">News</span>
        </nav>
        <div className="news-intro">
          <div>
            <p className="news-eyebrow">THE COPPAK JOURNAL</p>
            <h1 id="news-title">
              News & <em>stories.</em>
            </h1>
          </div>
          <p>
            Life, faith and community.
            <br />
            Discover the people and ministries bringing hope across Pakistan.
          </p>
        </div>

      </section>
      <section
        className="news-updates news-shell"
        aria-labelledby="updates-title"
      >
        <div className="news-heading">
          <div>
            <p className="news-eyebrow">FROM OUR CHURCH FAMILY</p>
            <h2 id="updates-title">News & ministry reports</h2>
          </div>
          <a className="news-text-link" href="/events">
            Explore events <span aria-hidden="true">↗</span>
          </a>
        </div>
        {posts.length ? (
          <div className="news-grid news-grid--reports">
            {posts.map((post) => (
              <a
                className="news-card"
                key={post.slug}
                href={`/news/${post.slug}`}
              >
                <div className="news-card__image">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    width={800}
                    height={600}
                    loading="lazy"
                  />
                </div>
                <div className="news-card__body">
                  <p className="news-eyebrow">{post.category}</p>
                  <time dateTime={post.date}>{formatNewsDate(post.date)}</time>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="news-text-link">
                    Read story <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="news-empty">
            <span className="news-empty__icon" aria-hidden="true">
              <i className="far fa-newspaper" />
            </span>
            <div>
              <h3>More from COPPAK, right here.</h3>
              <p>
                New church announcements and ministry reports will appear here.
                In the meantime, explore the work and communities below.
              </p>
            </div>
          </div>
        )}
      </section>
      <section className="news-spotlight news-shell" aria-label="Ministry spotlight">
        <a className="news-feature" href="/outreach/alpha-groups">
          <div className="news-feature__image">
            <img
              src="/assets/images/coppak/outreach/alpha-groups/01.jpg"
              alt="People gathering around tables at an Alpha Pakistan event"
              width={1600}
              height={900}
              fetchPriority="high"
            />
          </div>
          <div className="news-feature__body">
            <p className="news-eyebrow">MINISTRY SPOTLIGHT · ALPHA PAKISTAN</p>
            <h2>
              A space for questions.
              <br />A journey of faith.
            </h2>
            <p>
              Food, conversation and connection. Discover how Alpha brings
              people together to explore the Christian faith.
            </p>
            <span className="news-link">
              Explore Alpha Pakistan <span aria-hidden="true">↗</span>
            </span>
          </div>
        </a>
      </section>
      <section
        className="news-stories news-shell"
        aria-labelledby="stories-title"
      >
        <div className="news-heading">
          <div>
            <p className="news-eyebrow">FAITH IN ACTION</p>
            <h2 id="stories-title">From our ministries</h2>
          </div>
          <p>Meet the work behind our mission.</p>
        </div>
        <div className="news-grid">
          {stories.map((story) => (
            <a className="news-card" key={story.href} href={story.href}>
              <div className="news-card__image">
                <img
                  src={story.image}
                  alt={story.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                />
              </div>
              <div className="news-card__body">
                <p className="news-eyebrow">{story.category}</p>
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <span className="news-text-link">
                  Explore the ministry <span aria-hidden="true">↗</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className="news-connect news-shell">
        <div>
          <p className="news-eyebrow">LET’S STAY CONNECTED</p>
          <h2>
            There’s a place for you
            <br />
            in our church family.
          </h2>
          <p>
            Join a gathering, discover a ministry, or get in touch with our
            team.
          </p>
        </div>
        <div className="news-connect__links">
          <a className="news-button" href="/church-services">
            Join a service <span aria-hidden="true">↗</span>
          </a>
          <a className="news-text-link" href="/contact">
            Contact our team <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </NewsLayout>
  );
}
