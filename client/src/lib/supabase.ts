import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'

// Check if we have real credentials
const hasRealCredentials = import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY

if (!hasRealCredentials) {
  console.warn('Using placeholder Supabase credentials. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables for real database access.')
}

export const supabase = createClient(supabaseUrl, supabaseKey)
export { hasRealCredentials }

export interface DatabaseCourse {
  id: number;
  course_name: string;
  platform: string;
  category: string;
  credits: number;
  equivalencies: string;
}