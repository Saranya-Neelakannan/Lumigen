import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { DollarSign, Cpu, Globe } from "lucide-react";
import { fadeUp, staggerContainer } from "../utils/motionPresets";

const metrics = [
  {
    label: "Realized Business Value",
    value: "5M",
    displayValue: "$5M+",
    icon: DollarSign,
    note: "Aggregate across case engagements",
  },
  {
    label: "Agentic Systems Deployed",
    value: 10,
    displayValue: "10+",
    icon: Cpu,
    note: "Production-grade agents",
  },
  {
    label: "Domains",
    value: 4,
    displayValue: "4",
    icon: Globe,
    note: "Healthcare, Defense, Enterprise, Industrial",
  },
];

function MetricCard({ label, value, displayValue, icon: Icon, note, active }) {
  const count = (active, value);

  return (
    <motion.div
      className="relative p-8 rounded-3xl bg-white bg-opacity-30 backdrop-blur-md border border-white/40 shadow-lg flex flex-col items-center cursor-default transition-shadow hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500"
      tabIndex={0}
      role="region"
      aria-label={`${label}, ${note}, value ${displayValue}`}
    >
      <div className="bg-gradient-to-tr from-blue-400 to-indigo-600 p-4 rounded-xl shadow-lg mb-6 text-white">
        <Icon size={36} aria-hidden="true" />
      </div>
      <div className="text-gray-900 text-5xl font-extrabold tracking-tight font-mono">
        {value > 100 ? `$${count}` : count}
        {value >= 1000000 && "M+"}
        {displayValue.includes("+") && "+"}
      </div>
      <div className="mt-2 text-gray-700 text-xl font-semibold text-center">
        {label}
      </div>
      <div className="mt-1 text-gray-500 text-center text-sm">{note}</div>
    </motion.div>
  );
}

export default function MetricsDashboard() {
  const controls = useAnimation();
  const [inView, setInView] = useState(false);

  const onViewportEnter = () => {
    if (!inView) {
      controls.start("visible");
      setInView(true);
    }
  };

  return (
    <section id="metrics" className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
          onViewportEnter={onViewportEnter}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 max-w-4xl mx-auto text-center">
            Factual Content & Verifiable Metrics
          </h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto text-center text-lg leading-relaxed">
            Every product and service is underpinned by published performance
            metrics and verifiable benchmarks, emphasizing long-term reliability
            and ethical deployment practices.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-10 sm:grid-cols-3"
        >
          {metrics.map(({ label, value, displayValue, icon, note }, i) => (
            <MetricCard
              key={i}
              label={label}
              value={value}
              displayValue={displayValue}
              icon={icon}
              note={note}
              active={inView}
            />
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-white/40 p-8 bg-white shadow-lg max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="text-lg font-semibold text-gray-900">
                Benchmark Library
              </div>
              <div className="text-gray-600 mt-1">
                Open, reproducible benchmark results for select products and
                workloads.
              </div>
            </div>

            <div className="flex gap-6">
              <a
                href="#benchmarks"
                className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
              >
                View Benchmarks
              </a>
              <a
                href="#audits"
                className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
              >
                External Audits
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
