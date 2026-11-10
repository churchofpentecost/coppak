import type { Metadata } from "next";
import NewsLayout from "../../../components/NewsLayout";

export const metadata: Metadata = {
  title: "When the Church Prays, Hope Rises | COPPAK.ORG",
  description: "A pastoral reflection on Jeremiah 33:3, the power of united prayer, and the church's calling to bring hope and compassion to communities.",
  alternates: { canonical: "/news/when-the-church-prays-hope-rises" },
  openGraph: {
    type: "article",
    title: "When the Church Prays, Hope Rises",
    description: "Faith, prayer and practical compassion in difficult times.",
    url: "/news/when-the-church-prays-hope-rises",
  },
};

export default function PrayerBlogPage() {
  return (
    <NewsLayout>
      <article className="news-article news-shell">
        <nav className="news-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span aria-hidden="true">/</span><a href="/news">News &amp; Stories</a>
        </nav>
        <header>
          <p className="news-eyebrow">Pastoral reflection · Prayer &amp; hope</p>
          <h1>When the Church Prays, Hope Rises</h1>
          <div className="news-article__meta">
            <span>Published: <time dateTime="2026-11-10">10 November 2026</time></span>
            <span>By Rev. Dr. Jamil Nasir</span>
          </div>
          <p className="news-article__intro">Prayer is not an escape from the world's suffering. It is where the church receives courage to meet that suffering with faith, love and action.</p>
        </header>
        <div className="news-article__content">
          <p>There are moments when the needs around us seem greater than the strength within us. Families face uncertainty. Young people search for purpose. Communities carry wounds that cannot be healed by words alone. In such moments, the church is called neither to despair nor to remain silent. We are called to pray—and to rise from prayer ready to serve.</p>
          <p>In Jeremiah 33:3, the Lord invites His people: “Call unto me, and I will answer thee, and shew thee great and mighty things, which thou knowest not” (KJV). The promise does not mean that every hardship will disappear immediately. It reminds us that our circumstances do not place us beyond God's hearing.</p>
          <section className="news-article__section">
            <h2>Prayer turns fear into dependence on God</h2>
            <p>The early church understood this. When believers faced threats, they gathered and raised their voices to God. Acts 4:31 records that, after they prayed, they were filled with the Holy Spirit and spoke God's word with boldness. Their challenges were real, but so was the courage they received.</p>
            <p>We do not need to wait until we feel powerful to pray. We pray because we know our limits and trust the One whose strength is sufficient. A church on its knees can become a church ready to stand faithfully amid great difficulty.</p>
          </section>
          <section className="news-article__section">
            <h2>Prayer must open our hands to our neighbours</h2>
            <p>True prayer enlarges our hearts. As we ask God to comfort the grieving, we should also be willing to sit beside them. As we pray for children, we should care about their education and safety. As we intercede for families under financial strain, we should consider how practical generosity can restore dignity.</p>
            <p>The Church of Pentecost Pakistan seeks to express this conviction through worship, discipleship, education, pastoral care and compassionate outreach. Every act of service points toward a simple truth: people are precious to God, and the church must never overlook their suffering.</p>
          </section>
          <section className="news-article__section">
            <h2>Prayer unites generations for mission</h2>
            <p>In Acts 12:5, the church prayed earnestly for Peter while he was in prison. They could not control the circumstances, but they could unite in seeking God. Today, children, young adults, parents and elders can likewise stand together in prayer for their communities and their nation.</p>
            <p>Let us pray for peace in Pakistan, for wisdom among leaders, for protection of vulnerable families, and for opportunities to witness to Christ with humility and respect. Let us also ask for the courage to become part of the answer through reconciliation, service and faithful discipleship.</p>
          </section>
          <section className="news-article__section">
            <h2>A call to the church today</h2>
            <p>When the church cries out to God, it is not a sign of defeat. It is an expression of faith. We may not know how the next chapter will unfold, but we can choose what kind of people we will be in it: people who pray sincerely, love generously, speak truthfully and serve faithfully.</p>
            <p>May our prayer meetings become places of renewed compassion. May our congregations become homes of hope. May our words of faith be matched by deeds of mercy. And may the light of Jesus Christ shine through us wherever there is darkness.</p>
          </section>
          <section className="news-article__section">
            <h2>A prayer</h2>
            <p>Heavenly Father, hear the cry of Your people. Strengthen those who are weary, comfort those who grieve, protect those who are vulnerable, and renew Your church through the Holy Spirit. Give us boldness to proclaim Christ and compassion to serve our neighbours. Let hope rise in our homes, our churches and our communities. In Jesus' name, Amen.</p>
          </section>
          <p><strong>Rev. Dr. Jamil Nasir</strong><br/>National Head, The Church of Pentecost Pakistan</p>
          <a className="news-text-link" href="/news">← All news &amp; stories</a>
        </div>
      </article>
    </NewsLayout>
  );
}
