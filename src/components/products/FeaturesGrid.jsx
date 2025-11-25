import React from "react";

const FEATURES = [
  {
    title: "Visual Learning OS",
    desc: "Interactive boards, simulations and explainers that make complex ideas instantly graspable.",
  },
  {
    title: "AI Homework Studio",
    desc: "Context‑aware AI that helps students practice, not just copy answers.",
  },
  {
    title: "Adaptive Assessments",
    desc: "Create, schedule and auto‑grade flexible tests with rich analytics.",
  },
  {
    title: "Learning Communities",
    desc: "Curated spaces, coding cohorts and interest‑based groups for learners.",
  },
  {
    title: "Campus Command Center",
    desc: "Finance, attendance, procurement and payroll in one unified workspace.",
  },
  {
    title: "Benchmarks & Careers",
    desc: "Percentile analytics, skill maps and AI‑guided career pathways.",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-xl">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-sky-500 uppercase">
            Capabilities
          </p>
          <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-900">
            Everything a modern AI‑native campus needs
          </h3>
          <p className="mt-2 text-sm sm:text-base text-slate-500">
            Learnverse combines learning, assessment and administration into a
            single, beautifully simple interface for your entire institute.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group bg-gradient-to-b from-white to-sky-50/60 border border-sky-100/70 rounded-2xl p-5 shadow-[0_18px_45px_rgba(15,23,42,0.04)] hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)] hover:-translate-y-1 transition relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-sky-200/40 blur-2xl group-hover:bg-fuchsia-200/40 transition" />
              <h4 className="relative text-base sm:text-lg font-semibold text-slate-900">
                {f.title}
              </h4>
              <p className="relative text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
