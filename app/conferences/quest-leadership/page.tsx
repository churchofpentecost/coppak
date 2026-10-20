import type { Metadata } from "next";
import LegacyScripts from "../../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Quest Leadership Conference | COPPAK.ORG",
  description:
    "One of the largest Christian leadership gatherings in Pakistan — 1,500+ pastors, legislators, and marketplace leaders, in partnership with PAOC and Quest Leadership, with all materials translated into Urdu.",
  alternates: { canonical: "/conferences/quest-leadership" },
  openGraph: {
    title: "Quest Leadership Conference | COPPAK.ORG",
    description:
      "One of the largest Christian leadership gatherings in Pakistan — 1,500+ pastors, legislators, and marketplace leaders, in partnership with PAOC and Quest Leadership, with all materials translated into Urdu.",
    url: "/conferences/quest-leadership",
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
  "/scripts/migrated/conferences-quest-leadership-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="detail-hero"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(13,22,52,0.95) 0%, rgba(20,42,95,0.88) 46%, rgba(10,20,48,0.78) 100%), url(/assets/images/coppak/conferences/quest-leadership/01.jpg)",
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
                    <span>Quest Leadership Conference</span>{" "}
                  </li>
                </ul>{" "}
                <span className="detail-hero__eyebrow">Conference</span>{" "}
                <h1 className="detail-hero__title">
                  Quest Leadership Conference
                </h1>{" "}
              </div>{" "}
              <div className="detail-hero__collage count-3">
                {" "}
                <a
                  className="detail-hero__photo img-popup"
                  data-group={1}
                  href="/assets/images/coppak/conferences/quest-leadership/01.jpg"
                  aria-label="View photo — Quest Leadership Conference"
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/conferences/quest-leadership/01.jpg"
                    alt="Quest Leadership Conference"
                    loading="eager"
                  />{" "}
                </a>
                <a
                  className="detail-hero__photo img-popup"
                  data-group={1}
                  href="/assets/images/coppak/conferences/quest-leadership/02.jpg"
                  aria-label="View photo — Quest Leadership Conference"
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/conferences/quest-leadership/02.jpg"
                    alt="Quest Leadership Conference"
                    loading="eager"
                  />{" "}
                </a>
                <a
                  className="detail-hero__photo img-popup"
                  data-group={1}
                  href="/assets/images/coppak/conferences/quest-leadership/06.jpg"
                  aria-label="View photo — Quest Leadership Conference"
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/conferences/quest-leadership/06.jpg"
                    alt="Quest Leadership Conference"
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
                      className="detail-sidebar__item"
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
                      className="detail-sidebar__item is-active"
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
                    One of the largest Christian leadership gatherings in
                    Pakistan — 1,500+ pastors, legislators, and marketplace
                    leaders, in partnership with PAOC and Quest Leadership, with
                    all materials translated into Urdu.
                  </p>{" "}
                  <div className="detail-body">
                    {" "}
                    <h2 id="equipping-and-training-the-leadership-of-the-church-in-pakistan">
                      Equipping and training the leadership of the Church in
                      Pakistan
                    </h2>
                    <p>
                      The Quest Leadership Conference was a powerful and
                      historic leadership training initiative hosted by The
                      Church of Pentecost Pakistan with the purpose of{" "}
                      <strong>equipping, strengthening, and empowering</strong>{" "}
                      Christian leaders and ministries across Pakistan.
                    </p>
                    <p>
                      Quest exists to equip church and marketplace leaders to
                      pursue{" "}
                      <strong>
                        character formation, spiritual development, and
                        leadership excellence
                      </strong>
                      . Its mission is to encourage intergenerational leaders to
                      walk toward a lasting legacy of effective, efficient, and
                      Spirit-empowered leadership. Through onsite conferences
                      and online courses, Quest provides non-formal leadership
                      training that prepares leaders for greater service in the
                      Church and society.
                    </p>
                    <h3 id="partnership-and-reach">Partnership and reach</h3>
                    <p>
                      In partnership with{" "}
                      <strong>PAOC and Quest Leadership</strong>, The Church of
                      Pentecost Pakistan hosted this major leadership training
                      conference to prepare leaders for effective ministry,
                      community transformation, and national impact. Through
                      this initiative, Quest and The Church of Pentecost
                      Pakistan have reached{" "}
                      <strong>thousands of leaders</strong>, both in person and
                      through social media platforms.
                    </p>
                    <p>
                      One of the most significant achievements of this training
                      was the{" "}
                      <strong>
                        translation of Quest training materials into the Urdu
                        language
                      </strong>{" "}
                      by The Church of Pentecost Pakistan. This made the
                      teaching accessible, practical, and meaningful for
                      pastors, church workers, and marketplace leaders across
                      the country. It enabled participants to receive leadership
                      training in a language they could clearly understand and
                      apply in their ministries, workplaces, and communities.
                    </p>
                    <p>
                      The conference became one of the largest and most powerful
                      Christian leadership gatherings in Pakistan, bringing
                      together{" "}
                      <strong>
                        more than 1,500 bishops, pastors, legislators, medical
                        professionals, social workers, ministry leaders,
                        marketplace leaders, and Christian representatives
                      </strong>{" "}
                      from different parts of the nation. It served as a
                      meaningful platform for teaching, fellowship, worship,
                      leadership development, and spiritual renewal.
                    </p>
                    <h3 id="teaching-content">Teaching content</h3>
                    <p>
                      Throughout the training, the speakers delivered strong and
                      practical teachings on:
                    </p>
                    <ul>
                      <li>Christian leadership</li>
                      <li>Ministry development</li>
                      <li>Spiritual formation</li>
                      <li>Servant leadership</li>
                      <li>Marketplace influence</li>
                      <li>
                        The responsibility of leaders in the Church and society
                      </li>
                    </ul>
                    <p>
                      The sessions encouraged pastors, bishops, ministry
                      workers, professionals, and Christian leaders to serve
                      with{" "}
                      <strong>
                        wisdom, humility, courage, integrity, excellence, and
                        faithfulness
                      </strong>
                      .
                    </p>
                    <h3 id="materials-and-certificates">
                      Materials and certificates
                    </h3>
                    <p>
                      The Church of Pentecost Pakistan provided Quest training
                      materials in Urdu to every delegate, helping participants
                      continue their learning even after the conference. At the
                      conclusion of the training,{" "}
                      <strong>
                        certificates were distributed among the delegates
                      </strong>{" "}
                      in recognition of their participation, commitment, and
                      desire to grow as effective and Spirit-filled leaders.
                    </p>
                    <p>
                      The Church of Pentecost Pakistan gives thanks to God for
                      this impactful gathering and expresses sincere
                      appreciation to every guest speaker, partner, leader,
                      pastor, and participant who contributed to the success of
                      this historic conference.
                    </p>
                    <blockquote>
                      <p>
                        <em>To God be all the glory!</em>
                      </p>
                    </blockquote>
                  </div>{" "}
                </div>{" "}
                <div className="detail-gallery-block">
                  {" "}
                  <span className="detail-eyebrow">In pictures</span>{" "}
                  <h3 className="detail-gallery__title">Gallery</h3>{" "}
                  <div className="detail-gallery">
                    {" "}
                    <a
                      href="/assets/images/coppak/conferences/quest-leadership/02.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Quest Leadership Conference"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/quest-leadership/02.jpg"
                        alt="Quest Leadership Conference"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/conferences/quest-leadership/06.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Quest Leadership Conference"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/quest-leadership/06.jpg"
                        alt="Quest Leadership Conference"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/conferences/quest-leadership/10.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Quest Leadership Conference"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/quest-leadership/10.jpg"
                        alt="Quest Leadership Conference"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/conferences/quest-leadership/14.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Quest Leadership Conference"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/quest-leadership/14.jpg"
                        alt="Quest Leadership Conference"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/conferences/quest-leadership/18.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Quest Leadership Conference"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/quest-leadership/18.jpg"
                        alt="Quest Leadership Conference"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/conferences/quest-leadership/22.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Quest Leadership Conference"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/quest-leadership/22.jpg"
                        alt="Quest Leadership Conference"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/conferences/quest-leadership/28.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Quest Leadership Conference"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/quest-leadership/28.jpg"
                        alt="Quest Leadership Conference"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/conferences/quest-leadership/34.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Quest Leadership Conference"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/quest-leadership/34.jpg"
                        alt="Quest Leadership Conference"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/conferences/quest-leadership/40.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Quest Leadership Conference"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/quest-leadership/40.jpg"
                        alt="Quest Leadership Conference"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/conferences/quest-leadership/46.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Quest Leadership Conference"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/conferences/quest-leadership/46.jpg"
                        alt="Quest Leadership Conference"
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
                      Now to him who is able to do immeasurably more than all we
                      ask or imagine, according to his power that is at work
                      within us.
                    </blockquote>{" "}
                    <figcaption>Ephesians 3:20</figcaption>{" "}
                  </figure>{" "}
                  <div className="detail-stats">
                    {" "}
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">1,500+</span>{" "}
                      <span className="detail-stats__label">
                        Leaders gathered
                      </span>{" "}
                    </div>
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">Urdu</span>{" "}
                      <span className="detail-stats__label">
                        Materials translated
                      </span>{" "}
                    </div>
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">PAOC</span>{" "}
                      <span className="detail-stats__label">
                        Partnership
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
                        Equipping church and marketplace leaders for character
                        formation and spiritual development
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Onsite conferences and online courses for non-formal
                        leadership training
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Quest training materials translated into Urdu for
                        accessibility nationwide
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Teaching on Christian leadership, servant leadership,
                        and marketplace influence
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Certificates distributed to delegates in recognition of
                        their participation
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
                      Pakistan (in-person delegates, virtual speakers){" "}
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
