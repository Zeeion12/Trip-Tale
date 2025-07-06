import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin } from "lucide-react"

const exampleItineraries = [
    {
        title: "Trip Budaya Yogyakarta - 3 Hari",
        budget: "Rp 1.500.000",
        theme: "Budaya & Kuliner",
        days: [
            {
                day: 1,
                activities: [
                    { time: "08:00", place: "Candi Borobudur", cost: "Rp 50.000" },
                    { time: "13:00", place: "Makan siang di Omah Dhuwur", cost: "Rp 75.000" },
                    { time: "15:00", place: "Village Tour Candirejo", cost: "Rp 150.000" },
                ],
            },
            {
                day: 2,
                activities: [
                    { time: "09:00", place: "Keraton Yogyakarta", cost: "Rp 25.000" },
                    { time: "11:00", place: "Taman Sari", cost: "Rp 15.000" },
                    { time: "14:00", place: "Jalan Malioboro & Gudeg Yu Djum", cost: "Rp 100.000" },
                ],
            },
        ],
        totalCost: "Rp 965.000",
    },
]

export default function ExampleItineraries() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contoh Itinerary Yogyakarta</h2>
                    <p className="text-xl text-gray-600">Lihat bagaimana AI kami merencanakan perjalanan sempurna</p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {exampleItineraries.map((itinerary, index) => (
                        <Card key={index} className="shadow-lg">
                            <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <CardTitle className="text-2xl text-gray-900 mb-2">
                                            <MapPin className="inline mr-2 h-6 w-6 text-orange-500" />
                                            {itinerary.title}
                                        </CardTitle>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                            <span>Budget: {itinerary.budget}</span>
                                            <span>Tema: {itinerary.theme}</span>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="space-y-8">
                                    {itinerary.days.map((day, dayIndex) => (
                                        <div key={dayIndex}>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-orange-500 pl-4">
                                                Hari {day.day}
                                            </h3>
                                            <div className="space-y-3">
                                                {day.activities.map((activity, activityIndex) => (
                                                    <div key={activityIndex} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                                                        <div className="flex items-center space-x-2 text-orange-600 min-w-0">
                                                            <Clock className="h-4 w-4" />
                                                            <span className="font-medium">{activity.time}</span>
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <span className="text-gray-900">{activity.place}</span>
                                                        </div>
                                                        <div className="flex items-center space-x-1 text-green-600">
                                                            <span className="font-medium">({activity.cost})</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-semibold text-gray-900">Total Estimasi: {itinerary.totalCost}</span>
                                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium">
                                            Buat Itinerary Sendiri
                                        </button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
