import type { Metadata } from "next";
import LegacyScripts from "../components/LegacyScripts";
import HomeHero from "../components/HomeHero";
export const metadata: Metadata = {
  title: "COPPAK.ORG",
  description:
    "The Church of Pentecost Pakistan — 71 assemblies and 28,479 members serving eight districts across Pakistan.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "COPPAK.ORG",
    description:
      "The Church of Pentecost Pakistan — 71 assemblies and 28,479 members serving eight districts across Pakistan.",
    url: "/",
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
  "/scripts/migrated/home-25.js",
];
export default function Page() {
  return (
    <>
      <div>
        <HomeHero />
        <section className="about-one" data-astro-cid-j7pv25f6="">
          {" "}
          <div className="container" data-astro-cid-j7pv25f6="">
            {" "}
            <div className="row align-items-center" data-astro-cid-j7pv25f6="">
              {" "}
              <div className="col-xl-6" data-astro-cid-j7pv25f6="">
                {" "}
                <div className="about-one__left" data-astro-cid-j7pv25f6="">
                  {" "}
                  <div
                    className="about-one__img-box wow slideInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="2500ms"
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <div className="about-one__img" data-astro-cid-j7pv25f6="">
                      {" "}
                      <img
                        src="/assets/images/coppak/about/history/01.jpg"
                        alt="The Church of Pentecost Pakistan"
                        data-astro-cid-j7pv25f6=""
                      />{" "}
                    </div>{" "}
                    <div
                      className="about-one__img-border"
                      data-astro-cid-j7pv25f6=""
                    />{" "}
                    <div
                      className="about-one__curved-circle-box about-one__curved-circle-box--logo-only"
                      data-astro-cid-j7pv25f6=""
                    >
                      {" "}
                      <div
                        className="about-one__curved-circle-icon"
                        data-astro-cid-j7pv25f6=""
                      >
                        {" "}
                        <img
                          src="/icon-512.png"
                          alt="COPPAK"
                          data-astro-cid-j7pv25f6=""
                        />{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-xl-6" data-astro-cid-j7pv25f6="">
                {" "}
                <div className="about-one__right" data-astro-cid-j7pv25f6="">
                  {" "}
                  <div
                    className="section-title text-left"
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <span
                      className="section-title__tagline"
                      data-astro-cid-j7pv25f6=""
                    >
                      Welcome to COPPAK
                    </span>{" "}
                    <h2
                      className="section-title__title"
                      data-astro-cid-j7pv25f6=""
                    >
                      A church without walls — with mission.
                    </h2>{" "}
                  </div>{" "}
                  <p className="about-one__text" data-astro-cid-j7pv25f6="">
                    From a single living room in Lahore in the year 2000, The
                    Church of Pentecost Pakistan has grown into a national
                    Pentecostal movement — today serving eight districts with 71
                    assemblies and 28,479 believers.
                  </p>{" "}
                  <ul
                    className="list-unstyled about-one__points"
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <li data-astro-cid-j7pv25f6="">
                      {" "}
                      <div className="icon" data-astro-cid-j7pv25f6="">
                        {" "}
                        <span
                          className="icon-volunteer"
                          data-astro-cid-j7pv25f6=""
                        />{" "}
                      </div>{" "}
                      <div className="text" data-astro-cid-j7pv25f6="">
                        {" "}
                        <h5 data-astro-cid-j7pv25f6="">
                          <a href="/ministries" data-astro-cid-j7pv25f6="">
                            Find a ministry
                          </a>
                        </h5>{" "}
                        <p data-astro-cid-j7pv25f6="">
                          Youth, women, children, compassion — there's a place
                          to serve.
                        </p>{" "}
                      </div>{" "}
                    </li>{" "}
                    <li data-astro-cid-j7pv25f6="">
                      {" "}
                      <div className="icon" data-astro-cid-j7pv25f6="">
                        {" "}
                        <span
                          className="icon-solidarity"
                          data-astro-cid-j7pv25f6=""
                        />{" "}
                      </div>{" "}
                      <div className="text" data-astro-cid-j7pv25f6="">
                        {" "}
                        <h5 data-astro-cid-j7pv25f6="">
                          <a href="/donate" data-astro-cid-j7pv25f6="">
                            Partner financially
                          </a>
                        </h5>{" "}
                        <p data-astro-cid-j7pv25f6="">
                          Bible translation, brick-kiln deliverance, medical
                          camps, and more.
                        </p>{" "}
                      </div>{" "}
                    </li>{" "}
                  </ul>{" "}
                  <a
                    href="/about"
                    className="thm-btn about-one__btn"
                    data-astro-cid-j7pv25f6=""
                  >
                    Read our story{" "}
                    <span
                      className="arr"
                      aria-hidden="true"
                      data-astro-cid-j7pv25f6=""
                    >
                      →
                    </span>
                  </a>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section className="counter-one" data-astro-cid-j7pv25f6="">
          {" "}
          <div className="container" data-astro-cid-j7pv25f6="">
            {" "}
            <div className="counter-one__inner" data-astro-cid-j7pv25f6="">
              {" "}
              <div
                className="counter-one-bg jarallax"
                data-jarallax
                data-speed="0.2"
                data-imgposition="50% 0%"
                style={{
                  backgroundImage:
                    "url(/assets/images/coppak/outreach/mass-evangelism/02.jpg)",
                }}
                data-astro-cid-j7pv25f6=""
              />{" "}
              <ul
                className="list-unstyled counter-one__list"
                data-astro-cid-j7pv25f6=""
              >
                {" "}
                <li className="counter-one__single" data-astro-cid-j7pv25f6="">
                  {" "}
                  <div
                    className="counter-one__count-box"
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <h3
                      className="odometer"
                      data-count={71}
                      data-astro-cid-j7pv25f6=""
                    >
                      00
                    </h3>{" "}
                    <span
                      className="counter-one__letter"
                      data-astro-cid-j7pv25f6=""
                    />{" "}
                  </div>{" "}
                  <p className="counter-one__text" data-astro-cid-j7pv25f6="">
                    Local assemblies
                  </p>{" "}
                </li>{" "}
                <li className="counter-one__single" data-astro-cid-j7pv25f6="">
                  {" "}
                  <div
                    className="counter-one__count-box"
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <h3
                      className="odometer"
                      data-count={28479}
                      data-astro-cid-j7pv25f6=""
                    >
                      00
                    </h3>{" "}
                    <span
                      className="counter-one__letter"
                      data-astro-cid-j7pv25f6=""
                    />{" "}
                  </div>{" "}
                  <p className="counter-one__text" data-astro-cid-j7pv25f6="">
                    Members nationwide
                  </p>{" "}
                </li>{" "}
                <li className="counter-one__single" data-astro-cid-j7pv25f6="">
                  {" "}
                  <div
                    className="counter-one__count-box"
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <h3
                      className="odometer"
                      data-count={8}
                      data-astro-cid-j7pv25f6=""
                    >
                      00
                    </h3>{" "}
                    <span
                      className="counter-one__letter"
                      data-astro-cid-j7pv25f6=""
                    />{" "}
                  </div>{" "}
                  <p className="counter-one__text" data-astro-cid-j7pv25f6="">
                    Districts served
                  </p>{" "}
                </li>{" "}
                <li className="counter-one__single" data-astro-cid-j7pv25f6="">
                  {" "}
                  <div
                    className="counter-one__count-box"
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <h3
                      className="odometer"
                      data-count={25}
                      data-astro-cid-j7pv25f6=""
                    >
                      00
                    </h3>{" "}
                    <span
                      className="counter-one__letter"
                      data-astro-cid-j7pv25f6=""
                    >
                      +
                    </span>{" "}
                  </div>{" "}
                  <p className="counter-one__text" data-astro-cid-j7pv25f6="">
                    Years on mission
                  </p>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section style={{ padding: "80px 0 40px" }} data-astro-cid-j7pv25f6="">
          {" "}
          <div className="container" data-astro-cid-j7pv25f6="">
            {" "}
            <div
              className="section-title text-center"
              data-astro-cid-j7pv25f6=""
            >
              {" "}
              <span
                className="section-title__tagline"
                data-astro-cid-j7pv25f6=""
              >
                When we gather
              </span>{" "}
              <h2 className="section-title__title" data-astro-cid-j7pv25f6="">
                Worship, communion, and baptism
              </h2>{" "}
            </div>{" "}
            <div
              className="row"
              style={{ marginTop: 32 }}
              data-astro-cid-j7pv25f6=""
            >
              {" "}
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
                style={{ marginBottom: 30 }}
                data-astro-cid-j7pv25f6=""
              >
                {" "}
                <a
                  href="/church-services/baptism"
                  style={{
                    display: "block",
                    background: "#fff",
                    borderRadius: 16,
                    overflow: "hidden",
                    boxShadow:
                      "0 2px 6px rgba(15,27,61,0.05), 0 16px 40px -12px rgba(15,27,61,0.15)",
                    height: "100%",
                    color: "inherit",
                  }}
                  data-astro-cid-j7pv25f6=""
                >
                  {" "}
                  <div
                    style={{
                      aspectRatio: "16/9",
                      overflow: "hidden",
                      background: "#f5f1ea",
                    }}
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/services/baptism/01.jpg"
                      alt="Baptism service"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      data-astro-cid-j7pv25f6=""
                    />{" "}
                  </div>{" "}
                  <div style={{ padding: 24 }} data-astro-cid-j7pv25f6="">
                    {" "}
                    <p
                      style={{
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        fontSize: 11,
                        color: "var(--oxpins-base)",
                        margin: "0 0 8px",
                        fontWeight: 700,
                      }}
                      data-astro-cid-j7pv25f6=""
                    >
                      {" "}
                      Quarterly in every district{" "}
                    </p>{" "}
                    <h4
                      style={{ margin: "0 0 8px", fontSize: 22 }}
                      data-astro-cid-j7pv25f6=""
                    >
                      Baptism service
                    </h4>{" "}
                    <p
                      style={{
                        margin: 0,
                        fontSize: 14,
                        opacity: "0.78",
                        lineHeight: "1.5",
                      }}
                      data-astro-cid-j7pv25f6=""
                    >
                      {" "}
                      Public quarterly baptism in parks, rivers, and pools
                      across Pakistan — celebrating new believers from every
                      ministry.{" "}
                    </p>{" "}
                  </div>{" "}
                </a>{" "}
              </div>
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
                style={{ marginBottom: 30 }}
                data-astro-cid-j7pv25f6=""
              >
                {" "}
                <a
                  href="/church-services/holy-communion"
                  style={{
                    display: "block",
                    background: "#fff",
                    borderRadius: 16,
                    overflow: "hidden",
                    boxShadow:
                      "0 2px 6px rgba(15,27,61,0.05), 0 16px 40px -12px rgba(15,27,61,0.15)",
                    height: "100%",
                    color: "inherit",
                  }}
                  data-astro-cid-j7pv25f6=""
                >
                  {" "}
                  <div
                    style={{
                      aspectRatio: "16/9",
                      overflow: "hidden",
                      background: "#f5f1ea",
                    }}
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/services/communion/01.jpg"
                      alt="Holy Communion"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      data-astro-cid-j7pv25f6=""
                    />{" "}
                  </div>{" "}
                  <div style={{ padding: 24 }} data-astro-cid-j7pv25f6="">
                    {" "}
                    <p
                      style={{
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        fontSize: 11,
                        color: "var(--oxpins-base)",
                        margin: "0 0 8px",
                        fontWeight: 700,
                      }}
                      data-astro-cid-j7pv25f6=""
                    >
                      {" "}
                      First Sunday of every month{" "}
                    </p>{" "}
                    <h4
                      style={{ margin: "0 0 8px", fontSize: 22 }}
                      data-astro-cid-j7pv25f6=""
                    >
                      Holy Communion
                    </h4>{" "}
                    <p
                      style={{
                        margin: 0,
                        fontSize: 14,
                        opacity: "0.78",
                        lineHeight: "1.5",
                      }}
                      data-astro-cid-j7pv25f6=""
                    >
                      {" "}
                      On the first Sunday of every month, all COPPAK assemblies
                      gather to remember the sacrifice of Christ.{" "}
                    </p>{" "}
                  </div>{" "}
                </a>{" "}
              </div>
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
                style={{ marginBottom: 30 }}
                data-astro-cid-j7pv25f6=""
              >
                {" "}
                <a
                  href="/church-services/sunday-service"
                  style={{
                    display: "block",
                    background: "#fff",
                    borderRadius: 16,
                    overflow: "hidden",
                    boxShadow:
                      "0 2px 6px rgba(15,27,61,0.05), 0 16px 40px -12px rgba(15,27,61,0.15)",
                    height: "100%",
                    color: "inherit",
                  }}
                  data-astro-cid-j7pv25f6=""
                >
                  {" "}
                  <div
                    style={{
                      aspectRatio: "16/9",
                      overflow: "hidden",
                      background: "#f5f1ea",
                    }}
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/services/sunday/01.jpg"
                      alt="Sunday service"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      data-astro-cid-j7pv25f6=""
                    />{" "}
                  </div>{" "}
                  <div style={{ padding: 24 }} data-astro-cid-j7pv25f6="">
                    {" "}
                    <p
                      style={{
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        fontSize: 11,
                        color: "var(--oxpins-base)",
                        margin: "0 0 8px",
                        fontWeight: 700,
                      }}
                      data-astro-cid-j7pv25f6=""
                    >
                      {" "}
                      Every Sunday{" "}
                    </p>{" "}
                    <h4
                      style={{ margin: "0 0 8px", fontSize: 22 }}
                      data-astro-cid-j7pv25f6=""
                    >
                      Sunday service
                    </h4>{" "}
                    <p
                      style={{
                        margin: 0,
                        fontSize: 14,
                        opacity: "0.78",
                        lineHeight: "1.5",
                      }}
                      data-astro-cid-j7pv25f6=""
                    >
                      {" "}
                      Worship that endures heat and cold — Pakistani believers
                      gather every Sunday in 19 church buildings, on rooftops,
                      in homes, and in the streets.{" "}
                    </p>{" "}
                  </div>{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section style={{ padding: "80px 0 70px" }} data-astro-cid-j7pv25f6="">
          {" "}
          <div className="container" data-astro-cid-j7pv25f6="">
            {" "}
            <div
              className="section-title text-center"
              data-astro-cid-j7pv25f6=""
            >
              {" "}
              <span
                className="section-title__tagline"
                data-astro-cid-j7pv25f6=""
              >
                Our ministries
              </span>{" "}
              <h2 className="section-title__title" data-astro-cid-j7pv25f6="">
                {" "}
                6 ministries, one mission <br data-astro-cid-j7pv25f6="" />{" "}
                across Pakistan
              </h2>{" "}
            </div>{" "}
            <div className="home-ministries" data-astro-cid-j7pv25f6="">
              {" "}
              <a
                href="/ministries/compassion"
                className="home-ministries__card"
                data-astro-cid-j7pv25f6=""
              >
                {" "}
                <div
                  className="home-ministries__photo"
                  data-astro-cid-j7pv25f6=""
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/ministries/compassion/help-out-01.jpg"
                    alt="Compassion ministry"
                    loading="lazy"
                    data-astro-cid-j7pv25f6=""
                  />{" "}
                </div>{" "}
                <div
                  className="home-ministries__body"
                  data-astro-cid-j7pv25f6=""
                >
                  {" "}
                  <div
                    className="home-ministries__head"
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <span
                      className="home-ministries__icon"
                      data-astro-cid-j7pv25f6=""
                    >
                      {" "}
                      <i
                        className="fas fa-hand-holding-heart"
                        aria-hidden="true"
                        data-astro-cid-j7pv25f6=""
                      />{" "}
                    </span>{" "}
                    <h3
                      className="home-ministries__title"
                      data-astro-cid-j7pv25f6=""
                    >
                      Compassion ministry
                    </h3>{" "}
                  </div>{" "}
                  <p
                    className="home-ministries__summary"
                    data-astro-cid-j7pv25f6=""
                  >
                    Daily meals, monthly grocery support, and steady pastoral
                    care for the poor, the hungry, and the vulnerable across
                    Pakistan — the Lord's Table and family support together.
                  </p>{" "}
                  <span
                    className="home-ministries__cta"
                    data-astro-cid-j7pv25f6=""
                  >
                    Read more{" "}
                    <span
                      className="arr"
                      aria-hidden="true"
                      data-astro-cid-j7pv25f6=""
                    >
                      →
                    </span>{" "}
                  </span>{" "}
                </div>{" "}
              </a>
              <a
                href="/ministries/children"
                className="home-ministries__card"
                data-astro-cid-j7pv25f6=""
              >
                {" "}
                <div
                  className="home-ministries__photo"
                  data-astro-cid-j7pv25f6=""
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/ministries/children/01.jpg"
                    alt="Children's ministry"
                    loading="lazy"
                    data-astro-cid-j7pv25f6=""
                  />{" "}
                </div>{" "}
                <div
                  className="home-ministries__body"
                  data-astro-cid-j7pv25f6=""
                >
                  {" "}
                  <div
                    className="home-ministries__head"
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <span
                      className="home-ministries__icon"
                      data-astro-cid-j7pv25f6=""
                    >
                      {" "}
                      <i
                        className="fas fa-child"
                        aria-hidden="true"
                        data-astro-cid-j7pv25f6=""
                      />{" "}
                    </span>{" "}
                    <h3
                      className="home-ministries__title"
                      data-astro-cid-j7pv25f6=""
                    >
                      Children's ministry
                    </h3>{" "}
                  </div>{" "}
                  <p
                    className="home-ministries__summary"
                    data-astro-cid-j7pv25f6=""
                  >
                    Loving, teaching, and discipling 1,500+ children every
                    Sunday — restoring hope and faith in the next generation.
                  </p>{" "}
                  <span
                    className="home-ministries__cta"
                    data-astro-cid-j7pv25f6=""
                  >
                    Read more{" "}
                    <span
                      className="arr"
                      aria-hidden="true"
                      data-astro-cid-j7pv25f6=""
                    >
                      →
                    </span>{" "}
                  </span>{" "}
                </div>{" "}
              </a>
              <a
                href="/ministries/sports"
                className="home-ministries__card"
                data-astro-cid-j7pv25f6=""
              >
                {" "}
                <div
                  className="home-ministries__photo"
                  data-astro-cid-j7pv25f6=""
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/ministries/sports/01.jpg"
                    alt="Sports ministry"
                    loading="lazy"
                    data-astro-cid-j7pv25f6=""
                  />{" "}
                </div>{" "}
                <div
                  className="home-ministries__body"
                  data-astro-cid-j7pv25f6=""
                >
                  {" "}
                  <div
                    className="home-ministries__head"
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <span
                      className="home-ministries__icon"
                      data-astro-cid-j7pv25f6=""
                    >
                      {" "}
                      <i
                        className="fas fa-futbol"
                        aria-hidden="true"
                        data-astro-cid-j7pv25f6=""
                      />{" "}
                    </span>{" "}
                    <h3
                      className="home-ministries__title"
                      data-astro-cid-j7pv25f6=""
                    >
                      Sports ministry
                    </h3>{" "}
                  </div>{" "}
                  <p
                    className="home-ministries__summary"
                    data-astro-cid-j7pv25f6=""
                  >
                    Using cricket and sport as God-given doorways for
                    evangelism, discipleship, and church growth across Pakistan.
                  </p>{" "}
                  <span
                    className="home-ministries__cta"
                    data-astro-cid-j7pv25f6=""
                  >
                    Read more{" "}
                    <span
                      className="arr"
                      aria-hidden="true"
                      data-astro-cid-j7pv25f6=""
                    >
                      →
                    </span>{" "}
                  </span>{" "}
                </div>{" "}
              </a>
              <a
                href="/ministries/support-needy-families"
                className="home-ministries__card"
                data-astro-cid-j7pv25f6=""
              >
                {" "}
                <div
                  className="home-ministries__photo"
                  data-astro-cid-j7pv25f6=""
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/ministries/support-needy-families/welfare-01.jpg"
                    alt="Support needy families"
                    loading="lazy"
                    data-astro-cid-j7pv25f6=""
                  />{" "}
                </div>{" "}
                <div
                  className="home-ministries__body"
                  data-astro-cid-j7pv25f6=""
                >
                  {" "}
                  <div
                    className="home-ministries__head"
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <span
                      className="home-ministries__icon"
                      data-astro-cid-j7pv25f6=""
                    >
                      {" "}
                      <i
                        className="fas fa-box-open"
                        aria-hidden="true"
                        data-astro-cid-j7pv25f6=""
                      />{" "}
                    </span>{" "}
                    <h3
                      className="home-ministries__title"
                      data-astro-cid-j7pv25f6=""
                    >
                      Support needy families
                    </h3>{" "}
                  </div>{" "}
                  <p
                    className="home-ministries__summary"
                    data-astro-cid-j7pv25f6=""
                  >
                    Walking with Christian families through hardship — monthly
                    groceries, school supplies, baby essentials, and pastoral
                    care that doesn't stop at a doorstep.
                  </p>{" "}
                  <span
                    className="home-ministries__cta"
                    data-astro-cid-j7pv25f6=""
                  >
                    Read more{" "}
                    <span
                      className="arr"
                      aria-hidden="true"
                      data-astro-cid-j7pv25f6=""
                    >
                      →
                    </span>{" "}
                  </span>{" "}
                </div>{" "}
              </a>
              <a
                href="/ministries/women"
                className="home-ministries__card"
                data-astro-cid-j7pv25f6=""
              >
                {" "}
                <div
                  className="home-ministries__photo"
                  data-astro-cid-j7pv25f6=""
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/ministries/women/01.jpg"
                    alt="Women's ministry"
                    loading="lazy"
                    data-astro-cid-j7pv25f6=""
                  />{" "}
                </div>{" "}
                <div
                  className="home-ministries__body"
                  data-astro-cid-j7pv25f6=""
                >
                  {" "}
                  <div
                    className="home-ministries__head"
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <span
                      className="home-ministries__icon"
                      data-astro-cid-j7pv25f6=""
                    >
                      {" "}
                      <i
                        className="fas fa-female"
                        aria-hidden="true"
                        data-astro-cid-j7pv25f6=""
                      />{" "}
                    </span>{" "}
                    <h3
                      className="home-ministries__title"
                      data-astro-cid-j7pv25f6=""
                    >
                      Women's ministry
                    </h3>{" "}
                  </div>{" "}
                  <p
                    className="home-ministries__summary"
                    data-astro-cid-j7pv25f6=""
                  >
                    Empowering, equipping, and walking alongside Pakistani
                    Christian women through fellowship, conferences, and skill
                    development.
                  </p>{" "}
                  <span
                    className="home-ministries__cta"
                    data-astro-cid-j7pv25f6=""
                  >
                    Read more{" "}
                    <span
                      className="arr"
                      aria-hidden="true"
                      data-astro-cid-j7pv25f6=""
                    >
                      →
                    </span>{" "}
                  </span>{" "}
                </div>{" "}
              </a>
              <a
                href="/ministries/youth-pensa"
                className="home-ministries__card"
                data-astro-cid-j7pv25f6=""
              >
                {" "}
                <div
                  className="home-ministries__photo"
                  data-astro-cid-j7pv25f6=""
                >
                  {" "}
                  <img
                    src="/assets/images/coppak/ministries/pensa-youth/01.jpg"
                    alt="Youth & PENSA Pakistan"
                    loading="lazy"
                    data-astro-cid-j7pv25f6=""
                  />{" "}
                </div>{" "}
                <div
                  className="home-ministries__body"
                  data-astro-cid-j7pv25f6=""
                >
                  {" "}
                  <div
                    className="home-ministries__head"
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <span
                      className="home-ministries__icon"
                      data-astro-cid-j7pv25f6=""
                    >
                      {" "}
                      <i
                        className="fas fa-graduation-cap"
                        aria-hidden="true"
                        data-astro-cid-j7pv25f6=""
                      />{" "}
                    </span>{" "}
                    <h3
                      className="home-ministries__title"
                      data-astro-cid-j7pv25f6=""
                    >
                      Youth &amp; PENSA Pakistan
                    </h3>{" "}
                  </div>{" "}
                  <p
                    className="home-ministries__summary"
                    data-astro-cid-j7pv25f6=""
                  >
                    Reaching the next generation of Pakistan with the gospel —
                    through PENSA discipleship, sports evangelism, and
                    Spirit-led mentorship for students and young professionals.
                  </p>{" "}
                  <span
                    className="home-ministries__cta"
                    data-astro-cid-j7pv25f6=""
                  >
                    Read more{" "}
                    <span
                      className="arr"
                      aria-hidden="true"
                      data-astro-cid-j7pv25f6=""
                    >
                      →
                    </span>{" "}
                  </span>{" "}
                </div>{" "}
              </a>{" "}
            </div>{" "}
            <div
              style={{ textAlign: "center", marginTop: 8 }}
              data-astro-cid-j7pv25f6=""
            >
              {" "}
              <a
                href="/ministries"
                className="thm-btn"
                data-astro-cid-j7pv25f6=""
              >
                All ministries{" "}
                <span
                  className="arr"
                  aria-hidden="true"
                  data-astro-cid-j7pv25f6=""
                >
                  →
                </span>
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section
          className="causes-one"
          style={{ paddingTop: 40 }}
          data-astro-cid-j7pv25f6=""
        >
          {" "}
          <div className="container" data-astro-cid-j7pv25f6="">
            {" "}
            <div
              className="section-title text-center"
              data-astro-cid-j7pv25f6=""
            >
              {" "}
              <span
                className="section-title__tagline"
                data-astro-cid-j7pv25f6=""
              >
                Train &amp; equip
              </span>{" "}
              <h2 className="section-title__title" data-astro-cid-j7pv25f6="">
                Pillars of the work
              </h2>{" "}
            </div>{" "}
            <div
              className="row"
              style={{ marginTop: 32 }}
              data-astro-cid-j7pv25f6=""
            >
              {" "}
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay="100ms"
                style={{ marginBottom: 30 }}
                data-astro-cid-j7pv25f6=""
              >
                {" "}
                <a
                  href="/bible-college"
                  className="causes-one__single causes-one__single--link"
                  style={{ height: "100%" }}
                  data-astro-cid-j7pv25f6=""
                >
                  {" "}
                  <div className="causes-one__img" data-astro-cid-j7pv25f6="">
                    {" "}
                    <img
                      src="/assets/images/coppak/bible-college/01.jpg"
                      alt="Pentecost University — Pakistan Campus"
                      data-astro-cid-j7pv25f6=""
                    />{" "}
                    <div className="causes-one__cat" data-astro-cid-j7pv25f6="">
                      <p data-astro-cid-j7pv25f6="">Training</p>
                    </div>{" "}
                  </div>{" "}
                  <div
                    className="causes-one__content"
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <h3
                      className="causes-one__title"
                      data-astro-cid-j7pv25f6=""
                    >
                      Pentecost University — Pakistan Campus
                    </h3>{" "}
                    <p className="causes-one__text" data-astro-cid-j7pv25f6="">
                      From 13 students in a rented house in 2004 to a global
                      university partnership — equipping Christian leaders in
                      Scripture, theology, and ministry.
                    </p>{" "}
                    <span
                      className="causes-one__read-more"
                      data-astro-cid-j7pv25f6=""
                    >
                      Read more{" "}
                      <span className="arrow" data-astro-cid-j7pv25f6="">
                        →
                      </span>
                    </span>{" "}
                  </div>{" "}
                </a>{" "}
              </div>{" "}
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay="200ms"
                style={{ marginBottom: 30 }}
                data-astro-cid-j7pv25f6=""
              >
                {" "}
                <a
                  href="/conferences"
                  className="causes-one__single causes-one__single--link"
                  style={{ height: "100%" }}
                  data-astro-cid-j7pv25f6=""
                >
                  {" "}
                  <div className="causes-one__img" data-astro-cid-j7pv25f6="">
                    {" "}
                    <img
                      src="/assets/images/coppak/conferences/01.jpg"
                      alt="Leadership conferences"
                      data-astro-cid-j7pv25f6=""
                    />{" "}
                    <div className="causes-one__cat" data-astro-cid-j7pv25f6="">
                      <p data-astro-cid-j7pv25f6="">Leadership</p>
                    </div>{" "}
                  </div>{" "}
                  <div
                    className="causes-one__content"
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <h3
                      className="causes-one__title"
                      data-astro-cid-j7pv25f6=""
                    >
                      Conferences &amp; leadership training
                    </h3>{" "}
                    <p className="causes-one__text" data-astro-cid-j7pv25f6="">
                      Training pastors and church workers to transform society
                      through the Gospel — in-person and virtual, with printed
                      resources for every district.
                    </p>{" "}
                    <span
                      className="causes-one__read-more"
                      data-astro-cid-j7pv25f6=""
                    >
                      Read more{" "}
                      <span className="arrow" data-astro-cid-j7pv25f6="">
                        →
                      </span>
                    </span>{" "}
                  </div>{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section className="causes-one" data-astro-cid-j7pv25f6="">
          {" "}
          <div className="container" data-astro-cid-j7pv25f6="">
            {" "}
            <div
              className="section-title text-center"
              data-astro-cid-j7pv25f6=""
            >
              {" "}
              <span
                className="section-title__tagline"
                data-astro-cid-j7pv25f6=""
              >
                Our projects
              </span>{" "}
              <h2 className="section-title__title" data-astro-cid-j7pv25f6="">
                Real work, real lives <br data-astro-cid-j7pv25f6="" />{" "}
                transformed across Pakistan
              </h2>{" "}
            </div>{" "}
            <div className="row" data-astro-cid-j7pv25f6="">
              {" "}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="100ms"
                data-astro-cid-j7pv25f6=""
              >
                {" "}
                <a
                  href="/projects/bible-translation"
                  className="causes-one__single causes-one__single--link"
                  data-astro-cid-j7pv25f6=""
                >
                  {" "}
                  <div className="causes-one__img" data-astro-cid-j7pv25f6="">
                    {" "}
                    <img
                      src="/assets/images/coppak/projects/bible-translation/01.png"
                      alt="Bible translation"
                      data-astro-cid-j7pv25f6=""
                    />{" "}
                    <div className="causes-one__cat" data-astro-cid-j7pv25f6="">
                      <p data-astro-cid-j7pv25f6="">Translation</p>
                    </div>{" "}
                  </div>{" "}
                  <div
                    className="causes-one__content"
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <h3
                      className="causes-one__title"
                      data-astro-cid-j7pv25f6=""
                    >
                      Bible translation in five heart languages
                    </h3>{" "}
                    <p className="causes-one__text" data-astro-cid-j7pv25f6="">
                      Marwari, Hindko, Saraiki, Potohari, and Kashmiri —
                      Scripture in the languages of home.
                    </p>{" "}
                    <span
                      className="causes-one__read-more"
                      data-astro-cid-j7pv25f6=""
                    >
                      Read more{" "}
                      <span className="arrow" data-astro-cid-j7pv25f6="">
                        →
                      </span>
                    </span>{" "}
                  </div>{" "}
                </a>{" "}
              </div>{" "}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="200ms"
                data-astro-cid-j7pv25f6=""
              >
                {" "}
                <a
                  href="/projects/brick-kiln-deliverance"
                  className="causes-one__single causes-one__single--link"
                  data-astro-cid-j7pv25f6=""
                >
                  {" "}
                  <div className="causes-one__img" data-astro-cid-j7pv25f6="">
                    {" "}
                    <img
                      src="/assets/images/coppak/projects/brick-kiln/01.jpg"
                      alt="Brick-kiln deliverance"
                      data-astro-cid-j7pv25f6=""
                    />{" "}
                    <div className="causes-one__cat" data-astro-cid-j7pv25f6="">
                      <p data-astro-cid-j7pv25f6="">Deliverance</p>
                    </div>{" "}
                  </div>{" "}
                  <div
                    className="causes-one__content"
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <h3
                      className="causes-one__title"
                      data-astro-cid-j7pv25f6=""
                    >
                      Brick-kiln deliverance, debts paid in full
                    </h3>{" "}
                    <p className="causes-one__text" data-astro-cid-j7pv25f6="">
                      Freeing families from generational bonded labour and
                      walking with them into independence.
                    </p>{" "}
                    <span
                      className="causes-one__read-more"
                      data-astro-cid-j7pv25f6=""
                    >
                      Read more{" "}
                      <span className="arrow" data-astro-cid-j7pv25f6="">
                        →
                      </span>
                    </span>{" "}
                  </div>{" "}
                </a>{" "}
              </div>{" "}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="300ms"
                data-astro-cid-j7pv25f6=""
              >
                {" "}
                <a
                  href="/projects/free-medical-camps"
                  className="causes-one__single causes-one__single--link"
                  data-astro-cid-j7pv25f6=""
                >
                  {" "}
                  <div className="causes-one__img" data-astro-cid-j7pv25f6="">
                    {" "}
                    <img
                      src="/assets/images/coppak/projects/medical-camps/01.jpg"
                      alt="Free medical camps"
                      data-astro-cid-j7pv25f6=""
                    />{" "}
                    <div className="causes-one__cat" data-astro-cid-j7pv25f6="">
                      <p data-astro-cid-j7pv25f6="">Medical</p>
                    </div>{" "}
                  </div>{" "}
                  <div
                    className="causes-one__content"
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <h3
                      className="causes-one__title"
                      data-astro-cid-j7pv25f6=""
                    >
                      Free medical camps in underserved areas
                    </h3>{" "}
                    <p className="causes-one__text" data-astro-cid-j7pv25f6="">
                      Doctors, medicines, and prayer — without cost and without
                      discrimination, for anyone in need.
                    </p>{" "}
                    <span
                      className="causes-one__read-more"
                      data-astro-cid-j7pv25f6=""
                    >
                      Read more{" "}
                      <span className="arrow" data-astro-cid-j7pv25f6="">
                        →
                      </span>
                    </span>{" "}
                  </div>{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
            <div
              style={{ textAlign: "center", marginTop: 24 }}
              data-astro-cid-j7pv25f6=""
            >
              {" "}
              <a
                href="/projects"
                className="thm-btn"
                data-astro-cid-j7pv25f6=""
              >
                All projects{" "}
                <span
                  className="arr"
                  aria-hidden="true"
                  data-astro-cid-j7pv25f6=""
                >
                  →
                </span>
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section className="become-volunteer-one" data-astro-cid-j7pv25f6="">
          {" "}
          <div
            className="become-volunteer-one__bg-box"
            style={{ backgroundColor: "#0a1430" }}
            data-astro-cid-j7pv25f6=""
          >
            {" "}
            <div
              className="become-volunteer-one__bg jarallax"
              data-jarallax
              data-speed="0.2"
              data-imgposition="50% 0%"
              style={{
                backgroundImage:
                  "url(/assets/images/coppak/outreach/public-rallies/01.jpg)",
                opacity: "0.35",
              }}
              data-astro-cid-j7pv25f6=""
            />{" "}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(8, 16, 40, 0.5)",
              }}
              data-astro-cid-j7pv25f6=""
            />{" "}
          </div>{" "}
          <div className="container" data-astro-cid-j7pv25f6="">
            {" "}
            <div
              className="become-volunteer-one__inner"
              data-astro-cid-j7pv25f6=""
            >
              {" "}
              <p
                className="become-volunteer-one__sub-title"
                data-astro-cid-j7pv25f6=""
              >
                2026 Theme
              </p>{" "}
              <h3
                className="become-volunteer-one__title"
                data-astro-cid-j7pv25f6=""
              >
                The Church Unleashed to Transform Society{" "}
                <br data-astro-cid-j7pv25f6="" /> Through the Gospel and the
                Power of the Holy Spirit.
              </h3>{" "}
              <div
                className="become-volunteer-one__btn-box"
                data-astro-cid-j7pv25f6=""
              >
                {" "}
                <a
                  href="/about"
                  className="thm-btn become-volunteer-one__btn"
                  data-astro-cid-j7pv25f6=""
                >
                  Learn more{" "}
                  <span
                    className="arr"
                    aria-hidden="true"
                    data-astro-cid-j7pv25f6=""
                  >
                    →
                  </span>
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section className="events-one" data-astro-cid-j7pv25f6="">
          {" "}
          <div
            className="events-one-shape-1"
            style={{
              backgroundImage:
                "url(/assets/images/shapes/events-one-shape-1.png)",
            }}
            data-astro-cid-j7pv25f6=""
          />{" "}
          <div className="container" data-astro-cid-j7pv25f6="">
            {" "}
            <div className="row" data-astro-cid-j7pv25f6="">
              {" "}
              <div className="col-xl-4 col-lg-4" data-astro-cid-j7pv25f6="">
                {" "}
                <div className="events-one__left" data-astro-cid-j7pv25f6="">
                  {" "}
                  <div
                    className="section-title text-left"
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <span
                      className="section-title__tagline"
                      data-astro-cid-j7pv25f6=""
                    >
                      Upcoming events
                    </span>{" "}
                    <h2
                      className="section-title__title"
                      data-astro-cid-j7pv25f6=""
                    >
                      Join us across Pakistan
                    </h2>{" "}
                  </div>{" "}
                  <p className="events-one__text-1" data-astro-cid-j7pv25f6="">
                    Worship, evangelism, conferences, and conventions —
                    happening year-round across our eight districts.
                  </p>{" "}
                  <a
                    href="/events"
                    className="thm-btn events-one__btn"
                    data-astro-cid-j7pv25f6=""
                  >
                    All events{" "}
                    <span
                      className="arr"
                      aria-hidden="true"
                      data-astro-cid-j7pv25f6=""
                    >
                      →
                    </span>
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-xl-8 col-lg-8" data-astro-cid-j7pv25f6="">
                {" "}
                <div className="events-one__right" data-astro-cid-j7pv25f6="">
                  {" "}
                  <div
                    className="events-one__carousel owl-carousel owl-theme thm-owl__carousel"
                    data-owl-options='{"loop": true, "autoplay": true, "margin": 24, "nav": true, "dots": false, "smartSpeed": 500, "autoplayTimeout": 10000, "responsive": {"0": {"items": 1}, "768": {"items": 2}, "992": {"items": 2}, "1200": {"items": 2}}}'
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <div className="item" data-astro-cid-j7pv25f6="">
                      {" "}
                      <div
                        className="events-one__single"
                        data-astro-cid-j7pv25f6=""
                      >
                        {" "}
                        <div
                          className="events-one__img"
                          data-astro-cid-j7pv25f6=""
                        >
                          {" "}
                          <img
                            src="/assets/images/coppak/outreach/public-rallies/01.jpg"
                            alt="Public rallies & prayer marches"
                            data-astro-cid-j7pv25f6=""
                          />{" "}
                          <div
                            className="events-one__date"
                            data-astro-cid-j7pv25f6=""
                          >
                            {" "}
                            <p data-astro-cid-j7pv25f6="">
                              Christmas, Easter &amp; throughout the year
                            </p>{" "}
                          </div>{" "}
                          <div
                            className="events-one__content"
                            data-astro-cid-j7pv25f6=""
                          >
                            {" "}
                            <ul
                              className="list-unstyled events-one__meta"
                              data-astro-cid-j7pv25f6=""
                            >
                              {" "}
                              <li data-astro-cid-j7pv25f6="">
                                {" "}
                                <i
                                  className="fas fa-map-marker-alt"
                                  data-astro-cid-j7pv25f6=""
                                />{" "}
                                Cities across Pakistan{" "}
                              </li>{" "}
                            </ul>{" "}
                            <h3
                              className="events-one__title"
                              data-astro-cid-j7pv25f6=""
                            >
                              {" "}
                              <a
                                href="/outreach/public-rallies"
                                data-astro-cid-j7pv25f6=""
                              >
                                Public rallies &amp; prayer marches
                              </a>{" "}
                            </h3>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                    <div className="item" data-astro-cid-j7pv25f6="">
                      {" "}
                      <div
                        className="events-one__single"
                        data-astro-cid-j7pv25f6=""
                      >
                        {" "}
                        <div
                          className="events-one__img"
                          data-astro-cid-j7pv25f6=""
                        >
                          {" "}
                          <img
                            src="/assets/images/coppak/ministries/women/01.jpg"
                            alt="National Women's Conference"
                            data-astro-cid-j7pv25f6=""
                          />{" "}
                          <div
                            className="events-one__date"
                            data-astro-cid-j7pv25f6=""
                          >
                            {" "}
                            <p data-astro-cid-j7pv25f6="">Annual</p>{" "}
                          </div>{" "}
                          <div
                            className="events-one__content"
                            data-astro-cid-j7pv25f6=""
                          >
                            {" "}
                            <ul
                              className="list-unstyled events-one__meta"
                              data-astro-cid-j7pv25f6=""
                            >
                              {" "}
                              <li data-astro-cid-j7pv25f6="">
                                {" "}
                                <i
                                  className="fas fa-map-marker-alt"
                                  data-astro-cid-j7pv25f6=""
                                />{" "}
                                Plus local seminars year-round{" "}
                              </li>{" "}
                            </ul>{" "}
                            <h3
                              className="events-one__title"
                              data-astro-cid-j7pv25f6=""
                            >
                              {" "}
                              <a
                                href="/ministries/women"
                                data-astro-cid-j7pv25f6=""
                              >
                                National Women's Conference
                              </a>{" "}
                            </h3>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                    <div className="item" data-astro-cid-j7pv25f6="">
                      {" "}
                      <div
                        className="events-one__single"
                        data-astro-cid-j7pv25f6=""
                      >
                        {" "}
                        <div
                          className="events-one__img"
                          data-astro-cid-j7pv25f6=""
                        >
                          {" "}
                          <img
                            src="/assets/images/coppak/outreach/mass-evangelism/01.jpg"
                            alt="Mass evangelism crusades"
                            data-astro-cid-j7pv25f6=""
                          />{" "}
                          <div
                            className="events-one__date"
                            data-astro-cid-j7pv25f6=""
                          >
                            {" "}
                            <p data-astro-cid-j7pv25f6="">
                              Open-air &amp; stadium events
                            </p>{" "}
                          </div>{" "}
                          <div
                            className="events-one__content"
                            data-astro-cid-j7pv25f6=""
                          >
                            {" "}
                            <ul
                              className="list-unstyled events-one__meta"
                              data-astro-cid-j7pv25f6=""
                            >
                              {" "}
                              <li data-astro-cid-j7pv25f6="">
                                {" "}
                                <i
                                  className="fas fa-map-marker-alt"
                                  data-astro-cid-j7pv25f6=""
                                />{" "}
                                NOC-approved venues nationwide{" "}
                              </li>{" "}
                            </ul>{" "}
                            <h3
                              className="events-one__title"
                              data-astro-cid-j7pv25f6=""
                            >
                              {" "}
                              <a
                                href="/outreach/mass-evangelism"
                                data-astro-cid-j7pv25f6=""
                              >
                                Mass evangelism crusades
                              </a>{" "}
                            </h3>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section className="testimonial-one" data-astro-cid-j7pv25f6="">
          {" "}
          <div
            className="testimonial-one-bg jarallax"
            data-jarallax
            data-speed="0.2"
            data-imgposition="50% 0%"
            style={{
              backgroundImage:
                "url(/assets/images/coppak/outreach/mass-evangelism/01.jpg)",
            }}
            data-astro-cid-j7pv25f6=""
          />{" "}
          <div className="container" data-astro-cid-j7pv25f6="">
            {" "}
            <div className="row" data-astro-cid-j7pv25f6="">
              {" "}
              <div className="col-xl-6 col-lg-6" data-astro-cid-j7pv25f6="">
                {" "}
                <div
                  className="testimonial-one__left"
                  data-astro-cid-j7pv25f6=""
                >
                  {" "}
                  <div
                    className="section-title text-left"
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <span
                      className="section-title__tagline"
                      data-astro-cid-j7pv25f6=""
                    >
                      Voices from COPPAK
                    </span>{" "}
                    <h2
                      className="section-title__title"
                      data-astro-cid-j7pv25f6=""
                    >
                      What our leaders are saying
                    </h2>{" "}
                  </div>{" "}
                  <p
                    className="testimonial-one__text-1"
                    data-astro-cid-j7pv25f6=""
                  >
                    From a living room in Lahore in the year 2000 to 71
                    assemblies and 28,479 members today — hear directly from the
                    leaders shaping COPPAK's ministry across Pakistan.
                  </p>{" "}
                  <a
                    href="/about/our-team"
                    className="thm-btn testimonial-one__btn"
                    data-astro-cid-j7pv25f6=""
                  >
                    Meet the team{" "}
                    <span
                      className="arr"
                      aria-hidden="true"
                      data-astro-cid-j7pv25f6=""
                    >
                      →
                    </span>
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-xl-6 col-lg-6" data-astro-cid-j7pv25f6="">
                {" "}
                <div
                  className="testimonial-one__right"
                  data-astro-cid-j7pv25f6=""
                >
                  {" "}
                  <div
                    className="testimonial-one__img-1 zoom-fade"
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/about/team/jamil-nasir.jpg"
                      alt="Rev. Dr. Jamil Nasir"
                      data-astro-cid-j7pv25f6=""
                    />{" "}
                  </div>{" "}
                  <div
                    className="testimonial-one__img-1 testimonial-one__img-2 zoom-fade"
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/about/team/rose-mary.jpg"
                      alt="Rose Mary Nasir"
                      data-astro-cid-j7pv25f6=""
                    />{" "}
                  </div>{" "}
                  <div
                    className="testimonial-one__img-1 testimonial-one__img-3 zoom-fade"
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/about/team/shulammite-nasir.jpg"
                      alt="Shulammite Nasir"
                      data-astro-cid-j7pv25f6=""
                    />{" "}
                  </div>{" "}
                  <div
                    className="testimonial-one__img-1 testimonial-one__img-4 zoom-fade"
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <img
                      src="/assets/images/coppak/about/team/zohaib-qasir.jpg"
                      alt="Pastor Zohaib Qasir"
                      data-astro-cid-j7pv25f6=""
                    />{" "}
                  </div>{" "}
                  <div
                    className="testimonial-one__carousel owl-carousel owl-theme thm-owl__carousel"
                    data-owl-options='{"loop": true, "autoplay": true, "margin": 50, "nav": true, "dots": false, "smartSpeed": 500, "autoplayTimeout": 7000, "responsive": {"0": {"items": 1}, "768": {"items": 1}, "992": {"items": 1}, "1200": {"items": 1}}}'
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <div className="item" data-astro-cid-j7pv25f6="">
                      {" "}
                      <div
                        className="testimonial-one__single"
                        data-astro-cid-j7pv25f6=""
                      >
                        {" "}
                        <div
                          className="testimonial-one__shape-1"
                          style={{
                            backgroundImage:
                              "url(/assets/images/shapes/testimonial-one-shape-1.png)",
                          }}
                          data-astro-cid-j7pv25f6=""
                        />{" "}
                        <div
                          className="testimonial-one__client-img"
                          data-astro-cid-j7pv25f6=""
                        >
                          {" "}
                          <img
                            src="/assets/images/coppak/about/team/jamil-nasir.jpg"
                            alt="Rev. Dr. Jamil Nasir"
                            data-astro-cid-j7pv25f6=""
                          />{" "}
                        </div>{" "}
                        <div
                          className="testimonial-one__client-info"
                          data-astro-cid-j7pv25f6=""
                        >
                          {" "}
                          <h3
                            className="testimonial-one__client-name"
                            data-astro-cid-j7pv25f6=""
                          >
                            Rev. Dr. Jamil Nasir
                          </h3>{" "}
                          <p
                            className="testimonial-one__client-sub-title"
                            data-astro-cid-j7pv25f6=""
                          >
                            National Head, COPPAK
                          </p>{" "}
                        </div>{" "}
                        <div
                          className="testimonial-one__quote"
                          data-astro-cid-j7pv25f6=""
                        >
                          {" "}
                          <span
                            className="icon-double-quotes"
                            data-astro-cid-j7pv25f6=""
                          />{" "}
                        </div>{" "}
                        <p
                          className="testimonial-one__text-2"
                          data-astro-cid-j7pv25f6=""
                        >
                          From the streets of Lahore to a public park to our own
                          building — God taught us that we are a church without
                          walls but with mission. What began with a handful of
                          believers in our living room is now a movement of
                          28,479 across Pakistan.
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="item" data-astro-cid-j7pv25f6="">
                      {" "}
                      <div
                        className="testimonial-one__single"
                        data-astro-cid-j7pv25f6=""
                      >
                        {" "}
                        <div
                          className="testimonial-one__shape-1"
                          style={{
                            backgroundImage:
                              "url(/assets/images/shapes/testimonial-one-shape-1.png)",
                          }}
                          data-astro-cid-j7pv25f6=""
                        />{" "}
                        <div
                          className="testimonial-one__client-img"
                          data-astro-cid-j7pv25f6=""
                        >
                          {" "}
                          <img
                            src="/assets/images/coppak/about/team/shulammite-nasir.jpg"
                            alt="Shulammite Nasir"
                            data-astro-cid-j7pv25f6=""
                          />{" "}
                        </div>{" "}
                        <div
                          className="testimonial-one__client-info"
                          data-astro-cid-j7pv25f6=""
                        >
                          {" "}
                          <h3
                            className="testimonial-one__client-name"
                            data-astro-cid-j7pv25f6=""
                          >
                            Shulammite Nasir
                          </h3>{" "}
                          <p
                            className="testimonial-one__client-sub-title"
                            data-astro-cid-j7pv25f6=""
                          >
                            PENSA &amp; Alpha Pakistan
                          </p>{" "}
                        </div>{" "}
                        <div
                          className="testimonial-one__quote"
                          data-astro-cid-j7pv25f6=""
                        >
                          {" "}
                          <span
                            className="icon-double-quotes"
                            data-astro-cid-j7pv25f6=""
                          />{" "}
                        </div>{" "}
                        <p
                          className="testimonial-one__text-2"
                          data-astro-cid-j7pv25f6=""
                        >
                          PENSA Pakistan is a vibrant movement of Spirit-filled
                          youth committed to discipleship, leadership, mission,
                          and nation-building. Through Alpha, over 35,000
                          Pakistanis have explored faith in a relaxed, honest,
                          Spirit-led space since 2023.
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="item" data-astro-cid-j7pv25f6="">
                      {" "}
                      <div
                        className="testimonial-one__single"
                        data-astro-cid-j7pv25f6=""
                      >
                        {" "}
                        <div
                          className="testimonial-one__shape-1"
                          style={{
                            backgroundImage:
                              "url(/assets/images/shapes/testimonial-one-shape-1.png)",
                          }}
                          data-astro-cid-j7pv25f6=""
                        />{" "}
                        <div
                          className="testimonial-one__client-img"
                          data-astro-cid-j7pv25f6=""
                        >
                          {" "}
                          <img
                            src="/assets/images/coppak/about/team/amina-mudasir.jpg"
                            alt="Amina Mudasir"
                            data-astro-cid-j7pv25f6=""
                          />{" "}
                        </div>{" "}
                        <div
                          className="testimonial-one__client-info"
                          data-astro-cid-j7pv25f6=""
                        >
                          {" "}
                          <h3
                            className="testimonial-one__client-name"
                            data-astro-cid-j7pv25f6=""
                          >
                            Amina Mudasir
                          </h3>{" "}
                          <p
                            className="testimonial-one__client-sub-title"
                            data-astro-cid-j7pv25f6=""
                          >
                            Children's Ministry Director
                          </p>{" "}
                        </div>{" "}
                        <div
                          className="testimonial-one__quote"
                          data-astro-cid-j7pv25f6=""
                        >
                          {" "}
                          <span
                            className="icon-double-quotes"
                            data-astro-cid-j7pv25f6=""
                          />{" "}
                        </div>{" "}
                        <p
                          className="testimonial-one__text-2"
                          data-astro-cid-j7pv25f6=""
                        >
                          Every Sunday we feed 1,523 registered children
                          breakfast before service. Our vision is unwavering: to
                          turn pain into purpose, fear into faith, and trauma
                          into triumph — raising a new generation of
                          Spirit-filled leaders for Pakistan.
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="item" data-astro-cid-j7pv25f6="">
                      {" "}
                      <div
                        className="testimonial-one__single"
                        data-astro-cid-j7pv25f6=""
                      >
                        {" "}
                        <div
                          className="testimonial-one__shape-1"
                          style={{
                            backgroundImage:
                              "url(/assets/images/shapes/testimonial-one-shape-1.png)",
                          }}
                          data-astro-cid-j7pv25f6=""
                        />{" "}
                        <div
                          className="testimonial-one__client-img"
                          data-astro-cid-j7pv25f6=""
                        >
                          {" "}
                          <img
                            src="/assets/images/coppak/about/team/zohaib-qasir.jpg"
                            alt="Pastor Zohaib Qasir"
                            data-astro-cid-j7pv25f6=""
                          />{" "}
                        </div>{" "}
                        <div
                          className="testimonial-one__client-info"
                          data-astro-cid-j7pv25f6=""
                        >
                          {" "}
                          <h3
                            className="testimonial-one__client-name"
                            data-astro-cid-j7pv25f6=""
                          >
                            Pastor Zohaib Qasir
                          </h3>{" "}
                          <p
                            className="testimonial-one__client-sub-title"
                            data-astro-cid-j7pv25f6=""
                          >
                            National Deacon
                          </p>{" "}
                        </div>{" "}
                        <div
                          className="testimonial-one__quote"
                          data-astro-cid-j7pv25f6=""
                        >
                          {" "}
                          <span
                            className="icon-double-quotes"
                            data-astro-cid-j7pv25f6=""
                          />{" "}
                        </div>{" "}
                        <p
                          className="testimonial-one__text-2"
                          data-astro-cid-j7pv25f6=""
                        >
                          Our mission with the brick-kiln families is simple yet
                          profound: to replace slavery with freedom, despair
                          with hope, and poverty with dignity — in the name of
                          Jesus Christ.
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="item" data-astro-cid-j7pv25f6="">
                      {" "}
                      <div
                        className="testimonial-one__single"
                        data-astro-cid-j7pv25f6=""
                      >
                        {" "}
                        <div
                          className="testimonial-one__shape-1"
                          style={{
                            backgroundImage:
                              "url(/assets/images/shapes/testimonial-one-shape-1.png)",
                          }}
                          data-astro-cid-j7pv25f6=""
                        />{" "}
                        <div
                          className="testimonial-one__client-img"
                          data-astro-cid-j7pv25f6=""
                        >
                          {" "}
                          <img
                            src="/assets/images/coppak/about/team/rose-mary.jpg"
                            alt="Rose Mary Nasir"
                            data-astro-cid-j7pv25f6=""
                          />{" "}
                        </div>{" "}
                        <div
                          className="testimonial-one__client-info"
                          data-astro-cid-j7pv25f6=""
                        >
                          {" "}
                          <h3
                            className="testimonial-one__client-name"
                            data-astro-cid-j7pv25f6=""
                          >
                            Rose Mary Nasir
                          </h3>{" "}
                          <p
                            className="testimonial-one__client-sub-title"
                            data-astro-cid-j7pv25f6=""
                          >
                            Women's Ministry Director
                          </p>{" "}
                        </div>{" "}
                        <div
                          className="testimonial-one__quote"
                          data-astro-cid-j7pv25f6=""
                        >
                          {" "}
                          <span
                            className="icon-double-quotes"
                            data-astro-cid-j7pv25f6=""
                          />{" "}
                        </div>{" "}
                        <p
                          className="testimonial-one__text-2"
                          data-astro-cid-j7pv25f6=""
                        >
                          Our Christian women in Pakistan endure poverty, social
                          rejection, and emotional pain — yet they remain strong
                          pillars of faith. Through fellowship, Bible study,
                          leadership training, and prayer, we are raising a
                          generation of women who will serve God faithfully and
                          transform their communities.
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section className="global-family" data-astro-cid-j7pv25f6="">
          {" "}
          <div
            className="global-family__glow"
            aria-hidden="true"
            data-astro-cid-j7pv25f6=""
          />{" "}
          <div className="container" data-astro-cid-j7pv25f6="">
            {" "}
            <div className="global-family__head" data-astro-cid-j7pv25f6="">
              {" "}
              <span
                className="global-family__eyebrow"
                data-astro-cid-j7pv25f6=""
              >
                A global family
              </span>{" "}
              <h2 className="global-family__title" data-astro-cid-j7pv25f6="">
                Rooted in Pakistan, part of a{" "}
                <span data-astro-cid-j7pv25f6="">worldwide</span> movement
              </h2>{" "}
              <p className="global-family__lead" data-astro-cid-j7pv25f6="">
                COPPAK is a national body of The Church of Pentecost — one
                family reaching across the nations. Meet the international
                leadership we stand and serve alongside.
              </p>{" "}
            </div>{" "}
            <div className="global-family__grid" data-astro-cid-j7pv25f6="">
              {" "}
              <a
                href="/about/leadership"
                className="gf-card wow fadeInUp"
                data-wow-delay="100ms"
                aria-label="Dr. Apostle Eric Nyamekye — Chairman"
                data-astro-cid-j7pv25f6=""
              >
                {" "}
                <img
                  src="/assets/images/coppak/about/team/eric-nyamekye.jpg"
                  alt="Dr. Apostle Eric Nyamekye"
                  loading="lazy"
                  data-astro-cid-j7pv25f6=""
                />{" "}
                <span className="gf-card__badge" data-astro-cid-j7pv25f6="">
                  {" "}
                  <i
                    className="fas fa-crown"
                    aria-hidden="true"
                    data-astro-cid-j7pv25f6=""
                  />{" "}
                </span>{" "}
                <span
                  className="gf-card__scrim"
                  aria-hidden="true"
                  data-astro-cid-j7pv25f6=""
                />{" "}
                <span className="gf-card__body" data-astro-cid-j7pv25f6="">
                  {" "}
                  <span className="gf-card__role" data-astro-cid-j7pv25f6="">
                    Chairman
                  </span>{" "}
                  <span className="gf-card__name" data-astro-cid-j7pv25f6="">
                    Dr. Apostle Eric Nyamekye
                  </span>{" "}
                </span>{" "}
              </a>
              <a
                href="/about/leadership"
                className="gf-card wow fadeInUp"
                data-wow-delay="200ms"
                aria-label="Apostle Emmanuel Agyemang Bekoe — Missions Director"
                data-astro-cid-j7pv25f6=""
              >
                {" "}
                <img
                  src="/assets/images/coppak/about/team/emmanuel-agyemang-bekoe.jpg"
                  alt="Apostle Emmanuel Agyemang Bekoe"
                  loading="lazy"
                  data-astro-cid-j7pv25f6=""
                />{" "}
                <span className="gf-card__badge" data-astro-cid-j7pv25f6="">
                  {" "}
                  <i
                    className="fas fa-globe-asia"
                    aria-hidden="true"
                    data-astro-cid-j7pv25f6=""
                  />{" "}
                </span>{" "}
                <span
                  className="gf-card__scrim"
                  aria-hidden="true"
                  data-astro-cid-j7pv25f6=""
                />{" "}
                <span className="gf-card__body" data-astro-cid-j7pv25f6="">
                  {" "}
                  <span className="gf-card__role" data-astro-cid-j7pv25f6="">
                    Missions Director
                  </span>{" "}
                  <span className="gf-card__name" data-astro-cid-j7pv25f6="">
                    Apostle Emmanuel Agyemang Bekoe
                  </span>{" "}
                </span>{" "}
              </a>
              <a
                href="/about/leadership"
                className="gf-card wow fadeInUp"
                data-wow-delay="300ms"
                aria-label="Apostle Samuel Gyau Obuobi — General Secretary"
                data-astro-cid-j7pv25f6=""
              >
                {" "}
                <img
                  src="/assets/images/coppak/about/team/samuel-gyau-obuobi.jpg"
                  alt="Apostle Samuel Gyau Obuobi"
                  loading="lazy"
                  data-astro-cid-j7pv25f6=""
                />{" "}
                <span className="gf-card__badge" data-astro-cid-j7pv25f6="">
                  {" "}
                  <i
                    className="fas fa-feather-alt"
                    aria-hidden="true"
                    data-astro-cid-j7pv25f6=""
                  />{" "}
                </span>{" "}
                <span
                  className="gf-card__scrim"
                  aria-hidden="true"
                  data-astro-cid-j7pv25f6=""
                />{" "}
                <span className="gf-card__body" data-astro-cid-j7pv25f6="">
                  {" "}
                  <span className="gf-card__role" data-astro-cid-j7pv25f6="">
                    General Secretary
                  </span>{" "}
                  <span className="gf-card__name" data-astro-cid-j7pv25f6="">
                    Apostle Samuel Gyau Obuobi
                  </span>{" "}
                </span>{" "}
              </a>
              <a
                href="/about/leadership"
                className="gf-card wow fadeInUp"
                data-wow-delay="400ms"
                aria-label="Dr. Apostle Jamil Nasir — National Head, Pakistan"
                data-astro-cid-j7pv25f6=""
              >
                {" "}
                <img
                  src="/assets/images/coppak/about/team/jamil-nasir.jpg"
                  alt="Dr. Apostle Jamil Nasir"
                  loading="lazy"
                  data-astro-cid-j7pv25f6=""
                />{" "}
                <span className="gf-card__badge" data-astro-cid-j7pv25f6="">
                  {" "}
                  <i
                    className="fas fa-flag"
                    aria-hidden="true"
                    data-astro-cid-j7pv25f6=""
                  />{" "}
                </span>{" "}
                <span
                  className="gf-card__scrim"
                  aria-hidden="true"
                  data-astro-cid-j7pv25f6=""
                />{" "}
                <span className="gf-card__body" data-astro-cid-j7pv25f6="">
                  {" "}
                  <span className="gf-card__role" data-astro-cid-j7pv25f6="">
                    National Head, Pakistan
                  </span>{" "}
                  <span className="gf-card__name" data-astro-cid-j7pv25f6="">
                    Dr. Apostle Jamil Nasir
                  </span>{" "}
                </span>{" "}
              </a>{" "}
            </div>{" "}
            <div className="global-family__cta" data-astro-cid-j7pv25f6="">
              {" "}
              <a
                href="/about/leadership"
                className="thm-btn"
                data-astro-cid-j7pv25f6=""
              >
                Meet the leadership{" "}
                <span
                  className="arr"
                  aria-hidden="true"
                  data-astro-cid-j7pv25f6=""
                >
                  →
                </span>{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section className="faq-one" data-astro-cid-j7pv25f6="">
          {" "}
          <div
            className="faq-one-shape-1"
            style={{
              backgroundImage: "url(/assets/images/shapes/faq-one-shape-1.png)",
            }}
            data-astro-cid-j7pv25f6=""
          />{" "}
          <div className="faq-one-bg" data-astro-cid-j7pv25f6="" />{" "}
          <div className="container" data-astro-cid-j7pv25f6="">
            {" "}
            <div className="row" data-astro-cid-j7pv25f6="">
              {" "}
              <div className="col-xl-6 col-lg-6" data-astro-cid-j7pv25f6="">
                {" "}
                <div className="faq-one__left" data-astro-cid-j7pv25f6="">
                  {" "}
                  <div
                    className="section-title text-left"
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <span
                      className="section-title__tagline"
                      data-astro-cid-j7pv25f6=""
                    >
                      Frequently asked
                    </span>{" "}
                    <h2
                      className="section-title__title"
                      data-astro-cid-j7pv25f6=""
                    >
                      Common questions about COPPAK
                    </h2>{" "}
                  </div>{" "}
                  <p className="faq-one__text-1" data-astro-cid-j7pv25f6="">
                    Have a question about our church, ministries, or how to get
                    involved? Here are answers to the most common questions.
                    Don't see yours? Reach out anytime.
                  </p>{" "}
                  <a
                    href="/contact"
                    className="thm-btn thm-btn--blue faq-one__btn"
                    data-astro-cid-j7pv25f6=""
                  >
                    Ask a question{" "}
                    <span
                      className="arr"
                      aria-hidden="true"
                      data-astro-cid-j7pv25f6=""
                    >
                      →
                    </span>
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-xl-6 col-lg-6" data-astro-cid-j7pv25f6="">
                {" "}
                <div className="faq-one__right" data-astro-cid-j7pv25f6="">
                  {" "}
                  <div
                    className="accrodion-grp"
                    data-grp-name="faq-one-accrodion"
                    data-astro-cid-j7pv25f6=""
                  >
                    {" "}
                    <div
                      className="accrodion active"
                      data-astro-cid-j7pv25f6=""
                    >
                      {" "}
                      <div
                        className="accrodion-title"
                        data-astro-cid-j7pv25f6=""
                      >
                        {" "}
                        <h4 data-astro-cid-j7pv25f6="">
                          Where do you meet on Sundays?
                        </h4>{" "}
                      </div>{" "}
                      <div
                        className="accrodion-content"
                        data-astro-cid-j7pv25f6=""
                      >
                        {" "}
                        <div className="inner" data-astro-cid-j7pv25f6="">
                          {" "}
                          <p data-astro-cid-j7pv25f6="">
                            We have 19 church buildings across Pakistan, plus
                            many homes, rooftops, and outdoor gatherings. Our
                            main assembly is at 31-A Officer Colony, Bahar
                            Colony, Kot Lakhpat, Lahore.{" "}
                            <a href="/contact" data-astro-cid-j7pv25f6="">
                              Contact us
                            </a>{" "}
                            for your nearest assembly.
                          </p>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="accrodion" data-astro-cid-j7pv25f6="">
                      {" "}
                      <div
                        className="accrodion-title"
                        data-astro-cid-j7pv25f6=""
                      >
                        {" "}
                        <h4 data-astro-cid-j7pv25f6="">
                          How do I get involved in a ministry?
                        </h4>{" "}
                      </div>{" "}
                      <div
                        className="accrodion-content"
                        data-astro-cid-j7pv25f6=""
                      >
                        {" "}
                        <div className="inner" data-astro-cid-j7pv25f6="">
                          {" "}
                          <p data-astro-cid-j7pv25f6="">
                            Visit our{" "}
                            <a href="/ministries" data-astro-cid-j7pv25f6="">
                              Ministries
                            </a>{" "}
                            page — Youth, PENSA, Sports, Women, Children,
                            Compassion — and reach out to the ministry you're
                            interested in. We'd love to welcome you in.
                          </p>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="accrodion" data-astro-cid-j7pv25f6="">
                      {" "}
                      <div
                        className="accrodion-title"
                        data-astro-cid-j7pv25f6=""
                      >
                        {" "}
                        <h4 data-astro-cid-j7pv25f6="">
                          How can I give or partner financially?
                        </h4>{" "}
                      </div>{" "}
                      <div
                        className="accrodion-content"
                        data-astro-cid-j7pv25f6=""
                      >
                        {" "}
                        <div className="inner" data-astro-cid-j7pv25f6="">
                          {" "}
                          <p data-astro-cid-j7pv25f6="">
                            See our{" "}
                            <a href="/donate" data-astro-cid-j7pv25f6="">
                              Donate
                            </a>{" "}
                            page for full bank transfer details (MCB Islamic
                            Bank) and PayPal. You can give to general operations
                            or designate a specific project — Bible translation,
                            brick-kiln deliverance, medical camps, and more.
                          </p>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div
                      className="accrodion last-chiled"
                      data-astro-cid-j7pv25f6=""
                    >
                      {" "}
                      <div
                        className="accrodion-title"
                        data-astro-cid-j7pv25f6=""
                      >
                        {" "}
                        <h4 data-astro-cid-j7pv25f6="">
                          Can I join a home cell or Alpha group?
                        </h4>{" "}
                      </div>{" "}
                      <div
                        className="accrodion-content"
                        data-astro-cid-j7pv25f6=""
                      >
                        {" "}
                        <div className="inner" data-astro-cid-j7pv25f6="">
                          {" "}
                          <p data-astro-cid-j7pv25f6="">
                            Yes — both are open. Our{" "}
                            <a
                              href="/outreach/home-cell"
                              data-astro-cid-j7pv25f6=""
                            >
                              home cells
                            </a>
                            meet weekly across Pakistan, and our
                            <a
                              href="/outreach/alpha-groups"
                              data-astro-cid-j7pv25f6=""
                            >
                              Alpha groups
                            </a>{" "}
                            have served 35,000+ people since 2023.{" "}
                            <a href="/contact" data-astro-cid-j7pv25f6="">
                              Get in touch
                            </a>
                            to be connected.
                          </p>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
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
