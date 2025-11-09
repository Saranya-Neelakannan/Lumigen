import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import rollsroyce from "../assets/RollsRoyce.jpg";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.png";

const highlights = [
  {
    image: img1,
    title: "Business Value",
    details: "Delivered $5M+ in precise, streamlined AI solutions.",
  },
  {
    image: img2,
    title: "AI Scaling",
    details: "Autonomous agents driving enterprise productivity.",
  },
  {
    image: img3,
    title: "Technical Deep Dive",
    details: "Benchmarking LangGraph vs Autokool for orchestration.",
  },
];

const cardVariants = {
  enter: { opacity: 0, x: 100 },
  center: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -100 },
};

function HighlightCard({ item }) {
  return (
    <motion.div
      className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col cursor-pointer max-w-lg mx-auto"
      variants={cardVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      whileHover={{
        boxShadow: "0 0 20px 8px rgba(59, 130, 246, 0.7)",
      }}
    >
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-72 object-cover rounded-t-xl"
        />
      </div>
      <div className="p-8 grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-blue-900 font-serif">
          {item.title}
        </h3>
        <p className="text-base text-gray-600">{item.details}</p>
      </div>
    </motion.div>
  );
}

export default function BuildToOrder() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % highlights.length);
      }, 2000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  // Toggle pause/play on click
  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <section
      id="pillar1"
      className="relative py-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      aria-labelledby="build-to-order-title"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <h2
            id="build-to-order-title"
            className="flex-1 text-5xl font-serif font-bold text-gray-900 relative text-center md:text-left"
          >
            The One-Person, Build-to-Order Model
            <span className="block w-24 h-1 bg-gradient-to-r from-blue-500 via-blue-300 to-blue-600 rounded mt-4 mx-auto md:mx-0" />
            <span className="block text-lg font-light mt-4 italic text-gray-600">
              (The 'Rolls-Royce' Approach)
            </span>
          </h2>
          <div className="flex-1 flex justify-center">
            <img
              src={rollsroyce}
              alt="Rolls Royce luxury car symbolizing premium build-to-order AI"
              className="max-w-xs md:max-w-md lg:max-w-lg w-full rounded-2xl shadow-xl border border-blue-100"
            />
          </div>
        </div>

        <div
          className="relative h-[420px] cursor-pointer"
          onClick={togglePause}
          aria-label="Toggle carousel play/pause"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter") togglePause();
          }}
        >
          <AnimatePresence mode="wait">
            <HighlightCard key={currentIndex} item={highlights[currentIndex]} />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
