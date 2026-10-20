import type { Metadata } from "next";
import LegacyScripts from "../../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Persecution response | COPPAK.ORG",
  description:
    "Practical relief and steady accompaniment for Christian families affected by faith-based persecution in Pakistan.",
  alternates: { canonical: "/projects/persecution" },
  openGraph: {
    title: "Persecution response | COPPAK.ORG",
    description:
      "Practical relief and steady accompaniment for Christian families affected by faith-based persecution in Pakistan.",
    url: "/projects/persecution",
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
  "/scripts/migrated/projects-persecution-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="detail-hero"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(13,22,52,0.95) 0%, rgba(20,42,95,0.88) 46%, rgba(10,20,48,0.78) 100%), url(/assets/images/coppak/projects/persecution/01.jpg)",
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
                    <span>Persecution response</span>{" "}
                  </li>
                </ul>{" "}
                <span className="detail-hero__eyebrow">Project</span>{" "}
                <h1 className="detail-hero__title">
                  Persecution response
                </h1>{" "}
              </div>{" "}
              <div className="detail-hero__video">
                {" "}
                <iframe
                  src="https://www.youtube.com/embed/iEJM8H-lSJs?rel=0"
                  title="Persecution response — video"
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
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i className="fas fa-ring" aria-hidden="true" />{" "}
                      <span>Collective marriages</span>{" "}
                    </a>
                    <a
                      href="/projects/persecution"
                      className="detail-sidebar__item is-active"
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
                  <span className="detail-status">Ongoing</span>{" "}
                  <p className="detail-lead">
                    Practical relief and steady accompaniment for Christian
                    families affected by faith-based persecution in Pakistan.
                  </p>{" "}
                  <div className="detail-body">
                    {" "}
                    <h2 id="faith-compassion-and-action">
                      Faith, Compassion, and Action
                    </h2>
                    <p>
                      The Church of Pentecost is deeply committed to standing
                      with believers who suffer persecution because of their
                      faith in Jesus Christ. This commitment flows from our
                      biblical mandate, our Pentecostal heritage, and our
                      conviction that the gospel must be lived out in love and
                      action.
                    </p>
                    <p>
                      Around the world, many Christians face daily threats
                      simply for following Christ. Pakistan is among the
                      countries where Christians experience intense faith-based
                      persecution. In some communities, believers have endured{" "}
                      <strong>
                        mob attacks, the burning of homes, forced displacement,
                        and social exclusion
                      </strong>
                      . These acts of violence leave families traumatized,
                      vulnerable, and without basic necessities.
                    </p>
                    <h2 id="our-response-the-love-of-christ-in-action">
                      Our response: the love of Christ in action
                    </h2>
                    <p>
                      When persecution strikes, The Church of Pentecost responds
                      with compassion and urgency. We believe that the church
                      must not only pray, but also act. Guided by the love of
                      Christ, we step in to support affected families and
                      communities with practical relief and long-term care.
                    </p>
                    <p>Our support includes:</p>
                    <ul>
                      <li>Emergency food items and clean drinking water</li>
                      <li>Temporary shelter and household supplies</li>
                      <li>Clothing and essential home items</li>
                      <li>Cooking supplies</li>
                      <li>Hygiene and sanitation materials</li>
                      <li>Health-care support and first aid</li>
                      <li>
                        Electricity solutions, lighting, fans, and basic
                        utilities
                      </li>
                    </ul>
                    <h2 id="caring-for-children-and-families">
                      Caring for children and families
                    </h2>
                    <p>
                      Children are often the most affected during times of
                      crisis. The Church of Pentecost places special emphasis on
                      restoring hope and stability for young lives by providing:
                    </p>
                    <ul>
                      <li>
                        School supplies — books, notebooks, pencils, and school
                        bags
                      </li>
                      <li>Diapers and essential care items for babies</li>
                      <li>Milk powder and nutritious baby food</li>
                    </ul>
                    <p>
                      Through these efforts, we help families regain dignity and
                      ensure that children can continue learning, growing, and
                      dreaming, even in the midst of hardship.
                    </p>
                    <h2 id="a-message-of-hope">A message of hope</h2>
                    <p>
                      To persecuted Christians, our message is clear:{" "}
                      <strong>
                        you are not forgotten. You are not alone. Your faith
                        matters.
                      </strong>
                    </p>
                    <p>
                      Through prayer, relief, and ongoing support, The Church of
                      Pentecost continues to stand with persecuted believers in
                      Pakistan and beyond — proclaiming the love of Christ not
                      only with words, but with compassionate action.
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
                      href="/assets/images/coppak/projects/persecution/03.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Persecution response"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/persecution/03.jpg"
                        alt="Persecution response"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/persecution/04.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Persecution response"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/persecution/04.jpg"
                        alt="Persecution response"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/persecution/05.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Persecution response"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/persecution/05.jpg"
                        alt="Persecution response"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/persecution/06.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Persecution response"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/persecution/06.jpg"
                        alt="Persecution response"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/persecution/08.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Persecution response"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/persecution/08.jpg"
                        alt="Persecution response"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/persecution/10.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Persecution response"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/persecution/10.jpg"
                        alt="Persecution response"
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
                      Blessed are those who are persecuted because of
                      righteousness, for theirs is the kingdom of heaven.
                    </blockquote>{" "}
                    <figcaption>Matthew 5:10</figcaption>{" "}
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
                        Emergency food, clean drinking water, and temporary
                        shelter
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Clothing, household, and hygiene supplies
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>Health-care support and first aid</span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        School supplies and baby essentials for affected
                        children
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Prayer and steady accompaniment for traumatized families
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
                      Communities affected by faith-based violence{" "}
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
