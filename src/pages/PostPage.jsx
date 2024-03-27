import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import DOMPurify from 'dompurify';


// Initialize Supabase client
const supabase = createClient(import.meta.env.VITE_API_BASE_URL, import.meta.env.VITE_SUPABASE_DB_KEY);

const PostPage = () => {
    const { postId } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async (id) => {
            const { data, error } = await supabase
                .from("Posts")
                .select("*")
                .eq('id', id)
                .single();

            if (data) {
                setPost(data);
            } else if (error) {
                console.error("Error fetching post:", error.message);
            }
        };

        if (postId) {
            fetchPost(postId);
        }
    }, [postId]);

    if (!post) {
        return <div>Loading...</div>;
    }

    const handleBackClick = () => {
        navigate('/');
    };

    // Sanitize the content right before rendering
    const sanitizedContent = DOMPurify.sanitize(post.contents);


    return (
        <div className="flex flex-col min-h-screen">
            {/* Title with full-width background */}
            <div className="bg-gray-900 text-white">
                <div className="container mx-auto px-4 py-8 flex items-center">
                    <button onClick={handleBackClick} className="card flex items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="text-lg">Back</span>
                    </button>
                    <h1 className="text-5xl font-bold text-center flex-grow font-pacifico">{post.title}</h1>
                </div>
            </div>

            {/* Post content with darker shade, white text */}
            <div className="flex-grow bg-gray-800 text-white">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-lg text-justify mx-auto relative" style={{ maxWidth: '800px' }}>
                        <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
                    </div>
                </div>
            </div>

            {/* Footer with dark shade, stuck to the bottom */}
            <div className="bg-gray-900 text-white text-center p-1">
                <div className="container mx-auto">
                    <p>© 2024 The Minimalistic Travel Blog. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default PostPage;
