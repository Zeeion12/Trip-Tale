
import { Button } from '@/components/ui/button';
import { MapPin, Sparkles, Users } from 'lucide-react';

interface HeroSectionProps {
    onCreateItinerary: () => void;
}

const HeroSection = ({ onCreateItinerary }: HeroSectionProps) => {
    return (
        <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 py-20">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-32 right-20 w-16 h-16 bg-red-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-200 rounded-full opacity-20 animate-pulse delay-500"></div>
            </div>

            <div className="container mx-auto px-4 relative">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm">
                        <Sparkles className="h-4 w-4 text-orange-500" />
                        <span className="text-sm font-medium text-gray-700">
                            Platform #1 untuk Traveler Yogyakarta
                        </span>
                    </div>

                    {/* Main heading */}
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        TripTale: Itinerary{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                            Otomatis
                        </span>{' '}
                        untuk Petualanganmu!
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Masukkan destinasi dan preferensi, dapatkan rencana perjalanan instan yang dipersonalisasi dengan AI.
                        Bergabung dengan komunitas traveler Yogyakarta!
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-8 mb-10 text-center">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                                <MapPin className="h-5 w-5 text-orange-500" />
                            </div>
                            <div className="text-left">
                                <div className="text-2xl font-bold text-gray-900">500+</div>
                                <div className="text-sm text-gray-600">Destinasi</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <Users className="h-5 w-5 text-blue-500" />
                            </div>
                            <div className="text-left">
                                <div className="text-2xl font-bold text-gray-900">1,200+</div>
                                <div className="text-sm text-gray-600">Traveler Aktif</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <Sparkles className="h-5 w-5 text-green-500" />
                            </div>
                            <div className="text-left">
                                <div className="text-2xl font-bold text-gray-900">3,000+</div>
                                <div className="text-sm text-gray-600">Itinerary Dibuat</div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <Button
                            onClick={onCreateItinerary}
                            size="lg"
                            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            <Sparkles className="h-5 w-5 mr-2" />
                            Buat Itinerary Gratis
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500 px-8 py-3 text-lg font-semibold transition-all duration-300"
                        >
                            Lihat Contoh Itinerary
                        </Button>
                    </div>

                    {/* Trust indicators */}
                    <div className="text-center">
                        <p className="text-sm text-gray-500 mb-4">Dipercaya oleh traveler dari:</p>
                        <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
                            <span className="text-sm font-medium text-gray-600">Komunitas Jogja Backpacking</span>
                            <span className="text-sm font-medium text-gray-600">Solo Traveler Indonesia</span>
                            <span className="text-sm font-medium text-gray-600">Backpacker Nusantara</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
