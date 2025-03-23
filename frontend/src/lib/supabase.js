"use client"
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://azlwbbuuedyneuymwgpa.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6bHdiYnV1ZWR5bmV1eW13Z3BhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2OTQ2MzQsImV4cCI6MjA1ODI3MDYzNH0.riFEO0cL-WM_E1AC6xPu4MR8pwFZYRhdPe3dQAcCqaM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)