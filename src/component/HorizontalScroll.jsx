import {
    motion,
    useTransform,
    useScroll,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";
import React, { useRef } from "react";

const HorizontalScroll = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-gray-800">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    <div className="flex-shrink-0 w-[48rem] h-[30rem] flex flex-col items-center justify-center">
                        <h2 className="text-9xl font-bold text-white font-pacifico">Every</h2>
                        <h3 className="text-8xl font-bold text-white font-pacifico">Day</h3>
                        <h2 className="text-9xl font-bold text-white font-pacifico">Norm</h2>
                        <p className="text-xl font-light text-white mt-12 font-pacifico">The minimalistic blog</p>
                        {/* Animated Scroll Icon */}
                        <i className="fas fa-chevron-down text-white text-3xl animate-bounce mt-8"></i>
                    </div>
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[40rem] w-[29rem] rounded-xl bg-gradient-to-br from-purple-400 to-blue-700 mr-12"
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.9
                }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/0 backdrop-blur-lg rounded-lg opacity-70"></div>
                    <div className="relative p-8 text-center">
                        <p className="text-5xl font-black uppercase text-black">
                            {card.title}
                        </p>
                        <p className="text-4xl font-bold uppercase text-black">
                            {card.title}
                        </p>
                        <p className="text-3xl font-semibold uppercase text-black italic">
                            {card.title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default HorizontalScroll;

const cards = [
    {
        url: "./src/assets/img/BotanicalGardens.JPG",
        title: "Georgia",
        id: 1,
    },
    {
        url: "./src/assets/img/OnBoatWave.JPG",
        title: "Swizzerland",
        id: 2,
    },
    {
        url: "./src/assets/img/MaltaPool.JPG",
        title: "Malta",
        id: 3,
    },
    {
        url: "./src/assets/img/SnowBoard.jpg",
        title: "France",
        id: 4,
    },
    {
        url: "./src/assets/img/BotanicalGardens.JPG",
        title: "Georgia",
        id: 5,
    },
    {
        url: "./src/assets/img/OnBoatWave.JPG",
        title: "Swizzerland",
        id: 6,
    },
    {
        url: "./src/assets/img/MaltaPool.JPG",
        title: "Malta",
        id: 7,
    },
];