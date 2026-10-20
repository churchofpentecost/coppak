import type { Metadata } from "next";
import LegacyScripts from "../../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Bible translation | COPPAK.ORG",
  description:
    "Translating Scripture into Marwari, Hindko, Saraiki, Potohari, and Kashmiri — in partnership with Wycliffe Associates.",
  alternates: { canonical: "/projects/bible-translation" },
  openGraph: {
    title: "Bible translation | COPPAK.ORG",
    description:
      "Translating Scripture into Marwari, Hindko, Saraiki, Potohari, and Kashmiri — in partnership with Wycliffe Associates.",
    url: "/projects/bible-translation",
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
  "/scripts/migrated/projects-bible-translation-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="detail-hero"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(13,22,52,0.95) 0%, rgba(20,42,95,0.88) 46%, rgba(10,20,48,0.78) 100%), url(/assets/images/coppak/projects/bible-translation/01.png)",
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
                    <span>Bible translation</span>{" "}
                  </li>
                </ul>{" "}
                <span className="detail-hero__eyebrow">Project</span>{" "}
                <h1 className="detail-hero__title">Bible translation</h1>{" "}
              </div>{" "}
              <div className="detail-hero__video">
                {" "}
                <iframe
                  src="https://www.youtube.com/embed/d2OYkhN6Dk8?rel=0"
                  title="Bible translation — video"
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
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i className="fas fa-book-open" aria-hidden="true" />{" "}
                      <span>Adult literacy program</span>{" "}
                    </a>
                    <a
                      href="/projects/bible-translation"
                      className="detail-sidebar__item is-active"
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
                  <span className="detail-status">In progress</span>{" "}
                  <p className="detail-lead">
                    Translating Scripture into Marwari, Hindko, Saraiki,
                    Potohari, and Kashmiri — in partnership with Wycliffe
                    Associates.
                  </p>{" "}
                  <div className="detail-body">
                    {" "}
                    <p>
                      This project is an initiative of The Church of Pentecost
                      Pakistan, under the direction of the International Office
                      in Ghana, in partnership with{" "}
                      <strong>Wycliffe Associates</strong>. It is a purposeful
                      and far-reaching effort to make God’s Word available to
                      unreached people groups across Pakistan in languages they
                      clearly understand and personally relate to.
                    </p>
                    <p>
                      The partnership reflects a shared conviction that access
                      to Scripture should not be limited by language, culture,
                      or geography. Through this collaboration, communities that
                      have never had the Bible in their mother tongue are being
                      given the opportunity to read, hear, and engage with
                      Scripture in a meaningful way for the first time.
                    </p>
                    <p>
                      This initiative has been made possible through the vision
                      and leadership of national church leaders, supported by
                      the faithful service of delegates, translators,
                      facilitators, and technical teams from{" "}
                      <strong>Pakistan and the Philippines</strong>.
                    </p>
                    <h3 id="languages">Languages</h3>
                    <p>
                      The primary objective of the project is the translation of
                      the Holy Bible into key regional languages spoken by
                      millions of people across Pakistan:
                    </p>
                    <ul>
                      <li>
                        <strong>Marwari</strong>
                      </li>
                      <li>
                        <strong>Hindko</strong>
                      </li>
                      <li>
                        <strong>Saraiki</strong>
                      </li>
                      <li>
                        <strong>Potohari</strong>
                      </li>
                      <li>
                        <strong>Kashmiri</strong>
                      </li>
                    </ul>
                    <p>
                      For many communities within these language groups, this
                      work represents their very{" "}
                      <strong>
                        first encounter with the Scriptures in words that
                        reflect their own identity, worldview, and daily
                        experience.
                      </strong>{" "}
                      While these languages mark an important beginning, the
                      vision extends further — many additional language groups
                      across Pakistan still await access to God’s Word.
                    </p>
                    <p>
                      A vital component of this initiative is the provision of
                      training, technology, translation tools, and other
                      essential resources. By equipping local believers to carry
                      out and sustain the work, the project ensures that
                      translation remains accurate, faithful to Scripture, and
                      firmly rooted in the life of the local church.
                    </p>
                    <p>
                      As Wycliffe Associates and The Church of Pentecost
                      Pakistan continue in this God-given mission, believers
                      everywhere are encouraged to stand with us in prayer — for
                      wisdom, unity, protection, excellence in translation, and
                      spiritual strength for all who are involved.
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
                      href="/assets/images/coppak/projects/bible-translation/02.png"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Bible translation"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/bible-translation/02.png"
                        alt="Bible translation"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/bible-translation/03.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Bible translation"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/bible-translation/03.jpg"
                        alt="Bible translation"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/bible-translation/04.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Bible translation"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/bible-translation/04.jpg"
                        alt="Bible translation"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/bible-translation/06.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Bible translation"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/bible-translation/06.jpg"
                        alt="Bible translation"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/bible-translation/07.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Bible translation"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/bible-translation/07.jpg"
                        alt="Bible translation"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/bible-translation/08.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Bible translation"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/bible-translation/08.jpg"
                        alt="Bible translation"
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
                      The grass withers and the flowers fall, but the word of
                      our God endures forever.
                    </blockquote>{" "}
                    <figcaption>Isaiah 40:8</figcaption>{" "}
                  </figure>{" "}
                  <div className="detail-stats">
                    {" "}
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">5</span>{" "}
                      <span className="detail-stats__label">
                        Heart languages
                      </span>{" "}
                    </div>
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">Wycliffe</span>{" "}
                      <span className="detail-stats__label">
                        Translation partner
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
                        Translating Scripture into Marwari, Hindko, Saraiki,
                        Potohari, and Kashmiri
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Partnership with Wycliffe Associates and the
                        International Office in Ghana
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Training, technology, and translation tools for local
                        believers
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Equipping the local church to sustain accurate, faithful
                        translation
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
                      Regional language communities across Pakistan{" "}
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
