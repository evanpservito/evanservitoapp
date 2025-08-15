export const software = [
  {
    title: "ZotBins",
    desc: "Improving waste diversion rates through technology geared towards sustainability ♻️",
    imgPath: "/assets/zotbins.png",
    link: "zotbins",
    location: "Irvine, CA",
    time: "November 2023 - March 2025",
    points: [
      "Curated 12+ features and 19+ screens alongside 8 developers and designers to improve waste diversion rates and promote campus-wide sustainability, now deployed on the Apple Store with 78+ users",
      "Implemented a Meta Detectron2 image segmentation model for users to scan and identify 60 categories of food waste for proper disposal",
      "Integrated real-time bin data, such as bin capacity and food waste composition, stored in TimescaleDB and retrieved via AWS Lambda",
    ],
    technologies: ["React Native", "Expo", "Node", "Firebase"],
  },
  {
    title: "Mailbi",
    desc: "A management system and communication software to track delivered packages organized for collection 📦",
    imgPath: "/assets/mailbi.png",
    link: "mailbi",
    location: "Seattle, WA",
    time: "June 2023 - December 2023",
    points: [
      "Constructed a web portal to handle 50+ incoming and outgoing packages daily at Mailpost Sammamish",
      "Implemented instant messaging service feature to notify 500+ customers of mail status through Twilio API",
    ],
    technologies: ["React", "Node", "Firebase"],
  },
  {
    title: "Cell Dogs",
    desc: "A canine tracker to manage dogs in training at correctional programs as well as adoption 🐕",
    imgPath: "/assets/celldogs.png",
    link: "celldogs",
    location: "Irvine, CA",
    time: "September 2022 - June 2023",
    points: [
      "Coordinated with UCI Commit the Change developer team to construct a canine tracker for NPO Cell Dogs to manage dogs in training at correctional programs as well as adoption",
      "Collaborated alongside UCI Commit the Change designer team to build a user-friendly frontend interface, including a login page, navigation bar, 404/error page, and mobile view, to reflect Figma design utilizing Chakra UI library",
    ],
    technologies: ["React", "Node", "PostgreSQL", "Firebase"],
  },
];
