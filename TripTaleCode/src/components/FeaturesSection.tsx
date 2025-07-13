import { Card, CardContent } from "@/components/ui/card"
import { Bot, MessageCircle, FileText } from "lucide-react"

const features = [
    {
        icon: Bot,
        title: "Itinerary AI",
        description: "Rencana perjalanan otomatis berdasarkan preferensi, budget, dan durasi trip kamu",
        benefits: ["Gratis 1x/hari", "Premium unlimited", "Kustomisasi lengkap"],
        color: "orange",
    },
    {
        icon: MessageCircle,
        title: "Forum Komunitas",
        description: "Berbagi tips, cerita, dan rekomendasi dengan sesama traveler Yogyakarta",
        benefits: ["Tips dari local", "Q&A real-time", "Sharing pengalaman"],
        color: "blue",
    },
    {
        icon: FileText,
        title: "Template Itinerary",
        description: "Edit dan kustomisasi itinerary sesuai kebutuhan perjalanan kamu",
        benefits: ["Easy editing", "Save & share", "Export PDF"],
        color: "green",
    },
]

export default function FeaturesSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fitur Unggulan TripTale</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Semua yang kamu butuhkan untuk merencanakan perjalanan sempurna di Yogyakarta
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon
                        const colorClasses = {
                            orange: "bg-orange-100 text-orange-500",
                            blue: "bg-blue-100 text-blue-500",
                            green: "bg-green-100 text-green-500",
                            purple: "bg-purple-100 text-purple-500",
                        }

                        return (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardContent className="p-6">
                                    <div
                                        className={`w-16 h-16 rounded-full ${colorClasses[feature.color as keyof typeof colorClasses]} flex items-center justify-center mb-6 mx-auto`}
                                    >
                                        <IconComponent className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{feature.title}</h3>
                                    <p className="text-gray-600 mb-4 text-center">{feature.description}</p>
                                    <ul className="space-y-2">
                                        {feature.benefits.map((benefit, benefitIndex) => (
                                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
