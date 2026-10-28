import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "National Executive Council | The Church of Pentecost Pakistan",
  description: "Meet the nine members of the National Executive Council of The Church of Pentecost Pakistan.",
  alternates: { canonical: "/about/national-executive-council" },
  openGraph: {
    title: "National Executive Council | COPPAK",
    description: "The leadership serving the National Executive Council of The Church of Pentecost Pakistan.",
    url: "/about/national-executive-council",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const leaders = [
  { name: "Apostle Dr. Jamil Nasir", role: "National Head", photo: "/assets/images/coppak/about/team/jamil-nasir-2026.webp" },
  { name: "Apostle Palous Barket", role: "National Secretary", photo: "/assets/images/coppak/about/team/palous-barket.jpg" },
  { name: "Simon Khan", role: "National Deacon / Treasurer", photo: "/assets/images/coppak/about/team/simon-khan.jpg" },
  { name: "Rev. Akeel Nasir", role: "Member", photo: "/assets/images/coppak/about/team/akeel-nasir.jpg" },
  { name: "Rev. Shakeel Nasir", role: "Member", photo: "/assets/images/coppak/about/team/shakeel-nasir.png" },
  { name: "Rev. Matti Karmat", role: "Member", photo: "/assets/images/coppak/about/team/matti-karmat.jpg" },
  { name: "Elder Akram Khokhor", role: "Member", photo: "/assets/images/coppak/about/team/akram-khokhor.svg" },
  { name: "Evangelist Rose Mary Nasir", role: "Member", photo: "/assets/images/coppak/about/team/rose-mary.jpg" },
  { name: "Deaconess Shumaila Din", role: "Member", photo: "/assets/images/coppak/about/team/shumaila-din.svg" },
];

export default function NationalExecutiveCouncil() {
  return (
    <div className="nec-page">
      <section className="nec-hero">
        <div className="nec-wrap nec-hero-inner">
          <nav className="nec-crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a><span aria-hidden="true">/</span>
            <a href="/about">About</a><span aria-hidden="true">/</span>
            <strong>National Executive Council</strong>
          </nav>
          <p className="nec-overline">The Church of Pentecost Pakistan</p>
          <h1>National Executive<br />Council</h1>
          <p className="nec-hero-description">United in leadership, committed to faithful stewardship, and serving the mission of The Church of Pentecost across Pakistan.</p>
          <div className="nec-hero-meta"><span><i aria-hidden="true" /> National Leadership</span><span><i aria-hidden="true" /> Nine Leaders</span></div>
        </div>
      </section>

      <section className="nec-intro">
        <div className="nec-wrap nec-intro-grid">
          <div>
            <p className="nec-eyebrow">Our responsibility</p>
            <h2>Leadership with purpose.<br />Service with integrity.</h2>
          </div>
          <div className="nec-intro-copy">
            <p>The National Executive Council implements the policies and decisions of the National Council.</p>
            <p>It also recommends to the General Council the calling of new entrants, appointments, revocations, dismissals, impeachment, and retirement of ministers and officers of the Church.</p>
          </div>
        </div>
      </section>

      <section className="nec-people" aria-labelledby="nec-leaders-title">
        <div className="nec-wrap">
          <div className="nec-section-head">
            <div>
              <p className="nec-eyebrow">Leadership in service</p>
              <h2 id="nec-leaders-title">Meet Our Leadership</h2>
            </div>
            <p className="nec-section-note">Nine leaders serving the Church with shared purpose, accountability and commitment.</p>
          </div>
          <div className="nec-grid">
            {leaders.map((person, index) => (
              <article className="nec-card" key={person.name}>
                <div className="nec-portrait">
                  <img
                    src={person.photo}
                    alt={person.name}
                    loading={index < 3 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>
                <div className="nec-card-meta">
                  <p className="nec-role">{person.role}</p>
                  <h3>{person.name}</h3>
                  <span className="nec-mini-rule" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nec-closing">
        <div className="nec-wrap nec-closing-grid">
          <div><h2>One church. One mission.</h2><p>With prayer, accountability and shared responsibility, the National Executive Council serves the mission of the Church throughout Pakistan.</p></div>
          <a href="/about">Discover Our Church &nbsp;↗</a>
        </div>
      </section>
      <style>{`
      .nec-page { --nec-ink:#1b293a; --nec-navy:#172637; --nec-red:#9f3043; --nec-gold:#c4a266; --nec-cream:#f7f6f3; color:var(--nec-ink); background:white; font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",Arial,sans-serif; }
      .nec-page *, .nec-page *::before, .nec-page *::after { box-sizing:border-box; }
      .nec-page .nec-wrap { width:min(1160px,calc(100% - 60px)); margin:0 auto; }
      .nec-page .nec-hero { background:linear-gradient(109deg,#162738 0%,#253043 55%,#703440 120%); color:#fff; position:relative; overflow:hidden; }
      .nec-page .nec-hero::before { content:""; position:absolute; width:500px; height:500px; border:1px solid rgba(255,255,255,.10); border-radius:50%; right:-130px; top:-230px; box-shadow:0 0 0 100px rgba(255,255,255,.025),0 0 0 200px rgba(255,255,255,.018); }
      .nec-page .nec-hero::after { content:""; position:absolute; width:4px; height:160px; background:var(--nec-gold); left:max(24px,calc((100vw - 1160px)/2)); top:138px; opacity:.95; }
      .nec-page .nec-hero-inner { position:relative; padding:65px 0 84px; }
      .nec-page .nec-crumbs { color:#dedfe3; font-size:12px; letter-spacing:.02em; margin-bottom:43px; }
      .nec-page .nec-crumbs a { color:#dedfe3; text-decoration:none; }
      .nec-page .nec-crumbs span { color:#bfc0c6; margin:0 12px; }
      .nec-page .nec-crumbs strong { color:#e2c58b; font-weight:700; }
      .nec-page .nec-overline { font-size:11px; letter-spacing:.27em; font-weight:800; color:#e1bd7e; text-transform:uppercase; margin:0; }
      .nec-page .nec-hero h1 { color:white; font:600 clamp(37px,5vw,68px)/1.09 Georgia,"Times New Roman",serif; letter-spacing:-.027em; margin:18px 0; max-width:810px; }
      .nec-page .nec-hero-description { max-width:660px; font-size:16px; line-height:1.85; color:#e5e2e1; margin:0; }
      .nec-page .nec-hero-meta { display:flex; flex-wrap:wrap; gap:28px; margin-top:36px; align-items:center; }
      .nec-page .nec-hero-meta span { display:flex; align-items:center; gap:10px; font-size:11px; font-weight:800; letter-spacing:.15em; color:#dcdde1; text-transform:uppercase; }
      .nec-page .nec-hero-meta i { display:inline-block; width:22px; height:1px; background:#bc9b62; }
      .nec-page .nec-intro { padding:80px 0 77px; background:#fff; }
      .nec-page .nec-intro-grid { display:grid; grid-template-columns:1fr 1.35fr; gap:84px; align-items:center; }
      .nec-page .nec-eyebrow { display:flex; align-items:center; gap:15px; text-transform:uppercase; font-size:11px; letter-spacing:.20em; color:var(--nec-red); font-weight:900; margin:0; }
      .nec-page .nec-eyebrow::before { content:""; height:2px; width:30px; background:var(--nec-red); }
      .nec-page .nec-intro h2 { font:500 clamp(31px,3.6vw,44px)/1.18 Georgia,"Times New Roman",serif; margin:23px 0 0; letter-spacing:-.02em; color:var(--nec-ink); }
      .nec-page .nec-intro-copy { color:#666d75; font-size:15px; line-height:1.95; border-left:1px solid #ddd8cd; padding-left:33px; }
      .nec-page .nec-intro-copy p { margin:0 0 12px; }
      .nec-page .nec-intro-copy p:last-child { margin-bottom:0; }
      .nec-page .nec-people { padding:75px 0 87px; background:var(--nec-cream); }
      .nec-page .nec-section-head { display:flex; align-items:end; justify-content:space-between; gap:35px; margin-bottom:35px; }
      .nec-page .nec-section-head h2 { font:500 clamp(30px,3vw,39px)/1.2 Georgia,"Times New Roman",serif; margin:8px 0 0; letter-spacing:-.016em; color:var(--nec-ink); }
      .nec-page .nec-section-note { font-size:13px; color:#7b8186; margin:0 0 5px; line-height:1.5; max-width:300px; text-align:right; }
      .nec-page .nec-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:27px; }
      .nec-page .nec-card { background:white; border:1px solid #eceae7; box-shadow:0 10px 34px rgba(36,40,45,.045); min-width:0; overflow:hidden; transition:transform .2s ease,box-shadow .2s ease; }
      .nec-page .nec-card:hover { transform:translateY(-4px); box-shadow:0 16px 40px rgba(36,40,45,.095); }
      .nec-page .nec-portrait { height:330px; background:linear-gradient(180deg,#fcfcfb,#f1f2f0); overflow:hidden; display:flex; justify-content:center; align-items:end; position:relative; }
      .nec-page .nec-portrait img { display:block; max-width:100%; width:100%; height:100%; object-fit:contain; object-position:center bottom; }
      .nec-page .nec-card-meta { padding:22px 24px 25px; min-height:128px; }
      .nec-page .nec-role { font-size:10px; line-height:1.6; letter-spacing:.15em; font-weight:850; text-transform:uppercase; color:var(--nec-red); margin:0 0 8px; }
      .nec-page .nec-card-meta h3 { font:500 23px/1.21 Georgia,"Times New Roman",serif; letter-spacing:-.017em; margin:0; min-height:55px; color:#202e3f; }
      .nec-page .nec-mini-rule { width:32px; height:2px; background:var(--nec-gold); display:block; margin-top:11px; }
      .nec-page .nec-closing { background:linear-gradient(95deg,var(--nec-navy),#383645); padding:54px 0; color:#f3f2ed; }
      .nec-page .nec-closing-grid { display:flex; align-items:center; justify-content:space-between; gap:30px; }
      .nec-page .nec-closing h2 { color:#fff; font:500 30px Georgia,serif; margin:0 0 10px; }
      .nec-page .nec-closing p { margin:0; color:#c8cbd1; font-size:14px; line-height:1.75; max-width:650px; }
      .nec-page .nec-closing a { flex:none; border:1px solid #dfc08a; padding:15px 24px; color:#f6d89e; font-size:12px; font-weight:800; letter-spacing:.055em; text-decoration:none; }
      @media(max-width:960px) { .nec-page .nec-intro-grid { gap:38px; } .nec-page .nec-grid { gap:20px; } .nec-page .nec-portrait { height:300px; } .nec-page .nec-card-meta h3 { font-size:20px; } }
      @media(max-width:700px) { .nec-page .nec-wrap { width:min(100% - 34px,520px); } .nec-page .nec-hero-inner { padding:44px 0 58px; } .nec-page .nec-hero::after { display:none; } .nec-page .nec-crumbs { margin-bottom:35px; } .nec-page .nec-hero h1 { font-size:43px; } .nec-page .nec-hero-description { font-size:14px; } .nec-page .nec-hero-meta { gap:14px; } .nec-page .nec-hero-meta span { font-size:10px; } .nec-page .nec-intro { padding:53px 0; } .nec-page .nec-intro-grid { grid-template-columns:1fr; gap:22px; } .nec-page .nec-intro-copy { padding-left:19px; } .nec-page .nec-people { padding:56px 0 66px; } .nec-page .nec-section-head { display:block; } .nec-page .nec-section-note { text-align:left; margin-top:12px; } .nec-page .nec-grid { grid-template-columns:repeat(2,minmax(0,1fr)); gap:14px; } .nec-page .nec-portrait { height:255px; } .nec-page .nec-card-meta { padding:17px 15px 19px; min-height:120px; } .nec-page .nec-card-meta h3 { font-size:18px; min-height:63px; } .nec-page .nec-role { font-size:9px; } .nec-page .nec-closing-grid { display:block; } .nec-page .nec-closing a { display:inline-block; margin-top:24px; } }
      @media(max-width:480px) { .nec-page .nec-grid { grid-template-columns:1fr; max-width:370px; margin:auto; } .nec-page .nec-portrait { height:360px; } .nec-page .nec-card-meta h3 { font-size:23px; min-height:auto; } .nec-page .nec-card-meta { min-height:110px; } .nec-page .nec-hero h1 { font-size:39px; } }
      @media(prefers-reduced-motion:reduce) { .nec-page .nec-card { transition:none; } }
      `}</style>
    </div>
  );
}
