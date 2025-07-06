"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MessageCircle, Heart, Share2, Search, Plus, MapPin, Camera, Utensils } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ForumSectionProps {
    onBack: () => void
}

interface ForumPost {
    id: string
    author: string
    avatar: string
    title: string
    content: string
    category: string
    timeAgo: string
    likes: number
    replies: number
    tags: string[]
    isLiked?: boolean
}

const ForumSection = ({ onBack }: ForumSectionProps) => {
    const { toast } = useToast()
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [showNewPost, setShowNewPost] = useState(false)
    const [newPostData, setNewPostData] = useState({
        title: "",
        content: "",
        category: "tips",
        tags: "",
    })

    const categories = [
        { id: "all", label: "Semua", icon: MessageCircle },
        { id: "tips", label: "Tips & Trick", icon: MapPin },
        { id: "review", label: "Review Tempat", icon: Camera },
        { id: "kuliner", label: "Kuliner", icon: Utensils },
        { id: "transportasi", label: "Transportasi", icon: MapPin },
    ]

    const [forumPosts, setForumPosts] = useState<ForumPost[]>([
        {
            id: "1",
            author: "Sarah_Backpacker",
            avatar: "SB",
            title: "Rekomendasi warung gudeg terenak di Jogja",
            content:
                "Halo teman-teman! Kemarin habis keliling Jogja dan nyoba beberapa warung gudeg. Yu Djum memang enak, tapi ada hidden gem lain nih... Warung Gudeg Pawon di Gang kecil dekat Malioboro, porsinya gede dan rasanya authentic banget! Ada yang pernah coba?",
            category: "kuliner",
            timeAgo: "2 jam lalu",
            likes: 15,
            replies: 8,
            tags: ["gudeg", "kuliner", "malioboro"],
            isLiked: false,
        },
        {
            id: "2",
            author: "Dika_Wanderer",
            avatar: "DW",
            title: "Tips hemat transportasi di Yogyakarta",
            content:
                "Sharing nih buat yang mau hemat budget transport di Jogja:\n\n1. Trans Jogja cuma Rp 4.000 bisa kemana-mana\n2. Dari Malioboro ke Borobudur ada bus khusus Rp 15.000\n3. Grab bike lebih murah dari taksi\n4. Sepeda di area Malioboro bisa sewa Rp 20.000/hari\n\nAda tips lain ga guys?",
            category: "tips",
            timeAgo: "5 jam lalu",
            likes: 23,
            replies: 12,
            tags: ["transport", "hemat", "tips"],
            isLiked: true,
        },
        {
            id: "3",
            author: "Maya_Solo",
            avatar: "MS",
            title: "Sunrise terbaik di Borobudur, worth it ga sih?",
            content:
                "Planning mau liat sunrise di Borobudur, tapi harus bangun jam 4 pagi dan bayar ekstra. Yang udah pernah, worth it ga ya? Atau mending pagi biasa aja? Share pengalaman dong!",
            category: "review",
            timeAgo: "1 hari lalu",
            likes: 7,
            replies: 15,
            tags: ["borobudur", "sunrise", "review"],
            isLiked: false,
        },
        {
            id: "4",
            author: "Budi_Explorer",
            avatar: "BE",
            title: "Itinerary 3D2N Jogja budget 800rb, possible?",
            content:
                "Ada yang punya pengalaman trip ke Jogja 3D2N dengan budget total 800rb? Termasuk akomodasi, makan, dan tiket masuk. Sharing dong itinerary dan tipsnya! Terutama untuk homestay murah yang recommended.",
            category: "tips",
            timeAgo: "2 hari lalu",
            likes: 31,
            replies: 24,
            tags: ["budget", "itinerary", "3d2n"],
            isLiked: false,
        },
    ])

    const filteredPosts = forumPosts.filter((post) => {
        const matchesSearch =
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    const handleLike = (postId: string) => {
        setForumPosts((posts) =>
            posts.map((post) =>
                post.id === postId
                    ? {
                        ...post,
                        isLiked: !post.isLiked,
                        likes: post.isLiked ? post.likes - 1 : post.likes + 1,
                    }
                    : post,
            ),
        )
    }

    const handleSubmitPost = () => {
        if (!newPostData.title.trim() || !newPostData.content.trim()) {
            toast({
                title: "Error",
                description: "Judul dan konten harus diisi",
                variant: "destructive",
            })
            return
        }

        const newPost: ForumPost = {
            id: Date.now().toString(),
            author: "Anonymous_User",
            avatar: "AU",
            title: newPostData.title,
            content: newPostData.content,
            category: newPostData.category,
            timeAgo: "Baru saja",
            likes: 0,
            replies: 0,
            tags: newPostData.tags
                .split(",")
                .map((tag) => tag.trim())
                .filter((tag) => tag),
            isLiked: false,
        }

        setForumPosts([newPost, ...forumPosts])
        setNewPostData({ title: "", content: "", category: "tips", tags: "" })
        setShowNewPost(false)

        toast({
            title: "Post Berhasil!",
            description: "Postingan kamu sudah ditambahkan ke forum",
        })
    }

    const getCategoryColor = (category: string) => {
        const colors = {
            tips: "bg-blue-100 text-blue-800",
            review: "bg-green-100 text-green-800",
            kuliner: "bg-orange-100 text-orange-800",
            transportasi: "bg-purple-100 text-purple-800",
        }
        return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
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
                            <h1 className="text-3xl font-bold text-gray-900">Forum Komunitas</h1>
                            <p className="text-gray-600">Berbagi tips dan pengalaman dengan sesama traveler</p>
                        </div>
                    </div>

                    <Button onClick={() => setShowNewPost(true)} className="bg-orange-500 hover:bg-orange-600 text-white">
                        <Plus className="h-4 w-4 mr-2" />
                        Buat Post
                    </Button>
                </div>

                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Search */}
                        <Card>
                            <CardHeader className="pb-4">
                                <CardTitle className="text-lg">Cari Diskusi</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                    <Input
                                        placeholder="Cari topik, tips, review..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-10"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Categories */}
                        <Card>
                            <CardHeader className="pb-4">
                                <CardTitle className="text-lg">Kategori</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    {categories.map((category) => {
                                        const Icon = category.icon
                                        return (
                                            <button
                                                key={category.id}
                                                onClick={() => setSelectedCategory(category.id)}
                                                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors text-left ${selectedCategory === category.id
                                                        ? "bg-orange-100 text-orange-600 border border-orange-200"
                                                        : "hover:bg-gray-100 text-gray-700"
                                                    }`}
                                            >
                                                <Icon className="h-4 w-4" />
                                                <span className="font-medium">{category.label}</span>
                                            </button>
                                        )
                                    })}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Stats */}
                        <Card>
                            <CardHeader className="pb-4">
                                <CardTitle className="text-lg">Statistik Komunitas</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Total Member</span>
                                    <span className="font-semibold">1,247</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Post Hari Ini</span>
                                    <span className="font-semibold">15</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Member Online</span>
                                    <span className="font-semibold text-green-600">89</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        {/* New Post Form */}
                        {showNewPost && (
                            <Card className="mb-6">
                                <CardHeader>
                                    <CardTitle>Buat Post Baru</CardTitle>
                                    <CardDescription>Bagikan tips atau tanyakan sesuatu ke komunitas</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Judul</label>
                                        <Input
                                            placeholder="Tulis judul post yang menarik..."
                                            value={newPostData.title}
                                            onChange={(e) => setNewPostData({ ...newPostData, title: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
                                        <select
                                            className="w-full p-2 border border-gray-300 rounded-md"
                                            value={newPostData.category}
                                            onChange={(e) => setNewPostData({ ...newPostData, category: e.target.value })}
                                        >
                                            <option value="tips">Tips & Trick</option>
                                            <option value="review">Review Tempat</option>
                                            <option value="kuliner">Kuliner</option>
                                            <option value="transportasi">Transportasi</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Konten</label>
                                        <Textarea
                                            placeholder="Ceritakan pengalaman, tips, atau pertanyaan kamu..."
                                            rows={5}
                                            value={newPostData.content}
                                            onChange={(e) => setNewPostData({ ...newPostData, content: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Tags (pisahkan dengan koma)</label>
                                        <Input
                                            placeholder="jogja, tips, budget, kuliner..."
                                            value={newPostData.tags}
                                            onChange={(e) => setNewPostData({ ...newPostData, tags: e.target.value })}
                                        />
                                    </div>

                                    <div className="flex gap-2">
                                        <Button onClick={handleSubmitPost} className="bg-orange-500 hover:bg-orange-600">
                                            Posting
                                        </Button>
                                        <Button variant="outline" onClick={() => setShowNewPost(false)}>
                                            Batal
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Posts */}
                        <div className="space-y-6">
                            {filteredPosts.map((post) => (
                                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-semibold">
                                                    {post.avatar}
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-900">{post.author}</h3>
                                                    <p className="text-sm text-gray-500">{post.timeAgo}</p>
                                                </div>
                                            </div>

                                            <Badge className={getCategoryColor(post.category)}>
                                                {categories.find((c) => c.id === post.category)?.label}
                                            </Badge>
                                        </div>
                                    </CardHeader>

                                    <CardContent>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h2>

                                        <p className="text-gray-700 mb-4 leading-relaxed whitespace-pre-line">{post.content}</p>

                                        {post.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {post.tags.map((tag, index) => (
                                                    <Badge key={index} variant="secondary" className="text-xs">
                                                        #{tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        )}

                                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                            <div className="flex items-center gap-4">
                                                <button
                                                    onClick={() => handleLike(post.id)}
                                                    className={`flex items-center gap-2 px-3 py-1 rounded-lg transition-colors ${post.isLiked ? "text-red-600 bg-red-50" : "text-gray-600 hover:text-red-600 hover:bg-red-50"
                                                        }`}
                                                >
                                                    <Heart className={`h-4 w-4 ${post.isLiked ? "fill-current" : ""}`} />
                                                    <span className="text-sm font-medium">{post.likes}</span>
                                                </button>

                                                <button className="flex items-center gap-2 px-3 py-1 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                                                    <MessageCircle className="h-4 w-4" />
                                                    <span className="text-sm font-medium">{post.replies} balasan</span>
                                                </button>
                                            </div>

                                            <button className="flex items-center gap-2 px-3 py-1 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                                                <Share2 className="h-4 w-4" />
                                                <span className="text-sm font-medium">Share</span>
                                            </button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}

                            {filteredPosts.length === 0 && (
                                <Card className="p-12 text-center">
                                    <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">Tidak ada post ditemukan</h3>
                                    <p className="text-gray-600">Coba ubah kata kunci pencarian atau kategori</p>
                                </Card>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForumSection
