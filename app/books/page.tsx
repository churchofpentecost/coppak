import type { Metadata } from "next";
import LegacyScripts from "../../components/LegacyScripts";

export const metadata: Metadata = {
  title: "Books by Dr. Jamil Nasir | COPPAK.ORG",
  description:
    "Explore books by Jamil Nasir: Did Jesus Turn Water Into Alcoholic Wine? and Does the Bible Prohibit Alcohol?",
  alternates: { canonical: "/books" },
  openGraph: {
    title: "Books by Dr. Jamil Nasir | COPPAK.ORG",
    description:
      "Explore Scripture, the miracle at Cana, Christian liberty and abstinence with Dr. Jamil Nasir.",
    url: "/books",
    images: [
      {
        url: "/assets/images/books/did-jesus-turn-water-into-alcoholic-wine.jpg",
        width: 800,
        height: 1199,
      },
    ],
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

const amazonUrl = "https://www.amazon.com/dp/B0HK3NZWLH";
// Search by title and author until the direct product listing is verified.
const alcoholBookAmazonUrl = `https://www.amazon.com/s?k=${encodeURIComponent('"Does the Bible Prohibit Alcohol" "Jamil Nasir"')}&i=stripbooks`;

export default function BooksPage() {
  return (
    <>
      <link rel="stylesheet" href="/styles/pages/books.css" />
      <div className="books-page">
        <section
          className="books-shell books-intro"
          aria-labelledby="books-title"
        >
          <nav className="books-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Books</span>
          </nav>
          <div className="books-heading">
            <div>
              <p className="books-eyebrow">READ. REFLECT. DISCOVER.</p>
              <h1 id="books-title">
                Books that invite
                <br />
                <em>deeper understanding.</em>
              </h1>
            </div>
            <p>
              Explore faith and Scripture
              <br />
              with Rev. Dr. Jamil Nasir.
            </p>
          </div>
          <nav className="books-jump-links" aria-label="Browse books">
            <a href="#cana-book">
              The miracle at Cana <span aria-hidden="true">↓</span>
            </a>
            <a href="#does-the-bible-prohibit-alcohol">
              The Bible &amp; alcohol <span aria-hidden="true">↓</span>
            </a>
          </nav>
        </section>
        <section
          id="cana-book"
          className="books-shell books-feature"
          aria-labelledby="featured-book-title"
        >
          <div className="books-cover-stage">
            <img
              src="/assets/images/books/did-jesus-turn-water-into-alcoholic-wine.jpg"
              width={800}
              height={1199}
              fetchPriority="high"
              alt="Cover of Did Jesus Turn Water Into Alcoholic Wine? by Jamil Nasir"
            />
          </div>
          <div className="books-feature__body">
            <p className="books-eyebrow">
              FEATURED BOOK · CHRISTIAN APOLOGETICS
            </p>
            <h2 id="featured-book-title">
              Did Jesus Turn Water Into Alcoholic Wine?
            </h2>
            <p className="books-subtitle">
              A Christian Apologetic Response to Muslim Questions About the
              Miracle at Cana
            </p>
            <p className="books-author">
              By <strong>Jamil Nasir</strong>
            </p>
            <p className="books-description">
              What does the wedding at Cana reveal about Jesus? Dr. Jamil Nasir
              examines John 2:1–11 through Scripture, ancient languages, Jewish
              customs and historical evidence, inviting readers to consider the
              meaning of this remarkable miracle.
            </p>
            <a
              className="books-button"
              href={amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Amazon <span aria-hidden="true">↗</span>
              <span className="books-sr-only"> (opens in a new tab)</span>
            </a>
            <p className="books-purchase-note">
              See available editions, pricing and delivery options on Amazon.
            </p>
          </div>
        </section>
        <section
          id="does-the-bible-prohibit-alcohol"
          className="books-shell books-feature books-feature--additional"
          aria-labelledby="alcohol-book-title"
        >
          <div className="books-cover-stage books-cover-stage--alcohol">
            <div className="books-spread-front">
              <img
                src="/assets/images/books/does-the-bible-prohibit-alcohol.webp"
                width={1800}
                height={1296}
                loading="lazy"
                alt="Front cover of Does the Bible Prohibit Alcohol? by Jamil Nasir"
              />
            </div>
          </div>
          <div className="books-feature__body">
            <p className="books-eyebrow">
              ALSO BY JAMIL NASIR · CHRISTIAN APOLOGETICS
            </p>
            <h2 id="alcohol-book-title">Does the Bible Prohibit Alcohol?</h2>
            <p className="books-subtitle">
              An Apologetic Examination of Wine, Drunkenness, Christian Liberty,
              and Abstinence
            </p>
            <p className="books-author">
              By <strong>Jamil Nasir</strong>
            </p>
            <p className="books-description">
              How should Christians understand the Bible’s teaching on alcohol?
              Jamil Nasir examines Scripture, ancient history and Hebrew and
              Greek vocabulary, addressing Muslim objections and differing
              Christian views. He presents a case for abstinence with attention
              to conscience, leadership and care for others.
            </p>
            <a
              className="books-button"
              href={alcoholBookAmazonUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Find on Amazon <span aria-hidden="true">↗</span>
              <span className="books-sr-only"> (opens in a new tab)</span>
            </a>
            <p className="books-purchase-note">
              Search Amazon for this title and author.
            </p>
          </div>
        </section>
        <section
          className="books-shell books-explore"
          aria-labelledby="explore-book-title"
        >
          <div>
            <p className="books-eyebrow">EXPLORE THE COLLECTION</p>
            <h2 id="explore-book-title">
              An invitation to
              <br />
              examine the evidence.
            </h2>
            <p>
              For Christians, Muslim readers, pastors, students and anyone
              seeking a thoughtful conversation about Scripture.
            </p>
          </div>
          <div className="books-topics">
            <article>
              <span className="books-topic-number">01</span>
              <div>
                <h3>The biblical account</h3>
                <p>
                  Explore the wedding at Cana and the significance of Jesus’
                  first miraculous sign.
                </p>
              </div>
            </article>
            <article>
              <span className="books-topic-number">02</span>
              <div>
                <h3>Language & historical context</h3>
                <p>
                  Consider ancient terminology and Jewish customs alongside the
                  Gospel narrative.
                </p>
              </div>
            </article>
            <article>
              <span className="books-topic-number">03</span>
              <div>
                <h3>Faith & respectful dialogue</h3>
                <p>
                  Engage with questions about the miracle and its meaning for
                  Christian faith.
                </p>
              </div>
            </article>
          </div>
        </section>
        <section className="books-shell books-author-note">
          <div>
            <p className="books-eyebrow">ABOUT THE AUTHOR</p>
            <h2>Rev. Dr. Jamil Nasir</h2>
            <p>
              National Head of The Church of Pentecost Pakistan, pastor and
              author, Dr. Jamil Nasir serves through Bible teaching, Christian
              apologetics and ministry leadership.
            </p>
          </div>
          <a href="/about/leadership" className="books-text-link">
            Meet our leadership <span aria-hidden="true">→</span>
          </a>
        </section>
      </div>
      <LegacyScripts sources={scripts} />
    </>
  );
}
