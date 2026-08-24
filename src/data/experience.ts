/** Puestos ordenados de más reciente a más antiguo. `to: null` = actualidad,
    la etiqueta la pone el diccionario para que se traduzca. */

export type ExperienceId =
  "dltcode" | "freelance" | "dr2u" | "asista" | "digital-art-designers";

export type RoleId =
  | "front-end-tech-lead"
  | "front-end-developer"
  | "graphic-designer"
  | "web-developer";

export type ExperienceData = {
  id: ExperienceId;
  company: string;
  role: RoleId;
  from: string;
  to: string | null;
};

export const experiences: ExperienceData[] = [
  {
    id: "dltcode",
    company: "DLTCode",
    role: "front-end-tech-lead",
    from: "2024",
    to: null,
  },
  {
    id: "freelance",
    company: "Freelance",
    role: "front-end-developer",
    from: "2022",
    to: null,
  },
  {
    id: "dr2u",
    company: "DR2U",
    role: "graphic-designer",
    from: "2024",
    to: "2024",
  },
  {
    id: "asista",
    company: "Asista",
    role: "graphic-designer",
    from: "2021",
    to: "2023",
  },
  {
    id: "digital-art-designers",
    company: "Digital Art & Designers",
    role: "web-developer",
    from: "2018",
    to: "2021",
  },
];
