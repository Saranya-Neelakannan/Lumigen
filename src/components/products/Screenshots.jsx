// src/components/products/Screenshots.jsx
import React from "react";
import s1 from "../../assets/ethics.jpg";
import s2 from "../../assets/ethics.jpg";

export default function Screenshots() {
  return (
    <section className="py-16 bg-slate-50/70">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">
              See Learnverse in action
            </h3>
            <p className="mt-2 text-sm text-slate-500 max-w-xl">
              A clean, light workspace where AI, students and staff collaborate
              in real time.
            </p>
          </div>
          <p className="text-xs text-slate-400">
            Replace these placeholders with real classroom and admin views.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-100 rounded-3xl p-3 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
            <img
              src={s1}
              alt="Student learning workspace"
              className="rounded-2xl w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="bg-white border border-slate-100 rounded-3xl p-3 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
            <img
              src={s2}
              alt="Institute admin dashboard"
              className="rounded-2xl w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
