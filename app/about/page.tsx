import type { Metadata } from "next";
import LegacyScripts from "../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "About COPPAK | COPPAK.ORG",
  description:
    "The story of The Church of Pentecost Pakistan — from a living room in 2000 to 71 assemblies and 28,479 members across eight districts.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About COPPAK | COPPAK.ORG",
    description:
      "The story of The Church of Pentecost Pakistan — from a living room in 2000 to 71 assemblies and 28,479 members across eight districts.",
    url: "/about",
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
  "/scripts/migrated/about-25.js",
];
export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="/styles/pages/about.css" />
      <div>
        <section
          className="page-hero"
          style={{
            backgroundImage:
              "linear-gradient(178deg, rgba(13,22,52,0.86) 0%, rgba(13,22,52,0.9) 55%, rgba(10,20,48,0.94) 100%), url(/assets/images/coppak/about/history/01.jpg)",
          }}
        >
          {" "}
          <div className="page-hero__glow" aria-hidden="true" />{" "}
          <div className="container">
            {" "}
            <div className="page-hero__inner">
              {" "}
              <ul className="page-hero__crumbs list-unstyled">
                {" "}
                <li className="">
                  {" "}
                  <a href="/">Home</a>{" "}
                </li>{" "}
                <li className="page-hero__crumb-sep" aria-hidden="true">
                  /
                </li>{" "}
                <li className="is-current">
                  {" "}
                  <span>About</span>{" "}
                </li>
              </ul>{" "}
              <h1 className="page-hero__title">About COPPAK</h1>{" "}
              <p className="page-hero__subtitle">
                From a living room in Lahore to a national Pentecostal movement
                across eight districts.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section className="about-four" data-astro-cid-kh7btl4r="">
          {" "}
          <div className="container" data-astro-cid-kh7btl4r="">
            {" "}
            <div className="row align-items-center" data-astro-cid-kh7btl4r="">
              {" "}
              <div className="col-xl-6" data-astro-cid-kh7btl4r="">
                {" "}
                <div className="about-four__left" data-astro-cid-kh7btl4r="">
                  {" "}
                  <img
                    src="/assets/images/coppak/about/history/01.jpg"
                    alt="The Church of Pentecost Pakistan"
                    style={{ width: "100%", borderRadius: 12 }}
                    data-astro-cid-kh7btl4r=""
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-xl-6" data-astro-cid-kh7btl4r="">
                {" "}
                <div className="about-four__right" data-astro-cid-kh7btl4r="">
                  {" "}
                  <div
                    className="section-title text-left"
                    data-astro-cid-kh7btl4r=""
                  >
                    {" "}
                    <span
                      className="section-title__tagline"
                      data-astro-cid-kh7btl4r=""
                    >
                      Who we are
                    </span>{" "}
                    <h2
                      className="section-title__title"
                      data-astro-cid-kh7btl4r=""
                    >
                      The Church of Pentecost Pakistan
                    </h2>{" "}
                  </div>{" "}
                  <p data-astro-cid-kh7btl4r="">
                    From a single living room in Lahore in the year 2000, The
                    Church of Pentecost Pakistan has grown into a national
                    Pentecostal movement — today serving{" "}
                    <strong data-astro-cid-kh7btl4r="">eight districts</strong>{" "}
                    with
                    <strong data-astro-cid-kh7btl4r="">
                      71 assemblies
                    </strong>{" "}
                    and a total membership of
                    <strong data-astro-cid-kh7btl4r="">
                      28,479 believers
                    </strong>{" "}
                    nationwide.
                  </p>{" "}
                  <p data-astro-cid-kh7btl4r="">
                    Our motto reflects the early years that shaped us:
                    <em data-astro-cid-kh7btl4r="">
                      "A church without walls but with mission."
                    </em>{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section
          style={{ padding: "80px 0", background: "#f7f4ef" }}
          data-astro-cid-kh7btl4r=""
        >
          {" "}
          <div className="container" data-astro-cid-kh7btl4r="">
            {" "}
            <div className="vm-grid" data-astro-cid-kh7btl4r="">
              {" "}
              <div className="vm-card" data-astro-cid-kh7btl4r="">
                {" "}
                <div className="vm-card__icon" data-astro-cid-kh7btl4r="">
                  {" "}
                  <i
                    className="fas fa-eye"
                    aria-hidden="true"
                    data-astro-cid-kh7btl4r=""
                  />{" "}
                </div>{" "}
                <span className="vm-card__eyebrow" data-astro-cid-kh7btl4r="">
                  Our vision
                </span>{" "}
                <h2 className="vm-card__title" data-astro-cid-kh7btl4r="">
                  A Spirit-led Pentecostal church proclaiming the Gospel across
                  Pakistan
                </h2>{" "}
                <p className="vm-card__text" data-astro-cid-kh7btl4r="">
                  To be a Spirit-led Pentecostal church in Pakistan —
                  proclaiming the Gospel, planting strong churches, empowering
                  believers, equipping leaders, and serving people in every area
                  of life.
                </p>{" "}
              </div>{" "}
              <div className="vm-card" data-astro-cid-kh7btl4r="">
                {" "}
                <div className="vm-card__icon" data-astro-cid-kh7btl4r="">
                  {" "}
                  <i
                    className="fas fa-bullseye"
                    aria-hidden="true"
                    data-astro-cid-kh7btl4r=""
                  />{" "}
                </div>{" "}
                <span className="vm-card__eyebrow" data-astro-cid-kh7btl4r="">
                  Our mission
                </span>{" "}
                <h2 className="vm-card__title" data-astro-cid-kh7btl4r="">
                  Strong, Spirit-filled churches that change communities
                </h2>{" "}
                <p className="vm-card__text" data-astro-cid-kh7btl4r="">
                  We exist to build strong, Spirit-filled churches with
                  believers who live Godly lives and make a positive difference
                  in their communities.
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section style={{ padding: "100px 0" }} data-astro-cid-kh7btl4r="">
          {" "}
          <div className="container" data-astro-cid-kh7btl4r="">
            {" "}
            <div
              className="row justify-content-center"
              data-astro-cid-kh7btl4r=""
            >
              {" "}
              <div className="col-xl-9 col-lg-10" data-astro-cid-kh7btl4r="">
                {" "}
                <div
                  className="section-title text-center"
                  data-astro-cid-kh7btl4r=""
                >
                  {" "}
                  <span
                    className="section-title__tagline"
                    data-astro-cid-kh7btl4r=""
                  >
                    Our history
                  </span>{" "}
                  <h2
                    className="section-title__title"
                    data-astro-cid-kh7btl4r=""
                  >
                    From a living room to a national movement
                  </h2>{" "}
                </div>{" "}
                <p style={{ marginTop: 32 }} data-astro-cid-kh7btl4r="">
                  In the year 2000,{" "}
                  <strong data-astro-cid-kh7btl4r="">Jamil Nasir</strong> and
                  his wife,{" "}
                  <strong data-astro-cid-kh7btl4r="">Rose Mary</strong>, opened
                  the doors of their living room to a small group of believers
                  in Lahore, Pakistan. God had placed a burning vision in their
                  hearts — to plant a Pentecostal church that would shine the
                  light of Christ in the heart of the nation. With no building,
                  no financial support, and only a handful of believers, they
                  stepped out in faith and began to worship together.
                </p>{" "}
                <p data-astro-cid-kh7btl4r="">
                  Within just one year, the fellowship grew to more than 150
                  believers. As the congregation increased, the fellowship moved
                  into a rented building and continued to flourish. But soon,
                  unexpected challenges arose. When the building was taken back,
                  it seemed as though the vision had come to an abrupt end. Yet
                  God was only preparing the way for something far greater.
                </p>{" "}
                <p data-astro-cid-kh7btl4r="">
                  In 2004, a new building was rented, and the congregation grew
                  to 200–250 members. Then in 2007, they were once again forced
                  to leave their place of worship. Homeless for the second time,
                  many might have expected the church to fade away. Instead, God
                  opened a supernatural door.
                </p>{" "}
                <p data-astro-cid-kh7btl4r="">
                  In 2007, Pastor Jamil traveled to Singapore to attend a seminar
                  at the Haggai Institute. During this visit, he established
                  a meaningful connection with the international leadership of
                  The Church of Pentecost. This important encounter marked a
                  turning point in the ministry's journey and helped pave the
                  way for the establishment of{" "}
                  <strong data-astro-cid-kh7btl4r="">
                    The Church of Pentecost Pakistan
                  </strong>
                  .
                </p>{" "}
                <p data-astro-cid-kh7btl4r="">
                  With no building, the church entered a deeper season of faith.
                  Services began on the streets and later moved to a public
                  park, making it the first church in Pakistan's history to hold
                  open-air services in a public park. Under the open sky,
                  thousands heard the Gospel, witnessed miracles, and
                  encountered the presence of God. From{" "}
                  <strong data-astro-cid-kh7btl4r="">2007 to 2015</strong>, this
                  "church without walls" became a beacon of revival in Lahore.
                </p>{" "}
                <p data-astro-cid-kh7btl4r="">
                  In <strong data-astro-cid-kh7btl4r="">2015</strong>, after
                  years of prayer, perseverance, sacrifice, and tears, God
                  fulfilled His promise. The church finally moved into its own
                  building — a house of worship that today welcomes more than
                  2,000 believers every week.
                </p>{" "}
                <p data-astro-cid-kh7btl4r="">
                  What began as a simple act of obedience in a living room has
                  now grown into a powerful Pentecostal movement impacting
                  thousands across Pakistan. Today, The Church of Pentecost
                  Pakistan serves{" "}
                  <strong data-astro-cid-kh7btl4r="">
                    eight districts with 71 assemblies and 28,479 members
                  </strong>
                  .
                </p>{" "}
                <p
                  style={{ fontStyle: "italic", opacity: "0.85" }}
                  data-astro-cid-kh7btl4r=""
                >
                  This journey stands as a living testimony that when God gives
                  a vision, no obstacle can cancel His plan. From humble
                  beginnings to a nationwide revival, the story of The Church of
                  Pentecost Pakistan reflects God's faithfulness, grace, and
                  unstoppable power working through willing hearts.
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div
              className="row"
              style={{ marginTop: 48 }}
              data-astro-cid-kh7btl4r=""
            >
              {" "}
              <div
                className="col-xl-4 col-md-6"
                style={{ marginBottom: 24 }}
                data-astro-cid-kh7btl4r=""
              >
                {" "}
                <img
                  src="/assets/images/coppak/about/history/02.jpg"
                  alt="COPPAK history"
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                  data-astro-cid-kh7btl4r=""
                />{" "}
              </div>
              <div
                className="col-xl-4 col-md-6"
                style={{ marginBottom: 24 }}
                data-astro-cid-kh7btl4r=""
              >
                {" "}
                <img
                  src="/assets/images/coppak/about/history/03.jpg"
                  alt="COPPAK history"
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                  data-astro-cid-kh7btl4r=""
                />{" "}
              </div>
              <div
                className="col-xl-4 col-md-6"
                style={{ marginBottom: 24 }}
                data-astro-cid-kh7btl4r=""
              >
                {" "}
                <img
                  src="/assets/images/coppak/about/history/04.jpg"
                  alt="COPPAK history"
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                  data-astro-cid-kh7btl4r=""
                />{" "}
              </div>
              <div
                className="col-xl-4 col-md-6"
                style={{ marginBottom: 24 }}
                data-astro-cid-kh7btl4r=""
              >
                {" "}
                <img
                  src="/assets/images/coppak/about/history/05.jpg"
                  alt="COPPAK history"
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                  data-astro-cid-kh7btl4r=""
                />{" "}
              </div>
              <div
                className="col-xl-4 col-md-6"
                style={{ marginBottom: 24 }}
                data-astro-cid-kh7btl4r=""
              >
                {" "}
                <img
                  src="/assets/images/coppak/about/history/06.jpg"
                  alt="COPPAK history"
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                  data-astro-cid-kh7btl4r=""
                />{" "}
              </div>
              <div
                className="col-xl-4 col-md-6"
                style={{ marginBottom: 24 }}
                data-astro-cid-kh7btl4r=""
              >
                {" "}
                <img
                  src="/assets/images/coppak/about/history/07.jpg"
                  alt="COPPAK history"
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                  data-astro-cid-kh7btl4r=""
                />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section
          style={{
            padding: "100px 0",
            background:
              "linear-gradient(135deg, var(--oxpins-base) 0%, var(--oxpins-secondary) 100%)",
            color: "#fff",
          }}
          data-astro-cid-kh7btl4r=""
        >
          {" "}
          <div className="container" data-astro-cid-kh7btl4r="">
            {" "}
            <div
              className="row justify-content-center text-center"
              data-astro-cid-kh7btl4r=""
            >
              {" "}
              <div className="col-xl-10" data-astro-cid-kh7btl4r="">
                {" "}
                <p
                  style={{
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    fontSize: 13,
                    opacity: "0.85",
                    marginBottom: 16,
                  }}
                  data-astro-cid-kh7btl4r=""
                >
                  2026 Theme
                </p>{" "}
                <h2
                  style={{ fontSize: 38, color: "#fff", lineHeight: "1.3" }}
                  data-astro-cid-kh7btl4r=""
                >
                  The Church Unleashed to Transform Society Through the Gospel
                  and the Power of the Holy Spirit.
                </h2>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section
          style={{ padding: "80px 0", textAlign: "center" }}
          data-astro-cid-kh7btl4r=""
        >
          {" "}
          <div className="container" data-astro-cid-kh7btl4r="">
            {" "}
            <div
              className="row justify-content-center"
              data-astro-cid-kh7btl4r=""
            >
              {" "}
              <div className="col-xl-8" data-astro-cid-kh7btl4r="">
                {" "}
                <div
                  className="section-title text-center"
                  data-astro-cid-kh7btl4r=""
                >
                  {" "}
                  <span
                    className="section-title__tagline"
                    data-astro-cid-kh7btl4r=""
                  >
                    Meet the team
                  </span>{" "}
                  <h2
                    className="section-title__title"
                    data-astro-cid-kh7btl4r=""
                  >
                    The people leading COPPAK
                  </h2>{" "}
                </div>{" "}
                <p style={{ margin: "24px 0" }} data-astro-cid-kh7btl4r="">
                  From our National Head and Area Heads to ministry directors
                  and the global Church of Pentecost leadership, meet the people
                  God has raised to lead this work.
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
      </div>
      <LegacyScripts sources={scripts} />
    </>
  );
}
