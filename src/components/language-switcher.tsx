"use client"

import { useLocale, useTranslations } from "next-intl"

import { getPathname, usePathname } from "@/i18n/navigation"
import { languages, routing } from "@/i18n/routing"

export function LanguageSwitcher() {
  const t = useTranslations("LanguageSwitcher")
  const current = useLocale()
  // Ruta sin prefijo de idioma: igual en servidor (`/es/...`, tras la
  // rewrite) y en cliente (`/...`), así que no hay desajuste al hidratar.
  const pathname = usePathname()

  return (
    <nav aria-label={t("label")} className="flex gap-1">
      {routing.locales.map((locale) => (
        // `<a>` y no `Link`: el `Link` de next-intl apunta a `/es` para que
        // su proxy guarde la cookie, y aquí solo añadiría una redirección.
        // Cambiar de idioma cambia el layout raíz: recarga completa igualmente.
        <a
          key={locale}
          href={getPathname({ locale, href: pathname })}
          hrefLang={locale}
          lang={locale}
          aria-current={locale === current ? "true" : undefined}
          className="rounded-full px-2.5 py-1 text-xs font-bold uppercase aria-[current=true]:bg-foreground aria-[current=true]:text-background"
        >
          <span aria-hidden="true">{locale}</span>
          <span className="sr-only">{languages[locale]}</span>
        </a>
      ))}
    </nav>
  )
}
