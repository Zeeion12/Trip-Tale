import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeaturesSection"
import BenefitsSection from "@/components/BenefitsSection"
import ExampleItineraries from "@/components/ExampleItenararies"
import Footer from "@/components/Footer"
import TestDatabase from "@/components/TestDatabase" // Tambahkan ini

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main>
                <HeroSection />

                {/* Tambahkan test database di sini */}
                <section className="py-8 bg-gray-100">
                    <div className="max-w-4xl mx-auto px-4">
                        <TestDatabase />
                    </div>
                </section>

                <FeaturesSection />
                <BenefitsSection />
                <ExampleItineraries />
            </main>
            <Footer />
        </div>
    )
}