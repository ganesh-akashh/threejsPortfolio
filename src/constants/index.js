import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: " Excepteur sint",
    icon: web,
  },
  {
    title: "Lorem ipsum dolor",
    icon: mobile,
  },
  {
    title: "Duis aute irure",
    icon: backend,
  },
  {
    title: "Finibus Bonorum et ",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Sagittis purus ",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    point:"Vulputate enim nulla aliquet porttitor. Nunc faucibus a pellentesque sit amet.",
    points: [
      "Vulputate enim nulla aliquet porttitor. Nunc faucibus a pellentesque sit amet.",
      "Tellus elementum sagittis vitae et leo duis ut diam. Ut venenatis tellus in metus vulputate eu scelerisque.",
      "Et malesuada fames ac turpis egestas integer eget aliquet",
      "Nunc faucibus a pellentesque sit amet porttitor eget dolor",
    ],
  },
  {
    title: "Malesuada fames",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
     point:"Vulputate enim nulla aliquet porttitor. Nunc faucibus a pellentesque sit amet.",
    points: [
      "Vulputate enim nulla aliquet porttitor. Nunc faucibus a pellentesque sit amet.",
      "Tellus elementum sagittis vitae et leo duis ut diam. Ut venenatis tellus in metus vulputate eu scelerisque.",
      "Et malesuada fames ac turpis egestas integer eget aliquet",
      "Nunc faucibus a pellentesque sit amet porttitor eget dolor",
    ],
  },
  {
    title: "Amet nisl suscipit ",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
     point:"Vulputate enim nulla aliquet porttitor. Nunc faucibus a pellentesque sit amet.",
   points: [
      "Vulputate enim nulla aliquet porttitor. Nunc faucibus a pellentesque sit amet.",
      "Tellus elementum sagittis vitae et leo duis ut diam. Ut venenatis tellus in metus vulputate eu scelerisque.",
      "Et malesuada fames ac turpis egestas integer eget aliquet",
      "Nunc faucibus a pellentesque sit amet porttitor eget dolor",
    ],
  },
  {
    title: "Adipiscing elit pellentesque",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
     point:"Vulputate enim nulla aliquet porttitor. Nunc faucibus a pellentesque sit amet.",
    date: "Jan 2023 - Present",
   points: [
      "Vulputate enim nulla aliquet porttitor. Nunc faucibus a pellentesque sit amet.",
      "Tellus elementum sagittis vitae et leo duis ut diam. Ut venenatis tellus in metus vulputate eu scelerisque.",
      "Et malesuada fames ac turpis egestas integer eget aliquet",
      "Nunc faucibus a pellentesque sit amet porttitor eget dolor",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.",
    name: "Camille",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. ",
    name: "Louis",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",
    name: "Marie",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:" Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:"Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {  services, technologies, experiences, testimonials, projects };