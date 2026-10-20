import type { Metadata } from "next";
import LegacyScripts from "../../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Sunday service | COPPAK.ORG",
  description:
    "Worship that endures heat and cold — Pakistani believers gather every Sunday in 19 church buildings, on rooftops, in homes, and in the streets.",
  alternates: { canonical: "/church-services/sunday-service" },
  openGraph: {
    title: "Sunday service | COPPAK.ORG",
    description:
      "Worship that endures heat and cold — Pakistani believers gather every Sunday in 19 church buildings, on rooftops, in homes, and in the streets.",
    url: "/church-services/sunday-service",
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
  "/scripts/migrated/church-services-sunday-service-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="detail-hero"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(13,22,52,0.95) 0%, rgba(20,42,95,0.88) 46%, rgba(10,20,48,0.78) 100%), url(/assets/images/coppak/services/sunday/01.jpg)",
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
                    <a href="/church-services">Church services</a>{" "}
                  </li>{" "}
                  <li className="detail-hero__crumb-sep" aria-hidden="true">
                    /
                  </li>{" "}
                  <li className="is-current">
                    {" "}
                    <span>Sunday service</span>{" "}
                  </li>
                </ul>{" "}
                <span className="detail-hero__eyebrow">Every Sunday</span>{" "}
                <h1 className="detail-hero__title">Sunday service</h1>{" "}
              </div>{" "}
              <div className="detail-hero__video">
                {" "}
                <iframe
                  src="https://www.youtube.com/embed/ASyOFDcfqaI?rel=0"
                  title="Sunday service — video"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />{" "}
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
                  <h3 className="detail-sidebar__heading">Our Services</h3>{" "}
                  <nav className="detail-sidebar__list">
                    {" "}
                    <a
                      href="/church-services/baptism"
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i className="fas fa-water" aria-hidden="true" />{" "}
                      <span>Baptism service</span>{" "}
                    </a>
                    <a
                      href="/church-services/holy-communion"
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i
                        className="fas fa-wine-glass-alt"
                        aria-hidden="true"
                      />{" "}
                      <span>Holy Communion</span>{" "}
                    </a>
                    <a
                      href="/church-services/sunday-service"
                      className="detail-sidebar__item is-active"
                    >
                      {" "}
                      <i className="fas fa-church" aria-hidden="true" />{" "}
                      <span>Sunday service</span>{" "}
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
                    Worship that endures heat and cold — Pakistani believers
                    gather every Sunday in 19 church buildings, on rooftops, in
                    homes, and in the streets.
                  </p>{" "}
                  <div className="detail-body">
                    {" "}
                    <p>
                      Sunday worship is central to the life of The Church of
                      Pentecost. Every assembly gathers faithfully on the Lord’s
                      Day to worship God, pray together, and hear the Word. No
                      matter the circumstances, believers come with joy and
                      expectation, because meeting in God’s presence is a
                      priority, not a convenience.
                    </p>
                    <p>
                      In Pakistan, the church serves in very limited facilities.
                      Many assemblies meet in homes, on rooftops, in streets, or
                      in rented buildings. Despite these challenges, worship
                      continues with deep devotion. Currently, the church has{" "}
                      <strong>19 church buildings</strong> across the country.
                      Each building tells a story of faith and sacrifice — in
                      many cases, pastors and believers donated their own land,
                      and with the support of local communities, these churches
                      were built step by step.
                    </p>
                    <p>
                      Most church buildings do not yet have proper heating or
                      cooling systems. As the congregation continues to grow,
                      many buildings can no longer accommodate everyone inside.
                      Because of this, believers often worship outside the
                      building, standing or sitting in open areas.
                    </p>
                    <p>
                      During summer, temperatures can rise to{" "}
                      <strong>45°C</strong>. In winter, they can drop as low as{" "}
                      <strong>-1°C</strong>. Even in these harsh conditions,
                      people gather to worship the Lord. They endure heat and
                      cold with joyful hearts, lifting their voices in praise
                      and thanksgiving.
                    </p>
                    <p>
                      These Sunday services are a powerful testimony of faith,
                      perseverance, and love for God. The church in Pakistan is
                      growing — not because of strong facilities, but because of
                      strong faith. In every season and every situation, God is
                      worshiped, and lives continue to be transformed.
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
                      href="/assets/images/coppak/services/sunday/02.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Sunday service"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/services/sunday/02.jpg"
                        alt="Sunday service"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/services/sunday/03.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Sunday service"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/services/sunday/03.jpg"
                        alt="Sunday service"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/services/sunday/04.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Sunday service"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/services/sunday/04.jpg"
                        alt="Sunday service"
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
                      Let us not give up meeting together, as some are in the
                      habit of doing, but let us encourage one another.
                    </blockquote>{" "}
                    <figcaption>Hebrews 10:25</figcaption>{" "}
                  </figure>{" "}
                  <div className="detail-stats">
                    {" "}
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">19</span>{" "}
                      <span className="detail-stats__label">
                        Church buildings
                      </span>{" "}
                    </div>
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">45°C</span>{" "}
                      <span className="detail-stats__label">
                        Summer high
                      </span>{" "}
                    </div>
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">-1°C</span>{" "}
                      <span className="detail-stats__label">
                        Winter low
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
                        Worship every Sunday in 19 church buildings across
                        Pakistan
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Gatherings in homes, on rooftops, and in the streets
                        where space is short
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Faithful believers enduring extreme heat (45°C) and cold
                        (-1°C)
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Pastors and members donating land to build new
                        assemblies
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Praise, prayer, and the preached Word at the centre of
                        every service
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
                      19 church buildings{" "}
                    </span>
                    <span className="detail-locations__tag">
                      {" "}
                      <i
                        className="fas fa-map-marker-alt"
                        aria-hidden="true"
                      />{" "}
                      Homes &amp; rooftops{" "}
                    </span>
                    <span className="detail-locations__tag">
                      {" "}
                      <i
                        className="fas fa-map-marker-alt"
                        aria-hidden="true"
                      />{" "}
                      Open streets &amp; rented halls{" "}
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
