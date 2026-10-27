import { siteNavigation } from "../data/navigation";

export default function SiteHeader() {
  return (
    <header className="coppak-header coppak-header--refreshed">
      <div className="coppak-header__inner">
        <a href="/" className="coppak-header__logo" aria-label="The Church of Pentecost Pakistan — home">
          <span className="coppak-header__logo-badge">
            <img
              src="/assets/images/resources/coppak-pakistan-logo.jpg"
              alt="The Church of Pentecost Pakistan"
              width="66"
              height="66"
            />
          </span>
          <span className="coppak-header__wordmark">
            <strong>THE CHURCH OF PENTECOST</strong>
            <span>PAKISTAN</span>
          </span>
        </a>
        <nav className="coppak-nav coppak-nav--refreshed" aria-label="Main navigation">
          <ul>
            {siteNavigation.map((section) => (
              <li key={section.label} className={section.items ? "has-submenu" : ""}>
                <a href={section.href}>
                  {section.label}
                  {section.items && <i className="fa fa-chevron-down submenu-caret" aria-hidden="true" />}
                </a>
                {section.items && (
                  <ul className="submenu">
                    {section.items.map((item) => (
                      <li key={item.href} className={item.heading ? "coppak-menu-heading" : undefined}>
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <a href="/donate" className="coppak-donate coppak-header__donate">
          <span className="fa fa-heart" aria-hidden="true" /> Donate
        </a>
        <button
          type="button"
          className="coppak-burger mobile-nav__toggler"
          aria-label="Open menu"
          aria-controls="mobile-nav"
          aria-expanded="false"
        >
          <i className="fa fa-bars" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
