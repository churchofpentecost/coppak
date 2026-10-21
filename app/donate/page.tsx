import type { Metadata } from "next";
import LegacyScripts from "../../components/LegacyScripts";
import DonationMethods from "../../components/DonationMethods";
export const metadata: Metadata = {
  title: "Donate | COPPAK.ORG",
  description:
    "Partner with The Church of Pentecost Pakistan — bank transfer, PayPal, JazzCash, Interac e-Transfer, and how your giving fuels Bible translation, medical camps, brick-kiln deliverance, and more.",
  alternates: { canonical: "/donate" },
  openGraph: {
    title: "Donate | COPPAK.ORG",
    description:
      "Partner with The Church of Pentecost Pakistan — bank transfer, PayPal, JazzCash, Interac e-Transfer, and how your giving fuels Bible translation, medical camps, brick-kiln deliverance, and more.",
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
const projects = [
  {
    title: "Freedom for families",
    category: "RESTORING DIGNITY",
    description:
      "Help families leave bonded labour behind and begin a new chapter of freedom.",
    image: "/assets/images/coppak/projects/brick-kiln/01.jpg",
    alt: "COPPAK gathering with families at a brick kiln",
    href: "/projects/brick-kiln-deliverance",
  },
  {
    title: "Care within reach",
    category: "HEALTH & COMPASSION",
    description:
      "Support free medical camps bringing doctors, medicines, and care to underserved communities.",
    image: "/assets/images/coppak/projects/medical-camps/01.jpg",
    alt: "A doctor caring for a patient at a COPPAK medical camp",
    href: "/projects/free-medical-camps",
  },
  {
    title: "A future through learning",
    category: "EDUCATION & OPPORTUNITY",
    description:
      "Help women, widows, and brick-kiln workers build confidence through reading and writing.",
    image: "/assets/images/coppak/projects/adult-literacy/01.jpg",
    alt: "COPPAK adult literacy programme",
    href: "/projects/adult-literacy",
  },
];
const moreWays = [
  ["Bible translation", "/projects/bible-translation"],
  ["Collective marriages", "/projects/collective-marriages"],
  ["Disaster & persecution relief", "/projects/natural-disaster-recovery"],
  ["The Lord’s Table", "/ministries/compassion"],
  ["Children, women & youth", "/ministries"],
];

export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="/styles/pages/donate.css" />
      <div className="giving-page">
        <section className="giving-hero" aria-labelledby="giving-title">
          <div className="giving-shell giving-hero__grid">
            <div className="giving-hero__story">
              <nav className="giving-breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span aria-hidden="true">/</span>
                <span aria-current="page">Give</span>
              </nav>
              <p className="giving-eyebrow">THE CHURCH OF PENTECOST PAKISTAN</p>
              <h1 id="giving-title">
                Your generosity.
                <br />
                Someone’s <em>hope.</em>
              </h1>
              <p className="giving-hero__intro">
                Together, we can share the Gospel, restore dignity, and bring
                practical care to families across Pakistan.
              </p>
              <a className="giving-story-link" href="#your-impact">
                See the work you support <span aria-hidden="true">↓</span>
              </a>
              <figure className="giving-hero__photo">
                <img
                  src="/assets/images/coppak/projects/brick-kiln/01.jpg"
                  alt="COPPAK serving families in a brick-kiln community in Pakistan"
                  width={1600}
                  height={1200}
                  fetchPriority="high"
                />
                <figcaption>
                  <span className="giving-photo-dot" aria-hidden="true" />
                  Faith in action. Love in everyday life.
                </figcaption>
              </figure>
            </div>
            <DonationMethods />
          </div>
        </section>

        <div className="giving-values">
          <div className="giving-shell giving-values__inner">
            <span>
              <i className="fas fa-cross" aria-hidden="true" /> Rooted in faith
            </span>
            <span>
              <i className="fas fa-hands-helping" aria-hidden="true" /> Serving
              communities
            </span>
            <span>
              <i className="fas fa-heart" aria-hidden="true" /> Giving with
              purpose
            </span>
          </div>
        </div>

        <section
          className="giving-impact giving-shell"
          id="your-impact"
          aria-labelledby="impact-title"
        >
          <div className="giving-section-heading">
            <div>
              <p className="giving-eyebrow">LOVE THAT REACHES PEOPLE</p>
              <h2 id="impact-title">
                A gift can become
                <br />a new beginning.
              </h2>
            </div>
            <p>
              Every contribution, large or small, helps sustain the ministry and
              humanitarian work of COPPAK. These are some of the lives and
              communities you can stand alongside.
            </p>
          </div>
          <div className="giving-projects">
            {projects.map((project) => (
              <a
                className="giving-project"
                href={project.href}
                key={project.href}
              >
                <div className="giving-project__image">
                  <img
                    src={project.image}
                    alt={project.alt}
                    width={600}
                    height={450}
                    loading="lazy"
                  />
                </div>
                <div className="giving-project__body">
                  <p className="giving-eyebrow">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="giving-project__link">
                    Explore this work <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div className="giving-more">
            <p>Your partnership also supports</p>
            <div>
              {moreWays.map(([label, href]) => (
                <a key={href} href={href}>
                  {label}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="giving-questions" aria-labelledby="questions-title">
          <div className="giving-shell giving-questions__grid">
            <div>
              <p className="giving-eyebrow">WE’RE HERE TO HELP</p>
              <h2 id="questions-title">
                Giving is personal.
                <br />
                Let’s talk.
              </h2>
              <p>
                Whether you are making a gift or exploring a ministry
                partnership, we would love to hear from you.
              </p>
              <a className="giving-text-link" href="/contact">
                Contact our team <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="giving-faqs">
              <details>
                <summary>
                  How can I give?<span aria-hidden="true">+</span>
                </summary>
                <p>
                  Use the PayPal button or scan the QR code above to continue on
                  PayPal. For a bank transfer, select the Bank transfer tab and
                  use the account details shown there. For JazzCash, select the
                  JazzCash tab, copy the mobile account number, and complete
                  your transfer in the JazzCash app. Canadian donors can select
                  the Interac e-Transfer tab and send their gift to
                  churchofpentecostpakistan@gmail.com through their banking app.
                </p>
              </details>
              <details>
                <summary>
                  Can I support a specific project?
                  <span aria-hidden="true">+</span>
                </summary>
                <p>
                  Yes. Please{" "}
                  <a href="/contact">contact our team before giving</a> to
                  discuss the project or ministry you would like to support and
                  how to identify your gift.
                </p>
              </details>
              <details>
                <summary>
                  Where do I complete my PayPal gift?
                  <span aria-hidden="true">+</span>
                </summary>
                <p>
                  The button and QR code open PayPal, where you can review and
                  complete your gift. You do not enter payment details on this
                  website.
                </p>
              </details>
              <details>
                <summary>
                  Who can help with a giving question?
                  <span aria-hidden="true">+</span>
                </summary>
                <p>
                  Reach us through our <a href="/contact">contact page</a> or
                  email{" "}
                  <a href="mailto:info@coppak.org">
                    info@coppak.org
                  </a>
                  . We can help with questions about giving, sponsorship, or
                  partnership.
                </p>
              </details>
            </div>
          </div>
        </section>
        <section className="giving-thanks giving-shell">
          <p>Thank you for standing with Pakistan.</p>
          <span>Your kindness is part of the story.</span>
          <a href="#give">
            Make a gift <span aria-hidden="true">↑</span>
          </a>
        </section>
      </div>
      <LegacyScripts sources={scripts} />
    </>
  );
}
