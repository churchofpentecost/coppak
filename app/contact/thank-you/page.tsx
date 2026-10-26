import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Message Sent | COPPAK.ORG",
  description: "Thank you for contacting The Church of Pentecost Pakistan.",
  robots: { index: false, follow: false },
};

export default function ContactThankYou() {
  return (
    <section className="contact-three" style={{ minHeight: "60vh", padding: "110px 20px", textAlign: "center" }}>
      <div className="container">
        <div className="section-title text-center">
          <span className="section-title__tagline">Contact with us</span>
          <h1 className="section-title__title">Thank you for your message</h1>
        </div>
        <p style={{ maxWidth: 650, margin: "0 auto 26px" }}>
          Your contact form has been submitted. We appreciate your message and will respond as soon as possible.
        </p>
        <a className="thm-btn" href="/contact">Back to contact page</a>
      </div>
    </section>
  );
}
