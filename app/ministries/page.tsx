import type { Metadata } from "next";
import LegacyScripts from "../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Ministries | COPPAK.ORG",
  description: "The ministries of COPPAK — places to serve, grow, and belong.",
  alternates: { canonical: "/ministries" },
  openGraph: {
    title: "Ministries | COPPAK.ORG",
    description:
      "The ministries of COPPAK — places to serve, grow, and belong.",
    url: "/ministries",
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
  "/scripts/migrated/ministries-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="page-hero"
          style={{
            backgroundImage:
              "linear-gradient(178deg, rgba(13,22,52,0.86) 0%, rgba(13,22,52,0.9) 55%, rgba(10,20,48,0.94) 100%), url(/assets/images/coppak/ministries/pensa-youth/01.jpg)",
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
                  <span>Ministries</span>{" "}
                </li>
              </ul>{" "}
              <h1 className="page-hero__title">Ministries</h1>{" "}
              <p className="page-hero__subtitle">
                Find your place to serve, grow, and belong across COPPAK.
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
                Find your place
              </span>{" "}
              <h2 className="section-title__title">
                Ministries serving across COPPAK
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
                      src="/assets/images/coppak/ministries/compassion/help-out-01.jpg"
                      alt="Compassion ministry"
                    />
                  </div>{" "}
                  <div className="causes-one__content">
                    {" "}
                    <h3 className="causes-one__title">
                      {" "}
                      <a href="/ministries/compassion">
                        Compassion ministry
                      </a>{" "}
                    </h3>{" "}
                    <p className="causes-one__text">
                      Daily meals, monthly grocery support, and steady pastoral
                      care for the poor, the hungry, and the vulnerable across
                      Pakistan — the Lord's Table and family support together.
                    </p>{" "}
                    <a href="/ministries/compassion" className="card-readmore">
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
                      src="/assets/images/coppak/ministries/children/01.jpg"
                      alt="Children's ministry"
                    />
                  </div>{" "}
                  <div className="causes-one__content">
                    {" "}
                    <h3 className="causes-one__title">
                      {" "}
                      <a href="/ministries/children">
                        Children's ministry
                      </a>{" "}
                    </h3>{" "}
                    <p className="causes-one__text">
                      Loving, teaching, and discipling 1,500+ children every
                      Sunday — restoring hope and faith in the next generation.
                    </p>{" "}
                    <a href="/ministries/children" className="card-readmore">
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
                      src="/assets/images/coppak/ministries/sports/01.jpg"
                      alt="Sports ministry"
                    />
                  </div>{" "}
                  <div className="causes-one__content">
                    {" "}
                    <h3 className="causes-one__title">
                      {" "}
                      <a href="/ministries/sports">Sports ministry</a>{" "}
                    </h3>{" "}
                    <p className="causes-one__text">
                      Using cricket and sport as God-given doorways for
                      evangelism, discipleship, and church growth across
                      Pakistan.
                    </p>{" "}
                    <a href="/ministries/sports" className="card-readmore">
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
                      src="/assets/images/coppak/ministries/support-needy-families/welfare-01.jpg"
                      alt="Support needy families"
                    />
                  </div>{" "}
                  <div className="causes-one__content">
                    {" "}
                    <h3 className="causes-one__title">
                      {" "}
                      <a href="/ministries/support-needy-families">
                        Support needy families
                      </a>{" "}
                    </h3>{" "}
                    <p className="causes-one__text">
                      Walking with Christian families through hardship — monthly
                      groceries, school supplies, baby essentials, and pastoral
                      care that doesn't stop at a doorstep.
                    </p>{" "}
                    <a
                      href="/ministries/support-needy-families"
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
                      src="/assets/images/coppak/ministries/women/01.jpg"
                      alt="Women's ministry"
                    />
                  </div>{" "}
                  <div className="causes-one__content">
                    {" "}
                    <h3 className="causes-one__title">
                      {" "}
                      <a href="/ministries/women">Women's ministry</a>{" "}
                    </h3>{" "}
                    <p className="causes-one__text">
                      Empowering, equipping, and walking alongside Pakistani
                      Christian women through fellowship, conferences, and skill
                      development.
                    </p>{" "}
                    <a href="/ministries/women" className="card-readmore">
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
                data-wow-delay="600ms"
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
                      src="/assets/images/coppak/ministries/pensa-youth/01.jpg"
                      alt="Youth & PENSA Pakistan"
                    />
                  </div>{" "}
                  <div className="causes-one__content">
                    {" "}
                    <h3 className="causes-one__title">
                      {" "}
                      <a href="/ministries/youth-pensa">
                        Youth &amp; PENSA Pakistan
                      </a>{" "}
                    </h3>{" "}
                    <p className="causes-one__text">
                      Reaching the next generation of Pakistan with the gospel —
                      through PENSA discipleship, sports evangelism, and
                      Spirit-led mentorship for students and young
                      professionals.
                    </p>{" "}
                    <a href="/ministries/youth-pensa" className="card-readmore">
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
