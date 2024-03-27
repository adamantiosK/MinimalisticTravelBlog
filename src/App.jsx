import './App.css'
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import HorizontalScroll from './component/HorizontalScroll';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostPage from './pages/PostPage';

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
      .order("created_at", { ascending: false });

    if (data) {
      setPosts(data);
    }

    if (error) {
      console.error("Error fetching posts:", error.message);
    }
  }

  return (
    <>
      {/* <HorizontalScroll posts={posts} /> */}
      <Routes>
        <Route path="/" element={<HorizontalScroll posts={posts} />} />
        <Route path="/adamkounis/:postId" element={<PostPage />} />
      </Routes>
    </>
  )
}

export default App
