import type { Metadata } from "next";
import LegacyScripts from "../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Donate | COPPAK.ORG",
  description:
    "Partner with The Church of Pentecost Pakistan — bank transfer details, PayPal, and how your giving fuels Bible translation, medical camps, brick-kiln deliverance, and more.",
  alternates: { canonical: "/donate" },
  openGraph: {
    title: "Donate | COPPAK.ORG",
    description:
      "Partner with The Church of Pentecost Pakistan — bank transfer details, PayPal, and how your giving fuels Bible translation, medical camps, brick-kiln deliverance, and more.",
    url: "/donate",
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
  "/scripts/migrated/donate-25.js",
];
export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="/styles/pages/donate.css" />
      <div>
        <section
          className="page-hero"
          style={{
            backgroundImage:
              "linear-gradient(178deg, rgba(13,22,52,0.86) 0%, rgba(13,22,52,0.9) 55%, rgba(10,20,48,0.94) 100%), url(/assets/images/coppak/projects/medical-camps/01.jpg)",
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
                  <span>Donate</span>{" "}
                </li>
              </ul>{" "}
              <h1 className="page-hero__title">Donate</h1>{" "}
              <p className="page-hero__subtitle">
                Partner with the work God is doing across Pakistan.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section style={{ padding: "100px 0" }} data-astro-cid-vfkcmhic="">
          {" "}
          <div className="container" data-astro-cid-vfkcmhic="">
            {" "}
            <div className="row" data-astro-cid-vfkcmhic="">
              {" "}
              <div className="col-xl-7 col-lg-7" data-astro-cid-vfkcmhic="">
                {" "}
                <div
                  className="section-title text-left"
                  data-astro-cid-vfkcmhic=""
                >
                  {" "}
                  <span
                    className="section-title__tagline"
                    data-astro-cid-vfkcmhic=""
                  >
                    Partner with us
                  </span>{" "}
                  <h2
                    className="section-title__title"
                    data-astro-cid-vfkcmhic=""
                  >
                    Your giving changes lives
                  </h2>{" "}
                </div>{" "}
                <p style={{ marginTop: 24 }} data-astro-cid-vfkcmhic="">
                  The Church of Pentecost Pakistan is committed to ministry,
                  outreach, and serving communities across Pakistan. Every
                  contribution — large or small — directly supports the work of
                  the Gospel and our humanitarian projects.
                </p>{" "}
                <div className="donate-causes" data-astro-cid-vfkcmhic="">
                  {" "}
                  <div
                    className="donate-causes__item"
                    data-astro-cid-vfkcmhic=""
                  >
                    {" "}
                    <div
                      className="donate-causes__icon"
                      data-astro-cid-vfkcmhic=""
                    >
                      {" "}
                      <i
                        className="fas fa-bible"
                        aria-hidden="true"
                        data-astro-cid-vfkcmhic=""
                      />{" "}
                    </div>{" "}
                    <div data-astro-cid-vfkcmhic="">
                      {" "}
                      <h4
                        className="donate-causes__title"
                        data-astro-cid-vfkcmhic=""
                      >
                        Bible translation
                      </h4>{" "}
                      <p
                        className="donate-causes__text"
                        data-astro-cid-vfkcmhic=""
                      >
                        Marwari, Hindko, Saraiki, Potohari &amp; Kashmiri (with
                        Wycliffe Associates).
                      </p>{" "}
                    </div>{" "}
                  </div>
                  <div
                    className="donate-causes__item"
                    data-astro-cid-vfkcmhic=""
                  >
                    {" "}
                    <div
                      className="donate-causes__icon"
                      data-astro-cid-vfkcmhic=""
                    >
                      {" "}
                      <i
                        className="fas fa-unlock-alt"
                        aria-hidden="true"
                        data-astro-cid-vfkcmhic=""
                      />{" "}
                    </div>{" "}
                    <div data-astro-cid-vfkcmhic="">
                      {" "}
                      <h4
                        className="donate-causes__title"
                        data-astro-cid-vfkcmhic=""
                      >
                        Brick-kiln deliverance
                      </h4>{" "}
                      <p
                        className="donate-causes__text"
                        data-astro-cid-vfkcmhic=""
                      >
                        Paying off debts and restoring freedom to bonded
                        Christian families.
                      </p>{" "}
                    </div>{" "}
                  </div>
                  <div
                    className="donate-causes__item"
                    data-astro-cid-vfkcmhic=""
                  >
                    {" "}
                    <div
                      className="donate-causes__icon"
                      data-astro-cid-vfkcmhic=""
                    >
                      {" "}
                      <i
                        className="fas fa-stethoscope"
                        aria-hidden="true"
                        data-astro-cid-vfkcmhic=""
                      />{" "}
                    </div>{" "}
                    <div data-astro-cid-vfkcmhic="">
                      {" "}
                      <h4
                        className="donate-causes__title"
                        data-astro-cid-vfkcmhic=""
                      >
                        Free medical camps
                      </h4>{" "}
                      <p
                        className="donate-causes__text"
                        data-astro-cid-vfkcmhic=""
                      >
                        Bringing doctors, medicines, and prayer to underserved
                        communities.
                      </p>{" "}
                    </div>{" "}
                  </div>
                  <div
                    className="donate-causes__item"
                    data-astro-cid-vfkcmhic=""
                  >
                    {" "}
                    <div
                      className="donate-causes__icon"
                      data-astro-cid-vfkcmhic=""
                    >
                      {" "}
                      <i
                        className="fas fa-book-open"
                        aria-hidden="true"
                        data-astro-cid-vfkcmhic=""
                      />{" "}
                    </div>{" "}
                    <div data-astro-cid-vfkcmhic="">
                      {" "}
                      <h4
                        className="donate-causes__title"
                        data-astro-cid-vfkcmhic=""
                      >
                        Adult literacy classes
                      </h4>{" "}
                      <p
                        className="donate-causes__text"
                        data-astro-cid-vfkcmhic=""
                      >
                        Empowering women, widows, and brick-kiln workers with
                        reading &amp; writing.
                      </p>{" "}
                    </div>{" "}
                  </div>
                  <div
                    className="donate-causes__item"
                    data-astro-cid-vfkcmhic=""
                  >
                    {" "}
                    <div
                      className="donate-causes__icon"
                      data-astro-cid-vfkcmhic=""
                    >
                      {" "}
                      <i
                        className="fas fa-ring"
                        aria-hidden="true"
                        data-astro-cid-vfkcmhic=""
                      />{" "}
                    </div>{" "}
                    <div data-astro-cid-vfkcmhic="">
                      {" "}
                      <h4
                        className="donate-causes__title"
                        data-astro-cid-vfkcmhic=""
                      >
                        Collective marriages
                      </h4>{" "}
                      <p
                        className="donate-causes__text"
                        data-astro-cid-vfkcmhic=""
                      >
                        Restoring dignity to vulnerable young women with
                        dignified weddings.
                      </p>{" "}
                    </div>{" "}
                  </div>
                  <div
                    className="donate-causes__item"
                    data-astro-cid-vfkcmhic=""
                  >
                    {" "}
                    <div
                      className="donate-causes__icon"
                      data-astro-cid-vfkcmhic=""
                    >
                      {" "}
                      <i
                        className="fas fa-house-damage"
                        aria-hidden="true"
                        data-astro-cid-vfkcmhic=""
                      />{" "}
                    </div>{" "}
                    <div data-astro-cid-vfkcmhic="">
                      {" "}
                      <h4
                        className="donate-causes__title"
                        data-astro-cid-vfkcmhic=""
                      >
                        Disaster recovery
                      </h4>{" "}
                      <p
                        className="donate-causes__text"
                        data-astro-cid-vfkcmhic=""
                      >
                        Persecution relief and rebuilding for families affected
                        by crisis.
                      </p>{" "}
                    </div>{" "}
                  </div>
                  <div
                    className="donate-causes__item"
                    data-astro-cid-vfkcmhic=""
                  >
                    {" "}
                    <div
                      className="donate-causes__icon"
                      data-astro-cid-vfkcmhic=""
                    >
                      {" "}
                      <i
                        className="fas fa-utensils"
                        aria-hidden="true"
                        data-astro-cid-vfkcmhic=""
                      />{" "}
                    </div>{" "}
                    <div data-astro-cid-vfkcmhic="">
                      {" "}
                      <h4
                        className="donate-causes__title"
                        data-astro-cid-vfkcmhic=""
                      >
                        The Lord's Table
                      </h4>{" "}
                      <p
                        className="donate-causes__text"
                        data-astro-cid-vfkcmhic=""
                      >
                        Daily meals for 100+ people each day (relaunching in our
                        new building).
                      </p>{" "}
                    </div>{" "}
                  </div>
                  <div
                    className="donate-causes__item"
                    data-astro-cid-vfkcmhic=""
                  >
                    {" "}
                    <div
                      className="donate-causes__icon"
                      data-astro-cid-vfkcmhic=""
                    >
                      {" "}
                      <i
                        className="fas fa-heart"
                        aria-hidden="true"
                        data-astro-cid-vfkcmhic=""
                      />{" "}
                    </div>{" "}
                    <div data-astro-cid-vfkcmhic="">
                      {" "}
                      <h4
                        className="donate-causes__title"
                        data-astro-cid-vfkcmhic=""
                      >
                        Children, Women, Youth &amp; Compassion
                      </h4>{" "}
                      <p
                        className="donate-causes__text"
                        data-astro-cid-vfkcmhic=""
                      >
                        Discipleship and care across our eight national
                        ministries.
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <h3 style={{ marginTop: 48 }} data-astro-cid-vfkcmhic="">
                  Bank transfer (Pakistan)
                </h3>{" "}
                <div
                  style={{
                    marginTop: 16,
                    padding: 28,
                    background: "#f7f4ef",
                    borderRadius: 12,
                  }}
                  data-astro-cid-vfkcmhic=""
                >
                  {" "}
                  <p style={{ margin: "0 0 6px" }} data-astro-cid-vfkcmhic="">
                    {" "}
                    <strong data-astro-cid-vfkcmhic="">
                      Account Title:
                    </strong>{" "}
                    The Church of Pentecost Lahore Pakistan
                  </p>{" "}
                  <p style={{ margin: "0 0 6px" }} data-astro-cid-vfkcmhic="">
                    {" "}
                    <strong data-astro-cid-vfkcmhic="">
                      Account Number:
                    </strong>{" "}
                    2091007218150001
                  </p>{" "}
                  <p style={{ margin: "0 0 6px" }} data-astro-cid-vfkcmhic="">
                    {" "}
                    <strong data-astro-cid-vfkcmhic="">IBAN:</strong>{" "}
                    PK36MCIB2091007218150001
                  </p>{" "}
                  <p style={{ margin: "0 0 6px" }} data-astro-cid-vfkcmhic="">
                    {" "}
                    <strong data-astro-cid-vfkcmhic="">SWIFT Code:</strong>{" "}
                    MCIBPKKI
                  </p>{" "}
                  <p style={{ margin: "0 0 6px" }} data-astro-cid-vfkcmhic="">
                    <strong data-astro-cid-vfkcmhic="">Bank Name:</strong> MCB
                    Islamic Bank Ltd
                  </p>{" "}
                  <p style={{ margin: "0 0 6px" }} data-astro-cid-vfkcmhic="">
                    <strong data-astro-cid-vfkcmhic="">Branch Code:</strong> 209
                  </p>{" "}
                  <p style={{ margin: 0 }} data-astro-cid-vfkcmhic="">
                    {" "}
                    <strong data-astro-cid-vfkcmhic="">
                      Branch Address:
                    </strong>{" "}
                    Property No. S-86-R-800/C/Hall, Saroba Ferozpur Road,
                    Lahore, Pakistan
                  </p>{" "}
                </div>{" "}
                <h3 style={{ marginTop: 40 }} data-astro-cid-vfkcmhic="">
                  PayPal
                </h3>{" "}
                <div
                  className="paypal-donation"
                  style={{
                    marginTop: 16,
                    padding: 28,
                    background: "#f7f4ef",
                    borderRadius: 12,
                  }}
                  data-astro-cid-vfkcmhic=""
                >
                  <a
                    className="paypal-donation__qr"
                    href="https://www.paypal.com/qrcodes/managed/bf7b2486-1c8c-41d8-a016-a323be464ed2?utm_source=payandgetpaid"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open PayPal donation page (opens in a new tab)"
                  >
                    <img
                      src="/assets/images/paypal-donation-qr.png"
                      alt="PayPal donation QR code for Church of Pentecost Pakistan"
                      width={240}
                      height={240}
                      loading="lazy"
                    />
                  </a>
                  <div className="paypal-donation__details">
                    <h4>Scan to give with PayPal</h4>
                    <p>
                      Scan this QR code with your phone camera, or use the
                      button below to open PayPal.
                    </p>{" "}
                    <p style={{ margin: "0 0 6px" }} data-astro-cid-vfkcmhic="">
                      {" "}
                      <strong data-astro-cid-vfkcmhic="">
                        Recipient:
                      </strong>{" "}
                      Church of Pentecost Pakistan
                    </p>{" "}
                    <p style={{ margin: 0 }} data-astro-cid-vfkcmhic="">
                      {" "}
                      <strong data-astro-cid-vfkcmhic="">Email:</strong>{" "}
                      <a
                        href="mailto:rev.jamil.nasir@gmail.com"
                        data-astro-cid-vfkcmhic=""
                      >
                        rev.jamil.nasir@gmail.com
                      </a>{" "}
                    </p>{" "}
                    <a
                      className="thm-btn paypal-donation__button"
                      href="https://www.paypal.com/qrcodes/managed/bf7b2486-1c8c-41d8-a016-a323be464ed2?utm_source=payandgetpaid"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Donate with PayPal
                      <span className="visually-hidden">
                        {" "}
                        (opens in a new tab)
                      </span>
                    </a>
                  </div>
                </div>{" "}
              </div>{" "}
              <div className="col-xl-5 col-lg-5" data-astro-cid-vfkcmhic="">
                {" "}
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, var(--oxpins-base) 0%, var(--oxpins-secondary) 100%)",
                    color: "#fff",
                    padding: 36,
                    borderRadius: 14,
                    marginTop: 60,
                  }}
                  data-astro-cid-vfkcmhic=""
                >
                  {" "}
                  <h3
                    style={{ color: "#fff", margin: "0 0 16px" }}
                    data-astro-cid-vfkcmhic=""
                  >
                    Talk to us first
                  </h3>{" "}
                  <p
                    style={{ color: "rgba(255,255,255,0.92)" }}
                    data-astro-cid-vfkcmhic=""
                  >
                    Have a question about giving, sponsoring a specific project,
                    or partnering with a particular ministry? We'd love to talk
                    before you give — and to thank you personally for standing
                    with us.
                  </p>{" "}
                  <a
                    href="/contact"
                    className="thm-btn"
                    style={{
                      marginTop: 16,
                      background: "#fff !important",
                      color: "var(--oxpins-base) !important",
                    }}
                    data-astro-cid-vfkcmhic=""
                  >
                    Contact us
                  </a>{" "}
                </div>{" "}
                <img
                  src="/assets/images/coppak/projects/brick-kiln/01.jpg"
                  alt="Brick-kiln deliverance"
                  style={{ width: "100%", marginTop: 32, borderRadius: 12 }}
                  data-astro-cid-vfkcmhic=""
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
