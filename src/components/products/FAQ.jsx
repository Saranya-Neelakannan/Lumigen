// src/components/products/FAQ.jsx
import React, { useState } from "react";

const Q = [
  {
    q: "How do demos work?",
    a: "Share a few details and we’ll schedule a 30‑minute walkthrough tailored to your institute’s context.",
  },
  {
    q: "Does Learnverse use cameras?",
    a: "Camera features are fully optional and consent‑based, typically used for toddler monitoring, security and smart attendance.",
  },
  {
    q: "How is data secured?",
    a: "Learnverse uses encryption in transit and at rest, fine‑grained roles and regional data residency options where required.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-16 bg-slate-50/60">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
          Frequently asked questions
        </h3>
        <p className="text-sm text-slate-500 mb-6">
          Straight answers to the things most institutes ask while evaluating
          Learnverse.
        </p>

        <div className="space-y-3">
          {Q.map((item, idx) => (
            <div
              key={item.q}
              className="bg-white border border-slate-100 rounded-2xl px-4 py-3 shadow-sm"
            >
              <button
                className="w-full text-left flex justify-between items-center gap-4"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span className="text-sm font-medium text-slate-900">
                  {item.q}
                </span>
                <span className="text-sky-500 text-xl leading-none">
                  {open === idx ? "–" : "+"}
                </span>
              </button>
              {open === idx && (
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
