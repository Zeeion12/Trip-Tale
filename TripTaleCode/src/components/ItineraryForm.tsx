"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, MapPin, Clock, DollarSign, Sparkles, Save, Crown } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ItineraryFormProps {
    onBack: () => void
}

interface ItineraryDay {
    day: string
    activities: Array<{
        time: string
        place: string
        cost: string
        description?: string
    }>
}

const ItineraryForm = ({ onBack }: ItineraryFormProps) => {
    const { toast } = useToast()
    const [formData, setFormData] = useState({
        destination: "",
        duration: "",
        budget: "",
        theme: "",
        customNotes: "",
    })
    const [generatedItinerary, setGeneratedItinerary] = useState<ItineraryDay[]>([])
    const [isGenerating, setIsGenerating] = useState(false)
    const [hasGenerated, setHasGenerated] = useState(false)

    // Improved AI logic with better data structure
    const generateItinerary = () => {
        // Validation
        if (!formData.destination || !formData.duration || !formData.budget || !formData.theme) {
            toast({
                title: "Form Belum Lengkap",
                description: "Mohon isi semua field yang diperlukan",
                variant: "destructive",
            })
            return
        }

        setIsGenerating(true)

        // Simulate AI processing
        setTimeout(() => {
            const itinerary = createItineraryLogic()
            setGeneratedItinerary(itinerary)
            setHasGenerated(true)
            setIsGenerating(false)

            toast({
                title: "Itinerary Berhasil Dibuat!",
                description: "Rencana perjalanan kamu sudah siap. Scroll ke bawah untuk melihat detailnya.",
            })
        }, 2000)
    }

    const createItineraryLogic = (): ItineraryDay[] => {
        const duration = Number.parseInt(formData.duration)
        const budget = Number.parseInt(formData.budget)
        const theme = formData.theme

        const destinations = {
            budaya: [
                {
                    name: "Candi Borobudur",
                    cost: 50000,
                    time: "08:00-12:00",
                    type: "morning",
                    description: "Candi Buddha terbesar di dunia",
                },
                {
                    name: "Keraton Yogyakarta",
                    cost: 25000,
                    time: "09:00-11:00",
                    type: "morning",
                    description: "Istana Sultan Yogyakarta",
                },
                {
                    name: "Taman Sari",
                    cost: 15000,
                    time: "14:00-16:00",
                    type: "afternoon",
                    description: "Taman istana air Keraton",
                },
                {
                    name: "Candi Prambanan",
                    cost: 50000,
                    time: "08:00-11:00",
                    type: "morning",
                    description: "Kompleks candi Hindu terbesar",
                },
                {
                    name: "Kotagede Silver",
                    cost: 60000,
                    time: "15:00-17:00",
                    type: "afternoon",
                    description: "Pusat kerajinan perak tradisional",
                },
            ],
            kuliner: [
                {
                    name: "Gudeg Yu Djum Malioboro",
                    cost: 35000,
                    time: "12:00-13:00",
                    type: "lunch",
                    description: "Gudeg legendaris Yogyakarta",
                },
                {
                    name: "Resto Bale Raos",
                    cost: 150000,
                    time: "19:00-21:00",
                    type: "dinner",
                    description: "Kuliner khas Keraton",
                },
                {
                    name: "Sate Klathak Pak Pong",
                    cost: 50000,
                    time: "18:00-19:00",
                    type: "dinner",
                    description: "Sate kambing khas Bantul",
                },
                {
                    name: "Omah Dhuwur Restaurant",
                    cost: 75000,
                    time: "12:00-14:00",
                    type: "lunch",
                    description: "Resto dengan view sawah",
                },
            ],
            petualangan: [
                {
                    name: "Pantai Parangtritis",
                    cost: 10000,
                    time: "06:00-12:00",
                    type: "morning",
                    description: "Pantai dengan legenda Nyi Roro Kidul",
                },
                {
                    name: "Goa Jomblang",
                    cost: 350000,
                    time: "07:00-15:00",
                    type: "fullday",
                    description: "Cave tubing dan rappelling",
                },
                {
                    name: "Kalibiru National Park",
                    cost: 25000,
                    time: "08:00-16:00",
                    type: "fullday",
                    description: "Spot sunrise dan foto instagramable",
                },
                {
                    name: "Hutan Pinus Mangunan",
                    cost: 5000,
                    time: "15:00-18:00",
                    type: "afternoon",
                    description: "Hutan pinus dengan view indah",
                },
            ],
        }

        const selectedDestinations = destinations[theme as keyof typeof destinations] || destinations.budaya
        const dailyBudget = budget / duration

        const itinerary: ItineraryDay[] = []

        for (let day = 1; day <= duration; day++) {
            const dayActivities: Array<{ time: string; place: string; cost: string; description?: string }> = []
            let dayBudget = 0

            // Morning activity
            const morningOptions = selectedDestinations.filter((d) => d.type === "morning" || d.type === "fullday")
            if (morningOptions.length > 0) {
                const morningActivity = morningOptions[Math.floor(Math.random() * morningOptions.length)]
                if (dayBudget + morningActivity.cost <= dailyBudget) {
                    dayActivities.push({
                        time: morningActivity.time,
                        place: morningActivity.name,
                        cost: `Rp ${morningActivity.cost.toLocaleString("id-ID")}`,
                        description: morningActivity.description,
                    })
                    dayBudget += morningActivity.cost

                    // Add lunch and afternoon if not fullday
                    if (morningActivity.type !== "fullday") {
                        // Lunch
                        const lunchOptions = destinations.kuliner.filter((d) => d.type === "lunch")
                        if (lunchOptions.length > 0) {
                            const lunch = lunchOptions[Math.floor(Math.random() * lunchOptions.length)]
                            if (dayBudget + lunch.cost <= dailyBudget) {
                                dayActivities.push({
                                    time: lunch.time,
                                    place: lunch.name,
                                    cost: `Rp ${lunch.cost.toLocaleString("id-ID")}`,
                                    description: lunch.description,
                                })
                                dayBudget += lunch.cost
                            }
                        }

                        // Afternoon activity
                        const afternoonOptions = selectedDestinations.filter((d) => d.type === "afternoon")
                        if (afternoonOptions.length > 0) {
                            const afternoon = afternoonOptions[Math.floor(Math.random() * afternoonOptions.length)]
                            if (dayBudget + afternoon.cost <= dailyBudget) {
                                dayActivities.push({
                                    time: afternoon.time,
                                    place: afternoon.name,
                                    cost: `Rp ${afternoon.cost.toLocaleString("id-ID")}`,
                                    description: afternoon.description,
                                })
                                dayBudget += afternoon.cost
                            }
                        }
                    }
                }
            }

            itinerary.push({
                day: `Hari ${day}`,
                activities: dayActivities,
            })
        }

        return itinerary
    }

    const handleSave = () => {
        toast({
            title: "Fitur Premium",
            description: "Untuk menyimpan itinerary, upgrade ke Premium hanya Rp 50.000/bulan!",
            variant: "default",
        })
    }

    const calculateTotalCost = () => {
        let total = 0
        generatedItinerary.forEach((day) => {
            day.activities.forEach((activity) => {
                const match = activity.cost.match(/Rp ([\d,.]+)/)
                if (match) {
                    const cost = Number.parseInt(match[1].replace(/[,.]/g, ""))
                    total += cost
                }
            })
        })
        return total
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <Button
                        variant="ghost"
                        onClick={onBack}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Kembali
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Buat Itinerary AI</h1>
                        <p className="text-gray-600">Rencana perjalanan otomatis dalam hitungan detik</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Form */}
                    <Card className="h-fit">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Sparkles className="h-5 w-5 text-orange-500" />
                                Preferensi Perjalanan
                            </CardTitle>
                            <CardDescription>Isi detail perjalanan untuk mendapatkan itinerary yang dipersonalisasi</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            {/* Destination */}
                            <div className="space-y-2">
                                <Label htmlFor="destination" className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-orange-500" />
                                    Destinasi
                                </Label>
                                <select
                                    id="destination"
                                    value={formData.destination}
                                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <option value="">Pilih destinasi</option>
                                    <option value="yogyakarta">Yogyakarta</option>
                                    <option value="semarang" disabled>
                                        Semarang (Coming Soon)
                                    </option>
                                    <option value="solo" disabled>
                                        Solo (Coming Soon)
                                    </option>
                                </select>
                            </div>

                            {/* Duration */}
                            <div className="space-y-2">
                                <Label htmlFor="duration" className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-blue-500" />
                                    Durasi Perjalanan
                                </Label>
                                <select
                                    id="duration"
                                    value={formData.duration}
                                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <option value="">Pilih durasi</option>
                                    <option value="1">1 Hari</option>
                                    <option value="2">2 Hari</option>
                                    <option value="3">3 Hari</option>
                                    <option value="4">4 Hari</option>
                                    <option value="5">5 Hari</option>
                                    <option value="6">6 Hari</option>
                                    <option value="7">7 Hari</option>
                                </select>
                            </div>

                            {/* Budget */}
                            <div className="space-y-2">
                                <Label htmlFor="budget" className="flex items-center gap-2">
                                    <DollarSign className="h-4 w-4 text-green-500" />
                                    Budget Total
                                </Label>
                                <select
                                    id="budget"
                                    value={formData.budget}
                                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <option value="">Pilih budget</option>
                                    <option value="500000">Rp 500.000 - Hemat</option>
                                    <option value="1000000">Rp 1.000.000 - Standar</option>
                                    <option value="2000000">Rp 2.000.000 - Nyaman</option>
                                    <option value="3000000">Rp 3.000.000 - Premium</option>
                                    <option value="5000000">Rp 5.000.000+ - Luxury</option>
                                </select>
                            </div>

                            {/* Theme */}
                            <div className="space-y-2">
                                <Label htmlFor="theme">Tema Perjalanan</Label>
                                <select
                                    id="theme"
                                    value={formData.theme}
                                    onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
                                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <option value="">Pilih tema</option>
                                    <option value="budaya">Budaya & Sejarah</option>
                                    <option value="kuliner">Kuliner</option>
                                    <option value="petualangan">Petualangan & Alam</option>
                                </select>
                            </div>

                            {/* Custom Notes */}
                            <div className="space-y-2">
                                <Label htmlFor="notes">Catatan Khusus (Opsional)</Label>
                                <Textarea
                                    id="notes"
                                    placeholder="Misal: Saya vegetarian, suka foto Instagram, hindari tempat ramai..."
                                    value={formData.customNotes}
                                    onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
                                    rows={3}
                                />
                            </div>

                            {/* Generate Button */}
                            <Button
                                onClick={generateItinerary}
                                disabled={
                                    isGenerating || !formData.destination || !formData.duration || !formData.budget || !formData.theme
                                }
                                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3"
                                size="lg"
                            >
                                {isGenerating ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                        Generating AI Itinerary...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="h-4 w-4 mr-2" />
                                        Generate Itinerary AI
                                    </>
                                )}
                            </Button>

                            {/* Free limit notice */}
                            <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                                <p className="text-sm text-orange-700">
                                    <span className="font-semibold">Gratis:</span> 1 itinerary per hari
                                </p>
                                <p className="text-xs text-orange-600 mt-1">Upgrade Premium untuk unlimited access + fitur eksklusif</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Results */}
                    <div className="space-y-6">
                        {hasGenerated && generatedItinerary.length > 0 && (
                            <>
                                <Card>
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <CardTitle className="flex items-center gap-2">
                                                    <MapPin className="h-5 w-5 text-orange-500" />
                                                    Itinerary {formData.destination.charAt(0).toUpperCase() + formData.destination.slice(1)}
                                                </CardTitle>
                                                <CardDescription className="mt-2">
                                                    {formData.duration} hari • Budget: Rp{" "}
                                                    {Number.parseInt(formData.budget).toLocaleString("id-ID")} • Tema: {formData.theme}
                                                </CardDescription>
                                            </div>
                                            <Button onClick={handleSave} variant="outline" size="sm">
                                                <Save className="h-4 w-4 mr-2" />
                                                Simpan
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-6">
                                            {generatedItinerary.map((day, index) => (
                                                <div key={index} className="border-l-4 border-orange-500 pl-4">
                                                    <h4 className="font-semibold text-lg text-gray-900 mb-3">{day.day}</h4>
                                                    <ul className="space-y-3">
                                                        {day.activities.map((activity, i) => (
                                                            <li key={i} className="bg-gray-50 p-3 rounded-lg">
                                                                <div className="flex items-start justify-between">
                                                                    <div className="flex-1">
                                                                        <div className="flex items-center gap-2 mb-1">
                                                                            <Clock className="h-4 w-4 text-orange-400" />
                                                                            <span className="font-medium text-orange-600">{activity.time}</span>
                                                                        </div>
                                                                        <h5 className="font-semibold text-gray-900">{activity.place}</h5>
                                                                        {activity.description && (
                                                                            <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                                                                        )}
                                                                    </div>
                                                                    <span className="font-semibold text-green-600 ml-4">{activity.cost}</span>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}

                                            <div className="pt-4 border-t border-gray-200">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-lg font-semibold text-gray-900">
                                                        Total Estimasi: Rp {calculateTotalCost().toLocaleString("id-ID")}
                                                    </span>
                                                    <div className="text-right text-sm text-gray-500">
                                                        <p>Belum termasuk transportasi & akomodasi</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Premium CTA */}
                                <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
                                    <CardContent className="p-6 text-center">
                                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Crown className="h-6 w-6 text-orange-500" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Upgrade ke Premium</h3>
                                        <p className="text-gray-600 mb-4 text-sm">
                                            Unlimited itinerary, kustomisasi advanced, save & share, export PDF
                                        </p>
                                        <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                                            Mulai Rp 50.000/bulan
                                        </Button>
                                    </CardContent>
                                </Card>
                            </>
                        )}

                        {!hasGenerated && !isGenerating && (
                            <Card className="h-96 flex items-center justify-center bg-gray-50 border-dashed border-2 border-gray-300">
                                <div className="text-center text-gray-500">
                                    <Sparkles className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                    <p className="text-lg font-medium">Itinerary AI akan muncul di sini</p>
                                    <p className="text-sm">Isi form di sebelah kiri dan klik Generate</p>
                                </div>
                            </Card>
                        )}

                        {isGenerating && (
                            <Card className="h-96 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
                                    <p className="text-gray-600 font-medium">Generating your perfect itinerary...</p>
                                    <p className="text-sm text-gray-500 mt-1">AI sedang menganalisis preferensi Anda</p>
                                </div>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItineraryForm
