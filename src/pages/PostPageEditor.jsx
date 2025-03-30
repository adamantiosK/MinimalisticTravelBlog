import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import googleMapsIcon from '../assets/googleMapsIcon.png';
import { motion } from "framer-motion";
import { FiEdit3, FiEye } from "react-icons/fi";
import { Editor } from '@monaco-editor/react';

const TOGGLE_CLASSES = "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const PostPageEditor = () => {
    const { postId } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isEditorMode, setIsEditorMode] = useState(false);
    const [editorContent, setEditorContent] = useState('');

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

    useEffect(() => {
        if (post?.contents) {
            setEditorContent(post.contents);
        }
    }, [post]);

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
    const parsedContent = parse(editorContent);

    // Configure DOMPurify for the container
    DOMPurify.setConfig({
        ALLOWED_TAGS: ['div', 'span', 'p', 'h1', 'h2', 'h3', 'img', 'section', 'a', 'svg', 'path', 'ul', 'li'],
        ALLOWED_ATTR: ['class', 'style', 'href', 'src', 'alt', 'target', 'rel', 'viewBox', 'fill', 'stroke', 
                      'strokeWidth', 'strokeLinecap', 'strokeLinejoin', 'd', 'objectPosition'],
    });

    return (
        <div className={`flex flex-col min-h-screen ${isEditorMode ? 'overflow-hidden h-screen' : ''}`}>
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
                    <div className="relative inline-flex items-center">
                        <div className="relative flex w-fit items-center rounded-full">
                            <button
                                className={`${TOGGLE_CLASSES} ${
                                    isEditorMode ? "text-white" : "text-gray-400"
                                }`}
                                onClick={() => setIsEditorMode(true)}
                            >
                                <FiEdit3 className="relative z-10 text-lg md:text-sm" />
                                <span className="relative z-10">Editor</span>
                            </button>
                            <button
                                className={`${TOGGLE_CLASSES} ${
                                    !isEditorMode ? "text-white" : "text-gray-400"
                                }`}
                                onClick={() => setIsEditorMode(false)}
                            >
                                <FiEye className="relative z-10 text-lg md:text-sm" />
                                <span className="relative z-10">Preview</span>
                            </button>
                            <div
                                className={`absolute inset-0 z-0 flex ${
                                    !isEditorMode ? "justify-end" : "justify-start"
                                }`}
                            >
                                <motion.span
                                    layout
                                    transition={{ type: "spring", damping: 15, stiffness: 250 }}
                                    className="h-full w-1/2 rounded-full bg-gray-600"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Post content with darker shade, white text */}
            <div className={`flex-grow bg-gray-800 text-white ${isEditorMode ? 'overflow-hidden' : ''}`}>
                {!isEditorMode ? (
                    <div className="container mx-auto px-4 py-8">
                        <div className="text-lg text-justify mx-auto relative" style={{ maxWidth: '800px' }}>
                            <div className="space-y-8">
                                {parsedContent}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="h-[calc(100vh-125px)]"> {/* Further adjusted height */}
                        <Editor
                            height="100%"
                            width="100%"
                            defaultLanguage="html"
                            theme="vs-dark"
                            value={editorContent}
                            onChange={(value) => setEditorContent(value)}
                            options={{
                                fontSize: 14,
                                minimap: { enabled: true },
                                lineNumbers: "on",
                                wordWrap: "on",
                                formatOnPaste: true,
                                formatOnType: true,
                                automaticLayout: true,
                                scrollBeyondLastLine: false,
                            }}
                        />
                    </div>
                )}
            </div>

            {/* Footer with dark shade, stuck to the bottom */}
            <div className="bg-gray-900 text-white text-center p-1">
                <div className="container mx-auto">
                    <p>© 2025 The Minimalistic Travel Blog. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default PostPageEditor;
