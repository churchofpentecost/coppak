import type { Metadata } from "next";
import LegacyScripts from "../../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Brick-kiln deliverance | COPPAK.ORG",
  description:
    "Rescuing Christian families from generational bonded labour — paying their debts, restoring freedom, educating their children.",
  alternates: { canonical: "/projects/brick-kiln-deliverance" },
  openGraph: {
    title: "Brick-kiln deliverance | COPPAK.ORG",
    description:
      "Rescuing Christian families from generational bonded labour — paying their debts, restoring freedom, educating their children.",
    url: "/projects/brick-kiln-deliverance",
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
  "/scripts/migrated/projects-brick-kiln-deliverance-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="detail-hero"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(13,22,52,0.95) 0%, rgba(20,42,95,0.88) 46%, rgba(10,20,48,0.78) 100%), url(/assets/images/coppak/projects/brick-kiln/01.jpg)",
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
                    <span>Brick-kiln deliverance</span>{" "}
                  </li>
                </ul>{" "}
                <span className="detail-hero__eyebrow">Project</span>{" "}
                <h1 className="detail-hero__title">
                  Brick-kiln deliverance
                </h1>{" "}
              </div>{" "}
              <div className="detail-hero__video">
                {" "}
                <iframe
                  src="https://www.youtube.com/embed/R12hBdFg5fE?rel=0"
                  title="Brick-kiln deliverance — video"
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
                      className="detail-sidebar__item is-active"
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
                  <span className="detail-status">Ongoing</span>{" "}
                  <p className="detail-lead">
                    Rescuing Christian families from generational bonded labour
                    — paying their debts, restoring freedom, educating their
                    children.
                  </p>{" "}
                  <div className="detail-body">
                    {" "}
                    <h2 id="restoring-freedom-and-dignity-to-brick-kiln-families">
                      Restoring freedom and dignity to brick-kiln families
                    </h2>
                    <p>
                      We rescue Christian brick-kiln families from bonded
                      labour, pay their debts, provide small-business support,
                      ensure children receive education, support vulnerable
                      young women with dignity, and restore families to a life
                      of freedom, faith, and hope.
                    </p>
                    <p>
                      Across Pakistan, thousands of brick kilns operate —
                      especially in Punjab and Sindh — producing the bricks used
                      for homes, roads, and major construction. Behind this
                      industry are thousands of marginalized Christian families
                      who work under extremely harsh and exhausting conditions.
                      Entire families, including children, work long hours
                      shaping and carrying bricks in intense heat and heavy
                      dust.
                    </p>
                    <h2 id="the-peshgi-system">The peshgi system</h2>
                    <p>
                      One of the greatest injustices these families face is the{" "}
                      <strong>“peshgi” (advance loan) system</strong>. Families
                      borrow money for survival needs — medical treatment, food,
                      shelter, or wedding expenses. In return, they are forced
                      to work at the kiln to repay the debt. Because wages are
                      extremely low and deductions are unfair, the debt almost
                      never ends. It is often passed down from parents to
                      children, creating{" "}
                      <strong>generational bonded labour</strong> — even though
                      it is illegal under Pakistan’s Bonded Labour Abolition Act
                      (1992).
                    </p>
                    <p>
                      As a result, many brick-kiln families suffer unsafe and
                      unhealthy conditions, discrimination, emotional trauma,
                      lack of legal protection, and poverty that crushes human
                      dignity. Children grow up working instead of going to
                      school, and many never experience true freedom.
                    </p>
                    <h2 id="our-response">Our response</h2>
                    <p>
                      The Church of Pentecost Pakistan has launched an ongoing
                      humanitarian and faith-based project focused on freeing
                      Christian families trapped in brick-kiln bonded labour and
                      rebuilding their lives with dignity.
                    </p>
                    <p>
                      <strong>1. Debt release.</strong> Through the generosity
                      of believers and ministry partners, the Church pays off
                      outstanding loans and ensures legal release from kiln
                      bondage.
                    </p>
                    <p>
                      <strong>2. Small-business startup support.</strong> After
                      release, the Church provides startup capital, tools,
                      equipment, and small-business guidance so families can
                      begin sustainable income-generating work — tailoring,
                      vending, livestock rearing, small shops, or skilled
                      labour.
                    </p>
                    <p>
                      <strong>3. Education for children.</strong> The Church
                      ensures that children from rescued families attend school
                      rather than work at the kilns — school admission
                      assistance, learning materials, and ongoing encouragement.
                    </p>
                    <p>
                      <strong>4. Support for vulnerable young women.</strong>{" "}
                      Many young girls from brick-kiln families face severe
                      social pressure and economic hardship. In compassion, the
                      Church helps arrange simple and dignified wedding
                      ceremonies and provides basic household items — protecting
                      their dignity and preventing exploitation.
                    </p>
                    <p>
                      <strong>5. Spiritual, emotional, and social care.</strong>{" "}
                      Rescued families receive prayer support, pastoral
                      guidance, counseling, encouragement, and Christian
                      fellowship.
                    </p>
                    <h2 id="our-mission">Our mission</h2>
                    <blockquote>
                      <p>
                        <em>
                          To replace slavery with freedom, despair with hope,
                          and poverty with dignity — in the name of Jesus
                          Christ.
                        </em>
                      </p>
                    </blockquote>
                    <p>
                      The Church of Pentecost Pakistan believes that caring for
                      the oppressed is not only humanitarian work — it is a holy
                      responsibility entrusted by God.
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
                      href="/assets/images/coppak/projects/brick-kiln/02.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Brick-kiln deliverance"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/brick-kiln/02.jpg"
                        alt="Brick-kiln deliverance"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/brick-kiln/04.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Brick-kiln deliverance"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/brick-kiln/04.jpg"
                        alt="Brick-kiln deliverance"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/brick-kiln/06.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Brick-kiln deliverance"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/brick-kiln/06.jpg"
                        alt="Brick-kiln deliverance"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/brick-kiln/08.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Brick-kiln deliverance"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/brick-kiln/08.jpg"
                        alt="Brick-kiln deliverance"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/brick-kiln/10.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Brick-kiln deliverance"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/brick-kiln/10.jpg"
                        alt="Brick-kiln deliverance"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/projects/brick-kiln/12.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Brick-kiln deliverance"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/projects/brick-kiln/12.jpg"
                        alt="Brick-kiln deliverance"
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
                      He has sent me to proclaim freedom for the prisoners and
                      release from darkness for the prisoners.
                    </blockquote>{" "}
                    <figcaption>Isaiah 61:1</figcaption>{" "}
                  </figure>{" "}
                  <div className="detail-stats">
                    {" "}
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">1992</span>{" "}
                      <span className="detail-stats__label">
                        Bonded Labour Abolition Act
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
                        Paying off outstanding peshgi debts and securing legal
                        release
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Small-business startup capital, tools, and guidance
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        School admission and learning materials for children
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Dignified support for vulnerable young women
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Prayer, counseling, and Christian fellowship for rescued
                        families
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
                      Punjab brick kilns{" "}
                    </span>
                    <span className="detail-locations__tag">
                      {" "}
                      <i
                        className="fas fa-map-marker-alt"
                        aria-hidden="true"
                      />{" "}
                      Sindh brick kilns{" "}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="detail-leader">
                  {" "}
                  <div className="detail-leader__photo">
                    {" "}
                    <img
                      src="/assets/images/coppak/about/team/zohaib-qasir.jpg"
                      alt="Pastor Zohaib Qasir"
                    />{" "}
                  </div>{" "}
                  <div className="detail-leader__info">
                    {" "}
                    <span className="detail-eyebrow">Leadership</span>{" "}
                    <h4 className="detail-leader__name">Pastor Zohaib Qasir</h4>{" "}
                    <p className="detail-leader__role">National Deacon</p>{" "}
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
