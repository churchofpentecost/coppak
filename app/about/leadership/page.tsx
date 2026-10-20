import type { Metadata } from "next";
import LegacyScripts from "../../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Leadership | COPPAK.ORG",
  description:
    "Rev. Dr. Jamil Nasir, National Head of The Church of Pentecost Pakistan, and the international leadership of the Church of Pentecost.",
  alternates: { canonical: "/about/leadership" },
  openGraph: {
    title: "Leadership | COPPAK.ORG",
    description:
      "Rev. Dr. Jamil Nasir, National Head of The Church of Pentecost Pakistan, and the international leadership of the Church of Pentecost.",
    url: "/about/leadership",
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
  "/scripts/migrated/about-leadership-25.js",
];
export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="/_astro/leadership.B2k1OVpq.css" />
      <div>
        <section
          className="page-hero"
          style={{
            backgroundImage:
              "linear-gradient(178deg, rgba(13,22,52,0.86) 0%, rgba(13,22,52,0.9) 55%, rgba(10,20,48,0.94) 100%), url(/assets/images/coppak/conferences/01.jpg)",
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
                  <span>Leadership</span>{" "}
                </li>
              </ul>{" "}
              <h1 className="page-hero__title">Leadership</h1>{" "}
              <p className="page-hero__subtitle">
                The leaders God has raised to shepherd COPPAK across Pakistan.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section className="leader-bio" data-astro-cid-3rtgp5cp="">
          {" "}
          <div className="container" data-astro-cid-3rtgp5cp="">
            {" "}
            <div className="leader-bio__grid" data-astro-cid-3rtgp5cp="">
              {" "}
              <div className="leader-bio__photo" data-astro-cid-3rtgp5cp="">
                {" "}
                <div
                  className="leader-bio__photo-accent"
                  aria-hidden="true"
                  data-astro-cid-3rtgp5cp=""
                />{" "}
                <img
                  src="/assets/images/coppak/about/team/jamil-nasir.jpg"
                  alt="Rev. Dr. Jamil Nasir"
                  data-astro-cid-3rtgp5cp=""
                />{" "}
              </div>{" "}
              <div className="leader-bio__info" data-astro-cid-3rtgp5cp="">
                {" "}
                <span className="leader-eyebrow" data-astro-cid-3rtgp5cp="">
                  National Head
                </span>{" "}
                <h2 className="leader-bio__name" data-astro-cid-3rtgp5cp="">
                  Rev. Dr. Jamil Nasir
                </h2>{" "}
                <p className="leader-bio__lead" data-astro-cid-3rtgp5cp="">
                  A visionary leader whose life stands as a powerful testimony
                  of faith, courage, and unwavering commitment to the call of
                  God.
                </p>{" "}
                <ul className="leader-bio__roles" data-astro-cid-3rtgp5cp="">
                  {" "}
                  <li data-astro-cid-3rtgp5cp="">
                    {" "}
                    <i
                      className="fas fa-cross"
                      aria-hidden="true"
                      data-astro-cid-3rtgp5cp=""
                    />
                    First National Head of The Church of Pentecost in Pakistan
                  </li>{" "}
                  <li data-astro-cid-3rtgp5cp="">
                    {" "}
                    <i
                      className="fas fa-globe-asia"
                      aria-hidden="true"
                      data-astro-cid-3rtgp5cp=""
                    />
                    Oversees South Asian Assemblies, COP Canada
                  </li>{" "}
                  <li data-astro-cid-3rtgp5cp="">
                    {" "}
                    <i
                      className="fas fa-university"
                      aria-hidden="true"
                      data-astro-cid-3rtgp5cp=""
                    />
                    Principal, Pentecost Theological Bible College, Lahore
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section className="leader-stats" data-astro-cid-3rtgp5cp="">
          {" "}
          <div className="container" data-astro-cid-3rtgp5cp="">
            {" "}
            <div className="leader-stats__row" data-astro-cid-3rtgp5cp="">
              {" "}
              <div className="leader-stats__item" data-astro-cid-3rtgp5cp="">
                {" "}
                <span
                  className="leader-stats__value"
                  data-astro-cid-3rtgp5cp=""
                >
                  29,000+
                </span>{" "}
                <span
                  className="leader-stats__label"
                  data-astro-cid-3rtgp5cp=""
                >
                  Members shepherded
                </span>{" "}
              </div>
              <div className="leader-stats__item" data-astro-cid-3rtgp5cp="">
                {" "}
                <span
                  className="leader-stats__value"
                  data-astro-cid-3rtgp5cp=""
                >
                  1,500+
                </span>{" "}
                <span
                  className="leader-stats__label"
                  data-astro-cid-3rtgp5cp=""
                >
                  On-site every Sunday
                </span>{" "}
              </div>
              <div className="leader-stats__item" data-astro-cid-3rtgp5cp="">
                {" "}
                <span
                  className="leader-stats__value"
                  data-astro-cid-3rtgp5cp=""
                >
                  29
                </span>{" "}
                <span
                  className="leader-stats__label"
                  data-astro-cid-3rtgp5cp=""
                >
                  Published books
                </span>{" "}
              </div>
              <div className="leader-stats__item" data-astro-cid-3rtgp5cp="">
                {" "}
                <span
                  className="leader-stats__value"
                  data-astro-cid-3rtgp5cp=""
                >
                  2×
                </span>{" "}
                <span
                  className="leader-stats__label"
                  data-astro-cid-3rtgp5cp=""
                >
                  Doctorates earned
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section className="leader-section" data-astro-cid-3rtgp5cp="">
          {" "}
          <div className="container" data-astro-cid-3rtgp5cp="">
            {" "}
            <div className="leader-section__head" data-astro-cid-3rtgp5cp="">
              {" "}
              <span className="leader-eyebrow" data-astro-cid-3rtgp5cp="">
                Early life
              </span>{" "}
              <h2 className="leader-section__title" data-astro-cid-3rtgp5cp="">
                Called from a young age
              </h2>{" "}
            </div>{" "}
            <div className="leader-timeline" data-astro-cid-3rtgp5cp="">
              {" "}
              <div className="leader-timeline__item" data-astro-cid-3rtgp5cp="">
                {" "}
                <div
                  className="leader-timeline__year"
                  data-astro-cid-3rtgp5cp=""
                >
                  1975
                </div>{" "}
                <div
                  className="leader-timeline__card"
                  data-astro-cid-3rtgp5cp=""
                >
                  {" "}
                  <h3
                    className="leader-timeline__title"
                    data-astro-cid-3rtgp5cp=""
                  >
                    Born in Hafizabad
                  </h3>{" "}
                  <p
                    className="leader-timeline__text"
                    data-astro-cid-3rtgp5cp=""
                  >
                    Born on July 8, 1975, growing up in a humble environment and
                    completing his early education in his hometown.
                  </p>{" "}
                </div>{" "}
              </div>
              <div className="leader-timeline__item" data-astro-cid-3rtgp5cp="">
                {" "}
                <div
                  className="leader-timeline__year"
                  data-astro-cid-3rtgp5cp=""
                >
                  1990
                </div>{" "}
                <div
                  className="leader-timeline__card"
                  data-astro-cid-3rtgp5cp=""
                >
                  {" "}
                  <h3
                    className="leader-timeline__title"
                    data-astro-cid-3rtgp5cp=""
                  >
                    Water &amp; Spirit baptism at 15
                  </h3>{" "}
                  <p
                    className="leader-timeline__text"
                    data-astro-cid-3rtgp5cp=""
                  >
                    Experienced both water baptism and the baptism of the Holy
                    Spirit — a defining moment that set the direction of his
                    life.
                  </p>{" "}
                </div>{" "}
              </div>
              <div className="leader-timeline__item" data-astro-cid-3rtgp5cp="">
                {" "}
                <div
                  className="leader-timeline__year"
                  data-astro-cid-3rtgp5cp=""
                >
                  1993
                </div>{" "}
                <div
                  className="leader-timeline__card"
                  data-astro-cid-3rtgp5cp=""
                >
                  {" "}
                  <h3
                    className="leader-timeline__title"
                    data-astro-cid-3rtgp5cp=""
                  >
                    First book at age 18
                  </h3>{" "}
                  <p
                    className="leader-timeline__text"
                    data-astro-cid-3rtgp5cp=""
                  >
                    Wrote his first book, 'Quran Is the Defender of the Bible,'
                    beginning a lifelong journey in Christian scholarship and
                    apologetics.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section
          className="leader-section leader-section--alt"
          data-astro-cid-3rtgp5cp=""
        >
          {" "}
          <div className="container" data-astro-cid-3rtgp5cp="">
            {" "}
            <div className="leader-section__head" data-astro-cid-3rtgp5cp="">
              {" "}
              <span className="leader-eyebrow" data-astro-cid-3rtgp5cp="">
                Ministry today
              </span>{" "}
              <h2 className="leader-section__title" data-astro-cid-3rtgp5cp="">
                A Spirit-led shepherd to the nation
              </h2>{" "}
            </div>{" "}
            <div className="leader-pillars" data-astro-cid-3rtgp5cp="">
              {" "}
              <div className="leader-pillars__item" data-astro-cid-3rtgp5cp="">
                {" "}
                <div
                  className="leader-pillars__icon"
                  data-astro-cid-3rtgp5cp=""
                >
                  {" "}
                  <i
                    className="fas fa-cross"
                    aria-hidden="true"
                    data-astro-cid-3rtgp5cp=""
                  />{" "}
                </div>{" "}
                <h3
                  className="leader-pillars__title"
                  data-astro-cid-3rtgp5cp=""
                >
                  Spiritual leadership
                </h3>{" "}
                <p className="leader-pillars__text" data-astro-cid-3rtgp5cp="">
                  A Spirit-filled, anointed leader with a powerful healing and
                  deliverance ministry to over 29,000 church members.
                </p>{" "}
              </div>
              <div className="leader-pillars__item" data-astro-cid-3rtgp5cp="">
                {" "}
                <div
                  className="leader-pillars__icon"
                  data-astro-cid-3rtgp5cp=""
                >
                  {" "}
                  <i
                    className="fas fa-broadcast-tower"
                    aria-hidden="true"
                    data-astro-cid-3rtgp5cp=""
                  />{" "}
                </div>{" "}
                <h3
                  className="leader-pillars__title"
                  data-astro-cid-3rtgp5cp=""
                >
                  Live-streamed preaching
                </h3>{" "}
                <p className="leader-pillars__text" data-astro-cid-3rtgp5cp="">
                  Every Sunday, preaches to 1,500+ on-site with thousands more
                  joining through social media across the country.
                </p>{" "}
              </div>
              <div className="leader-pillars__item" data-astro-cid-3rtgp5cp="">
                {" "}
                <div
                  className="leader-pillars__icon"
                  data-astro-cid-3rtgp5cp=""
                >
                  {" "}
                  <i
                    className="fas fa-handshake"
                    aria-hidden="true"
                    data-astro-cid-3rtgp5cp=""
                  />{" "}
                </div>{" "}
                <h3
                  className="leader-pillars__title"
                  data-astro-cid-3rtgp5cp=""
                >
                  Interfaith bridge-builder
                </h3>{" "}
                <p className="leader-pillars__text" data-astro-cid-3rtgp5cp="">
                  A trusted voice for interfaith dialogue, peace, and community
                  harmony — respected across communities of faith.
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <figure className="leader-quote" data-astro-cid-3rtgp5cp="">
              {" "}
              <blockquote data-astro-cid-3rtgp5cp="">
                From the streets of Lahore to a public park to our own building
                — God taught us that we are a church without walls but with
                mission.
              </blockquote>{" "}
              <figcaption data-astro-cid-3rtgp5cp="">
                — Rev. Dr. Jamil Nasir
              </figcaption>{" "}
            </figure>{" "}
          </div>{" "}
        </section>
        <section className="leader-section" data-astro-cid-3rtgp5cp="">
          {" "}
          <div className="container" data-astro-cid-3rtgp5cp="">
            {" "}
            <div className="leader-section__head" data-astro-cid-3rtgp5cp="">
              {" "}
              <span className="leader-eyebrow" data-astro-cid-3rtgp5cp="">
                Recognitions
              </span>{" "}
              <h2 className="leader-section__title" data-astro-cid-3rtgp5cp="">
                A trusted voice for the gospel and peace
              </h2>{" "}
            </div>{" "}
            <div className="leader-badges" data-astro-cid-3rtgp5cp="">
              {" "}
              <span className="leader-badges__item" data-astro-cid-3rtgp5cp="">
                {" "}
                <i
                  className="fas fa-award"
                  aria-hidden="true"
                  data-astro-cid-3rtgp5cp=""
                />{" "}
                Apostle, The Church of Pentecost{" "}
              </span>
              <span className="leader-badges__item" data-astro-cid-3rtgp5cp="">
                {" "}
                <i
                  className="fas fa-award"
                  aria-hidden="true"
                  data-astro-cid-3rtgp5cp=""
                />{" "}
                International Facilitator, Haggai Institute (since 2007){" "}
              </span>
              <span className="leader-badges__item" data-astro-cid-3rtgp5cp="">
                {" "}
                <i
                  className="fas fa-award"
                  aria-hidden="true"
                  data-astro-cid-3rtgp5cp=""
                />{" "}
                Apologist of the Decade{" "}
              </span>
              <span className="leader-badges__item" data-astro-cid-3rtgp5cp="">
                {" "}
                <i
                  className="fas fa-award"
                  aria-hidden="true"
                  data-astro-cid-3rtgp5cp=""
                />{" "}
                Interfaith Harmony Promoter{" "}
              </span>
              <span className="leader-badges__item" data-astro-cid-3rtgp5cp="">
                {" "}
                <i
                  className="fas fa-award"
                  aria-hidden="true"
                  data-astro-cid-3rtgp5cp=""
                />{" "}
                Bridge-builder between minority and majority communities{" "}
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section
          className="leader-section leader-section--alt"
          data-astro-cid-3rtgp5cp=""
        >
          {" "}
          <div className="container" data-astro-cid-3rtgp5cp="">
            {" "}
            <div className="leader-section__head" data-astro-cid-3rtgp5cp="">
              {" "}
              <span className="leader-eyebrow" data-astro-cid-3rtgp5cp="">
                Academic background
              </span>{" "}
              <h2 className="leader-section__title" data-astro-cid-3rtgp5cp="">
                A lifetime of study
              </h2>{" "}
            </div>{" "}
            <ol className="leader-edu" data-astro-cid-3rtgp5cp="">
              {" "}
              <li className="leader-edu__item" data-astro-cid-3rtgp5cp="">
                {" "}
                <div className="leader-edu__year" data-astro-cid-3rtgp5cp="">
                  1992
                </div>{" "}
                <div className="leader-edu__body" data-astro-cid-3rtgp5cp="">
                  {" "}
                  <h4 className="leader-edu__degree" data-astro-cid-3rtgp5cp="">
                    Matriculation
                  </h4>
                </div>{" "}
              </li>
              <li className="leader-edu__item" data-astro-cid-3rtgp5cp="">
                {" "}
                <div className="leader-edu__year" data-astro-cid-3rtgp5cp="">
                  1997
                </div>{" "}
                <div className="leader-edu__body" data-astro-cid-3rtgp5cp="">
                  {" "}
                  <h4 className="leader-edu__degree" data-astro-cid-3rtgp5cp="">
                    BA in Religion and Philosophy
                  </h4>{" "}
                  <p className="leader-edu__school" data-astro-cid-3rtgp5cp="">
                    Pakistan Adventist Seminary and College, Farooqabad
                  </p>{" "}
                </div>{" "}
              </li>
              <li className="leader-edu__item" data-astro-cid-3rtgp5cp="">
                {" "}
                <div className="leader-edu__year" data-astro-cid-3rtgp5cp="">
                  2004
                </div>{" "}
                <div className="leader-edu__body" data-astro-cid-3rtgp5cp="">
                  {" "}
                  <h4 className="leader-edu__degree" data-astro-cid-3rtgp5cp="">
                    Master of Divinity
                  </h4>{" "}
                  <p className="leader-edu__school" data-astro-cid-3rtgp5cp="">
                    Faith Theological Seminary, Gujranwala
                  </p>{" "}
                </div>{" "}
              </li>
              <li className="leader-edu__item" data-astro-cid-3rtgp5cp="">
                {" "}
                <div className="leader-edu__year" data-astro-cid-3rtgp5cp="">
                  2006
                </div>{" "}
                <div className="leader-edu__body" data-astro-cid-3rtgp5cp="">
                  {" "}
                  <h4 className="leader-edu__degree" data-astro-cid-3rtgp5cp="">
                    Doctor of Ministry
                  </h4>{" "}
                  <p className="leader-edu__school" data-astro-cid-3rtgp5cp="">
                    Faith Theological Seminary — Thesis of the Year
                  </p>{" "}
                </div>{" "}
              </li>
              <li className="leader-edu__item" data-astro-cid-3rtgp5cp="">
                {" "}
                <div className="leader-edu__year" data-astro-cid-3rtgp5cp="">
                  2007
                </div>{" "}
                <div className="leader-edu__body" data-astro-cid-3rtgp5cp="">
                  {" "}
                  <h4 className="leader-edu__degree" data-astro-cid-3rtgp5cp="">
                    Advanced Leadership
                  </h4>{" "}
                  <p className="leader-edu__school" data-astro-cid-3rtgp5cp="">
                    Haggai Institute, Singapore
                  </p>{" "}
                </div>{" "}
              </li>
              <li className="leader-edu__item" data-astro-cid-3rtgp5cp="">
                {" "}
                <div className="leader-edu__year" data-astro-cid-3rtgp5cp="">
                  2022
                </div>{" "}
                <div className="leader-edu__body" data-astro-cid-3rtgp5cp="">
                  {" "}
                  <h4 className="leader-edu__degree" data-astro-cid-3rtgp5cp="">
                    Second Doctor of Ministry
                  </h4>{" "}
                  <p className="leader-edu__school" data-astro-cid-3rtgp5cp="">
                    Christ Global Kingdom Ambassadors Theology Institute, Canada
                  </p>{" "}
                </div>{" "}
              </li>{" "}
            </ol>{" "}
          </div>{" "}
        </section>
        <section className="leader-section" data-astro-cid-3rtgp5cp="">
          {" "}
          <div className="container" data-astro-cid-3rtgp5cp="">
            {" "}
            <div className="leader-family" data-astro-cid-3rtgp5cp="">
              {" "}
              <div className="leader-family__photo" data-astro-cid-3rtgp5cp="">
                {" "}
                <img
                  src="/assets/images/coppak/about/team/rose-mary.jpg"
                  alt="Rose Mary Nasir"
                  data-astro-cid-3rtgp5cp=""
                />{" "}
              </div>{" "}
              <div className="leader-family__body" data-astro-cid-3rtgp5cp="">
                {" "}
                <span className="leader-eyebrow" data-astro-cid-3rtgp5cp="">
                  Family
                </span>{" "}
                <h2
                  className="leader-section__title leader-section__title--left"
                  data-astro-cid-3rtgp5cp=""
                >
                  A family in ministry
                </h2>{" "}
                <p className="leader-family__text" data-astro-cid-3rtgp5cp="">
                  In the year 2000, Dr. Jamil Nasir married{" "}
                  <strong data-astro-cid-3rtgp5cp="">Rose Mary</strong>, his
                  lifelong partner in ministry. Together they have raised five
                  children, all serving God with faith, love, and dedication.
                </p>{" "}
                <ul className="leader-family__kids" data-astro-cid-3rtgp5cp="">
                  {" "}
                  <li data-astro-cid-3rtgp5cp="">
                    {" "}
                    <i
                      className="fas fa-heart"
                      aria-hidden="true"
                      data-astro-cid-3rtgp5cp=""
                    />{" "}
                    Shulammite{" "}
                  </li>
                  <li data-astro-cid-3rtgp5cp="">
                    {" "}
                    <i
                      className="fas fa-heart"
                      aria-hidden="true"
                      data-astro-cid-3rtgp5cp=""
                    />{" "}
                    Rachel{" "}
                  </li>
                  <li data-astro-cid-3rtgp5cp="">
                    {" "}
                    <i
                      className="fas fa-heart"
                      aria-hidden="true"
                      data-astro-cid-3rtgp5cp=""
                    />{" "}
                    Yoanna{" "}
                  </li>
                  <li data-astro-cid-3rtgp5cp="">
                    {" "}
                    <i
                      className="fas fa-heart"
                      aria-hidden="true"
                      data-astro-cid-3rtgp5cp=""
                    />{" "}
                    Shekinah{" "}
                  </li>
                  <li data-astro-cid-3rtgp5cp="">
                    {" "}
                    <i
                      className="fas fa-heart"
                      aria-hidden="true"
                      data-astro-cid-3rtgp5cp=""
                    />{" "}
                    Jairus{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section className="leader-section" data-astro-cid-3rtgp5cp="">
          {" "}
          <div className="container" data-astro-cid-3rtgp5cp="">
            {" "}
            <div className="leader-section__head" data-astro-cid-3rtgp5cp="">
              {" "}
              <span className="leader-eyebrow" data-astro-cid-3rtgp5cp="">
                Leadership team
              </span>{" "}
              <h2 className="leader-section__title" data-astro-cid-3rtgp5cp="">
                Serving alongside the National Head
              </h2>{" "}
              <p className="leader-section__lead" data-astro-cid-3rtgp5cp="">
                The pastors and area heads carrying COPPAK's mission across
                Pakistan.
              </p>{" "}
            </div>{" "}
            <div className="leader-team" data-astro-cid-3rtgp5cp="">
              {" "}
              <div className="leader-team__card" data-astro-cid-3rtgp5cp="">
                {" "}
                <div className="leader-team__avatar" data-astro-cid-3rtgp5cp="">
                  {" "}
                  <img
                    src="/assets/images/coppak/about/team/akeel-nasir.jpg"
                    alt="Rev. Akeel Nasir"
                    data-initials="AN"
                    data-astro-cid-3rtgp5cp=""
                  />{" "}
                  <div
                    className="leader-team__badge"
                    data-astro-cid-3rtgp5cp=""
                  >
                    {" "}
                    <i
                      className="fas fa-dove"
                      aria-hidden="true"
                      data-astro-cid-3rtgp5cp=""
                    />{" "}
                  </div>{" "}
                </div>{" "}
                <h4 className="leader-team__name" data-astro-cid-3rtgp5cp="">
                  Rev. Akeel Nasir
                </h4>{" "}
                <p className="leader-team__role" data-astro-cid-3rtgp5cp="">
                  National Deacon
                </p>{" "}
              </div>
              <div className="leader-team__card" data-astro-cid-3rtgp5cp="">
                {" "}
                <div className="leader-team__avatar" data-astro-cid-3rtgp5cp="">
                  {" "}
                  <img
                    src="/assets/images/coppak/about/team/zohaib-qasir.jpg"
                    alt="Pastor Zohaib Qasir"
                    data-initials="ZQ"
                    data-astro-cid-3rtgp5cp=""
                  />{" "}
                  <div
                    className="leader-team__badge"
                    data-astro-cid-3rtgp5cp=""
                  >
                    {" "}
                    <i
                      className="fas fa-feather-alt"
                      aria-hidden="true"
                      data-astro-cid-3rtgp5cp=""
                    />{" "}
                  </div>{" "}
                </div>{" "}
                <h4 className="leader-team__name" data-astro-cid-3rtgp5cp="">
                  Pastor Zohaib Qasir
                </h4>{" "}
                <p className="leader-team__role" data-astro-cid-3rtgp5cp="">
                  General Secretary
                </p>{" "}
              </div>
              <div className="leader-team__card" data-astro-cid-3rtgp5cp="">
                {" "}
                <div className="leader-team__avatar" data-astro-cid-3rtgp5cp="">
                  {" "}
                  <span
                    className="leader-team__initials"
                    data-astro-cid-3rtgp5cp=""
                  >
                    {" "}
                    PB{" "}
                  </span>{" "}
                  <div
                    className="leader-team__badge"
                    data-astro-cid-3rtgp5cp=""
                  >
                    {" "}
                    <i
                      className="fas fa-map-marker-alt"
                      aria-hidden="true"
                      data-astro-cid-3rtgp5cp=""
                    />{" "}
                  </div>{" "}
                </div>{" "}
                <h4 className="leader-team__name" data-astro-cid-3rtgp5cp="">
                  Rev. Paulus Barket
                </h4>{" "}
                <p className="leader-team__role" data-astro-cid-3rtgp5cp="">
                  Area Head, Kasur
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section
          className="leader-section leader-section--alt"
          data-astro-cid-3rtgp5cp=""
        >
          {" "}
          <div className="container" data-astro-cid-3rtgp5cp="">
            {" "}
            <div className="leader-section__head" data-astro-cid-3rtgp5cp="">
              {" "}
              <span className="leader-eyebrow" data-astro-cid-3rtgp5cp="">
                Global leadership
              </span>{" "}
              <h2 className="leader-section__title" data-astro-cid-3rtgp5cp="">
                The Church of Pentecost — International Leadership
              </h2>{" "}
              <p className="leader-section__lead" data-astro-cid-3rtgp5cp="">
                COPPAK is part of the global Church of Pentecost family.
              </p>{" "}
            </div>{" "}
            <div
              className="leader-team leader-team--four"
              data-astro-cid-3rtgp5cp=""
            >
              {" "}
              <div className="leader-team__card" data-astro-cid-3rtgp5cp="">
                {" "}
                <div className="leader-team__avatar" data-astro-cid-3rtgp5cp="">
                  {" "}
                  <img
                    src="/assets/images/coppak/about/team/eric-nyamekye.jpg"
                    alt="Dr. Apostle Eric Nyamekye"
                    data-initials="EN"
                    data-astro-cid-3rtgp5cp=""
                  />{" "}
                  <div
                    className="leader-team__badge"
                    data-astro-cid-3rtgp5cp=""
                  >
                    {" "}
                    <i
                      className="fas fa-crown"
                      aria-hidden="true"
                      data-astro-cid-3rtgp5cp=""
                    />{" "}
                  </div>{" "}
                </div>{" "}
                <h4 className="leader-team__name" data-astro-cid-3rtgp5cp="">
                  Dr. Apostle Eric Nyamekye
                </h4>{" "}
                <p className="leader-team__role" data-astro-cid-3rtgp5cp="">
                  Chairman
                </p>{" "}
              </div>
              <div className="leader-team__card" data-astro-cid-3rtgp5cp="">
                {" "}
                <div className="leader-team__avatar" data-astro-cid-3rtgp5cp="">
                  {" "}
                  <img
                    src="/assets/images/coppak/about/team/emmanuel-agyemang-bekoe.jpg"
                    alt="Apostle Emmanuel Agyemang Bekoe"
                    data-initials="EA"
                    data-astro-cid-3rtgp5cp=""
                  />{" "}
                  <div
                    className="leader-team__badge"
                    data-astro-cid-3rtgp5cp=""
                  >
                    {" "}
                    <i
                      className="fas fa-globe-asia"
                      aria-hidden="true"
                      data-astro-cid-3rtgp5cp=""
                    />{" "}
                  </div>{" "}
                </div>{" "}
                <h4 className="leader-team__name" data-astro-cid-3rtgp5cp="">
                  Apostle Emmanuel Agyemang Bekoe
                </h4>{" "}
                <p className="leader-team__role" data-astro-cid-3rtgp5cp="">
                  Missions Director
                </p>{" "}
              </div>
              <div className="leader-team__card" data-astro-cid-3rtgp5cp="">
                {" "}
                <div className="leader-team__avatar" data-astro-cid-3rtgp5cp="">
                  {" "}
                  <img
                    src="/assets/images/coppak/about/team/samuel-gyau-obuobi.jpg"
                    alt="Apostle Samuel Gyau Obuobi"
                    data-initials="SG"
                    data-astro-cid-3rtgp5cp=""
                  />{" "}
                  <div
                    className="leader-team__badge"
                    data-astro-cid-3rtgp5cp=""
                  >
                    {" "}
                    <i
                      className="fas fa-feather-alt"
                      aria-hidden="true"
                      data-astro-cid-3rtgp5cp=""
                    />{" "}
                  </div>{" "}
                </div>{" "}
                <h4 className="leader-team__name" data-astro-cid-3rtgp5cp="">
                  Apostle Samuel Gyau Obuobi
                </h4>{" "}
                <p className="leader-team__role" data-astro-cid-3rtgp5cp="">
                  General Secretary
                </p>{" "}
              </div>
              <div className="leader-team__card" data-astro-cid-3rtgp5cp="">
                {" "}
                <div className="leader-team__avatar" data-astro-cid-3rtgp5cp="">
                  {" "}
                  <img
                    src="/assets/images/coppak/about/team/jamil-nasir.jpg"
                    alt="Dr. Apostle Jamil Nasir"
                    data-initials="JN"
                    data-astro-cid-3rtgp5cp=""
                  />{" "}
                  <div
                    className="leader-team__badge"
                    data-astro-cid-3rtgp5cp=""
                  >
                    {" "}
                    <i
                      className="fas fa-flag"
                      aria-hidden="true"
                      data-astro-cid-3rtgp5cp=""
                    />{" "}
                  </div>{" "}
                </div>{" "}
                <h4 className="leader-team__name" data-astro-cid-3rtgp5cp="">
                  Dr. Apostle Jamil Nasir
                </h4>{" "}
                <p className="leader-team__role" data-astro-cid-3rtgp5cp="">
                  National Head, Pakistan
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
