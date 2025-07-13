"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Mail, Users, Sparkles, CheckCircle, ArrowRight } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function EmailCapture() {
    const [email, setEmail] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubscribed, setIsSubscribed] = useState(false)
    const { toast } = useToast()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!email || !email.includes("@")) {
            toast({
                title: "Email tidak valid",
                description: "Masukkan alamat email yang benar",
                variant: "destructive",
            })
            return
        }

        setIsSubmitting(true)

        try {
            // Simulate API call - replace with actual email service
            await new Promise((resolve) => setTimeout(resolve, 1500))

            // Store in localStorage for demo (replace with actual service)
            const subscribers = JSON.parse(localStorage.getItem("triptale_subscribers") || "[]")
            subscribers.push({
                email,
                timestamp: new Date().toISOString(),
                source: "landing_page",
            })
            localStorage.setItem("triptale_subscribers", JSON.stringify(subscribers))

            setIsSubscribed(true)
            toast({
                title: "🎉 Berhasil bergabung!",
                description: "Kami akan mengirim update eksklusif ke email Anda",
            })
        } catch (error) {
            toast({
                title: "Gagal mendaftar",
                description: "Coba lagi dalam beberapa saat",
                variant: "destructive",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSubscribed) {
        return (
            <section className="py-16 bg-gradient-to-r from-orange-50 via-red-50 to-pink-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-orange-100">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">🎉 Selamat! Anda sudah terdaftar</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Terima kasih telah bergabung dengan <strong>1,247+ traveler</strong> yang menunggu TripTale!
                        </p>
                        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                            <p className="text-orange-800 font-medium">
                                📧 Cek email Anda untuk konfirmasi dan dapatkan akses early bird!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="py-16 bg-gradient-to-r from-orange-50 via-red-50 to-pink-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <Badge className="bg-orange-100 text-orange-800 px-4 py-2 text-sm font-medium mb-4">
                        🚀 Coming Soon - Early Access
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Jadilah yang <span className="text-orange-500">Pertama</span>
                        <br />
                        Merasakan TripTale AI!
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Bergabung dengan <strong>1,200+ traveler</strong> yang sudah mendaftar untuk mendapatkan akses eksklusif ke
                        platform AI itinerary terdepan di Indonesia
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Benefits */}
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <Sparkles className="h-6 w-6 text-orange-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Early Bird Discount 50%</h3>
                                <p className="text-gray-600">
                                    Dapatkan akses premium dengan harga spesial hanya Rp 25.000/bulan (normal Rp 50.000)
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <Users className="h-6 w-6 text-blue-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Exclusive Beta Access</h3>
                                <p className="text-gray-600">
                                    Jadi yang pertama mencoba fitur AI terbaru dan berikan feedback langsung ke tim developer
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <Mail className="h-6 w-6 text-green-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Travel Tips Eksklusif</h3>
                                <p className="text-gray-600">
                                    Dapatkan tips travel, hidden gems, dan panduan lengkap Yogyakarta langsung di inbox Anda
                                </p>
                            </div>
                        </div>

                        {/* Social Proof */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <div
                                            key={i}
                                            className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                                        >
                                            {String.fromCharCode(64 + i)}
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">1,247+ traveler sudah bergabung</p>
                                    <p className="text-xs text-gray-500">Dari Jakarta, Surabaya, Bandung, dan kota lainnya</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 italic">
                                "Gak sabar nyoba AI itinerary-nya! Pasti bakal memudahkan planning trip ke Jogja"
                                <span className="font-medium">- Sarah, Jakarta</span>
                            </p>
                        </div>
                    </div>

                    {/* Right: Email Form */}
                    <Card className="shadow-2xl border-0 bg-white">
                        <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
                            <CardTitle className="text-2xl text-center">🎯 Daftar Sekarang - GRATIS!</CardTitle>
                            <p className="text-orange-100 text-center">Dapatkan notifikasi pertama saat TripTale launch</p>
                        </CardHeader>
                        <CardContent className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <Input
                                        type="email"
                                        placeholder="nama@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="h-12 text-lg"
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-12 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold text-lg"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                            Mendaftarkan...
                                        </>
                                    ) : (
                                        <>
                                            Daftar Sekarang
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </>
                                    )}
                                </Button>

                                <div className="text-center space-y-3">
                                    <p className="text-xs text-gray-500">
                                        Dengan mendaftar, Anda setuju dengan Terms of Service dan Privacy Policy kami
                                    </p>

                                    <div className="flex items-center justify-center space-x-4 text-xs text-gray-400">
                                        <span>✅ No Spam</span>
                                        <span>✅ Unsubscribe Anytime</span>
                                        <span>✅ Data Aman</span>
                                    </div>
                                </div>
                            </form>

                            {/* Urgency */}
                            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                <p className="text-sm text-red-800 text-center font-medium">
                                    ⏰ <strong>Limited Time:</strong> Hanya 500 slot tersisa untuk early access!
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
