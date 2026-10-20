import type { Metadata } from "next";
import LegacyScripts from "../../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Adult literacy program | COPPAK.ORG",
  description:
    "A second chance at education for adults — especially women, widows, and brick-kiln workers — across marginalized Christian communities.",
  alternates: { canonical: "/projects/adult-literacy" },
  openGraph: {
    title: "Adult literacy program | COPPAK.ORG",
    description:
      "A second chance at education for adults — especially women, widows, and brick-kiln workers — across marginalized Christian communities.",
    url: "/projects/adult-literacy",
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
  "/scripts/migrated/projects-adult-literacy-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="detail-hero"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(13,22,52,0.95) 0%, rgba(20,42,95,0.88) 46%, rgba(10,20,48,0.78) 100%), url(/assets/images/coppak/projects/adult-literacy/01.jpg)",
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
                    <a href="/projects">Projects</a>{" "}
                  </li>{" "}
                  <li className="detail-hero__crumb-sep" aria-hidden="true">
                    /
                  </li>{" "}
                  <li className="is-current">
                    {" "}
                    <span>Adult literacy program</span>{" "}
                  </li>
                </ul>{" "}
                <span className="detail-hero__eyebrow">Project</span>{" "}
                <h1 className="detail-hero__title">
                  Adult literacy program
                </h1>{" "}
              </div>{" "}
              <div className="detail-hero__collage count-3">
                {" "}
                <a
                  className="detail-hero__photo img-popup"
                  data-group={1}
                  href="/assets/images/coppak/projects/adult-literacy/01.jpg"
                  aria-label="View photo — Adult literacy program"
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/projects/adult-literacy/01.jpg"
                    alt="Adult literacy program"
                    loading="eager"
                  />{" "}
                </a>
                <a
                  className="detail-hero__photo img-popup"
                  data-group={1}
                  href="/assets/images/coppak/projects/adult-literacy/02.jpg"
                  aria-label="View photo — Adult literacy program"
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/projects/adult-literacy/02.jpg"
                    alt="Adult literacy program"
                    loading="eager"
                  />{" "}
                </a>
                <a
                  className="detail-hero__photo img-popup"
                  data-group={1}
                  href="/assets/images/coppak/projects/adult-literacy/03.jpg"
                  aria-label="View photo — Adult literacy program"
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/projects/adult-literacy/03.jpg"
                    alt="Adult literacy program"
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
                  <h3 className="detail-sidebar__heading">Our Projects</h3>{" "}
                  <nav className="detail-sidebar__list">
                    {" "}
                    <a
                      href="/projects/natural-disaster-recovery"
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i
                        className="fas fa-house-damage"
                        aria-hidden="true"
                      />{" "}
                      <span>Disaster recovery</span>{" "}
                    </a>
                    <a
                      href="/projects/free-medical-camps"
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i
                        className="fas fa-stethoscope"
                        aria-hidden="true"
                      />{" "}
                      <span>Free medical camps</span>{" "}
                    </a>
                    <a
                      href="/projects/adult-literacy"
                      className="detail-sidebar__item is-active"
                    >
                      {" "}
                      <i className="fas fa-book-open" aria-hidden="true" />{" "}
                      <span>Adult literacy program</span>{" "}
                    </a>
                    <a
                      href="/projects/bible-translation"
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i className="fas fa-bible" aria-hidden="true" />{" "}
                      <span>Bible translation</span>{" "}
                    </a>
                    <a
                      href="/projects/brick-kiln-deliverance"
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i className="fas fa-unlock" aria-hidden="true" />{" "}
                      <span>Brick-kiln deliverance</span>{" "}
                    </a>
                    <a
                      href="/projects/collective-marriages"
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i className="fas fa-ring" aria-hidden="true" />{" "}
                      <span>Collective marriages</span>{" "}
                    </a>
                    <a
                      href="/projects/persecution"
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i
                        className="fas fa-shield-alt"
                        aria-hidden="true"
                      />{" "}
                      <span>Persecution response</span>{" "}
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
                  <span className="detail-status">Growing</span>{" "}
                  <p className="detail-lead">
                    A second chance at education for adults — especially women,
                    widows, and brick-kiln workers — across marginalized
                    Christian communities.
                  </p>{" "}
                  <div className="detail-body">
                    {" "}
                    <p>
                      The Adult Literacy Program is a life-changing ministry of
                      The Church of Pentecost Pakistan, created to empower
                      disadvantaged adults — especially those from marginalized
                      Christian communities — by giving them the opportunity to
                      learn{" "}
                      <strong>reading, writing, and basic numeracy</strong>.
                    </p>
                    <p>
                      In many parts of Pakistan, poverty, discrimination, and
                      limited educational access prevent children from ever
                      attending school. As these children grow into adults,
                      illiteracy becomes a lifelong barrier that affects
                      employment, dignity, and family stability.
                    </p>
                    <p>
                      Through this program, The Church of Pentecost Pakistan
                      offers adults a{" "}
                      <strong>second chance at education</strong> in a safe,
                      faith-centered, and respectful environment. Learners
                      receive free instruction in simple, practical language so
                      that they can read everyday materials, understand
                      documents, manage finances, and support their children’s
                      schooling.
                    </p>
                    <p>
                      A special focus is placed on{" "}
                      <strong>
                        women, widows, brick-kiln workers, and those
                        historically excluded
                      </strong>{" "}
                      from learning opportunities.
                    </p>
                    <p>
                      The program also helps participants read and understand
                      the Bible in their own language — strengthening both faith
                      and personal confidence. Many learners testify that they
                      now feel valued, independent, and hopeful for the first
                      time in their lives.
                    </p>
                    <p>
                      Beyond academic skills, the Adult Literacy Program
                      restores dignity and transforms families. Parents who once
                      felt powerless now proudly guide their children. Workers
                      gain awareness of their rights. Communities become
                      stronger and more confident.
                    </p>
                    <p>
                      Through education, the Church is{" "}
                      <strong>
                        breaking the cycle of illiteracy and opening doors to a
                        brighter future across Pakistan.
                      </strong>
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
                      href="/assets/images/coppak/projects/adult-literacy/02.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Adult literacy program"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/adult-literacy/02.jpg"
                        alt="Adult literacy program"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/adult-literacy/03.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Adult literacy program"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/adult-literacy/03.jpg"
                        alt="Adult literacy program"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/adult-literacy/04.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Adult literacy program"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/adult-literacy/04.jpg"
                        alt="Adult literacy program"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/adult-literacy/05.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Adult literacy program"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/adult-literacy/05.jpg"
                        alt="Adult literacy program"
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
                      Your word is a lamp for my feet, a light on my path.
                    </blockquote>{" "}
                    <figcaption>Psalm 119:105</figcaption>{" "}
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
                        Free instruction in reading, writing, and basic numeracy
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        A second chance at education in a safe, faith-centered
                        environment
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Special focus on women, widows, and brick-kiln workers
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Helping learners read and understand the Bible in their
                        own language
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Restoring dignity, confidence, and family stability
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
                      Marginalized Christian communities{" "}
                    </span>
                    <span className="detail-locations__tag">
                      {" "}
                      <i
                        className="fas fa-map-marker-alt"
                        aria-hidden="true"
                      />{" "}
                      Brick-kiln settlements{" "}
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
