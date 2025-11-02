// ResearchLibrary.jsx
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/motionPresets";

/**
 * ResearchLibrary.jsx
 * - Grid of research/paper cards
 * - Each card: title, short excerpt, tags, link placeholder
 */

const papers = [
  {
    title: "Recommendation: The Right LLM for the Job",
    tag: "Paper",
    excerpt:
      "A parameter-by-parameter breakdown for selecting LLMs by task and constraints.",
    href: "#",
  },
  {
    title: "Benchmarking Orchestration Frameworks",
    tag: "Benchmark",
    excerpt:
      "Comparative evaluation of multi-agent orchestration: LangGraph vs. Autokool.",
    href: "#",
  },
  {
    title: "Hardware Optimization Studies",
    tag: "Study",
    excerpt:
      "Empirical analysis of throughput & cost across GPU families for agentic workloads.",
    href: "#",
  },
  {
    title: "Neural Decoding: Non-Invasive Pipelines",
    tag: "Paper",
    excerpt:
      "Methods for signal processing and simulation in brain-interface prototypes.",
    href: "#",
  },
  // add more items as needed
];

export default function ResearchLibrary() {
  return (
    <section id="research-library" className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl font-semibold text-gray-900">
            Public Expertise & Research
          </h2>
          <p className="text-gray-600 mt-3 max-w-3xl">
            Access our library of technical papers, comparative studies and
            benchmark reports. Each item links to reproducible artifacts and
            datasets where available.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {papers.map((p, i) => (
            <motion.article
              key={i}
              variants={fadeUp}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-indigo-600 font-semibold mb-2">
                    {p.tag}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">{p.excerpt}</p>
                </div>
                <div className="ml-4">
                  {/* placeholder thumbnail / icon */}
                  <div className="w-14 h-14 rounded-md bg-gradient-to-br from-indigo-50 to-teal-50 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 6h16v12H4z"
                        stroke="#6366F1"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M8 10h8"
                        stroke="#06B6D4"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs text-gray-500">Published • 2024</div>
                <a
                  href={p.href}
                  className="text-sm text-indigo-600 font-medium hover:underline"
                >
                  Read paper →
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-8 text-center">
          <a
            href="#research"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-teal-400 text-white shadow"
          >
            View Research & Insights
          </a>
        </div>
      </div>
    </section>
  );
}
