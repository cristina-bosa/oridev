import { en } from "./en";
import { es } from "./es";
import { defaultLang, type Lang, type Translation } from "./types";

export { defaultLang, languages } from "./types";
export type { Lang, Translation } from "./types";

const dictionaries: Record<Lang, Translation> = { es, en };

/** `Astro.currentLocale` es `string | undefined`; esto lo estrecha a `Lang`
    para poder indexar el diccionario sin castings por el camino. */
export function getLang(locale: string | undefined): Lang {
  return locale != null && locale in dictionaries
    ? (locale as Lang)
    : defaultLang;
}

export function useTranslations(locale: string | undefined): Translation {
  return dictionaries[getLang(locale)];
}
