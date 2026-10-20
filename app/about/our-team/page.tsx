import type { Metadata } from "next";
import LegacyScripts from "../../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Our team | COPPAK.ORG",
  description:
    "Meet the national team leading The Church of Pentecost Pakistan — area heads, ministry directors, and senior leaders.",
  alternates: { canonical: "/about/our-team" },
  openGraph: {
    title: "Our team | COPPAK.ORG",
    description:
      "Meet the national team leading The Church of Pentecost Pakistan — area heads, ministry directors, and senior leaders.",
    url: "/about/our-team",
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
  "/scripts/migrated/about-our-team-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="page-hero"
          style={{
            backgroundImage:
              "linear-gradient(178deg, rgba(13,22,52,0.86) 0%, rgba(13,22,52,0.9) 55%, rgba(10,20,48,0.94) 100%), url(/assets/images/coppak/conferences/02.jpg)",
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
                <li className="">
                  {" "}
                  <a href="/about">About</a>{" "}
                </li>{" "}
                <li className="page-hero__crumb-sep" aria-hidden="true">
                  /
                </li>{" "}
                <li className="is-current">
                  {" "}
                  <span>Our team</span>{" "}
                </li>
              </ul>{" "}
              <h1 className="page-hero__title">Our team</h1>{" "}
              <p className="page-hero__subtitle">
                The people serving God and their communities across our eight
                districts.
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
                National leadership
              </span>{" "}
              <h2 className="section-title__title">
                The people behind the work
              </h2>{" "}
            </div>{" "}
            <div className="row" style={{ marginTop: 48 }}>
              {" "}
              <div className="col-xl-4 col-md-6" style={{ marginBottom: 32 }}>
                {" "}
                <article
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(15,27,61,0.06)",
                    border: "1px solid rgba(15,27,61,0.06)",
                    height: "100%",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      aspectRatio: "4/5",
                      background: "#f5f1ea",
                      overflow: "hidden",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/about/team/jamil-nasir.jpg"
                      alt="Rev. Dr. Jamil Nasir"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />{" "}
                  </div>{" "}
                  <div style={{ padding: 24 }}>
                    {" "}
                    <h4 style={{ margin: "0 0 6px", fontSize: 20 }}>
                      {" "}
                      <a href="/about/leadership">Rev. Dr. Jamil Nasir</a>{" "}
                    </h4>{" "}
                    <p
                      style={{
                        margin: "0 0 8px",
                        color: "var(--oxpins-base)",
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                    >
                      {" "}
                      National Head &amp; Principal, Pentecost University
                      Pakistan Campus{" "}
                    </p>{" "}
                    <p
                      style={{
                        margin: 0,
                        fontSize: 14,
                        opacity: "0.85",
                        lineHeight: "1.5",
                      }}
                    >
                      {" "}
                      Apostle, theologian, author of 29 books, and founder of
                      The Church of Pentecost Pakistan.{" "}
                    </p>{" "}
                  </div>{" "}
                </article>{" "}
              </div>
              <div className="col-xl-4 col-md-6" style={{ marginBottom: 32 }}>
                {" "}
                <article
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(15,27,61,0.06)",
                    border: "1px solid rgba(15,27,61,0.06)",
                    height: "100%",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      aspectRatio: "4/5",
                      background: "#f5f1ea",
                      overflow: "hidden",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/about/team/palous-barket.jpg"
                      alt="Rev. Palous Barket"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />{" "}
                  </div>{" "}
                  <div style={{ padding: 24 }}>
                    {" "}
                    <h4 style={{ margin: "0 0 6px", fontSize: 20 }}>
                      {" "}
                      Rev. Palous Barket{" "}
                    </h4>{" "}
                    <p
                      style={{
                        margin: "0 0 8px",
                        color: "var(--oxpins-base)",
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                    >
                      {" "}
                      General Secretary{" "}
                    </p>
                  </div>{" "}
                </article>{" "}
              </div>
              <div className="col-xl-4 col-md-6" style={{ marginBottom: 32 }}>
                {" "}
                <article
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(15,27,61,0.06)",
                    border: "1px solid rgba(15,27,61,0.06)",
                    height: "100%",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      aspectRatio: "4/5",
                      background: "#f5f1ea",
                      overflow: "hidden",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/about/team/simon-khan.jpg"
                      alt="Pastor Simon Khan"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />{" "}
                  </div>{" "}
                  <div style={{ padding: 24 }}>
                    {" "}
                    <h4 style={{ margin: "0 0 6px", fontSize: 20 }}>
                      {" "}
                      Pastor Simon Khan{" "}
                    </h4>{" "}
                    <p
                      style={{
                        margin: "0 0 8px",
                        color: "var(--oxpins-base)",
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                    >
                      {" "}
                      National Finance Secretary{" "}
                    </p>
                  </div>{" "}
                </article>{" "}
              </div>
              <div className="col-xl-4 col-md-6" style={{ marginBottom: 32 }}>
                {" "}
                <article
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(15,27,61,0.06)",
                    border: "1px solid rgba(15,27,61,0.06)",
                    height: "100%",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      aspectRatio: "4/5",
                      background: "#f5f1ea",
                      overflow: "hidden",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/about/team/zohaib-qasir.jpg"
                      alt="Pastor Zohaib Qasir"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />{" "}
                  </div>{" "}
                  <div style={{ padding: 24 }}>
                    {" "}
                    <h4 style={{ margin: "0 0 6px", fontSize: 20 }}>
                      {" "}
                      Pastor Zohaib Qasir{" "}
                    </h4>{" "}
                    <p
                      style={{
                        margin: "0 0 8px",
                        color: "var(--oxpins-base)",
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                    >
                      {" "}
                      National Deacon{" "}
                    </p>{" "}
                    <p
                      style={{
                        margin: 0,
                        fontSize: 14,
                        opacity: "0.85",
                        lineHeight: "1.5",
                      }}
                    >
                      {" "}
                      Graduate of Pentecost Theological Bible College, leading
                      church growth, evangelism, and administration.{" "}
                    </p>{" "}
                  </div>{" "}
                </article>{" "}
              </div>
              <div className="col-xl-4 col-md-6" style={{ marginBottom: 32 }}>
                {" "}
                <article
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(15,27,61,0.06)",
                    border: "1px solid rgba(15,27,61,0.06)",
                    height: "100%",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      aspectRatio: "4/5",
                      background: "#f5f1ea",
                      overflow: "hidden",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/about/team/shakeel-nasir.png"
                      alt="Rev. Shakeel Nasir"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />{" "}
                  </div>{" "}
                  <div style={{ padding: 24 }}>
                    {" "}
                    <h4 style={{ margin: "0 0 6px", fontSize: 20 }}>
                      {" "}
                      Rev. Shakeel Nasir{" "}
                    </h4>{" "}
                    <p
                      style={{
                        margin: "0 0 8px",
                        color: "var(--oxpins-base)",
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                    >
                      {" "}
                      Area Head, Lahore{" "}
                    </p>
                  </div>{" "}
                </article>{" "}
              </div>
              <div className="col-xl-4 col-md-6" style={{ marginBottom: 32 }}>
                {" "}
                <article
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(15,27,61,0.06)",
                    border: "1px solid rgba(15,27,61,0.06)",
                    height: "100%",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      aspectRatio: "4/5",
                      background: "#f5f1ea",
                      overflow: "hidden",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/about/team/matti-karmat.jpg"
                      alt="Rev. Matti Karmat"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />{" "}
                  </div>{" "}
                  <div style={{ padding: 24 }}>
                    {" "}
                    <h4 style={{ margin: "0 0 6px", fontSize: 20 }}>
                      {" "}
                      Rev. Matti Karmat{" "}
                    </h4>{" "}
                    <p
                      style={{
                        margin: "0 0 8px",
                        color: "var(--oxpins-base)",
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                    >
                      {" "}
                      Area Head, Sheikhupura{" "}
                    </p>
                  </div>{" "}
                </article>{" "}
              </div>
              <div className="col-xl-4 col-md-6" style={{ marginBottom: 32 }}>
                {" "}
                <article
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(15,27,61,0.06)",
                    border: "1px solid rgba(15,27,61,0.06)",
                    height: "100%",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      aspectRatio: "4/5",
                      background: "#f5f1ea",
                      overflow: "hidden",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/about/team/farman-naz.jpg"
                      alt="Rev. Farman Naz"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />{" "}
                  </div>{" "}
                  <div style={{ padding: 24 }}>
                    {" "}
                    <h4 style={{ margin: "0 0 6px", fontSize: 20 }}>
                      {" "}
                      Rev. Farman Naz{" "}
                    </h4>{" "}
                    <p
                      style={{
                        margin: "0 0 8px",
                        color: "var(--oxpins-base)",
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                    >
                      {" "}
                      Area Head, Islamabad{" "}
                    </p>
                  </div>{" "}
                </article>{" "}
              </div>
              <div className="col-xl-4 col-md-6" style={{ marginBottom: 32 }}>
                {" "}
                <article
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(15,27,61,0.06)",
                    border: "1px solid rgba(15,27,61,0.06)",
                    height: "100%",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      aspectRatio: "4/5",
                      background: "#f5f1ea",
                      overflow: "hidden",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/about/team/zakria-john.jpg"
                      alt="Rev. Zakria John"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />{" "}
                  </div>{" "}
                  <div style={{ padding: 24 }}>
                    {" "}
                    <h4 style={{ margin: "0 0 6px", fontSize: 20 }}>
                      {" "}
                      Rev. Zakria John{" "}
                    </h4>{" "}
                    <p
                      style={{
                        margin: "0 0 8px",
                        color: "var(--oxpins-base)",
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                    >
                      {" "}
                      Area Head, Faisalabad{" "}
                    </p>
                  </div>{" "}
                </article>{" "}
              </div>
              <div className="col-xl-4 col-md-6" style={{ marginBottom: 32 }}>
                {" "}
                <article
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(15,27,61,0.06)",
                    border: "1px solid rgba(15,27,61,0.06)",
                    height: "100%",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      aspectRatio: "4/5",
                      background: "#f5f1ea",
                      overflow: "hidden",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/about/team/rose-mary.jpg"
                      alt="Rose Mary Nasir"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />{" "}
                  </div>{" "}
                  <div style={{ padding: 24 }}>
                    {" "}
                    <h4 style={{ margin: "0 0 6px", fontSize: 20 }}>
                      {" "}
                      Rose Mary Nasir{" "}
                    </h4>{" "}
                    <p
                      style={{
                        margin: "0 0 8px",
                        color: "var(--oxpins-base)",
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                    >
                      {" "}
                      Women Ministry Director{" "}
                    </p>
                  </div>{" "}
                </article>{" "}
              </div>
              <div className="col-xl-4 col-md-6" style={{ marginBottom: 32 }}>
                {" "}
                <article
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(15,27,61,0.06)",
                    border: "1px solid rgba(15,27,61,0.06)",
                    height: "100%",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      aspectRatio: "4/5",
                      background: "#f5f1ea",
                      overflow: "hidden",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/about/team/amina-mudasir.jpg"
                      alt="Amina Mudasir"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />{" "}
                  </div>{" "}
                  <div style={{ padding: 24 }}>
                    {" "}
                    <h4 style={{ margin: "0 0 6px", fontSize: 20 }}>
                      {" "}
                      Amina Mudasir{" "}
                    </h4>{" "}
                    <p
                      style={{
                        margin: "0 0 8px",
                        color: "var(--oxpins-base)",
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                    >
                      {" "}
                      Children Ministry Director{" "}
                    </p>
                  </div>{" "}
                </article>{" "}
              </div>
              <div className="col-xl-4 col-md-6" style={{ marginBottom: 32 }}>
                {" "}
                <article
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(15,27,61,0.06)",
                    border: "1px solid rgba(15,27,61,0.06)",
                    height: "100%",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      aspectRatio: "4/5",
                      background: "#f5f1ea",
                      overflow: "hidden",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/about/team/shulammite-nasir.jpg"
                      alt="Mr. Shulammite Nasir"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />{" "}
                  </div>{" "}
                  <div style={{ padding: 24 }}>
                    {" "}
                    <h4 style={{ margin: "0 0 6px", fontSize: 20 }}>
                      {" "}
                      Mr. Shulammite Nasir{" "}
                    </h4>{" "}
                    <p
                      style={{
                        margin: "0 0 8px",
                        color: "var(--oxpins-base)",
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                    >
                      {" "}
                      PENSA Youth Director &amp; Alpha Pakistan Vision
                      Bearer{" "}
                    </p>
                  </div>{" "}
                </article>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
      </div>
      <LegacyScripts sources={scripts} />
    </>
  );
}
