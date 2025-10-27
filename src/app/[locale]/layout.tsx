  import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import "./styles.css"
import {hasLocale, Locale, NextIntlClientProvider} from 'next-intl'
import { ThemeProvider } from 'next-themes'
import { routing } from "@/i18n/routing"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"

const inter = Inter({subsets: ['latin']})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}))
}

export async function generateMetadata(
  props: Omit<LayoutProps<'/[locale]'>, 'children'>
) {
  const {locale} = await props.params

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: 'LocaleLayout'
  })

  return {
    title: t('title')
  }
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})


export default async function LocaleLayout({
  children,
  params
}: LayoutProps<'/[locale]'>) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  return (
    <html className="h-full" lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
