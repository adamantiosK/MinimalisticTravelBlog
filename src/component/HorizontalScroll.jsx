import {
    motion,
    useTransform,
    useScroll
} from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

const HorizontalScroll = ({ posts, isLoading }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(
        scrollYProgress, 
        [0, 0.8],
        ["31%", window.innerWidth >= 1024 ? "-75%" : "-45%"]
    );

    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        );
    }

    return (
        <section ref={targetRef} className="relative h-[200vh] bg-gray-800">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ x }} className="flex translate-x-[0%] items-center">
                    <div className="w-[48rem] h-[40rem] flex flex-col items-center justify-center">
                        <h2 className="text-9xl font-bold text-white font-pacifico">Every</h2>
                        <h3 className="text-8xl font-bold text-white font-pacifico">Day</h3>
                        <h2 className="text-9xl font-bold text-white font-pacifico">Norm</h2>
                        <p className="text-xl font-light text-white mt-12 font-pacifico">The minimalistic travel blog</p>
                        <i className="fas fa-chevron-down text-white text-3xl animate-bounce mt-8"></i>
                    </div>
                    {posts.map((post) => {
                        return <Card post={post} key={post.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ post }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/adamkounis/${post.id}`);
    }

    return (
        <div
            key={post.id}
            onClick={handleClick}
            className="card group relative h-[30rem] w-[22rem] rounded-xl bg-gradient-to-br from-purple-400 to-blue-700 cursor-pointer mx-8"
        >
            <div
                style={{
                    backgroundImage: `url(${post.img_url ?? ""})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.9
                }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
            ></div>
            <div className="card absolute inset-0 z-10 grid place-content-center">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/0 backdrop-blur-lg rounded-lg opacity-70"></div>
                    <div className="relative p-6 text-center">
                        <p className="text-3xl font-black uppercase text-black">
                            {post.title}
                        </p>
                        <p className="text-2xl font-bold uppercase text-black">
                            {post.created_at}
                        </p>
                        <p className="text-xl font-semibold uppercase text-black italic">
                            {post.author}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default HorizontalScroll;