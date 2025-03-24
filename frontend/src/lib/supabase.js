import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL:', supabaseUrl)
  console.error('Supabase Key:', supabaseAnonKey ? '[PRESENT]' : '[MISSING]')
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false
  },
  db: {
    schema: 'public'
  },
  global: {
    headers: {
      'X-Client-Info': 'reachreport'
    }
  }
})

// Test all database connections
const testConnections = async () => {
  try {
    // Test subscribers table
    const subscribersTest = await supabase
      .from('subscribers')
      .select('*')
      .limit(1)
    
    if (subscribersTest.error) {
      console.error('Subscribers table error:', subscribersTest.error.message)
    } else {
      console.log('Subscribers table connection successful')
    }

    // Test contact_messages table
    const contactTest = await supabase
      .from('contact_messages')
      .select('*')
      .limit(1)
    
    if (contactTest.error) {
      console.error('Contact messages table error:', contactTest.error.message)
    } else {
      console.log('Contact messages table connection successful')
    }

  } catch (err) {
    console.error('Supabase connection error:', err.message)
  }
}

// Run connection tests
testConnections() 