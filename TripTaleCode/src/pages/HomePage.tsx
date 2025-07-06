import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeaturesSection"
import BenefitsSection from "@/components/BenefitsSection"
import ExampleItineraries from "@/components/ExampleItineraries"
import Footer from "@/components/Footer"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main>
                <HeroSection />
                <FeaturesSection />
                <BenefitsSection />
                <ExampleItineraries />
            </main>
            <Footer />
        </div>
    )
}
