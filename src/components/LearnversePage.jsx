// src/pages/LearnversePage.jsx
import React from "react";
import Hero from "./products/LearnverseHero.jsx";
import AudienceGrid from "./products/AudienceGrid.jsx";
import FeaturesGrid from "../components/products/FeaturesGrid";
import Workflow from "./products/Workflow.jsx";
import Screenshots from "../components/products/Screenshots";
import ValueHighlights from "./products/ValueHighlights.jsx";
import FAQ from "./products/FAQ.jsx";
import DemoForm from "./products/DemoForm.jsx";

export default function LearnversePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b001a] via-[#24004a] to-[#0b001a] text-white">
      <Hero />
      <section className="max-w-6xl mx-auto py-12 px-6">
        <p className="text-center text-gray-300 max-w-3xl mx-auto">
          The universe specialized for an intuitive AI learning experience —
          tailored for students, teachers and institutions.
        </p>
      </section>

      <AudienceGrid />

      <section className="max-w-6xl mx-auto py-8 px-6">
        <h3 className="text-2xl font-semibold text-cyan-300 mb-6">
          Key Features
        </h3>
        <FeaturesGrid />
      </section>

      <Workflow />

      <Screenshots />

      <ValueHighlights />

      <section className="max-w-6xl mx-auto py-10 px-6">
        <h3 className="text-2xl font-semibold text-cyan-300 mb-4">FAQ</h3>
        <FAQ />
      </section>

      <section className="max-w-4xl mx-auto py-12 px-6">
        <DemoForm />
      </section>
    </main>
  );
}
