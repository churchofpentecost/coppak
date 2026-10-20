import type { Metadata } from "next";
import LegacyScripts from "../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Events | COPPAK.ORG",
  description:
    "Recurring rhythms of worship, evangelism, and ministry across The Church of Pentecost Pakistan.",
  alternates: { canonical: "/events" },
  openGraph: {
    title: "Events | COPPAK.ORG",
    description:
      "Recurring rhythms of worship, evangelism, and ministry across The Church of Pentecost Pakistan.",
    url: "/events",
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
  "/scripts/migrated/events-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="page-hero"
          style={{
            backgroundImage:
              "linear-gradient(178deg, rgba(13,22,52,0.86) 0%, rgba(13,22,52,0.9) 55%, rgba(10,20,48,0.94) 100%), url(/assets/images/coppak/outreach/mass-evangelism/01.jpg)",
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
                  <span>Events</span>{" "}
                </li>
              </ul>{" "}
              <h1 className="page-hero__title">Events</h1>{" "}
              <p className="page-hero__subtitle">
                Worship, evangelism, and conventions happening year-round across
                COPPAK.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section style={{ padding: "100px 0" }}>
          {" "}
          <div className="container">
            {" "}
            <div className="section-title text-center">
              {" "}
              <span className="section-title__tagline">
                What's happening
              </span>{" "}
              <h2 className="section-title__title">
                Recurring events across COPPAK
              </h2>{" "}
            </div>{" "}
            <div className="row" style={{ marginTop: 48 }}>
              {" "}
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay="100ms"
                style={{ marginBottom: 32 }}
              >
                {" "}
                <article
                  style={{
                    display: "grid",
                    gridTemplateColumns: "220px 1fr",
                    gap: 0,
                    background: "#fff",
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(15,27,61,0.06)",
                    border: "1px solid rgba(15,27,61,0.06)",
                    height: "100%",
                  }}
                >
                  {" "}
                  <div style={{ background: "#f5f1ea" }}>
                    {" "}
                    <img
                      src="/assets/images/coppak/services/sunday/01.jpg"
                      alt="Sunday worship service"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />{" "}
                  </div>{" "}
                  <div style={{ padding: 24 }}>
                    {" "}
                    <p
                      style={{
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        fontSize: 11,
                        color: "var(--oxpins-base)",
                        marginBottom: 8,
                        fontWeight: 700,
                      }}
                    >
                      {" "}
                      Every Sunday{" "}
                    </p>{" "}
                    <h4 style={{ margin: "0 0 8px", fontSize: 20 }}>
                      {" "}
                      <a href="/church-services/sunday-service">
                        Sunday worship service
                      </a>{" "}
                    </h4>{" "}
                    <p
                      style={{
                        margin: 0,
                        fontSize: 14,
                        opacity: "0.75",
                        lineHeight: "1.4",
                      }}
                    >
                      {" "}
                      All 19 COPPAK buildings + outdoor &amp; home
                      gatherings{" "}
                    </p>{" "}
                  </div>{" "}
                </article>{" "}
              </div>
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay="200ms"
                style={{ marginBottom: 32 }}
              >
                {" "}
                <article
                  style={{
                    display: "grid",
                    gridTemplateColumns: "220px 1fr",
                    gap: 0,
                    background: "#fff",
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(15,27,61,0.06)",
                    border: "1px solid rgba(15,27,61,0.06)",
                    height: "100%",
                  }}
                >
                  {" "}
                  <div style={{ background: "#f5f1ea" }}>
                    {" "}
                    <img
                      src="/assets/images/coppak/services/communion/01.jpg"
                      alt="Holy Communion"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />{" "}
                  </div>{" "}
                  <div style={{ padding: 24 }}>
                    {" "}
                    <p
                      style={{
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        fontSize: 11,
                        color: "var(--oxpins-base)",
                        marginBottom: 8,
                        fontWeight: 700,
                      }}
                    >
                      {" "}
                      First Sunday of every month{" "}
                    </p>{" "}
                    <h4 style={{ margin: "0 0 8px", fontSize: 20 }}>
                      {" "}
                      <a href="/church-services/holy-communion">
                        Holy Communion
                      </a>{" "}
                    </h4>{" "}
                    <p
                      style={{
                        margin: 0,
                        fontSize: 14,
                        opacity: "0.75",
                        lineHeight: "1.4",
                      }}
                    >
                      {" "}
                      All COPPAK assemblies nationwide{" "}
                    </p>{" "}
                  </div>{" "}
                </article>{" "}
              </div>
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay="300ms"
                style={{ marginBottom: 32 }}
              >
                {" "}
                <article
                  style={{
                    display: "grid",
                    gridTemplateColumns: "220px 1fr",
                    gap: 0,
                    background: "#fff",
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(15,27,61,0.06)",
                    border: "1px solid rgba(15,27,61,0.06)",
                    height: "100%",
                  }}
                >
                  {" "}
                  <div style={{ background: "#f5f1ea" }}>
                    {" "}
                    <img
                      src="/assets/images/coppak/services/baptism/01.jpg"
                      alt="Baptism service"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />{" "}
                  </div>{" "}
                  <div style={{ padding: 24 }}>
                    {" "}
                    <p
                      style={{
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        fontSize: 11,
                        color: "var(--oxpins-base)",
                        marginBottom: 8,
                        fontWeight: 700,
                      }}
                    >
                      {" "}
                      Quarterly{" "}
                    </p>{" "}
                    <h4 style={{ margin: "0 0 8px", fontSize: 20 }}>
                      {" "}
                      <a href="/church-services/baptism">
                        Baptism service
                      </a>{" "}
                    </h4>{" "}
                    <p
                      style={{
                        margin: 0,
                        fontSize: 14,
                        opacity: "0.75",
                        lineHeight: "1.4",
                      }}
                    >
                      {" "}
                      In every district — parks, rivers, and pools{" "}
                    </p>{" "}
                  </div>{" "}
                </article>{" "}
              </div>
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay="400ms"
                style={{ marginBottom: 32 }}
              >
                {" "}
                <article
                  style={{
                    display: "grid",
                    gridTemplateColumns: "220px 1fr",
                    gap: 0,
                    background: "#fff",
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(15,27,61,0.06)",
                    border: "1px solid rgba(15,27,61,0.06)",
                    height: "100%",
                  }}
                >
                  {" "}
                  <div style={{ background: "#f5f1ea" }}>
                    {" "}
                    <img
                      src="/assets/images/coppak/outreach/public-rallies/01.jpg"
                      alt="Public rallies & prayer marches"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />{" "}
                  </div>{" "}
                  <div style={{ padding: 24 }}>
                    {" "}
                    <p
                      style={{
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        fontSize: 11,
                        color: "var(--oxpins-base)",
                        marginBottom: 8,
                        fontWeight: 700,
                      }}
                    >
                      {" "}
                      Christmas, Easter &amp; throughout the year{" "}
                    </p>{" "}
                    <h4 style={{ margin: "0 0 8px", fontSize: 20 }}>
                      {" "}
                      <a href="/outreach/public-rallies">
                        Public rallies &amp; prayer marches
                      </a>{" "}
                    </h4>{" "}
                    <p
                      style={{
                        margin: 0,
                        fontSize: 14,
                        opacity: "0.75",
                        lineHeight: "1.4",
                      }}
                    >
                      {" "}
                      Cities across Pakistan (NOC-approved){" "}
                    </p>{" "}
                  </div>{" "}
                </article>{" "}
              </div>
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay="100ms"
                style={{ marginBottom: 32 }}
              >
                {" "}
                <article
                  style={{
                    display: "grid",
                    gridTemplateColumns: "220px 1fr",
                    gap: 0,
                    background: "#fff",
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(15,27,61,0.06)",
                    border: "1px solid rgba(15,27,61,0.06)",
                    height: "100%",
                  }}
                >
                  {" "}
                  <div style={{ background: "#f5f1ea" }}>
                    {" "}
                    <img
                      src="/assets/images/coppak/outreach/home-cell/01.jpg"
                      alt="Home cell groups"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />{" "}
                  </div>{" "}
                  <div style={{ padding: 24 }}>
                    {" "}
                    <p
                      style={{
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        fontSize: 11,
                        color: "var(--oxpins-base)",
                        marginBottom: 8,
                        fontWeight: 700,
                      }}
                    >
                      {" "}
                      Weekly{" "}
                    </p>{" "}
                    <h4 style={{ margin: "0 0 8px", fontSize: 20 }}>
                      {" "}
                      <a href="/outreach/home-cell">Home cell groups</a>{" "}
                    </h4>{" "}
                    <p
                      style={{
                        margin: 0,
                        fontSize: 14,
                        opacity: "0.75",
                        lineHeight: "1.4",
                      }}
                    >
                      {" "}
                      Believers' homes across Pakistan{" "}
                    </p>{" "}
                  </div>{" "}
                </article>{" "}
              </div>
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay="200ms"
                style={{ marginBottom: 32 }}
              >
                {" "}
                <article
                  style={{
                    display: "grid",
                    gridTemplateColumns: "220px 1fr",
                    gap: 0,
                    background: "#fff",
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(15,27,61,0.06)",
                    border: "1px solid rgba(15,27,61,0.06)",
                    height: "100%",
                  }}
                >
                  {" "}
                  <div style={{ background: "#f5f1ea" }}>
                    {" "}
                    <img
                      src="/assets/images/coppak/outreach/mass-evangelism/01.jpg"
                      alt="Mass evangelism crusades"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />{" "}
                  </div>{" "}
                  <div style={{ padding: 24 }}>
                    {" "}
                    <p
                      style={{
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        fontSize: 11,
                        color: "var(--oxpins-base)",
                        marginBottom: 8,
                        fontWeight: 700,
                      }}
                    >
                      {" "}
                      Periodic — open-air &amp; stadium{" "}
                    </p>{" "}
                    <h4 style={{ margin: "0 0 8px", fontSize: 20 }}>
                      {" "}
                      <a href="/outreach/mass-evangelism">
                        Mass evangelism crusades
                      </a>{" "}
                    </h4>{" "}
                    <p
                      style={{
                        margin: 0,
                        fontSize: 14,
                        opacity: "0.75",
                        lineHeight: "1.4",
                      }}
                    >
                      {" "}
                      NOC-approved venues nationwide{" "}
                    </p>{" "}
                  </div>{" "}
                </article>{" "}
              </div>
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay="300ms"
                style={{ marginBottom: 32 }}
              >
                {" "}
                <article
                  style={{
                    display: "grid",
                    gridTemplateColumns: "220px 1fr",
                    gap: 0,
                    background: "#fff",
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(15,27,61,0.06)",
                    border: "1px solid rgba(15,27,61,0.06)",
                    height: "100%",
                  }}
                >
                  {" "}
                  <div style={{ background: "#f5f1ea" }}>
                    {" "}
                    <img
                      src="/assets/images/coppak/ministries/children/01.jpg"
                      alt="National Children's Convention"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />{" "}
                  </div>{" "}
                  <div style={{ padding: 24 }}>
                    {" "}
                    <p
                      style={{
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        fontSize: 11,
                        color: "var(--oxpins-base)",
                        marginBottom: 8,
                        fontWeight: 700,
                      }}
                    >
                      {" "}
                      Annual{" "}
                    </p>{" "}
                    <h4 style={{ margin: "0 0 8px", fontSize: 20 }}>
                      {" "}
                      <a href="/ministries/children">
                        National Children's Convention
                      </a>{" "}
                    </h4>{" "}
                    <p
                      style={{
                        margin: 0,
                        fontSize: 14,
                        opacity: "0.75",
                        lineHeight: "1.4",
                      }}
                    >
                      {" "}
                      Hosted nationally{" "}
                    </p>{" "}
                  </div>{" "}
                </article>{" "}
              </div>
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay="400ms"
                style={{ marginBottom: 32 }}
              >
                {" "}
                <article
                  style={{
                    display: "grid",
                    gridTemplateColumns: "220px 1fr",
                    gap: 0,
                    background: "#fff",
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(15,27,61,0.06)",
                    border: "1px solid rgba(15,27,61,0.06)",
                    height: "100%",
                  }}
                >
                  {" "}
                  <div style={{ background: "#f5f1ea" }}>
                    {" "}
                    <img
                      src="/assets/images/coppak/ministries/children/02.jpg"
                      alt="Vacation Bible Schools"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />{" "}
                  </div>{" "}
                  <div style={{ padding: 24 }}>
                    {" "}
                    <p
                      style={{
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        fontSize: 11,
                        color: "var(--oxpins-base)",
                        marginBottom: 8,
                        fontWeight: 700,
                      }}
                    >
                      {" "}
                      Annual — in every district{" "}
                    </p>{" "}
                    <h4 style={{ margin: "0 0 8px", fontSize: 20 }}>
                      {" "}
                      <a href="/ministries/children">
                        Vacation Bible Schools
                      </a>{" "}
                    </h4>{" "}
                    <p
                      style={{
                        margin: 0,
                        fontSize: 14,
                        opacity: "0.75",
                        lineHeight: "1.4",
                      }}
                    >
                      {" "}
                      Across all COPPAK districts{" "}
                    </p>{" "}
                  </div>{" "}
                </article>{" "}
              </div>
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay="100ms"
                style={{ marginBottom: 32 }}
              >
                {" "}
                <article
                  style={{
                    display: "grid",
                    gridTemplateColumns: "220px 1fr",
                    gap: 0,
                    background: "#fff",
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(15,27,61,0.06)",
                    border: "1px solid rgba(15,27,61,0.06)",
                    height: "100%",
                  }}
                >
                  {" "}
                  <div style={{ background: "#f5f1ea" }}>
                    {" "}
                    <img
                      src="/assets/images/coppak/ministries/women/01.jpg"
                      alt="National Women's Conference"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />{" "}
                  </div>{" "}
                  <div style={{ padding: 24 }}>
                    {" "}
                    <p
                      style={{
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        fontSize: 11,
                        color: "var(--oxpins-base)",
                        marginBottom: 8,
                        fontWeight: 700,
                      }}
                    >
                      {" "}
                      Annual{" "}
                    </p>{" "}
                    <h4 style={{ margin: "0 0 8px", fontSize: 20 }}>
                      {" "}
                      <a href="/ministries/women">
                        National Women's Conference
                      </a>{" "}
                    </h4>{" "}
                    <p
                      style={{
                        margin: 0,
                        fontSize: 14,
                        opacity: "0.75",
                        lineHeight: "1.4",
                      }}
                    >
                      {" "}
                      Plus local seminars throughout the year{" "}
                    </p>{" "}
                  </div>{" "}
                </article>{" "}
              </div>
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay="200ms"
                style={{ marginBottom: 32 }}
              >
                {" "}
                <article
                  style={{
                    display: "grid",
                    gridTemplateColumns: "220px 1fr",
                    gap: 0,
                    background: "#fff",
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(15,27,61,0.06)",
                    border: "1px solid rgba(15,27,61,0.06)",
                    height: "100%",
                  }}
                >
                  {" "}
                  <div style={{ background: "#f5f1ea" }}>
                    {" "}
                    <img
                      src="/assets/images/coppak/conferences/01.jpg"
                      alt="Leadership conferences"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />{" "}
                  </div>{" "}
                  <div style={{ padding: 24 }}>
                    {" "}
                    <p
                      style={{
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        fontSize: 11,
                        color: "var(--oxpins-base)",
                        marginBottom: 8,
                        fontWeight: 700,
                      }}
                    >
                      {" "}
                      In-person and virtual{" "}
                    </p>{" "}
                    <h4 style={{ margin: "0 0 8px", fontSize: 20 }}>
                      {" "}
                      <a href="/conferences">Leadership conferences</a>{" "}
                    </h4>{" "}
                    <p
                      style={{
                        margin: 0,
                        fontSize: 14,
                        opacity: "0.75",
                        lineHeight: "1.4",
                      }}
                    >
                      {" "}
                      Hosted nationally &amp; internationally{" "}
                    </p>{" "}
                  </div>{" "}
                </article>{" "}
              </div>{" "}
            </div>{" "}
            <p
              style={{
                marginTop: 32,
                textAlign: "center",
                opacity: "0.75",
                maxWidth: 720,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              For specific dates, locations, and to register for upcoming
              crusades, conventions, conferences, or Alpha groups in your area,
              please <a href="/contact">contact us directly</a>.
            </p>{" "}
          </div>{" "}
        </section>
      </div>
      <LegacyScripts sources={scripts} />
    </>
  );
}
