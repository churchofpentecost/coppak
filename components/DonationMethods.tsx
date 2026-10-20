"use client";

import { useRef, useState, type KeyboardEvent } from "react";

const paypalUrl =
  "https://www.paypal.com/qrcodes/managed/bf7b2486-1c8c-41d8-a016-a323be464ed2?utm_source=payandgetpaid";
const bankDetails = [
  { label: "Account title", value: "The Church of Pentecost Lahore Pakistan" },
  { label: "Account number", value: "2091007218150001", copy: true },
  { label: "IBAN", value: "PK36MCIB2091007218150001", copy: true },
  { label: "SWIFT code", value: "MCIBPKKI", copy: true },
  { label: "Bank", value: "MCB Islamic Bank Ltd" },
  { label: "Branch code", value: "209" },
  {
    label: "Branch address",
    value:
      "Property No. S-86-R-800/C/Hall, Saroba Ferozpur Road, Lahore, Pakistan",
  },
];
const jazzCash = { name: "Jamil Nasir", number: "03004179633" };
const methods = ["PayPal", "Bank transfer", "JazzCash"];

export default function DonationMethods() {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState("");
  const [notice, setNotice] = useState("");
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);

  function changeTab(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowLeft")
      next =
        (index + (event.key === "ArrowRight" ? 1 : -1) + methods.length) %
        methods.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = methods.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  async function copyDetail(label: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setNotice(`${label} copied to clipboard.`);
    } catch {
      setCopied("");
      setNotice(
        `Please select and copy the ${label.toLowerCase()} shown above.`,
      );
    }
  }

  return (
    <section className="giving-card" id="give" aria-labelledby="give-title">
      <div className="giving-card__heading">
        <span className="giving-card__heart" aria-hidden="true">
          ♡
        </span>
        <p className="giving-eyebrow">PARTNER WITH COPPAK</p>
        <h2 id="give-title">Give with love.</h2>
        <p>Choose how you would like to give.</p>
      </div>
      <div className="giving-tabs" role="tablist" aria-label="Giving method">
        {methods.map((method, index) => (
          <button
            type="button"
            key={method}
            ref={(element) => {
              tabs.current[index] = element;
            }}
            role="tab"
            id={`giving-tab-${index}`}
            aria-controls={`giving-panel-${index}`}
            aria-selected={active === index}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(event) => changeTab(event, index)}
          >
            {method}
          </button>
        ))}
      </div>
      <div
        id="giving-panel-0"
        role="tabpanel"
        aria-labelledby="giving-tab-0"
        hidden={active !== 0}
        tabIndex={0}
      >
        <div className="giving-paypal">
          <p className="giving-paypal__intro">
            A simple way to stand with our mission.
          </p>
          <a
            className="giving-paypal__button"
            href={paypalUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Give with PayPal <span aria-hidden="true">↗</span>
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
          <div className="giving-divider">
            <span>or scan with your phone</span>
          </div>
          <a
            className="giving-qr"
            href={paypalUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open PayPal giving page (opens in a new tab)"
          >
            <img
              src="/assets/images/paypal-donation-qr.png"
              alt="PayPal QR code for giving to Church of Pentecost Pakistan"
              width={208}
              height={208}
            />
          </a>
          <p className="giving-recipient">
            Church of Pentecost Pakistan
            <br />
            <a href="mailto:rev.jamil.nasir@gmail.com">
              rev.jamil.nasir@gmail.com
            </a>
          </p>
          <p className="giving-payment-note">
            <i className="fas fa-lock" aria-hidden="true" /> Complete your gift
            on PayPal.
          </p>
        </div>
      </div>
      <div
        id="giving-panel-1"
        role="tabpanel"
        aria-labelledby="giving-tab-1"
        hidden={active !== 1}
        tabIndex={0}
      >
        <div className="giving-bank">
          <p className="giving-bank__intro">
            Transfer directly to our church account in Pakistan.
          </p>
          <dl>
            {bankDetails.map((detail) => (
              <div className="giving-bank__row" key={detail.label}>
                <dt>{detail.label}</dt>
                <dd>
                  <span>{detail.value}</span>
                  {detail.copy ? (
                    <button
                      type="button"
                      onClick={() =>
                        void copyDetail(detail.label, detail.value)
                      }
                      aria-label={`Copy ${detail.label.toLowerCase()}`}
                      title={`Copy ${detail.label.toLowerCase()}`}
                    >
                      {copied === detail.label ? "Copied" : "Copy"}
                    </button>
                  ) : null}
                </dd>
              </div>
            ))}
          </dl>
          <p className="giving-copy-status" role="status" aria-live="polite">
            {notice}
          </p>
          <p className="giving-payment-note">
            Please review the details in your banking app before sending.
          </p>
        </div>
      </div>
      <div
        id="giving-panel-2"
        role="tabpanel"
        aria-labelledby="giving-tab-2"
        hidden={active !== 2}
        tabIndex={0}
      >
        <div className="giving-jazzcash">
          <div className="giving-jazzcash__brand">
            <span>
              Jazz<span>Cash</span>
            </span>
            <small>MOBILE WALLET · PAKISTAN</small>
          </div>
          <p className="giving-jazzcash__intro">
            Support our mission through JazzCash.
          </p>
          <dl className="giving-jazzcash__account">
            <div>
              <dt>Account holder</dt>
              <dd>{jazzCash.name}</dd>
            </div>
            <div>
              <dt>JazzCash account number</dt>
              <dd className="giving-jazzcash__number">0300 4179633</dd>
              <p>International format: +92 300 4179633</p>
            </div>
          </dl>
          <button
            type="button"
            className="giving-jazzcash__copy"
            onClick={() => void copyDetail("JazzCash number", jazzCash.number)}
          >
            {copied === "JazzCash number"
              ? "Number copied ✓"
              : "Copy JazzCash number"}
          </button>
          <p className="giving-copy-status" role="status" aria-live="polite">
            {notice}
          </p>
          <ol className="giving-jazzcash__steps">
            <li>
              Open your JazzCash app and choose to send money to a JazzCash
              account.
            </li>
            <li>Enter the account number above and your donation amount.</li>
            <li>
              Confirm the recipient is <strong>Jamil Nasir</strong> before
              sending.
            </li>
          </ol>
          <p className="giving-payment-note">
            Complete your transfer in the JazzCash app.
          </p>
        </div>
      </div>
      <div className="giving-card__help">
        Have a question?{" "}
        <a href="/contact">
          We’re here to help <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
