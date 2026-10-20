import type { Metadata } from "next";
import LegacyScripts from "../../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Support needy families | COPPAK.ORG",
  description:
    "Walking with Christian families through hardship — monthly groceries, school supplies, baby essentials, and pastoral care that doesn't stop at a doorstep.",
  alternates: { canonical: "/ministries/support-needy-families" },
  openGraph: {
    title: "Support needy families | COPPAK.ORG",
    description:
      "Walking with Christian families through hardship — monthly groceries, school supplies, baby essentials, and pastoral care that doesn't stop at a doorstep.",
    url: "/ministries/support-needy-families",
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
  "/scripts/migrated/ministries-support-needy-families-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="detail-hero"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(13,22,52,0.95) 0%, rgba(20,42,95,0.88) 46%, rgba(10,20,48,0.78) 100%), url(/assets/images/coppak/ministries/support-needy-families/welfare-01.jpg)",
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
                    <span>Support needy families</span>{" "}
                  </li>
                </ul>{" "}
                <span className="detail-hero__eyebrow">Ministry</span>{" "}
                <h1 className="detail-hero__title">
                  Support needy families
                </h1>{" "}
              </div>{" "}
              <div className="detail-hero__video">
                {" "}
                <iframe
                  src="https://www.youtube.com/embed/XXTMIeIdH2U?rel=0"
                  title="Support needy families — video"
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
                  <h3 className="detail-sidebar__heading">
                    Our Ministries
                  </h3>{" "}
                  <nav className="detail-sidebar__list">
                    {" "}
                    <a
                      href="/ministries/compassion"
                      className="detail-sidebar__item"
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
                      className="detail-sidebar__item is-active"
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
                    Walking with Christian families through hardship — monthly
                    groceries, school supplies, baby essentials, and pastoral
                    care that doesn't stop at a doorstep.
                  </p>{" "}
                  <div className="detail-body">
                    {" "}
                    <p>
                      Across The Church of Pentecost Pakistan, this ministry
                      partners with families who are walking through hard
                      seasons — illness, unemployment, persecution, loss, the
                      daily weight of poverty — providing{" "}
                      <strong>practical help and a steady relationship</strong>,
                      not a one-time handout.
                    </p>
                    <p>
                      Every month, our assemblies organise{" "}
                      <strong>grocery distributions</strong> for families who
                      would otherwise struggle to put food on the table.
                      Alongside the food, we deliver something just as
                      important: <strong>pastoral presence</strong>. Pastors
                      visit, pray with the families, listen to their stories,
                      and connect them to the wider church community so they no
                      longer carry their hardship alone.
                    </p>
                    <p>
                      When families are uprooted by{" "}
                      <strong>faith-based persecution</strong>, the ministry
                      steps in with emergency food and water, temporary shelter,
                      household supplies, clothing, and healthcare assistance.
                      For their children, we provide{" "}
                      <strong>school supplies and learning materials</strong> so
                      their education doesn’t pause when their world is shaken.
                      For families with infants, we provide{" "}
                      <strong>diapers, milk powder, and baby essentials</strong>
                      .
                    </p>
                    <p>
                      This is not charity dropped at a doorstep. It is the
                      church{" "}
                      <strong>
                        walking with families until they can walk independently
                        again
                      </strong>{" "}
                      — restoring not only daily provision, but dignity, hope,
                      and faith.
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
                      href="/assets/images/coppak/ministries/support-needy-families/welfare-02.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Support needy families"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/support-needy-families/welfare-02.jpg"
                        alt="Support needy families"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/support-needy-families/welfare-03.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Support needy families"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/support-needy-families/welfare-03.jpg"
                        alt="Support needy families"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/support-needy-families/welfare-05.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Support needy families"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/support-needy-families/welfare-05.jpg"
                        alt="Support needy families"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/support-needy-families/welfare-07.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Support needy families"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/support-needy-families/welfare-07.jpg"
                        alt="Support needy families"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/support-needy-families/welfare-09.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Support needy families"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/support-needy-families/welfare-09.jpg"
                        alt="Support needy families"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/support-needy-families/welfare-11.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Support needy families"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/support-needy-families/welfare-11.jpg"
                        alt="Support needy families"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/support-needy-families/family-02.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Support needy families"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/support-needy-families/family-02.jpg"
                        alt="Support needy families"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/support-needy-families/family-04.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Support needy families"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/support-needy-families/family-04.jpg"
                        alt="Support needy families"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/support-needy-families/family-06.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Support needy families"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/support-needy-families/family-06.jpg"
                        alt="Support needy families"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/support-needy-families/family-08.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Support needy families"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/support-needy-families/family-08.jpg"
                        alt="Support needy families"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/support-needy-families/family-09.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Support needy families"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/support-needy-families/family-09.jpg"
                        alt="Support needy families"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/support-needy-families/family-10.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Support needy families"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/support-needy-families/family-10.jpg"
                        alt="Support needy families"
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
                      Carry each other's burdens, and in this way you will
                      fulfill the law of Christ.
                    </blockquote>{" "}
                    <figcaption>Galatians 6:2</figcaption>{" "}
                  </figure>{" "}
                  <div className="detail-stats">
                    {" "}
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">Monthly</span>{" "}
                      <span className="detail-stats__label">
                        Grocery distribution
                      </span>{" "}
                    </div>
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">
                        Year-round
                      </span>{" "}
                      <span className="detail-stats__label">
                        Pastoral care
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
                        Monthly grocery donations for poor and struggling
                        families across our assemblies
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Emergency food, water, and temporary shelter for
                        families displaced by persecution
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        School supplies — books, notebooks, pencils, and bags —
                        for the children
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Baby essentials: diapers, milk powder, clothing, and
                        basic care items
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Pastoral support, prayer, counselling, and steady
                        accompaniment until families can stand again
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
                      Across COPPAK assemblies in Lahore and beyond{" "}
                    </span>
                    <span className="detail-locations__tag">
                      {" "}
                      <i
                        className="fas fa-map-marker-alt"
                        aria-hidden="true"
                      />{" "}
                      Brick-kiln settlements and slum neighbourhoods{" "}
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
