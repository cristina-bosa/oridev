import en from "../messages/en.json"
import es from "../messages/es.json"
import { routing } from "../src/i18n/routing"

const messages = { es, en }

/** Idioma por el prefijo de la URL, igual que en la app: `/en/...` en
    inglés, el resto en el idioma por defecto. */
function localeOf(url: URL) {
  const [, segment] = url.pathname.split("/")

  return (
    routing.locales.find(
      (locale) => locale !== routing.defaultLocale && locale === segment,
    ) ?? routing.defaultLocale
  )
}

/** 503 + `Retry-After`: los buscadores entienden que es temporal y no
    desindexan la web. HTML autocontenido porque Next no se ejecuta. */
export function maintenanceResponse(request: Request) {
  const locale = localeOf(new URL(request.url))
  const t = messages[locale].Maintenance

  const html = `<!doctype html>
<html lang="${locale}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <title>${t.title}</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <style>
      :root { color-scheme: light dark; --bg: #ffffff; --fg: #171717; }
      @media (prefers-color-scheme: dark) {
        :root { --bg: #0a0a0a; --fg: #ededed; }
      }
      body {
        margin: 0; min-height: 100svh; display: grid; place-content: center;
        gap: 0.75rem; padding: 2rem; text-align: center;
        background: var(--bg); color: var(--fg);
        font-family: system-ui, sans-serif;
      }
      h1 { margin: 0; font-size: 1.875rem; }
      p { margin: 0; max-width: 28rem; opacity: 0.8; }
    </style>
  </head>
  <body>
    <h1>${t.title}</h1>
    <p>${t.description}</p>
  </body>
</html>`

  return new Response(html, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "Retry-After": "3600",
    },
  })
}
