-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(100) UNIQUE NOT NULL,
  full_name VARCHAR(255),
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create destinations table
CREATE TABLE IF NOT EXISTS destinations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  cost INTEGER NOT NULL,
  duration INTEGER NOT NULL, -- in hours
  description TEXT,
  location VARCHAR(255),
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create itineraries table
CREATE TABLE IF NOT EXISTS itineraries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  destination VARCHAR(255) NOT NULL,
  duration INTEGER NOT NULL, -- in days
  budget INTEGER NOT NULL,
  theme VARCHAR(100) NOT NULL,
  content JSONB NOT NULL,
  is_public BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create forum_posts table
CREATE TABLE IF NOT EXISTS forum_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255),
  content TEXT NOT NULL,
  category VARCHAR(100) NOT NULL,
  likes INTEGER DEFAULT 0,
  replies INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create forum_replies table
CREATE TABLE IF NOT EXISTS forum_replies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID REFERENCES forum_posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create post_likes table
CREATE TABLE IF NOT EXISTS post_likes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID REFERENCES forum_posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(post_id, user_id)
);

-- Insert sample destinations
INSERT INTO destinations (name, category, cost, duration, description, location) VALUES
('Candi Borobudur', 'budaya', 50000, 240, 'Candi Buddha terbesar di dunia', 'Magelang'),
('Candi Prambanan', 'budaya', 50000, 180, 'Kompleks candi Hindu terbesar di Indonesia', 'Sleman'),
('Keraton Yogyakarta', 'budaya', 25000, 120, 'Istana Sultan Yogyakarta', 'Yogyakarta'),
('Taman Sari', 'budaya', 15000, 90, 'Taman istana air Keraton', 'Yogyakarta'),
('Malioboro Street', 'kuliner', 0, 180, 'Jalan utama untuk belanja dan kuliner', 'Yogyakarta'),
('Gudeg Yu Djum', 'kuliner', 25000, 60, 'Gudeg legendaris Yogyakarta', 'Yogyakarta'),
('Pantai Parangtritis', 'petualangan', 10000, 240, 'Pantai dengan legenda Nyi Roro Kidul', 'Bantul'),
('Goa Jomblang', 'petualangan', 200000, 360, 'Cave tubing dan rappelling', 'Gunungkidul'),
('Kalibiru', 'petualangan', 25000, 180, 'Spot sunrise dan foto instagramable', 'Kulon Progo'),
('Kotagede', 'budaya', 0, 120, 'Pusat kerajinan perak tradisional', 'Yogyakarta');
