
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
  python,
  django,
  flask,
  c,
  bootstrap,
  canva,
  chatgpt,
  logo_prema,
  animeporto,
  steven,
  dhyasta

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Three.JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Flask",
    icon: flask,
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
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
];

const experiences = [
  {
    title: "Flask ",
    company_name: "Personal",
    icon: logo_prema,
    iconBg: "#383E56",
    date: "March 2022 - present",
    points: [
      "Developing and maintaining web applications using Flask and other related technologies.",
      "Diligently incorporating relevant and significant informations to optimize applications",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Doing code reviews and implementing constructive feedback",
    ],
  },
  {
    title: "Django",
    company_name: "Personal",
    icon: logo_prema,
    iconBg: "#E6DEDD",
    date: "March 2022 - present",
    points: [
      "Developing and maintaining web applications using Django and other related technologies.",
      "Diligently incorporating relevant and significant informations to optimize applications",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Doing code reviews and implementing constructive feedback",
    ],
  },
  {
    title: "Three.JS ",
    company_name: "Personal",
    icon: logo_prema,
    iconBg: "#383E56",
    date: "March 2022 - present",
    points: [
      "Developing and maintaining web applications using Three.JS and other related technologies.",
      "Diligently incorporating relevant and significant informations to optimize applications",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Doing code reviews and implementing constructive feedback",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Personal",
    icon: logo_prema,
    iconBg: "#383E56",
    date: "March 2022 - present",
    points: [
      "Developing and maintaining web applications using stacks of frameworks and other related technologies.",
      "Diligently incorporating relevant and significant informations to optimize applications",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Doing code reviews and implementing constructive feedback",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: logo_prema,
    iconBg: "#E6DEDD",
    date: "March 2022 - present",
    points: [
      "Developing and maintaining web applications using stacks of framework, database and other related technologies.",
      "Diligently incorporating relevant and significant informations to optimize applications",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Doing code reviews and implementing constructive feedback",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "i guess, prema really does have something in him.",
    name: "Dyan",
    designation: "CFO",
    company: "Buy-z",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "this dude actually delivers what he was preaching about. rare these days",
    name: "Steven",
    designation: "COO",
    company: "S.H.I.P corp",
    image: steven,
  },
  {
    testimonial:
      "altho it looks funny to me at first, i realize how dang awesome and hard his project are to make. for his price? we got a steal tbh",
    name: "Dhyasta A",
    designation: "marketing PIC",
    company: "Prec Ledger Accounting",
    image: dhyasta,
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    name: "Portfolio",
    description:
      "Another one of my passion work, personal portofolio with Three.JS.",
    tags: [
      {
        name: "Portfolio",
        color: "blue-text-gradient",
      },
      {
        name: "Three.JS",
        color: "green-text-gradient",
      },
      {
        name: "passion",
        color: "pink-text-gradient",
      },
    ],
    image: animeporto,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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

export { services, technologies, experiences, testimonials, projects };