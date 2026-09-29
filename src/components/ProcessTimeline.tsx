/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface Step {
  step: string;
  title: string;
  description: string;
}

export const ProcessTimeline: React.FC = () => {
  const steps: Step[] = [
    {
      step: '01',
      title: 'Cuéntanos qué necesitas',
      description: 'Envíanos un mensaje o fotos de tus muebles por WhatsApp para conocer el estado y tamaño.',
    },
    {
      step: '02',
      title: 'Recibe tu cotización',
      description: 'Te proporcionamos un precio claro, directo y sin compromisos según lo que requieras.',
    },
    {
      step: '03',
      title: 'Agendamos la visita',
      description: 'Elegimos el día y horario que mejor te convenga para acudir directamente a tu domicilio.',
    },
    {
      step: '04',
      title: 'Disfruta el resultado',
      description: 'Realizamos la extracción profunda y dejamos tus muebles frescos, limpios y desinfectados.',
    },
  ];

  return (
    <section id="proceso" className="py-20 md:py-24 bg-[#050505] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <span className="text-xs font-semibold tracking-wider text-[#009FE3] uppercase block mb-2">
            Paso a paso
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F5] tracking-tight">
            Así de fácil.
          </h2>
        </div>

        {/* 4 Clean Steps Grid */}
        <div className="relative">
          {/* Subtle line across on desktop */}
          <div 
            aria-hidden="true" 
            className="hidden md:block absolute top-[24px] left-[5%] right-[5%] h-[1px] bg-white/[0.08]"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((item) => (
              <div key={item.step} className="relative flex flex-col items-start text-left">
                {/* Step indicator */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-lg bg-[#0C0F12] border border-white/[0.1] mb-5 shadow-xs">
                  <span className="text-base font-mono font-bold text-[#09B5EA] tabular-nums">
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-lg font-bold text-[#F5F5F5] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8A8D91] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
