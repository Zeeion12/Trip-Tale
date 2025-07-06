import { createClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for database tables
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
