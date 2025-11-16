// src/components/products/ValueHighlights.jsx
import React from "react";

const H = [
  {
    title: "Benchmark Reports",
    desc: "Percentile‑based performance, concept mastery and cohort benchmarks for every learner.",
  },
  {
    title: "Career Guidance",
    desc: "AI‑assisted career pathways with skills, exams and portfolios mapped to each student.",
  },
  {
    title: "Networking & Coding",
    desc: "Communities, coding practice and peer networks that extend beyond the classroom.",
  },
];

export default function ValueHighlights() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
          Value beyond the classroom
        </h3>
        <p className="text-sm text-slate-500 mb-8 max-w-xl">
          Learnverse doesn’t stop at exams; it builds long‑term career readiness
          and peer‑to‑peer networks.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {H.map((h) => (
            <div
              key={h.title}
              className="bg-gradient-to-b from-sky-50 to-fuchsia-50/70 border border-sky-100/60 rounded-2xl p-5 shadow-[0_18px_45px_rgba(15,23,42,0.05)]"
            >
              <h4 className="text-sm font-semibold text-slate-900">
                {h.title}
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {h.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
