import type { Metadata } from "next";

const title = "From a Living Room to a Nation: My Journey of Faith and Ministry";
const description = "Apostle Dr. Jamil Nasir reflects on the humble beginnings of The Church of Pentecost Pakistan, the journey through hardship, and a mission of the Gospel, discipleship and compassion.";

export const metadata: Metadata = {
  title: title + " | COPPAK Ministry Blog",
  description,
  alternates: { canonical: "/blog/from-a-living-room-to-a-nation" },
  openGraph: {
    type: "article",
    title,
    description,
    url: "/blog/from-a-living-room-to-a-nation",
    publishedTime: "2026-10-28",
    authors: ["Apostle Dr. Jamil Nasir"],
    images: [{ url: "/assets/images/coppak/about/history/01.jpg" }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  datePublished: "2026-10-28",
  author: { "@type": "Person", name: "Apostle Dr. Jamil Nasir" },
  publisher: { "@type": "Organization", name: "The Church of Pentecost Pakistan", url: "https://coppak.org" },
  mainEntityOfPage: "https://coppak.org/blog/from-a-living-room-to-a-nation",
  image: "https://coppak.org/assets/images/coppak/about/history/01.jpg",
};

export default function FirstMinistryBlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <header className="bj-article-head">
        <div className="bj-container">
          <nav className="bj-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a><span aria-hidden="true">/</span>
            <a href="/blog">Ministry Blog</a><span aria-hidden="true">/</span>
            <strong>My Ministry Journey</strong>
          </nav>
          <span className="bj-eyebrow" style={{ color: "#ffcf74" }}>Faith · Calling · Mission</span>
          <h1>{title}</h1>
          <p className="bj-deck">What began with a few believers gathered in our home became a testimony of God's faithfulness. This is not simply a story about building a church. It is a story about being willing to serve.</p>
          <div className="bj-byline">
            <span>By Apostle Dr. Jamil Nasir</span>
            <span>28 October 2026</span>
            <span>Ministry Reflection</span>
          </div>
        </div>
      </header>
      <main className="bj-story-area">
        <div className="bj-container bj-article-grid">
          <article className="bj-story">
            <figure className="bj-figure">
              <img className="bj-lead-image" src="/assets/images/coppak/about/history/01.jpg" alt="The Church of Pentecost Pakistan's ministry journey" />
              <figcaption>From humble beginnings in Lahore to a growing ministry of faith, discipleship and compassion.</figcaption>
            </figure>
            <p className="bj-opening">When I look back over the years of ministry, I do not first remember the buildings, the gatherings or the numbers. I remember the people. I remember the prayers, the uncertainty, the moments when the road ahead seemed closed—and the faithfulness of God that carried us forward.</p>
            <p>My prayer in sharing this first blog is simple: that someone who feels too small, too weak or too limited to answer God's call will discover fresh courage to take the next step in faith.</p>

            <h2 id="the-call">A calling that began with a simple yes</h2>
            <p>My personal journey of faith began when I was young. At the age of fifteen, I committed my life to Jesus Christ and was baptized. I could not then see the full road ahead, but the desire to share the Gospel and serve others was growing in my heart. In time, that calling shaped my work as a preacher, teacher, writer and church leader.</p>
            <p>I learned that ministry is not measured only by the size of a platform. It begins with a heart willing to obey Christ, a life devoted to prayer, and the courage to love people even when doing so requires sacrifice.</p>

            <h2 id="living-room">A living room became a place of worship</h2>
            <p>In the year 2000, my wife, Rose Mary, and I opened our home in Lahore to a small group of believers. There was no impressive building, no great financial support and no guarantee of what would come next. We simply wanted to worship God, teach His Word and make room for people to encounter the love of Jesus.</p>
            <p>Those first gatherings were small, but our hope was not. Within a year the fellowship had grown, and we moved into rented premises so more people could join us. The early years taught us that the Church is not ultimately defined by walls. It is a living family, gathered around Jesus Christ and called to become His witnesses.</p>

            <h2 id="open-sky">When the doors closed, the mission continued</h2>
            <p>The journey was not without painful seasons. Places we used for worship became unavailable, and at times we had to begin again. In 2007, after another setback, our congregation found itself without a permanent meeting place. But a closed door did not mean that God had closed the mission.</p>
            <p>We continued to gather, first in the streets and then in a public park. Worship under the open sky became part of our testimony. People who might never have entered a church building could hear the Gospel and join us in prayer. From those days came a phrase that remains close to my heart: <strong>a church without walls, but with mission.</strong></p>
            <p>The same year, during a leadership seminar in Singapore, I connected with the international leadership of The Church of Pentecost. That relationship opened an important new chapter, and in 2008 I was entrusted to serve as the first National Head of The Church of Pentecost Pakistan. It was an opportunity for greater service—and a greater responsibility before God and His people.</p>

            <blockquote className="bj-verse">
              “Go ye into all the world, and preach the gospel to every creature.”
              <cite>Mark 16:15 · King James Version</cite>
            </blockquote>

            <h2 id="equipping">The Gospel must reach beyond Sunday</h2>
            <p>Over the years, our ministry has grown through local assemblies, home fellowships, open-air evangelism, prayer, worship and discipleship. We have also invested in theological education through Pentecost Theological Bible College, because the future of the Church depends not only on bringing people to faith but also on preparing faithful leaders who can teach, shepherd and serve.</p>
            <p>Young people, children and women are central to this mission. Through Bible teaching, leadership development, community fellowship and digital ministry, we seek to help every generation discover its place in God's work. Rose Mary has walked beside me in this journey, and I am deeply grateful for her faithful service, especially in ministry among women and families.</p>

            <h2 id="compassion">Preaching Christ and showing His love</h2>
            <p>I believe that the Gospel must be heard in our words and seen in our actions. When families struggle with poverty, when children face barriers to education, or when workers are trapped in exploitative debt, the Church cannot simply look away.</p>
            <p>Alongside evangelism, The Church of Pentecost Pakistan serves communities through practical ministries such as literacy, support for vulnerable families, medical outreach and efforts to help brick-kiln workers pursue freedom and dignity. These are not separate from our witness. They are ways of caring for people whom God loves. Every person deserves to be treated with respect, compassion and hope.</p>

            <h2 id="beyond-borders">One mission, across borders</h2>
            <p>The call to serve has also opened doors beyond Pakistan. Through ministry among South Asian communities in Canada, I have seen the same need for fellowship, pastoral care, discipleship and a living encounter with Christ. Whether we gather in Lahore or in a Canadian city, our message remains the same: Jesus Christ brings hope, and His Church is called to love and serve.</p>

            <h2 id="next-chapter">The next chapter begins with faith</h2>
            <p>Today I look ahead with gratitude, not because every challenge has been overcome, but because God has remained faithful through every season. There is still much to do. We want to strengthen congregations, equip pastors, reach people who have never heard the Gospel clearly, encourage young leaders and stand beside families who need practical help.</p>
            <p>If there is one lesson I would pass on from this journey, it is this: <strong>do not despise small beginnings.</strong> A prayer in an ordinary home can become a blessing far beyond that home. What matters is not how much we possess when we begin, but whether we are willing to place our lives and gifts in God's hands.</p>
            <p>Thank you for walking with us, praying for us and sharing in the mission. My hope is that this blog will become a place for testimony, encouragement, biblical reflection and the stories of lives being touched by the love of Christ.</p>
            <p><strong>To God be all the glory.</strong></p>
            <div className="bj-story-signature">
              Apostle Dr. Jamil Nasir
              <small>National Head · The Church of Pentecost Pakistan</small>
            </div>
          </article>

          <aside className="bj-sidebar" aria-label="Article information and navigation">
            <div className="bj-sidebar-card">
              <h2>In this reflection</h2>
              <a href="#the-call">A calling that began with faith</a>
              <a href="#living-room">Our Lahore living-room fellowship</a>
              <a href="#open-sky">A church without walls</a>
              <a href="#equipping">Teaching and equipping leaders</a>
              <a href="#compassion">Compassion in action</a>
              <a href="#beyond-borders">The mission across borders</a>
              <a href="#next-chapter">The journey ahead</a>
            </div>
            <div className="bj-sidebar-card">
              <img className="bj-author-photo" src="/assets/images/coppak/about/team/jamil-nasir-2026.webp" alt="Apostle Dr. Jamil Nasir" />
              <p className="bj-author-name">Apostle Dr. Jamil Nasir</p>
              <p className="bj-author-desc">National Head of The Church of Pentecost Pakistan, preacher, theologian and principal of Pentecost Theological Bible College.</p>
              <a href="/about">Discover our church story →</a>
              <a href="/contact">Contact the ministry →</a>
            </div>
          </aside>
        </div>
      </main>
      <div className="bj-article-footer">
        <div className="bj-container bj-article-footer-inner">
          <p>Thank you for reading. Explore more stories of faith and service.</p>
          <a href="/blog">← Back to the Ministry Blog</a>
        </div>
      </div>
    </>
  );
}
