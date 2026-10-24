import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  locales: ["es", "en"],
  // Idioma del contenido original: se sirve sin prefijo (`/`), el resto
  // bajo `/<locale>/`.
  defaultLocale: "es",
  localePrefix: "as-needed",
})

/** Etiqueta nativa de cada idioma, la que se muestra en el selector. */
export const languages: Record<(typeof routing.locales)[number], string> = {
  es: "Español",
  en: "English",
}
