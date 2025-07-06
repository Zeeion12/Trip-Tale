import { Button } from "@/components/ui/button"
import { Clock, Shield, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

const benefits = [
    {
        icon: Clock,
        title: "Hemat Waktu",
        description: "Buat itinerary dalam 2 menit, tidak perlu riset berjam-jam",
        color: "orange",
    },
    {
        icon: Shield,
        title: "Terpercaya",
        description: "Rekomendasi dari komunitas traveler berpengalaman",
        color: "blue",
    },
    {
        icon: MapPin,
        title: "Lokal & Autentik",
        description: "Jelajahi Yogyakarta seperti penduduk lokal",
        color: "green",
    },
]

export default function BenefitsSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon
                        const colorClasses = {
                            orange: "bg-orange-100 text-orange-500",
                            blue: "bg-blue-100 text-blue-500",
                            green: "bg-green-100 text-green-500",
                        }

                        return (
                            <div key={index} className="text-center">
                                <div
                                    className={`w-16 h-16 rounded-full ${colorClasses[benefit.color as keyof typeof colorClasses]} flex items-center justify-center mb-6 mx-auto`}
                                >
                                    <IconComponent className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        )
                    })}
                </div>

                {/* CTA Section */}
                <div className="text-center bg-white rounded-2xl p-12 shadow-lg">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Siap Memulai Petualangan?</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Bergabung dengan ribuan traveler yang sudah merasakan kemudahan TripTale
                    </p>
                    <Link to="/itinerary">
                        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                            Mulai Buat Itinerary
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
