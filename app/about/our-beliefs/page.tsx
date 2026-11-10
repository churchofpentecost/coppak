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
return (<>
<style>{"\n.bf{--ink:#13243f;--gold:#cba663;color:#26374d}.bf *{box-sizing:border-box}.bf-wrap{max-width:1160px;margin:auto;padding:0 24px}\n.bf-hero{min-height:530px;display:flex;align-items:center;background:linear-gradient(90deg,rgba(9,25,49,.97),rgba(9,25,49,.77)),url('/assets/images/coppak/about/history/01.jpg') center/cover;color:#fff}\n.bf-hero-inner{width:100%;padding:75px 24px 95px}.bf-crumb{font:700 11px Montserrat,sans-serif;text-transform:uppercase;letter-spacing:1px;margin-bottom:65px;color:#dce2ed}.bf-crumb a{color:inherit;text-decoration:none}\n.bf-eyebrow{font:800 12px Montserrat,sans-serif;letter-spacing:2.5px;text-transform:uppercase;color:var(--gold);margin:0 0 20px}\n.bf-hero h1{font:700 clamp(48px,7vw,83px)/1.06 Georgia,serif;color:#fff;margin:0 0 24px;letter-spacing:-1.5px}.bf-hero p{font-size:21px;color:#e2e8f0;max-width:640px;line-height:1.7}\n.bf-button{display:inline-block;background:#d5b275;color:#10213a;text-decoration:none;padding:15px 24px;border-radius:4px;font:800 12px Montserrat,sans-serif;text-transform:uppercase;letter-spacing:1px;margin-top:17px}.bf-button:hover{color:#10213a;background:#e5c899}\n.bf-strip{background:#101f37;color:#f7e8ce;text-align:center;padding:24px;font:700 12px/2 Montserrat,sans-serif;letter-spacing:1.8px;text-transform:uppercase}\n.bf-intro{background:#f7f6f2;padding:94px 0}.bf-intro-grid{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,.75fr);gap:70px;align-items:start}\n.bf-title{font:700 clamp(31px,4vw,47px)/1.2 Georgia,serif;color:var(--ink);margin:0 0 28px}.bf-intro p:not(.bf-eyebrow){font-size:16px;line-height:1.9;color:#4d5b6c;margin-bottom:19px}\n.bf-quote{background:white;border-top:4px solid #caa563;padding:40px 34px;box-shadow:0 20px 45px rgba(16,31,55,.08);margin-top:40px}\n.bf-quote em{display:block;font:italic 26px/1.55 Georgia,serif;color:#19314e}.bf-quote small{display:block;margin-top:25px;color:#9e773c;letter-spacing:2px;font-weight:800}\n.bf-tenets{padding:100px 0;background:#fff}.bf-heading{text-align:center;max-width:750px;margin:0 auto 58px}.bf-heading p{font-size:17px;color:#637185;line-height:1.8}\n.bf-layout{display:grid;grid-template-columns:250px minmax(0,1fr);gap:45px;align-items:start}.bf-aside{position:sticky;top:25px;background:#f8f7f4;border:1px solid #e9e4dc;padding:27px;max-height:calc(100vh - 50px);overflow-y:auto}\n.bf-aside strong{display:block;margin-bottom:14px;font-size:12px;text-transform:uppercase;color:#a77e40;letter-spacing:1.5px}.bf-aside a{display:block;border-bottom:1px solid #e6e1d8;padding:11px 0;text-decoration:none;color:#344258;font:600 11px/1.6 Montserrat,sans-serif}.bf-aside a:hover{color:#ab8244}.bf-aside span{color:#ac8344;margin-right:8px}\n.bf-items{display:grid;gap:17px}.bf-card{scroll-margin-top:28px;border:1px solid #e9e4db;border-left:4px solid #cba663;box-shadow:0 9px 28px rgba(20,35,55,.045);padding:31px 34px;border-radius:4px;background:#fff}\n.bf-num{font:700 36px Georgia,serif;color:#c49e5f}.bf-card h3{font:700 clamp(20px,2.5vw,26px)/1.3 Georgia,serif;color:#172b48;margin:16px 0}.bf-card p{font-size:15px;line-height:1.88;color:#4d5b6c;margin:0 0 17px}\n.bf-refs{padding:15px 18px;background:#f7f6f2;border-radius:3px;font-size:12px!important}.bf-refs strong{color:#95703e}\n.bf-close{padding:92px 0;background:#101f37;color:#e1e7ef}.bf-close h2{color:white}.bf-close p{font-size:16px;line-height:1.85}.bf-declaration{font:italic 25px/1.6 Georgia,serif;color:#ecd7ae;border-left:3px solid #cba663;padding-left:25px;margin-top:30px}\n@media(max-width:900px){.bf-intro-grid,.bf-layout{grid-template-columns:1fr}.bf-aside{display:none}.bf-quote{max-width:600px;margin-top:0}}\n@media(max-width:600px){.bf-hero{min-height:480px}.bf-hero-inner{padding:60px 20px}.bf-crumb{margin-bottom:45px}.bf-intro,.bf-tenets,.bf-close{padding:65px 0}.bf-card{padding:25px 22px}.bf-strip{font-size:10px}.bf-declaration{font-size:21px}}\n"}</style>
<div className="bf">
<section className="bf-hero"><div className="bf-wrap bf-hero-inner">
<div className="bf-crumb"><a href="/">Home</a> &nbsp; / &nbsp; <a href="/about">About</a> &nbsp; / &nbsp; Our Beliefs</div>
<div className="bf-eyebrow">The Church of Pentecost Pakistan</div>
<h1>Our Faith.<br/>Our Foundation.</h1>
<p>A Christ-centered, Spirit-filled church rooted in Scripture and committed to the Great Commission.</p>
<a className="bf-button" href="#our-tenets">Explore our eleven tenets →</a>
</div></section>
<div className="bf-strip">Rooted in the Word &nbsp; ✦ &nbsp; Empowered by the Holy Spirit &nbsp; ✦ &nbsp; Unleashed to Transform Society</div>
<section className="bf-intro"><div className="bf-wrap bf-intro-grid"><div>
<p className="bf-eyebrow">Our identity and heritage</p><h2 className="bf-title">Grounded in Truth.<br/>Living by Faith.</h2>
<p>The Church of Pentecost Pakistan is a Christ-centered, Bible-believing, Spirit-filled church dedicated to proclaiming the Gospel, making disciples, equipping Christian leaders, and transforming communities through the power of the Holy Spirit.</p>
<p>Our beliefs are firmly grounded in the Holy Scriptures and affirm the essential doctrines of evangelical Christianity, including the Trinity, the deity of Jesus Christ, salvation through His death and resurrection, and His glorious second coming.</p>
<p>We also emphasize the baptism and gifts of the Holy Spirit, divine healing, holiness, prayer, and Spirit-empowered evangelism, believing that the Holy Spirit continues to work in and through believers today.</p>
<p><strong>We faithfully uphold the eleven foundational doctrinal tenets of The Church of Pentecost International</strong>, which guide our worship, biblical teaching, discipleship, pastoral leadership, and commitment to the Great Commission.</p>
<p>Our mission is to remain faithful to God's unchanging Word, empowered by His Spirit, and committed to transforming lives and communities for the glory of Jesus Christ.</p>
</div><aside className="bf-quote"><div style={{font:"80px Georgia,serif",color:"#cba663",height:65}}>“</div><em>Rooted and built up in Him, strengthened in the faith as you were taught, and overflowing with thankfulness.</em><small>COLOSSIANS 2:7</small></aside>
</div></section>
<section className="bf-tenets" id="our-tenets"><div className="bf-wrap">
<div className="bf-heading"><p className="bf-eyebrow">What we believe</p><h2 className="bf-title">Eleven Foundations of Faith</h2><p>The biblical doctrines that shape our worship, teaching, discipleship, leadership and mission.</p></div>
<div className="bf-layout">
<nav className="bf-aside" aria-label="Tenet navigation"><strong>Explore the tenets</strong>{tenets.map((t,i)=><a key={t.title} href={"#tenet-"+(i+1)}><span>{String(i+1).padStart(2,"0")}</span>{t.title}</a>)}</nav>
<div className="bf-items">{tenets.map((t,i)=><article className="bf-card" id={"tenet-"+(i+1)} key={t.title}>
<div className="bf-num">{String(i+1).padStart(2,"0")}</div><h3>{t.title}</h3><p>{t.description}</p><p className="bf-refs"><strong>Scripture references: </strong>{t.references}</p>
</article>)}</div>
</div></div></section>
<section className="bf-close"><div className="bf-wrap" style={{maxWidth:920}}><p className="bf-eyebrow">Our lifelong commitment</p><h2 className="bf-title">Faithful to the Word.<br/>Committed to the World.</h2>
<p>The Church of Pentecost Pakistan believes that sound biblical doctrine must produce genuine spiritual transformation, holy living, compassionate service, and faithful Christian witness.</p>
<p>We are committed to preaching Jesus Christ as the only Saviour, teaching the unchanging Word of God, making disciples, developing Spirit-filled Christian leaders, strengthening families, and demonstrating God's love through practical service.</p>
<p>Our eleven doctrinal beliefs form the foundation of our spiritual identity, ministry philosophy, Christian education, worship, and mission.</p>
<div className="bf-declaration">Jesus Christ is our foundation. The Holy Scriptures are our authority. The Holy Spirit is our strength. The Great Commission is our calling. The glory of God is our ultimate purpose.</div>
</div></section>
</div></>);
}
