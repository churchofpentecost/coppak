import type { Metadata } from "next";
import LegacyScripts from "../../components/LegacyScripts";
export const metadata: Metadata = {
  title: "Contact | COPPAK.ORG",
  description:
    "Get in touch with The Church of Pentecost Pakistan — Lahore address, WhatsApp, phone numbers, and email.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | COPPAK.ORG",
    description:
      "Get in touch with The Church of Pentecost Pakistan — Lahore address, WhatsApp, phone numbers, and email.",
    url: "/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};
const scripts = [
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
  "/scripts/migrated/contact-1.js",
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
  "/scripts/migrated/contact-27.js",
];
export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="/styles/pages/contact.css" />
      <div>
        <section
          className="page-hero"
          style={{
            backgroundImage:
              "linear-gradient(178deg, rgba(13,22,52,0.86) 0%, rgba(13,22,52,0.9) 55%, rgba(10,20,48,0.94) 100%), url(/assets/images/coppak/services/sunday/02.jpg)",
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
                  <span>Contact</span>{" "}
                </li>
              </ul>{" "}
              <h1 className="page-hero__title">Contact us</h1>{" "}
              <p className="page-hero__subtitle">
                Reach out — we'd love to hear from you, welcome you, and pray
                with you.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section className="contact-three" data-astro-cid-uw5kdbxl="">
          {" "}
          <div className="container" data-astro-cid-uw5kdbxl="">
            {" "}
            <div
              className="section-title text-center"
              data-astro-cid-uw5kdbxl=""
            >
              {" "}
              <span
                className="section-title__tagline"
                data-astro-cid-uw5kdbxl=""
              >
                Contact with us
              </span>{" "}
              <h2 className="section-title__title" data-astro-cid-uw5kdbxl="">
                Feel free to write us <br data-astro-cid-uw5kdbxl="" /> anytime
              </h2>{" "}
            </div>{" "}
            <div className="contact-page__form-box" data-astro-cid-uw5kdbxl="">
              {" "}
              <form
                action="https://formsubmit.co/info@coppak.org"
                method="POST"
                className="contact-page__form"
                data-astro-cid-uw5kdbxl=""
              >
                {" "}
                <div className="row" data-astro-cid-uw5kdbxl="">
                  {" "}
                  <div className="col-xl-6" data-astro-cid-uw5kdbxl="">
                    {" "}
                    <div
                      className="contact-form__input-box"
                      data-astro-cid-uw5kdbxl=""
                    >
                      {" "}
                      <input
                        type="text"
                        placeholder="Your name"
                        name="name"
                        required
                        data-astro-cid-uw5kdbxl=""
                        aria-label="Your name"
                      />{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="col-xl-6" data-astro-cid-uw5kdbxl="">
                    {" "}
                    <div
                      className="contact-form__input-box"
                      data-astro-cid-uw5kdbxl=""
                    >
                      {" "}
                      <input
                        type="email"
                        placeholder="Email address"
                        name="email"
                        required
                        data-astro-cid-uw5kdbxl=""
                        aria-label="Email address"
                      />{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="col-xl-6" data-astro-cid-uw5kdbxl="">
                    {" "}
                    <div
                      className="contact-form__input-box"
                      data-astro-cid-uw5kdbxl=""
                    >
                      {" "}
                      <input
                        type="text"
                        placeholder="Phone or WhatsApp"
                        name="phone"
                        data-astro-cid-uw5kdbxl=""
                        aria-label="Phone or WhatsApp"
                      />{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="col-xl-6" data-astro-cid-uw5kdbxl="">
                    {" "}
                    <div
                      className="contact-form__input-box"
                      data-astro-cid-uw5kdbxl=""
                    >
                      {" "}
                      <input
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        data-astro-cid-uw5kdbxl=""
                        aria-label="Subject"
                      />{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="row" data-astro-cid-uw5kdbxl="">
                  {" "}
                  <div className="col-xl-12" data-astro-cid-uw5kdbxl="">
                    {" "}
                    <div
                      className="contact-form__input-box text-message-box"
                      data-astro-cid-uw5kdbxl=""
                    >
                      {" "}
                      <textarea
                        name="message"
                        placeholder="Write a message"
                        required
                        data-astro-cid-uw5kdbxl=""
                        aria-label="Write a message"
                        defaultValue={""}
                      />{" "}
                    </div>{" "}
                    <input type="hidden" name="_subject" value="New message from COPPAK.org contact form" />
                    <input type="hidden" name="_next" value="https://coppak.org/contact/thank-you" />
                    <input type="hidden" name="_url" value="https://coppak.org/contact" />
                    <input type="hidden" name="_template" value="table" />
                    <input
                      type="text"
                      name="_honey"
                      aria-hidden="true"
                      style={{ display: "none" }}
                      tabIndex={-1}
                      autoComplete="off"
                    />{" "}
                    <div
                      className="contact-form__btn-box"
                      data-astro-cid-uw5kdbxl=""
                    >
                      {" "}
                      <button
                        type="submit"
                        className="thm-btn contact-form__btn"
                        data-astro-cid-uw5kdbxl=""
                      >
                        Send message
                      </button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </form>{" "}
              <p>
                Your message will be forwarded to info@coppak.org using our
                form-delivery provider. Please do not include passwords or sensitive financial information.
              </p>
            </div>{" "}
          </div>{" "}
        </section>
        <section className="contact-cards" data-astro-cid-uw5kdbxl="">
          {" "}
          <div className="container" data-astro-cid-uw5kdbxl="">
            {" "}
            <div className="contact-cards__grid" data-astro-cid-uw5kdbxl="">
              {" "}
              <div className="contact-cards__item" data-astro-cid-uw5kdbxl="">
                {" "}
                <div className="contact-cards__icon" data-astro-cid-uw5kdbxl="">
                  {" "}
                  <i
                    className="fab fa-whatsapp"
                    aria-hidden="true"
                    data-astro-cid-uw5kdbxl=""
                  />{" "}
                </div>{" "}
                <span
                  className="contact-cards__label"
                  data-astro-cid-uw5kdbxl=""
                >
                  WhatsApp
                </span>{" "}
                <a
                  className="contact-cards__primary"
                  href="https://wa.me/923004179633"
                  data-astro-cid-uw5kdbxl=""
                >
                  +92 300 417 9633
                </a>{" "}
              </div>{" "}
              <div className="contact-cards__item" data-astro-cid-uw5kdbxl="">
                {" "}
                <div className="contact-cards__icon" data-astro-cid-uw5kdbxl="">
                  {" "}
                  <i
                    className="fas fa-phone-alt"
                    aria-hidden="true"
                    data-astro-cid-uw5kdbxl=""
                  />{" "}
                </div>{" "}
                <span
                  className="contact-cards__label"
                  data-astro-cid-uw5kdbxl=""
                >
                  Phone (Canada)
                </span>{" "}
                <a
                  className="contact-cards__primary"
                  href="tel:+14379859633"
                  data-astro-cid-uw5kdbxl=""
                >
                  +1 (437) 985-9633
                </a>{" "}
                <a
                  className="contact-cards__secondary"
                  href="tel:+12896598991"
                  data-astro-cid-uw5kdbxl=""
                >
                  +1 (289) 659-8991
                </a>{" "}
              </div>{" "}
              <div className="contact-cards__item" data-astro-cid-uw5kdbxl="">
                {" "}
                <div className="contact-cards__icon" data-astro-cid-uw5kdbxl="">
                  {" "}
                  <i
                    className="fas fa-map-marker-alt"
                    aria-hidden="true"
                    data-astro-cid-uw5kdbxl=""
                  />{" "}
                </div>{" "}
                <span
                  className="contact-cards__label"
                  data-astro-cid-uw5kdbxl=""
                >
                  The Church of Pentecost Lahore
                </span>{" "}
                <p
                  className="contact-cards__address"
                  data-astro-cid-uw5kdbxl=""
                >
                  31-A Officer Colony,
                  <br data-astro-cid-uw5kdbxl="" />
                  Near Gill Chock Bahar Colony,
                  <br data-astro-cid-uw5kdbxl="" />
                  Kot Lakhpat, Lahore, Pakistan
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section className="contact-map" data-astro-cid-uw5kdbxl="">
          {" "}
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
            integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
            crossOrigin="anonymous"
          />{" "}
          <div
            id="coppak-map"
            style={{ width: "100%", height: 480 }}
            data-astro-cid-uw5kdbxl=""
          />{" "}
        </section>
      </div>
      <LegacyScripts sources={scripts} />
    </>
  );
}
