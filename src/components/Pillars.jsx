import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/motionPresets";

const cards = [
  {
    title: "Build-to-Order (Rolls-Royce)",
    desc: "One dedicated domain expert per engagement — precise, mission-grade solutions.",
  },

  {
    title: "Research: AI-OS & Brain Interfaces",
    desc: "Pioneering work in AI operating systems and neural decoding.",
  },
  {
    title: "Full-Stack AI Productivity",
    desc: "Robust agent systems that plan, self-optimize, and operate at enterprise scale.",
  },
  {
    title: "Open Engineering & Credibility",
    desc: "Published benchmarks, reproducible pipelines and open-labs tooling.",
  },
];

export default function Pillars() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Subtle architectural background */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/brick-wall-dark.png')] bg-repeat"></div>

      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h3
          variants={fadeUp}
          className="text-3xl font-bold text-gray-800 text-center mb-12 tracking-tight"
        >
          The Four Pillars of Lumigen
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.03 }}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 group"
            >
              {/* Pillar dome top */}
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-20 h-10 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-full shadow-inner"></div>

              {/* Brick texture background inside pillar */}
              <div className="bg-[url('https://www.transparenttextures.com/patterns/brick-wall.png')] bg-repeat bg-cover p-6 rounded-2xl flex flex-col justify-between h-full">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 text-center mb-3">
                    {c.title}
                  </h4>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>

              {/* Base pedestal shadow */}
              <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-t from-gray-300 to-gray-200 rounded-b-2xl"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
