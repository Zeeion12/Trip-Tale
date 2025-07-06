import { useState, useEffect } from 'react'
import { supabase, type Destination } from '@/lib/supabase'

export default function TestDatabase() {
    const [destinations, setDestinations] = useState<Destination[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetchDestinations()
    }, [])

    const fetchDestinations = async () => {
        try {
            setLoading(true)
            const { data, error } = await supabase
                .from('destinations')
                .select('*')
                .limit(5)

            if (error) {
                setError(error.message)
            } else {
                setDestinations(data || [])
            }
        } catch (err) {
            setError('Failed to fetch data')
        } finally {
            setLoading(false)
        }
    }

    if (loading) return <div>Loading destinations...</div>
    if (error) return <div className="text-red-500">Error: {error}</div>

    return (
        <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-bold mb-4">🗄️ Database Test - Destinations</h3>
            {destinations.length === 0 ? (
                <p>No destinations found</p>
            ) : (
                <ul className="space-y-2">
                    {destinations.map((dest) => (
                        <li key={dest.id} className="border-l-4 border-blue-500 pl-4">
                            <strong>{dest.name}</strong> - {dest.category}
                            <br />
                            <small className="text-gray-600">
                                Cost: Rp {dest.cost.toLocaleString()} | Duration: {dest.duration} min
                            </small>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}