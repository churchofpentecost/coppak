import type { Metadata } from "next";
import LegacyScripts from "../../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Holy Communion | COPPAK.ORG",
  description:
    "On the first Sunday of every month, all COPPAK assemblies gather to remember the sacrifice of Christ.",
  alternates: { canonical: "/church-services/holy-communion" },
  openGraph: {
    title: "Holy Communion | COPPAK.ORG",
    description:
      "On the first Sunday of every month, all COPPAK assemblies gather to remember the sacrifice of Christ.",
    url: "/church-services/holy-communion",
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
  "/scripts/migrated/church-services-holy-communion-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="detail-hero"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(13,22,52,0.95) 0%, rgba(20,42,95,0.88) 46%, rgba(10,20,48,0.78) 100%), url(/assets/images/coppak/services/communion/01.jpg)",
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
                    <span>Holy Communion</span>{" "}
                  </li>
                </ul>{" "}
                <span className="detail-hero__eyebrow">
                  First Sunday of every month
                </span>{" "}
                <h1 className="detail-hero__title">Holy Communion</h1>{" "}
              </div>{" "}
              <div className="detail-hero__video">
                {" "}
                <iframe
                  src="https://www.youtube.com/embed/yLifFxUUHzY?rel=0"
                  title="Holy Communion — video"
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
                      className="detail-sidebar__item is-active"
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
                      className="detail-sidebar__item"
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
                    On the first Sunday of every month, all COPPAK assemblies
                    gather to remember the sacrifice of Christ.
                  </p>{" "}
                  <div className="detail-body">
                    {" "}
                    <p>
                      On the <strong>first Sunday of every month</strong>, all
                      church assemblies in Pakistan come together to observe the
                      Holy Communion service. This sacred gathering is a
                      powerful reminder of the sacrifice of Jesus Christ and His
                      unending love for humanity.
                    </p>
                    <p>
                      During Holy Communion, believers partake in the{" "}
                      <strong>bread and grape juice</strong>, symbolizing the
                      body and blood of Christ. This act reminds every
                      individual of the price Jesus paid on the cross and the
                      new life believers have received through Him. By sharing
                      in Holy Communion, believers are reminded that they belong
                      to the family of God, united in faith, grace, and
                      redemption.
                    </p>
                    <p>
                      This service holds deep spiritual meaning for the
                      congregation. People participate with reverence, passion,
                      and devotion. Hearts are examined, prayers are lifted, and
                      faith is renewed. For many believers living in challenging
                      circumstances, Holy Communion becomes a moment of
                      spiritual strength, healing, and encouragement.
                    </p>
                    <p>
                      The Holy Communion service refreshes faith and restores
                      hope. It reminds the church that even in hardship, Christ
                      is present among His people. Through this sacred
                      remembrance, the church in Pakistan continues to stand
                      firm, rooted in the sacrifice of Christ and strengthened
                      by the unity of His body.
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
                      href="/assets/images/coppak/services/communion/02.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Holy Communion"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/services/communion/02.jpg"
                        alt="Holy Communion"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/services/communion/03.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Holy Communion"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/services/communion/03.jpg"
                        alt="Holy Communion"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/services/communion/04.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Holy Communion"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/services/communion/04.jpg"
                        alt="Holy Communion"
                        loading="lazy"
                      />{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="detail-highlight">
                  {" "}
                  <figure className="detail-verse">
                    {" "}
                    <blockquote>Do this in remembrance of me.</blockquote>{" "}
                    <figcaption>Luke 22:19</figcaption>{" "}
                  </figure>{" "}
                  <div className="detail-stats">
                    {" "}
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">
                        First Sunday
                      </span>{" "}
                      <span className="detail-stats__label">
                        Of every month
                      </span>{" "}
                    </div>
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">
                        All assemblies
                      </span>{" "}
                      <span className="detail-stats__label">
                        Observing together
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
                        Monthly remembrance of Christ's sacrifice in every
                        COPPAK assembly
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Sharing the bread and grape juice — the body and blood
                        of Christ
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Self-examination, prayer, and renewed faith
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Unity across the body of Christ throughout Pakistan
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
                      All COPPAK assemblies{" "}
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
