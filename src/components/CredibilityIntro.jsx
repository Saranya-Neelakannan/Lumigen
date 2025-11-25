import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import ProvenImage from "../assets/proven.jpg";
import TransparentImage from "../assets/ai-agents.svg";
import EthicalImage from "../assets/ethics.jpg";

const beliefs = [
  {
    title: "Proven > Promised",
    body: "    We publish methodologies, results and reproducible artifacts to back our technical claims.",
    iconColor: "#6366F1",
    image: ProvenImage,
    alt: "Proven > Promised Illustration",
  },
  {
    title: "Transparent Engineering",
    body: "    Designs, benchmarks and pipelines are auditable: no black boxes, only documented systems.",
    iconColor: "#06B6D4",
    image: TransparentImage,
    alt: "Transparent Engineering Illustration",
  },
  {
    title: "Ethical, Responsible Scale",
    body: "    We bake governance and safety checks into deployments to ensure long-term reliability.",
    iconColor: "#22C55E",
    image: EthicalImage,
    alt: "Ethical Responsible Scale Illustration",
  },
];

function Typewriter({ text, active }) {
  const [displayed, setDisplayed] = React.useState("");

  useEffect(() => {
    if (!active) {
      setDisplayed("");
      return;
    }
    let index = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [active, text]);

  return (
    <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
      {displayed}
    </p>
  );
}

export default function CredibilityIntroWithImages() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-16 bg-gray-50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto text-center mb-12 md:mb-16"
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Technical Credibility — Proven, Not Promised
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We are a highly technical organization whose expertise is demonstrated
          through transparent engineering — public research, benchmarked
          systems, and deployment practices.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {beliefs.map(({ title, body, iconColor, image, alt }, i) => (
          <motion.article
            key={i}
            className="bg-white bg-opacity-30 backdrop-blur-md rounded-2xl border border-white/40 p-6 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8"
            tabIndex={0}
            role="group"
            aria-label={`${title}: ${body}`}
            onMouseEnter={() => setActiveIndex(i)}
            onFocus={() => setActiveIndex(i)}
            onBlur={() => setActiveIndex(null)}
          >
            <div className="flex-shrink-0 w-full md:w-36 h-36 object-contain select-none">
              <img
                src={image}
                alt={alt}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-center flex-1">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                {title}
              </h3>
              <Typewriter text={body} active={activeIndex === i} />
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
