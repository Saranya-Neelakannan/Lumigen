import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Define positions (SVG units: 0–100) and matching CSS positions (%)
const nodes = [
  {
    label: "Research",
    sub: "Exploration & prototype",
    svg: { cx: 12, cy: 68 },
    css: { top: "68%", left: "12%" },
  },
  {
    label: "Design",
    sub: "Engineering & validation",
    svg: { cx: 55, cy: 32 },
    css: { top: "32%", left: "55%" },
  },
  {
    label: "Implementation",
    sub: "Ops-ready deployment",
    svg: { cx: 90, cy: 75 },
    css: { top: "75%", left: "90%" },
  },
];

export default function Lifecycle() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((i) => (i + 1) % nodes.length),
      3500
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 bg-white max-w-6xl mx-auto px-6 rounded-2xl overflow-hidden shadow-xl">
      <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center font-semibold tracking-tight">
        Our Innovation RoadMap
      </h2>
      <p className="max-w-3xl mx-auto text-center mb-20 text-gray-600 tracking-wide font-light">
        Precision, iteration, and mission focus — one expert, full lifecycle
        delivery.
      </p>

      <div className="relative w-full h-[350px] bg-gradient-to-br from-indigo-50 via-white to-teal-50 rounded-xl overflow-visible">
        {/* Map grid & foreground */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Map grid pattern */}
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="#e0e7ff"
                strokeWidth="0.5"
              />
            </pattern>
            {/* Subtle drop shadow for path and nodes */}
            <filter
              id="shadow"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              colorInterpolationFilters="sRGB"
            >
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="2"
                floodColor="#000"
                floodOpacity="0.1"
              />
            </filter>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
          {/* Curved path connecting all nodes exactly through their centers */}
          <path
            d={`
              M ${nodes[0].svg.cx} ${nodes[0].svg.cy}
              Q 33 10, ${nodes[1].svg.cx} ${nodes[1].svg.cy}
              T ${nodes[2].svg.cx} ${nodes[2].svg.cy}
            `}
            stroke="#7c3aed"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            filter="url(#shadow)"
            strokeDasharray="10 7"
          />
          {/* Markers (map pins) precisely at node centers */}
          {nodes.map((node, i) => (
            <g key={i} transform={`translate(${node.svg.cx},${node.svg.cy})`}>
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#7c3aed"
                filter="url(#shadow)"
              />
              {/* Map pin tail */}
              <path
                d="M0 5 L-1 8 L1 8 Z"
                fill="#7c3aed"
                filter="url(#shadow)"
              />
            </g>
          ))}
          {/* Decorative trees for map feel */}
          <polygon points="20,60 18,55 22,55" fill="#10b981" opacity="0.7" />
          <polygon points="60,17 58,12 62,12" fill="#10b981" opacity="0.7" />
          <polygon points="85,65 83,62 87,62" fill="#10b981" opacity="0.7" />
        </svg>

        {/* Step cards absolutely positioned over the marker centers */}
        {nodes.map((node, i) => (
          <div
            key={node.label}
            className={`absolute p-5 rounded-lg cursor-pointer shadow-lg transition-all transform text-center select-none
              ${
                current === i
                  ? "bg-indigo-600 text-white scale-110 z-30"
                  : "bg-white text-gray-900 scale-100 z-10"
              }`}
            style={{
              top: `calc(${node.css.top} - 44px)`, // center step card vertically on marker
              left: `calc(${node.css.left} - 80px)`, // center horizontally (card width ~160px)
            }}
            onClick={() => setCurrent(i)}
            role="button"
            tabIndex={0}
            aria-current={current === i ? "step" : undefined}
          >
            <h3 className="text-xl font-semibold mb-2">{node.label}</h3>
            {current === i && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-indigo-100 text-sm font-light"
              >
                {node.sub}
              </motion.p>
            )}
          </div>
        ))}

        {/* Animated moving marker (e.g. racecar or flag) at current step, perfectly over marker */}
        <motion.div
          className="absolute w-12 h-12 bg-indigo-700 rounded-full shadow-lg flex items-center justify-center text-white font-bold -translate-x-1/2 -translate-y-1/2 top-0 left-0 cursor-default select-none"
          style={{
            top: `calc(${nodes[current].css.top})`,
            left: `calc(${nodes[current].css.left})`,
          }}
          transition={{ type: "spring", stiffness: 250, damping: 25 }}
          aria-label={`Current stage: ${nodes[current].label}`}
        >
          🚩
        </motion.div>
      </div>
    </section>
  );
}
