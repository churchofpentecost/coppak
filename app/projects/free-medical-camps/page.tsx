import type { Metadata } from "next";
import LegacyScripts from "../../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Free medical camps | COPPAK.ORG",
  description:
    "Doctors, medicines, and prayer — bringing free, dignified medical care to communities that need it most.",
  alternates: { canonical: "/projects/free-medical-camps" },
  openGraph: {
    title: "Free medical camps | COPPAK.ORG",
    description:
      "Doctors, medicines, and prayer — bringing free, dignified medical care to communities that need it most.",
    url: "/projects/free-medical-camps",
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
  "/scripts/migrated/projects-free-medical-camps-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="detail-hero"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(13,22,52,0.95) 0%, rgba(20,42,95,0.88) 46%, rgba(10,20,48,0.78) 100%), url(/assets/images/coppak/projects/medical-camps/01.jpg)",
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
                    <span>Free medical camps</span>{" "}
                  </li>
                </ul>{" "}
                <span className="detail-hero__eyebrow">Project</span>{" "}
                <h1 className="detail-hero__title">Free medical camps</h1>{" "}
              </div>{" "}
              <div className="detail-hero__collage count-3">
                {" "}
                <a
                  className="detail-hero__photo img-popup"
                  data-group={1}
                  href="/assets/images/coppak/projects/medical-camps/01.jpg"
                  aria-label="View photo — Free medical camps"
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/projects/medical-camps/01.jpg"
                    alt="Free medical camps"
                    loading="eager"
                  />{" "}
                </a>
                <a
                  className="detail-hero__photo img-popup"
                  data-group={1}
                  href="/assets/images/coppak/projects/medical-camps/02.jpg"
                  aria-label="View photo — Free medical camps"
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/projects/medical-camps/02.jpg"
                    alt="Free medical camps"
                    loading="eager"
                  />{" "}
                </a>
                <a
                  className="detail-hero__photo img-popup"
                  data-group={1}
                  href="/assets/images/coppak/projects/medical-camps/03.jpg"
                  aria-label="View photo — Free medical camps"
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/projects/medical-camps/03.jpg"
                    alt="Free medical camps"
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
                      className="detail-sidebar__item is-active"
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
                  <span className="detail-status">Recurring</span>{" "}
                  <p className="detail-lead">
                    Doctors, medicines, and prayer — bringing free, dignified
                    medical care to communities that need it most.
                  </p>{" "}
                  <div className="detail-body">
                    {" "}
                    <p>
                      In many Christian communities, families struggle not only
                      with poverty, but also with sickness and the burden of
                      medical expenses. The Church of Pentecost responds by
                      offering <strong>free medical camps</strong> where people
                      receive care, love, and hope —{" "}
                      <strong>without cost and without discrimination</strong>.
                    </p>
                    <p>
                      Doctors and volunteers come together to treat illnesses,
                      provide medicines, share health awareness, and pray with
                      those who are hurting. Every patient is welcomed with
                      compassion, dignity, and the assurance that they are
                      precious in the eyes of God.
                    </p>
                    <p>
                      Through these medical camps, we live out the message of
                      Jesus: to care for the sick, uplift the weak, and bring
                      healing to the broken.
                    </p>
                    <p>
                      To <strong>volunteer as a medical professional</strong> or{" "}
                      <strong>partner in a future camp</strong>, please{" "}
                      <a href="/contact">contact us</a>.
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
                      href="/assets/images/coppak/projects/medical-camps/02.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Free medical camps"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/medical-camps/02.jpg"
                        alt="Free medical camps"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/medical-camps/03.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Free medical camps"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/medical-camps/03.jpg"
                        alt="Free medical camps"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/medical-camps/04.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Free medical camps"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/medical-camps/04.jpg"
                        alt="Free medical camps"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/medical-camps/05.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Free medical camps"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/medical-camps/05.jpg"
                        alt="Free medical camps"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/medical-camps/06.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Free medical camps"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/medical-camps/06.jpg"
                        alt="Free medical camps"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/medical-camps/07.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Free medical camps"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/medical-camps/07.jpg"
                        alt="Free medical camps"
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
                      He heals the brokenhearted and binds up their wounds.
                    </blockquote>{" "}
                    <figcaption>Psalm 147:3</figcaption>{" "}
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
                        Free medical care without cost or discrimination
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Doctors and volunteers treating illness and providing
                        medicines
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Health awareness and education for families
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Prayer and compassionate care for every patient
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
                      Underserved Christian communities{" "}
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
