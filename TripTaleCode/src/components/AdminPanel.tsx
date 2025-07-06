
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft, Users, MapPin, MessageCircle, DollarSign, TrendingUp, Eye, Edit, Trash2, Search, Filter, Download, Plus } from 'lucide-react';

interface AdminPanelProps {
    onBack: () => void;
}

interface User {
    id: string;
    name: string;
    email: string;
    type: 'free' | 'premium';
    joinDate: string;
    lastActive: string;
    itineraries: number;
    posts: number;
}

interface Itinerary {
    id: string;
    title: string;
    user: string;
    destination: string;
    duration: string;
    budget: number;
    status: 'active' | 'archived' | 'reported';
    createdAt: string;
    views: number;
}

interface ForumPost {
    id: string;
    title: string;
    author: string;
    category: string;
    replies: number;
    likes: number;
    status: 'active' | 'hidden' | 'reported';
    createdAt: string;
}

const AdminPanel = ({ onBack }: AdminPanelProps) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [searchTerm, setSearchTerm] = useState('');

    // Mock data - in real app this would come from backend
    const [stats] = useState({
        totalUsers: 1247,
        premiumUsers: 89,
        totalItineraries: 3456,
        totalPosts: 2134,
        monthlyRevenue: 4450000,
        activeUsers: 892
    });

    const [users] = useState<User[]>([
        {
            id: '1',
            name: 'Sarah Backpacker',
            email: 'sarah@email.com',
            type: 'premium',
            joinDate: '2024-01-15',
            lastActive: '2 jam lalu',
            itineraries: 12,
            posts: 8
        },
        {
            id: '2',
            name: 'Dika Wanderer',
            email: 'dika@email.com',
            type: 'free',
            joinDate: '2024-02-20',
            lastActive: '1 hari lalu',
            itineraries: 5,
            posts: 15
        },
        {
            id: '3',
            name: 'Maya Explorer',
            email: 'maya@email.com',
            type: 'premium',
            joinDate: '2024-01-08',
            lastActive: '5 menit lalu',
            itineraries: 18,
            posts: 23
        }
    ]);

    const [itineraries] = useState<Itinerary[]>([
        {
            id: '1',
            title: 'Trip Budaya Yogyakarta 3 Hari',
            user: 'Sarah Backpacker',
            destination: 'Yogyakarta',
            duration: '3 hari',
            budget: 1500000,
            status: 'active',
            createdAt: '2024-06-25',
            views: 156
        },
        {
            id: '2',
            title: 'Kuliner Tour Jogja Weekend',
            user: 'Dika Wanderer',
            destination: 'Yogyakarta',
            duration: '2 hari',
            budget: 800000,
            status: 'active',
            createdAt: '2024-06-24',
            views: 89
        }
    ]);

    const [forumPosts] = useState<ForumPost[]>([
        {
            id: '1',
            title: 'Rekomendasi warung gudeg terenak di Jogja',
            author: 'Sarah Backpacker',
            category: 'Kuliner',
            replies: 15,
            likes: 8,
            status: 'active',
            createdAt: '2024-06-25'
        },
        {
            id: '2',
            title: 'Tips hemat berkeliling Yogyakarta',
            author: 'Dika Wanderer',
            category: 'Tips Travel',
            replies: 23,
            likes: 12,
            status: 'active',
            createdAt: '2024-06-24'
        }
    ]);

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'active':
                return <Badge className="bg-green-100 text-green-800">Aktif</Badge>;
            case 'premium':
                return <Badge className="bg-orange-100 text-orange-800">Premium</Badge>;
            case 'free':
                return <Badge variant="secondary">Free</Badge>;
            case 'reported':
                return <Badge className="bg-red-100 text-red-800">Dilaporkan</Badge>;
            case 'hidden':
                return <Badge className="bg-gray-100 text-gray-800">Disembunyikan</Badge>;
            default:
                return <Badge variant="secondary">{status}</Badge>;
        }
    };

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
                            <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
                            <p className="text-gray-600">Kelola pengguna, konten, dan sistem TripTale</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Button variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Export Data
                        </Button>
                        <Button className="bg-orange-500 hover:bg-orange-600">
                            <Plus className="h-4 w-4 mr-2" />
                            Tambah Admin
                        </Button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                    <Card>
                        <CardContent className="p-4 text-center">
                            <Users className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</div>
                            <div className="text-sm text-gray-600">Total Users</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-4 text-center">
                            <Users className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-gray-900">{stats.premiumUsers}</div>
                            <div className="text-sm text-gray-600">Premium</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-4 text-center">
                            <MapPin className="h-6 w-6 text-green-500 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-gray-900">{stats.totalItineraries.toLocaleString()}</div>
                            <div className="text-sm text-gray-600">Itineraries</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-4 text-center">
                            <MessageCircle className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-gray-900">{stats.totalPosts.toLocaleString()}</div>
                            <div className="text-sm text-gray-600">Forum Posts</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-4 text-center">
                            <DollarSign className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-gray-900">Rp {(stats.monthlyRevenue / 1000000).toFixed(1)}M</div>
                            <div className="text-sm text-gray-600">Revenue/Bulan</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-4 text-center">
                            <TrendingUp className="h-6 w-6 text-red-500 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-gray-900">{stats.activeUsers}</div>
                            <div className="text-sm text-gray-600">Active Users</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Navigation Tabs */}
                <div className="border-b border-gray-200 mb-8">
                    <nav className="-mb-px flex space-x-8">
                        {[
                            { id: 'overview', label: 'Overview' },
                            { id: 'users', label: 'Pengguna' },
                            { id: 'itineraries', label: 'Itineraries' },
                            { id: 'forum', label: 'Forum' },
                            { id: 'analytics', label: 'Analytics' }
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
                        <div className="lg:col-span-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Aktivitas Terbaru</CardTitle>
                                    <CardDescription>Aktivitas sistem dalam 24 jam terakhir</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg">
                                            <Users className="h-5 w-5 text-green-500" />
                                            <div>
                                                <p className="font-medium text-gray-900">15 pendaftaran baru</p>
                                                <p className="text-sm text-gray-600">5 premium, 10 free users</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
                                            <MapPin className="h-5 w-5 text-blue-500" />
                                            <div>
                                                <p className="font-medium text-gray-900">89 itinerary baru dibuat</p>
                                                <p className="text-sm text-gray-600">Mayoritas untuk Yogyakarta</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 p-3 bg-purple-50 rounded-lg">
                                            <MessageCircle className="h-5 w-5 text-purple-500" />
                                            <div>
                                                <p className="font-medium text-gray-900">156 postingan forum</p>
                                                <p className="text-sm text-gray-600">45 diskusi baru dimulai</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Quick Actions</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <Button className="w-full justify-start" variant="outline">
                                        <Users className="h-4 w-4 mr-2" />
                                        Kelola Pengguna
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline">
                                        <MessageCircle className="h-4 w-4 mr-2" />
                                        Moderasi Forum
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline">
                                        <TrendingUp className="h-4 w-4 mr-2" />
                                        Lihat Analytics
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                )}

                {activeTab === 'users' && (
                    <div className="space-y-6">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <h2 className="text-xl font-semibold text-gray-900">Manajemen Pengguna</h2>
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                                    <Input
                                        placeholder="Cari pengguna..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="pl-10 w-64"
                                    />
                                </div>
                                <Button variant="outline">
                                    <Filter className="h-4 w-4 mr-2" />
                                    Filter
                                </Button>
                            </div>
                        </div>

                        <Card>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Pengguna</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Tipe</TableHead>
                                        <TableHead>Bergabung</TableHead>
                                        <TableHead>Aktivitas</TableHead>
                                        <TableHead>Konten</TableHead>
                                        <TableHead>Aksi</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {users.map((user) => (
                                        <TableRow key={user.id}>
                                            <TableCell>
                                                <div>
                                                    <div className="font-medium text-gray-900">{user.name}</div>
                                                    <div className="text-sm text-gray-500">ID: {user.id}</div>
                                                </div>
                                            </TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>{getStatusBadge(user.type)}</TableCell>
                                            <TableCell>{user.joinDate}</TableCell>
                                            <TableCell>{user.lastActive}</TableCell>
                                            <TableCell>
                                                <div className="text-sm">
                                                    <div>{user.itineraries} itinerary</div>
                                                    <div>{user.posts} post</div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Button variant="ghost" size="sm">
                                                        <Eye className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="ghost" size="sm">
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>
                )}

                {activeTab === 'itineraries' && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold text-gray-900">Manajemen Itineraries</h2>
                            <div className="flex items-center gap-3">
                                <Input placeholder="Cari itinerary..." className="w-64" />
                                <Button variant="outline">
                                    <Filter className="h-4 w-4 mr-2" />
                                    Filter
                                </Button>
                            </div>
                        </div>

                        <Card>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Judul</TableHead>
                                        <TableHead>Pembuat</TableHead>
                                        <TableHead>Destinasi</TableHead>
                                        <TableHead>Durasi</TableHead>
                                        <TableHead>Budget</TableHead>
                                        <TableHead>Views</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Aksi</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {itineraries.map((itinerary) => (
                                        <TableRow key={itinerary.id}>
                                            <TableCell>
                                                <div className="font-medium text-gray-900">{itinerary.title}</div>
                                                <div className="text-sm text-gray-500">{itinerary.createdAt}</div>
                                            </TableCell>
                                            <TableCell>{itinerary.user}</TableCell>
                                            <TableCell>{itinerary.destination}</TableCell>
                                            <TableCell>{itinerary.duration}</TableCell>
                                            <TableCell>Rp {itinerary.budget.toLocaleString('id-ID')}</TableCell>
                                            <TableCell>{itinerary.views}</TableCell>
                                            <TableCell>{getStatusBadge(itinerary.status)}</TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Button variant="ghost" size="sm">
                                                        <Eye className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="ghost" size="sm">
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>
                )}

                {activeTab === 'forum' && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold text-gray-900">Moderasi Forum</h2>
                            <div className="flex items-center gap-3">
                                <Input placeholder="Cari postingan..." className="w-64" />
                                <Button variant="outline">
                                    <Filter className="h-4 w-4 mr-2" />
                                    Filter
                                </Button>
                            </div>
                        </div>

                        <Card>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Judul</TableHead>
                                        <TableHead>Penulis</TableHead>
                                        <TableHead>Kategori</TableHead>
                                        <TableHead>Balasan</TableHead>
                                        <TableHead>Likes</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Tanggal</TableHead>
                                        <TableHead>Aksi</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {forumPosts.map((post) => (
                                        <TableRow key={post.id}>
                                            <TableCell>
                                                <div className="font-medium text-gray-900">{post.title}</div>
                                            </TableCell>
                                            <TableCell>{post.author}</TableCell>
                                            <TableCell>
                                                <Badge variant="secondary">{post.category}</Badge>
                                            </TableCell>
                                            <TableCell>{post.replies}</TableCell>
                                            <TableCell>{post.likes}</TableCell>
                                            <TableCell>{getStatusBadge(post.status)}</TableCell>
                                            <TableCell>{post.createdAt}</TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Button variant="ghost" size="sm">
                                                        <Eye className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="ghost" size="sm">
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>
                )}

                {activeTab === 'analytics' && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-900">Analytics & Reports</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Pertumbuhan Pengguna</CardTitle>
                                    <CardDescription>30 hari terakhir</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                                        <p className="text-gray-500">Chart akan ditampilkan di sini</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Revenue Trend</CardTitle>
                                    <CardDescription>6 bulan terakhir</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                                        <p className="text-gray-500">Chart akan ditampilkan di sini</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminPanel;
