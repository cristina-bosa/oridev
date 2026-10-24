// Comprueba que todos los `messages/*.json` tengan exactamente las mismas
// claves que el de referencia. Con JSON, TypeScript solo valida contra `es`:
// sin esto, una traducción que falte en `en` no se ve hasta ejecutar.

import { readdirSync, readFileSync } from "node:fs"

const DIR = new URL("../messages/", import.meta.url)
// Debe coincidir con `defaultLocale` de `src/i18n/routing.ts`.
const REFERENCE = "es"

const load = (locale) =>
  JSON.parse(readFileSync(new URL(`${locale}.json`, DIR), "utf8"))

/** Claves hoja en notación de puntos: `{ a: { b: "x" } }` -> `["a.b"]`. */
function keys(value, prefix = "") {
  if (typeof value !== "object" || value === null) return [prefix]

  return Object.entries(value).flatMap(([key, child]) =>
    keys(child, prefix ? `${prefix}.${key}` : key),
  )
}

const expected = new Set(keys(load(REFERENCE)))
const locales = readdirSync(DIR)
  .filter((file) => file.endsWith(".json"))
  .map((file) => file.slice(0, -".json".length))
  .filter((locale) => locale !== REFERENCE)

let failed = false

for (const locale of locales) {
  const actual = new Set(keys(load(locale)))
  const missing = [...expected].filter((key) => !actual.has(key))
  const extra = [...actual].filter((key) => !expected.has(key))

  for (const key of missing) console.error(`${locale}.json: falta "${key}"`)
  for (const key of extra) console.error(`${locale}.json: sobra "${key}"`)

  failed ||= missing.length > 0 || extra.length > 0
}

if (failed) process.exit(1)

console.log(`messages: ${locales.join(", ")} coinciden con ${REFERENCE}`)
