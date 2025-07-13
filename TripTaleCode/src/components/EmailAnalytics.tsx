"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Mail, TrendingUp, Target } from "lucide-react"

interface Subscriber {
    email: string
    timestamp: string
    source: string
}

export default function EmailAnalytics() {
    const [subscribers, setSubscribers] = useState<Subscriber[]>([])
    const [stats, setStats] = useState({
        total: 0,
        today: 0,
        thisWeek: 0,
        conversionRate: 0,
    })

    useEffect(() => {
        // Load subscribers from localStorage (replace with actual API)
        const stored = JSON.parse(localStorage.getItem("triptale_subscribers") || "[]")
        setSubscribers(stored)

        // Calculate stats
        const now = new Date()
        const today = now.toISOString().split("T")[0]
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)

        const todayCount = stored.filter((s: Subscriber) => s.timestamp.startsWith(today)).length

        const weekCount = stored.filter((s: Subscriber) => new Date(s.timestamp) >= weekAgo).length

        // Mock traffic data for conversion rate
        const mockTraffic = 450 // Replace with actual analytics
        const conversionRate = stored.length > 0 ? (stored.length / mockTraffic) * 100 : 0

        setStats({
            total: stored.length,
            today: todayCount,
            thisWeek: weekCount,
            conversionRate: Math.round(conversionRate * 10) / 10,
        })
    }, [])

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center space-x-2">
                            <Users className="h-5 w-5 text-blue-500" />
                            <div>
                                <p className="text-2xl font-bold">{stats.total}</p>
                                <p className="text-sm text-gray-600">Total Subscribers</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center space-x-2">
                            <Mail className="h-5 w-5 text-green-500" />
                            <div>
                                <p className="text-2xl font-bold">{stats.today}</p>
                                <p className="text-sm text-gray-600">Today</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center space-x-2">
                            <TrendingUp className="h-5 w-5 text-orange-500" />
                            <div>
                                <p className="text-2xl font-bold">{stats.thisWeek}</p>
                                <p className="text-sm text-gray-600">This Week</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center space-x-2">
                            <Target className="h-5 w-5 text-purple-500" />
                            <div>
                                <p className="text-2xl font-bold">{stats.conversionRate}%</p>
                                <p className="text-sm text-gray-600">Conversion Rate</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Subscribers</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {subscribers
                            .slice(-10)
                            .reverse()
                            .map((subscriber, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div>
                                        <p className="font-medium">{subscriber.email}</p>
                                        <p className="text-sm text-gray-500">{new Date(subscriber.timestamp).toLocaleString("id-ID")}</p>
                                    </div>
                                    <Badge variant="secondary">{subscriber.source}</Badge>
                                </div>
                            ))}
                    </div>
                </CardContent>
            </Card>

            {/* Validation Status */}
            <Card
                className={`border-2 ${stats.total >= 150
                    ? "border-green-500 bg-green-50"
                    : stats.total >= 75
                        ? "border-yellow-500 bg-yellow-50"
                        : "border-red-500 bg-red-50"
                    }`}
            >
                <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-2">Market Validation Status</h3>
                    <div className="text-3xl font-bold mb-2">
                        {stats.total >= 150 ? "🟢 STRONG" : stats.total >= 75 ? "🟡 MODERATE" : "🔴 WEAK"}
                    </div>
                    <p className="text-gray-600">
                        {stats.total >= 150
                            ? "Ready for Development! Strong market interest detected."
                            : stats.total >= 75
                                ? "Need more research. Good start but need deeper insights."
                                : "Consider pivot or rethink strategy. Low market interest."}
                    </p>
                    <div className="mt-4">
                        <p className="text-sm">
                            Target: 100+ subscribers | Current: {stats.total} | Progress: {Math.round((stats.total / 100) * 100)}%
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
