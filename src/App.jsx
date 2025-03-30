import './App.css'
import { useEffect, useState } from "react";
import HorizontalScroll from './component/HorizontalScroll';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostPage from './pages/PostPage';
import PostPageEditor from './pages/PostPageEditor';
import PostWrittingPage from './component/PostWrittingPage';

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}api/minimalistic-blog/posts`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPosts(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error.message);
      setIsLoading(false);
    }
  }

  return (
    <>
      {/* <HorizontalScroll posts={posts} /> */}
      <Routes>
        <Route path="/" element={<HorizontalScroll posts={posts} isLoading={isLoading} />} />
        <Route path="/:postId" element={<PostPage />} />
        <Route path="/:postId/editor" element={<PostPageEditor />} />
      </Routes>
    </>
  )
}

export default App
