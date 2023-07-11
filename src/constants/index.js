import { mobile, backend, creator, web, javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, mongodb, git, figma, docker, meta, starbucks, tesla, shopify, furniture, jobit, tripguide, hoobank, freelance, } from "../assets";



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
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "UI/UX Design",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Designer",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frond-end Developer",
    company_name: "Freelancer",
    icon: freelance,
    iconBg: "#383E56",
    date: "May 2022 - August 2022",
    points: [
      "Expertise in React.js and related technologies for web application development.",
      "Collaborative team player, working with designers, product managers, and developers to deliver high-quality products.",
      "Skilled in implementing responsive design and ensuring compatibility across different browsers.",
      "Actively engaged in code reviews, providing valuable feedback to fellow developers.",
    ],
  },
  {
    title: "UI/UX Design",
    company_name: "Freelancer",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "May 2022 - August 2022",
    points: [
      "Skilled in developing captivating and user-focused interfaces using cutting-edge web technologies.",
      "Collaborative team player, actively working with designers, product managers, and other developers to deliver exceptional UI/UX experiences.",
      "Proficient in implementing responsive design principles to ensure seamless cross-platform compatibility.",
      "Actively involved in code reviews, providing valuable feedback to enhance the visual appeal and usability of web applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Wv HooBank",
    description: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hoobank,
    source_code_link: "https://github.com/",
  },
  {
    name: "UI Shoppe",
    description: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
    ],
    image: furniture,
    source_code_link: "https://www.figma.com/",
  },
  {
    name: "Wv Movie",
    description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
