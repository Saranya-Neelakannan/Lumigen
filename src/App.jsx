// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatWeAre from "./components/WhatWeAre";
import Pillars from "./components/Pillars";
import Lifecycle from "./components/Lifecycle";
import Footer from "./components/Footer";
import "./index.css";
import ResearchSection from "./components/ResearchSection";
import FullStackAI from "./components/FullStackAI";
import CredibilityIntro from "./components/CredibilityIntro";
import ResearchLibrary from "./components/ResearchLibrary";
import MetricsDashboard from "./components/MetricsDashboard";
import BuildToOrder from "./components/BuildToOrder";
import ModularSections from "./components/ResearchSection";

export default function App() {
  return (
    <div className="font-sans bg-softWhite text-textDark">
      <Header />
      <main>
        <Hero />
        <WhatWeAre />
        <Pillars />
        <Lifecycle />
        <BuildToOrder />
        <ResearchSection />
        <FullStackAI />
        <CredibilityIntro />
        <ResearchLibrary />
        <MetricsDashboard />
      </main>
      <Footer />
    </div>
  );
}
