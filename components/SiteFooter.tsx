const footerStyles = [
  ".cop-footer,.cop-footer *{box-sizing:border-box}",
  ".cop-footer{color:#fff;background:#071831;position:relative;isolation:isolate;overflow:hidden;font-family:Inter,ui-sans-serif,system-ui,-apple-system,'Segoe UI',Arial,sans-serif}",
  ".cop-footer:before{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(ellipse 50% 80% at 100% 15%,rgba(37,84,143,.2),transparent 75%),radial-gradient(ellipse 40% 80% at 4% 100%,rgba(10,58,102,.3),transparent 80%)}",
  ".cop-footer a{text-decoration:none;color:inherit}",
  ".cop-footer a:focus-visible{outline:3px solid #ffcf16;outline-offset:4px}",
  ".cop-footer__cta{background:linear-gradient(114deg,#0f3662,#0d294c 72%,#0b2341);border-bottom:1px solid rgba(217,233,255,.13);position:relative;overflow:hidden}",
  ".cop-footer__cta:after{content:'';position:absolute;right:-130px;top:-148px;width:350px;height:350px;border:1px solid rgba(255,255,255,.08);border-radius:50%;box-shadow:0 0 0 55px rgba(255,255,255,.025),0 0 0 110px rgba(255,255,255,.018);pointer-events:none}",
  ".cop-footer__wrap{width:100%;max-width:1480px;padding-left:clamp(24px,4vw,80px);padding-right:clamp(24px,4vw,80px);margin:0 auto}",
  ".cop-footer__cta-inner{display:flex;justify-content:space-between;align-items:center;gap:35px;padding-top:36px;padding-bottom:36px;position:relative;z-index:1}",
  ".cop-footer__eyebrow{display:block;font-size:11px;color:#ffdb61;text-transform:uppercase;font-weight:800;letter-spacing:.19em;margin-bottom:10px}",
  ".cop-footer__cta h2{color:#fff;margin:0;max-width:680px;font-size:clamp(23px,2vw,34px);font-weight:800;line-height:1.18;letter-spacing:-.035em}",
  ".cop-footer__cta p{color:#c7d6e8;margin:8px 0 0;font-size:14px;line-height:1.6}",
  ".cop-footer__actions{display:flex;align-items:center;gap:10px;flex-shrink:0}",
  ".cop-footer .cop-footer__btn{min-height:45px;border-radius:9px;padding:0 18px;display:inline-flex;align-items:center;justify-content:center;gap:9px;white-space:nowrap;font-weight:800;font-size:13px;transition:transform .15s,background .15s}",
  ".cop-footer__btn:hover{transform:translateY(-2px)}",
  ".cop-footer .cop-footer__btn--gold{background:#ffcf16;color:#071b36;box-shadow:0 8px 22px rgba(2,11,32,.25)}",
  ".cop-footer .cop-footer__btn--gold:hover{background:#ffdb4b;color:#071b36}",
  ".cop-footer .cop-footer__btn--outline{border:1px solid rgba(240,248,255,.45);color:#fff;background:rgba(255,255,255,.03)}",
  ".cop-footer .cop-footer__btn--outline:hover{background:rgba(255,255,255,.12);color:#fff}",
  ".cop-footer__grid{padding-top:55px;padding-bottom:55px;display:grid;grid-template-columns:minmax(220px,1.55fr) minmax(130px,.9fr) minmax(135px,.95fr) minmax(155px,1.02fr) minmax(230px,1.55fr);column-gap:clamp(16px,2.5vw,52px);row-gap:42px}",
  ".cop-footer__logo{width:260px;max-width:100%;height:auto;display:block;margin:-5px 0 22px;object-fit:contain;object-position:left}",
  ".cop-footer__tagline{font-size:15px;font-weight:800;color:#fff;margin:0 0 10px;letter-spacing:-.014em;line-height:1.5}",
  ".cop-footer__description{font-size:13.5px;line-height:1.85;color:#acbfd7;margin:0 0 19px;max-width:270px}",
  ".cop-footer__stats{display:flex;flex-wrap:wrap;align-items:center;gap:8px;color:#f5d763;font-size:11.5px;font-weight:750;letter-spacing:.005em}",
  ".cop-footer__stats i{color:#577392;font-style:normal}",
  ".cop-footer__socials{display:flex;gap:8px;margin-top:23px}",
  ".cop-footer .cop-footer__social{width:37px;height:37px;border-radius:10px;display:grid;place-items:center;border:1px solid rgba(199,221,248,.18);background:rgba(50,95,148,.2);color:#e4efff;font-size:16px;transition:.17s}",
  ".cop-footer .cop-footer__social:hover{background:#244e88;color:#fff}",
  ".cop-footer__nav h3,.cop-footer__contact h3{font-size:13.5px;font-weight:850;color:#fff;margin:8px 0 20px;position:relative;letter-spacing:.012em;line-height:1.5}",
  ".cop-footer__nav h3:after,.cop-footer__contact h3:after{content:'';position:absolute;left:0;bottom:-9px;background:#ffcf16;height:2px;width:24px;border-radius:2px}",
  ".cop-footer__nav ul{list-style:none;margin:0;padding:0}",
  ".cop-footer__nav li{margin:0 0 13px;padding:0;list-style:none}",
  ".cop-footer .cop-footer__nav a{font-size:13.4px;color:#b6c8dd;line-height:1.45;transition:color .15s,padding .15s}",
  ".cop-footer .cop-footer__nav a:hover{color:#ffdb50;padding-left:3px}",
  ".cop-footer__contact-list{display:grid;gap:16px}",
  ".cop-footer__contact-item{display:grid;grid-template-columns:34px 1fr;gap:10px;align-items:start}",
  ".cop-footer__contact-icon{width:32px;height:32px;border-radius:9px;display:grid;place-items:center;background:rgba(255,207,22,.08);border:1px solid rgba(255,207,22,.18);color:#ffcf16;font-size:14px}",
  ".cop-footer__contact-info{min-width:0}",
  ".cop-footer__contact-info small{display:block;color:#90a6c1;font-size:11px;font-weight:750;letter-spacing:.04em;text-transform:uppercase;margin-bottom:3px}",
  ".cop-footer__contact-info a,.cop-footer__contact-info p{font-size:13.1px;color:#d0dbea;font-weight:550;line-height:1.65;margin:0;overflow-wrap:anywhere}",
  ".cop-footer__contact-info a:hover{color:#ffda53}",
  ".cop-footer .cop-footer__contact-extra{margin-top:15px;display:inline-flex;align-items:center;gap:5px;color:#ffdb59;font-weight:800;font-size:12px}",
  ".cop-footer .cop-footer__contact-extra:hover{text-decoration:underline}",
  ".cop-footer__bottom{border-top:1px solid rgba(203,221,247,.15);background:rgba(1,11,26,.28)}",
  ".cop-footer__bottom-inner{min-height:74px;padding-top:20px;padding-bottom:20px;display:flex;align-items:center;justify-content:space-between;gap:20px;font-size:12.5px;color:#8fa6bf}",
  ".cop-footer__bottom-inner p{margin:0;color:#8fa6bf;font-size:12.5px;line-height:1.6}",
  ".cop-footer__bottom-group{display:flex;gap:26px;align-items:center}",
  ".cop-footer .cop-footer__credit a{color:#e0bb40}",
  ".cop-footer .cop-footer__credit a:hover{color:#ffcf16}",
  ".cop-footer .cop-footer__top-link{color:#e4efff;font-size:12px;font-weight:800;white-space:nowrap}",
  ".cop-footer .cop-footer__top-link:hover{color:#ffcf16}",
  "@media(max-width:1250px){.cop-footer__grid{grid-template-columns:1.5fr 1fr 1fr 1fr}.cop-footer__contact{grid-column:2/5}.cop-footer__contact-list{grid-template-columns:repeat(3,minmax(0,1fr))}.cop-footer__cta-inner{align-items:flex-start}.cop-footer__actions{flex-direction:column;align-items:stretch}.cop-footer__bottom-inner{flex-wrap:wrap}}",
  "@media(max-width:950px){.cop-footer__grid{grid-template-columns:1.5fr 1fr 1fr;column-gap:30px}.cop-footer__brand{grid-column:1}.cop-footer__resources{grid-column:2}.cop-footer__contact{grid-column:1/-1}.cop-footer__contact-list{grid-template-columns:repeat(3,minmax(0,1fr))}.cop-footer__cta-inner{flex-direction:column}.cop-footer__actions{flex-direction:row}}",
  "@media(max-width:660px){.cop-footer__cta-inner{padding-top:30px;padding-bottom:32px;gap:23px}.cop-footer__cta h2{font-size:24px;line-height:1.24}.cop-footer__cta p{font-size:13px}.cop-footer__actions{width:100%;flex-wrap:wrap}.cop-footer .cop-footer__btn{flex:1;padding:0 10px}.cop-footer__grid{padding-top:35px;padding-bottom:36px;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:22px;row-gap:31px}.cop-footer__brand{grid-column:1/-1}.cop-footer__logo{width:240px}.cop-footer__description{max-width:none}.cop-footer__tagline{font-size:14px}.cop-footer__resources{grid-column:auto}.cop-footer__nav h3,.cop-footer__contact h3{margin-top:0}.cop-footer__nav li{margin-bottom:12px}.cop-footer .cop-footer__nav a{font-size:12.6px}.cop-footer__contact{grid-column:1/-1;border-top:1px solid rgba(203,221,247,.15);padding-top:25px}.cop-footer__contact-list{grid-template-columns:1fr;gap:14px}.cop-footer__bottom-inner{align-items:flex-start;flex-direction:column;gap:11px;font-size:11.5px}.cop-footer__bottom-inner p{font-size:11.5px}.cop-footer__bottom-group{gap:18px}.cop-footer__socials{margin-top:17px}}"
].join("\n");

const navigation = [
  { title: "About Us", label: "About us", links: [
    ["Our Story", "/about"],
    ["National Executive Council", "/about/national-executive-council"],
    ["Area & District Heads", "/about/heads"],
    ["Ministers & Wives", "/about/ministers-and-wives"],
    ["Bible College", "/bible-college"]
  ] },
  { title: "Ministries", label: "Ministries", links: [
    ["Youth & PENSA", "/ministries/youth-pensa"],
    ["Women", "/ministries/women"],
    ["Children", "/ministries/children"],
    ["Sports", "/ministries/sports"],
    ["Compassion", "/ministries/compassion"],
    ["All Ministries ↗", "/ministries"]
  ] },
  { title: "Resources", label: "Resources", links: [
    ["Sermons & Teachings", "/sermons"],
    ["News & Stories", "/news"],
    ["Books", "/books"],
    ["Events", "/events"],
    ["Media Gallery", "/media"],
    ["Community Projects", "/projects"],
    ["Outreach & Evangelism", "/outreach"]
  ] }
] as const;

export default function SiteFooter() {
  return (
    <footer className="cop-footer" aria-label="The Church of Pentecost Pakistan footer">
      <style dangerouslySetInnerHTML={{ __html: footerStyles }} />
      <div className="cop-footer__cta">
        <div className="cop-footer__wrap cop-footer__cta-inner">
          <div className="cop-footer__cta-copy">
            <span className="cop-footer__eyebrow">Faith in action · Love in service</span>
            <h2>Together, we can bring hope to more communities.</h2>
            <p>Partner with us in sharing the Gospel and caring for families across Pakistan.</p>
          </div>
          <div className="cop-footer__actions">
            <a className="cop-footer__btn cop-footer__btn--gold" href="/donate"><span aria-hidden="true">♥</span> Donate Now <span aria-hidden="true">↗</span></a>
            <a className="cop-footer__btn cop-footer__btn--outline" href="/contact">Get in Touch <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>

      <div className="cop-footer__wrap cop-footer__grid">
        <div className="cop-footer__brand">
          <a href="/" aria-label="The Church of Pentecost Pakistan — Home">
            <img className="cop-footer__logo" src="/assets/images/resources/coppak-horizontal-logo-white.png" alt="The Church of Pentecost Lahore Pakistan" />
          </a>
          <p className="cop-footer__tagline">A church without walls — with mission.</p>
          <p className="cop-footer__description">A Spirit-led church proclaiming the Gospel, making disciples and bringing Christ&apos;s love to communities across Pakistan.</p>
          <div className="cop-footer__stats"><span>71 Assemblies</span><i>•</i><span>8 Districts</span><i>•</i><span>Since 2000</span></div>
          <div className="cop-footer__socials" aria-label="Social media">
            <a className="cop-footer__social" href="https://www.facebook.com/revdrjamilnasir" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f" aria-hidden="true" /></a>
            <a className="cop-footer__social" href="https://www.youtube.com/@ThePentecostpakistan" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fab fa-youtube" aria-hidden="true" /></a>
            <a className="cop-footer__social" href="https://www.instagram.com/rev.dr.jamil_nasir/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram" aria-hidden="true" /></a>
            <a className="cop-footer__social" href="https://www.tiktok.com/@drjamilnasirofficial" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i className="fab fa-tiktok" aria-hidden="true" /></a>
          </div>
        </div>

        {navigation.map((group) => (
          <nav className={"cop-footer__nav" + (group.title === "Resources" ? " cop-footer__resources" : "")} aria-label={group.label} key={group.title}>
            <h3>{group.title}</h3>
            <ul>{group.links.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
          </nav>
        ))}

        <div className="cop-footer__contact">
          <h3>Contact Us</h3>
          <div className="cop-footer__contact-list">
            <div className="cop-footer__contact-item">
              <span className="cop-footer__contact-icon"><i className="fas fa-map-marker-alt" aria-hidden="true" /></span>
              <div className="cop-footer__contact-info"><small>Head Office · Pakistan</small><p>31-A Officer Colony, Bahar Colony,<br />Kot Lakhpat, Lahore, Pakistan</p></div>
            </div>
            <div className="cop-footer__contact-item">
              <span className="cop-footer__contact-icon"><i className="fas fa-envelope" aria-hidden="true" /></span>
              <div className="cop-footer__contact-info"><small>Email Us</small><a href="mailto:info@coppak.org">info@coppak.org</a></div>
            </div>
            <div className="cop-footer__contact-item">
              <span className="cop-footer__contact-icon"><i className="fab fa-whatsapp" aria-hidden="true" /></span>
              <div className="cop-footer__contact-info"><small>Pakistan · WhatsApp</small><a href="https://wa.me/923004179633" target="_blank" rel="noopener noreferrer">+92 300 417 9633</a></div>
            </div>
            <div className="cop-footer__contact-item">
              <span className="cop-footer__contact-icon"><i className="fas fa-phone-alt" aria-hidden="true" /></span>
              <div className="cop-footer__contact-info"><small>Canada · Phone</small><a href="tel:+14379859633">+1 (437) 985-9633</a></div>
            </div>
          </div>
          <a className="cop-footer__contact-extra" href="/contact">View contact page ↗</a>
        </div>
      </div>

      <div className="cop-footer__bottom">
        <div className="cop-footer__wrap cop-footer__bottom-inner">
          <p>© 2026 The Church of Pentecost Pakistan. All rights reserved.</p>
          <div className="cop-footer__bottom-group">
            <span className="cop-footer__credit">Website by <a href="https://geniusfixers.com" target="_blank" rel="noopener noreferrer">Genius Fixers</a></span>
            <a className="cop-footer__top-link" href="#" aria-label="Back to top of page">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
