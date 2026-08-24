import type { EducationId } from "@/data/education";
import type { ExperienceId, RoleId } from "@/data/experience";
import type { ProjectId, TagId } from "@/data/projects";

/** Claves = las de `i18n.locales` en astro.config.mjs. Valor = etiqueta nativa
    del idioma, que es lo que se muestra en el selector. */
export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "es";

/** Contrato único de los diccionarios: si `es` gana una clave, `en` no compila
    hasta traducirla. Los `Record<...Id, ...>` obligan además a cubrir cada
    proyecto, puesto o titulación declarada en `src/data`. */
export interface Translation {
  seo: {
    title: string;
    description: string;
  };
  common: {
    menuLabel: string;
    languageLabel: string;
    themeToDark: string;
    themeToLight: string;
  };
  nav: {
    label: string;
    projects: string;
    experience: string;
    skills: string;
    contact: string;
  };
  hero: {
    description: string;
    availability: string;
    details: { term: string; value: string }[];
  };
  projects: {
    title: string;
    description: string;
    carouselLabel: string;
    personalBadge: string;
    closeDialog: string;
    tags: Record<TagId, string>;
    items: Record<
      ProjectId,
      { summary: string; description: string; title_link?: string }
    >;
  };
  experience: {
    title: string;
    present: string;
    roles: Record<RoleId, string>;
    descriptions: Record<ExperienceId, string>;
  };
  skills: {
    title: string;
    groups: { title: string; items: string[] }[];
  };
  education: {
    title: string;
    description: string;
    degrees: Record<EducationId, string>;
  };
  contact: {
    title: string;
    description: string;
  };
  aboutMe: {
    title: string;
    description: string;
  };
  underConstruction: {
    title: string;
  };
}
