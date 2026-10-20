import type { Metadata } from "next";
import LegacyScripts from "../../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Sports ministry | COPPAK.ORG",
  description:
    "Using cricket and sport as God-given doorways for evangelism, discipleship, and church growth across Pakistan.",
  alternates: { canonical: "/ministries/sports" },
  openGraph: {
    title: "Sports ministry | COPPAK.ORG",
    description:
      "Using cricket and sport as God-given doorways for evangelism, discipleship, and church growth across Pakistan.",
    url: "/ministries/sports",
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
  "/scripts/migrated/ministries-sports-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="detail-hero"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(13,22,52,0.95) 0%, rgba(20,42,95,0.88) 46%, rgba(10,20,48,0.78) 100%), url(/assets/images/coppak/ministries/sports/01.jpg)",
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
                    <span>Sports ministry</span>{" "}
                  </li>
                </ul>{" "}
                <span className="detail-hero__eyebrow">Ministry</span>{" "}
                <h1 className="detail-hero__title">Sports ministry</h1>{" "}
              </div>{" "}
              <div className="detail-hero__video">
                {" "}
                <iframe
                  src="https://www.youtube.com/embed/tlHnZiZ6aEw?rel=0"
                  title="Sports ministry — video"
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
                      className="detail-sidebar__item is-active"
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
                    Using cricket and sport as God-given doorways for
                    evangelism, discipleship, and church growth across Pakistan.
                  </p>{" "}
                  <div className="detail-body">
                    {" "}
                    <p>
                      The Church of Pentecost Pakistan believes that the youth
                      of Pakistan are one of the greatest mission fields
                      entrusted to the church. Millions of young people across
                      the nation are searching for purpose, direction, and hope,
                      and many have never experienced the Gospel in a personal
                      way. Through our Sports Ministry, we use sports as a
                      God-given doorway to build relationships, share Christ,
                      disciple new believers, and strengthen the local church.
                    </p>
                    <p>
                      Sports such as cricket bring young people together from
                      every background. Many youth who may not attend a church
                      service are willing to join a sports event. On the field,
                      they meet caring Christian leaders who share short Gospel
                      messages, pray with the players, listen to their
                      struggles, and introduce them to a life of faith in
                      Christ.
                    </p>
                    <p>
                      As young people come to Christ, they are welcomed into the
                      local church, where they are discipled and encouraged to
                      grow spiritually. Many begin attending worship services,
                      youth fellowship meetings, and Bible studies. They
                      gradually become active members of the Body of Christ,
                      serving in worship teams, outreach programs, and church
                      ministries.
                    </p>
                    <p>
                      This ministry especially reaches youth from brick-kiln
                      communities, slum areas, poor neighbourhoods, remote
                      villages, and persecuted Christian families, as well as
                      young seekers from non-Christian backgrounds. Our goal is
                      not only to form good athletes, but to raise disciples and
                      future leaders who live for Christ and serve their
                      communities.
                    </p>
                    <p>
                      The vision of the Sports Ministry is to see thousands of
                      young people across Pakistan hear the Gospel, receive
                      Jesus Christ as Lord, grow in discipleship, and become
                      strong members of the church.
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
                      href="/assets/images/coppak/ministries/sports/02.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Sports ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/sports/02.jpg"
                        alt="Sports ministry"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/sports/03.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Sports ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/sports/03.jpg"
                        alt="Sports ministry"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/sports/04.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Sports ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/sports/04.jpg"
                        alt="Sports ministry"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/sports/06.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Sports ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/sports/06.jpg"
                        alt="Sports ministry"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/sports/08.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Sports ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/sports/08.jpg"
                        alt="Sports ministry"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/ministries/sports/10.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Sports ministry"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/ministries/sports/10.jpg"
                        alt="Sports ministry"
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
                      Run in such a way as to get the prize.
                    </blockquote>{" "}
                    <figcaption>1 Corinthians 9:24</figcaption>{" "}
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
                        Cricket and sports events as God-given doorways for
                        evangelism
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Short Gospel messages and prayer with players on the
                        field
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Discipling new believers into the life of the local
                        church
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Reaching youth from brick-kiln, slum, and remote-village
                        communities
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Raising athletes into disciples and future leaders
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
                      Brick-kiln communities{" "}
                    </span>
                    <span className="detail-locations__tag">
                      {" "}
                      <i
                        className="fas fa-map-marker-alt"
                        aria-hidden="true"
                      />{" "}
                      Slum neighbourhoods{" "}
                    </span>
                    <span className="detail-locations__tag">
                      {" "}
                      <i
                        className="fas fa-map-marker-alt"
                        aria-hidden="true"
                      />{" "}
                      Remote villages{" "}
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
