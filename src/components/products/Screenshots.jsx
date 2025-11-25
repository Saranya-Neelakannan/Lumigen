import React from "react";
import s1 from "../../assets/ethics.jpg";
import s2 from "../../assets/ethics.jpg";

export default function Screenshots() {
  return (
    <section className="py-16 bg-slate-50/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              See Learnverse in action
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-xl">
              A clean, light workspace where AI, students and staff collaborate
              in real time.
            </p>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Replace these placeholders with real classroom and admin views.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[s1, s2].map((src, i) => (
            <div
              key={i}
              className="bg-white border border-slate-100 rounded-3xl p-3 shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
            >
              <img
                src={src}
                alt={i === 0 ? "Student learning workspace" : "Institute admin dashboard"}
                loading="lazy"
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
