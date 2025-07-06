import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ForumSection from "@/components/ForumSection"

export default function ForumPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <ForumSection onBack={() => window.history.back()} />
            <Footer />
        </div>
    )
}
