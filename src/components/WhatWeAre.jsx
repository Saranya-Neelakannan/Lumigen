// src/components/WhatWeAre.jsx
import React from "react";

export default function WhatWeAre() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center">
        {/* left visual placeholder */}
        <div className="order-2 md:order-1">
          <div className="bg-white rounded-2xl shadow-neu p-6">
            {/* replace with image or Lottie later */}
            <div className="h-64 bg-gradient-to-tr from-accentFrom to-accentTo rounded-lg flex items-center justify-center text-white text-sm font-medium">
              <video
                src="/videos/AIChip.mp4"
                className="w-full h-full object-cover rounded-lg"
                autoPlay
                loop
                muted
              />
            </div>
          </div>
        </div>

        {/* right content */}
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-semibold text-textDark mb-3">
            What we are
          </h2>
          <p className="text-lg text-textDark/70 mb-4">
            We are a deep-tech, research-first organization delivering
            build-to-order AI and data systems for mission-critical problems. We
            combine rigorous research, production engineering, and product
            strategy to deliver measurable outcomes.
          </p>

          <ul className="space-y-3">
            <li className="flex gap-3 items-start">
              <div className="w-10 h-10 rounded-md bg-accentFrom/10 flex items-center justify-center text-accentFrom font-semibold">
                1
              </div>
              <div>
                <div className="font-semibold">Build-to-Order Model</div>
                <div className="text-sm text-textDark/70">
                  A single domain expert leads each engagement — precision over
                  scale.
                </div>
              </div>
            </li>

            <li className="flex gap-3 items-start">
              <div className="w-10 h-10 rounded-md bg-accentTo/10 flex items-center justify-center text-accentTo font-semibold">
                2
              </div>
              <div>
                <div className="font-semibold">Agentic AI at Scale</div>
                <div className="text-sm text-textDark/70">
                  Autonomous agents and orchestrations that bring step-change
                  improvements.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
