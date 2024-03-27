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
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const { data } = await supabase.from("Posts").select();
    setPosts(data);
  }



  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      <div className="bg-peach-100">
        <HorizontalScroll />
      </div>
    </>
  )
}

export default App
