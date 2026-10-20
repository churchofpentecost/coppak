import type { Metadata } from "next";
import LegacyScripts from "../../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Baptism service | COPPAK.ORG",
  description:
    "Public quarterly baptism in parks, rivers, and pools across Pakistan — celebrating new believers from every ministry.",
  alternates: { canonical: "/church-services/baptism" },
  openGraph: {
    title: "Baptism service | COPPAK.ORG",
    description:
      "Public quarterly baptism in parks, rivers, and pools across Pakistan — celebrating new believers from every ministry.",
    url: "/church-services/baptism",
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
  "/scripts/migrated/church-services-baptism-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="detail-hero"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(13,22,52,0.95) 0%, rgba(20,42,95,0.88) 46%, rgba(10,20,48,0.78) 100%), url(/assets/images/coppak/services/baptism/01.jpg)",
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
                    <span>Baptism service</span>{" "}
                  </li>
                </ul>{" "}
                <span className="detail-hero__eyebrow">
                  Quarterly in every district
                </span>{" "}
                <h1 className="detail-hero__title">Baptism service</h1>{" "}
              </div>{" "}
              <div className="detail-hero__video">
                {" "}
                <iframe
                  src="https://www.youtube.com/embed/NxnNHSbpE84?rel=0"
                  title="Baptism service — video"
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
                      className="detail-sidebar__item is-active"
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
                    Public quarterly baptism in parks, rivers, and pools across
                    Pakistan — celebrating new believers from every ministry.
                  </p>{" "}
                  <div className="detail-body">
                    {" "}
                    <p>
                      Baptism is a joyful and powerful celebration of faith in
                      The Church of Pentecost Pakistan. The church has the
                      liberty to organize baptism services in public places such
                      as <strong>parks, rivers, and swimming pools</strong>,
                      wherever it is suitable and accessible. The Constitution
                      of Pakistan allows the church to practice its faith
                      openly, and baptism services are held peacefully and
                      respectfully.
                    </p>
                    <p>
                      The church schedules baptism services on a{" "}
                      <strong>quarterly basis in all districts</strong>. Each
                      area leader carefully plans and organizes these services
                      so that new believers can publicly declare their faith in
                      Jesus Christ. At times, special baptism services are also
                      arranged outside the regular schedule when there is a
                      strong need or when many new believers are ready.
                    </p>
                    <p>
                      Candidates for baptism come from many different ministries
                      of the church. They are often the fruit of home cell
                      groups, home visitation, regular Sunday services,
                      evangelistic crusades, public rallies, conventions, Alpha
                      groups, various ministries, and even social media
                      outreach. These services show how God is working through
                      many channels to bring people to Himself.
                    </p>
                    <p>
                      Before baptism, new believers receive Bible teaching
                      through basic discipleship classes. They are taught the
                      foundations of faith and guided to understand salvation
                      through Jesus Christ. After openly confessing their faith,
                      they are baptized in water in the name of the Father, the
                      Son, and the Holy Spirit.
                    </p>
                    <p>
                      Following baptism, the church issues a{" "}
                      <strong>baptism certificate</strong> as a testimony that
                      the believer has been baptized according to biblical
                      teaching. This moment marks the beginning of a new journey
                      of faith, obedience, and discipleship.
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
                      href="/assets/images/coppak/services/baptism/02.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Baptism service"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/services/baptism/02.jpg"
                        alt="Baptism service"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/services/baptism/03.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Baptism service"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/services/baptism/03.jpg"
                        alt="Baptism service"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/services/baptism/04.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Baptism service"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/services/baptism/04.jpg"
                        alt="Baptism service"
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
                      Repent and be baptized, every one of you, in the name of
                      Jesus Christ for the forgiveness of your sins.
                    </blockquote>{" "}
                    <figcaption>Acts 2:38</figcaption>{" "}
                  </figure>{" "}
                  <div className="detail-stats">
                    {" "}
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">
                        Quarterly
                      </span>{" "}
                      <span className="detail-stats__label">
                        In every district
                      </span>{" "}
                    </div>
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">8</span>{" "}
                      <span className="detail-stats__label">
                        Districts served
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
                        Public baptisms in parks, rivers, and swimming pools
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Quarterly schedule organised in every district
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Basic discipleship classes before each baptism
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Baptism in the name of the Father, Son, and Holy Spirit
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Certificate issued as a testimony of biblical baptism
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
                      Parks{" "}
                    </span>
                    <span className="detail-locations__tag">
                      {" "}
                      <i
                        className="fas fa-map-marker-alt"
                        aria-hidden="true"
                      />{" "}
                      Rivers{" "}
                    </span>
                    <span className="detail-locations__tag">
                      {" "}
                      <i
                        className="fas fa-map-marker-alt"
                        aria-hidden="true"
                      />{" "}
                      Swimming pools{" "}
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
