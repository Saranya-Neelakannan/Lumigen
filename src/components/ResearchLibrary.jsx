import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/motionPresets";

const papers = [
  {
    title: "A Comprehensive Survey on Retrieval Methods in Recommender Systems",
    tag: "Survey",
    excerpt:
      "An in-depth review of techniques for candidate retrieval approaches in modern recommender systems.",
    href: "https://arxiv.org/abs/2407.21022v1",
    published: "11 Oct 2025",
  },
  {
    title:
      "Are We Asking the Right Questions? On Ambiguity in Natural Language Queries for Tabular Data Analysis",
    tag: "Paper",
    excerpt:
      "Discussion of cooperative query frameworks to address ambiguity in natural language interfaces for tabular analysis.",
    href: "https://arxiv.org/pdf/2511.04584.pdf",
    published: "6 Nov 2025",
  },
  {
    title:
      "Post-Training LLMs as Better Decision-Making Agents: A Regret-Minimization Approach",
    tag: "Research",
    excerpt:
      "Investigating methods to improve large language models for autonomous decision-making using regret minimization.",
    href: "https://arxiv.org/pdf/2511.04393.pdf",
    published: "6 Nov 2025",
  },
  {
    title:
      "Speed at the Cost of Quality? The Impact of LLM Agent Assistance on Software Development",
    tag: "Study",
    excerpt:
      "Analyzing trade-offs between accelerated development and quality when integrating LLM-based agent assistance.",
    href: "https://arxiv.org/pdf/2511.04427.pdf",
    published: "6 Nov 2025",
  },
];

export default function ResearchLibrary() {
  return (
    <section id="research" className="py-16 px-4 sm:px-6 md:px-12 bg-gray-50">
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
            Access our curated library of technical papers, surveys, and studies
            reflecting our deep technical contributions and thought leadership.
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
                  <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{p.excerpt}</p>
                </div>
                <div className="ml-4">
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
                <div className="text-xs text-gray-500">{p.published}</div>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-600 font-medium hover:underline"
                >
                  Read paper →
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
