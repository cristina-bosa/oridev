import type { Translation } from "./types";

export const es: Translation = {
  seo: {
    title: "Cristina Bosa | Portfolio",
    description:
      "Portfolio de Cristina Bosa, desarrolladora front-end y diseñadora UX/UI en Las Palmas, Islas Canarias.",
  },
  common: {
    menuLabel: "Menú",
    languageLabel: "Cambiar idioma",
    themeToDark: "Activar modo oscuro",
    themeToLight: "Activar modo claro",
  },
  nav: {
    label: "Navegación principal",
    projects: "Proyectos",
    experience: "Experiencia",
    skills: "Habilidades",
    contact: "Contacto",
  },
  hero: {
    description:
      "Desarrolladora front-end con experiencia bajo el framework de Next16, utilizando SASS con BEM + ITCSS como arquitectura de estilos. Implementación de estándares de accesibilidad web WCAG 2.1 AA. Diseñadora UX/UI enfocada en generar experiencias de usuarios únicas, funcionales y accesibles.",
    availability: "Disponible para nuevos proyectos",
    details: [
      { term: "Zona horaria", value: "Islas Canarias" },
      { term: "Ubicación", value: "Las Palmas" },
      { term: "Experiencia", value: "8+ años" },
      { term: "Idiomas", value: "Español e inglés" },
      { term: "Rol", value: "Tech lead front-end y diseñadora UX/UI" },
      { term: "Habilidades", value: "Diseño, código, accesibilidad" },
    ],
  },
  projects: {
    title: "Proyectos",
    description:
      "A lo largo de mi carrera profesional he trabajado en diversos proyectos, personales como profesionales de manera independiente. Me han permitido desarrollar y perfeccionar mis habilidades en diseño y desarrollo.",
    carouselLabel: "Carrusel de proyectos",
    personalBadge: "Proyecto personal",
    closeDialog: "Cerrar diálogo",
    tags: {
      develop: "Desarrollo",
      "ux-ui": "UX/UI",
      "design-system": "Sistema de diseño",
    },
    items: {
      "nrg-consulting": {
        summary: "Página corporativa de la empresa.",
        description:
          "NRG Consulting es una empresa de consultoría energética que ofrece soluciones innovadoras y sostenibles para optimizar el consumo de energía y reducir costos.",
      },
      "seroil-gas-ahorro": {
        summary: "Plataforma web enfocada a facturas.",
        description:
          "Plataforma web que proporciona a los clientes la posibilidad de comparar sus facturas de gas con las ofertas disponibles de la distribuidora.",
      },
      caes: {
        summary: "Plataforma web enfocada a gestión de solicitudes.",
        description:
          "Plataforma web que permite la gestión de solicitudes para beneficiarios como intermediarios de Certificados de Ahorro de Energía (CAES) proporcionado por el MITECO.",
      },
      triggers: {
        summary: "Aplicación híbrida para Android y Apple.",
        description:
          "Triggers es una aplicación multiplataforma que sirve para visualizar indicadores generados a partir de distintas commodities en tiempo real.",
      },
      libri: {
        summary: "En desarrollo.",
        description:
          "En desarrollo.",
      },
    },
  },
  experience: {
    title: "Experiencia",
    present: "actualidad",
    roles: {
      "front-end-tech-lead": "Tech lead front-end y diseñadora UX/UI",
      "front-end-developer": "Desarrolladora front-end y diseñadora UX/UI",
      "graphic-designer": "Diseñadora gráfica y diseñadora UX/UI",
      "web-developer": "Desarrolladora web",
    },
    descriptions: {
      dltcode:
        "Dirección técnica del equipo de front-end y diseño de la empresa, establecimiento buenas prácticas y estándares de desarrollo. Creación del sistema de diseño bajo la marca corporativa. Desarrollo de múltiples productos SaaS bajo tecnologías modernas como NextJS. Implementación y cumplimiento de estándares de accesibilidad WCAG 2.1 AA y optimización de rendimiento web.",
      freelance:
        "Diseño y desarrollo de productos web y móviles para clientes. Creación de sistemas de diseño, wireframe de baja y alta fidelidad, prototipado y diseño de interfaz de usuario.",
      dr2u: "Sistema de diseño bajo la marca corporativa existente. Realización de wireframe de baja y alta fidelidad, prototipado y diseño de interfaz de usuario. Desarrollo de la aplicación híbrida bajo Expo + React Native.",
      asista:
        "Desarrollo manual de marca, creación de aplicaciones offline y online, wireframe de baja y alta fidelidad, cartelería interna. Accesibilidad WCAG 2.1 AA, diseño de interfaz de usuario y experiencia de usuario.",
      "digital-art-designers":
        "Configurar y gestionar el CMS WordPress bajo los requerimientos de proyecto y cliente. Creación de temas y plugins personalizados, optimización de rendimiento y seguridad. Desarrollo de sitios web responsivos y accesibles.",
    },
  },
  skills: {
    title: "Habilidades",
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
          "HTML y CSS",
          "Arquitectura: Atomic Design, Component Driven Development",
        ],
      },
      {
        title: "Diseño y UX/UI",
        items: [
          "Figma",
          "Design tokens",
          "Prototipado",
          "WCAG / Accesibilidad (a11y)",
          "Tipografía",
          "Affinity",
        ],
      },
      {
        title: "Herramientas",
        items: ["Git y GitHub", "Storybook", "CI/CD", "Vercel", "Docker"],
      },
    ],
  },
  education: {
    title: "Educación",
    description:
      "A lo largo de mi formación académica he adquirido conocimientos y habilidades en diversas áreas del diseño y desarrollo web.",
    degrees: {
      "master-web": "Máster de Desarrollo Web y Aplicaciones",
      "grado-diseno": "Grado de Diseño y Creación Digital",
      "ciclo-superior-daw": "Ciclo Superior Desarrollo Aplicaciones Web",
    },
  },
  contact: {
    title: "Contacto",
    description:
      "La forma más rápida de contactarme es por correo electrónico, y mi CV completo está disponible en LinkedIn.",
  },
  aboutMe: {
    title: "Sobre mí",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum qui, eos eius iusto unde quis deleniti soluta impedit corrupti non magni voluptatem obcaecati, cumque, sint natus iste amet voluptas error?",
  },
  underConstruction: {
    title: "Esta página está en construcción",
  },
};
