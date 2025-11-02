import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Brain, Drone, Network } from "lucide-react";

const products = [
  {
    icon: Cpu,
    title: "Creating the Next Operating System for Intelligence",
    description:
      "We operate at the intersection of pure research and robust engineering, pioneering AI solutions that are fundamentally transformative.",
  },
  {
    icon: Network,
    title: "AI Operating Systems (AI-OS)",
    description:
      "Developing the core software layer that manages and orchestrates all AI models and agents, offering a Windows/Mac-like framework for enterprise AI at scale.",
  },
  {
    icon: Brain,
    title: "Brain Interfaces for Medical Advancements",
    description:
      "Leveraging AI-Human Simulation to decode neural signals for non-invasive medical diagnostics and cognitive enhancement tools.",
  },
  {
    icon: Drone,
    title: "Autonomous AI Drone Systems for Defence & Security",
    description:
      "Developing intelligent drone ecosystems that can analyze, decide, and act autonomously for national security and surveillance missions.",
  },
];

// Horizontal slide only variants
const contentVariants = {
  enter: { opacity: 0, x: 100 },
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, type: "spring", stiffness: 120, damping: 18 },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

export default function PillStepsExploreClean() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => (i + 1) % products.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => (i - 1 + products.length) % products.length);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section className="max-w-7xl mx-auto p-8 md:flex md:space-x-16">
      {/* Section Title */}
      <div className="md:w-72 mb-8 md:mb-0">
        <h2 className="text-4xl font-serif font-bold mb-8 border-l-4 border-blue-600 pl-4">
          Key Research Focus Areas
        </h2>

        {/* Pills navigation */}
        <nav
          className="flex flex-col space-y-6"
          aria-label="Research Domains Navigation"
          role="tablist"
        >
          {products.map(({ icon: Icon, title }, index) => (
            <button
              key={title}
              role="tab"
              aria-selected={activeIndex === index}
              aria-controls={`panel-${index}`}
              id={`tab-${index}`}
              tabIndex={activeIndex === index ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center space-x-4 px-6 py-3 rounded-full text-lg font-medium cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 transition-colors ${
                activeIndex === index
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveIndex(index);
                }
              }}
            >
              <div
                className={`p-2 rounded-full flex-shrink-0 ${
                  activeIndex === index ? "bg-white" : "bg-blue-600"
                }`}
              >
                <Icon
                  size={24}
                  className={
                    activeIndex === index ? "text-blue-600" : "text-white"
                  }
                  aria-hidden="true"
                />
              </div>
              <span>{title}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Content Panel */}
      <div className="flex-1 relative min-h-[320px] flex flex-col items-start">
        <AnimatePresence exitBeforeEnter>
          <motion.article
            key={activeIndex}
            id={`panel-${activeIndex}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeIndex}`}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-10 shadow-xl max-w-3xl w-full"
          >
            <h3 className="text-3xl font-serif font-semibold mb-4 text-gray-900">
              {products[activeIndex].title}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {products[activeIndex].description}
            </p>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}
