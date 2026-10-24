import type { Metadata } from "next"
import { notFound } from "next/navigation"
import localFont from "next/font/local"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"

import { routing } from "@/i18n/routing"
import "@/styles/globals.css"

const funnelDisplay = localFont({
  src: "./fonts/FunnelDisplay.woff",
  weight: "500",
  style: "normal",
  variable: "--font-funnel-display",
})

const funnelSans = localFont({
  src: "./fonts/FunnelSans.woff",
  weight: "500",
  style: "normal",
  variable: "--font-funnel-sans",
})

// Solo existen los idiomas declarados: cualquier otro segmento da 404.
export const dynamicParams = false

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()

  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    metadataBase: new URL("https://oriclux.dev"),
    title: t("title"),
    description: t("description"),
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    },
    manifest: "/site.webmanifest",
  }
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()

  // Permite el renderizado estático: sin esto next-intl leería cabeceras.
  setRequestLocale(locale)

  return (
    <html
      lang={locale}
      className={`${funnelDisplay.variable} ${funnelSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
