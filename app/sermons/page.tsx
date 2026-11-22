import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sermons & Teachings | The Church of Pentecost Pakistan",
  description: "Biblical preaching and apologetics by Rev. Dr. Jamil Nasir. Watch sermon videos and read English teachings.",
  alternates: { canonical: "/sermons" },
};

const entries = [
  {
    href: "/sermons/loans-interest-mortgages",
    date: "LATEST SERMON · BIBLICAL APOLOGETICS",
    title: "Loans, Interest & Mortgages: Sin or Misunderstanding?",
    description: "Watch Rev. Dr. Jamil Nasir's teaching and read the complete English sermon on borrowing, lending, interest, pledges, mortgages and biblical justice.",
    action: "Watch video and read the full sermon",
  },
  {
    href: "/sermons/interest-and-the-bible",
    date: "15 NOVEMBER 2026 · BIBLICAL APOLOGETICS",
    title: "Interest and the Bible: Truth or Misunderstanding?",
    description: "Read the first message in this series, examining Psalm 15, Nehemiah 5, Matthew 25 and Luke 19.",
    action: "Watch video and read the English sermon",
  },
  {
    href: "/sermons/the-lords-supper",
    date: "1 NOVEMBER 2026 · HOLY COMMUNION",
    title: "The Lord’s Supper: Divine Institution or Pagan Imitation?",
    description: "Explore the Lord’s Supper, Passover and the New Covenant through Scripture and history.",
    action: "Read sermon and watch the video",
  },
  {
    href: "/sermons/what-is-in-your-hand",
    date: "25 OCTOBER 2026 · EXODUS 4:2",
    title: "What Is in Your Hand?",
    description: "Discover how God can use our skills, talents, ordinary tools and surrendered hearts.",
    action: "Read the complete English sermon",
  },
];

export default function SermonsIndex() {
  return <><link rel="stylesheet" href="/styles/pages/sermons.css" /><div className="sermon-page sermon-index">
    <section className="library-hero"><div className="library-shell"><span className="eyebrow">THE CHURCH OF PENTECOST PAKISTAN</span><h1>Sermons <em>&amp; Teachings.</em></h1><p>Biblical preaching, research and Christian apologetics from Rev. Dr. Jamil Nasir.</p></div></section>
    <section className="library-shell library-feature">
      <div className="library-head"><div><span className="eyebrow">FEATURED MESSAGE</span><h2>Latest sermon</h2></div><a href="/media">Explore church media ↗</a></div>
      {entries.map((entry, index) => <div key={entry.href}>
        {index === 1 && <div className="library-head" style={{marginTop:58}}><div><span className="eyebrow">SERMON ARCHIVE</span><h2>Previous sermons</h2></div></div>}
        <a className="library-card" href={entry.href} style={{marginBottom:24}}><div className="library-photo"><img src={index === 0 ? "https://img.youtube.com/vi/eE8AhLTpzNU/hqdefault.jpg" : index === 1 ? "https://img.youtube.com/vi/mi5PW8ZSpCs/hqdefault.jpg" : index === 2 ? "https://img.youtube.com/vi/HjFP4sLrPRI/hqdefault.jpg" : "/assets/images/coppak/about/team/jamil-nasir.jpg"} alt={index === 0 ? "Loans, Interest and Mortgages sermon video thumbnail" : index === 1 ? "Interest and the Bible sermon video thumbnail" : index === 2 ? "The Lord's Supper sermon video thumbnail" : "Rev. Dr. Jamil Nasir"} loading="lazy" /></div><div className="library-info"><span className="eyebrow">{entry.date}</span><h3>{entry.title}</h3><p>{entry.description}</p><span className="library-go">{entry.action} →</span></div></a>
      </div>)}
    </section>
  </div></>;
}
