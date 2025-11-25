import React from "react";

export default function WhatWeAre() {
  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 md:px-12 bg-white overflow-hidden"
      aria-labelledby="about-title"
    >
      <div
        className="absolute -top-16 -left-32 w-48 h-48 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 opacity-30 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -right-24 w-40 h-40 rounded-full bg-gradient-to-tr from-indigo-400 to-teal-400 opacity-25 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 max-w-lg mx-auto md:mx-0">
          <h1
            id="about-title"
            className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-700 text-transparent bg-clip-text"
          >
            Lumigen Labs: Deep Tech Frontier
          </h1>

          <h2 className="font-semibold text-gray-800 text-2xl tracking-wide drop-shadow-sm">
            Architecting the Future with Agentic AI at Scale.
          </h2>

          <p className="text-base text-gray-700 leading-relaxed tracking-wide max-w-md">
            We are a deep-tech powerhouse, specializing in reliable, high-impact
            AI products across varied industries, delivering niche,{" "}
            <span className="italic font-semibold text-blue-700">
              ‘Build-to-Order’ AI and Data services
            </span>{" "}
            designed precisely for critical challenges.
          </p>

          <ul className="space-y-5">
            {[
              "Highly technical product organization",
              'Deep-tech AI company with a "Build-to-Order" service model',
              "Showcase key impressive elements",
            ].map((obj, i) => (
              <li
                key={i}
                className="flex items-center space-x-4 cursor-default"
                tabIndex={0}
              >
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-700 text-white font-bold select-none text-sm leading-none">
                  {i + 1}
                </span>
                <p className="font-medium text-gray-900">{obj}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-xl cursor-pointer transition-transform hover:scale-105 duration-300 ease-in-out border border-gray-200 backdrop-blur-sm bg-white/60 max-w-md mx-auto md:mx-0">
          <video
            src="/videos/AIChip.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-72 md:h-full object-cover rounded-3xl"
            aria-label="Showcase of Lumigen Labs AI technology"
          />
        </div>
      </div>
    </section>
  );
}
