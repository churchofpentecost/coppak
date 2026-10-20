import type { Metadata } from "next";
import LegacyScripts from "../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Church services | COPPAK.ORG",
  description:
    "Sunday service, communion, baptism — the worship rhythms of COPPAK.",
  alternates: { canonical: "/church-services" },
  openGraph: {
    title: "Church services | COPPAK.ORG",
    description:
      "Sunday service, communion, baptism — the worship rhythms of COPPAK.",
    url: "/church-services",
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
  "/scripts/migrated/church-services-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="page-hero"
          style={{
            backgroundImage:
              "linear-gradient(178deg, rgba(13,22,52,0.86) 0%, rgba(13,22,52,0.9) 55%, rgba(10,20,48,0.94) 100%), url(/assets/images/coppak/services/sunday/01.jpg)",
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
                  <span>Church services</span>{" "}
                </li>
              </ul>{" "}
              <h1 className="page-hero__title">Church services</h1>{" "}
              <p className="page-hero__subtitle">
                Worship, communion, and baptism — how we gather across Pakistan.
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
                Worship together
              </span>{" "}
              <h2 className="section-title__title">
                Our services and ordinances
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
                      src="/assets/images/coppak/services/baptism/01.jpg"
                      alt="Baptism service"
                    />{" "}
                    <div className="causes-one__cat">
                      <p>Quarterly in every district</p>
                    </div>{" "}
                  </div>{" "}
                  <div className="causes-one__content">
                    {" "}
                    <h3 className="causes-one__title">
                      {" "}
                      <a href="/church-services/baptism">
                        Baptism service
                      </a>{" "}
                    </h3>{" "}
                    <p className="causes-one__text">
                      Public quarterly baptism in parks, rivers, and pools
                      across Pakistan — celebrating new believers from every
                      ministry.
                    </p>{" "}
                    <a
                      href="/church-services/baptism"
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
                      src="/assets/images/coppak/services/communion/01.jpg"
                      alt="Holy Communion"
                    />{" "}
                    <div className="causes-one__cat">
                      <p>First Sunday of every month</p>
                    </div>{" "}
                  </div>{" "}
                  <div className="causes-one__content">
                    {" "}
                    <h3 className="causes-one__title">
                      {" "}
                      <a href="/church-services/holy-communion">
                        Holy Communion
                      </a>{" "}
                    </h3>{" "}
                    <p className="causes-one__text">
                      On the first Sunday of every month, all COPPAK assemblies
                      gather to remember the sacrifice of Christ.
                    </p>{" "}
                    <a
                      href="/church-services/holy-communion"
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
                      src="/assets/images/coppak/services/sunday/01.jpg"
                      alt="Sunday service"
                    />{" "}
                    <div className="causes-one__cat">
                      <p>Every Sunday</p>
                    </div>{" "}
                  </div>{" "}
                  <div className="causes-one__content">
                    {" "}
                    <h3 className="causes-one__title">
                      {" "}
                      <a href="/church-services/sunday-service">
                        Sunday service
                      </a>{" "}
                    </h3>{" "}
                    <p className="causes-one__text">
                      Worship that endures heat and cold — Pakistani believers
                      gather every Sunday in 19 church buildings, on rooftops,
                      in homes, and in the streets.
                    </p>{" "}
                    <a
                      href="/church-services/sunday-service"
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
