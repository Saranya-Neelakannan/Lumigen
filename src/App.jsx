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
import LearnVerseHighlight from "./components/LearnVerseHighlight";
import LearnVersePage from "./components/LearnversePage";
import { Routes, Route } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <Hero />
      <WhatWeAre />
      <Pillars />
      <Lifecycle />
      <BuildToOrder />
      <LearnVerseHighlight />
      <ResearchSection />
      <FullStackAI />
      <CredibilityIntro />
      <ResearchLibrary />
      <MetricsDashboard />
    </>
  );
}

export default function App() {
  return (
    <div className="font-sans bg-softWhite text-textDark">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/learnverse" element={<LearnVersePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
