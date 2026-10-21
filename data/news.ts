export type NewsPost = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD: the actual publication date
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  gallery?: { image: string; alt: string; caption: string }[];
};

// Stories are dated by publication; the event dates appear in the articles.
export const newsPosts: NewsPost[] = [
  {
    slug: "youth-pensa-gospel-outreach-rally-lahore-august-2026",
    title: "Youth & PENSA Pakistan Takes the Gospel to the Streets of Lahore",
    date: "2026-10-20",
    category: "YOUTH & PENSA · GOSPEL OUTREACH · 14 AUGUST 2026",
    excerpt:
      "From prayer and worship on August 13 to a peaceful Gospel rally on August 14, young believers brought a message of Christ-centred hope, peace and love for Pakistan into the streets of Lahore.",
    image: "/assets/images/coppak/outreach/public-rallies/01.jpg",
    imageAlt: "Church of Pentecost Pakistan public outreach and prayer rally (ministry archive photograph)",
    gallery: [
      { image: "/assets/images/coppak/outreach/public-rallies/01.jpg", alt: "Church public outreach procession", caption: "Faith beyond the church walls — proclaiming Christ with peace and respect." },
      { image: "/assets/images/coppak/outreach/public-rallies/02.jpg", alt: "Church public prayer and rally ministry", caption: "Praying for our communities and the peace of Pakistan." },
      { image: "/assets/images/coppak/outreach/public-rallies/03.jpg", alt: "Public Gospel witness in Pakistan", caption: "Sharing a message of hope and love with our neighbours." }
    ],
    paragraphs: [
      "LAHORE, PAKISTAN | Event: 14 August 2026 | Report: PENT Media Pakistan.",
      "In a peaceful expression of Christian faith, Youth & PENSA Pakistan of The Church of Pentecost Pakistan carried the Gospel beyond the church walls and into the streets of Lahore on August 14, 2026. Young people, pastors and church leaders marched with wooden crosses, Pakistan's national flags, Church of Pentecost flags and banners proclaiming hope, peace, purpose, prayer and the love of Christ.",
      "The public witness followed a Youth & PENSA Prayer and Worship Night on August 13. Through worship, biblical teaching, prayer and encouragement, the young people were prepared for the next day's outreach. Before the march, Apostle Dr. Jamil Nasir, National Head of The Church of Pentecost Pakistan, prayed for participants and urged them to share their faith with wisdom, courage, love and respect.",
      "Their central declaration was: 'Pakistan, there is hope in Jesus Christ.' Messages including 'Your life matters', 'Jesus is our hope' and 'God loves Pakistan' connected their public Christian witness with prayer for their nation.",
      "The organisers emphasised that the rally was not an act of confrontation. In Pakistan's sensitive religious setting, it was intended as a peaceful, respectful witness centred on Jesus Christ, love of neighbour, and prayer for the country's well-being.",
      "The programme reflected The Church of Pentecost's Vision 2028, 'Possessing the Nations II', and its call to equip young believers for ministry beyond church buildings. The Church expressed gratitude to Chairman Apostle Dr. Eric Nyamekye, General Secretary Apostle Samuel Gyau Obuobi and International Missions Director Apostle Emmanuel Agyemang Bekoe for their leadership and missionary vision.",
      "The mission report identifies emerging outcomes: greater courage for public witness, increased visibility of the Gospel, a renewed missionary outlook, unity between generations, and a public demonstration of love and prayer for Pakistan. Long-term spiritual results will continue to unfold.",
      "The Church invites prayer for spiritual empowerment, wisdom and protection, the raising of young evangelists and leaders, fresh mission opportunities, and peace, unity and prosperity across Pakistan.",
      "Source: PENT Media Pakistan, 'Youth & PENSA Pakistan Gospel Outreach Rally', full report (8 pages), August 2026."
    ]
  },
  {
    slug: "youth-pensa-from-playing-field-to-prayer-field-august-2026",
    title: "From the Playing Field to the Prayer Field: Youth Unleashed for Christ",
    date: "2026-10-20",
    category: "YOUTH & PENSA · SPORTS EVANGELISM · 14 AUGUST 2026",
    excerpt:
      "A Youth & PENSA gathering in Lahore brought hundreds together for sports, worship, Gospel preaching, prayer, discipleship and a shared call to serve Christ beyond the playing field.",
    image: "/assets/images/coppak/ministries/pensa-youth/01.jpg",
    imageAlt: "Youth & PENSA Pakistan ministry gathering (ministry archive photograph)",
    gallery: [
      { image: "/assets/images/coppak/ministries/pensa-youth/02.jpg", alt: "Youth and PENSA Pakistan ministry photograph", caption: "A generation united in faith and purpose." },
      { image: "/assets/images/coppak/ministries/pensa-youth/03.jpg", alt: "Young Christians taking part in Youth and PENSA ministry", caption: "Growing together through fellowship and discipleship." },
      { image: "/assets/images/coppak/ministries/pensa-youth/04.jpg", alt: "Youth and PENSA Pakistan activity", caption: "Every gathering can become an opportunity for mission." },
      { image: "/assets/images/coppak/ministries/pensa-youth/05.jpg", alt: "Youth ministry participants", caption: "Equipping the next generation to serve Christ and society." },
      { image: "/assets/images/coppak/ministries/pensa-youth/06.jpg", alt: "Church youth ministry in Pakistan", caption: "Prayer, courage and Christian unity." },
      { image: "/assets/images/coppak/ministries/pensa-youth/07.jpg", alt: "Young believers in the Church of Pentecost Pakistan", caption: "From the playing field to a life of witness." }
    ],
    paragraphs: [
      "LAHORE, PAKISTAN | Event: 14 August 2026 | Report: PENT Media Pakistan.",
      "What began as a youth sports gathering in Lahore grew into a time of Gospel proclamation, prayer, fellowship, worship and mission. Hundreds gathered through Youth & PENSA Pakistan of The Church of Pentecost Pakistan, demonstrating how sport can create opportunities for Christian discipleship and public witness.",
      "Young people arrived in differently coloured team jerseys representing groups and assemblies. Alongside families, children, pastors and church leaders, they celebrated one shared mission in Christ. Church flags, crosses and Pakistan's national flag became visible signs of Christian commitment and love of country.",
      "Gospel singers ministered in song while pastors proclaimed the Word of God. Altar calls invited participants to respond to Jesus Christ. The report describes moments of personal prayer and commitment as the gathering moved from sporting fellowship to worship and reflection.",
      "One of the most memorable scenes was hundreds of young believers kneeling together on the sports ground, some lifting their hands while others bowed in prayer. The playing field became a prayer field, underscoring the message that transformation of society begins with lives transformed by God.",
      "Pastors and senior leaders prayed with young people and offered personal encouragement. The gathering was designed not merely as recreation, but as a pathway to spiritual formation, leadership development and mission.",
      "Youth & PENSA participants were challenged to make schools, universities, workplaces, neighbourhoods, friendships and digital spaces places of faithful Christian witness. The event illustrated a mission pathway of receiving Christ, depending on the Holy Spirit, growing in Scripture, living the Gospel, sharing Christ with love, and making disciples.",
      "The report highlights stronger Christian identity, a reinforced culture of prayer, unity between assemblies, mentoring of future leaders, and the use of sport as a bridge for outreach. It situates the programme within Vision 2028 and the call to raise Spirit-filled, Bible-grounded and mission-minded young believers.",
      "The Church asks for prayer for salvation, Holy Spirit empowerment, bold and respectful witness, protection, biblical discipleship, sports evangelism, resources for expansion and a nationwide movement of young Christians living for Christ.",
      "Source: PENT Media Pakistan, 'From the Playing Field to the Prayer Field', full mission report (18 pages), August 2026."
    ]
  }
];

export function getNewsPosts() {
  return [...newsPosts].sort((a, b) => b.date.localeCompare(a.date));
}

export function formatNewsDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}
