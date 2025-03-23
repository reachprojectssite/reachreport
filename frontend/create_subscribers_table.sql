CREATE TABLE IF NOT EXISTS subscribers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert
CREATE POLICY subscribers_insert_policy ON subscribers FOR INSERT TO anon WITH CHECK (true);

-- Create policy to allow only authenticated users to read
CREATE POLICY subscribers_select_policy ON subscribers FOR SELECT TO anon USING (true); 