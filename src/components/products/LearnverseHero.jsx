// src/components/products/LearnverseHero.jsx
import React from "react";
import brain from "../../assets/ethics.jpg"; // replace with a light, futuristic illustration later

export default function LearnverseHero() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-sky-50 via-white to-indigo-50">
      {/* background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-10 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-80 w-80 rounded-full bg-fuchsia-200/40 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-sky-600 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
            Products • Learnverse
          </p>
          <h1 className="text-4xl md:text-5xl font-black leading-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-700 via-indigo-700 to-fuchsia-600">
            Learnverse — The AI Learning Universe
          </h1>
          <p className="text-slate-600 max-w-xl text-sm md:text-base">
            A unified AI learning cloud for institutes, blending visually
            assisted learning, adaptive assessments, and end‑to‑end campus
            administration in one futuristic workspace.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white text-sm font-semibold shadow-[0_18px_45px_rgba(56,189,248,0.35)] hover:shadow-[0_22px_55px_rgba(236,72,153,0.35)] transition-transform hover:-translate-y-0.5"
              href="#demo"
            >
              Request demo
            </a>
            <a
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-sky-200 bg-white/60 text-sky-700 text-sm font-medium backdrop-blur-md hover:bg-sky-50"
              href="#features"
            >
              Explore features
            </a>
          </div>

          <div className="flex flex-wrap gap-6 pt-2 text-xs text-slate-500">
            <div>
              <p className="font-semibold text-slate-700">
                For K‑12, Colleges & EdTech
              </p>
              <p>Scales from single campus to multi‑city networks.</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          {/* glass card behind image */}
          <div className="absolute -inset-6 md:-inset-8 rounded-[2.5rem] bg-white/70 backdrop-blur-xl border border-sky-100 shadow-[0_24px_80px_rgba(15,23,42,0.10)]" />
          <img
            src={brain}
            alt="Learnverse visualization"
            className="relative w-[380px] md:w-[460px] rounded-[2rem] object-cover shadow-[0_18px_60px_rgba(15,23,42,0.24)]"
          />
          {/* small floating pill */}
          <div className="hidden md:flex absolute -bottom-6 left-8 px-4 py-2 rounded-full bg-white/90 border border-slate-100 shadow-sm text-xs text-slate-600 items-center gap-2 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Live AI tutors • 24/7
          </div>
        </div>
      </div>
    </section>
  );
}
