/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageCircle, ArrowRight, Check } from 'lucide-react';
import { SofaExtractionVisual } from './VisualAssets.tsx';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-[#050505]">
      {/* Quiet ambient radial light */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-0 w-[500px] h-[500px] bg-[#0787CF]/[0.08] rounded-full blur-[140px] -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (Content, 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Clean metadata kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#009FE3] uppercase mb-4">
              <span>DR Limpieza Integral</span>
              <span aria-hidden="true" className="text-[#34373A]">·</span>
              <span className="text-[#A1A4A8]">Servicio a Domicilio</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#F5F5F5] tracking-tight leading-[1.12] mb-5 text-balance">
              Tu sala puede volver <br className="hidden sm:inline" />
              a verse <span className="metallic-text">así de bien.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-[17px] text-[#8A8D91] max-w-xl leading-relaxed mb-8">
              Limpieza profesional de salas, colchones, alfombras, sillas y persianas. 
              Extracción profunda de suciedad y ácaros directo en tu domicilio.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-10">
              <a
                href="https://wa.me/526681841372?text=Hola%2C%20vi%20su%20p%C3%A1gina%20y%20quisiera%20solicitar%20una%20cotizaci%C3%B3n."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md text-sm font-semibold text-white bg-[#0787CF] hover:bg-[#009FE3] active:bg-[#0575B5] transition-all duration-150 shadow-[0_2px_16px_rgba(7,135,207,0.35)] focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#09B5EA]"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <span>Cotizar por WhatsApp</span>
              </a>

              <a
                href="#resultados"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md text-sm font-medium text-[#D5D7D9] hover:text-white bg-[#0D1014] hover:bg-[#13171D] border border-white/[0.08] hover:border-white/15 transition-all duration-150"
              >
                <span>Ver resultados</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0787CF]" />
              </a>
            </div>

            {/* Practical feature checks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/[0.08] w-full text-xs text-[#A1A4A8]">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#0787CF]/15 text-[#09B5EA]">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Inyección y succión profunda</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#0787CF]/15 text-[#09B5EA]">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Servicio 100% a domicilio</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#0787CF]/15 text-[#09B5EA]">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Respuesta ágil por WhatsApp</span>
              </div>
            </div>

          </div>

          {/* Right Column (Visual Focal Point, 5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-white/[0.12] bg-[#0A0C0E] shadow-[0_16px_40px_rgba(0,0,0,0.8)]">
              <SofaExtractionVisual className="w-full aspect-[4/3] sm:aspect-[16/11]" />

              {/* Status Indicator */}
              <div className="absolute top-3 left-3 flex items-center gap-2 bg-[#050505]/85 border border-white/10 px-2.5 py-1 rounded text-[11px] text-[#D5D7D9] backdrop-blur-xs select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#09B5EA]" />
                <span className="font-medium">Extracción profunda activa</span>
              </div>
            </div>

            {/* Subdued footer under image */}
            <div className="mt-2.5 flex items-center justify-between text-[11px] text-[#6E7378] px-1 font-mono">
              <span>Contacto: 668 184 1372</span>
              <span className="text-[#0787CF]">Tecnología de inyección-succión</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
