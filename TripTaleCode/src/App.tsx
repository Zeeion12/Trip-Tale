import { Routes, Route } from "react-router-dom"
import { Toaster } from "@/components/ui/toaster"
import HomePage from "@/pages/HomePage"
import ItineraryPage from "@/pages/ItineraryPage"
import ForumPage from "@/pages/ForumPage"

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/itinerary" element={<ItineraryPage />} />
        <Route path="/forum" element={<ForumPage />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
