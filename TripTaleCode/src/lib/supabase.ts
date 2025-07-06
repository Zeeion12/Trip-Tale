import { createClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY!

// Validasi environment variables
if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Auto-test connection saat app start
console.log('🔄 Testing Supabase connection...')
supabase
    .from('destinations')
    .select('count', { count: 'exact', head: true })
    .then(({ error }) => {
        if (error) {
            console.error('❌ Supabase connection failed:', error.message)
        } else {
            console.log('✅ Supabase connected successfully!')
        }
    })

// Types for database tables (keep your existing interfaces)
export interface User {
    id: string
    email: string
    username: string
    created_at: string
}

export interface Itinerary {
    id: string
    user_id: string
    title: string
    destination: string
    duration: number
    budget: number
    theme: string
    content: any
    created_at: string
}

export interface ForumPost {
    id: string
    user_id: string
    title?: string
    content: string
    category: string
    likes: number
    replies: number
    created_at: string
}

export interface Destination {
    id: string
    name: string
    category: string
    cost: number
    duration: number
    description: string
    location: string
}