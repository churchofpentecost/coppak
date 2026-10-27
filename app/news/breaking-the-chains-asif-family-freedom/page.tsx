import type { Metadata } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";
import NewsLayout from "../../../components/NewsLayout";

export const metadata: Metadata = {
 title: "Breaking the Chains: Asif's Family Finds Freedom | COPPAK",
 description: "The documentary story of Asif and his family, from generational bonded labour in Sheikhupura to debt settlement and a new livelihood through PENTSOS.",
 alternates: { canonical: "/news/breaking-the-chains-asif-family-freedom" },
 openGraph: { type: "article", title: "Breaking the Chains: Asif's Family Finds Freedom", description: "Three generations of bondage. One family's journey to freedom.", url: "/news/breaking-the-chains-asif-family-freedom" }
};

const photoFolder = "/assets/images/news/asif-breaking-the-chains";
// Two documentary images are already available in the site's project archive.
// When the 12 originals are installed, the exact PDF photographs take priority.
const photoFallbacks: Record<string, string> = {
  "IMG_6465.jpeg": "/assets/images/coppak/projects/brick-kiln/13.jpg",
  "IMG_6508.jpeg": "/assets/images/coppak/projects/brick-kiln/14.jpg",
};
const originalExists = (name: string) => existsSync(join(process.cwd(), "public", photoFolder.slice(1), name));
const photoUrl = (name: string) => originalExists(name) ? photoFolder + "/" + name : (photoFallbacks[name] || "");
const hasPhoto = (name: string) => originalExists(name) || Boolean(photoFallbacks[name]);
const chapters: string[][] = [["The family","Breaking the Chains","Three generations of bondage. One family's journey to freedom.","IMG_6471.jpeg","Asif with family members at the Sheikhupura brick kiln, where the Church met with them.","Asif and his wife Javeria were raising seven children while living with a debt that, according to their account, had burdened three generations of their family.","Through Pentecost Social Services (PENTSOS), The Church of Pentecost Pakistan sought to respond with more than temporary relief: settling the debt and helping the family begin a new livelihood."],["The workplace","A Life Built Around Bricks","The working conditions behind the story.","IMG_6417.jpeg","At the brick kiln, a woman works among rows of freshly moulded bricks as visitors observe.","For years, brickmaking defined the family's working days. Mud was pressed into moulds, bricks were laid out to dry, and the work continued in the heat and dust.","The family described the insecurity of living on small daily earnings while deductions were made toward their outstanding debt. In bad weather, production—and income—could stop altogether."],["The next generation","Seven Children, One Hope","Their parents wanted a different future for them.","IMG_6570.jpeg","Javeria and several children seated together during the ministry team's visit.","The hardest part of this struggle was watching the children grow up under the shadow of the brick kiln. Asif and Javeria wanted them to have access to education, safety and opportunities that had been beyond their reach.","For this family, freedom was never only about an old debt. It was about the possibility of giving the next generation a different inheritance."],["The church visit","Listening Before Acting","Understanding the family's needs and aspirations.","IMG_6451.jpeg","Church representatives speak with Asif and family members at the brick kiln.","The family's experience came to the attention of The Church of Pentecost Pakistan through its humanitarian ministry, PENTSOS. The team visited the kiln, met the family and heard their story directly.","When asked what kind of work he could pursue independently, Asif explained that he knew how to drive a rickshaw. His answer helped shape a practical response: freedom from debt accompanied by a means of earning a living."],["The children","A Different Tomorrow","Every child deserves the chance to dream.","IMG_6457.jpeg","The ministry team spends time with Asif's family and children at the kiln.","The children were present throughout the Church's visit. Their faces and voices were a reminder that the consequences of inherited debt extend beyond the adults who originally borrowed the money.","The Church's aim was to support a fresh start in which the family could pursue a stable home life and greater educational opportunities for their children."],["Prayer and support","Faith Expressed in Action","Standing with the family in prayer.","IMG_6465.jpeg","Asif's family and Church representatives join together in prayer at the kiln.","The visit also included a time of Christian prayer. The Church's humanitarian ministry expresses its faith through practical compassion, respect and support for people living under economic pressure.","As Luke 4:18 reminds Christians, Jesus proclaimed good news to the poor and freedom for the oppressed. PENTSOS seeks to reflect this calling by addressing practical needs alongside spiritual care."],["Debt settlement","The Payment Was Made","A decisive step toward the family's release.","IMG_6582.jpeg","The kiln owner is photographed counting banknotes as the outstanding debt is settled.","The Church arranged for the outstanding debt to be paid to the person to whom the family was financially bound. The photographs document the payment process, with cash being counted in front of the people involved.","The settlement addressed the burden that had followed Asif's family through three generations and created an opening for the family to begin again."],["Payment documentation","Witnessing the Settlement","The transaction was documented on site.","IMG_6579.jpeg","A second documentary photograph shows the cash counted during settlement of the debt.","These photographs are an important part of the story. They show a real financial settlement, not a staged illustration or a symbolic gesture.","The Church's intervention was intended to remove the obligation that had kept the family in bonded work and support their transition to an independent livelihood."],["Rickshaw handover","A New Source of Income","Freedom needed a sustainable next step.","IMG_6508.jpeg","Asif and the ministry team stand beside the new green rickshaw during the handover.","Paying the debt was an essential first step. Without new income, however, the family could remain vulnerable to another cycle of borrowing and hardship.","Because Asif knew how to drive, PENTSOS provided a rickshaw to help him begin earning independently. The vehicle was presented to the family in the presence of the Church team."],["The first journey","A Rickshaw, a Fresh Start","A practical gift became a symbol of independence.","IMG_6533.jpeg","Asif drives the Church of Pentecost Pakistan-branded rickshaw with family members aboard.","For Asif, the bright green rickshaw was more than transport. It represented the opportunity to work for himself, make decisions about his livelihood and provide for his children.","The photographs of him driving with members of his family mark a significant moment: after years shaped by inherited debt, a different kind of working life was finally within reach."],["Shared joy","A Family Celebrates","The atmosphere of the family gathering changed.","IMG-20251014-WA0019.jpg","Asif's family and Church representatives share a celebratory moment.","At the conclusion of the visit, the family and ministry representatives gathered in a moment of visible joy and thanksgiving. For those present, the story had moved from hardship and uncertainty to relief and renewed hope.","The photographs do not by themselves prove every future outcome; what they do document is a tangible intervention and a family looking toward a new beginning."],["The invitation","One Family. A New Future.","Help write the next chapter for other families.","IMG_6486.jpeg","Family members hold a thank-you banner for The Church of Pentecost Pakistan at the brick kiln.","Asif's family is one of many whose lives have been affected by the risks of inherited debt and exploitation. The Church of Pentecost Pakistan invites churches and humanitarian partners to support families seeking financial independence, education and dignity.","This is the heart of PENTSOS: practical compassion rooted in the love of Jesus Christ. To learn more or discuss partnership, visit coppak.org or write to info@coppak.org."]];

export default function AsifImpactStory() {
 return <NewsLayout>
   <article className="news-article news-shell">
    <nav className="news-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/news">News</a><span aria-hidden="true">/</span><span>Breaking the Chains</span></nav>
    <div className="news-article__content" style={{ width: "100%", maxWidth: 1050, margin: "0 auto", padding: "22px 12px 70px" }}>
      <header style={{ padding: "30px 0 44px" }}>
        <p className="news-eyebrow">PENTSOS · DOCUMENTARY HUMANITARIAN IMPACT · SHEIKHUPURA, PAKISTAN</p>
        <h1 style={{ fontSize: "clamp(2.75rem,6vw,5rem)", lineHeight: 1.08, color: "#163638" }}>Breaking the Chains</h1>
        <p style={{ fontSize: "clamp(1.1rem,2.4vw,1.55rem)", color: "#59716f" }}>Three generations of bondage. One family's journey to freedom, dignity, and a new beginning.</p>
        <p style={{ color: "#667977", fontSize: 13 }}>27 October 2026 · The Church of Pentecost Pakistan · Pentecost Social Services (PENTSOS)</p>
      </header>
      {chapters.map((chapter, index) => (
        <section key={index} id={"chapter-" + String(index + 1).padStart(2, "0")} style={{ borderTop: "1px solid #e6e5df", padding: "48px 0 55px" }}>
          <p style={{ color: "#9b7950", fontWeight: 800, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase" }}>{String(index + 1).padStart(2, "0")} / {chapter[0]}</p>
          <h2 style={{ color: "#163638", fontSize: "clamp(1.8rem,4.1vw,2.9rem)", lineHeight: 1.15, marginBottom: 6 }}>{chapter[1]}</h2>
          <p style={{ fontSize: 18, color: "#576c69", marginTop: 0 }}>{chapter[2]}</p>
          {hasPhoto(chapter[3]) && (
             <figure style={{ margin: "25px 0 31px" }}>
                <a href={photoUrl(chapter[3])} target="_blank" rel="noopener noreferrer">
                   <img src={photoUrl(chapter[3])} alt={chapter[4]} loading={index === 0 ? "eager" : "lazy"} width={2048} height={1152} style={{ display: "block", width: "100%", height: "auto", aspectRatio: "16 / 9", objectFit: "contain", borderRadius: 6, background: "#f5f2ec" }} />
                </a>
                <figcaption style={{ marginTop: 10, color: "#657575", fontSize: 13 }}>{chapter[4]}</figcaption>
             </figure>
          )}
          <div style={{ maxWidth: 870, margin: "0 auto", fontSize: 18, lineHeight: 1.75 }}>
             <p>{chapter[5]}</p>
             <p>{chapter[6]}</p>
          </div>
        </section>
      ))}
      <aside style={{ background: "#17383a", color: "#fff", padding: "32px 28px", borderRadius: 8, marginTop: 25 }}>
         <h2 style={{ color: "#fff" }}>Be part of someone's freedom story</h2>
         <p>Partner with PENTSOS to help families facing bonded labour find freedom, education and independent livelihoods.</p>
         <p><a href="mailto:info@coppak.org?subject=PENTSOS%20Partnership%20-%20Asif%20Story" style={{ color: "#efd5a1", fontWeight: 700 }}>Contact the ministry team</a></p>
      </aside>
      <p style={{ marginTop: 32 }}><a href="/news">← Back to news &amp; ministry reports</a></p>
    </div>
   </article>
 </NewsLayout>;
}