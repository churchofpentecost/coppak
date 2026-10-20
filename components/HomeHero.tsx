export default function HomeHero() {
  return (
    <>
      <link rel="stylesheet" href="/styles/pages/home-hero.css" />
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="home-hero__scene">
          <img
            className="home-hero__image"
            src="/assets/images/coppak/outreach/mass-evangelism/01.jpg"
            alt="An open-air Gospel gathering with The Church of Pentecost Pakistan"
            width={1600}
            height={1067}
            fetchPriority="high"
          />
          <div className="home-hero__shade" aria-hidden="true" />
          <div className="home-hero__shell home-hero__content">
            <p className="home-hero__eyebrow">
              <span aria-hidden="true" />
              THE CHURCH OF PENTECOST PAKISTAN
            </p>
            <h1 id="home-hero-title">
              Rooted in faith.
              <br />
              Reaching with <em>love.</em>
            </h1>
            <p className="home-hero__intro">
              A Spirit-led church sharing the Gospel, nurturing disciples and
              bringing hope to communities across Pakistan.
            </p>
            <div className="home-hero__actions">
              <a className="home-hero__button" href="/church-services">
                Worship with us <span aria-hidden="true">↗</span>
              </a>
              <a className="home-hero__story" href="/about">
                Discover our story <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="home-hero__community">
              <span>71 assemblies</span>
              <span>8 districts</span>
              <span>One mission</span>
            </div>
          </div>
          <div className="home-hero__photo-note">
            <span className="home-hero__photo-line" aria-hidden="true" />
            <span>
              THE GOSPEL BEYOND OUR WALLS
              <br />
              <strong>Pakistan. A people full of hope.</strong>
            </span>
          </div>
        </div>
        <div className="home-hero__pathways">
          <div className="home-hero__shell home-hero__pathways-grid">
            <a href="/ministries">
              <span className="home-hero__pathway-number">01</span>
              <div>
                <span className="home-hero__pathway-label">GROW TOGETHER</span>
                <h2>Find your place.</h2>
                <p>A church family for every generation.</p>
              </div>
              <span className="home-hero__pathway-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a href="/outreach">
              <span className="home-hero__pathway-number">02</span>
              <div>
                <span className="home-hero__pathway-label">
                  FAITH IN ACTION
                </span>
                <h2>See our mission.</h2>
                <p>Sharing the Gospel. Serving people.</p>
              </div>
              <span className="home-hero__pathway-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a href="/donate">
              <span className="home-hero__pathway-number">03</span>
              <div>
                <span className="home-hero__pathway-label">
                  MAKE A DIFFERENCE
                </span>
                <h2>Give with purpose.</h2>
                <p>Stand alongside families and communities.</p>
              </div>
              <span className="home-hero__pathway-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
