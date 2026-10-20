import type { Metadata } from "next";
import LegacyScripts from "../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Pentecost University — Pakistan Campus | COPPAK.ORG",
  description:
    "From a small Bible class in a rented house in 2004 to Pentecost University Pakistan Campus — training Christian leaders in Pakistan.",
  alternates: { canonical: "/bible-college" },
  openGraph: {
    title: "Pentecost University — Pakistan Campus | COPPAK.ORG",
    description:
      "From a small Bible class in a rented house in 2004 to Pentecost University Pakistan Campus — training Christian leaders in Pakistan.",
    url: "/bible-college",
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
  "/scripts/migrated/bible-college-25.js",
];
export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="/styles/pages/bible-college.css" />
      <div>
        <section
          className="page-hero"
          style={{
            backgroundImage:
              "linear-gradient(178deg, rgba(13,22,52,0.86) 0%, rgba(13,22,52,0.9) 55%, rgba(10,20,48,0.94) 100%), url(/assets/images/coppak/bible-college/01.jpg)",
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
                  <span>Bible college</span>{" "}
                </li>
              </ul>{" "}
              <h1 className="page-hero__title">
                Pentecost University — Pakistan Campus
              </h1>{" "}
              <p className="page-hero__subtitle">
                Equipping Christian leaders in Scripture, theology, and
                ministry.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section style={{ padding: "100px 0" }} data-astro-cid-og5b7xps="">
          {" "}
          <div className="container" data-astro-cid-og5b7xps="">
            {" "}
            <div className="row align-items-center" data-astro-cid-og5b7xps="">
              {" "}
              <div className="col-xl-6" data-astro-cid-og5b7xps="">
                {" "}
                <div className="bc-intro-video" data-astro-cid-og5b7xps="">
                  {" "}
                  <iframe
                    src="https://www.youtube.com/embed/49ElMSCYQrc?rel=0"
                    title="Pentecost University — Pakistan Campus"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    data-astro-cid-og5b7xps=""
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-xl-6" data-astro-cid-og5b7xps="">
                {" "}
                <div
                  className="section-title text-left"
                  data-astro-cid-og5b7xps=""
                >
                  {" "}
                  <span
                    className="section-title__tagline"
                    data-astro-cid-og5b7xps=""
                  >
                    Equipping Christian leaders
                  </span>{" "}
                  <h2
                    className="section-title__title"
                    data-astro-cid-og5b7xps=""
                  >
                    From 13 students in a living room to a global university
                    partnership
                  </h2>{" "}
                </div>{" "}
                <p style={{ marginTop: 16 }} data-astro-cid-og5b7xps="">
                  Founded as a small Bible class in 2004 and formalized as a
                  Bible College in 2009, Pentecost University Pakistan Campus
                  today trains young Christian leaders in Scripture, theology,
                  apologetics, and ministry — equipping them to confidently
                  present the Gospel within the Pakistani context.
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div
              className="row"
              style={{ marginTop: 64 }}
              data-astro-cid-og5b7xps=""
            >
              {" "}
              <div className="col-xl-12" data-astro-cid-og5b7xps="">
                {" "}
                <h3 data-astro-cid-og5b7xps="">Our story</h3>{" "}
                <div
                  className="bc-milestones"
                  aria-label="Key milestones"
                  data-astro-cid-og5b7xps=""
                >
                  {" "}
                  <div
                    className="bc-milestones__item"
                    data-astro-cid-og5b7xps=""
                  >
                    {" "}
                    <div
                      className="bc-milestones__year"
                      data-astro-cid-og5b7xps=""
                    >
                      2004
                    </div>{" "}
                    <div
                      className="bc-milestones__title"
                      data-astro-cid-og5b7xps=""
                    >
                      13 students in a rented house
                    </div>{" "}
                  </div>
                  <div
                    className="bc-milestones__item"
                    data-astro-cid-og5b7xps=""
                  >
                    {" "}
                    <div
                      className="bc-milestones__year"
                      data-astro-cid-og5b7xps=""
                    >
                      2007
                    </div>{" "}
                    <div
                      className="bc-milestones__title"
                      data-astro-cid-og5b7xps=""
                    >
                      Classes move into Pastor Jamil's living room
                    </div>{" "}
                  </div>
                  <div
                    className="bc-milestones__item"
                    data-astro-cid-og5b7xps=""
                  >
                    {" "}
                    <div
                      className="bc-milestones__year"
                      data-astro-cid-og5b7xps=""
                    >
                      2009
                    </div>{" "}
                    <div
                      className="bc-milestones__title"
                      data-astro-cid-og5b7xps=""
                    >
                      Formally established as a Bible College
                    </div>{" "}
                  </div>
                  <div
                    className="bc-milestones__item"
                    data-astro-cid-og5b7xps=""
                  >
                    {" "}
                    <div
                      className="bc-milestones__year"
                      data-astro-cid-og5b7xps=""
                    >
                      2022
                    </div>{" "}
                    <div
                      className="bc-milestones__title"
                      data-astro-cid-og5b7xps=""
                    >
                      METP / GlobalEd partnership begins
                    </div>{" "}
                  </div>
                  <div
                    className="bc-milestones__item"
                    data-astro-cid-og5b7xps=""
                  >
                    {" "}
                    <div
                      className="bc-milestones__year"
                      data-astro-cid-og5b7xps=""
                    >
                      2025
                    </div>{" "}
                    <div
                      className="bc-milestones__title"
                      data-astro-cid-og5b7xps=""
                    >
                      Adopted by Pentecost University A+ (Ghana)
                    </div>{" "}
                  </div>
                  <div
                    className="bc-milestones__item"
                    data-astro-cid-og5b7xps=""
                  >
                    {" "}
                    <div
                      className="bc-milestones__year"
                      data-astro-cid-og5b7xps=""
                    >
                      2026
                    </div>{" "}
                    <div
                      className="bc-milestones__title"
                      data-astro-cid-og5b7xps=""
                    >
                      Renamed Pentecost University — Pakistan Campus
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <p data-astro-cid-og5b7xps="">
                  In <strong data-astro-cid-og5b7xps="">2004</strong>, Pastor
                  Jamil Nasir began a small Bible class with
                  <strong data-astro-cid-og5b7xps="">13 students</strong> in a
                  rented house where the church also gathered for Sunday
                  worship. The believers met for Bible study every Tuesday and
                  Wednesday, growing together in faith and knowledge. In 2007,
                  the same Bible classes were moved into Pastor Jamil's living
                  room as the ministry continued to expand.
                </p>{" "}
                <p data-astro-cid-og5b7xps="">
                  By <strong data-astro-cid-og5b7xps="">2009</strong>, this
                  simple Bible study group developed into a Bible College. Even
                  though there were almost no facilities or financial resources,
                  the church stepped out in faith with a clear vision: to train
                  young Christian leaders in Pakistan. The church was facing
                  many theological challenges — young believers were being asked
                  difficult questions about their faith but did not always have
                  the knowledge or confidence to respond. At the same time, some
                  churches were becoming heavily influenced by Islamic theology.
                </p>{" "}
                <p data-astro-cid-og5b7xps="">
                  To strengthen the church and prepare the next generation of
                  leaders, the Bible College was established to teach, defend,
                  and communicate the Christian faith clearly and effectively
                  within the Pakistani context.
                </p>{" "}
                <p data-astro-cid-og5b7xps="">
                  In <strong data-astro-cid-og5b7xps="">2022</strong>, Pentecost
                  Theological Bible College adopted courses from the{" "}
                  <strong data-astro-cid-og5b7xps="">
                    GlobalEd Institute's "Ministry Essentials Training Program
                    (METP)"
                  </strong>{" "}
                  — a non-formal Christian leadership development curriculum
                  offered through Summit Pacific College, Canada. Students
                  complete guided courses with learning outcomes and
                  assessments, and upon completion receive a certificate from
                  the GlobalEd Institute. The program equips believers with
                  strong biblical foundations and practical ministry skills.
                </p>{" "}
                <p data-astro-cid-og5b7xps="">
                  In <strong data-astro-cid-og5b7xps="">2025</strong>,{" "}
                  <strong data-astro-cid-og5b7xps="">
                    Pentecost University A+ (Ghana)
                  </strong>
                  officially adopted Pentecost Theological Bible College as part
                  of its global training vision. Then in{" "}
                  <strong data-astro-cid-og5b7xps="">2026</strong>, the
                  institution received its new name:
                </p>{" "}
                <h3
                  style={{ margin: "24px 0", color: "var(--oxpins-base)" }}
                  data-astro-cid-og5b7xps=""
                >
                  Pentecost University — Pakistan Campus
                </h3>{" "}
                <p data-astro-cid-og5b7xps="">
                  This transition marks a new chapter in ministry training —
                  rooted in faith, guided by purpose, and committed to equipping
                  leaders who will impact Pakistan and the nations for Christ.
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div
              className="row"
              style={{ marginTop: 48 }}
              data-astro-cid-og5b7xps=""
            >
              {" "}
              <div
                className="col-xl-3 col-md-6"
                style={{ marginBottom: 24 }}
                data-astro-cid-og5b7xps=""
              >
                {" "}
                <img
                  src="/assets/images/coppak/bible-college/01.jpg"
                  alt="Pentecost University Pakistan Campus"
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                  data-astro-cid-og5b7xps=""
                />{" "}
              </div>
              <div
                className="col-xl-3 col-md-6"
                style={{ marginBottom: 24 }}
                data-astro-cid-og5b7xps=""
              >
                {" "}
                <img
                  src="/assets/images/coppak/bible-college/02.jpg"
                  alt="Pentecost University Pakistan Campus"
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                  data-astro-cid-og5b7xps=""
                />{" "}
              </div>
              <div
                className="col-xl-3 col-md-6"
                style={{ marginBottom: 24 }}
                data-astro-cid-og5b7xps=""
              >
                {" "}
                <img
                  src="/assets/images/coppak/bible-college/03.jpg"
                  alt="Pentecost University Pakistan Campus"
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                  data-astro-cid-og5b7xps=""
                />{" "}
              </div>
              <div
                className="col-xl-3 col-md-6"
                style={{ marginBottom: 24 }}
                data-astro-cid-og5b7xps=""
              >
                {" "}
                <img
                  src="/assets/images/coppak/bible-college/04.jpg"
                  alt="Pentecost University Pakistan Campus"
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                  data-astro-cid-og5b7xps=""
                />{" "}
              </div>
              <div
                className="col-xl-3 col-md-6"
                style={{ marginBottom: 24 }}
                data-astro-cid-og5b7xps=""
              >
                {" "}
                <img
                  src="/assets/images/coppak/bible-college/05.jpg"
                  alt="Pentecost University Pakistan Campus"
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                  data-astro-cid-og5b7xps=""
                />{" "}
              </div>
              <div
                className="col-xl-3 col-md-6"
                style={{ marginBottom: 24 }}
                data-astro-cid-og5b7xps=""
              >
                {" "}
                <img
                  src="/assets/images/coppak/bible-college/06.jpg"
                  alt="Pentecost University Pakistan Campus"
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                  data-astro-cid-og5b7xps=""
                />{" "}
              </div>
              <div
                className="col-xl-3 col-md-6"
                style={{ marginBottom: 24 }}
                data-astro-cid-og5b7xps=""
              >
                {" "}
                <img
                  src="/assets/images/coppak/bible-college/07.jpg"
                  alt="Pentecost University Pakistan Campus"
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                  data-astro-cid-og5b7xps=""
                />{" "}
              </div>
              <div
                className="col-xl-3 col-md-6"
                style={{ marginBottom: 24 }}
                data-astro-cid-og5b7xps=""
              >
                {" "}
                <img
                  src="/assets/images/coppak/bible-college/12.jpg"
                  alt="Pentecost University Pakistan Campus"
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                  data-astro-cid-og5b7xps=""
                />{" "}
              </div>
              <div
                className="col-xl-3 col-md-6"
                style={{ marginBottom: 24 }}
                data-astro-cid-og5b7xps=""
              >
                {" "}
                <img
                  src="/assets/images/coppak/bible-college/13.jpg"
                  alt="Pentecost University Pakistan Campus"
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                  data-astro-cid-og5b7xps=""
                />{" "}
              </div>
              <div
                className="col-xl-3 col-md-6"
                style={{ marginBottom: 24 }}
                data-astro-cid-og5b7xps=""
              >
                {" "}
                <img
                  src="/assets/images/coppak/bible-college/14.jpg"
                  alt="Pentecost University Pakistan Campus"
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                  data-astro-cid-og5b7xps=""
                />{" "}
              </div>
              <div
                className="col-xl-3 col-md-6"
                style={{ marginBottom: 24 }}
                data-astro-cid-og5b7xps=""
              >
                {" "}
                <img
                  src="/assets/images/coppak/bible-college/15.jpg"
                  alt="Pentecost University Pakistan Campus"
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                  data-astro-cid-og5b7xps=""
                />{" "}
              </div>
              <div
                className="col-xl-3 col-md-6"
                style={{ marginBottom: 24 }}
                data-astro-cid-og5b7xps=""
              >
                {" "}
                <img
                  src="/assets/images/coppak/bible-college/16.jpg"
                  alt="Pentecost University Pakistan Campus"
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                  data-astro-cid-og5b7xps=""
                />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
      </div>
      <LegacyScripts sources={scripts} />
    </>
  );
}
