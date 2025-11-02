// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/motionPresets";

export default function Hero() {
  const videoSrc = "/videos/giveAi.mp4";
  const useVideo = true;

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      <div className="absolute inset-0 gradient-flow opacity-60" aria-hidden />
      {useVideo && (
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          aria-hidden
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent" />

      <motion.div
        className="relative z-20 max-w-5xl px-6 md:px-12 py-28"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          className="text-sm uppercase text-accentFrom font-semibold mb-4"
        >
          India’s First Research & Applied AI Company
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-textDark leading-tight"
        >
          Architecting the Future of Intelligence
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-lg text-textDark/70"
        >
          We are a deep-tech powerhouse — building mission-grade, build-to-order
          AI systems that translate research into real outcomes across
          industries.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex gap-4">
          <a
            className="inline-block px-5 py-3 rounded-full text-white bg-gradient-to-r from-accentFrom to-accentTo shadow"
            href="#work"
          >
            Explore Our Work
          </a>
          <a
            className="inline-block px-5 py-3 rounded-full border border-gray-200 text-textDark"
            href="#contact"
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
