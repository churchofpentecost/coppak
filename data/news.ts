import { alphaPost } from "./alpha-report";

export type NewsPost = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD: the event/report date
  publishedAt: string;
  author: string;
  location: string;
  reportFile: string;
  reportPages: number;
  sections: { heading: string; paragraphs: string[] }[];
  gallery: { src: string; alt: string; caption: string; width: number; height: number }[];
  category: string;
  excerpt: string;
  image: string; // Existing image path, beginning with /assets/
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  paragraphs: string[];
};

// Sort reports by their event date; publication time is recorded separately.
export const newsPosts: NewsPost[] = [
  alphaPost,
  {
    "slug": "youth-pensa-gospel-outreach-rally-lahore-august-2026",
    "title": "Youth & PENSA Pakistan Takes the Gospel to the Streets of Lahore",
    "category": "Youth & PENSA · Gospel outreach",
    "excerpt": "Young believers, pastors and church leaders carried a peaceful message of hope, faith and love for Pakistan through the streets of Lahore.",
    "imageAlt": "Young believers, pastors and church leaders carry crosses, flags and Gospel banners through Lahore.",
    "paragraphs": [
      "On 14 August 2026, Youth & PENSA Pakistan of The Church of Pentecost Pakistan took the Gospel beyond the walls of the church and into the streets of Lahore. Participants marched with wooden crosses, Pakistani national flags, Church of Pentecost flags and Gospel banners declaring hope, peace, purpose, prayer and the love of Jesus Christ."
    ],
    "sections": [
      {
        "heading": "From prayer to public witness",
        "paragraphs": [
          "The outreach followed a Youth & PENSA Prayer and Worship Night on 13 August. Participants were prepared through prayer, worship, biblical teaching and spiritual encouragement. The next day, that preparation became public mission as young believers stepped into their community to share their faith.",
          "Before the rally, Apostle Dr. Jamil Nasir, National Head of The Church of Pentecost Pakistan, prayed for participants and encouraged them from Scripture to witness courageously, with wisdom, love and respect. Pastors and ministry leaders then walked alongside the young people."
        ]
      },
      {
        "heading": "A message of hope for Pakistan",
        "paragraphs": [
          "Banners carried messages including “There is hope in Jesus Christ,” “Your life matters,” and “God loves Pakistan.” Pakistani flags alongside crosses and church flags expressed the conviction that Christian witness and love for the nation belong together.",
          "Participants prayed for the peace, prosperity and wellbeing of Pakistan. The rally was intentionally peaceful and respectful, centring its message on Christ, hope, prayer and love for the wider community."
        ]
      },
      {
        "heading": "Global vision in action",
        "paragraphs": [
          "The outreach reflected The Church of Pentecost’s Vision 2028, “Possessing the Nations II,” by preparing young believers for mission beyond church buildings. Youth & PENSA members were encouraged to see schools, universities, workplaces, neighbourhoods, sports fields and digital spaces as opportunities for Christian witness.",
          "The report expresses thanks to Apostle Dr. Eric Nyamekye, Chairman; Apostle Samuel Gyau Obuobi, General Secretary; and Apostle Emmanuel Agyemang Bekoe, International Missions Director, for their leadership, prayers and missionary direction."
        ]
      },
      {
        "heading": "Emerging impact and continuing prayer",
        "paragraphs": [
          "The report identifies strengthened courage for public witness, increased visibility of the Gospel, a growing sense of mission, and unity between generations. These are emerging outcomes; the long-term spiritual results will continue to unfold.",
          "Please pray for young people to grow in Scripture and the power of the Holy Spirit, for wisdom and protection in witness, for future pastors and missionaries, and for new Gospel opportunities. Pray also for peace, unity and religious harmony in Pakistan, and for Christians to bless their communities through love and service."
        ]
      }
    ],
    "gallery": [
      {
        "src": "/assets/images/news/youth-pensa-august-2026/rally/rally-45.jpeg",
        "alt": "Prayer and Worship Night prepared participants for public witness.",
        "caption": "Prayer and Worship Night prepared participants for public witness.",
        "width": 973,
        "height": 622
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/rally/rally-77.jpeg",
        "alt": "Messages of hope, purpose and love for Pakistan carried through the streets.",
        "caption": "Messages of hope, purpose and love for Pakistan carried through the streets.",
        "width": 1800,
        "height": 1200
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/rally/rally-102.jpeg",
        "alt": "Youth & PENSA rally shirts connect the outreach with the Church’s leadership and worldwide mission.",
        "caption": "Youth & PENSA rally shirts connect the outreach with the Church’s leadership and worldwide mission.",
        "width": 766,
        "height": 574
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/rally/rally-143.jpeg",
        "alt": "A participant shares the Gospel during the Lahore procession.",
        "caption": "A participant shares the Gospel during the Lahore procession.",
        "width": 1280,
        "height": 720
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/rally/rally-181.jpeg",
        "alt": "A young participant carries a cross during the rally.",
        "caption": "A young participant carries a cross during the rally.",
        "width": 1280,
        "height": 720
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/rally/rally-199.jpeg",
        "alt": "Youth participants gather with crosses and Gospel banners.",
        "caption": "Youth participants gather with crosses and Gospel banners.",
        "width": 982,
        "height": 644
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/rally/rally-203.jpeg",
        "alt": "The Gospel procession moves past a church in Lahore.",
        "caption": "The Gospel procession moves past a church in Lahore.",
        "width": 802,
        "height": 720
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/rally/rally-208.jpeg",
        "alt": "Young people carry a banner declaring that every life matters.",
        "caption": "Young people carry a banner declaring that every life matters.",
        "width": 932,
        "height": 653
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/rally/rally-212.jpeg",
        "alt": "A rally banner points to hope in Jesus Christ.",
        "caption": "A rally banner points to hope in Jesus Christ.",
        "width": 983,
        "height": 559
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/rally/rally-217.jpeg",
        "alt": "Pastors and church leaders walk together through Lahore.",
        "caption": "Pastors and church leaders walk together through Lahore.",
        "width": 983,
        "height": 553
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/rally/rally-221.jpeg",
        "alt": "A banner declares: “Jesus is our hope. Pakistan is our nation.”",
        "caption": "A banner declares: “Jesus is our hope. Pakistan is our nation.”",
        "width": 983,
        "height": 553
      }
    ],
    "reportPages": 8,
    "date": "2026-08-14",
    "publishedAt": "2026-10-22T03:00:00Z",
    "author": "PENT Media Pakistan",
    "location": "Lahore, Pakistan",
    "image": "/assets/images/news/youth-pensa-august-2026/rally/rally-19.jpeg",
    "reportFile": "/reports/youth-pensa-rally-august-2026.pdf",
    "imageWidth": 2048,
    "imageHeight": 1365
  },
  {
    "slug": "youth-pensa-playing-field-prayer-field-august-2026",
    "title": "From the Playing Field to the Prayer Field",
    "category": "Youth & PENSA · Mission report",
    "excerpt": "A youth sports gathering in Lahore became a place of worship, Gospel proclamation, prayer and discipleship as hundreds gathered with pastors and church leaders.",
    "imageAlt": "Hundreds of young believers kneel together in prayer.",
    "paragraphs": [
      "On 14 August 2026, hundreds gathered in Lahore under Youth & PENSA Pakistan of The Church of Pentecost Pakistan. What began as a youth sports gathering became a place of worship, Gospel proclamation, fellowship and prayer. Pastors and leaders ministered among young people, encouraging them to live for Christ and serve their communities."
    ],
    "sections": [
      {
        "heading": "One Church, one vision, one mission",
        "paragraphs": [
          "Young people arrived in colourful jerseys representing different groups and assemblies. Church flags, banners and uniforms reinforced their shared identity in Christ. Families, children, pastors and church members joined them, making the gathering an expression of unity across generations."
        ]
      },
      {
        "heading": "A sports field became a Gospel field",
        "paragraphs": [
          "Gospel singers ministered in song, pastors preached the Word of God, and altar calls invited participants to respond to Jesus Christ. According to the event account, some heard the message of Jesus as Saviour with fresh understanding, while others responded in prayer and personal commitment.",
          "Sport provided a meeting place for relationships, evangelism, discipleship and leadership formation. Crosses, flags and Gospel signs pointed to the gathering’s purpose: encouraging young people to encounter Christ and live as His disciples."
        ]
      },
      {
        "heading": "Hundreds kneeling in prayer",
        "paragraphs": [
          "One of the report’s central images shows hundreds of young believers kneeling across the green field. Participants bowed their heads, lifted their hands and sought God. Some held crosses while church flags and Pakistan’s national flag remained visible.",
          "The sports ground became a prayer ground, expressing dependence on God’s presence and power. The report’s message is that a generation called to serve and transform society must first be rooted in faith, prayer and Scripture."
        ]
      },
      {
        "heading": "Leaders investing in the next generation",
        "paragraphs": [
          "Pastors and senior leaders prayed personally with young people and spoke blessing over their lives. This was an investment in future disciples, evangelists, professionals, church workers and community leaders.",
          "Drawing on Matthew 28:19 and Acts 1:8, participants were challenged to become disciples who make disciples. Their schools, colleges, universities, workplaces, friendships and digital spaces were presented as places of mission."
        ]
      },
      {
        "heading": "Faith, belonging and love for Pakistan",
        "paragraphs": [
          "The gathering encouraged Christian identity, belonging, courage and resilience. Young believers were reminded that they belong to a spiritual family and can express their faith with confidence, wisdom and respect.",
          "Pakistan’s national flag alongside Church of Pentecost flags expressed love for the nation. Through prayer, integrity, compassion, education and service, young Christians were encouraged to contribute positively to the country’s future."
        ]
      },
      {
        "heading": "From an event to everyday mission",
        "paragraphs": [
          "The report connects the gathering with Vision 2028 through discipleship, fellowship, leadership development, Holy Spirit empowerment, sports evangelism and mission mobilisation. It identifies stronger prayer, unity across assemblies, encouragement for emerging leaders and opportunities for public witness as important areas of impact.",
          "The lasting fruit begins as participants carry these commitments into daily life. Please pray for genuine faith in Christ, spiritual empowerment, protection, strong biblical discipleship, future Gospel workers, fellowship in schools and universities, resources for ministry, and peace and wellbeing in Pakistan."
        ]
      }
    ],
    "gallery": [
      {
        "src": "/assets/images/news/youth-pensa-august-2026/mission/mission-3.jpeg",
        "alt": "Youth & PENSA participants gather on the playing field in Lahore.",
        "caption": "Youth & PENSA participants gather on the playing field in Lahore.",
        "width": 1600,
        "height": 900
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/mission/mission-6.jpeg",
        "alt": "Church flags and Pakistan’s national flag rise above the gathering.",
        "caption": "Church flags and Pakistan’s national flag rise above the gathering.",
        "width": 1280,
        "height": 720
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/mission/mission-7.jpeg",
        "alt": "Young believers kneel in prayer on the sports field.",
        "caption": "Young believers kneel in prayer on the sports field.",
        "width": 1280,
        "height": 720
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/mission/mission-8.jpeg",
        "alt": "A participant bows in prayer beside the ministry platform.",
        "caption": "A participant bows in prayer beside the ministry platform.",
        "width": 1280,
        "height": 720
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/mission/mission-10.jpeg",
        "alt": "Different teams and assemblies stand together on the field.",
        "caption": "Different teams and assemblies stand together on the field.",
        "width": 1600,
        "height": 900
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/mission/mission-11.jpeg",
        "alt": "Young people in team jerseys take part in the gathering.",
        "caption": "Young people in team jerseys take part in the gathering.",
        "width": 1280,
        "height": 720
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/mission/mission-13.jpeg",
        "alt": "Church flags express a shared identity and mission.",
        "caption": "Church flags express a shared identity and mission.",
        "width": 1280,
        "height": 720
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/mission/mission-14.jpeg",
        "alt": "Participants worship together with crosses and flags.",
        "caption": "Participants worship together with crosses and flags.",
        "width": 1280,
        "height": 720
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/mission/mission-16.jpeg",
        "alt": "The Word of God is proclaimed openly on the field.",
        "caption": "The Word of God is proclaimed openly on the field.",
        "width": 1280,
        "height": 720
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/mission/mission-17.jpeg",
        "alt": "Young believers raise church flags and crosses together.",
        "caption": "Young believers raise church flags and crosses together.",
        "width": 1280,
        "height": 720
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/mission/mission-19.jpeg",
        "alt": "A participant carries a cross and church flag across the field.",
        "caption": "A participant carries a cross and church flag across the field.",
        "width": 1280,
        "height": 720
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/mission/mission-22.jpeg",
        "alt": "Teams across the field bow before God in prayer.",
        "caption": "Teams across the field bow before God in prayer.",
        "width": 1600,
        "height": 900
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/mission/mission-23.jpeg",
        "alt": "The playing field becomes a prayer field.",
        "caption": "The playing field becomes a prayer field.",
        "width": 1280,
        "height": 720
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/mission/mission-25.jpeg",
        "alt": "Participants are encouraged to live as witnesses of Christ.",
        "caption": "Participants are encouraged to live as witnesses of Christ.",
        "width": 1280,
        "height": 720
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/mission/mission-27.jpeg",
        "alt": "Church leaders pray personally with young participants.",
        "caption": "Church leaders pray personally with young participants.",
        "width": 1280,
        "height": 720
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/mission/mission-28.jpeg",
        "alt": "A leader prays with a young participant holding a cross.",
        "caption": "A leader prays with a young participant holding a cross.",
        "width": 1280,
        "height": 720
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/mission/mission-29.jpeg",
        "alt": "Leaders encourage the next generation during the gathering.",
        "caption": "Leaders encourage the next generation during the gathering.",
        "width": 1280,
        "height": 720
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/mission/mission-31.jpeg",
        "alt": "Young people receive encouragement and ministry on the field.",
        "caption": "Young people receive encouragement and ministry on the field.",
        "width": 1280,
        "height": 720
      },
      {
        "src": "/assets/images/news/youth-pensa-august-2026/mission/mission-34.jpeg",
        "alt": "Worship and fellowship bring participants together around the platform.",
        "caption": "Worship and fellowship bring participants together around the platform.",
        "width": 1280,
        "height": 720
      }
    ],
    "reportPages": 18,
    "date": "2026-08-14",
    "publishedAt": "2026-10-22T03:00:00Z",
    "author": "PENT Media Pakistan",
    "location": "Lahore, Pakistan",
    "image": "/assets/images/news/youth-pensa-august-2026/mission/mission-21.jpeg",
    "reportFile": "/reports/youth-pensa-mission-august-2026.pdf",
    "imageWidth": 1600,
    "imageHeight": 900
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
