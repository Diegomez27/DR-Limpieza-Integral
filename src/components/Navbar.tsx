/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import { MessageCircle, Menu, X, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Preguntas', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-[#050505]/60 backdrop-blur-xs border-b border-white/[0.04] py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Zone 1: Brand Wordmark / Logo */}
          <a
            href="#"
            className="flex items-center rounded-sm transition-opacity hover:opacity-90 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#0787CF]"
            aria-label="DR Limpieza Integral - Inicio"
          >
            <Logo size="md" showSubtitle={true} />
          </a>

          {/* Zone 2: Navigation Links (Clean & orderly) */}
          <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium text-[#9FA3A8]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors duration-150 relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Direct Phone & Primary CTA */}
          <div className="hidden sm:flex items-center gap-5">
            <a
              href="tel:6681841372"
              className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#8A8D91] hover:text-[#D5D7D9] transition-colors py-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#0787CF]" />
              <span>668 184 1372</span>
            </a>
            
            <a
              href="https://wa.me/526681841372?text=Hola%2C%20quisiera%20solicitar%20una%20cotizaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold text-white bg-[#0787CF] hover:bg-[#009FE3] active:bg-[#0575B5] transition-all duration-150 shadow-[0_2px_12px_rgba(7,135,207,0.3)] whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#09B5EA]"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Cotizar</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="https://wa.me/526681841372?text=Hola%2C%20quisiera%20solicitar%20una%20cotizaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-md text-white bg-[#0787CF] text-xs font-semibold"
            >
              Cotizar
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#D9D9D9] hover:text-white hover:bg-white/5 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#0787CF]"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0A0C0E] border-b border-white/10 px-5 pt-3 pb-6 space-y-4">
          <div className="flex flex-col space-y-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#E2E4E6] py-2 border-b border-white/[0.04] active:text-[#0787CF]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="https://wa.me/526681841372?text=Hola%2C%20quisiera%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20servicio%20de%20limpieza."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-xs font-semibold text-white bg-[#0787CF] hover:bg-[#009FE3]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Cotizar por WhatsApp</span>
            </a>
            <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-[#8A8D91] pt-1">
              <Phone className="w-3.5 h-3.5 text-[#0787CF]" />
              <span>668 184 1372</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
