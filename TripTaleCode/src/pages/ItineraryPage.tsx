import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ItineraryForm from "@/components/ItineraryForm"

export default function ItineraryPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <ItineraryForm onBack={() => window.history.back()} />
            <Footer />
        </div>
    )
}
