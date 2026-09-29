/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/526681841372?text=Hola%2C%20vi%20su%20p%C3%A1gina%20y%20quisiera%20solicitar%20una%20cotizaci%C3%B3n.';

  return (
    <>
      {/* Desktop Floating WhatsApp Button (bottom-right) */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#0787CF] hover:bg-[#009FE3] text-white shadow-[0_4px_20px_rgba(7,135,207,0.4)] transition-all duration-150 hover:scale-105 active:scale-95 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#09B5EA]"
          aria-label="Abrir conversación de WhatsApp con DR Limpieza Integral"
        >
          <MessageCircle className="w-4 h-4 fill-current shrink-0" />
          <span className="text-xs font-bold tracking-tight">
            Cotizar por WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Action Bar (complies with 15% sticky cap) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 p-2.5 bg-[#080A0C]/95 backdrop-blur-md border-t border-white/[0.08] shadow-[0_-4px_20px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-2 max-w-md mx-auto">
          <a
            href="tel:6681841372"
            className="flex items-center justify-center p-2.5 rounded-lg bg-[#111418] border border-white/[0.08] text-white shrink-0 active:bg-white/10"
            aria-label="Llamar a DR Limpieza Integral"
          >
            <Phone className="w-4 h-4 text-[#0787CF]" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#0787CF] active:bg-[#009FE3] text-white font-bold text-xs shadow-[0_2px_12px_rgba(7,135,207,0.4)]"
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span>Cotizar por WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
};
