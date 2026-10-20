import type { Metadata } from "next";
import LegacyScripts from "../../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Children's ministry | COPPAK.ORG",
  description:
    "Loving, teaching, and discipling 1,500+ children every Sunday — restoring hope and faith in the next generation.",
  alternates: { canonical: "/ministries/children" },
  openGraph: {
    title: "Children's ministry | COPPAK.ORG",
    description:
      "Loving, teaching, and discipling 1,500+ children every Sunday — restoring hope and faith in the next generation.",
    url: "/ministries/children",
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
  "/scripts/migrated/ministries-children-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="detail-hero"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(13,22,52,0.95) 0%, rgba(20,42,95,0.88) 46%, rgba(10,20,48,0.78) 100%), url(/assets/images/coppak/ministries/children/01.jpg)",
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
                    <span>Children's ministry</span>{" "}
                  </li>
                </ul>{" "}
                <span className="detail-hero__eyebrow">Ministry</span>{" "}
                <h1 className="detail-hero__title">Children's ministry</h1>{" "}
              </div>{" "}
              <div className="detail-hero__video">
                {" "}
                <iframe
                  src="https://www.youtube.com/embed/TjTv2tz7Nv0?rel=0"
                  title="Children's ministry — video"
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
                      className="detail-sidebar__item is-active"
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
                    Loving, teaching, and discipling 1,500+ children every
                    Sunday — restoring hope and faith in the next generation.
                  </p>{" "}
                  <div className="detail-body">
                    {" "}
                    <p>
                      The Church of Pentecost Pakistan is deeply committed to
                      ministering to children who are growing up in difficult
                      and painful circumstances. Many Christian children in
                      Pakistan face emotional trauma caused by discrimination,
                      poverty, and insecurity. They are often treated unfairly
                      in schools, pressured to hide their faith, or excluded
                      because of their Christian identity. Some even endure
                      social rejection or forced conversions.
                    </p>
                    <p>
                      Every Sunday, the church provides{" "}
                      <strong>
                        breakfast for the children before the service
                      </strong>{" "}
                      begins. Across all assemblies nationwide, special Sunday
                      School classes are held for{" "}
                      <strong>1,523 registered children</strong> — and the
                      number continues to grow daily. These gatherings are safe
                      spaces where children are welcomed, loved, and spiritually
                      nurtured through prayer, storytelling, music, and biblical
                      lessons.
                    </p>
                    <p>
                      The Church organizes annual{" "}
                      <strong>Vacation Bible Schools</strong> in every district,
                      focusing on the spiritual, physical, mental, and social
                      development of children. Beyond spiritual care, the Church
                      also provides leadership training, mentoring, and
                      educational support.
                    </p>
                    <p>
                      Children also participate in public children’s rallies —
                      singing Christian songs and sharing their faith in public
                      spaces. Twice a year, teachers prepare Christian dramas
                      and skits performed on public stages, and through these
                      many parents hear the Gospel for the first time. Every
                      year, the Church holds a{" "}
                      <strong>National Children’s Convention</strong>, where
                      children communicate the Gospel through drama, singing,
                      preaching, storytelling, debating, and biblical artwork.
                    </p>
                    <p>
                      The vision is clear and unwavering:{" "}
                      <strong>
                        to turn pain into purpose, fear into faith, and trauma
                        into triumph
                      </strong>{" "}
                      — raising a new generation of strong, confident, and
                      Spirit-filled leaders who will shape a brighter future for
                      Pakistan.
                    </p>
                    <p>
                      Director: <strong>Amina Mudasir</strong>
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
                      href="/assets/images/coppak/ministries/children/02.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Children's ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/children/02.jpg"
                        alt="Children's ministry"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/children/03.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Children's ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/children/03.jpg"
                        alt="Children's ministry"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/children/05.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Children's ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/children/05.jpg"
                        alt="Children's ministry"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/children/07.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Children's ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/children/07.jpg"
                        alt="Children's ministry"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/children/09.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Children's ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/children/09.jpg"
                        alt="Children's ministry"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/children/11.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Children's ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/children/11.jpg"
                        alt="Children's ministry"
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
                      Let the little children come to me, and do not hinder
                      them, for the kingdom of heaven belongs to such as these.
                    </blockquote>{" "}
                    <figcaption>Matthew 19:14</figcaption>{" "}
                  </figure>{" "}
                  <div className="detail-stats">
                    {" "}
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">1,523</span>{" "}
                      <span className="detail-stats__label">
                        Registered children
                      </span>{" "}
                    </div>
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">8</span>{" "}
                      <span className="detail-stats__label">
                        Districts reached
                      </span>{" "}
                    </div>
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">Annual</span>{" "}
                      <span className="detail-stats__label">
                        Children's Convention
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
                        Sunday School classes for 1,500+ registered children
                        across every assembly
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Free breakfast for children before each Sunday service
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Annual Vacation Bible Schools in every district
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Christian dramas and skits performed on public stages
                        twice a year
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        National Children's Convention — drama, singing,
                        preaching, and biblical art
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Leadership training, mentoring, and educational support
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
                      Every COPPAK assembly{" "}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="detail-leader">
                  {" "}
                  <div className="detail-leader__photo">
                    {" "}
                    <img
                      src="/assets/images/coppak/about/team/amina-mudasir.jpg"
                      alt="Amina Mudasir"
                    />{" "}
                  </div>{" "}
                  <div className="detail-leader__info">
                    {" "}
                    <span className="detail-eyebrow">Leadership</span>{" "}
                    <h4 className="detail-leader__name">Amina Mudasir</h4>{" "}
                    <p className="detail-leader__role">
                      Children's Ministry Director
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
