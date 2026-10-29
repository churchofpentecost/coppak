/**
 * Homepage navigation and leadership directory, replacing outdated leadership
 * portrait links with pathways to the three current, maintained pages.
 */
const homeRefreshStyles = `
.cop-home-explore,.cop-home-leadership,.cop-home-explore *, .cop-home-leadership *{box-sizing:border-box}
.cop-home-explore{padding:21px 0 34px;background:#f7f9fd;border-bottom:1px solid #e5ebf3}
.cop-home-explore__eyebrow{margin:0 0 13px;font-size:11px;font-weight:850;letter-spacing:.17em;text-transform:uppercase;color:#426189}
.cop-home-explore__grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}
.cop-home-explore__card{display:flex;align-items:center;gap:14px;min-height:100px;padding:16px 18px;border:1px solid #e2eaf2;border-radius:15px;background:#fff;box-shadow:0 7px 23px rgba(20,55,100,.035);text-decoration:none;transition:transform .2s,border-color .2s,box-shadow .2s}
.cop-home-explore__card:hover{transform:translateY(-3px);border-color:#bed0e8;box-shadow:0 14px 27px rgba(20,55,100,.08);text-decoration:none}
.cop-home-explore__card:focus-visible,.cop-home-leadership__card:focus-visible{outline:3px solid #e7b724;outline-offset:4px}
.cop-home-explore__icon{flex:0 0 44px;width:44px;height:44px;display:grid;place-items:center;border-radius:12px;background:#edf4fe;color:#174a86;font-size:19px}
.cop-home-explore__text{display:grid;gap:3px;min-width:0}
.cop-home-explore__label{font-size:14px;font-weight:850;color:#142a49;line-height:1.3}
.cop-home-explore__detail{font-size:11.5px;color:#687e9b;line-height:1.4}
.cop-home-explore__arrow{margin-left:auto;color:#a78622;font-size:17px}
.cop-home-leadership{position:relative;overflow:hidden;padding:92px 0 96px;background:linear-gradient(134deg,#f7faff 0%,#edf3fb 100%)}
.cop-home-leadership:before{position:absolute;right:-150px;top:-150px;content:'';width:490px;height:490px;border:1px solid #dce7f4;border-radius:50%;box-shadow:0 0 0 100px rgba(210,227,246,.18);pointer-events:none}
.cop-home-leadership__heading{display:flex;align-items:end;justify-content:space-between;gap:36px;position:relative}
.cop-home-leadership__eyebrow{display:block;color:#98700c;font-size:12px;font-weight:850;letter-spacing:.19em;text-transform:uppercase;margin-bottom:13px}
.cop-home-leadership__heading h2{color:#132d50;font-weight:850;font-size:clamp(30px,3.3vw,47px);letter-spacing:-.035em;line-height:1.16;max-width:700px;margin:0}
.cop-home-leadership__heading p{color:#59708d;max-width:340px;font-size:15px;line-height:1.85;margin:0 0 3px}
.cop-home-leadership__grid{position:relative;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px;margin-top:38px}
.cop-home-leadership__card{display:flex;flex-direction:column;min-height:285px;padding:30px;border:1px solid #dce6f2;border-radius:20px;background:#fff;box-shadow:0 15px 37px rgba(18,59,113,.055);text-decoration:none;transition:transform .2s,box-shadow .2s,border-color .2s}
.cop-home-leadership__card:hover{transform:translateY(-5px);box-shadow:0 20px 40px rgba(18,59,113,.11);border-color:#a8c2e1;text-decoration:none}
.cop-home-leadership__icon{display:grid;place-items:center;width:58px;height:58px;margin-bottom:22px;border-radius:16px;background:#e8f1ff;color:#174a87;font-size:24px}
.cop-home-leadership__card:nth-child(2) .cop-home-leadership__icon{background:#fff4d8;color:#997001}
.cop-home-leadership__card:nth-child(3) .cop-home-leadership__icon{background:#e8f6ef;color:#197a54}
.cop-home-leadership__card h3{color:#173052;font-size:20px;line-height:1.35;font-weight:850;margin:0 0 10px}
.cop-home-leadership__card p{color:#667d98;font-size:13.7px;line-height:1.8;margin:0 0 24px}
.cop-home-leadership__more{color:#194f8d;font-size:13px;font-weight:850;margin-top:auto}
.cop-home-leadership__more i{padding-left:7px;font-style:normal}
.cop-home-leadership__foot{position:relative;display:flex;align-items:center;justify-content:space-between;gap:22px;margin-top:28px;border-radius:15px;background:#102d52;color:#dce8f7;padding:21px 26px}
.cop-home-leadership__foot p{margin:0;line-height:1.6;font-size:14px;color:#dce8f7}
.cop-home-leadership__foot strong{color:#fff}
.cop-home-leadership__foot a{font-weight:850;color:#ffdc5b;font-size:13px;text-decoration:none;white-space:nowrap}
.cop-home-leadership__foot a:hover{text-decoration:underline}
@media(max-width:1050px){.cop-home-explore__grid{grid-template-columns:repeat(2,minmax(0,1fr))}.cop-home-leadership__heading{align-items:start;flex-direction:column;gap:17px}.cop-home-leadership__heading p{max-width:700px}.cop-home-leadership__card{padding:25px}}
@media(max-width:750px){.cop-home-leadership{padding:65px 0}.cop-home-leadership__grid{grid-template-columns:1fr;gap:13px;margin-top:28px}.cop-home-leadership__card{min-height:auto;padding:25px}.cop-home-leadership__icon{margin-bottom:17px}.cop-home-leadership__card p{margin-bottom:20px}.cop-home-leadership__foot{flex-direction:column;align-items:start}}
@media(max-width:520px){.cop-home-explore{padding:18px 0 25px}.cop-home-explore__grid{gap:9px}.cop-home-explore__card{min-height:113px;display:flex;flex-direction:column;align-items:start;gap:9px;padding:13px}.cop-home-explore__icon{width:35px;height:35px;flex-basis:35px;font-size:16px}.cop-home-explore__arrow{display:none}.cop-home-explore__label{font-size:12.5px}.cop-home-explore__detail{font-size:11px}.cop-home-leadership__heading h2{font-size:32px}}

/* Authentic building — one-photo Explore Our Church section, desktop and mobile */
.cop-home-explore{background:linear-gradient(136deg,#f7faff 6%,#edf3fa 100%);padding:68px 0 72px;border-bottom:1px solid #e4ebf5;position:relative}
.cop-home-explore__header{display:flex;justify-content:space-between;align-items:end;gap:28px;margin-bottom:26px}
.cop-home-explore__eyebrow{display:block;font-size:11px;letter-spacing:.18em;font-weight:850;color:#ad7e26;text-transform:uppercase;margin:0 0 11px}
.cop-home-explore__title{font:700 clamp(35px,3.7vw,53px)/1.18 Georgia,serif;letter-spacing:-.035em;color:#102b4d;margin:0}
.cop-home-explore__title em{color:#b38b3b;font-style:normal}
.cop-home-explore__header>p{font-size:14px;line-height:1.75;color:#5c7490;max-width:360px;margin:0 0 4px}
.cop-home-explore__feature{display:grid;grid-template-columns:1.09fr .91fr;min-height:375px;border-radius:21px;overflow:hidden;background:#102b4d;box-shadow:0 20px 55px rgba(15,47,87,.16)}
.cop-home-explore__feature-copy{padding:clamp(32px,4vw,58px);display:flex;flex-direction:column;justify-content:center;align-items:flex-start;position:relative;background:linear-gradient(115deg,#071c3a,#153c6d);color:#fff}
.cop-home-explore__feature-copy:before{content:'';position:absolute;right:-130px;top:-120px;width:320px;height:320px;border:1px solid rgba(233,203,131,.15);border-radius:50%;pointer-events:none}
.cop-home-explore__feature-eyebrow{position:relative;display:flex;align-items:center;gap:9px;font-size:11px;font-weight:850;color:#e4c273;text-transform:uppercase;letter-spacing:.18em;margin-bottom:16px}
.cop-home-explore__feature-eyebrow span{font-size:19px}
.cop-home-explore__feature-copy h3{position:relative;font:700 clamp(28px,2.6vw,41px)/1.2 Georgia,serif;color:#fff;margin:0 0 16px;letter-spacing:-.02em}
.cop-home-explore__feature-copy p{position:relative;max-width:470px;color:#c7d8eb;font-size:14px;line-height:1.9;margin:0 0 24px}
.cop-home-explore__feature-link{position:relative;display:inline-flex;gap:19px;align-items:center;min-height:47px;border-radius:9px;background:#dfb657;color:#0b2749!important;padding:12px 21px;font-size:13px;font-weight:850;text-decoration:none;transition:transform .2s,background .2s}
.cop-home-explore__feature-link:hover{transform:translateY(-2px);background:#f5cb6e;text-decoration:none}
.cop-home-explore__feature-image{position:relative;min-width:0;overflow:hidden;background:#203b59}
.cop-home-explore__feature-image img{display:block;width:100%;height:100%;position:absolute;inset:0;object-fit:cover;object-position:center 24%;filter:saturate(.96) contrast(1.035)}
.cop-home-explore__feature-image:after{content:'';position:absolute;inset:0;background:linear-gradient(0deg,rgba(5,22,47,.45),transparent 36%);pointer-events:none}
.cop-home-explore__image-caption{position:absolute;z-index:1;bottom:17px;right:17px;padding:9px 12px;border-radius:7px;background:rgba(4,21,44,.79);border:1px solid rgba(255,255,255,.23);color:#fff;text-transform:uppercase;font-weight:800;font-size:10px;letter-spacing:.09em}
.cop-home-explore__cards-heading{margin:29px 0 16px;display:flex;align-items:center;gap:16px;color:#607995;text-transform:uppercase;letter-spacing:.16em;font-size:11px;font-weight:850}
.cop-home-explore__cards-heading:after{content:'';height:1px;flex:1;background:#d9e4f1}
.cop-home-explore__grid{gap:14px}
.cop-home-explore__card{min-height:110px;background:#fff;box-shadow:0 8px 27px rgba(18,52,94,.05);border-color:#dce5f1;padding:17px 16px}
.cop-home-explore__card:hover{border-color:#c5a264;box-shadow:0 17px 34px rgba(18,52,94,.12)}
.cop-home-explore__icon{width:50px;height:50px;flex:0 0 50px;border:1px solid #e1eaf7;font-size:20px}
.cop-home-explore__label{font-size:14px}
.cop-home-explore__detail{font-size:11.5px}
.cop-home-explore__arrow{flex:0 0 28px;width:28px;height:28px;border:1px solid #e4c98a;border-radius:50%;display:grid;place-items:center;font-size:17px;margin-left:auto}
@media(max-width:1000px){.cop-home-explore{padding:52px 0}.cop-home-explore__feature{min-height:335px}.cop-home-explore__feature-copy{padding:30px}.cop-home-explore__header{align-items:flex-start;flex-direction:column;gap:10px}.cop-home-explore__header>p{max-width:700px}.cop-home-explore__grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:660px){.cop-home-explore{padding:37px 0 43px}.cop-home-explore__header{margin-bottom:20px}.cop-home-explore__title{font-size:35px}.cop-home-explore__feature{display:flex;flex-direction:column}.cop-home-explore__feature-copy{padding:31px 27px;min-height:290px}.cop-home-explore__feature-copy h3{font-size:29px}.cop-home-explore__feature-copy p{font-size:13px;margin-bottom:21px}.cop-home-explore__feature-image{height:310px;flex:0 0 310px}.cop-home-explore__feature-image img{object-position:center 18%}.cop-home-explore__grid{gap:10px}.cop-home-explore__card{min-height:117px}.cop-home-explore__icon{width:42px;height:42px;flex:0 0 42px}.cop-home-explore__label{font-size:13px}.cop-home-explore__arrow{display:none}.cop-home-explore__image-caption{font-size:9px;right:9px;bottom:10px}}
`;

const quickRoutes = [
  { title: "Our Story", detail: "Faith, history & vision", href: "/about", icon: "fa fa-church" },
  { title: "Ministries", detail: "Where we serve", href: "/ministries", icon: "fa fa-hands-helping" },
  { title: "Our Projects", detail: "Compassion in action", href: "/projects", icon: "fa fa-heart" },
  { title: "Church Leadership", detail: "Meet our teams", href: "/about/heads", icon: "fa fa-users" },
] as const;

const leadershipRoutes = [
  {
    title: "National Executive Council",
    description: "Meet those responsible for national direction, stewardship, and the church's mission in Pakistan.",
    href: "/about/national-executive-council",
    action: "Meet the council",
    icon: "fas fa-sitemap",
  },
  {
    title: "National, Area & District Heads",
    description: "Discover the leaders shepherding our assemblies and supporting congregations throughout the country.",
    href: "/about/heads",
    action: "Meet the heads",
    icon: "fas fa-church",
  },
  {
    title: "Ministers & Wives",
    description: "Get to know the pastoral families faithfully serving local churches and communities across Pakistan.",
    href: "/about/ministers-and-wives",
    action: "Meet the ministers",
    icon: "fas fa-people-carry",
  },
] as const;

export function HomeExplore() {
  return (
    <section className="cop-home-explore" aria-labelledby="cop-home-explore-heading">
      <style dangerouslySetInnerHTML={{ __html: homeRefreshStyles }} />
      <div className="container">
        <div className="cop-home-explore__header">
          <div>
            <span className="cop-home-explore__eyebrow">The Church of Pentecost · Pakistan</span>
            <h2 id="cop-home-explore-heading" className="cop-home-explore__title">Explore <em>Our Church</em></h2>
          </div>
          <p>Discover our story, the people we serve, and the mission that brings our community together.</p>
        </div>

        <div className="cop-home-explore__feature">
          <div className="cop-home-explore__feature-copy">
            <span className="cop-home-explore__feature-eyebrow"><span aria-hidden="true">✝</span> Faith has a home here</span>
            <h3>A House of Worship.<br />A Mission of Hope.</h3>
            <p>From humble beginnings in Lahore to a growing community across Pakistan, our story is built on faith, prayer, and the transforming love of Jesus Christ.</p>
            <a className="cop-home-explore__feature-link" href="/about">Discover Our Story <span aria-hidden="true">↗</span></a>
          </div>
          <div className="cop-home-explore__feature-image">
            <img src="/assets/images/coppak/building/cop-pakistan-church-2026-clear.webp" alt="Actual Church of Pentecost Pakistan church building in Lahore, with gold-trimmed arched windows and crosses" loading="lazy" />
            <span className="cop-home-explore__image-caption">Our Church Building · Lahore, Pakistan</span>
          </div>
        </div>

        <div className="cop-home-explore__cards-heading"><span>Find your way</span></div>
        <nav className="cop-home-explore__grid" aria-label="Explore The Church of Pentecost Pakistan">
          {quickRoutes.map((item) => (
            <a key={item.href} href={item.href} className="cop-home-explore__card">
              <span className="cop-home-explore__icon" aria-hidden="true"><i className={item.icon} /></span>
              <span className="cop-home-explore__text"><span className="cop-home-explore__label">{item.title}</span><span className="cop-home-explore__detail">{item.detail}</span></span>
              <span className="cop-home-explore__arrow" aria-hidden="true">→</span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}

export function HomeLeadership() {
  return (
    <section className="cop-home-leadership" aria-labelledby="home-leadership-heading">
      <div className="container">
        <div className="cop-home-leadership__heading">
          <div>
            <span className="cop-home-leadership__eyebrow">People of faith · Leaders in service</span>
            <h2 id="home-leadership-heading">United in leadership. Rooted in service.</h2>
          </div>
          <p>Learn about the teams guiding and caring for The Church of Pentecost Pakistan, from national leadership to local ministry.</p>
        </div>
        <div className="cop-home-leadership__grid">
          {leadershipRoutes.map((item) => (
            <a href={item.href} key={item.href} className="cop-home-leadership__card">
              <span className="cop-home-leadership__icon" aria-hidden="true"><i className={item.icon} /></span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="cop-home-leadership__more">{item.action}<i aria-hidden="true">→</i></span>
            </a>
          ))}
        </div>
        <div className="cop-home-leadership__foot">
          <p><strong>One church, one mission.</strong> Serving local congregations across eight districts of Pakistan.</p>
          <a href="/about">Discover our history <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
