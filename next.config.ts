import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare"
import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

import { routing } from "./src/i18n/routing"

const { defaultLocale, locales } = routing

// Idiomas con prefijo en la URL; el de por defecto se sirve en la raíz.
const prefixed = locales.filter((locale) => locale !== defaultLocale).join("|")

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  reactCompiler: true,
  // `/es/...` no es una URL pública: se redirige a la versión sin prefijo.
  async redirects() {
    return [
      { source: `/${defaultLocale}`, destination: "/", permanent: true },
      {
        source: `/${defaultLocale}/:path*`,
        destination: "/:path*",
        permanent: true,
      },
    ]
  },
  // Sustituyen al proxy de next-intl (`proxy.ts` es experimental en
  // OpenNext): las rutas sin prefijo se resuelven internamente contra
  // `app/[locale]` con el idioma por defecto.
  async rewrites() {
    return [
      { source: "/", destination: `/${defaultLocale}` },
      {
        source: `/:path((?!(?:${prefixed}|_next)(?:/|$)).+)`,
        destination: `/${defaultLocale}/:path`,
      },
    ]
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
      },
    },
  },
}

export default withNextIntl(nextConfig)

// Expone los bindings de Cloudflare en `next dev`.
initOpenNextCloudflareForDev()
