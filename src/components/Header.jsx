import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/lumigentranslogo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const onHome = location.pathname === "/";
  const ctaLabel = onHome ? "Visit LearnVerse" : "Visit Home";

  const handleCloseMenu = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleCtaClick = () => {
    if (onHome) {
      navigate("/learnverse");
    } else {
      navigate("/");
    }
    handleCloseMenu();
  };

  return (
    <header className="fixed w-full top-0 z-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Lumigen Labs" className="h-24 sm:h-16 w-24" />
          <span className="text-lg font-semibold text-textDark">
            Lumigen Labs
          </span>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-textDark/80">
          <a href="#about" className="hover:text-accentFrom transition">
            About
          </a>
          <a href="#products" className="hover:text-accentFrom transition">
            Products
          </a>
          <a href="#research" className="hover:text-accentFrom transition">
            Research
          </a>

          <button
            onClick={handleCtaClick}
            className="ml-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-accentFrom to-accentTo shadow-sm"
          >
            {ctaLabel}
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md border border-gray-200"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <svg width="24" height="24" fill="none">
              <path
                d="M6 6l12 12M6 18L18 6"
                stroke="#0b1526"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="#0b1526"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-30 ${
          open ? "block" : "hidden"
        }`}
        aria-hidden={!open}
        onClick={handleCloseMenu}
      />

      {/* Mobile side menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white z-40 shadow-lg transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        aria-hidden={!open}
      >
        <div className="px-6 py-8 flex flex-col gap-3">
          <a href="#about" className="py-2" onClick={handleCloseMenu}>
            About
          </a>
          <a href="#products" className="py-2" onClick={handleCloseMenu}>
            Products
          </a>
          <a href="#research" className="py-2" onClick={handleCloseMenu}>
            Research
          </a>
          <button
            onClick={handleCtaClick}
            className="py-2 mt-2 inline-block rounded-full text-white bg-gradient-to-r from-accentFrom to-accentTo px-4 text-center"
          >
            {ctaLabel}
          </button>
        </div>
      </div>
    </header>
  );
}
