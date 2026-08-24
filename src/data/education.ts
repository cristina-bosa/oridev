/** Centros y años; el nombre de la titulación se traduce en el diccionario. */

export type EducationId = "master-web" | "grado-diseno" | "ciclo-superior-daw";

export type EducationData = {
  id: EducationId;
  year: string;
  institution: string;
};

export const education: EducationData[] = [
  {
    id: "master-web",
    year: "2023 - 2024",
    institution: "Universidad Europea de Madrid",
  },
  {
    id: "grado-diseno",
    year: "2019 - 2023",
    institution: "Universitat Oberta de Catalunya",
  },
  {
    id: "ciclo-superior-daw",
    year: "2017 - 2018",
    institution: "CIFP Villa de Agüimes",
  },
];
