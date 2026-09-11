# Botanical Dining - Hotel Table Reservation System

A minimalist, full-stack web application for booking hotel dining experiences. This project features a modern, interactive user interface built with React and a secure, real-time backend powered by Supabase.

## 🚀 Features

*   **Interactive UI:** Utilizes custom particle animations (ClickSpark) for a tactile, premium user experience.
*   **Dynamic Seating Selection:** Users can choose between various dining atmospheres (e.g., Sunlit Window Booth, Main Dining Room) with dynamic capacity and description updates.
*   **Real-Time Data Handling:** Form submissions are securely routed directly to a Supabase PostgreSQL database.
*   **Responsive Design:** Fully styled with Tailwind CSS v4 to ensure a seamless experience across desktop and mobile devices.

## 🛠️ Tech Stack

*   **Frontend:** React (Vite)
*   **Styling:** Tailwind CSS v4
*   **Backend & Database:** Supabase (PostgreSQL)
*   **UI Components:** React Bits (ClickSpark)
*   **Deployment:** Vercel
## DATABASE 
-- Create the reservations table
CREATE TABLE reservations (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_name text,
  email text,
  phone text,
  guests integer,
  seating_area text,
  reservation_time timestamp with time zone,
  created_at timestamp with time zone DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

-- Allow public inserts from the frontend application
CREATE POLICY "Allow public table inserts" 
ON reservations 
FOR INSERT 
TO anon 
WITH CHECK (true);