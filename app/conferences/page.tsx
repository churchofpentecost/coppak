import type { Metadata } from "next";
import LegacyScripts from "../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Conferences | COPPAK.ORG",
  description:
    "Leadership conferences across The Church of Pentecost Pakistan — training pastors, church workers, and believers to transform society through the Gospel.",
  alternates: { canonical: "/conferences" },
  openGraph: {
    title: "Conferences | COPPAK.ORG",
    description:
      "Leadership conferences across The Church of Pentecost Pakistan — training pastors, church workers, and believers to transform society through the Gospel.",
    url: "/conferences",
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
  "/scripts/migrated/conferences-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="page-hero"
          style={{
            backgroundImage:
              "linear-gradient(178deg, rgba(13,22,52,0.86) 0%, rgba(13,22,52,0.9) 55%, rgba(10,20,48,0.94) 100%), url(/assets/images/coppak/conferences/leadership/03.jpg)",
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
                  <span>Conferences</span>{" "}
                </li>
              </ul>{" "}
              <h1 className="page-hero__title">Conferences</h1>{" "}
              <p className="page-hero__subtitle">
                Training pastors, leaders, and believers across Pakistan to
                transform society through the Gospel.
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
                Train &amp; equip
              </span>{" "}
              <h2 className="section-title__title">
                Conferences across COPPAK
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
                      src="/assets/images/coppak/conferences/leadership/01.jpg"
                      alt="Leadership Conferences"
                    />
                  </div>{" "}
                  <div className="causes-one__content">
                    {" "}
                    <h3 className="causes-one__title">
                      {" "}
                      <a href="/conferences/leadership-conferences">
                        Leadership Conferences
                      </a>{" "}
                    </h3>{" "}
                    <p className="causes-one__text">
                      Training pastors and church workers across Pakistan to
                      transform society through the Gospel — in-person and
                      virtual, with printed Urdu resources for every district.
                    </p>{" "}
                    <a
                      href="/conferences/leadership-conferences"
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
                      src="/assets/images/coppak/conferences/christian-apologetics/01.jpg"
                      alt="Christian Apologetics Conferences"
                    />
                  </div>{" "}
                  <div className="causes-one__content">
                    {" "}
                    <h3 className="causes-one__title">
                      {" "}
                      <a href="/conferences/christian-apologetics">
                        Christian Apologetics Conferences
                      </a>{" "}
                    </h3>{" "}
                    <p className="causes-one__text">
                      Equipping pastors, youth, and believers in Pakistan to
                      understand, defend, and share the Christian faith with
                      wisdom, love, and biblical confidence — in partnership
                      with Lakemount Worship Centre, Grimsby, Canada.
                    </p>{" "}
                    <a
                      href="/conferences/christian-apologetics"
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
                      src="/assets/images/coppak/conferences/quest-leadership/01.jpg"
                      alt="Quest Leadership Conference"
                    />
                  </div>{" "}
                  <div className="causes-one__content">
                    {" "}
                    <h3 className="causes-one__title">
                      {" "}
                      <a href="/conferences/quest-leadership">
                        Quest Leadership Conference
                      </a>{" "}
                    </h3>{" "}
                    <p className="causes-one__text">
                      One of the largest Christian leadership gatherings in
                      Pakistan — 1,500+ pastors, legislators, and marketplace
                      leaders, in partnership with PAOC and Quest Leadership,
                      with all materials translated into Urdu.
                    </p>{" "}
                    <a
                      href="/conferences/quest-leadership"
                      className="card-readmore"
                    >
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
