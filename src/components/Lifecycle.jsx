// src/components/Lifecycle.jsx
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/motionPresets";

export default function Lifecycle() {
  const steps = [
    { title: "Research", text: "Exploration & prototype" },
    { title: "Design", text: "Engineering & validation" },
    { title: "Implementation", text: "Ops-ready deployment" },
  ];

  return (
    <section className="py-16">
      <motion.div
        className="max-w-6xl mx-auto px-6 md:px-12 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h3
          variants={fadeUp}
          className="text-2xl font-semibold text-textDark mb-6"
        >
          Our Innovation Cycle
        </motion.h3>
        <motion.p
          variants={fadeUp}
          className="max-w-2xl mx-auto text-textDark/70 mb-8"
        >
          Precision, iteration, and mission focus — one expert, full lifecycle
          delivery.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="relative flex items-center justify-center"
        >
          {/* svg curves remain unchanged */}
          <svg
            className="absolute w-full h-48 left-0"
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
            <path
              d="M120 160 C320 10 680 10 880 160"
              stroke="url(#g)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              opacity="0.45"
            />
            <path
              d="M120 40 C320 190 680 190 880 40"
              stroke="url(#g)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              opacity="0.25"
            />
          </svg>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-white shadow-neu-sm flex items-center justify-center text-xl font-semibold text-textDark">
                  {i + 1}
                </div>
                <div className="mt-3 text-lg font-semibold">{s.title}</div>
                <div className="text-sm text-textDark/60 mt-1 text-center">
                  {s.text}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
