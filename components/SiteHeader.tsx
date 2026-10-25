export default function SiteHeader() {
  return (
    <header className="coppak-header">
      {" "}
      <div className="coppak-header__inner">
        {" "}
        <nav className="coppak-nav coppak-nav--left" aria-label="Primary left">
          {" "}
          <ul>
            {" "}
            <li className="has-submenu">
              {" "}
              <a href="/about">
                {" "}
                About{" "}
                <i
                  className="fa fa-chevron-down submenu-caret"
                  aria-hidden="true"
                />{" "}
              </a>{" "}
              <ul className="submenu">
                {" "}
                <li>
                  <a href="/about">Who we are</a>
                </li>
                <li>
                  <a href="/about/leadership">Leadership</a>
                </li>
                <li>
                  <a href="/about/our-team">Our team</a>
                </li>
                <li>
                  <a href="/bible-college">Bible college</a>
                </li>
                <li>
                  <a href="/media">Media</a>
                </li>{" "}
              </ul>{" "}
            </li>
            <li className="has-submenu">
              {" "}
              <a href="/ministries">
                {" "}
                Ministries{" "}
                <i
                  className="fa fa-chevron-down submenu-caret"
                  aria-hidden="true"
                />{" "}
              </a>{" "}
              <ul className="submenu">
                {" "}
                <li>
                  <a href="/ministries">All ministries</a>
                </li>
                <li>
                  <a href="/ministries/youth-pensa">
                    Youth &amp; PENSA Pakistan
                  </a>
                </li>
                <li>
                  <a href="/ministries/sports">Sports</a>
                </li>
                <li>
                  <a href="/ministries/women">Women</a>
                </li>
                <li>
                  <a href="/ministries/children">Children</a>
                </li>
                <li>
                  <a href="/ministries/compassion">Compassion</a>
                </li>
                <li>
                  <a href="/ministries/support-needy-families">
                    Support needy families
                  </a>
                </li>{" "}
              </ul>{" "}
            </li>
            <li className="has-submenu">
              {" "}
              <a href="/outreach">
                {" "}
                Outreach{" "}
                <i
                  className="fa fa-chevron-down submenu-caret"
                  aria-hidden="true"
                />{" "}
              </a>{" "}
              <ul className="submenu">
                {" "}
                <li>
                  <a href="/outreach">All outreach</a>
                </li>
                <li>
                  <a href="/outreach/mass-evangelism">Mass evangelism</a>
                </li>
                <li>
                  <a href="/outreach/public-rallies">Public rallies</a>
                </li>
                <li>
                  <a href="/outreach/peace-train">Peace train</a>
                </li>
                <li>
                  <a href="/outreach/home-cell">Home cell</a>
                </li>
                <li>
                  <a href="/outreach/alpha-groups">Alpha groups</a>
                </li>{" "}
              </ul>{" "}
            </li>
            <li className="has-submenu">
              {" "}
              <a href="/church-services">
                {" "}
                Services{" "}
                <i
                  className="fa fa-chevron-down submenu-caret"
                  aria-hidden="true"
                />{" "}
              </a>{" "}
              <ul className="submenu">
                {" "}
                <li>
                  <a href="/church-services">All services</a>
                </li>
                <li>
                  <a href="/church-services/sunday-service">Sunday service</a>
                </li>
                <li>
                  <a href="/church-services/holy-communion">Holy communion</a>
                </li>
                <li>
                  <a href="/church-services/baptism">Baptism service</a>
                </li>{" "}
              </ul>{" "}
            </li>{" "}
            <li><a href="/sermons">Sermons</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/books">Books</a></li>
          </ul>{" "}
        </nav>{" "}
        <a href="/" className="coppak-header__logo" aria-label="COPPAK home">
          {" "}
          <span className="coppak-header__logo-badge">
            {" "}
            <img src="/icon-512.png" alt="Church of Pentecost — COPPAK" />{" "}
          </span>{" "}
        </a>{" "}
        <nav
          className="coppak-nav coppak-nav--right"
          aria-label="Primary right"
        >
          {" "}
          <ul>
            {" "}
            <li className="has-submenu">
              {" "}
              <a href="/projects">
                {" "}
                Projects{" "}
                <i
                  className="fa fa-chevron-down submenu-caret"
                  aria-hidden="true"
                />{" "}
              </a>{" "}
              <ul className="submenu">
                {" "}
                <li>
                  <a href="/projects">All projects</a>
                </li>
                <li>
                  <a href="/projects/bible-translation">Bible translation</a>
                </li>
                <li>
                  <a href="/projects/persecution">Persecution</a>
                </li>
                <li>
                  <a href="/projects/collective-marriages">
                    Collective marriages
                  </a>
                </li>
                <li>
                  <a href="/projects/brick-kiln-deliverance">
                    Brick kiln deliverance
                  </a>
                </li>
                <li>
                  <a href="/projects/natural-disaster-recovery">
                    Disaster recovery
                  </a>
                </li>
                <li>
                  <a href="/projects/free-medical-camps">Free medical camps</a>
                </li>
                <li>
                  <a href="/projects/adult-literacy">Adult literacy</a>
                </li>{" "}
              </ul>{" "}
            </li>
            <li className="has-submenu">
              {" "}
              <a href="/conferences">
                {" "}
                Conferences{" "}
                <i
                  className="fa fa-chevron-down submenu-caret"
                  aria-hidden="true"
                />{" "}
              </a>{" "}
              <ul className="submenu">
                {" "}
                <li>
                  <a href="/conferences">All conferences</a>
                </li>
                <li>
                  <a href="/conferences/leadership-conferences">
                    Leadership Conferences
                  </a>
                </li>
                <li>
                  <a href="/conferences/christian-apologetics">
                    Christian Apologetics
                  </a>
                </li>
                <li>
                  <a href="/conferences/quest-leadership">Quest Leadership</a>
                </li>{" "}
              </ul>{" "}
            </li>
            <li>
              {" "}
              <a href="/events"> Events</a>
            </li>
            <li>
              {" "}
              <a href="/contact"> Contact</a>
            </li>{" "}
            <li className="coppak-nav__cta">
              {" "}
              <a href="/donate" className="coppak-donate">
                {" "}
                <span className="fa fa-heart" aria-hidden="true" /> Donate
              </a>{" "}
            </li>{" "}
          </ul>{" "}
        </nav>{" "}
        <button
          type="button"
          className="coppak-burger mobile-nav__toggler"
          aria-label="Open menu"
          aria-controls="mobile-nav"
          aria-expanded="false"
        >
          {" "}
          <i className="fa fa-bars" aria-hidden="true" />{" "}
        </button>{" "}
      </div>{" "}
    </header>
  );
}
