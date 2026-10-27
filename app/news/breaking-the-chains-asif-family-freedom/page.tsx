import type { Metadata } from "next";
import NewsLayout from "../../../components/NewsLayout";

export const metadata: Metadata = {
  title: "Breaking the Chains: Asif's Journey to Freedom | COPPAK",
  description:
    "How The Church of Pentecost Pakistan and PENTSOS helped release Asif's family from generational brick-kiln bondage and gave them a rickshaw for an independent livelihood.",
  alternates: { canonical: "/news/breaking-the-chains-asif-family-freedom" },
  openGraph: {
    type: "article",
    title: "Breaking the Chains: Asif's Family Finds Freedom",
    description: "Three generations of bondage. One family's journey to freedom, dignity, and a new beginning.",
    url: "/news/breaking-the-chains-asif-family-freedom",
  },
};

const paragraphs = [
  "For three generations, the same family had worked under the burden of debt at a brick kiln in Sheikhupura, Pakistan. What began as a loan taken by Asif's grandfather was passed down to his father and then to Asif himself. Work continued, yet the family found it almost impossible to escape the obligation.",
  "Asif and his wife, Javeria, were raising seven children in conditions shaped by hard physical labour and financial insecurity. Brickmaking filled their days. Their hopes, however, were not extravagant: they wanted to provide food, educate their children, and earn a living without the weight of inherited debt.",
];

const shell: React.CSSProperties = { maxWidth: 850, margin: "0 auto" };
const sectionStyle: React.CSSProperties = { marginTop: 48 };
const noteStyle: React.CSSProperties = { padding: "18px 22px", background: "#f4f7f6", borderLeft: "4px solid #b59151", margin: "25px 0" };

export default function AsifImpactStory() {
  return (
    <NewsLayout>
      <article className="news-article news-shell">
        <nav className="news-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">/</span>
          <a href="/news">News</a>
          <span aria-hidden="true">/</span>
          <span>Breaking the Chains</span>
        </nav>
        <header style={shell}>
          <p className="news-eyebrow">PENTSOS · HUMANITARIAN IMPACT STORY · SHEIKHUPURA, PAKISTAN</p>
          <h1>Breaking the Chains: Three Generations of Bondage Come to an End</h1>
          <div className="news-article__meta">
            <span>Published: <time dateTime="2026-10-27">27 October 2026</time></span>
            <span>Sheikhupura, Pakistan</span>
            <span>The Church of Pentecost Pakistan</span>
          </div>
          <p className="news-article__intro">
            The story of Asif, Javeria and their seven children—and how practical Christian compassion helped a family find freedom and a new way to earn a living.
          </p>
        </header>
        <div className="news-article__content" style={shell}>
          <section style={sectionStyle}>
            <h2>Born into a debt he never chose</h2>
            {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p>Across brick-kiln communities, families can become trapped in the peshgi, or advance-loan, system. As labour continues and deductions accumulate, a debt intended to meet a temporary need can shape a family's entire future. Asif's experience illustrates the human cost of that cycle.</p>
          </section>
          <section style={sectionStyle}>
            <h2>Seven children, and a longing for a different childhood</h2>
            <p>Asif and Javeria's deepest concern was for their children. As they worked among countless rows of freshly moulded bricks, the family watched precious years pass without the education and opportunities they wished they could offer the next generation.</p>
            <p>Their dream was simple: children should carry books rather than burdens, and their future should not be determined by loans taken decades before they were born.</p>
          </section>
          <section style={sectionStyle}>
            <h2>When the Church listened—and acted</h2>
            <p>The family's situation came to the attention of The Church of Pentecost Pakistan through Pentecost Social Services (PENTSOS). Led by Apostle Dr. Jamil Nasir, the ministry met with Asif and his family, listened to their account, and sought a practical path towards a different future.</p>
            <p>Asif explained that he could drive a rickshaw. What he lacked was an opportunity to obtain one and earn a livelihood independently. Javeria expressed her hope of developing sewing skills to help support their home. These were not demands for luxury; they were aspirations to provide for their children through their own work.</p>
          </section>
          <section style={sectionStyle}>
            <h2>The debt was paid. The bondage was broken.</h2>
            <p>In an important step towards securing the family's release, The Church of Pentecost Pakistan arranged the settlement of their outstanding bonded-labour debt. Photographs taken during the intervention document the cash payment process with the person to whom the debt was owed.</p>
            <p>For Asif, the payment meant that a debt which had followed his grandfather, his father, and then himself no longer had to define the next generation. The family could begin to look beyond the brick kiln.</p>
            <div style={noteStyle}><strong>Three generations affected by debt. Seven children offered a new horizon. One family beginning again.</strong></div>
          </section>
          <section style={sectionStyle}>
            <h2>A green rickshaw—and a chance to earn freely</h2>
            <p>Freedom from debt was only the beginning. PENTSOS also provided Asif with a green rickshaw, visibly bearing The Church of Pentecost Pakistan's name, to help him start an independent livelihood. Photographs of the handover show Asif at the vehicle with his family and the ministry team.</p>
            <p>The rickshaw is more than a means of transport. It represents a father's opportunity to work independently, a family's hope for stable income, and children's chance to grow up with possibilities beyond the kiln.</p>
          </section>
          <section style={sectionStyle}>
            <h2>Prayer, dignity and the Gospel in action</h2>
            <p>During the ministry visit, church representatives also prayed with Asif's family. For The Church of Pentecost Pakistan, the work of compassion is rooted in Jesus Christ's concern for those who are poor, vulnerable and oppressed (Luke 4:18).</p>
            <p>Christian love is not only expressed in words. It can be seen in debts settled, livelihoods supported, children encouraged, and families treated with dignity and respect.</p>
          </section>
          <section style={sectionStyle}>
            <h2>The mission continues</h2>
            <p>Asif's journey is one family story within a wider challenge. Other workers and children still face financial exploitation, interrupted education, and uncertainty about the future. PENTSOS seeks to stand with vulnerable communities through practical assistance, sustainable livelihoods, educational opportunity, and pastoral care.</p>
            <p>Churches, Christian organisations, humanitarian partners and compassionate individuals are invited to help extend that work. Together, we can support families seeking freedom and help ensure that children inherit opportunity—not generations of debt.</p>
          </section>
          <aside className="news-article__source" style={sectionStyle}>
            <h2>Be part of someone's freedom story</h2>
            <p>Help PENTSOS support families escaping bonded labour and rebuilding independent lives.</p>
            <p><a className="news-button" href="mailto:info@coppak.org?subject=PENTSOS%20Partnership%20-%20Asif%20Story">Contact our ministry team</a></p>
            <p>Learn more about our <a href="/projects/brick-kiln-deliverance">brick-kiln deliverance ministry</a>.</p>
          </aside>
          <p style={{ marginTop: 34 }}><a className="news-text-link" href="/news">← All news & stories</a></p>
        </div>
      </article>
    </NewsLayout>
  );
}
