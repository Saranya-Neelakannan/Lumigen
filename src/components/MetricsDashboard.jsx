import React, { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, Cpu, Globe } from "lucide-react";

const metrics = [
  {
    label: "Realized Business Value",
    value: 5,
    unit: "M+",
    icon: DollarSign,
    note: "Aggregate across case engagements",
    color: "from-sky-400 to-slate-400",
  },
  {
    label: "Agentic Systems Deployed",
    value: 10,
    unit: "+",
    icon: Cpu,
    note: "Production-grade agents",
    color: "from-teal-300 via-cyan-300 to-gray-400",
  },
  {
    label: "Domains",
    value: 4,
    unit: "",
    icon: Globe,
    note: "Healthcare, Defense, Enterprise, Industrial",
    color: "from-purple-300 via-indigo-300 to-gray-500",
  },
];

export default function AdvancedMetricsLight() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-indigo-50 to-white flex flex-col items-center justify-center px-3 md:px-6 py-10 md:py-20 text-gray-900">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-8 md:mb-12 text-center text-gray-900">
        Factual Content & Verifiable Metrics
      </h2>
      <p className="mb-10 md:mb-20 max-w-3xl text-center text-base md:text-lg text-gray-700">
        Every product and service is underpinned by published performance
        metrics and verifiable benchmarks, emphasizing long-term reliability and
        ethical deployment practices.
      </p>

      <motion.div
        className="flex flex-col md:flex-row flex-wrap items-center md:items-stretch justify-center gap-6 md:gap-10 w-full max-w-6xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {metrics.map(({ label, value, unit, icon: Icon, note, color }, idx) => (
          <motion.div
            key={label}
            className={`rounded-3xl p-10 md:p-16 cursor-pointer shadow-lg w-full max-w-sm md:w-64 flex flex-col items-center transition-transform hover:scale-105 bg-gradient-to-tr ${color} text-white`}
            onClick={() => setActiveIdx(idx)}
            role="button"
            tabIndex={0}
            aria-pressed={activeIdx === idx}
          >
            <div className="flex justify-center mb-6 text-white">
              <Icon size={48} />
            </div>
            <div className="text-4xl md:text-5xl font-extrabold tracking-tight flex justify-center items-baseline text-white">
              <span>{value}</span>
              <span className="text-2xl ml-1">{unit}</span>
            </div>
            <div className="mt-2 text-xl md:text-2xl font-semibold text-center">
              {label}
            </div>
            <div className="mt-1 text-white/90 text-sm text-center">{note}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
