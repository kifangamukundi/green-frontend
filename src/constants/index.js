import { waste, resource, sanitation, restoration, comsumption, food, catchment, central, north, east, south, people01, people02, people03, facebook, instagram, linkedin, twitter, send, shield, star  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    link: "/"
  },
  {
    id: "features",
    title: "About Us",
    link: "/about"
  },
  {
    id: "product",
    title: "Service Providers",
    link: "/service-providers"
  },
  {
    id: "clients",
    title: "Become a Partner",
    link: "/become-a-partner"
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Vision",
    content:
      "To be the leading socio-economic and environmental solution provider in Kakamega County and beyond.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Mission",
    content:
      "To improve household productivity through enhancing capacity of On-farm and non-farm ecosystems service providers (occupations/trades).",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Goal",
    content:
      "Our main goal facilitate community led emergence of green villages where prosperous healthy families live in harmony with the natural environment.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Wards",
    value: "4",
  },
  {
    id: "stats-2",
    title: "Approx. Population",
    value: "104,669",
  },
  {
    id: "stats-3",
    title: "Approx. Area in square km",
    value: "143.6",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Recommended Foods by FAO",
        link: "/foods",
      },
      {
        name: "Service Providers",
        link: "/service-providers",
      },
      {
        name: "Ward Committees",
        link: "/ward-committee",
      },
      {
        name: "SUSREF Committee",
        link: "/SUSREF-committee",
      },
      {
        name: "Marketing committee",
        link: "/marketing-committee",
      },
      {
        name: "Food safety Committee",
        link: "/food-safety-committee",
      },
      
      {
        name: "Community of engagement",
        link: "/community-engagement",
      },
      {
        name: "Shianabunga Habitat Restoration",
        link: "/shianabunga-habitat-restoration",
      },
    ],
  },
  {
    title: "Empowerment structures",
    links: [
      {
        name: "Technical Committee",
        link: "/technical-committee",
      },
      {
        name: "Resource Centre Management",
        link: "/resource-center-management",
      },
      {
        name: "Waste Management",
        link: "/waste-management",
      },
      {
        name: "Responsible Consumption",
        link: "/responsible-consumption",
      },
      {
        name: "Sanitation and food safety",
        link: "/sanitation-and-food-safety",
      },
      {
        name: "Restoration & Regenerative farming",
        link: "restoration-and-regenerative-farming",
      },
      {
        name: "Habitat Catchment Council",
        link: "habitat-catchment-council",
      },
    ],
  },
  
  {
    title: "Others",
    links: [
      {
        name: "Privacy Policy",
        link: "/privacy-policy",
      },
      {
        name: "Terms of Use",
        link: "/terms-of-use",
      },
      {
        name: "Become a Partner",
        link: "/become-a-partner",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "#",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "#",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "#",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "#",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: south,
  },
  {
    id: "client-2",
    logo: east,
  },
  {
    id: "client-3",
    logo: north,
  },
  {
    id: "client-4",
    logo: central,
  },
];

export const services = [
  {
    id: "service-1",
    title: "Habitat Catchment Council of Elders",
    content: "This will consist of not less than respected elders within the catchment and will oversee activities of the Habitat Catchment Restoration & Regenerative farming Committee.",
    image: catchment,
    url: "/habitat-catchment-council"
  },
  {
    id: "service-2",
    title: "Sub County and Ward Sustainable Resilient Food Systems Technical Committee",
    content: "The aim is to ensure buy-in of the approach, identify committed and credible persons within the community and of course clearance to freely engage with the community.",
    image: food,
    url: "/technical-committee"
  },
  {
    id: "service-3",
    title: "Responsible Consumption",
    content: "This committee will have the responsibility of promoting production of all these food groups at household level, followed by nutrition education which will combine both sensitizations on the need to consume healthy diets as well as setting up learning centers for preparation of healthy diets using locally produced foods.",
    image: comsumption,
    url: "/responsible-consumption"
  },
  {
    id: "service-4",
    title: "Habitat catchment Restoration & Regenerative farming Committee",
    content: "The committee that will implement the integrated community empowerment program with the beneficiary households.",
    image: restoration,
    url: "/restoration-and-regenerative-farming"
  },
  {
    id: "service-5",
    title: "Sanitation and food safety",
    content: "The dream of having all households access safe drinking water is achievable for many parts of Kenya due to abundance of natural springs and permanent rivers.",
    image: sanitation,
    url: "/sanitation-and-food-safety"
  },
  {
    id: "service-6",
    title: "Ward Resource Centre Management Team",
    content: "The team will be responsible for overall leadership, planning and implementation of the ward ecosystem restoration and regenerative farming practices road map.",
    image: resource,
    url: "/resource-center-management"
  },
  {
    id: "service-7",
    title: "Waste Management",
    content: "Organic waste which we shall be concerned with organic wastes derived from food wastes, food remains after processing and crop residues.",
    image: waste,
    url: "/waste-management"
  },
];