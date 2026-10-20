import type { Metadata } from "next";
import LegacyScripts from "../../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Leadership Conferences | COPPAK.ORG",
  description:
    "Training pastors and church workers across Pakistan to transform society through the Gospel — in-person and virtual, with printed Urdu resources for every district.",
  alternates: { canonical: "/conferences/leadership-conferences" },
  openGraph: {
    title: "Leadership Conferences | COPPAK.ORG",
    description:
      "Training pastors and church workers across Pakistan to transform society through the Gospel — in-person and virtual, with printed Urdu resources for every district.",
    url: "/conferences/leadership-conferences",
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
  "/scripts/migrated/conferences-leadership-conferences-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="detail-hero"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(13,22,52,0.95) 0%, rgba(20,42,95,0.88) 46%, rgba(10,20,48,0.78) 100%), url(/assets/images/coppak/conferences/leadership/01.jpg)",
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
                    <span>Leadership Conferences</span>{" "}
                  </li>
                </ul>{" "}
                <span className="detail-hero__eyebrow">Conference</span>{" "}
                <h1 className="detail-hero__title">
                  Leadership Conferences
                </h1>{" "}
              </div>{" "}
              <div className="detail-hero__collage count-3">
                {" "}
                <a
                  className="detail-hero__photo img-popup"
                  data-group={1}
                  href="/assets/images/coppak/conferences/leadership/01.jpg"
                  aria-label="View photo — Leadership Conferences"
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/conferences/leadership/01.jpg"
                    alt="Leadership Conferences"
                    loading="eager"
                  />{" "}
                </a>
                <a
                  className="detail-hero__photo img-popup"
                  data-group={1}
                  href="/assets/images/coppak/conferences/leadership/02.jpg"
                  aria-label="View photo — Leadership Conferences"
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/conferences/leadership/02.jpg"
                    alt="Leadership Conferences"
                    loading="eager"
                  />{" "}
                </a>
                <a
                  className="detail-hero__photo img-popup"
                  data-group={1}
                  href="/assets/images/coppak/conferences/leadership/03.jpg"
                  aria-label="View photo — Leadership Conferences"
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/conferences/leadership/03.jpg"
                    alt="Leadership Conferences"
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
                      className="detail-sidebar__item is-active"
                    >
                      {" "}
                      <i className="fas fa-user-tie" aria-hidden="true" />{" "}
                      <span>Leadership Conferences</span>{" "}
                    </a>
                    <a
                      href="/conferences/christian-apologetics"
                      className="detail-sidebar__item"
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
                    Training pastors and church workers across Pakistan to
                    transform society through the Gospel — in-person and
                    virtual, with printed Urdu resources for every district.
                  </p>{" "}
                  <div className="detail-body">
                    {" "}
                    <p>
                      The Church of Pentecost Pakistan urgently needs strong,
                      well-equipped, and spiritually mature leadership. For this
                      reason, the Church organises{" "}
                      <strong>leadership conferences</strong> to train and
                      empower leaders to transform society through the power of
                      the Gospel and the Holy Spirit.
                    </p>
                    <h3 id="our-priorities">Our priorities</h3>
                    <p>
                      <strong>Sound biblical and theological education</strong>{" "}
                      — Leaders need systematic and in-depth training in
                      Scripture, Christian doctrine, apologetics, and contextual
                      theology. This equips them to confidently present the
                      Gospel in a predominantly Muslim context while remaining
                      faithful to biblical truth.
                    </p>
                    <p>
                      <strong>Advanced leadership skills</strong> — Beyond
                      theological knowledge, pastors and church workers require
                      leadership development in areas such as communication,
                      conflict resolution, pastoral care, administration, and
                      community engagement.
                    </p>
                    <p>
                      <strong>Ongoing training and capacity building</strong> —
                      Leadership development should not be a one-time event but
                      a continuous process. Regular seminars, workshops, and
                      conferences are essential for spiritual growth and
                      ministry effectiveness.
                    </p>
                    <h3 id="in-person-and-virtual">In-person and virtual</h3>
                    <p>
                      The Church of Pentecost International holds conferences in
                      different parts of the world. However, due to financial,
                      visa, or logistical limitations, many local leaders in
                      Pakistan are unable to attend in person. In such cases,
                      the Church arranges <strong>online participation</strong>{" "}
                      so that leaders can still benefit from teaching and
                      fellowship. Virtual leadership conferences have become an
                      important tool. Whenever possible,{" "}
                      <strong>in-person conferences</strong> are also organised
                      to allow for deeper interaction and practical training.
                    </p>
                    <h3 id="multiplication-through-printed-resources">
                      Multiplication through printed resources
                    </h3>
                    <p>
                      Another important practice of the Church is the
                      preparation and distribution of{" "}
                      <strong>printed training materials</strong> for
                      participants. These materials serve as lasting resources
                      that leaders can study, preserve, and later use to train
                      others in their local congregations. This multiplication
                      approach ensures that the knowledge gained by a few
                      leaders spreads to many churches and believers.
                    </p>
                    <p>
                      The future strength of the Church in Pakistan depends
                      greatly on the development of biblically sound,
                      spiritually mature, and well-trained leaders. Through
                      strategic partnerships, continuous training, and effective
                      resource distribution, the Church remains faithful to its
                      mission and confidently proclaims the Gospel in a
                      challenging environment.
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
                      href="/assets/images/coppak/conferences/leadership/02.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Leadership Conferences"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/leadership/02.jpg"
                        alt="Leadership Conferences"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/conferences/leadership/03.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Leadership Conferences"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/leadership/03.jpg"
                        alt="Leadership Conferences"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/conferences/leadership/04.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Leadership Conferences"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/leadership/04.jpg"
                        alt="Leadership Conferences"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/conferences/leadership/05.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Leadership Conferences"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/leadership/05.jpg"
                        alt="Leadership Conferences"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/conferences/leadership/06.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Leadership Conferences"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/leadership/06.jpg"
                        alt="Leadership Conferences"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/conferences/leadership/07.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Leadership Conferences"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/leadership/07.jpg"
                        alt="Leadership Conferences"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/conferences/leadership/08.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Leadership Conferences"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/leadership/08.jpg"
                        alt="Leadership Conferences"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/conferences/leadership/09.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Leadership Conferences"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/leadership/09.jpg"
                        alt="Leadership Conferences"
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
                      And the things you have heard me say in the presence of
                      many witnesses entrust to reliable people who will also be
                      qualified to teach others.
                    </blockquote>{" "}
                    <figcaption>2 Timothy 2:2</figcaption>{" "}
                  </figure>{" "}
                  <div className="detail-stats">
                    {" "}
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">8</span>{" "}
                      <span className="detail-stats__label">
                        Districts equipped
                      </span>{" "}
                    </div>
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">Urdu</span>{" "}
                      <span className="detail-stats__label">
                        Printed training resources
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
                        Sound biblical and theological education — Scripture,
                        doctrine, apologetics, contextual theology
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Advanced leadership skills — communication, pastoral
                        care, administration, conflict resolution
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Ongoing training and capacity building through regular
                        seminars and workshops
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Online participation for leaders unable to travel;
                        in-person conferences whenever possible
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Printed training materials distributed for
                        multiplication into local congregations
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
                      Pakistan (in-person and online){" "}
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
