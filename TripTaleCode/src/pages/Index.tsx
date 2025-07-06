import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, DollarSign, Users, Star, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ItineraryForm from '@/components/ItineraryForm';
import ForumSection from '@/components/ForumSection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import Dashboard from '@/components/Dashboard';
import AdminPanel from '@/components/AdminPanel';

const Index = () => {
    const [currentView, setCurrentView] = useState('home');

    const renderContent = () => {
        switch (currentView) {
            case 'itinerary':
                return <ItineraryForm onBack={() => setCurrentView('home')} />;
            case 'forum':
                return <ForumSection onBack={() => setCurrentView('home')} />;
            case 'dashboard':
                return (
                    <Dashboard
                        onBack={() => setCurrentView('home')}
                        onCreateItinerary={() => setCurrentView('itinerary')}
                        onViewForum={() => setCurrentView('forum')}
                    />
                );
            case 'admin':
                return <AdminPanel onBack={() => setCurrentView('home')} />;
            default:
                return (
                    <>
                        <HeroSection onCreateItinerary={() => setCurrentView('itinerary')} />
                        <FeaturesSection onCreateItinerary={() => setCurrentView('itinerary')} />

                        {/* Sample Itinerary Preview */}
                        <section className="py-16 bg-gray-50">
                            <div className="container mx-auto px-4">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                        Contoh Itinerary Yogyakarta
                                    </h2>
                                    <p className="text-lg text-gray-600">
                                        Lihat bagaimana AI kami merencanakan perjalanan sempurna
                                    </p>
                                </div>

                                <div className="max-w-4xl mx-auto">
                                    <Card className="shadow-lg">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2">
                                                <MapPin className="h-5 w-5 text-orange-500" />
                                                Trip Budaya Yogyakarta - 3 Hari
                                            </CardTitle>
                                            <CardDescription>Budget: Rp 1.500.000 | Tema: Budaya & Kuliner</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                {[
                                                    {
                                                        day: "Hari 1",
                                                        activities: [
                                                            "08:00 - Candi Borobudur (Rp 50.000)",
                                                            "13:00 - Makan siang di Omah Dhuwur (Rp 75.000)",
                                                            "15:00 - Village Tour Candirejo (Rp 150.000)"
                                                        ]
                                                    },
                                                    {
                                                        day: "Hari 2",
                                                        activities: [
                                                            "09:00 - Keraton Yogyakarta (Rp 25.000)",
                                                            "11:00 - Taman Sari (Rp 15.000)",
                                                            "14:00 - Jalan Malioboro & Gudeg Yu Djum (Rp 100.000)"
                                                        ]
                                                    },
                                                    {
                                                        day: "Hari 3",
                                                        activities: [
                                                            "08:00 - Candi Prambanan (Rp 50.000)",
                                                            "12:00 - Resto Bale Raos (Rp 200.000)",
                                                            "15:00 - Oleh-oleh di Kotagede (Rp 300.000)"
                                                        ]
                                                    }
                                                ].map((day, index) => (
                                                    <div key={index} className="border-l-4 border-orange-500 pl-4">
                                                        <h4 className="font-semibold text-lg text-gray-900 mb-2">{day.day}</h4>
                                                        <ul className="space-y-1">
                                                            {day.activities.map((activity, i) => (
                                                                <li key={i} className="text-gray-600 flex items-center gap-2">
                                                                    <Clock className="h-4 w-4 text-orange-400" />
                                                                    {activity}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-6 pt-6 border-t border-gray-200">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-lg font-semibold text-gray-900">
                                                        Total Estimasi: Rp 965.000
                                                    </span>
                                                    <Button
                                                        onClick={() => setCurrentView('itinerary')}
                                                        className="bg-orange-500 hover:bg-orange-600"
                                                    >
                                                        Buat Itinerary Sendiri
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </section>

                        {/* Community Preview */}
                        <section className="py-16 bg-white">
                            <div className="container mx-auto px-4">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                        Bergabung dengan Komunitas TripTale
                                    </h2>
                                    <p className="text-lg text-gray-600">
                                        Berbagi pengalaman dan tips dengan sesama traveler
                                    </p>
                                </div>

                                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                                    <Card className="hover:shadow-lg transition-shadow">
                                        <CardHeader>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                                                    <Users className="h-5 w-5 text-orange-500" />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-lg">Sarah_Backpacker</CardTitle>
                                                    <CardDescription>2 jam yang lalu</CardDescription>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-700 mb-4">
                                                "Rekomendasi warung gudeg terenak di Jogja dong! Kemarin nyoba Yu Djum enak banget, ada yang punya rekomendasi lain?"
                                            </p>
                                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                                <span className="flex items-center gap-1">
                                                    <MessageCircle className="h-4 w-4" />
                                                    15 balasan
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Star className="h-4 w-4" />
                                                    8 likes
                                                </span>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="hover:shadow-lg transition-shadow">
                                        <CardHeader>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                    <Users className="h-5 w-5 text-blue-500" />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-lg">Dika_Wanderer</CardTitle>
                                                    <CardDescription>5 jam yang lalu</CardDescription>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-700 mb-4">
                                                "Tips hemat di Jogja: Naik Trans Jogja cuma Rp 4.000, bisa kemana-mana! Dari Malioboro ke Borobudur juga ada bus khusus."
                                            </p>
                                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                                <span className="flex items-center gap-1">
                                                    <MessageCircle className="h-4 w-4" />
                                                    23 balasan
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Star className="h-4 w-4" />
                                                    12 likes
                                                </span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div className="text-center mt-8">
                                    <Button
                                        onClick={() => setCurrentView('forum')}
                                        variant="outline"
                                        size="lg"
                                        className="border-orange-500 text-orange-500 hover:bg-orange-50"
                                    >
                                        Lihat Forum Lengkap
                                    </Button>
                                </div>
                            </div>
                        </section>

                        {/* Demo Access Section - for testing */}
                        <section className="py-16 bg-gray-100">
                            <div className="container mx-auto px-4 text-center">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Demo Access</h2>
                                <p className="text-gray-600 mb-6">Untuk keperluan testing dan demo</p>
                                <div className="flex justify-center gap-4">
                                    <Button
                                        onClick={() => setCurrentView('dashboard')}
                                        className="bg-blue-500 hover:bg-blue-600 text-white"
                                    >
                                        Lihat Dashboard
                                    </Button>
                                    <Button
                                        onClick={() => setCurrentView('admin')}
                                        className="bg-purple-500 hover:bg-purple-600 text-white"
                                    >
                                        Admin Panel
                                    </Button>
                                </div>
                            </div>
                        </section>
                    </>
                );
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar currentView={currentView} onNavigate={setCurrentView} />
            {renderContent()}
            <Footer />
        </div>
    );
};

export default Index;
