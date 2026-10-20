import type { Metadata } from "next";
import LegacyScripts from "../../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Public rallies & prayer marches | COPPAK.ORG",
  description:
    "Christmas, Easter, and peace rallies across Pakistan — worship, intercession, and gospel preaching in the streets.",
  alternates: { canonical: "/outreach/public-rallies" },
  openGraph: {
    title: "Public rallies & prayer marches | COPPAK.ORG",
    description:
      "Christmas, Easter, and peace rallies across Pakistan — worship, intercession, and gospel preaching in the streets.",
    url: "/outreach/public-rallies",
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
  "/scripts/migrated/outreach-public-rallies-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="detail-hero"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(13,22,52,0.95) 0%, rgba(20,42,95,0.88) 46%, rgba(10,20,48,0.78) 100%), url(/assets/images/coppak/outreach/public-rallies/01.jpg)",
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
                    <a href="/outreach">Outreach</a>{" "}
                  </li>{" "}
                  <li className="detail-hero__crumb-sep" aria-hidden="true">
                    /
                  </li>{" "}
                  <li className="is-current">
                    {" "}
                    <span>Public rallies &amp; prayer marches</span>{" "}
                  </li>
                </ul>{" "}
                <span className="detail-hero__eyebrow">Outreach</span>{" "}
                <h1 className="detail-hero__title">
                  Public rallies &amp; prayer marches
                </h1>{" "}
              </div>{" "}
              <div className="detail-hero__collage count-3">
                {" "}
                <a
                  className="detail-hero__photo img-popup"
                  data-group={1}
                  href="/assets/images/coppak/outreach/public-rallies/01.jpg"
                  aria-label="View photo — Public rallies & prayer marches"
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/outreach/public-rallies/01.jpg"
                    alt="Public rallies & prayer marches"
                    loading="eager"
                  />{" "}
                </a>
                <a
                  className="detail-hero__photo img-popup"
                  data-group={1}
                  href="/assets/images/coppak/outreach/public-rallies/02.jpg"
                  aria-label="View photo — Public rallies & prayer marches"
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/outreach/public-rallies/02.jpg"
                    alt="Public rallies & prayer marches"
                    loading="eager"
                  />{" "}
                </a>
                <a
                  className="detail-hero__photo img-popup"
                  data-group={1}
                  href="/assets/images/coppak/outreach/public-rallies/03.jpg"
                  aria-label="View photo — Public rallies & prayer marches"
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/outreach/public-rallies/03.jpg"
                    alt="Public rallies & prayer marches"
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
                  <h3 className="detail-sidebar__heading">Our Outreach</h3>{" "}
                  <nav className="detail-sidebar__list">
                    {" "}
                    <a
                      href="/outreach/public-rallies"
                      className="detail-sidebar__item is-active"
                    >
                      {" "}
                      <i className="fas fa-flag" aria-hidden="true" />{" "}
                      <span>Public rallies &amp; prayer marches</span>{" "}
                    </a>
                    <a
                      href="/outreach/home-cell"
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i className="fas fa-home" aria-hidden="true" />{" "}
                      <span>Home cell groups</span>{" "}
                    </a>
                    <a
                      href="/outreach/alpha-groups"
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i className="fas fa-comments" aria-hidden="true" />{" "}
                      <span>Alpha Pakistan</span>{" "}
                    </a>
                    <a
                      href="/outreach/mass-evangelism"
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i className="fas fa-bullhorn" aria-hidden="true" />{" "}
                      <span>Mass evangelism</span>{" "}
                    </a>
                    <a
                      href="/outreach/peace-train"
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i className="fas fa-train" aria-hidden="true" />{" "}
                      <span>Christmas Peace Pray Train</span>{" "}
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
                    Christmas, Easter, and peace rallies across Pakistan —
                    worship, intercession, and gospel preaching in the streets.
                  </p>{" "}
                  <div className="detail-body">
                    {" "}
                    <p>
                      In Pakistan, the church organizes public biblical rallies
                      during <strong>Christmas and Easter</strong>, along with
                      prayer and peace rallies in different cities across the
                      country. These gatherings are held openly and peacefully,
                      with the required No Objection Certificate (NOC) issued by
                      the local government. The authorities also provide
                      security so that these events can take place safely and
                      with dignity.
                    </p>
                    <p>
                      Every rally begins with a session of prayer and fasting.
                      The church prepares spiritually, seeking God’s guidance
                      and strength before stepping into public ministry. On the
                      day of the rally, a large truck is hired and equipped with
                      a sound system. The choir leads praise and worship,
                      lifting the name of Jesus in the streets. Worship fills
                      the atmosphere, and many people stop to listen — some out
                      of curiosity, others with open hearts.
                    </p>
                    <p>
                      After worship, intercessory prayer is offered for the
                      city, the nation, and the people. Then the pastor begins
                      preaching the Word of God. Even while the rally continues
                      to move through the streets, the preaching does not stop.
                      The message of hope, salvation, and peace in Jesus Christ
                      is proclaimed clearly and boldly.
                    </p>
                    <p>
                      Through these rallies, many non-believers hear the Gospel
                      for the first time. Some listen from shops, homes, or
                      along the roadside. Hearts are touched, questions are
                      raised, and seeds of faith are planted. By God’s grace,
                      many people come to know Jesus Christ and begin
                      fellowshipping with nearby local churches and assemblies.
                    </p>
                    <p>
                      These public rallies are not just events. They are a
                      witness of faith, unity, and courage. In a challenging
                      environment, the church in Pakistan continues to shine as
                      a light, sharing the love of Christ with humility and
                      boldness.
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
                      href="/assets/images/coppak/outreach/public-rallies/02.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Public rallies & prayer marches"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/public-rallies/02.jpg"
                        alt="Public rallies & prayer marches"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/public-rallies/03.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Public rallies & prayer marches"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/public-rallies/03.jpg"
                        alt="Public rallies & prayer marches"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/public-rallies/05.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Public rallies & prayer marches"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/public-rallies/05.jpg"
                        alt="Public rallies & prayer marches"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/public-rallies/07.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Public rallies & prayer marches"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/public-rallies/07.jpg"
                        alt="Public rallies & prayer marches"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/public-rallies/09.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Public rallies & prayer marches"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/public-rallies/09.jpg"
                        alt="Public rallies & prayer marches"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/public-rallies/christmas/02.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Public rallies & prayer marches"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/public-rallies/christmas/02.jpg"
                        alt="Public rallies & prayer marches"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/public-rallies/christmas/04.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Public rallies & prayer marches"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/public-rallies/christmas/04.jpg"
                        alt="Public rallies & prayer marches"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/public-rallies/christmas/06.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Public rallies & prayer marches"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/public-rallies/christmas/06.jpg"
                        alt="Public rallies & prayer marches"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/public-rallies/christmas/09.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Public rallies & prayer marches"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/public-rallies/christmas/09.jpg"
                        alt="Public rallies & prayer marches"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/public-rallies/christmas/12.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Public rallies & prayer marches"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/public-rallies/christmas/12.jpg"
                        alt="Public rallies & prayer marches"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/public-rallies/christmas/15.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Public rallies & prayer marches"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/public-rallies/christmas/15.jpg"
                        alt="Public rallies & prayer marches"
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
                      You are the light of the world. A town built on a hill
                      cannot be hidden.
                    </blockquote>{" "}
                    <figcaption>Matthew 5:14</figcaption>{" "}
                  </figure>
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
                        Christmas and Easter biblical rallies in cities
                        nationwide
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Prayer and peace marches with NOC approval and security
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Choir-led praise and worship through the streets
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Intercessory prayer for the city and the nation
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Bold Gospel preaching to crowds along the route
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
                      Cities across Pakistan{" "}
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
