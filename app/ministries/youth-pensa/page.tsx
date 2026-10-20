import type { Metadata } from "next";
import LegacyScripts from "../../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Youth & PENSA Pakistan | COPPAK.ORG",
  description:
    "Reaching the next generation of Pakistan with the gospel — through PENSA discipleship, sports evangelism, and Spirit-led mentorship for students and young professionals.",
  alternates: { canonical: "/ministries/youth-pensa" },
  openGraph: {
    title: "Youth & PENSA Pakistan | COPPAK.ORG",
    description:
      "Reaching the next generation of Pakistan with the gospel — through PENSA discipleship, sports evangelism, and Spirit-led mentorship for students and young professionals.",
    url: "/ministries/youth-pensa",
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
  "/scripts/migrated/ministries-youth-pensa-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="detail-hero"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(13,22,52,0.95) 0%, rgba(20,42,95,0.88) 46%, rgba(10,20,48,0.78) 100%), url(/assets/images/coppak/ministries/pensa-youth/01.jpg)",
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
                    <span>Youth &amp; PENSA Pakistan</span>{" "}
                  </li>
                </ul>{" "}
                <span className="detail-hero__eyebrow">Ministry</span>{" "}
                <h1 className="detail-hero__title">
                  Youth &amp; PENSA Pakistan
                </h1>{" "}
              </div>{" "}
              <div className="detail-hero__video">
                {" "}
                <iframe
                  src="https://www.youtube.com/embed/oQDMdqbPYI8?rel=0"
                  title="Youth & PENSA Pakistan — video"
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
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i className="fas fa-female" aria-hidden="true" />{" "}
                      <span>Women's ministry</span>{" "}
                    </a>
                    <a
                      href="/ministries/youth-pensa"
                      className="detail-sidebar__item is-active"
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
                    Reaching the next generation of Pakistan with the gospel —
                    through PENSA discipleship, sports evangelism, and
                    Spirit-led mentorship for students and young professionals.
                  </p>{" "}
                  <div className="detail-body">
                    {" "}
                    <p>
                      The Church of Pentecost Pakistan believes the youth of
                      Pakistan are one of the greatest mission fields entrusted
                      to the Church. Through our Youth &amp; PENSA Pakistan
                      ministry — which includes PENSA, sports evangelism, and
                      Spirit-led discipleship — we reach students, young
                      professionals, and at-risk youth with the love of Christ.
                    </p>
                    <p>
                      PENSA Pakistan (Pentecost Students and Associates) is the
                      global Church of Pentecost’s student and young-adult
                      ministry, officially launched in Pakistan on{" "}
                      <strong>May 25, 2024</strong>, during a four-day Youth
                      Leadership Seminar attended by leaders including Apostle
                      Dr. Jamil Nasir and Apostle Ebenezer Hagan.
                    </p>
                    <p>
                      In a nation where Christians live peacefully as a
                      minority, PENSA offers a safe and supportive environment
                      for Bible study, mentorship, fellowship, leadership
                      training, and evangelism — helping young believers develop
                      strong Christian character and become shining witnesses
                      for Jesus in their schools, workplaces, and communities.
                    </p>
                    <p>
                      Graduates continue serving as{" "}
                      <strong>“associates,”</strong> making PENSA a lifelong
                      spiritual family. Through sports — especially cricket —
                      the ministry also reaches young people from brick-kiln
                      communities, slum areas, and remote villages, bringing
                      many into a discipleship relationship with Christ.
                    </p>
                    <p>
                      Together, these ministries are raising a new generation of
                      Pakistani Christians equipped to stand firm in faith, lead
                      with courage, and serve their nation in the power of the
                      Holy Spirit.
                    </p>
                    <p>
                      Director: <strong>Mr. Shulammite Nasir</strong>
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
                      href="/assets/images/coppak/ministries/pensa-youth/02.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Youth & PENSA Pakistan"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/pensa-youth/02.jpg"
                        alt="Youth & PENSA Pakistan"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/pensa-youth/03.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Youth & PENSA Pakistan"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/pensa-youth/03.jpg"
                        alt="Youth & PENSA Pakistan"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/pensa-youth/04.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Youth & PENSA Pakistan"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/pensa-youth/04.jpg"
                        alt="Youth & PENSA Pakistan"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/pensa-youth/05.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Youth & PENSA Pakistan"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/pensa-youth/05.jpg"
                        alt="Youth & PENSA Pakistan"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/pensa-youth/06.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Youth & PENSA Pakistan"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/pensa-youth/06.jpg"
                        alt="Youth & PENSA Pakistan"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/pensa-youth/07.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Youth & PENSA Pakistan"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/pensa-youth/07.jpg"
                        alt="Youth & PENSA Pakistan"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/pensa-youth/08.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Youth & PENSA Pakistan"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/pensa-youth/08.jpg"
                        alt="Youth & PENSA Pakistan"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/pensa-youth/09.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Youth & PENSA Pakistan"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/pensa-youth/09.jpg"
                        alt="Youth & PENSA Pakistan"
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
                      Don't let anyone look down on you because you are young,
                      but set an example for the believers.
                    </blockquote>{" "}
                    <figcaption>1 Timothy 4:12</figcaption>{" "}
                  </figure>{" "}
                  <div className="detail-stats">
                    {" "}
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">2024</span>{" "}
                      <span className="detail-stats__label">
                        PENSA launched in Pakistan
                      </span>{" "}
                    </div>
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">Lifelong</span>{" "}
                      <span className="detail-stats__label">
                        Graduates serve as associates
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
                        PENSA Pakistan — Bible study, mentorship, fellowship,
                        and leadership training for students
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Sports ministry evangelism reaching brick-kiln, slum,
                        and village youth
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Discipling graduates as lifelong PENSA associates
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Youth Leadership Seminars and national gatherings
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Equipping a bold witness for Christ in schools,
                        campuses, and workplaces
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
                      Universities and colleges nationwide{" "}
                    </span>
                    <span className="detail-locations__tag">
                      {" "}
                      <i
                        className="fas fa-map-marker-alt"
                        aria-hidden="true"
                      />{" "}
                      Campuses across Pakistan{" "}
                    </span>
                    <span className="detail-locations__tag">
                      {" "}
                      <i
                        className="fas fa-map-marker-alt"
                        aria-hidden="true"
                      />{" "}
                      Brick-kiln and village communities{" "}
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
                      Director, PENSA Pakistan
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
