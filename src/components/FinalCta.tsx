/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export const FinalCta: React.FC = () => {
  return (
    <section id="contacto" className="relative py-24 md:py-28 bg-[#050505] overflow-hidden border-b border-white/[0.08]">
      {/* Quiet atmospheric glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0787CF]/[0.08] rounded-full blur-[140px]"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#009FE3] uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0787CF]" />
          <span>Agenda tu servicio</span>
        </div>

        {/* Big Bold Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F5] tracking-tight leading-tight mb-4">
          ¿Qué quieres limpiar?
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-[#8A8D91] max-w-lg mx-auto mb-8 leading-relaxed">
          Cuéntanos qué necesitas y solicita tu cotización por WhatsApp. Te atendemos de inmediato para coordinar la visita a tu domicilio.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-sm mx-auto mb-8">
          <a
            href="https://wa.me/526681841372?text=Hola%2C%20quisiera%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20servicio%20de%20limpieza."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md text-sm font-bold text-white bg-[#0787CF] hover:bg-[#009FE3] active:bg-[#0575B5] transition-all duration-150 shadow-[0_2px_16px_rgba(7,135,207,0.35)] focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#09B5EA]"
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span>Cotizar por WhatsApp</span>
          </a>

          <a
            href="tel:6681841372"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md text-sm font-medium text-[#D5D7D9] hover:text-white bg-[#0E1114] hover:bg-[#13171D] border border-white/[0.08] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#0787CF]" />
            <span className="font-mono text-xs">668 184 1372</span>
          </a>
        </div>

        {/* Direct phone reference */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#6E7378]">
          <span>Servicio a domicilio</span>
          <span>·</span>
          <span className="text-[#09B5EA]">WhatsApp: 668.184.13.72</span>
        </div>

      </div>
    </section>
  );
};
