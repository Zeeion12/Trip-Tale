
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, MessageCircle, Edit3, Globe, Clock, Shield } from 'lucide-react';

interface FeaturesSectionProps {
    onCreateItinerary: () => void;
}

const FeaturesSection = ({ onCreateItinerary }: FeaturesSectionProps) => {
    const features = [
        {
            icon: Bot,
            title: "Itinerary AI",
            description: "Rencana perjalanan otomatis berdasarkan preferensi, budget, dan durasi trip kamu",
            color: "orange",
            benefits: ["Gratis 1x/hari", "Premium unlimited", "Kustomisasi lengkap"]
        },
        {
            icon: MessageCircle,
            title: "Forum Komunitas",
            description: "Berbagi tips, cerita, dan rekomendasi dengan sesama traveler Yogyakarta",
            color: "blue",
            benefits: ["Tips dari local", "Q&A real-time", "Sharing pengalaman"]
        },
        {
            icon: Edit3,
            title: "Template Itinerary",
            description: "Edit dan kustomisasi itinerary sesuai kebutuhan perjalanan kamu",
            color: "green",
            benefits: ["Easy editing", "Save & share", "Export PDF"]
        },
        {
            icon: Globe,
            title: "Konten Budaya",
            description: "Artikel dan video tentang budaya lokal Yogyakarta untuk pengalaman autentik",
            color: "purple",
            benefits: ["Cerita sejarah", "Tips budaya", "Hidden gems"]
        }
    ];

    const getColorClasses = (color: string) => {
        const colors = {
            orange: "bg-orange-100 text-orange-500 border-orange-200",
            blue: "bg-blue-100 text-blue-500 border-blue-200",
            green: "bg-green-100 text-green-500 border-green-200",
            purple: "bg-purple-100 text-purple-500 border-purple-200"
        };
        return colors[color as keyof typeof colors] || colors.orange;
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Fitur Unggulan TripTale
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Semua yang kamu butuhkan untuk merencanakan perjalanan sempurna di Yogyakarta
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-orange-200">
                                <CardHeader className="text-center pb-4">
                                    <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${getColorClasses(feature.color)} transition-all duration-300 group-hover:scale-110`}>
                                        <Icon className="h-8 w-8" />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                                        {feature.title}
                                    </CardTitle>
                                    <CardDescription className="text-gray-600 text-sm leading-relaxed">
                                        {feature.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <ul className="space-y-2">
                                        {feature.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-center text-sm text-gray-600">
                                                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Value propositions */}
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-16">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                                <Clock className="h-6 w-6 text-orange-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Hemat Waktu</h3>
                            <p className="text-gray-600 text-sm">
                                Buat itinerary dalam 2 menit, tidak perlu riset berjam-jam
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <Shield className="h-6 w-6 text-blue-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Terpercaya</h3>
                            <p className="text-gray-600 text-sm">
                                Rekomendasi dari komunitas traveler berpengalaman
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <Globe className="h-6 w-6 text-green-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Lokal & Autentik</h3>
                            <p className="text-gray-600 text-sm">
                                Jelajahi Yogyakarta seperti penduduk lokal
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Siap Memulai Petualangan?
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        Bergabung dengan ribuan traveler yang sudah merasakan kemudahan TripTale
                    </p>
                    <Button
                        onClick={onCreateItinerary}
                        size="lg"
                        className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Mulai Buat Itinerary
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
