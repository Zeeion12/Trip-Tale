
import { MapPin, MessageCircle, Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                                <MapPin className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-xl font-bold">TripTale</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Platform komunitas traveler untuk berbagi itinerary dan mengeksplorasi budaya lokal Yogyakarta bersama UMKM terpercaya.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                                <MessageCircle className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Fitur */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Fitur Utama</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Itinerary AI</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Forum Komunitas</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Template Itinerary</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Konten Budaya</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">UMKM Partner</a></li>
                        </ul>
                    </div>

                    {/* Destinasi */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Destinasi</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Yogyakarta</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Candi Borobudur</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Candi Prambanan</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Malioboro Street</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Pantai Parangtritis</a></li>
                        </ul>
                    </div>

                    {/* Kontak */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
                        <div className="space-y-3 text-sm text-gray-300">
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-orange-400" />
                                <span>hello@triptale.id</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-orange-400" />
                                <span>+62 812-3456-7890</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Instagram className="h-4 w-4 text-orange-400" />
                                <span>@TripTaleID</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h4 className="font-medium mb-2">Newsletter</h4>
                            <p className="text-xs text-gray-400 mb-3">
                                Dapatkan tips travel dan update terbaru
                            </p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Email kamu"
                                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm focus:outline-none focus:border-orange-500"
                                />
                                <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-r-lg transition-colors">
                                    <span className="text-sm font-medium">Subscribe</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400">
                        © 2024 TripTale. Semua hak dilindungi undang-undang.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
                            Syarat & Ketentuan
                        </a>
                        <a href="#" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
                            Kebijakan Privasi
                        </a>
                        <a href="#" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
                            Bantuan
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
