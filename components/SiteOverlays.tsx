import { siteNavigation } from "../data/navigation";

export default function SiteOverlays() {
  return (
    <div>
      <div className="mobile-nav__wrapper">
        {" "}
        <div className="mobile-nav__overlay mobile-nav__toggler" />{" "}
        <div className="mobile-nav__content">
          {" "}
          <span className="mobile-nav__close mobile-nav__toggler">
            <i className="fa fa-times" />
          </span>{" "}
          <nav id="mobile-nav" className="mobile-nav-menu" aria-label="Mobile primary">
            {siteNavigation.map((section) =>
              section.items ? (
                <details className="mobile-nav-menu__group" key={section.label}>
                  <summary className="mobile-nav-menu__item">
                    <span>{section.label}</span>
                    <i className="fa fa-chevron-down mobile-nav-menu__caret" aria-hidden="true" />
                  </summary>
                  <ul className="mobile-nav-menu__sub">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <a href={item.href} className="mobile-nav-menu__sub-item">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <a key={section.label} href={section.href} className="mobile-nav-menu__item">
                  <span>{section.label}</span>
                </a>
              ),
            )}
          </nav>{" "}
          <a href="/donate" className="mobile-nav-menu__donate">
            {" "}
            <i className="fas fa-heart" aria-hidden="true" /> Donate now
          </a>{" "}
          <ul className="mobile-nav__contact list-unstyled">
            {" "}
            <li>
              {" "}
              <i className="fa fa-envelope" />{" "}
              <a href="mailto:rev.jamil.nasir@gmail.com">
                rev.jamil.nasir@gmail.com
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <i className="fab fa-whatsapp" />{" "}
              <a href="https://wa.me/923004179633">+92 300 417 9633</a>{" "}
            </li>{" "}
          </ul>{" "}
          <div className="mobile-nav__top">
            {" "}
            <div className="mobile-nav__social">
              {" "}
              <a
                href="https://www.facebook.com/revdrjamilnasir"
                target="_blank"
                rel="noopener"
                className="fab fa-facebook-square"
                aria-label="Facebook"
              />{" "}
              <a
                href="https://www.youtube.com/@ThePentecostpakistan"
                target="_blank"
                rel="noopener"
                className="fab fa-youtube"
                aria-label="YouTube"
              />{" "}
              <a
                href="https://www.instagram.com/rev.dr.jamil_nasir/"
                target="_blank"
                rel="noopener"
                className="fab fa-instagram"
                aria-label="Instagram"
              />{" "}
              <a
                href="https://www.tiktok.com/@drjamilnasirofficial"
                target="_blank"
                rel="noopener"
                className="fab fa-tiktok"
                aria-label="TikTok"
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <a
        href="#"
        data-target="html"
        className="scroll-to-target scroll-to-top"
        aria-label="Scroll to top"
      >
        <i className="icon-up-arrow" />
      </a>{" "}
    </div>
  );
}
