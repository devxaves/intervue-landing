import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { AboutSection } from "@/components/about-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <div className="fixed inset-0 bg-black/80 pointer-events-none" />

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <PricingSection />
        <TestimonialsSection />
        <Footer />
      </div>
    </main>
  )
}
