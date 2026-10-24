import type messages from "../messages/es.json"

import type { routing } from "@/i18n/routing"

// Tipa `useTranslations`/`getTranslations` y los `locale` de next-intl.
declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number]
    // `es` es la referencia: `pnpm lint` comprueba que el resto tenga las
    // mismas claves.
    Messages: typeof messages
  }
}
