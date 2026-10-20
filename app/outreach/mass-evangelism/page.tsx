import type { Metadata } from "next";
import LegacyScripts from "../../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Mass evangelism | COPPAK.ORG",
  description:
    "Crusades, open-air conventions, and stadium gatherings across Pakistan — proclaiming Christ openly under No-Objection Certificates from local authorities.",
  alternates: { canonical: "/outreach/mass-evangelism" },
  openGraph: {
    title: "Mass evangelism | COPPAK.ORG",
    description:
      "Crusades, open-air conventions, and stadium gatherings across Pakistan — proclaiming Christ openly under No-Objection Certificates from local authorities.",
    url: "/outreach/mass-evangelism",
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
  "/scripts/migrated/outreach-mass-evangelism-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="detail-hero"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(13,22,52,0.95) 0%, rgba(20,42,95,0.88) 46%, rgba(10,20,48,0.78) 100%), url(/assets/images/coppak/outreach/mass-evangelism/01.jpg)",
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
                    <span>Mass evangelism</span>{" "}
                  </li>
                </ul>{" "}
                <span className="detail-hero__eyebrow">Outreach</span>{" "}
                <h1 className="detail-hero__title">Mass evangelism</h1>{" "}
              </div>{" "}
              <div className="detail-hero__video">
                {" "}
                <iframe
                  src="https://www.youtube.com/embed/d43Aza_YUK8?rel=0"
                  title="Mass evangelism — video"
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
                  <h3 className="detail-sidebar__heading">Our Outreach</h3>{" "}
                  <nav className="detail-sidebar__list">
                    {" "}
                    <a
                      href="/outreach/public-rallies"
                      className="detail-sidebar__item"
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
                      className="detail-sidebar__item is-active"
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
                    Crusades, open-air conventions, and stadium gatherings
                    across Pakistan — proclaiming Christ openly under
                    No-Objection Certificates from local authorities.
                  </p>{" "}
                  <div className="detail-body">
                    {" "}
                    <p>
                      In Pakistan, the Church has legal space to conduct mass
                      evangelism activities — such as crusades, open-air
                      conventions in stadiums, fields, and other public venues —
                      provided it obtains the required No Objection Certificate
                      (NOC) from local authorities. Under the law, when all
                      legal requirements are fulfilled, the authorities grant
                      permission and provide security support for such events.
                    </p>
                    <p>
                      Before any crusade, the Church follows a constructive and
                      respectful strategy. Leaders hold meetings with local
                      political, social, and religious representatives to share
                      the vision, build trust, and maintain community harmony.
                      At the same time, continuous prayer sessions are organized
                      in preparation for the outreach. On the ground, a pastor
                      or elder is assigned to maintain communication with local
                      leadership and coordinate arrangements.
                    </p>
                    <p>
                      Publicity is a primary tool for inviting people. The
                      Church uses social media, electronic media, and print
                      media, along with posters and handbills, to ensure broad
                      and peaceful public awareness of the meetings.
                    </p>
                    <p>
                      Because of limited financial resources, the Church often
                      rents equipment for each crusade, including sound systems,
                      lighting, LED screens, stages, and tents. In many cases,
                      local administration cooperates positively to facilitate
                      the event.
                    </p>
                    <p>
                      The Church remains committed to preaching the full Gospel
                      message without compromise, while conducting all
                      activities responsibly and respectfully. During these
                      meetings, altar calls are given, prayers are offered for
                      the sick, and testimonies are shared publicly. People are
                      encouraged to confess and express their faith openly.
                    </p>
                    <p>
                      Those who accept Jesus Christ as personal Savior are then
                      connected to follow-up structures. New fellowships or
                      churches are planted where needed, and Gospel workers
                      continue discipleship and pastoral care so that new
                      believers can grow in faith.
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
                      href="/assets/images/coppak/outreach/mass-evangelism/02.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Mass evangelism"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/mass-evangelism/02.jpg"
                        alt="Mass evangelism"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/mass-evangelism/03.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Mass evangelism"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/mass-evangelism/03.jpg"
                        alt="Mass evangelism"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/mass-evangelism/05.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Mass evangelism"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/mass-evangelism/05.jpg"
                        alt="Mass evangelism"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/mass-evangelism/07.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Mass evangelism"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/mass-evangelism/07.jpg"
                        alt="Mass evangelism"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/mass-evangelism/09.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Mass evangelism"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/mass-evangelism/09.jpg"
                        alt="Mass evangelism"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/mass-evangelism/11.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Mass evangelism"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/mass-evangelism/11.jpg"
                        alt="Mass evangelism"
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
                      How beautiful are the feet of those who bring good news!
                    </blockquote>{" "}
                    <figcaption>Romans 10:15</figcaption>{" "}
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
                        NOC-approved crusades and open-air conventions in public
                        venues
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Trust-building meetings with local political and
                        religious leaders
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Continuous prayer preparation before every outreach
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Altar calls, prayer for the sick, and public testimonies
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Connecting new believers to follow-up and church
                        planting
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
                      Stadiums &amp; public fields{" "}
                    </span>
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
