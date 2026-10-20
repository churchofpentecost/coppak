import type { Metadata } from "next";
import LegacyScripts from "../../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Alpha Pakistan | COPPAK.ORG",
  description:
    "Since 2023, more than 35,000 Pakistanis have completed Alpha — a relaxed, conversational introduction to Christian faith.",
  alternates: { canonical: "/outreach/alpha-groups" },
  openGraph: {
    title: "Alpha Pakistan | COPPAK.ORG",
    description:
      "Since 2023, more than 35,000 Pakistanis have completed Alpha — a relaxed, conversational introduction to Christian faith.",
    url: "/outreach/alpha-groups",
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
  "/scripts/migrated/outreach-alpha-groups-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="detail-hero"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(13,22,52,0.95) 0%, rgba(20,42,95,0.88) 46%, rgba(10,20,48,0.78) 100%), url(/assets/images/coppak/outreach/alpha-groups/01.jpg)",
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
                    <span>Alpha Pakistan</span>{" "}
                  </li>
                </ul>{" "}
                <span className="detail-hero__eyebrow">Outreach</span>{" "}
                <h1 className="detail-hero__title">Alpha Pakistan</h1>{" "}
              </div>{" "}
              <div className="detail-hero__video">
                {" "}
                <iframe
                  src="https://www.youtube.com/embed/FkOsI-OVig4?rel=0"
                  title="Alpha Pakistan — video"
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
                      className="detail-sidebar__item is-active"
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
                    Since 2023, more than 35,000 Pakistanis have completed Alpha
                    — a relaxed, conversational introduction to Christian faith.
                  </p>{" "}
                  <div className="detail-body">
                    {" "}
                    <p>
                      In Pakistan, Christians are often treated as second-class
                      citizens. Despite the country’s rich cultural and
                      religious diversity, Christians face significant
                      challenges — discrimination, persecution, and social
                      exclusion. The pressure on young Christians is
                      particularly intense; in schools and universities, young
                      people are often pressured to give up their faith.
                    </p>
                    <p>
                      In the face of this adversity, there is an urgent need to
                      strengthen the faith of young Christians and to empower
                      them to remain faithful to Christ. Through discipleship,
                      faith-building programs, and resources like Alpha, we
                      encourage young Christians to stand firm — knowing they
                      are not alone.
                    </p>
                    <h3 id="the-vision">The vision</h3>
                    <p>
                      The vision for Alpha Pakistan was birthed in the heart of{" "}
                      <strong>Shulammite Nasir</strong>, who felt a deep calling
                      to bring the Alpha program to The Church of Pentecost
                      Pakistan. Alpha is a course that helps people explore the
                      Christian faith in a relaxed, open, and non-judgmental
                      environment.
                    </p>
                    <p>
                      The heart of Alpha at The Church of Pentecost Pakistan is
                      to strengthen Christians in their faith journey, providing
                      them a safe space to question, grow, and solidify their
                      foundation in Christ. The aim is not just personal
                      transformation, but to{" "}
                      <strong>multiply disciples across Pakistan</strong>,
                      especially in areas where Christians face societal
                      pressure and persecution.
                    </p>
                    <h3 id="the-numbers">The numbers</h3>
                    <ul>
                      <li>
                        Alpha Pakistan began in <strong>2023</strong> by
                        training <strong>277 leaders</strong> who launched Alpha
                        in <strong>more than 250 locations</strong>, reaching
                        over 5,000 people in the first year.
                      </li>
                      <li>
                        Over the past three years,{" "}
                        <strong>more than 35,000 people</strong> across Pakistan
                        have completed Alpha.
                      </li>
                      <li>
                        Over <strong>800 leaders</strong> have been trained to
                        facilitate the program.
                      </li>
                      <li>
                        Alpha has been <strong>translated into Urdu</strong>,
                        making it accessible to many more communities.
                      </li>
                      <li>
                        The <strong>Alpha Youth Series</strong> was launched in
                        Pakistan this year, reaching teenagers and young adults.
                      </li>
                    </ul>
                    <p>
                      Locations include universities, schools, orphanages, kids’
                      camps, sports clubs, red-zone communities, and brick-kiln
                      areas — wherever there are people who want to ask honest
                      questions about faith.
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
                      href="/assets/images/coppak/outreach/alpha-groups/02.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Alpha Pakistan"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/alpha-groups/02.jpg"
                        alt="Alpha Pakistan"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/alpha-groups/04.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Alpha Pakistan"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/alpha-groups/04.jpg"
                        alt="Alpha Pakistan"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/alpha-groups/06.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Alpha Pakistan"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/alpha-groups/06.jpg"
                        alt="Alpha Pakistan"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/alpha-groups/08.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Alpha Pakistan"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/alpha-groups/08.jpg"
                        alt="Alpha Pakistan"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/alpha-groups/10.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Alpha Pakistan"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/alpha-groups/10.jpg"
                        alt="Alpha Pakistan"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/alpha-groups/12.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Alpha Pakistan"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/alpha-groups/12.jpg"
                        alt="Alpha Pakistan"
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
                      Taste and see that the Lord is good; blessed is the one
                      who takes refuge in him.
                    </blockquote>{" "}
                    <figcaption>Psalm 34:8</figcaption>{" "}
                  </figure>{" "}
                  <div className="detail-stats">
                    {" "}
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">35,000+</span>{" "}
                      <span className="detail-stats__label">
                        Completed Alpha
                      </span>{" "}
                    </div>
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">800+</span>{" "}
                      <span className="detail-stats__label">
                        Leaders trained
                      </span>{" "}
                    </div>
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">250+</span>{" "}
                      <span className="detail-stats__label">
                        Launch locations
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
                        Relaxed, conversational sessions exploring the Christian
                        faith
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Training leaders to facilitate Alpha across Pakistan
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Alpha translated into Urdu for wider access
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Alpha Youth Series for teenagers and young adults
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Strengthening young Christians to stand firm under
                        pressure
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
                      Universities &amp; schools{" "}
                    </span>
                    <span className="detail-locations__tag">
                      {" "}
                      <i
                        className="fas fa-map-marker-alt"
                        aria-hidden="true"
                      />{" "}
                      Orphanages &amp; kids' camps{" "}
                    </span>
                    <span className="detail-locations__tag">
                      {" "}
                      <i
                        className="fas fa-map-marker-alt"
                        aria-hidden="true"
                      />{" "}
                      Brick-kiln &amp; red-zone communities{" "}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="detail-leader">
                  {" "}
                  <div className="detail-leader__photo">
                    {" "}
                    <img
                      src="/assets/images/coppak/about/team/shulammite-nasir.jpg"
                      alt="Shulammite Nasir"
                    />{" "}
                  </div>{" "}
                  <div className="detail-leader__info">
                    {" "}
                    <span className="detail-eyebrow">Leadership</span>{" "}
                    <h4 className="detail-leader__name">Shulammite Nasir</h4>{" "}
                    <p className="detail-leader__role">
                      Founder, Alpha Pakistan
                    </p>{" "}
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
