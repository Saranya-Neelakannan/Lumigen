import React from "react";

const AUDIENCE = [
  {
    title: "Students",
    bullets: [
      "Visually assisted concepts & simulations",
      "AI homework and doubt assistant",
      "Flexible tests & practice modes",
      "Community spaces & live quizzes",
    ],
  },
  {
    title: "Teachers",
    bullets: [
      "AI‑assisted lesson planning",
      "Smart timetable & workload balancing",
      "Hostel & transport coordination",
      "Library & inventory management",
    ],
  },
  {
    title: "Parents",
    bullets: [
      "Real‑time learning and progress view",
      "Transport, attendance & fee alerts",
      "Digital diary & announcements",
      "SMS / WhatsApp notifications",
    ],
  },
  {
    title: "Institutes",
    bullets: [
      "Attendance, finance & compliance",
      "Payroll, procurement & approvals",
      "Faculty analytics & reports",
      "Incubation & industry tie‑ups",
    ],
  },
  {
    title: "Owners",
    bullets: [
      "End‑to‑end governance dashboards",
      "Custom AI insights & reports",
      "Multi‑campus cloud access & CCTV",
      "E‑shop & promotion tools",
    ],
  },
];

export default function AudienceGrid() {
  return (
    <section className="py-14 bg-gradient-to-b from-white via-white to-sky-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              Designed for every stakeholder
            </h3>
            <p className="text-sm sm:text-base text-slate-500 max-w-xl mt-1">
              Learnverse aligns students, teachers, parents, and management on a
              single AI‑powered learning universe.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AUDIENCE.map((a) => (
            <div
              key={a.title}
              className="bg-white/80 border border-slate-100 rounded-2xl p-5 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-sm hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)] transition"
            >
              <h4 className="text-base sm:text-lg font-semibold text-slate-900 flex items-center gap-2">
                <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400" />
                {a.title}
              </h4>
              <ul className="mt-3 text-slate-600 space-y-1.5 text-xs sm:text-sm">
                {a.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1 h-1 w-1 rounded-full bg-sky-400 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
