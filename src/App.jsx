import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import HorizontalScroll from './component/HorizontalScroll';

const supabase = createClient(import.meta.env.VITE_API_BASE_URL, import.meta.env.VITE_SUPABASE_DB_KEY);

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const { data, error } = await supabase
      .from("Posts")
      .select()
      .order("created_at", { ascending: false }); // Order by 'created_at' in descending order
  
    if (data) {
      setPosts(data);
    }
  
    if (error) {
      console.error("Error fetching posts:", error.message);
    }
  }

  return (
    <>
      <div className="bg-peach-100">
        <HorizontalScroll posts={posts} />
      </div>
    </>
  )
}

export default App
