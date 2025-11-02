// src/components/Header.jsx
import React, { useState } from "react";
import logo from "../assets/lumigenLogo.jpg"; // replace with your file

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed w-full top-0 z-40 bg-white/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Lumigen Labs" className="h-10 w-auto" />
          <span className="text-lg font-semibold text-textDark">
            Lumigen Labs
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-textDark/80">
          <a href="#about" className="hover:text-accentFrom transition">
            About
          </a>
          <a href="#solutions" className="hover:text-accentFrom transition">
            Solutions
          </a>
          <a href="#research" className="hover:text-accentFrom transition">
            Research
          </a>
          <a href="#contact" className="hover:text-accentFrom transition">
            Contact
          </a>
          <a
            href="#work"
            className="ml-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-accentFrom to-accentTo shadow-sm"
          >
            Get Started
          </a>
        </nav>

        {/* mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md border border-gray-200"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="#0b1526"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow border-t">
          <div className="px-6 py-4 flex flex-col gap-3">
            <a href="#about" className="py-2">
              About
            </a>
            <a href="#solutions" className="py-2">
              Solutions
            </a>
            <a href="#research" className="py-2">
              Research
            </a>
            <a href="#contact" className="py-2">
              Contact
            </a>
            <a
              href="#work"
              className="py-2 inline-block rounded-full text-white bg-gradient-to-r from-accentFrom to-accentTo px-4 py-2 text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
