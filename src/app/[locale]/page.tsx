import type { Metadata } from "next"
import type { Locale } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"

import { LanguageSwitcher } from "@/components/language-switcher"
import { alternatesFor } from "@/i18n/metadata"

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params

  return { alternates: alternatesFor(locale as Locale, "/") }
}

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const t = await getTranslations("Metadata")

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 p-8">
      <LanguageSwitcher />
      <h1 className="font-display text-3xl">{t("title")}</h1>
      <p className="max-w-md text-center">{t("description")}</p>
    </main>
  )
}
