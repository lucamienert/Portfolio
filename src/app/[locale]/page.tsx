import Navbar from "@/components/navbar"
import ProjectsSection from "@/components/projects"
import TimelineSection from "@/components/timeline"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import { use } from "react"
import { setRequestLocale } from "next-intl/server"
import { Locale } from "next-intl"

export default function Home({params}: PageProps<'/[locale]'>) {
  const {locale} = use(params)

  setRequestLocale(locale as Locale)
  
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <TimelineSection />
      <Footer />
    </div>
  )
}