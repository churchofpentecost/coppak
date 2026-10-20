import type { Metadata } from "next";
import LegacyScripts from "../../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Collective marriages | COPPAK.ORG",
  description:
    "Restoring dignity to vulnerable Christian families — from Joseph Colony (2013) to the brick-kiln daughters of 2024.",
  alternates: { canonical: "/projects/collective-marriages" },
  openGraph: {
    title: "Collective marriages | COPPAK.ORG",
    description:
      "Restoring dignity to vulnerable Christian families — from Joseph Colony (2013) to the brick-kiln daughters of 2024.",
    url: "/projects/collective-marriages",
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
  "/scripts/migrated/projects-collective-marriages-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="detail-hero"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(13,22,52,0.95) 0%, rgba(20,42,95,0.88) 46%, rgba(10,20,48,0.78) 100%), url(/assets/images/coppak/projects/collective-marriages/01.jpg)",
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
                    <span>Collective marriages</span>{" "}
                  </li>
                </ul>{" "}
                <span className="detail-hero__eyebrow">Project</span>{" "}
                <h1 className="detail-hero__title">
                  Collective marriages
                </h1>{" "}
              </div>{" "}
              <div className="detail-hero__video">
                {" "}
                <iframe
                  src="https://www.youtube.com/embed/yhmHVnMzXAc?rel=0"
                  title="Collective marriages — video"
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
                      className="detail-sidebar__item is-active"
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
                    Restoring dignity to vulnerable Christian families — from
                    Joseph Colony (2013) to the brick-kiln daughters of 2024.
                  </p>{" "}
                  <div className="detail-body">
                    {" "}
                    <p>
                      The Church of Pentecost Pakistan is committed to
                      supporting persecuted and vulnerable Christian families,
                      especially those affected by faith-based violence and
                      extreme poverty.
                    </p>
                    <p>
                      This ministry began after the{" "}
                      <strong>2013 attack on Joseph Colony in Lahore</strong>,
                      where over 100 Christian homes were burned. Among the
                      victims were 18 families whose daughters’ dowries were
                      destroyed. In response, the Church organized collective
                      marriages — restoring dignity and hope where ash and fear
                      had taken hold.
                    </p>
                    <p>
                      In <strong>2023</strong>, after the violent attacks in
                      Jaranwala that burned churches and homes, the Church again
                      stood with affected families.{" "}
                      <strong>Nineteen brides</strong> whose dowries had been
                      reduced to ashes were supported through a collective
                      wedding ceremony.
                    </p>
                    <p>
                      In <strong>2024</strong>, the Church helped{" "}
                      <strong>20 daughters of brick-kiln laborers</strong>{" "}
                      trapped in debt bondage. On December 6, 2024, a beautiful
                      ceremony was held at the brick-kiln grounds in Sheikhupura
                      District, where 20 collective marriages were joyfully
                      celebrated. Twenty new families were established that day
                      — families once burdened by fear and poverty, now stepping
                      into a future filled with dignity, faith, and hope.
                    </p>
                    <p>
                      Through this ongoing ministry, The Church of Pentecost
                      Pakistan continues to live out the heart of Christ —
                      restoring dignity, defending the vulnerable, and standing
                      beside persecuted believers so they never suffer alone.
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
                      href="/assets/images/coppak/projects/collective-marriages/02.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Collective marriages"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/collective-marriages/02.jpg"
                        alt="Collective marriages"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/collective-marriages/03.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Collective marriages"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/collective-marriages/03.jpg"
                        alt="Collective marriages"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/collective-marriages/05.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Collective marriages"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/collective-marriages/05.jpg"
                        alt="Collective marriages"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/collective-marriages/07.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Collective marriages"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/collective-marriages/07.jpg"
                        alt="Collective marriages"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/collective-marriages/09.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Collective marriages"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/collective-marriages/09.jpg"
                        alt="Collective marriages"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/collective-marriages/11.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Collective marriages"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/collective-marriages/11.jpg"
                        alt="Collective marriages"
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
                      He will give a crown of beauty instead of ashes, the oil
                      of joy instead of mourning.
                    </blockquote>{" "}
                    <figcaption>Isaiah 61:3</figcaption>{" "}
                  </figure>{" "}
                  <div className="detail-stats">
                    {" "}
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">2013</span>{" "}
                      <span className="detail-stats__label">
                        First ceremony, Joseph Colony
                      </span>{" "}
                    </div>
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">20</span>{" "}
                      <span className="detail-stats__label">
                        Couples married in 2024
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
                        Dignified collective wedding ceremonies for vulnerable
                        families
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Restoring dowries destroyed by faith-based violence
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Standing with families after the Joseph Colony and
                        Jaranwala attacks
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Establishing new families with household essentials
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
                      Lahore{" "}
                    </span>
                    <span className="detail-locations__tag">
                      {" "}
                      <i
                        className="fas fa-map-marker-alt"
                        aria-hidden="true"
                      />{" "}
                      Jaranwala{" "}
                    </span>
                    <span className="detail-locations__tag">
                      {" "}
                      <i
                        className="fas fa-map-marker-alt"
                        aria-hidden="true"
                      />{" "}
                      Sheikhupura District{" "}
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
