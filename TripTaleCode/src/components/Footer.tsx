import { MapPin, Mail, Phone, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Demo Access Section */}
            <div className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Demo Access</h2>
                    <p className="text-gray-600 mb-8">Untuk keperluan testing dan demo</p>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3">Lihat Dashboard</Button>
                        <Button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3">Admin Panel</Button>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div className="col-span-1">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="bg-orange-500 p-2 rounded-lg">
                                    <MapPin className="h-6 w-6 text-white" />
                                </div>
                                <span className="text-xl font-bold">TripTale</span>
                            </div>
                            <p className="text-gray-400 mb-6">
                                Platform komunitas traveler untuk berbagi itinerary dan mengeksplorasi budaya lokal Yogyakarta bersama
                                UMKM terpercaya.
                            </p>
                            <div className="flex space-x-4">
                                <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                                <Mail className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                                <Phone className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                            </div>
                        </div>

                        {/* Features */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Fitur Utama</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Itinerary AI
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Forum Komunitas
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Template Itinerary
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Konten Budaya
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        UMKM Partner
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Destinations */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Destinasi</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Yogyakarta
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Candi Borobudur
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Candi Prambanan
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Malioboro Street
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Pantai Parangtritis
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact & Newsletter */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
                            <div className="space-y-3 text-gray-400 mb-6">
                                <div className="flex items-center space-x-2">
                                    <Mail className="h-4 w-4" />
                                    <span>triptaleidn@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Phone className="h-4 w-4" />
                                    <span>+62 812-3456-7890</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Instagram className="h-4 w-4" />
                                    <span>@TripTaleID</span>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold mb-3">Newsletter</h4>
                                <p className="text-gray-400 text-sm mb-3">Dapatkan tips travel dan update terbaru</p>
                                <div className="flex space-x-2">
                                    <Input
                                        placeholder="Email kamu"
                                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                                    />
                                    <Button className="bg-orange-500 hover:bg-orange-600">Subscribe</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 TripTale. All rights reserved. Made with ❤️ for Indonesian travelers.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
