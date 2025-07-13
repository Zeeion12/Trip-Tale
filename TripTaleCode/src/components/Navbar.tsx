"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { MapPin, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import TripTaleLogo from "@/assets/TripTaleLogo.png"


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    const isActive = (path: string) => location.pathname === path

    return (
        <nav className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img src={TripTaleLogo} alt="TripTale Logo" className="h-8 w-8" />
                        <span className="text-xl font-bold text-gray-900">TripTale</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className={`flex items-center space-x-1 px-3 py-2 rounded-lg ${isActive("/") ? "text-orange-500 bg-orange-50" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                }`}
                        >
                            <MapPin className="h-4 w-4" />
                            <span>Beranda</span>
                        </Link>
                        <Link
                            to="/itinerary"
                            className={`flex items-center space-x-1 px-3 py-2 rounded-lg ${isActive("/itinerary")
                                ? "text-orange-500 bg-orange-50"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                }`}
                        >
                            <span>Buat Itinerary</span>
                        </Link>
                        <Link
                            to="/forum"
                            className={`flex items-center space-x-1 px-3 py-2 rounded-lg ${isActive("/forum")
                                ? "text-orange-500 bg-orange-50"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                }`}
                        >
                            <span>Forum</span>
                        </Link>
                    </div>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="ghost" className="text-gray-600">
                            Masuk
                        </Button>
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white">Daftar Gratis</Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t">
                        <div className="flex flex-col space-y-2">
                            <Link
                                to="/"
                                className={`px-3 py-2 rounded-lg ${isActive("/") ? "text-orange-500 bg-orange-50" : "text-gray-600 hover:bg-gray-50"
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Beranda
                            </Link>
                            <Link
                                to="/itinerary"
                                className={`px-3 py-2 rounded-lg ${isActive("/itinerary") ? "text-orange-500 bg-orange-50" : "text-gray-600 hover:bg-gray-50"
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Buat Itinerary
                            </Link>
                            <Link
                                to="/forum"
                                className={`px-3 py-2 rounded-lg ${isActive("/forum") ? "text-orange-500 bg-orange-50" : "text-gray-600 hover:bg-gray-50"
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Forum
                            </Link>
                            <div className="flex flex-col space-y-2 pt-4 border-t">
                                <Button variant="ghost" className="justify-start">
                                    Masuk
                                </Button>
                                <Button className="bg-orange-500 hover:bg-orange-600 text-white justify-start">Daftar Gratis</Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
