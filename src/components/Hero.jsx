import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/motionPresets";

export default function Hero() {
  const videoSrc = "/videos/giveAi.mp4";
  const useVideo = true;

  const [showModal, setShowModal] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    if (showModal) {
      const focusableElements = modalRef.current.querySelectorAll(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      function trapFocus(e) {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        } else if (e.key === "Escape") {
          setShowModal(false);
        }
      }

      document.addEventListener("keydown", trapFocus);
      firstElement.focus();

      return () => {
        document.removeEventListener("keydown", trapFocus);
      };
    }
  }, [showModal]);

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-start bg-white overflow-hidden"
    >
      <div className="absolute inset-0 gradient-flow opacity-60" aria-hidden />
      {useVideo && (
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          aria-hidden
        />
      )}
      <div className="absolute inset-0"></div>

      <motion.div
        className="relative z-20 max-w-5xl px-4 sm:px-6 md:px-12 pt-28 pb-16 w-full"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          className="text-sm uppercase text-accentFrom font-semibold mb-4"
        >
          India’s First Research & Applied AI Company
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-textDark leading-tight"
        >
          Architecting the Future of Intelligence
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-lg text-textDark/70"
        >
          We are a deep-tech powerhouse — building mission-grade, build-to-order
          AI systems that translate research into real outcomes across
          industries.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex gap-4 flex-wrap">
          <a
            className="inline-block px-5 py-3 rounded-full text-white bg-gradient-to-r from-accentFrom to-accentTo shadow cursor-pointer"
            href="#work"
          >
            Explore Our Work
          </a>
          <button
            onClick={() => setShowModal(true)}
            className="inline-block px-5 py-3 rounded-full border border-gray-200 text-textDark hover:bg-gray-100 transition"
          >
            Contact Us
          </button>
        </motion.div>
      </motion.div>

      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          tabIndex={-1}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setShowModal(false)}
        >
          <div
            ref={modalRef}
            className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close contact form"
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl font-bold"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            <h2
              id="contact-modal-title"
              className="text-2xl font-semibold mb-6 text-gray-900"
            >
              Contact Us
            </h2>

            <form
              action="https://formspree.io/f/mwkajnly"
              method="POST"
              className="space-y-6"
            >
              <label className="block">
                <span className="text-gray-700">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="m-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </label>

              <label className="block">
                <span className="text-gray-700">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="m-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </label>

              <label className="block">
                <span className="text-gray-700">Message</span>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Your message"
                  className="mt-2 block w-full rounded-lg border border-gray-400 shadow-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
                />
              </label>

              <button
                type="submit"
                className="inline-block w-full px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
