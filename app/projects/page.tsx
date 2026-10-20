import type { Metadata } from "next";
import LegacyScripts from "../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Projects | COPPAK.ORG",
  description:
    "COPPAK's projects — long-term works of compassion, justice, and gospel ministry.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | COPPAK.ORG",
    description:
      "COPPAK's projects — long-term works of compassion, justice, and gospel ministry.",
    url: "/projects",
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
  "/scripts/migrated/projects-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="page-hero"
          style={{
            backgroundImage:
              "linear-gradient(178deg, rgba(13,22,52,0.86) 0%, rgba(13,22,52,0.9) 55%, rgba(10,20,48,0.94) 100%), url(/assets/images/coppak/projects/brick-kiln/01.jpg)",
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
                  <span>Projects</span>{" "}
                </li>
              </ul>{" "}
              <h1 className="page-hero__title">Projects</h1>{" "}
              <p className="page-hero__subtitle">
                Real work, real lives transformed across Pakistan.
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
                Long-term works
              </span>{" "}
              <h2 className="section-title__title">
                Projects fueling lasting change
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
                      src="/assets/images/coppak/projects/disaster-recovery/01.jpg"
                      alt="Disaster recovery"
                    />{" "}
                    <div className="causes-one__cat">
                      <p>As needed</p>
                    </div>{" "}
                  </div>{" "}
                  <div className="causes-one__content">
                    {" "}
                    <h3 className="causes-one__title">
                      {" "}
                      <a href="/projects/natural-disaster-recovery">
                        Disaster recovery
                      </a>{" "}
                    </h3>{" "}
                    <p className="causes-one__text">
                      Responding to floods, earthquakes, storms, fires, and
                      droughts with compassion, urgency, and hope.
                    </p>{" "}
                    <a
                      href="/projects/natural-disaster-recovery"
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
                      src="/assets/images/coppak/projects/medical-camps/01.jpg"
                      alt="Free medical camps"
                    />{" "}
                    <div className="causes-one__cat">
                      <p>Recurring</p>
                    </div>{" "}
                  </div>{" "}
                  <div className="causes-one__content">
                    {" "}
                    <h3 className="causes-one__title">
                      {" "}
                      <a href="/projects/free-medical-camps">
                        Free medical camps
                      </a>{" "}
                    </h3>{" "}
                    <p className="causes-one__text">
                      Doctors, medicines, and prayer — bringing free, dignified
                      medical care to communities that need it most.
                    </p>{" "}
                    <a
                      href="/projects/free-medical-camps"
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
                      src="/assets/images/coppak/projects/adult-literacy/01.jpg"
                      alt="Adult literacy program"
                    />{" "}
                    <div className="causes-one__cat">
                      <p>Growing</p>
                    </div>{" "}
                  </div>{" "}
                  <div className="causes-one__content">
                    {" "}
                    <h3 className="causes-one__title">
                      {" "}
                      <a href="/projects/adult-literacy">
                        Adult literacy program
                      </a>{" "}
                    </h3>{" "}
                    <p className="causes-one__text">
                      A second chance at education for adults — especially
                      women, widows, and brick-kiln workers — across
                      marginalized Christian communities.
                    </p>{" "}
                    <a
                      href="/projects/adult-literacy"
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
                      src="/assets/images/coppak/projects/bible-translation/01.png"
                      alt="Bible translation"
                    />{" "}
                    <div className="causes-one__cat">
                      <p>In progress</p>
                    </div>{" "}
                  </div>{" "}
                  <div className="causes-one__content">
                    {" "}
                    <h3 className="causes-one__title">
                      {" "}
                      <a href="/projects/bible-translation">
                        Bible translation
                      </a>{" "}
                    </h3>{" "}
                    <p className="causes-one__text">
                      Translating Scripture into Marwari, Hindko, Saraiki,
                      Potohari, and Kashmiri — in partnership with Wycliffe
                      Associates.
                    </p>{" "}
                    <a
                      href="/projects/bible-translation"
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
                      src="/assets/images/coppak/projects/brick-kiln/01.jpg"
                      alt="Brick-kiln deliverance"
                    />{" "}
                    <div className="causes-one__cat">
                      <p>Ongoing</p>
                    </div>{" "}
                  </div>{" "}
                  <div className="causes-one__content">
                    {" "}
                    <h3 className="causes-one__title">
                      {" "}
                      <a href="/projects/brick-kiln-deliverance">
                        Brick-kiln deliverance
                      </a>{" "}
                    </h3>{" "}
                    <p className="causes-one__text">
                      Rescuing Christian families from generational bonded
                      labour — paying their debts, restoring freedom, educating
                      their children.
                    </p>{" "}
                    <a
                      href="/projects/brick-kiln-deliverance"
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
                      src="/assets/images/coppak/projects/collective-marriages/01.jpg"
                      alt="Collective marriages"
                    />{" "}
                    <div className="causes-one__cat">
                      <p>Recurring</p>
                    </div>{" "}
                  </div>{" "}
                  <div className="causes-one__content">
                    {" "}
                    <h3 className="causes-one__title">
                      {" "}
                      <a href="/projects/collective-marriages">
                        Collective marriages
                      </a>{" "}
                    </h3>{" "}
                    <p className="causes-one__text">
                      Restoring dignity to vulnerable Christian families — from
                      Joseph Colony (2013) to the brick-kiln daughters of 2024.
                    </p>{" "}
                    <a
                      href="/projects/collective-marriages"
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
                data-wow-delay="700ms"
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
                      src="/assets/images/coppak/projects/persecution/01.jpg"
                      alt="Persecution response"
                    />{" "}
                    <div className="causes-one__cat">
                      <p>Ongoing</p>
                    </div>{" "}
                  </div>{" "}
                  <div className="causes-one__content">
                    {" "}
                    <h3 className="causes-one__title">
                      {" "}
                      <a href="/projects/persecution">
                        Persecution response
                      </a>{" "}
                    </h3>{" "}
                    <p className="causes-one__text">
                      Practical relief and steady accompaniment for Christian
                      families affected by faith-based persecution in Pakistan.
                    </p>{" "}
                    <a href="/projects/persecution" className="card-readmore">
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
