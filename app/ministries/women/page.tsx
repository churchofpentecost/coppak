import type { Metadata } from "next";
import LegacyScripts from "../../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Women's ministry | COPPAK.ORG",
  description:
    "Empowering, equipping, and walking alongside Pakistani Christian women through fellowship, conferences, and skill development.",
  alternates: { canonical: "/ministries/women" },
  openGraph: {
    title: "Women's ministry | COPPAK.ORG",
    description:
      "Empowering, equipping, and walking alongside Pakistani Christian women through fellowship, conferences, and skill development.",
    url: "/ministries/women",
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
  "/scripts/migrated/ministries-women-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="detail-hero"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(13,22,52,0.95) 0%, rgba(20,42,95,0.88) 46%, rgba(10,20,48,0.78) 100%), url(/assets/images/coppak/ministries/women/01.jpg)",
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
                    <span>Women's ministry</span>{" "}
                  </li>
                </ul>{" "}
                <span className="detail-hero__eyebrow">Ministry</span>{" "}
                <h1 className="detail-hero__title">Women's ministry</h1>{" "}
              </div>{" "}
              <div className="detail-hero__video">
                {" "}
                <iframe
                  src="https://www.youtube.com/embed/dcMJFRNejLI?rel=0"
                  title="Women's ministry — video"
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
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i className="fas fa-box-open" aria-hidden="true" />{" "}
                      <span>Support needy families</span>{" "}
                    </a>
                    <a
                      href="/ministries/women"
                      className="detail-sidebar__item is-active"
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
                    Empowering, equipping, and walking alongside Pakistani
                    Christian women through fellowship, conferences, and skill
                    development.
                  </p>{" "}
                  <div className="detail-body">
                    {" "}
                    <p>
                      The Church of Pentecost Pakistan is deeply committed to
                      standing with Christian women who face hardship,
                      discrimination, and injustice in society. Across the
                      country, many Christian women endure poverty, social
                      rejection, and emotional pain. They often work in
                      low-paying jobs such as domestic service, cleaning, or
                      brick-kiln labor, and some face harassment or pressure to
                      abandon their faith. Yet, even in these difficult
                      circumstances, these women remain strong pillars of faith
                      within their families, churches, and communities.
                    </p>
                    <p>
                      Recognizing their struggles, The Church of Pentecost
                      Pakistan is actively working to bring spiritual, social,
                      and emotional empowerment to Christian women. Through
                      women’s fellowship meetings, Bible studies, prayer
                      gatherings, leadership workshops, and conferences, the
                      church helps women grow in their faith and discover their
                      God-given identity and worth.
                    </p>
                    <p>
                      Socially, the church organizes community programs and
                      skill-development workshops — including vocational
                      training, literacy classes, and awareness sessions on
                      women’s rights, health, and family well-being.
                      Emotionally, pastors and women leaders provide counseling
                      and mentorship, helping women overcome trauma, rejection,
                      and discrimination while finding healing, dignity, and
                      hope in Christ.
                    </p>
                    <p>
                      Each year, the Women’s Ministry organizes national women’s
                      conferences, where important social issues are addressed
                      alongside the preaching of the Gospel. Panel discussions,
                      specialized teaching sessions, and empowerment forums help
                      women face everyday challenges with faith and knowledge.
                      Local seminars and smaller conferences continue throughout
                      the year to ensure ongoing support.
                    </p>
                    <p>
                      These empowered women are becoming agents of change —
                      standing firm in faith, promoting peace, and carrying the
                      message of Christ’s love to every corner of Pakistan.
                    </p>
                    <p>
                      Director: <strong>Rose Mary Nasir</strong>
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
                      href="/assets/images/coppak/ministries/women/02.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Women's ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/women/02.jpg"
                        alt="Women's ministry"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/women/04.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Women's ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/women/04.jpg"
                        alt="Women's ministry"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/women/06.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Women's ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/women/06.jpg"
                        alt="Women's ministry"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/women/07.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Women's ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/women/07.jpg"
                        alt="Women's ministry"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/women/09.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Women's ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/women/09.jpg"
                        alt="Women's ministry"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/women/10.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Women's ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/women/10.jpg"
                        alt="Women's ministry"
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
                      She is clothed with strength and dignity; she can laugh at
                      the days to come.
                    </blockquote>{" "}
                    <figcaption>Proverbs 31:25</figcaption>{" "}
                  </figure>{" "}
                  <div className="detail-stats">
                    {" "}
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">Annual</span>{" "}
                      <span className="detail-stats__label">
                        National conference
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
                        Women's fellowship meetings, Bible studies, and prayer
                        gatherings
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Leadership workshops and national women's conferences
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Vocational training, literacy classes, and skill
                        development
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Counseling and mentorship for healing from trauma and
                        rejection
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Awareness sessions on women's rights, health, and family
                        well-being
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
                      All eight districts{" "}
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
                <div className="detail-leader">
                  {" "}
                  <div className="detail-leader__photo">
                    {" "}
                    <img
                      src="/assets/images/coppak/about/team/rose-mary.jpg"
                      alt="Rose Mary Nasir"
                    />{" "}
                  </div>{" "}
                  <div className="detail-leader__info">
                    {" "}
                    <span className="detail-eyebrow">Leadership</span>{" "}
                    <h4 className="detail-leader__name">Rose Mary Nasir</h4>{" "}
                    <p className="detail-leader__role">
                      Women's Ministry Director
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
