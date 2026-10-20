import type { Metadata } from "next";
import LegacyScripts from "../../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Christian Apologetics Conferences | COPPAK.ORG",
  description:
    "Equipping pastors, youth, and believers in Pakistan to understand, defend, and share the Christian faith with wisdom, love, and biblical confidence — in partnership with Lakemount Worship Centre, Grimsby, Canada.",
  alternates: { canonical: "/conferences/christian-apologetics" },
  openGraph: {
    title: "Christian Apologetics Conferences | COPPAK.ORG",
    description:
      "Equipping pastors, youth, and believers in Pakistan to understand, defend, and share the Christian faith with wisdom, love, and biblical confidence — in partnership with Lakemount Worship Centre, Grimsby, Canada.",
    url: "/conferences/christian-apologetics",
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
  "/scripts/migrated/conferences-christian-apologetics-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="detail-hero"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(13,22,52,0.95) 0%, rgba(20,42,95,0.88) 46%, rgba(10,20,48,0.78) 100%), url(/assets/images/coppak/conferences/christian-apologetics/01.jpg)",
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
                    <a href="/conferences">Conferences</a>{" "}
                  </li>{" "}
                  <li className="detail-hero__crumb-sep" aria-hidden="true">
                    /
                  </li>{" "}
                  <li className="is-current">
                    {" "}
                    <span>Christian Apologetics Conferences</span>{" "}
                  </li>
                </ul>{" "}
                <span className="detail-hero__eyebrow">Conference</span>{" "}
                <h1 className="detail-hero__title">
                  Christian Apologetics Conferences
                </h1>{" "}
              </div>{" "}
              <div className="detail-hero__collage count-3">
                {" "}
                <a
                  className="detail-hero__photo img-popup"
                  data-group={1}
                  href="/assets/images/coppak/conferences/christian-apologetics/01.jpg"
                  aria-label="View photo — Christian Apologetics Conferences"
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/conferences/christian-apologetics/01.jpg"
                    alt="Christian Apologetics Conferences"
                    loading="eager"
                  />{" "}
                </a>
                <a
                  className="detail-hero__photo img-popup"
                  data-group={1}
                  href="/assets/images/coppak/conferences/christian-apologetics/02.jpg"
                  aria-label="View photo — Christian Apologetics Conferences"
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/conferences/christian-apologetics/02.jpg"
                    alt="Christian Apologetics Conferences"
                    loading="eager"
                  />{" "}
                </a>
                <a
                  className="detail-hero__photo img-popup"
                  data-group={1}
                  href="/assets/images/coppak/conferences/christian-apologetics/05.jpg"
                  aria-label="View photo — Christian Apologetics Conferences"
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/conferences/christian-apologetics/05.jpg"
                    alt="Christian Apologetics Conferences"
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
                    Our Conferences
                  </h3>{" "}
                  <nav className="detail-sidebar__list">
                    {" "}
                    <a
                      href="/conferences/leadership-conferences"
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i className="fas fa-user-tie" aria-hidden="true" />{" "}
                      <span>Leadership Conferences</span>{" "}
                    </a>
                    <a
                      href="/conferences/christian-apologetics"
                      className="detail-sidebar__item is-active"
                    >
                      {" "}
                      <i
                        className="fas fa-shield-alt"
                        aria-hidden="true"
                      />{" "}
                      <span>Christian Apologetics Conferences</span>{" "}
                    </a>
                    <a
                      href="/conferences/quest-leadership"
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i className="fas fa-compass" aria-hidden="true" />{" "}
                      <span>Quest Leadership Conference</span>{" "}
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
                    Equipping pastors, youth, and believers in Pakistan to
                    understand, defend, and share the Christian faith with
                    wisdom, love, and biblical confidence — in partnership with
                    Lakemount Worship Centre, Grimsby, Canada.
                  </p>{" "}
                  <div className="detail-body">
                    {" "}
                    <h2 id="equipping-the-church-in-pakistan-to-understand-defend-and-share-the-faith">
                      Equipping the Church in Pakistan to understand, defend,
                      and share the faith
                    </h2>
                    <p>
                      The Church of Pentecost Pakistan, in partnership with{" "}
                      <strong>Lakemount Worship Centre, Grimsby, Canada</strong>
                      , organised Christian Apologetics Conferences in Pakistan
                      with the purpose of equipping and training pastors, church
                      leaders, Generation Z, youth, and believers to{" "}
                      <strong>
                        understand, defend, and share the Christian faith
                      </strong>{" "}
                      with wisdom, love, and biblical confidence.
                    </p>
                    <p>
                      These conferences were arranged to strengthen the
                      leadership of the Church in Pakistan and to prepare
                      believers to answer important questions about their faith.
                      Pakistan is a Muslim-majority country, where Christians
                      live as a small minority. In daily life, many believers
                      face questions such as:
                    </p>
                    <blockquote>
                      <p>
                        <em>
                          Why do Christians believe Jesus is the Son of God? Has
                          the Bible been changed? What is the meaning of the
                          Trinity? Why do Christians believe in the cross and
                          resurrection of Jesus Christ?
                        </em>
                      </p>
                    </blockquote>
                    <p>
                      In many conversations, Christians are also invited to
                      accept Islam. In this situation, the Church has a great
                      responsibility to train the next generation with biblical
                      knowledge, theological understanding, and spiritual
                      courage. These apologetics trainings, materials, books,
                      and conferences are designed to help believers respond
                      with{" "}
                      <strong>clarity, respect, love, and confidence</strong>.
                    </p>
                    <p>
                      The purpose of these conferences is{" "}
                      <strong>not to create arguments</strong>, but to build
                      understanding, strengthen faith, and prepare believers to
                      be faithful witnesses of Jesus Christ in a multi-faith
                      society. The training focuses on sound biblical teaching,
                      Christian apologetics, interfaith understanding, and
                      practical evangelism.
                    </p>
                    <h3 id="topics-covered">Topics covered</h3>
                    <p>
                      Through these sessions, participants are equipped to
                      answer difficult questions about the Bible, the person of
                      Jesus Christ, the Trinity, salvation, the death of Christ
                      on the cross, and His resurrection. The conferences
                      encourage believers not only to defend their faith, but
                      also to{" "}
                      <strong>live as faithful examples of Christ</strong> in
                      their families, churches, workplaces, schools, and
                      communities.
                    </p>
                    <h3 id="format">Format</h3>
                    <p>
                      These apologetics conferences have become an important
                      platform for preparing Christian leaders to engage society
                      with truth, humility, courage, and love. The sessions
                      include:
                    </p>
                    <ul>
                      <li>Biblical lectures and theological teaching</li>
                      <li>Question-and-answer sessions</li>
                      <li>Leadership training</li>
                      <li>Prayer and worship</li>
                    </ul>
                    <p>
                      Special emphasis is given to helping Christians understand
                      their faith deeply and communicate it peacefully and
                      respectfully.
                    </p>
                    <h3 id="urdu-materials-and-certificates">
                      Urdu materials and certificates
                    </h3>
                    <p>
                      The Church also provides{" "}
                      <strong>
                        training materials and books in the Urdu language
                      </strong>
                      , making the teaching accessible and practical for local
                      pastors, leaders, and believers. At the end of the
                      sessions, <strong>certificates are distributed</strong> to
                      the participants with the support of international
                      partners, recognising their commitment to learning and
                      growing in the Christian faith.
                    </p>
                    <p>
                      These Christian Apologetics Conferences are a powerful
                      step toward strengthening the Church in Pakistan, raising
                      a biblically grounded generation, and preparing believers
                      to defend the faith and share the hope of Jesus Christ
                      with wisdom, respect, and courage.
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
                      href="/assets/images/coppak/conferences/christian-apologetics/02.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Christian Apologetics Conferences"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/christian-apologetics/02.jpg"
                        alt="Christian Apologetics Conferences"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/conferences/christian-apologetics/05.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Christian Apologetics Conferences"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/christian-apologetics/05.jpg"
                        alt="Christian Apologetics Conferences"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/conferences/christian-apologetics/08.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Christian Apologetics Conferences"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/christian-apologetics/08.jpg"
                        alt="Christian Apologetics Conferences"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/conferences/christian-apologetics/12.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Christian Apologetics Conferences"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/christian-apologetics/12.jpg"
                        alt="Christian Apologetics Conferences"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/conferences/christian-apologetics/16.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Christian Apologetics Conferences"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/christian-apologetics/16.jpg"
                        alt="Christian Apologetics Conferences"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/conferences/christian-apologetics/20.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Christian Apologetics Conferences"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/christian-apologetics/20.jpg"
                        alt="Christian Apologetics Conferences"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/conferences/christian-apologetics/26.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Christian Apologetics Conferences"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/christian-apologetics/26.jpg"
                        alt="Christian Apologetics Conferences"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/conferences/christian-apologetics/32.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Christian Apologetics Conferences"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/christian-apologetics/32.jpg"
                        alt="Christian Apologetics Conferences"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/conferences/christian-apologetics/38.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Christian Apologetics Conferences"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/christian-apologetics/38.jpg"
                        alt="Christian Apologetics Conferences"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/conferences/christian-apologetics/44.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Christian Apologetics Conferences"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/christian-apologetics/44.jpg"
                        alt="Christian Apologetics Conferences"
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
                      Always be prepared to give an answer to everyone who asks
                      you to give the reason for the hope that you have. But do
                      this with gentleness and respect.
                    </blockquote>{" "}
                    <figcaption>1 Peter 3:15</figcaption>{" "}
                  </figure>{" "}
                  <div className="detail-stats">
                    {" "}
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">Urdu</span>{" "}
                      <span className="detail-stats__label">
                        Training materials &amp; books
                      </span>{" "}
                    </div>
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">
                        Certified
                      </span>{" "}
                      <span className="detail-stats__label">
                        By international partners
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
                        Sound biblical teaching, Christian apologetics,
                        interfaith understanding, practical evangelism
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Training pastors, church leaders, Generation Z, youth,
                        and believers
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Answering hard questions about the Bible, Christ, the
                        Trinity, salvation, the cross, and resurrection
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Equipping believers to be faithful witnesses in a
                        multi-faith society
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Urdu training materials and books for local pastors,
                        leaders, and believers
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Certificates distributed in partnership with
                        international partners
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
                      Kasur{" "}
                    </span>
                    <span className="detail-locations__tag">
                      {" "}
                      <i
                        className="fas fa-map-marker-alt"
                        aria-hidden="true"
                      />{" "}
                      Sheikhupura{" "}
                    </span>
                    <span className="detail-locations__tag">
                      {" "}
                      <i
                        className="fas fa-map-marker-alt"
                        aria-hidden="true"
                      />{" "}
                      Jhamkay{" "}
                    </span>
                    <span className="detail-locations__tag">
                      {" "}
                      <i
                        className="fas fa-map-marker-alt"
                        aria-hidden="true"
                      />{" "}
                      Across Pakistan{" "}
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
