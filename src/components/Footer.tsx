/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Logo } from './Logo.tsx';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Preguntas', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <footer className="bg-[#050505] pt-14 pb-20 sm:pb-14 text-[#8A8D91]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/[0.08] items-start">
          
          {/* Brand Info (5 Cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#" className="mb-3.5 inline-block">
              <Logo size="md" showSubtitle={true} />
            </a>
            <p className="text-xs text-[#8A8D91] max-w-sm leading-relaxed mb-3">
              Servicio profesional de limpieza y extracción profunda a domicilio para salas, colchones, alfombras, sillas y persianas.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D5D7D9]">
              <Phone className="w-3.5 h-3.5 text-[#0787CF]" />
              <span>WhatsApp / Llamadas: 668 184 1372</span>
            </div>
          </div>

          {/* Quick Navigation (4 Cols) */}
          <div className="md:col-span-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F5F5F5] block mb-3">
              Navegación
            </span>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#cotizador"
                  className="text-[#09B5EA] hover:text-white font-medium transition-colors"
                >
                  Cotizador rápido
                </a>
              </li>
            </ul>
          </div>

          {/* WhatsApp Direct Action (3 Cols) */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F5F5F5] block mb-3">
              Atención directa
            </span>
            <a
              href="https://wa.me/526681841372?text=Hola%2C%20quisiera%20solicitar%20una%20cotizaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-[#0C1014] hover:bg-[#12171E] text-xs font-semibold text-white border border-white/[0.08] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#09B5EA]" />
              <span>668 184 1372</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-1.5 text-xs text-[#6E7378] hover:text-white transition-colors cursor-pointer"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#52565B]">
          <p>
            © {new Date().getFullYear()} DR Limpieza Integral. Todos los derechos reservados.
          </p>

          <p className="font-mono text-[11px] text-[#8A8D91]">
            Concepto de sitio web · Demo no oficial
          </p>
        </div>

      </div>
    </footer>
  );
};
