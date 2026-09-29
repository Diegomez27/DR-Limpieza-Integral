/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SofaExtractionVisual, MattressVisual, RugVisual, ChairVisual, BlindsVisual } from './VisualAssets.tsx';
import { ArrowRight, MessageCircle, Check } from 'lucide-react';

interface ServiceItem {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  details: string[];
  visualComponent: React.ReactNode;
}

export const ServicesShowcase: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('salas');

  const services: ServiceItem[] = [
    {
      id: 'salas',
      number: '01',
      name: 'SALAS',
      tagline: 'Sofás, esquineros y sillones reclinables',
      description: 'Extracción profunda de polvo, ácaros, manchas superficiales y suciedad en tapicería textil.',
      details: ['Inyección-succión simultánea', 'Fibras frescas y desinfectadas', 'Secado rápido en interiores'],
      visualComponent: <SofaExtractionVisual className="w-full aspect-[16/10]" />,
    },
    {
      id: 'colchones',
      number: '02',
      name: 'COLCHONES',
      tagline: 'Individual, matrimonial, queen y king size',
      description: 'Sanitización profunda contra sudoración, ácaros y alérgenos acumulados en el acolchado.',
      details: ['Desinfección de tejido capitonado', 'Eliminación de olores y bacterias', 'Sin químicos agresivos'],
      visualComponent: <MattressVisual className="w-full aspect-[16/10]" />,
    },
    {
      id: 'alfombras',
      number: '03',
      name: 'ALFOMBRAS',
      tagline: 'Tapetes de área y alfombras fijas',
      description: 'Remoción de polvo pesado, pelo de mascotas y mugre asentada en la base del tejido.',
      details: ['Recuperación de brillo y color', 'Aspirado y extracción industrial', 'Cuidado de bordes y remates'],
      visualComponent: <RugVisual className="w-full aspect-[16/10]" />,
    },
    {
      id: 'sillas',
      number: '04',
      name: 'SILLAS',
      tagline: 'Comedor, ejecutivas y oficinas',
      description: 'Limpieza especializada de asientos y respaldos acojinados para hogares y espacios de trabajo.',
      details: ['Tratamiento de manchas en asiento', 'Trato delicado a maderas o metales', 'Ideal para juegos completos'],
      visualComponent: <ChairVisual className="w-full aspect-[16/10]" />,
    },
    {
      id: 'persianas',
      number: '05',
      name: 'PERSIANAS',
      tagline: 'Enrollables, romanas y paneles de tela',
      description: 'Lavado y despolvado técnico sin maltratar mecanismos ni deformar la estructura.',
      details: ['Eliminación de hollín y grasa ambiental', 'Protección contra decoloración', 'Servicio minucioso a domicilio'],
      visualComponent: <BlindsVisual className="w-full aspect-[16/10]" />,
    },
  ];

  const activeService = services.find((s) => s.id === activeId) || services[0];

  return (
    <section id="servicios" className="py-20 md:py-24 bg-[#050505] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-wider text-[#009FE3] uppercase block mb-2">
              Servicios profesionales a domicilio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F5] tracking-tight">
              ¿Qué necesitas limpiar?
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#8A8D91] max-w-md">
            Llegamos a tu domicilio con maquinaria de inyección-extracción de grado profesional.
          </p>
        </div>

        {/* 2-Column Clean Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Clean List (5 Cols) */}
          <div className="lg:col-span-5 space-y-2">
            {services.map((item) => {
              const isActive = item.id === activeId;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`group relative p-4 sm:p-5 rounded-lg cursor-pointer transition-all duration-150 border text-left ${
                    isActive
                      ? 'bg-[#0E1115] border-[#0787CF]/60 shadow-[0_4px_20px_rgba(7,135,207,0.15)]'
                      : 'bg-[#080A0C] border-white/[0.05] hover:border-white/15 hover:bg-[#0B0E12]'
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveId(item.id);
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-sm font-mono font-bold tabular-nums transition-colors ${
                          isActive ? 'text-[#09B5EA]' : 'text-[#4A5058] group-hover:text-[#8A8D91]'
                        }`}
                      >
                        {item.number}
                      </span>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-[#F5F5F5] group-hover:text-white">
                          {item.name}
                        </h3>
                        <p className="text-xs text-[#8A8D91] mt-0.5">
                          {item.tagline}
                        </p>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 shrink-0 transition-transform duration-150 ${
                        isActive
                          ? 'text-[#009FE3] translate-x-0.5'
                          : 'text-[#34373A] group-hover:text-[#8A8D91]'
                      }`}
                    />
                  </div>

                  {/* Mobile Embedded Visual when expanded */}
                  {isActive && (
                    <div className="lg:hidden mt-4 pt-3 border-t border-white/[0.08] text-xs text-[#D9D9D9] space-y-3">
                      <p>{item.description}</p>
                      <div className="rounded-md overflow-hidden border border-white/10">
                        {item.visualComponent}
                      </div>
                      <div className="flex flex-col gap-1.5 pt-1">
                        {item.details.map((detail) => (
                          <div key={detail} className="flex items-center gap-2 text-xs text-[#A1A4A8]">
                            <Check className="w-3 h-3 text-[#0787CF] shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                      <a
                        href={`https://wa.me/526681841372?text=Hola%2C%20quisiera%20cotizar%20el%20servicio%20de%20limpieza%20para%20${encodeURIComponent(
                          item.name.toLowerCase()
                        )}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#09B5EA] hover:text-white pt-1"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Cotizar {item.name.toLowerCase()} por WhatsApp</span>
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Desktop Focused Showcase Frame (7 Cols) */}
          <div className="hidden lg:block lg:col-span-7 sticky top-28">
            <div className="bg-[#0A0C0E] rounded-xl border border-white/[0.08] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.8)]">
              {/* Visual Frame */}
              <div className="relative">
                {activeService.visualComponent}
                
                {/* Header Tag */}
                <div className="absolute top-3.5 left-3.5 bg-[#050505]/85 border border-white/10 px-3 py-1 rounded text-xs backdrop-blur-xs flex items-center gap-2">
                  <span className="font-mono text-[#09B5EA] font-semibold">{activeService.number}</span>
                  <span className="text-white font-bold">{activeService.name}</span>
                </div>
              </div>

              {/* Information & Action Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#0787CF] block mb-1">
                      Servicio a domicilio
                    </span>
                    <h4 className="text-lg font-bold text-white">
                      {activeService.tagline}
                    </h4>
                  </div>
                  <a
                    href={`https://wa.me/526681841372?text=Hola%2C%20quisiera%20cotizar%20la%20limpieza%20de%20${encodeURIComponent(
                      activeService.name.toLowerCase()
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#0787CF] hover:bg-[#009FE3] text-white text-xs font-semibold transition-colors shrink-0 shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Cotizar por WhatsApp</span>
                  </a>
                </div>

                <p className="text-sm text-[#8A8D91] leading-relaxed mb-4">
                  {activeService.description}
                </p>

                {/* Key specs */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/[0.06] text-xs text-[#D5D7D9]">
                  {activeService.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0787CF] shrink-0" />
                      <span className="truncate">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
