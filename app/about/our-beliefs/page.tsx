import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our Beliefs & Statement of Faith | The Church of Pentecost Pakistan",
  description: "Discover the biblical foundations and eleven doctrinal tenets of The Church of Pentecost Pakistan.",
  alternates: { canonical: "/about/our-beliefs" },
};
const tenets = [
  {
    "title": "THE BIBLE",
    "description": "We believe in the divine inspiration and authority of the Holy Scriptures. That the Bible is infallible in its declaration, final in its authority, comprehensive and all-sufficient in its provisions.",
    "references": "2 Timothy 3:16–17; 2 Peter 1:20–21."
  },
  {
    "title": "THE ONE TRUE GOD",
    "description": "We believe in the existence of the One True God, Elohim, maker of the whole universe; indefinable but revealed as Triune God — the Father, the Son and the Holy Spirit; one in nature, essence and attributes — Omnipotent, Omnipresent and Omniscient.",
    "references": "Genesis 1:1, 26; Matthew 3:16–17; 28:19; 2 Corinthians 13:14; Deuteronomy 6:4; Job 42:2; Isaiah 46:9–10; Revelation 19:6; Psalm 139:7–12; 147:5; Acts 5:4–5."
  },
  {
    "title": "THE DEPRAVED NATURE OF HUMANITY",
    "description": "We believe that all have sinned and come short of the glory of God, and are subject to eternal punishment, and need repentance and regeneration.",
    "references": "Genesis 3:1–19; Isaiah 53:6; Romans 3:23; Matthew 13:41–42; Romans 6:23; Acts 2:38; Matthew 4:17; Acts 20:21; John 3:3, 5; Titus 3:5."
  },
  {
    "title": "THE SAVIOUR",
    "description": "We believe humanity’s need of a Saviour has been met in the person of Jesus Christ, because of His deity, virgin birth, atoning death, resurrection and ascension, His abiding intercession and His second coming to judge the living and the dead.",
    "references": "Matthew 1:21; John 4:42; Acts 2:36; Ephesians 5:23; Philippians 2:6–11; Isaiah 9:6; John 1:1; John 20:28; Romans 9:5; Titus 2:13–14; Isaiah 7:14; Matthew 1:18; Luke 1:25–26; Romans 3:25; Hebrews 9:22; 1 John 2:2; Matthew 28:5–7; Acts 2:24; Acts 10:39–40; 1 Corinthians 15:3–4; Acts 1:9–11; Acts 2:33–36; Romans 8:34; Hebrews 7:25; Acts 1:11; Acts 10:42; 1 Thessalonians 4:16–18; 2 Timothy 4:1; Revelation 22:12, 20."
  },
  {
    "title": "REPENTANCE, JUSTIFICATION AND SANCTIFICATION",
    "description": "We believe all humans have to repent and confess their sins before God and believe in the vicarious death of Jesus Christ before they can be justified before God. We believe in the sanctification of the believer through the working of the Holy Spirit and God’s gift of eternal life to the believer.",
    "references": "Luke 15:7; Acts 2:38; Acts 3:19; Acts 17:30; Romans 4:25; 5:1; 1 Corinthians 1:30; 6:11; John 17:2–3; John 10:27–28; Romans 6:23b; 1 John 5:11–13."
  },
  {
    "title": "THE ORDINANCES OF BAPTISM AND THE LORD’S SUPPER OR COMMUNION",
    "description": "We believe in the ordinance of Baptism by immersion as a testimony of a convert who has attained a responsible age of 13 years. Infants and children are not baptised but are dedicated to the Lord. We believe in the ordinance of the Lord’s Supper or Holy Communion, which should be partaken by all members who are in full fellowship.",
    "references": "Matthew 3:16; Matthew 28:19; Mark 1:9–10; Mark 16:16; Acts 2:38; Mark 10:13–16; Luke 2:22–24, 34; Luke 22:19–20; Acts 20:7; 1 Corinthians 11:23–33."
  },
  {
    "title": "BAPTISM, GIFTS AND FRUIT OF THE HOLY SPIRIT",
    "description": "We believe in the Baptism of the Holy Spirit for all believers with the initial evidence of speaking in tongues, and in the operation of the gifts and fruit of the Holy Spirit.",
    "references": "Joel 2:28–29; Acts 2:3–4, 38–39; Acts 10:44–46; Acts 19:1–6; Romans 12:6–8; Galatians 5:22–23; 1 Corinthians 12:8–11, 28–30."
  },
  {
    "title": "DIVINE HEALING",
    "description": "We believe that the healing of sicknesses and diseases is provided for God’s people in the atonement. However, the Church is not opposed to medication by qualified medical practitioners.",
    "references": "Isaiah 53:4–5; Matthew 8:7–13, 16–17; Mark 16:17–18; Luke 13:10–16; Acts 10:38; James 5:14–16."
  },
  {
    "title": "TITHES AND OFFERINGS",
    "description": "We believe in tithing and in the giving of freewill offerings towards the furtherance of the cause of the Kingdom of God. We believe that God blesses a cheerful giver.",
    "references": "Genesis 14:18–20; Malachi 3:6–10; Matthew 23:23; Acts 20:35; Hebrews 7:1–4; 1 Corinthians 16:1–2; 2 Corinthians 9:1–9."
  },
  {
    "title": "THE SECOND COMING AND THE NEXT LIFE",
    "description": "We believe in the second coming of Christ and the resurrection of the dead, both the saved and the unsaved. They that are saved to the resurrection of life and the unsaved to the resurrection of damnation.",
    "references": "Daniel 12:2; Mark 13:26; John 5:28–29; Acts 1:11; Acts 10:42; Romans 2:7–11; Romans 6:23."
  },
  {
    "title": "MARRIAGE AND FAMILY LIFE",
    "description": "We believe in the institution of marriage as a union established and ordained by God for the lifelong, intimate relationship between a man as husband and a woman as wife as biologically defined at birth. We believe that God instituted marriage primarily for mutual help, fellowship and comfort that one ought to have for the other and for the honourable procreation of children, and their training in love, obedience to the Lord and responsible citizenship.",
    "references": "Genesis 2:18, 21–25; Matthew 19:4–6; 1 Corinthians 7:1–2."
  }
];
export default function OurBeliefsPage() {
  return (
    <>
      <section className="page-hero" style={{backgroundImage:"linear-gradient(178deg,rgba(13,22,52,.90),rgba(10,20,48,.96)),url(/assets/images/coppak/about/history/01.jpg)"}}>
        <div className="container"><div className="page-hero__inner">
          <ul className="page-hero__crumbs list-unstyled"><li><a href="/">Home</a></li><li className="page-hero__crumb-sep">/</li><li><a href="/about">About</a></li><li className="page-hero__crumb-sep">/</li><li className="is-current"><span>Our Beliefs</span></li></ul>
          <h1 className="page-hero__title">Our Beliefs</h1><p className="page-hero__subtitle">Our Statement of Faith and Biblical Foundations</p>
        </div></div>
      </section>
      <section style={{padding:"72px 0 40px",background:"#f7f4ef"}}>
        <div className="container" style={{maxWidth:1000}}>
          <p style={{textTransform:"uppercase",letterSpacing:2,color:"#9b782f",fontWeight:700}}>The Church of Pentecost Pakistan</p>
          <h2 style={{fontSize:"clamp(26px,4vw,42px)",color:"#12203c",lineHeight:1.2,marginBottom:18}}>Rooted in the Word. Empowered by the Holy Spirit. Unleashed to Transform Society.</h2>
          <p style={{fontStyle:"italic",marginBottom:32}}>Colossians 2:7</p>
          <h3 style={{fontSize:25,marginBottom:18}}>Our Pentecostal Identity and Biblical Heritage</h3>
          <p>The Church of Pentecost Pakistan is a Christ-centered, Bible-believing, Spirit-filled church dedicated to proclaiming the Gospel, making disciples, equipping Christian leaders, and transforming communities through the power of the Holy Spirit.</p>
          <p>Our beliefs are firmly grounded in the Holy Scriptures and affirm the essential doctrines of evangelical Christianity, including the Trinity, the deity of Jesus Christ, salvation through His death and resurrection, and His glorious second coming.</p>
          <p>We also emphasize the baptism and gifts of the Holy Spirit, divine healing, holiness, prayer, and Spirit-empowered evangelism, believing that the Holy Spirit continues to work in and through believers today.</p>
          <p><strong>We faithfully uphold the eleven foundational doctrinal tenets of The Church of Pentecost International</strong>, which guide our worship, biblical teaching, discipleship, pastoral leadership, and commitment to the Great Commission.</p>
          <p>Our mission is to remain faithful to God's unchanging Word, empowered by His Spirit, and committed to transforming lives and communities for the glory of Jesus Christ.</p>
        </div>
      </section>
      <section style={{padding:"65px 0 90px"}}>
        <div className="container" style={{maxWidth:1000}}>
          <div className="section-title text-center" style={{marginBottom:36}}><span className="section-title__tagline">Statement of Faith</span><h2 className="section-title__title">Our Eleven Foundational Doctrinal Beliefs</h2></div>
          <div style={{display:"grid",gap:20}}>
            {tenets.map((tenet,index)=>(
              <article key={tenet.title} style={{border:"1px solid #e7e2d7",borderRadius:16,padding:"clamp(22px,4vw,34px)",background:"#fff",boxShadow:"0 8px 28px rgba(12,30,58,.04)"}}>
                <div style={{color:"#a27a2d",fontSize:14,fontWeight:800,letterSpacing:2,marginBottom:9}}>TENET {String(index+1).padStart(2,"0")}</div>
                <h3 style={{fontSize:"clamp(20px,3vw,26px)",color:"#132544",marginBottom:17}}>{tenet.title}</h3>
                <p style={{lineHeight:1.85,marginBottom:14}}>{tenet.description}</p>
                <p style={{fontSize:14,lineHeight:1.7,color:"#566179",marginBottom:0}}><strong>Scripture references:</strong> {tenet.references}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section style={{padding:"65px 0",background:"#f7f4ef"}}>
        <div className="container" style={{maxWidth:1000}}>
          <h2 style={{fontSize:30,color:"#132544",marginBottom:22}}>Our Commitment to Biblical Faith and the Great Commission</h2>
          <p>The Church of Pentecost Pakistan believes that sound biblical doctrine must produce genuine spiritual transformation, holy living, compassionate service, and faithful Christian witness.</p>
          <p>We are committed to preaching Jesus Christ as the only Saviour, teaching the unchanging Word of God, making disciples, developing Spirit-filled Christian leaders, strengthening families, and demonstrating God's love through practical service.</p>
          <p>Our eleven doctrinal beliefs form the foundation of our spiritual identity, ministry philosophy, Christian education, worship, and mission.</p>
          <p style={{fontWeight:700,color:"#132544",fontSize:19,lineHeight:1.7}}>Jesus Christ is our foundation. The Holy Scriptures are our authority. The Holy Spirit is our strength. The Great Commission is our calling. The glory of God is our ultimate purpose.</p>
        </div>
      </section>
    </>
  );
}
