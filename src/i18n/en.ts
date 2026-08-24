import type { Translation } from "./types";

export const en: Translation = {
  seo: {
    title: "Cristina Bosa | Portfolio",
    description:
      "Portfolio of Cristina Bosa, front-end developer and UX/UI designer based in Las Palmas, Canary Islands.",
  },
  common: {
    menuLabel: "Menu",
    languageLabel: "Change language",
    themeToDark: "Switch to dark mode",
    themeToLight: "Switch to light mode",
  },
  nav: {
    label: "Main navigation",
    projects: "Projects",
    experience: "Experience",
    skills: "Skills",
    contact: "Contact",
  },
  hero: {
    description:
      "Front-end developer experienced with the Next 16 framework, using SASS with BEM + ITCSS as the styling architecture. Implementation of WCAG 2.1 AA web accessibility standards. UX/UI designer focused on building unique, functional and accessible user experiences.",
    availability: "Available for new projects",
    details: [
      { term: "Time zone", value: "Canary Islands" },
      { term: "Location", value: "Las Palmas" },
      { term: "Experience", value: "8+ years" },
      { term: "Languages", value: "Spanish and English" },
      { term: "Role", value: "Front-end tech lead & UX/UI designer" },
      { term: "Skills", value: "Design, code, accessibility" },
    ],
  },
  projects: {
    title: "Projects",
    description:
      "Throughout my professional career I have worked on a range of projects, both personal and professional, as an independent contributor. They have allowed me to develop and refine my design and development skills.",
    carouselLabel: "Projects carousel",
    personalBadge: "Personal project",
    closeDialog: "Close dialog",
    tags: {
      develop: "Develop",
      "ux-ui": "UX/UI",
      "design-system": "Design system",
    },
    items: {
      "nrg-consulting": {
        summary: "Corporate website for the company.",
        description:
          "NRG Consulting is an energy consulting firm that offers innovative, sustainable solutions to optimise energy consumption and reduce costs.",
        title_link: "NRG Consulting",
      },
      "seroil-gas-ahorro": {
        summary: "Web platform focused on billing.",
        description:
          "Web platform that lets customers compare their gas bills against the offers available from the distributor.",
      },
      caes: {
        summary: "Web platform focused on application management.",
        description:
          "Web platform for managing applications for beneficiaries acting as intermediaries for the Energy Saving Certificates (CAES) scheme provided by MITECO.",
      },
      triggers: {
        summary: "Hybrid app for Android and Apple.",
        description:
          "Triggers is a cross-platform app for visualising indicators generated from different commodities in real time.",
      },
      libri: {
        summary: "PWA for managing a personal library.",
        description:
          "PWA that lets users create and manage their personal library.",
      },
    },
  },
  experience: {
    title: "Experience",
    present: "present",
    roles: {
      "front-end-tech-lead": "Front-end tech lead & UX/UI designer",
      "front-end-developer": "Front-end developer & UX/UI designer",
      "graphic-designer": "Graphic designer & UX/UI designer",
      "web-developer": "Web developer",
    },
    descriptions: {
      dltcode:
        "Technical leadership of the company's front-end and design team, setting best practices and development standards. Creation of the design system based on the corporate brand. Development of multiple SaaS products with modern technologies such as NextJS. Implementation of and compliance with WCAG 2.1 AA accessibility standards, plus web performance optimisation.",
      freelance:
        "Design and development of web and mobile products for clients. Creation of design systems, low- and high-fidelity wireframes, prototyping and user interface design.",
      dr2u: "Design system built on the existing corporate brand. Low- and high-fidelity wireframes, prototyping and user interface design. Development of the hybrid app with Expo + React Native.",
      asista:
        "Hands-on brand development, creation of offline and online applications, low- and high-fidelity wireframes and internal signage. WCAG 2.1 AA accessibility, user interface and user experience design.",
      "digital-art-designers":
        "Setting up and managing the WordPress CMS according to project and client requirements. Creation of custom themes and plugins, performance and security optimisation. Development of responsive, accessible websites.",
    },
  },
  skills: {
    title: "Skills",
    groups: [
      {
        title: "Front-end",
        items: [
          "React",
          "Next.js",
          "Astro",
          "TailwindCSS",
          "TypeScript",
          "Motion",
          "HTML & CSS",
          "Architecture: Atomic Design, Component Driven Development",
        ],
      },
      {
        title: "Design & UX/UI",
        items: [
          "Figma",
          "Design tokens",
          "Prototyping",
          "WCAG / Accessibility (a11y)",
          "Typography",
          "Affinity",
        ],
      },
      {
        title: "Tooling",
        items: ["Git & GitHub", "Storybook", "CI/CD", "Vercel", "Docker"],
      },
    ],
  },
  education: {
    title: "Education",
    description:
      "Throughout my academic training I have gained knowledge and skills across various areas of web design and development.",
    degrees: {
      "master-web": "Master's Degree in Web and Application Development",
      "grado-diseno": "Bachelor's Degree in Design and Digital Creation",
      "ciclo-superior-daw":
        "Higher Vocational Diploma in Web Application Development",
    },
  },
  contact: {
    title: "Contact",
    description:
      "The quickest way to reach me is by email, and my full CV is available on LinkedIn.",
  },
  aboutMe: {
    title: "About me",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum qui, eos eius iusto unde quis deleniti soluta impedit corrupti non magni voluptatem obcaecati, cumque, sint natus iste amet voluptas error?",
  },
  underConstruction: {
    title: "This page is under construction",
  },
};
