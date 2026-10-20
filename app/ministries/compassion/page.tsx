import type { Metadata } from "next";
import LegacyScripts from "../../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Compassion ministry | COPPAK.ORG",
  description:
    "Daily meals, monthly grocery support, and steady pastoral care for the poor, the hungry, and the vulnerable across Pakistan — the Lord's Table and family support together.",
  alternates: { canonical: "/ministries/compassion" },
  openGraph: {
    title: "Compassion ministry | COPPAK.ORG",
    description:
      "Daily meals, monthly grocery support, and steady pastoral care for the poor, the hungry, and the vulnerable across Pakistan — the Lord's Table and family support together.",
    url: "/ministries/compassion",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};
const scripts = [
  "/assets/vendors/jquery/jquery-3.6.0.min.js",
  "/assets/vendors/bootstrap/js/bootstrap.bundle.min.js",
  "/assets/vendors/jarallax/jarallax.min.js",
  "/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js",
  "/assets/vendors/jquery-appear/jquery.appear.min.js",
  "/assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js",
  "/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js",
  "/assets/vendors/jquery-validate/jquery.validate.min.js",
  "/assets/vendors/nouislider/nouislider.min.js",
  "/assets/vendors/odometer/odometer.min.js",
  "/assets/vendors/swiper/swiper.min.js",
  "/assets/vendors/tiny-slider/tiny-slider.min.js",
  "/assets/vendors/wnumb/wNumb.min.js",
  "/assets/vendors/wow/wow.js",
  "/assets/vendors/isotope/isotope.js",
  "/assets/vendors/countdown/countdown.min.js",
  "/assets/vendors/owl-carousel/owl.carousel.min.js",
  "/assets/vendors/bxslider/jquery.bxslider.min.js",
  "/assets/vendors/bootstrap-select/js/bootstrap-select.min.js",
  "/assets/vendors/vegas/vegas.min.js",
  "/assets/vendors/jquery-ui/jquery-ui.js",
  "/assets/vendors/timepicker/timePicker.js",
  "/assets/vendors/circleType/jquery.circleType.js",
  "/assets/vendors/circleType/jquery.lettering.min.js",
  "/assets/js/oxpins.js",
  "/scripts/migrated/ministries-compassion-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="detail-hero"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(13,22,52,0.95) 0%, rgba(20,42,95,0.88) 46%, rgba(10,20,48,0.78) 100%), url(/assets/images/coppak/ministries/compassion/help-out-01.jpg)",
          }}
        >
          {" "}
          <div className="detail-hero__glow" aria-hidden="true" />{" "}
          <div className="container">
            {" "}
            <div className="detail-hero__inner">
              {" "}
              <div className="detail-hero__text">
                {" "}
                <ul className="detail-hero__crumbs list-unstyled">
                  {" "}
                  <li className="">
                    {" "}
                    <a href="/">Home</a>{" "}
                  </li>{" "}
                  <li className="detail-hero__crumb-sep" aria-hidden="true">
                    /
                  </li>{" "}
                  <li className="">
                    {" "}
                    <a href="/ministries">Ministries</a>{" "}
                  </li>{" "}
                  <li className="detail-hero__crumb-sep" aria-hidden="true">
                    /
                  </li>{" "}
                  <li className="is-current">
                    {" "}
                    <span>Compassion ministry</span>{" "}
                  </li>
                </ul>{" "}
                <span className="detail-hero__eyebrow">Ministry</span>{" "}
                <h1 className="detail-hero__title">Compassion ministry</h1>{" "}
              </div>{" "}
              <div className="detail-hero__collage count-3">
                {" "}
                <a
                  className="detail-hero__photo img-popup"
                  data-group={1}
                  href="/assets/images/coppak/ministries/compassion/help-out-01.jpg"
                  aria-label="View photo — Compassion ministry"
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/ministries/compassion/help-out-01.jpg"
                    alt="Compassion ministry"
                    loading="eager"
                  />{" "}
                </a>
                <a
                  className="detail-hero__photo img-popup"
                  data-group={1}
                  href="/assets/images/coppak/ministries/compassion/help-out-02.jpg"
                  aria-label="View photo — Compassion ministry"
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/ministries/compassion/help-out-02.jpg"
                    alt="Compassion ministry"
                    loading="eager"
                  />{" "}
                </a>
                <a
                  className="detail-hero__photo img-popup"
                  data-group={1}
                  href="/assets/images/coppak/ministries/compassion/help-out-03.jpg"
                  aria-label="View photo — Compassion ministry"
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/ministries/compassion/help-out-03.jpg"
                    alt="Compassion ministry"
                    loading="eager"
                  />{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section className="detail-section">
          {" "}
          <div className="container">
            {" "}
            <div className="detail-grid">
              {" "}
              <aside className="detail-sidebar">
                {" "}
                <div className="detail-sidebar__card">
                  {" "}
                  <h3 className="detail-sidebar__heading">
                    Our Ministries
                  </h3>{" "}
                  <nav className="detail-sidebar__list">
                    {" "}
                    <a
                      href="/ministries/compassion"
                      className="detail-sidebar__item is-active"
                    >
                      {" "}
                      <i
                        className="fas fa-hand-holding-heart"
                        aria-hidden="true"
                      />{" "}
                      <span>Compassion ministry</span>{" "}
                    </a>
                    <a
                      href="/ministries/children"
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i className="fas fa-child" aria-hidden="true" />{" "}
                      <span>Children's ministry</span>{" "}
                    </a>
                    <a
                      href="/ministries/sports"
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i className="fas fa-futbol" aria-hidden="true" />{" "}
                      <span>Sports ministry</span>{" "}
                    </a>
                    <a
                      href="/ministries/support-needy-families"
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i className="fas fa-box-open" aria-hidden="true" />{" "}
                      <span>Support needy families</span>{" "}
                    </a>
                    <a
                      href="/ministries/women"
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i className="fas fa-female" aria-hidden="true" />{" "}
                      <span>Women's ministry</span>{" "}
                    </a>
                    <a
                      href="/ministries/youth-pensa"
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i
                        className="fas fa-graduation-cap"
                        aria-hidden="true"
                      />{" "}
                      <span>Youth &amp; PENSA Pakistan</span>{" "}
                    </a>{" "}
                  </nav>{" "}
                </div>{" "}
                <div className="detail-sidebar__cta">
                  {" "}
                  <h4>Stand with us</h4>{" "}
                  <p>Your support carries this work across Pakistan.</p>{" "}
                  <a href="/donate" className="thm-btn thm-btn--blue">
                    Donate{" "}
                    <span className="arr" aria-hidden="true">
                      →
                    </span>{" "}
                  </a>{" "}
                </div>{" "}
              </aside>{" "}
              <div className="detail-content">
                {" "}
                <div className="detail-intro">
                  {" "}
                  <p className="detail-lead">
                    Daily meals, monthly grocery support, and steady pastoral
                    care for the poor, the hungry, and the vulnerable across
                    Pakistan — the Lord's Table and family support together.
                  </p>{" "}
                  <div className="detail-body">
                    {" "}
                    <p>
                      The Compassion ministry is The Church of Pentecost
                      Pakistan’s response to the needs of the poor, the hungry,
                      and the vulnerable in our communities. It is where faith
                      meets action, and love is served one plate at a time.
                    </p>
                    <h3 id="the-lords-table--lunger-ministry">
                      The Lord’s Table — Lunger ministry
                    </h3>
                    <p>
                      For many years, our church opened its doors every day to
                      share meals and care for those in need. The homeless,
                      orphans, widows, and families struggling to survive were
                      welcomed without question. Each day,{" "}
                      <strong>more than 100 people received a warm meal</strong>{" "}
                      — but they also received something greater: kindness,
                      prayer, and the assurance that they matter to God.
                    </p>
                    <p>
                      The Lord’s Table was never just about food. It was about
                      fellowship — sitting together, listening, praying, and
                      reflecting the heart of Jesus, who fed the hungry and
                      welcomed the broken. In those shared meals, many hearts
                      were comforted and many lives were touched by the love of
                      Christ.
                    </p>
                    <p>
                      During the church construction, and because of limited
                      space, this ministry had to pause. It was a painful pause,
                      felt deeply by those who served and those who depended on
                      it. Now, by God’s grace, the church building project is
                      complete. A new door is opening. Very soon,{" "}
                      <strong>The Lord’s Table will begin again</strong> — and
                      we trust that the same Lord who multiplied loaves and
                      fishes will once again provide.
                    </p>
                    <h3 id="family-support-and-welfare">
                      Family support and welfare
                    </h3>
                    <p>
                      Even in the season when the Lord’s Table had to pause, the
                      church did not stop caring for the needy. We have
                      continued providing{" "}
                      <strong>monthly grocery donations</strong> to poor and
                      struggling families across our assemblies, alongside
                      prayer, pastoral support, and ongoing presence. Families
                      affected by faith-based persecution also receive emergency
                      relief — food and water, temporary shelter, household
                      supplies, clothing, health-care assistance, and school
                      supplies for children.
                    </p>
                    <p>
                      This is not charity dropped at a doorstep — it is walking
                      with families until they can walk independently again. As
                      The Church of Pentecost Pakistan continues to grow,
                      Compassion ministry remains central to how we live out the
                      love of Christ — not only in word, but in every shared
                      plate, every visit, and every act of practical love.
                    </p>
                    <p>
                      To{" "}
                      <strong>
                        refer a family in need or to partner with this work
                      </strong>
                      , please <a href="/contact">reach out</a>.
                    </p>
                  </div>{" "}
                </div>{" "}
                <div className="detail-gallery-block">
                  {" "}
                  <span className="detail-eyebrow">In pictures</span>{" "}
                  <h3 className="detail-gallery__title">Gallery</h3>{" "}
                  <div className="detail-gallery">
                    {" "}
                    <a
                      href="/assets/images/coppak/ministries/compassion/help-out-01.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Compassion ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/compassion/help-out-01.jpg"
                        alt="Compassion ministry"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/compassion/help-out-02.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Compassion ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/compassion/help-out-02.jpg"
                        alt="Compassion ministry"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/compassion/help-out-03.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Compassion ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/compassion/help-out-03.jpg"
                        alt="Compassion ministry"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/compassion/help-out-04.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Compassion ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/compassion/help-out-04.jpg"
                        alt="Compassion ministry"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/compassion/help-out-05.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Compassion ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/compassion/help-out-05.jpg"
                        alt="Compassion ministry"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/compassion/help-out-06.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Compassion ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/compassion/help-out-06.jpg"
                        alt="Compassion ministry"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/compassion/distribution-01.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Compassion ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/compassion/distribution-01.jpg"
                        alt="Compassion ministry"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/compassion/distribution-15.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Compassion ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/compassion/distribution-15.jpg"
                        alt="Compassion ministry"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/compassion/distribution-30.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Compassion ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/compassion/distribution-30.jpg"
                        alt="Compassion ministry"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/compassion/distribution-45.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Compassion ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/compassion/distribution-45.jpg"
                        alt="Compassion ministry"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/compassion/distribution-60.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Compassion ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/compassion/distribution-60.jpg"
                        alt="Compassion ministry"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/compassion/distribution-80.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Compassion ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/compassion/distribution-80.jpg"
                        alt="Compassion ministry"
                        loading="lazy"
                      />{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="detail-highlight">
                  {" "}
                  <figure className="detail-verse">
                    {" "}
                    <blockquote>
                      Whatever you did for one of the least of these brothers
                      and sisters of mine, you did for me.
                    </blockquote>{" "}
                    <figcaption>Matthew 25:40</figcaption>{" "}
                  </figure>{" "}
                  <div className="detail-stats">
                    {" "}
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">100+</span>{" "}
                      <span className="detail-stats__label">
                        Meals served daily (historic)
                      </span>{" "}
                    </div>
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">Monthly</span>{" "}
                      <span className="detail-stats__label">
                        Grocery support
                      </span>{" "}
                    </div>
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">
                        Relaunching
                      </span>{" "}
                      <span className="detail-stats__label">
                        In our new building
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="detail-efforts">
                  {" "}
                  <span className="detail-eyebrow">Our efforts</span>{" "}
                  <h3 className="detail-efforts__title">What we do</h3>{" "}
                  <ul className="detail-efforts__list">
                    {" "}
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        The Lord's Table — daily meals for the homeless,
                        orphans, widows, and struggling families
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Fellowship — sitting, listening, and praying with every
                        guest
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Monthly grocery donations to poor and struggling
                        families across our assemblies
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Pastoral visits, prayer, and steady accompaniment for
                        the vulnerable
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Emergency relief for families walking through crisis
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Preparing to relaunch the Lord's Table in the completed
                        church building
                      </span>{" "}
                    </li>{" "}
                  </ul>{" "}
                </div>{" "}
                <div className="detail-locations">
                  {" "}
                  <span className="detail-eyebrow">Where we work</span>{" "}
                  <div className="detail-locations__tags">
                    {" "}
                    <span className="detail-locations__tag">
                      {" "}
                      <i
                        className="fas fa-map-marker-alt"
                        aria-hidden="true"
                      />{" "}
                      Lahore{" "}
                    </span>
                    <span className="detail-locations__tag">
                      {" "}
                      <i
                        className="fas fa-map-marker-alt"
                        aria-hidden="true"
                      />{" "}
                      Across COPPAK assemblies{" "}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="detail-cta">
                  {" "}
                  <h3 className="detail-cta__title">Get involved</h3>{" "}
                  <p className="detail-cta__text">
                    There is a place for you in this work — give, serve, or pray
                    alongside us.
                  </p>{" "}
                  <div className="detail-cta__actions">
                    {" "}
                    <a href="/donate" className="detail-cta__action">
                      {" "}
                      <i
                        className="fas fa-hand-holding-heart"
                        aria-hidden="true"
                      />{" "}
                      <span>Give</span>{" "}
                    </a>{" "}
                    <a href="/contact" className="detail-cta__action">
                      {" "}
                      <i
                        className="fas fa-hands-helping"
                        aria-hidden="true"
                      />{" "}
                      <span>Volunteer</span>{" "}
                    </a>{" "}
                    <a href="/contact" className="detail-cta__action">
                      {" "}
                      <i className="fas fa-dove" aria-hidden="true" />{" "}
                      <span>Pray</span>{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
      </div>
      <LegacyScripts sources={scripts} />
    </>
  );
}
