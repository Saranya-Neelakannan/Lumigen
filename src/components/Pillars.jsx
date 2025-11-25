import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/motionPresets";
import Pillar1 from "../assets/BuildtoOrder.jpg";
import Pillar2 from "../assets/BrainInterface.jpg";
import Pillar3 from "../assets/FullStack.jpg";
import Pillar4 from "../assets/OpenEngineering.jpg";

const pillarImages = [Pillar1, Pillar2, Pillar3, Pillar4];

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
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h3
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-16 tracking-tight"
        >
          Our Pillars of Excellence
        </motion.h3>

        <div className="flex flex-col gap-12">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="relative flex-1 bg-white rounded-3xl border border-gray-200 shadow-lg p-6 sm:p-8 flex flex-col justify-center min-w-[180px] transition-transform hover:scale-[1.03] hover:shadow-2xl cursor-pointer overflow-hidden">
                <div className="absolute -top-6 -left-6 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tr from-blue-200 via-blue-300 to-blue-400 rounded-full opacity-20 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-6 -right-6 w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-tr from-purple-200 via-purple-300 to-purple-400 rounded-full opacity-15 blur-3xl pointer-events-none" />
                <div className="flex items-center mb-4 space-x-4">
                  {c.icon}
                  <h4 className="text-xl sm:text-2xl font-bold text-blue-800">
                    {c.title}
                  </h4>
                </div>
                <p className="text-base leading-relaxed text-gray-700">{c.desc}</p>
                <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full" />
              </div>

              <div className="flex-1 flex items-center justify-center">
                <div className="w-full h-full min-h-[200px] md:min-h-0 flex items-center justify-center rounded-3xl border border-blue-300 shadow-lg bg-gradient-to-br from-blue-50 via-white to-blue-100 p-1 transition-transform hover:scale-[1.05] hover:shadow-2xl cursor-pointer overflow-hidden">
                  <img
                    src={pillarImages[i]}
                    alt={`Pillar ${i + 1}`}
                    className="w-full h-full rounded-2xl object-cover max-h-72"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
