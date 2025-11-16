// src/components/products/DemoForm.jsx
import React from "react";

export default function DemoForm() {
  return (
    <section
      id="demo"
      className="py-16 bg-gradient-to-b from-white via-sky-50/50 to-white"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white/80 border border-sky-100 rounded-3xl p-8 shadow-[0_22px_70px_rgba(15,23,42,0.10)] backdrop-blur-lg">
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
            Request a Learnverse demo
          </h3>
          <p className="text-sm text-slate-500 mb-6 max-w-xl">
            Share a few details and the team will reach out with a tailored
            walkthrough for your institute.
          </p>

          <form
            action="https://formspree.io/f/YOUR_ID"
            method="POST"
            className="grid gap-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="name"
                required
                placeholder="Full name"
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/60 focus:border-sky-300"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Work email"
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/60 focus:border-sky-300"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="organization"
                placeholder="Institute / organization"
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/60 focus:border-sky-300"
              />
              <input
                name="role"
                placeholder="Your role (Principal, Owner, HOD...)"
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/60 focus:border-sky-300"
              />
            </div>

            <textarea
              name="message"
              placeholder="Student strength, preferred demo time, current systems..."
              rows={4}
              className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/60 focus:border-sky-300"
            />

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white text-sm font-semibold shadow-[0_18px_45px_rgba(56,189,248,0.40)] hover:shadow-[0_22px_55px_rgba(236,72,153,0.40)] transition-transform hover:-translate-y-0.5"
              >
                Request demo
              </button>
              <button
                type="button"
                onClick={() => (window.location.href = "/contact")}
                className="px-6 py-3 rounded-full border border-sky-200 bg-white text-sky-700 text-sm font-medium hover:bg-sky-50"
              >
                Contact sales
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
