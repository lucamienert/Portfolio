import Navbar from "@/components/navbar"
import ProjectsSection from "@/components/projects"
import TimelineSection from "@/components/timeline"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"

export default function Home() {
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
