import type { Metadata } from "next";
import LegacyScripts from "../../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Christmas Peace Pray Train | COPPAK.ORG",
  description:
    "A historic Christmas journey of prayer from Lahore to Karachi — 36 pastors, 29 station stops, Urdu Bibles, carols, and the message of Christ's peace carried across Pakistan.",
  alternates: { canonical: "/outreach/peace-train" },
  openGraph: {
    title: "Christmas Peace Pray Train | COPPAK.ORG",
    description:
      "A historic Christmas journey of prayer from Lahore to Karachi — 36 pastors, 29 station stops, Urdu Bibles, carols, and the message of Christ's peace carried across Pakistan.",
    url: "/outreach/peace-train",
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
  "/scripts/migrated/outreach-peace-train-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="detail-hero"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(13,22,52,0.95) 0%, rgba(20,42,95,0.88) 46%, rgba(10,20,48,0.78) 100%), url(/assets/images/coppak/outreach/peace-train/01.jpg)",
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
                    <a href="/outreach">Outreach</a>{" "}
                  </li>{" "}
                  <li className="detail-hero__crumb-sep" aria-hidden="true">
                    /
                  </li>{" "}
                  <li className="is-current">
                    {" "}
                    <span>Christmas Peace Pray Train</span>{" "}
                  </li>
                </ul>{" "}
                <span className="detail-hero__eyebrow">Outreach</span>{" "}
                <h1 className="detail-hero__title">
                  Christmas Peace Pray Train
                </h1>{" "}
              </div>{" "}
              <div className="detail-hero__video">
                {" "}
                <iframe
                  src="https://www.youtube.com/embed/xsbqRpx8NPE?rel=0"
                  title="Christmas Peace Pray Train — video"
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
                  <h3 className="detail-sidebar__heading">Our Outreach</h3>{" "}
                  <nav className="detail-sidebar__list">
                    {" "}
                    <a
                      href="/outreach/public-rallies"
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i className="fas fa-flag" aria-hidden="true" />{" "}
                      <span>Public rallies &amp; prayer marches</span>{" "}
                    </a>
                    <a
                      href="/outreach/home-cell"
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i className="fas fa-home" aria-hidden="true" />{" "}
                      <span>Home cell groups</span>{" "}
                    </a>
                    <a
                      href="/outreach/alpha-groups"
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i className="fas fa-comments" aria-hidden="true" />{" "}
                      <span>Alpha Pakistan</span>{" "}
                    </a>
                    <a
                      href="/outreach/mass-evangelism"
                      className="detail-sidebar__item"
                    >
                      {" "}
                      <i className="fas fa-bullhorn" aria-hidden="true" />{" "}
                      <span>Mass evangelism</span>{" "}
                    </a>
                    <a
                      href="/outreach/peace-train"
                      className="detail-sidebar__item is-active"
                    >
                      {" "}
                      <i className="fas fa-train" aria-hidden="true" />{" "}
                      <span>Christmas Peace Pray Train</span>{" "}
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
                    A historic Christmas journey of prayer from Lahore to
                    Karachi — 36 pastors, 29 station stops, Urdu Bibles, carols,
                    and the message of Christ's peace carried across Pakistan.
                  </p>{" "}
                  <div className="detail-body">
                    {" "}
                    <h2 id="a-historic-journey-of-prayer-from-lahore-to-karachi">
                      A historic journey of prayer from Lahore to Karachi
                    </h2>
                    <p>
                      A historic and joyful Christian witness took place at
                      Lahore Railway Station when the{" "}
                      <strong>Christmas Peace Pray Train</strong> was
                      inaugurated as part of the Christmas celebrations in
                      Pakistan. This special train journey carried a powerful
                      message of peace, prayer, unity, salvation, and interfaith
                      harmony from <strong>Lahore to Karachi</strong> — covering
                      approximately <strong>1,214 to 1,250 kilometres</strong>{" "}
                      across the nation.
                    </p>
                    <p>
                      The train was inaugurated by the{" "}
                      <strong>Federal Minister for Railways</strong>, who also
                      cut the Christmas cake and warmly greeted the Christian
                      community. The Christmas Peace Pray Train travelled from
                      Lahore to Karachi with two additional coaches attached to
                      the <strong>Allama Iqbal Express</strong>.
                    </p>
                    <p>
                      The event was attended by Christian leaders, pastors,
                      bishops, railway officials, political representatives, and
                      members of the Christian community.{" "}
                      <strong>Apostle Dr. Jamil Nasir</strong>, National Head of
                      The Church of Pentecost Pakistan, joined the inauguration
                      with the Minister. At the starting point, Lahore Railway
                      Station, he shared the message of salvation, prayed over
                      the journey, and blessed the train, asking God to use it
                      as a moving testimony of peace, love, and salvation for
                      the people of Pakistan.
                    </p>
                    <p>
                      During the journey,{" "}
                      <strong>36 pastors of The Church of Pentecost</strong>,
                      along with Christian leaders from different denominations,
                      travelled on the train. They sang Christmas carols,
                      worshiped God, distributed Christian literature and{" "}
                      <strong>Urdu Bibles</strong>, and prayed continuously for
                      the prosperity, peace, and salvation of the people of
                      Pakistan.
                    </p>
                    <p>
                      At every station where the train stopped, pastors and
                      believers came out onto the platforms to pray with people,
                      sing hymns, share the message of salvation, and declare
                      God’s blessing over the cities and communities.
                    </p>
                    <h3 id="the-route--29-station-stops">
                      The route — 29 station stops
                    </h3>
                    <p>
                      Lahore Jn. · Kot Lakhpat · Raiwind Jn. · Kot Radha Kishen
                      · Pattoki · Okara · Sahiwal · Chichawatni · Mian Channun ·
                      Khanewal Jn. · Jahania · Dunyapur · Lodhran · Bahawalpur ·
                      Dera Nawab Sahib · Khanpur Jn. · Rahim Yar Khan ·
                      Sadikabad · Ghotki · Rohri Jn. · Mahrabpur · Bhiria Road ·
                      Nawabshah Jn. · Tando Adam · Hyderabad Jn. · Kotri Jn. ·
                      Landhi Jn. · Drigh Road · <strong>Karachi Cantt</strong>
                    </p>
                    <h3 id="a-moving-prayer-altar-across-pakistan">
                      A moving prayer altar across Pakistan
                    </h3>
                    <p>
                      This journey was more than a train ride. It became a{" "}
                      <strong>moving prayer altar across Pakistan</strong>. At
                      railway platforms, pastors prayed for families,
                      communities, railway workers, passengers, leaders, and the
                      nation. Urdu Bibles and Christian booklets were
                      distributed, songs of worship and Christmas joy were heard
                      publicly, and many people witnessed Christians praying
                      openly for Pakistan’s peace and blessing.
                    </p>
                    <p>
                      The message of the Christmas Peace Pray Train was clear:{" "}
                      <strong>
                        Jesus Christ is the Prince of Peace, and His love is for
                        all people.
                      </strong>{" "}
                      Through prayer, worship, fellowship, and public witness,
                      the Church declared that Pakistan needs peace, unity,
                      healing, forgiveness, and salvation through Jesus Christ.
                    </p>
                    <p>
                      When the train reached Karachi, local pastors, church
                      leaders, and believers warmly welcomed the team. The
                      journey ended with thanksgiving, joy, and praise to God
                      for allowing His people to carry the message of Christmas,
                      prayer, peace, and salvation across the nation.
                    </p>
                    <blockquote>
                      <p>
                        <em>To God be all the glory!</em>
                      </p>
                    </blockquote>
                    <p>
                      The Christmas Peace Pray Train will be remembered as a
                      historic moment of Christian witness in Pakistan. It
                      showed that prayer can travel beyond church walls, worship
                      can fill public places, and the message of Christ’s peace
                      can touch cities, stations, families, and hearts.
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
                      href="/assets/images/coppak/outreach/peace-train/02.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Christmas Peace Pray Train"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/peace-train/02.jpg"
                        alt="Christmas Peace Pray Train"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/peace-train/05.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Christmas Peace Pray Train"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/peace-train/05.jpg"
                        alt="Christmas Peace Pray Train"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/peace-train/09.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Christmas Peace Pray Train"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/peace-train/09.jpg"
                        alt="Christmas Peace Pray Train"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/peace-train/13.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Christmas Peace Pray Train"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/peace-train/13.jpg"
                        alt="Christmas Peace Pray Train"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/peace-train/17.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Christmas Peace Pray Train"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/peace-train/17.jpg"
                        alt="Christmas Peace Pray Train"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/peace-train/21.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Christmas Peace Pray Train"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/peace-train/21.jpg"
                        alt="Christmas Peace Pray Train"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/peace-train/25.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Christmas Peace Pray Train"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/peace-train/25.jpg"
                        alt="Christmas Peace Pray Train"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/peace-train/29.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Christmas Peace Pray Train"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/peace-train/29.jpg"
                        alt="Christmas Peace Pray Train"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/peace-train/33.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Christmas Peace Pray Train"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/peace-train/33.jpg"
                        alt="Christmas Peace Pray Train"
                        loading="lazy"
                      />{" "}
                    </a>
                    <a
                      href="/assets/images/coppak/outreach/peace-train/37.jpg"
                      className="detail-gallery__item img-popup"
                      data-group={2}
                      aria-label="View photo — Christmas Peace Pray Train"
                    >
                      {" "}
                      <img
                        src="/assets/images/coppak/outreach/peace-train/37.jpg"
                        alt="Christmas Peace Pray Train"
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
                      How beautiful upon the mountains are the feet of him who
                      brings good news, who publishes peace.
                    </blockquote>{" "}
                    <figcaption>Isaiah 52:7</figcaption>{" "}
                  </figure>{" "}
                  <div className="detail-stats">
                    {" "}
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">1,214 km</span>{" "}
                      <span className="detail-stats__label">
                        Lahore → Karachi
                      </span>{" "}
                    </div>
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">36</span>{" "}
                      <span className="detail-stats__label">
                        Pastors on board
                      </span>{" "}
                    </div>
                    <div className="detail-stats__item">
                      {" "}
                      <span className="detail-stats__value">29</span>{" "}
                      <span className="detail-stats__label">
                        Station stops
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
                        Christmas Peace Pray Train inaugurated at Lahore Railway
                        Station by the Federal Minister for Railways
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        36 pastors travelled the route, singing carols and
                        distributing Urdu Bibles and Christian literature
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Public prayer at every station for the city, families,
                        and the nation
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Open declaration of Christ's peace and salvation across
                        Pakistan
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-check" aria-hidden="true" />{" "}
                      <span>
                        Warm welcome by local pastors and believers on arrival
                        in Karachi
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
                      Lahore Junction (start){" "}
                    </span>
                    <span className="detail-locations__tag">
                      {" "}
                      <i
                        className="fas fa-map-marker-alt"
                        aria-hidden="true"
                      />{" "}
                      Punjab • Sindh{" "}
                    </span>
                    <span className="detail-locations__tag">
                      {" "}
                      <i
                        className="fas fa-map-marker-alt"
                        aria-hidden="true"
                      />{" "}
                      Karachi Cantt (end){" "}
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
