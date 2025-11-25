import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideUp } from "../utils/motionPresets";

const InlineDocker = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 12h6v3H3z" fill="#2496ED" />
    <path d="M3 9h6v3H3z" fill="#2496ED" />
    <path d="M9 6h6v3H9z" fill="#2496ED" />
    <path d="M15 3h6v3h-6z" fill="#2496ED" />
    <path d="M15 12h6v3h-6z" fill="#2496ED" />
  </svg>
);

const InlineK8s = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <circle cx="12" cy="12" r="9" stroke="#3182CE" strokeWidth="1.2" />
    <path
      d="M12 6v12"
      stroke="#3182CE"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M8 8l8 8"
      stroke="#3182CE"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M16 8l-8 8"
      stroke="#3182CE"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const InlineTorch = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="16"
      rx="2"
      stroke="#FF6B6B"
      strokeWidth="1.2"
    />
    <path
      d="M7 8h10"
      stroke="#FF6B6B"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M7 12h10"
      stroke="#FF6B6B"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

export default function FullStackAI() {
  const features = [
    {
      icon: <InlineDocker />,
      title: "Containerized Infra",
      subtitle: "Reproducible runtimes for reliable deployments.",
    },
    {
      icon: <InlineK8s />,
      title: "Orchestration",
      subtitle: "Scalable clusters and resilient orchestration.",
    },
    {
      icon: <InlineTorch />,
      title: "Model Frameworks",
      subtitle: "Research-to-production model pipelines.",
    },
    {
      icon: <InlineDocker />,
      title: "MLOps Pipelines",
      subtitle: "Automated testing, benchmarking and CI/CD.",
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
            Full-Stack AI Productivity Ecosystem
          </h2>
          <p className="text-gray-600 max-w-xl">
            A unified platform for going from research to robust production —
            combining Open-Labs frameworks, reproducible infra, and continuous
            benchmarking to deliver mission-grade AI.
          </p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100"
              >
                <div className="flex items-center justify-center w-10 h-10">
                  {f.icon}
                </div>
                <div>
                  <div className="font-medium text-gray-800">{f.title}</div>
                  <div className="text-sm text-gray-500">{f.subtitle}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Credibility */}
          <div className="mt-6">
            <h4 className="text-base font-medium text-gray-900 mb-2">
              Credibility & Tools
            </h4>
            <p className="text-sm text-gray-600 max-w-2xl">
              Our engineering is built on an Open-Labs hybrid framework, agentic
              devops patterns, and reproducible deployments — with transparent
              benchmarks and operational governance.
            </p>
            <div className="mt-4 flex gap-4 items-center flex-wrap">
              {/* small icon chips */}
              <div className="flex items-center gap-2 bg-white border border-gray-100 p-2 rounded-md">
                <InlineTorch className="w-5 h-5" />{" "}
                <span className="text-xs text-gray-700">PyTorch</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-gray-100 p-2 rounded-md">
                <InlineDocker className="w-5 h-5" />{" "}
                <span className="text-xs text-gray-700">Docker</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-gray-100 p-2 rounded-md">
                <InlineK8s className="w-5 h-5" />{" "}
                <span className="text-xs text-gray-700">Kubernetes</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right visual stack */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative flex items-center justify-center mt-12 md:mt-0"
        >
          <div className="relative">
            <div className="absolute -inset-16 rounded-full bg-gradient-to-r from-indigo-200 to-cyan-200 opacity-40 blur-3xl" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 w-56 sm:w-64 text-center shadow-lg">
                <div className="text-sm font-medium text-gray-800">AI Models</div>
                <div className="text-xs text-gray-500 mt-2">
                  Model libraries & agentic stacks
                </div>
              </div>

              <div
                className="bg-white rounded-2xl border border-gray-100 p-6 w-64 sm:w-72 mt-4 text-center shadow-lg"
                style={{ transform: "translateY(10px)" }}
              >
                <div className="text-sm font-medium text-gray-800">Data Layer</div>
                <div className="text-xs text-gray-500 mt-2">
                  Feature stores, pipelines, datasets
                </div>
              </div>

              <div
                className="bg-white rounded-2xl border border-gray-100 p-6 w-72 sm:w-80 mt-4 text-center shadow-lg"
                style={{ transform: "translateY(20px)" }}
              >
                <div className="text-sm font-medium text-gray-800">Infrastructure</div>
                <div className="text-xs text-gray-500 mt-2">
                  Compute, orchestration & monitoring
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
