import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeaturesSection"
import BenefitsSection from "@/components/BenefitsSection"
import ExampleItineraries from "@/components/ExampleItenararies"
import EmailCapture from "@/components/EmailCapture" // Add this import
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
                <EmailCapture />
            </main>
            <Footer />
        </div>
    )
}