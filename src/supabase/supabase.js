import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fjtzjfwzkcwtxnbjipuh.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqdHpqZnd6a2N3dHhuYmppcHVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY5OTA5MDEsImV4cCI6MjAyMjU2NjkwMX0.hggvRPqNva6KcrrnWaa11e_QKPi4qypadN3BT55dmWY"

const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase