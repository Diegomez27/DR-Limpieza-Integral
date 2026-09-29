/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ServiceTicker } from './components/ServiceTicker.tsx';
import { ServicesShowcase } from './components/ServicesShowcase.tsx';
import { BeforeAfterSlider } from './components/BeforeAfterSlider.tsx';
import { VisualBreak } from './components/VisualBreak.tsx';
import { QuoteCalculator } from './components/QuoteCalculator.tsx';
import { ProcessTimeline } from './components/ProcessTimeline.tsx';
import { FaqAccordion } from './components/FaqAccordion.tsx';
import { FinalCta } from './components/FinalCta.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] antialiased selection:bg-[#0787CF]/30 selection:text-white flex flex-col">
      {/* 01. Navbar */}
      <Navbar />

      <main className="grow">
        {/* 02. Hero Section */}
        <Hero />

        {/* 03. Service Typographic Ticker */}
        <ServiceTicker />

        {/* 04. Services Editorial Showcase */}
        <ServicesShowcase />

        {/* 05. Before / After Interactive Slider */}
        <BeforeAfterSlider />

        {/* 06. Visual Break */}
        <VisualBreak />

        {/* 07. Quick Quote Generator */}
        <QuoteCalculator />

        {/* 08. Process Steps */}
        <ProcessTimeline />

        {/* 09. FAQ Accordion */}
        <FaqAccordion />

        {/* 10. Final CTA */}
        <FinalCta />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Floating & Mobile Sticky WhatsApp Trigger */}
      <FloatingWhatsApp />
    </div>
  );
}
