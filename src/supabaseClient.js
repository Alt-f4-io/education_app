import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rzohrqxgliojvmgzkmcj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6b2hycXhnbGlvanZtZ3prbWNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDczNzYwMDUsImV4cCI6MTk2Mjk1MjAwNX0.PvfdvS215UmIpEWUJG6ym5nCVL2I7yeoLP9KZTwIWb0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)