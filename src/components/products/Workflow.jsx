// src/components/products/Workflow.jsx
import React from "react";

const STEPS = [
  {
    title: "Onboard",
    desc: "Import students, staff and historical data; configure campuses and roles in days, not months.",
  },
  {
    title: "Engage",
    desc: "Launch visual lessons, quizzes, AI tutors and communication channels across your institute.",
  },
  {
    title: "Assess & Act",
    desc: "Review reports, spot risks early and trigger targeted academic or administrative interventions.",
  },
];

export default function Workflow() {
  return (
    <section className="py-16 bg-gradient-to-b from-sky-50/60 via-white to-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
          How Learnverse rolls out
        </h3>
        <p className="text-sm text-slate-500 mb-8 max-w-xl">
          From first login to full‑scale adoption, Learnverse is designed to
          feel familiar to teachers and magical to students.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((s, idx) => (
            <div
              key={s.title}
              className="relative bg-white/80 border border-slate-100 rounded-2xl p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] flex flex-col items-start"
            >
              <div className="mb-3 flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-sky-500 to-fuchsia-500 text-white text-sm font-semibold flex items-center justify-center shadow-md">
                  {`0${idx + 1}`}
                </div>
                <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Step
                </span>
              </div>
              <h4 className="text-base font-semibold text-slate-900">
                {s.title}
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
