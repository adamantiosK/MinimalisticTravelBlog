import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import googleMapsIcon from '../assets/googleMapsIcon.png';


const PostPage = () => {
    const { postId } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async (id) => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}api/minimalistic-blog/post/${id}`);
                if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error("Error fetching posts:", error.message);
            } finally {
                setIsLoading(false);
            }
        };

        if (postId) {
            fetchPost(postId);
        }
    }, [postId]);

    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        );
    }

    if (!post) {
        return <div>Loading...</div>;
    }

    const handleBackClick = () => {
        navigate('/');
    };

    // First parse the HTML to React elements, then sanitize
    const parsedContent = parse(post.contents);

    // Configure DOMPurify for the container
    DOMPurify.setConfig({
        ALLOWED_TAGS: ['div', 'span', 'p', 'h1', 'h2', 'h3', 'img', 'section', 'a', 'svg', 'path', 'ul', 'li'],
        ALLOWED_ATTR: ['class', 'style', 'href', 'src', 'alt', 'target', 'rel', 'viewBox', 'fill', 'stroke', 
                      'strokeWidth', 'strokeLinecap', 'strokeLinejoin', 'd', 'objectPosition'],
    });

    return (
        <div className="flex flex-col min-h-screen">
            {/* Title with full-width background */}
            <div className="bg-gray-900 text-white">
                <div className="container mx-auto px-4 py-8 flex items-center justify-center">
                    <div className="absolute left-0 ml-4">
                        <button onClick={handleBackClick} className="card flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                            <span className="text-lg"></span>
                        </button>
                    </div>
                    <h1 className="text-5xl font-bold text-center font-pacifico">{post.title}</h1>
                </div>
            </div>

            {/* Post content with darker shade, white text */}
            <div className="flex-grow bg-gray-800 text-white">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-lg text-justify mx-auto relative" style={{ maxWidth: '800px' }}>
                        <div className="space-y-8">
                            {parsedContent}
                        </div>
                    </div>
                </div>
            </div>

            
            {post.googleMapsLink && (
                <div className="fixed bottom-4 right-4">
                    <a 
                        href={post.googleMapsLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                        style={{ width: '70px', height: '70px' }}
                    >
                        <img 
                            src={googleMapsIcon} 
                            alt="Google Maps Logo" 
                            className="w-full h-full object-cover rounded-full" 
                        />
                    </a>
                </div>
            )}

            {/* Footer with dark shade, stuck to the bottom */}
            <div className="bg-gray-900 text-white text-center p-1">
                <div className="container mx-auto">
                    <p>© 2025 The Minimalistic Travel Blog. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default PostPage;
