import { Navbar } from "@/components/navbar"
import { BreakingNews } from "@/components/breaking-news"
import { HeroSection } from "@/components/hero-section"
import { LatestNews } from "@/components/latest-news"
import { CategorySection } from "@/components/category-section"
import { OpinionSection } from "@/components/opinion-section"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <BreakingNews />
      <main>
        <HeroSection />
        <LatestNews />
        <CategorySection />
        <OpinionSection />
      </main>

      <Newsletter />
      <Footer />
    </div>
  )
}
