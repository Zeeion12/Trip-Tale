import { Button } from "@/components/ui/button"
import { MapPin, Users, Route } from "lucide-react"
import { Link } from "react-router-dom"

export default function HeroSection() {
    return (
        <section className="bg-gradient-to-br from-orange-50 to-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm mb-8">
                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-600">Platform #1 untuk Traveler Yogyakarta</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        TripTale: Itinerary <span className="text-orange-500">Otomatis</span>
                        <br />
                        untuk Petualanganmu!
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                        Masukkan destinasi dan preferensi, dapatkan rencana perjalanan instan yang dipersonalisasi dengan AI.
                        Bergabung dengan komunitas traveler Yogyakarta!
                    </p>

                    {/* Stats */}
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16 mb-12">
                        <div className="flex items-center space-x-3">
                            <div className="bg-orange-100 p-3 rounded-full">
                                <MapPin className="h-6 w-6 text-orange-500" />
                            </div>
                            <div className="text-left">
                                <div className="text-2xl font-bold text-gray-900">100+</div>
                                <div className="text-gray-600">Destinasi</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="bg-blue-100 p-3 rounded-full">
                                <Users className="h-6 w-6 text-blue-500" />
                            </div>
                            <div className="text-left">
                                <div className="text-2xl font-bold text-gray-900">100+</div>
                                <div className="text-gray-600">Traveler Aktif</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="bg-green-100 p-3 rounded-full">
                                <Route className="h-6 w-6 text-green-500" />
                            </div>
                            <div className="text-left">
                                <div className="text-2xl font-bold text-gray-900">100+</div>
                                <div className="text-gray-600">Itinerary Dibuat</div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
                        <Link to="/itinerary">
                            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                                <MapPin className="mr-2 h-5 w-5" />
                                Buat Itinerary Gratis
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" className="px-8 py-3 text-lg bg-transparent">
                            Lihat Contoh Itinerary
                        </Button>
                    </div>

                    {/* Trusted by */}
                    <div className="text-center">
                        <p className="text-gray-500 mb-4">Dipercaya oleh traveler dari:</p>
                        <div className="flex flex-wrap justify-center items-center space-x-8 text-gray-400">
                            <span>Komunitas Jogja Backpacking</span>
                            <span>Solo Traveler Indonesia</span>
                            <span>Backpacker Nusantara</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
