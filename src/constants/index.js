import { mobile, backend, creator, web, javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, mongodb, git, figma, docker, meta, starbucks, tesla, shopify, furniture, jobit, tripguide, hoobank, freelance, one, two, tre, carrent, } from "../assets";



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
    title: "Editor",
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
    testimonial: "Fajar proved me wrong by creating a stunning website that is as beautiful as our product.",
    name: "Ms Mulya",
    designation: "Leader",
    company: "Mj Furniture",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Fajar does.",
    name: "Aldy Pratama",
    designation: "CTO",
    company: "HooBank",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "Fajar's optimizations boosted our website visits significantly. We're extremely grateful for their help!",
    name: "Angelina Fatra",
    designation: "CTO",
    company: "Movies",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Wv Jobit",
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
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Wv Morent",
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
    image: carrent,
    source_code_link: "https://www.figma.com/",
  },
  {
    name: "Wv Movie",
    description: "A modern web app for discovering and exploring movies. With an attractive and responsive interface, it offers an enjoyable film browsing experience.",
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
    image: one,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
