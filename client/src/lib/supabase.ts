
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'your-supabase-url'
const supabaseKey = 'your-supabase-anon-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

export interface DatabaseCourse {
  id: number;
  course_name: string;
  platform: string;
  category: string;
  credits: number;
  equivalencies: string;
}
