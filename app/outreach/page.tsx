import type { Metadata } from "next";
import LegacyScripts from "../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Outreach | COPPAK.ORG",
  description:
    "How COPPAK reaches communities across Pakistan with the gospel.",
  alternates: { canonical: "/outreach" },
  openGraph: {
    title: "Outreach | COPPAK.ORG",
    description:
      "How COPPAK reaches communities across Pakistan with the gospel.",
    url: "/outreach",
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
  "/scripts/migrated/outreach-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="page-hero"
          style={{
            backgroundImage:
              "linear-gradient(178deg, rgba(13,22,52,0.86) 0%, rgba(13,22,52,0.9) 55%, rgba(10,20,48,0.94) 100%), url(/assets/images/coppak/outreach/public-rallies/01.jpg)",
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
                  <span>Outreach</span>{" "}
                </li>
              </ul>{" "}
              <h1 className="page-hero__title">Outreach</h1>{" "}
              <p className="page-hero__subtitle">
                Taking the Gospel beyond the walls of the church, across
                Pakistan.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section className="causes-one" style={{ padding: "100px 0" }}>
          {" "}
          <div className="container">
            {" "}
            <div className="section-title text-center">
              {" "}
              <span className="section-title__tagline">
                Reaching communities
              </span>{" "}
              <h2 className="section-title__title">
                Outreach programs across COPPAK
              </h2>{" "}
            </div>{" "}
            <div className="row">
              {" "}
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                {" "}
                <div
                  className="causes-one__single"
                  style={{ marginBottom: 30 }}
                >
                  {" "}
                  <div className="causes-one__img">
                    {" "}
                    <img
                      src="/assets/images/coppak/outreach/public-rallies/01.jpg"
                      alt="Public rallies & prayer marches"
                    />
                  </div>{" "}
                  <div className="causes-one__content">
                    {" "}
                    <h3 className="causes-one__title">
                      {" "}
                      <a href="/outreach/public-rallies">
                        Public rallies &amp; prayer marches
                      </a>{" "}
                    </h3>{" "}
                    <p className="causes-one__text">
                      Christmas, Easter, and peace rallies across Pakistan —
                      worship, intercession, and gospel preaching in the
                      streets.
                    </p>{" "}
                    <a
                      href="/outreach/public-rallies"
                      className="card-readmore"
                    >
                      Read more{" "}
                      <span className="arr" aria-hidden="true">
                        →
                      </span>{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                {" "}
                <div
                  className="causes-one__single"
                  style={{ marginBottom: 30 }}
                >
                  {" "}
                  <div className="causes-one__img">
                    {" "}
                    <img
                      src="/assets/images/coppak/outreach/home-cell/01.jpg"
                      alt="Home cell groups"
                    />
                  </div>{" "}
                  <div className="causes-one__content">
                    {" "}
                    <h3 className="causes-one__title">
                      {" "}
                      <a href="/outreach/home-cell">Home cell groups</a>{" "}
                    </h3>{" "}
                    <p className="causes-one__text">
                      Small groups meeting quietly and faithfully in homes — the
                      foundation of church growth across Pakistan.
                    </p>{" "}
                    <a href="/outreach/home-cell" className="card-readmore">
                      Read more{" "}
                      <span className="arr" aria-hidden="true">
                        →
                      </span>{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                {" "}
                <div
                  className="causes-one__single"
                  style={{ marginBottom: 30 }}
                >
                  {" "}
                  <div className="causes-one__img">
                    {" "}
                    <img
                      src="/assets/images/coppak/outreach/alpha-groups/01.jpg"
                      alt="Alpha Pakistan"
                    />
                  </div>{" "}
                  <div className="causes-one__content">
                    {" "}
                    <h3 className="causes-one__title">
                      {" "}
                      <a href="/outreach/alpha-groups">Alpha Pakistan</a>{" "}
                    </h3>{" "}
                    <p className="causes-one__text">
                      Since 2023, more than 35,000 Pakistanis have completed
                      Alpha — a relaxed, conversational introduction to
                      Christian faith.
                    </p>{" "}
                    <a href="/outreach/alpha-groups" className="card-readmore">
                      Read more{" "}
                      <span className="arr" aria-hidden="true">
                        →
                      </span>{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                {" "}
                <div
                  className="causes-one__single"
                  style={{ marginBottom: 30 }}
                >
                  {" "}
                  <div className="causes-one__img">
                    {" "}
                    <img
                      src="/assets/images/coppak/outreach/mass-evangelism/01.jpg"
                      alt="Mass evangelism"
                    />
                  </div>{" "}
                  <div className="causes-one__content">
                    {" "}
                    <h3 className="causes-one__title">
                      {" "}
                      <a href="/outreach/mass-evangelism">
                        Mass evangelism
                      </a>{" "}
                    </h3>{" "}
                    <p className="causes-one__text">
                      Crusades, open-air conventions, and stadium gatherings
                      across Pakistan — proclaiming Christ openly under
                      No-Objection Certificates from local authorities.
                    </p>{" "}
                    <a
                      href="/outreach/mass-evangelism"
                      className="card-readmore"
                    >
                      Read more{" "}
                      <span className="arr" aria-hidden="true">
                        →
                      </span>{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="500ms"
              >
                {" "}
                <div
                  className="causes-one__single"
                  style={{ marginBottom: 30 }}
                >
                  {" "}
                  <div className="causes-one__img">
                    {" "}
                    <img
                      src="/assets/images/coppak/outreach/peace-train/01.jpg"
                      alt="Christmas Peace Pray Train"
                    />
                  </div>{" "}
                  <div className="causes-one__content">
                    {" "}
                    <h3 className="causes-one__title">
                      {" "}
                      <a href="/outreach/peace-train">
                        Christmas Peace Pray Train
                      </a>{" "}
                    </h3>{" "}
                    <p className="causes-one__text">
                      A historic Christmas journey of prayer from Lahore to
                      Karachi — 36 pastors, 29 station stops, Urdu Bibles,
                      carols, and the message of Christ's peace carried across
                      Pakistan.
                    </p>{" "}
                    <a href="/outreach/peace-train" className="card-readmore">
                      Read more{" "}
                      <span className="arr" aria-hidden="true">
                        →
                      </span>{" "}
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
