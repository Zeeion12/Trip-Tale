TripTale

Description
TripTale is a web platform for travelers to create AI-powered itineraries and engage in a vibrant community. Initially focused on Yogyakarta, it connects solo travelers and backpackers (aged 18-40) with authentic local experiences, supporting small tourism businesses (tour guides, homestays, culinary). The MVP features an AI-driven itinerary planner and a community forum, built with a freemium model (free: 1 itinerary/day; premium: Rp 50,000/month for unlimited). Future plans include expansion across Southeast Asia.

Features
Itinerary AI: Generate personalized travel itineraries based on destination (default: Yogyakarta), duration (1-7 days), budget (Rp 500,000–Rp 5 million), and theme (culture, culinary, adventure). Free tier offers 1 itinerary/day for popular destinations; premium allows unlimited customization and saving.
Community Forum: A space for travelers to share tips and stories, fostering engagement and user-generated content, inspired by platforms like TripAdvisor.


Tech Stack
Frontend: React.js (Create React App), Tailwind CSS
Backend: Node.js
Database & Authentication: Supabase (PostgreSQL for database, Supabase Auth for email/Google login)
Hosting: Supabase for API and database hosting, or Vercel for frontend deployment
AI Logic: Rule-based if-then logic, with optional Google Gemini API integration (free tier)
Budget: < Rp 5 million (domain ~Rp 200,000/year, Supabase free tier for initial usage)

Installation
1. Clone the repository:
   git clone https://github.com/[your-username]/triptale.git
   
2. Install dependencies:
   cd triptale
   npm install

3. Set up Supabase:
   Create a Supabase project at supabase.com.
   Initialize a PostgreSQL database and set up tables for destinations (name, type, cost, time), itineraries, and forum posts.
   Enable Supabase Authentication (email/Google providers).
   Add your Supabase URL and anon key to src/supabaseConfig.js:
     import { createClient } from '@supabase/supabase-js';
     const supabaseUrl = 'YOUR_SUPABASE_URL';
     const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
     export const supabase = createClient(supabaseUrl, supabaseKey);

4. Run the development server:
   npm start


5. Deploy the frontend (optional):
   Use Vercel for frontend deployment:vercel --prod
   Ensure Supabase API endpoints are accessible for backend functionality.



Usage
Itinerary AI: Access the homepage, fill out the itinerary form (destination, duration, budget, theme), and generate a travel plan. Non-logged-in users get 1 itinerary/day; logged-in users can save plans or opt for premium (dummy form in MVP).
Forum: Navigate to the forum section to view or post travel tips (login required for posting).
Promotion: Join the beta via the “Jogja Backpacking” Facebook group, @TripTaleID Instagram, or “TripTale Jogja Community” WhatsApp group.

Project Goals
Attract 100 initial users in Yogyakarta within 2 months.
Achieve 50 itineraries created and 10 premium form submissions (dummy) during beta testing.
Validate the freemium model and prepare for Southeast Asia expansion.

Contributing
Contributions are welcome! Please:

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit changes (git commit -m 'Add your feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.

License
This project is licensed under the MIT License.
Contact


