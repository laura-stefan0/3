import { createClient } from '@supabase/supabase-js'

// Supabase credentials - using the provided URL and anon key
const supabaseUrl = 'https://ylspsowwfygmenivbfhp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlsc3Bzb3d3ZnlnbWVuaXZiZmhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwMzQ1MzIsImV4cCI6MjA2NzYxMDUzMn0.M6Lb3pqfcrC6hlhWCoMZ9DgDnIXmjYtqPRGvgwF0w8w'

export const supabase = createClient(supabaseUrl, supabaseKey)
export const hasRealCredentials = true

export interface DatabaseCourse {
  id: number;
  course_name: string;
  course_code: string;
  platform: string;
  category: string;
  credits: number;
  description: string;
  completion_time: string;
  tips: string;
  material_1?: string;
  material_2?: string;
  material_3?: string;
}