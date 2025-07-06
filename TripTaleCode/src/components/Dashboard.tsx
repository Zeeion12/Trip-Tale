
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MapPin, Clock, Users, Star, MessageCircle, Plus, Calendar, DollarSign, Crown, Edit, Trash2 } from 'lucide-react';

interface DashboardProps {
    onBack: () => void;
    onCreateItinerary: () => void;
    onViewForum: () => void;
}

interface SavedItinerary {
    id: string;
    title: string;
    destination: string;
    duration: string;
    budget: string;
    theme: string;
    createdAt: string;
    totalCost: number;
}

const Dashboard = ({ onBack, onCreateItinerary, onViewForum }: DashboardProps) => {
    const [activeTab, setActiveTab] = useState('overview');

    // Mock data - in real app this would come from backend
    const [savedItineraries] = useState<SavedItinerary[]>([
        {
            id: '1',
            title: 'Trip Budaya Yogyakarta',
            destination: 'Yogyakarta',
            duration: '3 hari',
            budget: 'Rp 1.500.000',
            theme: 'Budaya & Sejarah',
            createdAt: '2 hari lalu',
            totalCost: 965000
        },
        {
            id: '2',
            title: 'Kuliner Tour Jogja',
            destination: 'Yogyakarta',
            duration: '2 hari',
            budget: 'Rp 800.000',
            theme: 'Kuliner & Gastronomi',
            createdAt: '1 minggu lalu',
            totalCost: 650000
        }
    ]);

    const [userStats] = useState({
        totalItineraries: 12,
        forumPosts: 8,
        likes: 45,
        following: 23,
        followers: 67
    });

    const [recentActivity] = useState([
        { type: 'itinerary', action: 'Membuat itinerary baru "Trip Budaya Yogyakarta"', time: '2 jam lalu' },
        { type: 'forum', action: 'Berkomentar di "Tips hemat di Jogja"', time: '5 jam lalu' },
        { type: 'like', action: 'Menyukai postingan Sarah_Backpacker', time: '1 hari lalu' },
        { type: 'follow', action: 'Mengikuti Dika_Wanderer', time: '2 hari lalu' }
    ]);

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            onClick={onBack}
                            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Kembali
                        </Button>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                            <p className="text-gray-600">Kelola perjalanan dan aktivitas Anda</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Button onClick={onCreateItinerary} className="bg-orange-500 hover:bg-orange-600">
                            <Plus className="h-4 w-4 mr-2" />
                            Buat Itinerary
                        </Button>
                        <Button onClick={onViewForum} variant="outline">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Forum
                        </Button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                    <Card>
                        <CardContent className="p-4 text-center">
                            <MapPin className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-gray-900">{userStats.totalItineraries}</div>
                            <div className="text-sm text-gray-600">Itinerary</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-4 text-center">
                            <MessageCircle className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-gray-900">{userStats.forumPosts}</div>
                            <div className="text-sm text-gray-600">Postingan</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-4 text-center">
                            <Star className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-gray-900">{userStats.likes}</div>
                            <div className="text-sm text-gray-600">Likes</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-4 text-center">
                            <Users className="h-6 w-6 text-green-500 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-gray-900">{userStats.followers}</div>
                            <div className="text-sm text-gray-600">Followers</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-4 text-center">
                            <Users className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-gray-900">{userStats.following}</div>
                            <div className="text-sm text-gray-600">Following</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Navigation Tabs */}
                <div className="border-b border-gray-200 mb-8">
                    <nav className="-mb-px flex space-x-8">
                        {[
                            { id: 'overview', label: 'Overview' },
                            { id: 'itineraries', label: 'Itinerary Saya' },
                            { id: 'activity', label: 'Aktivitas Terbaru' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === tab.id
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Tab Content */}
                {activeTab === 'overview' && (
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Quick Actions */}
                        <div className="lg:col-span-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Quick Actions</CardTitle>
                                    <CardDescription>Aksi cepat untuk memulai petualangan baru</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <Button onClick={onCreateItinerary} className="h-20 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                                            <div className="text-center">
                                                <MapPin className="h-6 w-6 mx-auto mb-2" />
                                                <div className="font-semibold">Buat Itinerary AI</div>
                                                <div className="text-xs opacity-90">Rencana perjalanan otomatis</div>
                                            </div>
                                        </Button>

                                        <Button onClick={onViewForum} variant="outline" className="h-20 border-blue-200 hover:bg-blue-50">
                                            <div className="text-center text-blue-600">
                                                <MessageCircle className="h-6 w-6 mx-auto mb-2" />
                                                <div className="font-semibold">Jelajahi Forum</div>
                                                <div className="text-xs opacity-70">Berbagi tips & cerita</div>
                                            </div>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Recent Itineraries */}
                            <Card className="mt-6">
                                <CardHeader>
                                    <CardTitle>Itinerary Terbaru</CardTitle>
                                    <CardDescription>Rencana perjalanan yang baru saja Anda buat</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {savedItineraries.slice(0, 2).map((itinerary) => (
                                            <div key={itinerary.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                                        <MapPin className="h-6 w-6 text-orange-500" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-gray-900">{itinerary.title}</h4>
                                                        <p className="text-sm text-gray-600">
                                                            {itinerary.duration} • {itinerary.theme} • {itinerary.createdAt}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Badge variant="secondary">Rp {itinerary.totalCost.toLocaleString('id-ID')}</Badge>
                                                    <Button variant="ghost" size="sm">
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Premium Upgrade */}
                            <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
                                <CardContent className="p-6 text-center">
                                    <Crown className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Upgrade Premium</h3>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Unlimited itinerary, fitur eksklusif, dan lebih banyak kustomisasi
                                    </p>
                                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                                        Mulai Rp 50.000/bulan
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Community Activity */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Aktivitas Komunitas</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <Users className="h-4 w-4 text-blue-500" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-900">Sarah_Backpacker bertanya tentang warung gudeg</p>
                                            <p className="text-xs text-gray-500">5 menit lalu</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                            <Star className="h-4 w-4 text-green-500" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-900">Postingan Anda mendapat 3 likes baru</p>
                                            <p className="text-xs text-gray-500">1 jam lalu</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                )}

                {activeTab === 'itineraries' && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold text-gray-900">Semua Itinerary ({savedItineraries.length})</h2>
                            <Button onClick={onCreateItinerary} className="bg-orange-500 hover:bg-orange-600">
                                <Plus className="h-4 w-4 mr-2" />
                                Buat Baru
                            </Button>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {savedItineraries.map((itinerary) => (
                                <Card key={itinerary.id} className="hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <CardTitle className="text-lg">{itinerary.title}</CardTitle>
                                                <CardDescription className="flex items-center gap-2 mt-2">
                                                    <MapPin className="h-4 w-4" />
                                                    {itinerary.destination}
                                                </CardDescription>
                                            </div>
                                            <div className="flex gap-1">
                                                <Button variant="ghost" size="sm">
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                                <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="flex items-center gap-2 text-gray-600">
                                                    <Clock className="h-4 w-4" />
                                                    {itinerary.duration}
                                                </span>
                                                <span className="flex items-center gap-2 text-gray-600">
                                                    <DollarSign className="h-4 w-4" />
                                                    {itinerary.budget}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <Badge variant="secondary">{itinerary.theme}</Badge>
                                            </div>

                                            <div className="pt-3 border-t border-gray-200">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm font-medium">Total: Rp {itinerary.totalCost.toLocaleString('id-ID')}</span>
                                                    <span className="text-xs text-gray-500">{itinerary.createdAt}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'activity' && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-900">Aktivitas Terbaru</h2>

                        <Card>
                            <CardContent className="p-6">
                                <div className="space-y-6">
                                    {recentActivity.map((activity, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100">
                                                {activity.type === 'itinerary' && <MapPin className="h-4 w-4 text-orange-500" />}
                                                {activity.type === 'forum' && <MessageCircle className="h-4 w-4 text-blue-500" />}
                                                {activity.type === 'like' && <Star className="h-4 w-4 text-yellow-500" />}
                                                {activity.type === 'follow' && <Users className="h-4 w-4 text-green-500" />}
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-gray-900">{activity.action}</p>
                                                <p className="text-sm text-gray-500">{activity.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
