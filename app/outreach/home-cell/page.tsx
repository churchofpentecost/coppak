import type { Metadata } from "next";
import LegacyScripts from "../../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Home cell groups | COPPAK.ORG",
  description:
    "Small groups meeting quietly and faithfully in homes — the foundation of church growth across Pakistan.",
  alternates: { canonical: "/outreach/home-cell" },
  openGraph: {
    title: "Home cell groups | COPPAK.ORG",
    description:
      "Small groups meeting quietly and faithfully in homes — the foundation of church growth across Pakistan.",
    url: "/outreach/home-cell",
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
  "/scripts/migrated/outreach-home-cell-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="detail-hero"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(13,22,52,0.95) 0%, rgba(20,42,95,0.88) 46%, rgba(10,20,48,0.78) 100%), url(/assets/images/coppak/outreach/home-cell/01.jpg)",
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
                    <span>Home cell groups</span>{" "}
                  </li>
                </ul>{" "}
                <span className="detail-hero__eyebrow">Outreach</span>{" "}
                <h1 className="detail-hero__title">Home cell groups</h1>{" "}
              </div>{" "}
              <div className="detail-hero__collage count-3">
                {" "}
                <a
                  className="detail-hero__photo img-popup"
                  data-group={1}
                  href="/assets/images/coppak/outreach/home-cell/01.jpg"
                  aria-label="View photo — Home cell groups"
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/outreach/home-cell/01.jpg"
                    alt="Home cell groups"
                    loading="eager"
                  />{" "}
                </a>
                <a
                  className="detail-hero__photo img-popup"
                  data-group={1}
                  href="/assets/images/coppak/outreach/home-cell/02.jpg"
                  aria-label="View photo — Home cell groups"
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/outreach/home-cell/02.jpg"
                    alt="Home cell groups"
                    loading="eager"
                  />{" "}
                </a>
                <a
                  className="detail-hero__photo img-popup"
                  data-group={1}
                  href="/assets/images/coppak/outreach/home-cell/03.jpg"
                  aria-label="View photo — Home cell groups"
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/outreach/home-cell/03.jpg"
                    alt="Home cell groups"
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
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i className="fas fa-flag" aria-hidden="true" />{" "}
                      <span>Public rallies &amp; prayer marches</span>{" "}
                    </a>
                    <a
                      href="/outreach/home-cell"
                      className="detail-sidebar__item is-active"
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
                    Small groups meeting quietly and faithfully in homes — the
                    foundation of church growth across Pakistan.
                  </p>{" "}
                  <div className="detail-body">
                    {" "}
                    <p>
                      Home cell groups are a great blessing to the church in
                      Pakistan, especially in an Islamic country where Christian
                      families often live among majority communities. These
                      gatherings usually take place inside believers’ homes,
                      quietly and faithfully, yet filled with the presence of
                      God.
                    </p>
                    <p>
                      Across Pakistan, home cell groups follow a common and
                      simple pattern. Each meeting begins with{" "}
                      <strong>prayer</strong>, followed by{" "}
                      <strong>praise and worship</strong>. Believers then
                      receive <strong>Bible teaching</strong> and spend time in{" "}
                      <strong>intercessory prayer</strong> for families,
                      communities, and the nation. These small gatherings
                      strengthen faith, build unity, and encourage believers to
                      stand firm in their walk with Christ.
                    </p>
                    <p>
                      At times, home cell groups face challenges. Because
                      Christians live among majority communities, some neighbors
                      oppose these gatherings. Despite this pressure, the church
                      continues with wisdom, patience, and prayer. By God’s
                      grace, many neighbors respond positively. Some join the
                      meetings, listen to the Word of God, and allow their
                      children to participate. Many children learn Gospel songs
                      and Bible stories for the first time in these home
                      gatherings.
                    </p>
                    <p>
                      Home cell groups have become one of the strongest
                      foundations of church growth in Pakistan. Through these
                      small meetings, many people come to know Jesus Christ
                      personally. Faith grows quietly but deeply. New believers
                      are discipled, and many emerging leaders are raised from
                      these groups to serve the church and the community.
                    </p>
                    <p>
                      In the midst of challenges, the church in Pakistan
                      continues to grow.{" "}
                      <strong>
                        Home cell groups show that the Gospel does not need
                        large buildings or public platforms to spread.
                      </strong>{" "}
                      Even in homes and small gatherings, God is at work,
                      transforming lives and building His church with faith,
                      courage, and hope.
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
                      href="/assets/images/coppak/outreach/home-cell/02.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Home cell groups"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/home-cell/02.jpg"
                        alt="Home cell groups"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/home-cell/03.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Home cell groups"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/home-cell/03.jpg"
                        alt="Home cell groups"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/home-cell/04.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Home cell groups"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/home-cell/04.jpg"
                        alt="Home cell groups"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/home-cell/05.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Home cell groups"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/home-cell/05.jpg"
                        alt="Home cell groups"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/home-cell/06.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Home cell groups"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/home-cell/06.jpg"
                        alt="Home cell groups"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/home-cell/07.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Home cell groups"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/home-cell/07.jpg"
                        alt="Home cell groups"
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
                      For where two or three gather in my name, there am I with
                      them.
                    </blockquote>{" "}
                    <figcaption>Matthew 18:20</figcaption>{" "}
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
                        Weekly gatherings of prayer, praise, and worship in
                        believers' homes
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Bible teaching and intercessory prayer for families and
                        the nation
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Discipling new believers and raising emerging leaders
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Welcoming neighbours and their children to hear the
                        Gospel
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
                      Believers' homes nationwide{" "}
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
