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
          <nav
            id="mobile-nav"
            className="mobile-nav-menu"
            aria-label="Mobile primary"
          >
            {" "}
            <details className="mobile-nav-menu__group">
              {" "}
              <summary className="mobile-nav-menu__item">
                {" "}
                <span>About</span>{" "}
                <i
                  className="fa fa-chevron-down mobile-nav-menu__caret"
                  aria-hidden="true"
                />{" "}
              </summary>{" "}
              <ul className="mobile-nav-menu__sub">
                {" "}
                <li>
                  {" "}
                  <a href="/about" className="mobile-nav-menu__sub-item">
                    {" "}
                    Who we are{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/about/leadership"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    Leadership{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/about/our-team"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    Our team{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/bible-college"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    Bible college{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/media" className="mobile-nav-menu__sub-item">
                    {" "}
                    Media{" "}
                  </a>{" "}
                </li>{" "}
              </ul>{" "}
            </details>
            <details className="mobile-nav-menu__group">
              {" "}
              <summary className="mobile-nav-menu__item">
                {" "}
                <span>Ministries</span>{" "}
                <i
                  className="fa fa-chevron-down mobile-nav-menu__caret"
                  aria-hidden="true"
                />{" "}
              </summary>{" "}
              <ul className="mobile-nav-menu__sub">
                {" "}
                <li>
                  {" "}
                  <a href="/ministries" className="mobile-nav-menu__sub-item">
                    {" "}
                    All ministries{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/ministries/youth-pensa"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    Youth &amp; PENSA Pakistan{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/ministries/sports"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    Sports{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/ministries/women"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    Women{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/ministries/children"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    Children{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/ministries/compassion"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    Compassion{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/ministries/support-needy-families"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    Support needy families{" "}
                  </a>{" "}
                </li>{" "}
              </ul>{" "}
            </details>
            <details className="mobile-nav-menu__group">
              {" "}
              <summary className="mobile-nav-menu__item">
                {" "}
                <span>Outreach</span>{" "}
                <i
                  className="fa fa-chevron-down mobile-nav-menu__caret"
                  aria-hidden="true"
                />{" "}
              </summary>{" "}
              <ul className="mobile-nav-menu__sub">
                {" "}
                <li>
                  {" "}
                  <a href="/outreach" className="mobile-nav-menu__sub-item">
                    {" "}
                    All outreach{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/outreach/mass-evangelism"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    Mass evangelism{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/outreach/public-rallies"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    Public rallies{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/outreach/peace-train"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    Peace train{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/outreach/home-cell"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    Home cell{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/outreach/alpha-groups"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    Alpha groups{" "}
                  </a>{" "}
                </li>{" "}
              </ul>{" "}
            </details>
            <details className="mobile-nav-menu__group">
              {" "}
              <summary className="mobile-nav-menu__item">
                {" "}
                <span>Services</span>{" "}
                <i
                  className="fa fa-chevron-down mobile-nav-menu__caret"
                  aria-hidden="true"
                />{" "}
              </summary>{" "}
              <ul className="mobile-nav-menu__sub">
                {" "}
                <li>
                  {" "}
                  <a
                    href="/church-services"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    All services{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/church-services/sunday-service"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    Sunday service{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/church-services/holy-communion"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    Holy communion{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/church-services/baptism"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    Baptism service{" "}
                  </a>{" "}
                </li>{" "}
              </ul>{" "}
            </details>
            <details className="mobile-nav-menu__group">
              {" "}
              <summary className="mobile-nav-menu__item">
                {" "}
                <span>Projects</span>{" "}
                <i
                  className="fa fa-chevron-down mobile-nav-menu__caret"
                  aria-hidden="true"
                />{" "}
              </summary>{" "}
              <ul className="mobile-nav-menu__sub">
                {" "}
                <li>
                  {" "}
                  <a href="/projects" className="mobile-nav-menu__sub-item">
                    {" "}
                    All projects{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/projects/bible-translation"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    Bible translation{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/projects/persecution"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    Persecution{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/projects/collective-marriages"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    Collective marriages{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/projects/brick-kiln-deliverance"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    Brick kiln deliverance{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/projects/natural-disaster-recovery"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    Disaster recovery{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/projects/free-medical-camps"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    Free medical camps{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/projects/adult-literacy"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    Adult literacy{" "}
                  </a>{" "}
                </li>{" "}
              </ul>{" "}
            </details>
            <details className="mobile-nav-menu__group">
              {" "}
              <summary className="mobile-nav-menu__item">
                {" "}
                <span>Conferences</span>{" "}
                <i
                  className="fa fa-chevron-down mobile-nav-menu__caret"
                  aria-hidden="true"
                />{" "}
              </summary>{" "}
              <ul className="mobile-nav-menu__sub">
                {" "}
                <li>
                  {" "}
                  <a href="/conferences" className="mobile-nav-menu__sub-item">
                    {" "}
                    All conferences{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/conferences/leadership-conferences"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    Leadership Conferences{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/conferences/christian-apologetics"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    Christian Apologetics{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/conferences/quest-leadership"
                    className="mobile-nav-menu__sub-item"
                  >
                    {" "}
                    Quest Leadership{" "}
                  </a>{" "}
                </li>{" "}
              </ul>{" "}
            </details>
            <a href="/events" className="mobile-nav-menu__item">
              {" "}
              <span>Events</span>{" "}
            </a>
            <a href="/contact" className="mobile-nav-menu__item">
              {" "}
              <span>Contact</span>{" "}
            </a>{" "}
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
