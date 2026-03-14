import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Features } from "@/components/features"
import { Packages } from "@/components/packages"
import { PrebuiltSites } from "@/components/prebuilt-sites"
import { Portfolio } from "@/components/portfolio"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { IntakeForm } from "@/components/intake-form"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <PrebuiltSites />
      <Packages />
      <Portfolio />
      <Process />
      <Testimonials />
      <IntakeForm />
      <FAQ />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
