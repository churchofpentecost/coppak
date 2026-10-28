/**
 * The six-category COP Pakistan navigation.
 * Existing page URLs are preserved while the headings are organized for
 * simpler desktop and mobile discovery.
 */
export type NavItem = { label: string; href: string; heading?: boolean };
export type NavSection = { label: string; href: string; items?: NavItem[] };

export const siteNavigation: NavSection[] = [
  { label: "About", href: "/about", items: [
    { label: "Who we are", href: "/about" },
    { label: "Leadership", href: "/about/leadership" },
    { label: "Bible college", href: "/bible-college" },
  ] },
  { label: "Ministries", href: "/ministries", items: [
    { label: "All ministries", href: "/ministries" },
    { label: "Youth & PENSA Pakistan", href: "/ministries/youth-pensa" },
    { label: "Children", href: "/ministries/children" },
    { label: "Women", href: "/ministries/women" },
    { label: "Sports", href: "/ministries/sports" },
    { label: "Compassion", href: "/ministries/compassion" },
    { label: "Support needy families", href: "/ministries/support-needy-families" },
    { label: "Worship & church services", href: "/church-services", heading: true },
    { label: "Sunday service", href: "/church-services/sunday-service" },
    { label: "Holy communion", href: "/church-services/holy-communion" },
    { label: "Baptism service", href: "/church-services/baptism" },
  ] },
  { label: "Mission", href: "/outreach", items: [
    { label: "Outreach & evangelism", href: "/outreach", heading: true },
    { label: "Mass evangelism", href: "/outreach/mass-evangelism" },
    { label: "Public rallies", href: "/outreach/public-rallies" },
    { label: "Peace train", href: "/outreach/peace-train" },
    { label: "Home cell", href: "/outreach/home-cell" },
    { label: "Alpha groups", href: "/outreach/alpha-groups" },
    { label: "Projects & community care", href: "/projects", heading: true },
    { label: "Bible translation", href: "/projects/bible-translation" },
    { label: "Persecution response", href: "/projects/persecution" },
    { label: "Collective marriages", href: "/projects/collective-marriages" },
    { label: "Brick kiln deliverance", href: "/projects/brick-kiln-deliverance" },
    { label: "Disaster recovery", href: "/projects/natural-disaster-recovery" },
    { label: "Free medical camps", href: "/projects/free-medical-camps" },
    { label: "Adult literacy", href: "/projects/adult-literacy" },
  ] },
  { label: "Resources", href: "/sermons", items: [
    { label: "Sermons", href: "/sermons" },
    { label: "News", href: "/news" },
    { label: "Books", href: "/books" },
    { label: "Media", href: "/media" },
  ] },
  { label: "Events", href: "/events", items: [
    { label: "Upcoming events", href: "/events" },
    { label: "Conferences", href: "/conferences", heading: true },
    { label: "Leadership conferences", href: "/conferences/leadership-conferences" },
    { label: "Christian apologetics", href: "/conferences/christian-apologetics" },
    { label: "Quest leadership", href: "/conferences/quest-leadership" },
  ] },
  { label: "Contact", href: "/contact" },
];
