import type { Locale } from "next-intl"

import { getPathname } from "./navigation"
import { routing } from "./routing"

/** `alternates` de Metadata para `href` (ruta sin prefijo, p. ej. `/blog`):
    canonical, una URL por idioma y `x-default`. */
export function alternatesFor(locale: Locale, href: string) {
  return {
    canonical: getPathname({ locale, href }),
    languages: {
      ...Object.fromEntries(
        routing.locales.map((l) => [l, getPathname({ locale: l, href })]),
      ),
      "x-default": getPathname({ locale: routing.defaultLocale, href }),
    },
  }
}
