import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/motionPresets";
import { IconDiamond, IconCpu, Icon360View } from "@tabler/icons-react";
import aibackground from "../assets/aibackground.jpg";
import rollsroyce from "../assets/rollsroyce.jpg";

// Helper: Parallax hook for 3D tilt effect based on mouse position inside card
function use3dTilt(ref) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, 1], [10, -10]);
  const rotateY = useTransform(x, [0, 1], [-10, 10]);

  function onPointerMove(e) {
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const px = (e.clientX - left) / width; // 0 to 1
    const py = (e.clientY - top) / height; // 0 to 1
    x.set(px);
    y.set(py);
  }

  function onPointerLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return { rotateX, rotateY, onPointerMove, onPointerLeave };
}

const subpoints = [
  {
    title: "Business Value Highlight",
    icon: <IconDiamond className="w-10 h-10 text-blue-500" />,
    content:
      "$5M+ in realized business value - precision solutions, no redundancy.",
  },
  {
    title: "AI Scaling Intelligence",
    icon: <IconCpu className="w-10 h-10 text-blue-500" />,
    content:
      "Autonomous AI agents that collaborate, self-optimize, and drive enterprise productivity.",
  },
  {
    title: "Technical Deep Dive",
    icon: <Icon360View className="w-10 h-10 text-blue-500" />,
    content:
      "Benchmarking advanced frameworks: LangGraph vs Autokool for multi-agent orchestration.",
  },
];

export default function BuildToOrder() {
  return (
    <section
      id="pillar1"
      className="relative py-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      aria-labelledby="build-to-order-title"
    >
      {/* AI banner image background */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <img
          src={aibackground}
          alt="AI Technology Background"
          className="w-full h-full object-cover opacity-25"
        />
      </div>

      <motion.div
        className="max-w-5xl mx-auto px-6 md:px-12 text-center relative"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Headline */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          {/* Text Headline */}
          <motion.h2
            id="build-to-order-title"
            variants={fadeUp}
            className="flex-1 text-5xl font-serif font-bold text-gray-900 relative text-center md:text-left"
          >
            The One-Person, Build-to-Order Model
            <span className="block w-24 h-1 bg-gradient-to-r from-blue-500 via-blue-300 to-blue-600 rounded mt-4 mx-auto md:mx-0" />
            <span className="block text-lg font-light mt-4 italic text-gray-600">
              (The 'Rolls-Royce' Approach)
            </span>
          </motion.h2>

          {/* Rolls Royce illustration */}
          <div className="flex-1 flex justify-center">
            <img
              src={rollsroyce}
              alt="Rolls Royce luxury car symbolizing premium build-to-order AI"
              className="max-w-xs md:max-w-md lg:max-w-lg w-full rounded-2xl shadow-xl border border-blue-100"
            />
          </div>
        </div>
        {/* Cards container */}
        <div className="flex flex-col md:flex-row justify-between gap-12 max-w-4xl mx-auto relative">
          {subpoints.map((point, idx) => (
            <InteractiveCard key={idx} point={point} />
          ))}
        </div>
      </motion.div>
      {/* Ambient decorative particle lights */}
      <DecorativeParticleLights />
    </section>
  );
}

function InteractiveCard({ point }) {
  const ref = useRef(null);
  const { rotateX, rotateY, onPointerMove, onPointerLeave } = use3dTilt(ref);

  return (
    <motion.div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{ rotateX, rotateY, perspective: 800 }}
      tabIndex={0}
      whileHover={{ scale: 1.08 }}
      className="relative cursor-pointer rounded-3xl bg-white/25 backdrop-blur-md border border-blue-300 shadow-lg shadow-blue-400/30 p-10 flex flex-col gap-6 max-w-xs mx-auto
        ring-0 focus:ring-4 focus:ring-blue-400 focus:outline-none transition-transform will-change-transform"
    >
      {/* Morphing glow behind icon */}
      <motion.div
        className="absolute -top-5 -right-5 w-16 h-16 bg-gradient-to-tr from-blue-400 to-blue-200 rounded-full opacity-40 filter blur-3xl animate-pulse-slow pointer-events-none"
        aria-hidden="true"
      />
      <motion.div className="relative p-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg w-min">
        {point.icon}
      </motion.div>
      <h3 className="text-2xl font-semibold text-blue-900 font-serif leading-tight">
        {point.title}
      </h3>
      <p className="text-gray-700 text-base leading-relaxed">{point.content}</p>
    </motion.div>
  );
}

function DecorativeParticleLights() {
  return (
    <>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        className="pointer-events-none absolute top-[-20%] left-[-10%] w-[60rem] h-[60rem] rounded-full bg-gradient-radial from-blue-400/20 to-transparent opacity-30 blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 180, ease: "linear" }}
        className="pointer-events-none absolute bottom-[-30%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-gradient-radial from-blue-500/15 to-transparent opacity-25 blur-3xl"
      />
    </>
  );
}
