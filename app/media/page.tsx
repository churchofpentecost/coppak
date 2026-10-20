import type { Metadata } from "next";
import LegacyScripts from "../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Media | COPPAK.ORG",
  description:
    "Photo galleries and social media from The Church of Pentecost Pakistan — sermons, outreach, ministry moments, and live-streamed worship.",
  alternates: { canonical: "/media" },
  openGraph: {
    title: "Media | COPPAK.ORG",
    description:
      "Photo galleries and social media from The Church of Pentecost Pakistan — sermons, outreach, ministry moments, and live-streamed worship.",
    url: "/media",
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
  "/scripts/migrated/media-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <section
          className="page-hero"
          style={{
            backgroundImage:
              "linear-gradient(178deg, rgba(13,22,52,0.86) 0%, rgba(13,22,52,0.9) 55%, rgba(10,20,48,0.94) 100%), url(/assets/images/coppak/outreach/mass-evangelism/02.jpg)",
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
                  <span>Media</span>{" "}
                </li>
              </ul>{" "}
              <h1 className="page-hero__title">Media</h1>{" "}
              <p className="page-hero__subtitle">
                Photos, videos, and stories from the life of the church.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section style={{ padding: "60px 0 24px" }}>
          {" "}
          <div className="container">
            {" "}
            <div className="section-title text-center">
              {" "}
              <span className="section-title__tagline">
                Watch &amp; follow
              </span>{" "}
              <h2 className="section-title__title">
                Connect with us online
              </h2>{" "}
            </div>{" "}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                justifyContent: "center",
                marginTop: 32,
              }}
            >
              {" "}
              <a
                href="https://www.youtube.com/@ThePentecostpakistan"
                target="_blank"
                rel="noopener"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 22px",
                  background: "#fff",
                  border: "1px solid rgba(15,27,61,0.1)",
                  borderRadius: 999,
                  fontWeight: 600,
                  color: "var(--oxpins-black)",
                  textDecoration: "none",
                }}
              >
                {" "}
                <i
                  className="fab fa-youtube"
                  style={{ color: "var(--oxpins-base)" }}
                />{" "}
                YouTube — The Pentecost Pakistan{" "}
              </a>
              <a
                href="https://www.facebook.com/revdrjamilnasir"
                target="_blank"
                rel="noopener"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 22px",
                  background: "#fff",
                  border: "1px solid rgba(15,27,61,0.1)",
                  borderRadius: 999,
                  fontWeight: 600,
                  color: "var(--oxpins-black)",
                  textDecoration: "none",
                }}
              >
                {" "}
                <i
                  className="fab fa-facebook"
                  style={{ color: "var(--oxpins-base)" }}
                />{" "}
                Facebook — Rev. Dr. Jamil Nasir{" "}
              </a>
              <a
                href="https://www.instagram.com/rev.dr.jamil_nasir/"
                target="_blank"
                rel="noopener"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 22px",
                  background: "#fff",
                  border: "1px solid rgba(15,27,61,0.1)",
                  borderRadius: 999,
                  fontWeight: 600,
                  color: "var(--oxpins-black)",
                  textDecoration: "none",
                }}
              >
                {" "}
                <i
                  className="fab fa-instagram"
                  style={{ color: "var(--oxpins-base)" }}
                />{" "}
                Instagram — @rev.dr.jamil_nasir{" "}
              </a>
              <a
                href="https://www.tiktok.com/@drjamilnasirofficial"
                target="_blank"
                rel="noopener"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 22px",
                  background: "#fff",
                  border: "1px solid rgba(15,27,61,0.1)",
                  borderRadius: 999,
                  fontWeight: 600,
                  color: "var(--oxpins-black)",
                  textDecoration: "none",
                }}
              >
                {" "}
                <i
                  className="fab fa-tiktok"
                  style={{ color: "var(--oxpins-base)" }}
                />{" "}
                TikTok — @drjamilnasirofficial{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section style={{ padding: "40px 0 100px" }}>
          {" "}
          <div className="container">
            {" "}
            <div className="section-title text-center">
              {" "}
              <span className="section-title__tagline">Our gallery</span>{" "}
              <h2 className="section-title__title">
                Moments from the field
              </h2>{" "}
            </div>{" "}
            <div className="row" style={{ marginTop: 32 }}>
              {" "}
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                style={{ marginBottom: 24 }}
              >
                {" "}
                <a
                  href="/church-services/sunday-service"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "1/1",
                      borderRadius: 14,
                      overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(15,27,61,0.08)",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/services/sunday/01.jpg"
                      alt="Sunday services"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease",
                      }}
                    />{" "}
                    <div
                      style={{
                        position: "absolute",
                        inset: "auto 0 0 0",
                        padding: "16px 18px",
                        background:
                          "linear-gradient(180deg, transparent, rgba(15,27,61,0.85))",
                        color: "#fff",
                      }}
                    >
                      {" "}
                      <p
                        style={{
                          margin: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          fontSize: 11,
                          opacity: "0.85",
                        }}
                      >
                        {" "}
                        Worship{" "}
                      </p>{" "}
                      <h5
                        style={{
                          margin: "4px 0 0",
                          color: "#fff",
                          fontSize: 17,
                        }}
                      >
                        {" "}
                        Sunday services{" "}
                      </h5>{" "}
                    </div>{" "}
                  </div>{" "}
                </a>{" "}
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                style={{ marginBottom: 24 }}
              >
                {" "}
                <a
                  href="/church-services/holy-communion"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "1/1",
                      borderRadius: 14,
                      overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(15,27,61,0.08)",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/services/communion/01.jpg"
                      alt="Holy Communion"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease",
                      }}
                    />{" "}
                    <div
                      style={{
                        position: "absolute",
                        inset: "auto 0 0 0",
                        padding: "16px 18px",
                        background:
                          "linear-gradient(180deg, transparent, rgba(15,27,61,0.85))",
                        color: "#fff",
                      }}
                    >
                      {" "}
                      <p
                        style={{
                          margin: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          fontSize: 11,
                          opacity: "0.85",
                        }}
                      >
                        {" "}
                        Service{" "}
                      </p>{" "}
                      <h5
                        style={{
                          margin: "4px 0 0",
                          color: "#fff",
                          fontSize: 17,
                        }}
                      >
                        {" "}
                        Holy Communion{" "}
                      </h5>{" "}
                    </div>{" "}
                  </div>{" "}
                </a>{" "}
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                style={{ marginBottom: 24 }}
              >
                {" "}
                <a
                  href="/church-services/baptism"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "1/1",
                      borderRadius: 14,
                      overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(15,27,61,0.08)",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/services/baptism/01.jpg"
                      alt="Baptism services"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease",
                      }}
                    />{" "}
                    <div
                      style={{
                        position: "absolute",
                        inset: "auto 0 0 0",
                        padding: "16px 18px",
                        background:
                          "linear-gradient(180deg, transparent, rgba(15,27,61,0.85))",
                        color: "#fff",
                      }}
                    >
                      {" "}
                      <p
                        style={{
                          margin: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          fontSize: 11,
                          opacity: "0.85",
                        }}
                      >
                        {" "}
                        Service{" "}
                      </p>{" "}
                      <h5
                        style={{
                          margin: "4px 0 0",
                          color: "#fff",
                          fontSize: 17,
                        }}
                      >
                        {" "}
                        Baptism services{" "}
                      </h5>{" "}
                    </div>{" "}
                  </div>{" "}
                </a>{" "}
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                style={{ marginBottom: 24 }}
              >
                {" "}
                <a
                  href="/outreach/mass-evangelism"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "1/1",
                      borderRadius: 14,
                      overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(15,27,61,0.08)",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/outreach/mass-evangelism/01.jpg"
                      alt="Mass evangelism"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease",
                      }}
                    />{" "}
                    <div
                      style={{
                        position: "absolute",
                        inset: "auto 0 0 0",
                        padding: "16px 18px",
                        background:
                          "linear-gradient(180deg, transparent, rgba(15,27,61,0.85))",
                        color: "#fff",
                      }}
                    >
                      {" "}
                      <p
                        style={{
                          margin: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          fontSize: 11,
                          opacity: "0.85",
                        }}
                      >
                        {" "}
                        Outreach{" "}
                      </p>{" "}
                      <h5
                        style={{
                          margin: "4px 0 0",
                          color: "#fff",
                          fontSize: 17,
                        }}
                      >
                        {" "}
                        Mass evangelism{" "}
                      </h5>{" "}
                    </div>{" "}
                  </div>{" "}
                </a>{" "}
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                style={{ marginBottom: 24 }}
              >
                {" "}
                <a
                  href="/outreach/public-rallies"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "1/1",
                      borderRadius: 14,
                      overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(15,27,61,0.08)",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/outreach/public-rallies/01.jpg"
                      alt="Public rallies"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease",
                      }}
                    />{" "}
                    <div
                      style={{
                        position: "absolute",
                        inset: "auto 0 0 0",
                        padding: "16px 18px",
                        background:
                          "linear-gradient(180deg, transparent, rgba(15,27,61,0.85))",
                        color: "#fff",
                      }}
                    >
                      {" "}
                      <p
                        style={{
                          margin: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          fontSize: 11,
                          opacity: "0.85",
                        }}
                      >
                        {" "}
                        Outreach{" "}
                      </p>{" "}
                      <h5
                        style={{
                          margin: "4px 0 0",
                          color: "#fff",
                          fontSize: 17,
                        }}
                      >
                        {" "}
                        Public rallies{" "}
                      </h5>{" "}
                    </div>{" "}
                  </div>{" "}
                </a>{" "}
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                style={{ marginBottom: 24 }}
              >
                {" "}
                <a
                  href="/outreach/alpha-groups"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "1/1",
                      borderRadius: 14,
                      overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(15,27,61,0.08)",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/outreach/alpha-groups/01.jpg"
                      alt="Alpha groups"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease",
                      }}
                    />{" "}
                    <div
                      style={{
                        position: "absolute",
                        inset: "auto 0 0 0",
                        padding: "16px 18px",
                        background:
                          "linear-gradient(180deg, transparent, rgba(15,27,61,0.85))",
                        color: "#fff",
                      }}
                    >
                      {" "}
                      <p
                        style={{
                          margin: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          fontSize: 11,
                          opacity: "0.85",
                        }}
                      >
                        {" "}
                        Outreach{" "}
                      </p>{" "}
                      <h5
                        style={{
                          margin: "4px 0 0",
                          color: "#fff",
                          fontSize: 17,
                        }}
                      >
                        {" "}
                        Alpha groups{" "}
                      </h5>{" "}
                    </div>{" "}
                  </div>{" "}
                </a>{" "}
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                style={{ marginBottom: 24 }}
              >
                {" "}
                <a
                  href="/ministries/children"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "1/1",
                      borderRadius: 14,
                      overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(15,27,61,0.08)",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/ministries/children/01.jpg"
                      alt="Children's ministry"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease",
                      }}
                    />{" "}
                    <div
                      style={{
                        position: "absolute",
                        inset: "auto 0 0 0",
                        padding: "16px 18px",
                        background:
                          "linear-gradient(180deg, transparent, rgba(15,27,61,0.85))",
                        color: "#fff",
                      }}
                    >
                      {" "}
                      <p
                        style={{
                          margin: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          fontSize: 11,
                          opacity: "0.85",
                        }}
                      >
                        {" "}
                        Ministry{" "}
                      </p>{" "}
                      <h5
                        style={{
                          margin: "4px 0 0",
                          color: "#fff",
                          fontSize: 17,
                        }}
                      >
                        {" "}
                        Children's ministry{" "}
                      </h5>{" "}
                    </div>{" "}
                  </div>{" "}
                </a>{" "}
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                style={{ marginBottom: 24 }}
              >
                {" "}
                <a
                  href="/ministries/women"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "1/1",
                      borderRadius: 14,
                      overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(15,27,61,0.08)",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/ministries/women/01.jpg"
                      alt="Women's ministry"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease",
                      }}
                    />{" "}
                    <div
                      style={{
                        position: "absolute",
                        inset: "auto 0 0 0",
                        padding: "16px 18px",
                        background:
                          "linear-gradient(180deg, transparent, rgba(15,27,61,0.85))",
                        color: "#fff",
                      }}
                    >
                      {" "}
                      <p
                        style={{
                          margin: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          fontSize: 11,
                          opacity: "0.85",
                        }}
                      >
                        {" "}
                        Ministry{" "}
                      </p>{" "}
                      <h5
                        style={{
                          margin: "4px 0 0",
                          color: "#fff",
                          fontSize: 17,
                        }}
                      >
                        {" "}
                        Women's ministry{" "}
                      </h5>{" "}
                    </div>{" "}
                  </div>{" "}
                </a>{" "}
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                style={{ marginBottom: 24 }}
              >
                {" "}
                <a
                  href="/ministries/youth-pensa"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "1/1",
                      borderRadius: 14,
                      overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(15,27,61,0.08)",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/ministries/pensa-youth/01.jpg"
                      alt="Youth & PENSA Pakistan"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease",
                      }}
                    />{" "}
                    <div
                      style={{
                        position: "absolute",
                        inset: "auto 0 0 0",
                        padding: "16px 18px",
                        background:
                          "linear-gradient(180deg, transparent, rgba(15,27,61,0.85))",
                        color: "#fff",
                      }}
                    >
                      {" "}
                      <p
                        style={{
                          margin: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          fontSize: 11,
                          opacity: "0.85",
                        }}
                      >
                        {" "}
                        Ministry{" "}
                      </p>{" "}
                      <h5
                        style={{
                          margin: "4px 0 0",
                          color: "#fff",
                          fontSize: 17,
                        }}
                      >
                        {" "}
                        Youth &amp; PENSA Pakistan{" "}
                      </h5>{" "}
                    </div>{" "}
                  </div>{" "}
                </a>{" "}
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                style={{ marginBottom: 24 }}
              >
                {" "}
                <a
                  href="/ministries/sports"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "1/1",
                      borderRadius: 14,
                      overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(15,27,61,0.08)",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/ministries/sports/01.jpg"
                      alt="Sports ministry"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease",
                      }}
                    />{" "}
                    <div
                      style={{
                        position: "absolute",
                        inset: "auto 0 0 0",
                        padding: "16px 18px",
                        background:
                          "linear-gradient(180deg, transparent, rgba(15,27,61,0.85))",
                        color: "#fff",
                      }}
                    >
                      {" "}
                      <p
                        style={{
                          margin: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          fontSize: 11,
                          opacity: "0.85",
                        }}
                      >
                        {" "}
                        Ministry{" "}
                      </p>{" "}
                      <h5
                        style={{
                          margin: "4px 0 0",
                          color: "#fff",
                          fontSize: 17,
                        }}
                      >
                        {" "}
                        Sports ministry{" "}
                      </h5>{" "}
                    </div>{" "}
                  </div>{" "}
                </a>{" "}
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                style={{ marginBottom: 24 }}
              >
                {" "}
                <a
                  href="/projects/bible-translation"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "1/1",
                      borderRadius: 14,
                      overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(15,27,61,0.08)",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/projects/bible-translation/01.png"
                      alt="Bible translation"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease",
                      }}
                    />{" "}
                    <div
                      style={{
                        position: "absolute",
                        inset: "auto 0 0 0",
                        padding: "16px 18px",
                        background:
                          "linear-gradient(180deg, transparent, rgba(15,27,61,0.85))",
                        color: "#fff",
                      }}
                    >
                      {" "}
                      <p
                        style={{
                          margin: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          fontSize: 11,
                          opacity: "0.85",
                        }}
                      >
                        {" "}
                        Project{" "}
                      </p>{" "}
                      <h5
                        style={{
                          margin: "4px 0 0",
                          color: "#fff",
                          fontSize: 17,
                        }}
                      >
                        {" "}
                        Bible translation{" "}
                      </h5>{" "}
                    </div>{" "}
                  </div>{" "}
                </a>{" "}
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                style={{ marginBottom: 24 }}
              >
                {" "}
                <a
                  href="/projects/brick-kiln-deliverance"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "1/1",
                      borderRadius: 14,
                      overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(15,27,61,0.08)",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/projects/brick-kiln/01.jpg"
                      alt="Brick-kiln deliverance"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease",
                      }}
                    />{" "}
                    <div
                      style={{
                        position: "absolute",
                        inset: "auto 0 0 0",
                        padding: "16px 18px",
                        background:
                          "linear-gradient(180deg, transparent, rgba(15,27,61,0.85))",
                        color: "#fff",
                      }}
                    >
                      {" "}
                      <p
                        style={{
                          margin: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          fontSize: 11,
                          opacity: "0.85",
                        }}
                      >
                        {" "}
                        Project{" "}
                      </p>{" "}
                      <h5
                        style={{
                          margin: "4px 0 0",
                          color: "#fff",
                          fontSize: 17,
                        }}
                      >
                        {" "}
                        Brick-kiln deliverance{" "}
                      </h5>{" "}
                    </div>{" "}
                  </div>{" "}
                </a>{" "}
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                style={{ marginBottom: 24 }}
              >
                {" "}
                <a
                  href="/projects/collective-marriages"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "1/1",
                      borderRadius: 14,
                      overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(15,27,61,0.08)",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/projects/collective-marriages/01.jpg"
                      alt="Collective marriages"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease",
                      }}
                    />{" "}
                    <div
                      style={{
                        position: "absolute",
                        inset: "auto 0 0 0",
                        padding: "16px 18px",
                        background:
                          "linear-gradient(180deg, transparent, rgba(15,27,61,0.85))",
                        color: "#fff",
                      }}
                    >
                      {" "}
                      <p
                        style={{
                          margin: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          fontSize: 11,
                          opacity: "0.85",
                        }}
                      >
                        {" "}
                        Project{" "}
                      </p>{" "}
                      <h5
                        style={{
                          margin: "4px 0 0",
                          color: "#fff",
                          fontSize: 17,
                        }}
                      >
                        {" "}
                        Collective marriages{" "}
                      </h5>{" "}
                    </div>{" "}
                  </div>{" "}
                </a>{" "}
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                style={{ marginBottom: 24 }}
              >
                {" "}
                <a
                  href="/projects/free-medical-camps"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "1/1",
                      borderRadius: 14,
                      overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(15,27,61,0.08)",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/projects/medical-camps/01.jpg"
                      alt="Free medical camps"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease",
                      }}
                    />{" "}
                    <div
                      style={{
                        position: "absolute",
                        inset: "auto 0 0 0",
                        padding: "16px 18px",
                        background:
                          "linear-gradient(180deg, transparent, rgba(15,27,61,0.85))",
                        color: "#fff",
                      }}
                    >
                      {" "}
                      <p
                        style={{
                          margin: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          fontSize: 11,
                          opacity: "0.85",
                        }}
                      >
                        {" "}
                        Project{" "}
                      </p>{" "}
                      <h5
                        style={{
                          margin: "4px 0 0",
                          color: "#fff",
                          fontSize: 17,
                        }}
                      >
                        {" "}
                        Free medical camps{" "}
                      </h5>{" "}
                    </div>{" "}
                  </div>{" "}
                </a>{" "}
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                style={{ marginBottom: 24 }}
              >
                {" "}
                <a
                  href="/projects/adult-literacy"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "1/1",
                      borderRadius: 14,
                      overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(15,27,61,0.08)",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/projects/adult-literacy/01.jpg"
                      alt="Adult literacy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease",
                      }}
                    />{" "}
                    <div
                      style={{
                        position: "absolute",
                        inset: "auto 0 0 0",
                        padding: "16px 18px",
                        background:
                          "linear-gradient(180deg, transparent, rgba(15,27,61,0.85))",
                        color: "#fff",
                      }}
                    >
                      {" "}
                      <p
                        style={{
                          margin: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          fontSize: 11,
                          opacity: "0.85",
                        }}
                      >
                        {" "}
                        Project{" "}
                      </p>{" "}
                      <h5
                        style={{
                          margin: "4px 0 0",
                          color: "#fff",
                          fontSize: 17,
                        }}
                      >
                        {" "}
                        Adult literacy{" "}
                      </h5>{" "}
                    </div>{" "}
                  </div>{" "}
                </a>{" "}
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                style={{ marginBottom: 24 }}
              >
                {" "}
                <a
                  href="/projects/natural-disaster-recovery"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "1/1",
                      borderRadius: 14,
                      overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(15,27,61,0.08)",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/projects/disaster-recovery/01.jpg"
                      alt="Disaster recovery"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease",
                      }}
                    />{" "}
                    <div
                      style={{
                        position: "absolute",
                        inset: "auto 0 0 0",
                        padding: "16px 18px",
                        background:
                          "linear-gradient(180deg, transparent, rgba(15,27,61,0.85))",
                        color: "#fff",
                      }}
                    >
                      {" "}
                      <p
                        style={{
                          margin: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          fontSize: 11,
                          opacity: "0.85",
                        }}
                      >
                        {" "}
                        Project{" "}
                      </p>{" "}
                      <h5
                        style={{
                          margin: "4px 0 0",
                          color: "#fff",
                          fontSize: 17,
                        }}
                      >
                        {" "}
                        Disaster recovery{" "}
                      </h5>{" "}
                    </div>{" "}
                  </div>{" "}
                </a>{" "}
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                style={{ marginBottom: 24 }}
              >
                {" "}
                <a
                  href="/projects/persecution"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "1/1",
                      borderRadius: 14,
                      overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(15,27,61,0.08)",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/projects/persecution/01.jpg"
                      alt="Persecution response"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease",
                      }}
                    />{" "}
                    <div
                      style={{
                        position: "absolute",
                        inset: "auto 0 0 0",
                        padding: "16px 18px",
                        background:
                          "linear-gradient(180deg, transparent, rgba(15,27,61,0.85))",
                        color: "#fff",
                      }}
                    >
                      {" "}
                      <p
                        style={{
                          margin: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          fontSize: 11,
                          opacity: "0.85",
                        }}
                      >
                        {" "}
                        Project{" "}
                      </p>{" "}
                      <h5
                        style={{
                          margin: "4px 0 0",
                          color: "#fff",
                          fontSize: 17,
                        }}
                      >
                        {" "}
                        Persecution response{" "}
                      </h5>{" "}
                    </div>{" "}
                  </div>{" "}
                </a>{" "}
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                style={{ marginBottom: 24 }}
              >
                {" "}
                <a
                  href="/conferences"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "1/1",
                      borderRadius: 14,
                      overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(15,27,61,0.08)",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/conferences/01.jpg"
                      alt="Conferences"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease",
                      }}
                    />{" "}
                    <div
                      style={{
                        position: "absolute",
                        inset: "auto 0 0 0",
                        padding: "16px 18px",
                        background:
                          "linear-gradient(180deg, transparent, rgba(15,27,61,0.85))",
                        color: "#fff",
                      }}
                    >
                      {" "}
                      <p
                        style={{
                          margin: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          fontSize: 11,
                          opacity: "0.85",
                        }}
                      >
                        {" "}
                        Training{" "}
                      </p>{" "}
                      <h5
                        style={{
                          margin: "4px 0 0",
                          color: "#fff",
                          fontSize: 17,
                        }}
                      >
                        {" "}
                        Conferences{" "}
                      </h5>{" "}
                    </div>{" "}
                  </div>{" "}
                </a>{" "}
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                style={{ marginBottom: 24 }}
              >
                {" "}
                <a
                  href="/bible-college"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "1/1",
                      borderRadius: 14,
                      overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(15,27,61,0.08)",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/bible-college/01.jpg"
                      alt="Pentecost University"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease",
                      }}
                    />{" "}
                    <div
                      style={{
                        position: "absolute",
                        inset: "auto 0 0 0",
                        padding: "16px 18px",
                        background:
                          "linear-gradient(180deg, transparent, rgba(15,27,61,0.85))",
                        color: "#fff",
                      }}
                    >
                      {" "}
                      <p
                        style={{
                          margin: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          fontSize: 11,
                          opacity: "0.85",
                        }}
                      >
                        {" "}
                        Bible college{" "}
                      </p>{" "}
                      <h5
                        style={{
                          margin: "4px 0 0",
                          color: "#fff",
                          fontSize: 17,
                        }}
                      >
                        {" "}
                        Pentecost University{" "}
                      </h5>{" "}
                    </div>{" "}
                  </div>{" "}
                </a>{" "}
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                style={{ marginBottom: 24 }}
              >
                {" "}
                <a
                  href="/ministries/compassion"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "1/1",
                      borderRadius: 14,
                      overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(15,27,61,0.08)",
                    }}
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/ministries/lords-table/01.jpg"
                      alt="Compassion ministry"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease",
                      }}
                    />{" "}
                    <div
                      style={{
                        position: "absolute",
                        inset: "auto 0 0 0",
                        padding: "16px 18px",
                        background:
                          "linear-gradient(180deg, transparent, rgba(15,27,61,0.85))",
                        color: "#fff",
                      }}
                    >
                      {" "}
                      <p
                        style={{
                          margin: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          fontSize: 11,
                          opacity: "0.85",
                        }}
                      >
                        {" "}
                        Ministry{" "}
                      </p>{" "}
                      <h5
                        style={{
                          margin: "4px 0 0",
                          color: "#fff",
                          fontSize: 17,
                        }}
                      >
                        {" "}
                        Compassion ministry{" "}
                      </h5>{" "}
                    </div>{" "}
                  </div>{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
      </div>
      <LegacyScripts sources={scripts} />
    </>
  );
}
