import { supabase } from './supabase'

export async function testConnection() {
    try {
        const { data, error } = await supabase
            .from('destinations')
            .select('*')
            .limit(1)

        if (error) {
            console.error('Supabase Error:', error)
            return false
        }

        console.log('✅ Supabase connected!', data)
        return true
    } catch (err) {
        console.error('❌ Connection failed:', err)
        return false
    }
}