/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('secado');

  const faqs: FaqItem[] = [
    {
      id: 'secado',
      question: '¿Cuánto tarda en secar una sala?',
      answer:
        'El tiempo promedio de secado suele ser de 3 a 6 horas en condiciones habituales de ventilación y clima. Al utilizar maquinaria de inyección-extracción profunda, la mayor parte del agua se extrae durante el mismo procedimiento. El tiempo final depende del tipo de tejido y el clima del día, por lo que el técnico te brindará las recomendaciones puntuales al concluir el servicio.',
    },
    {
      id: 'mover-muebles',
      question: '¿Necesito mover mis muebles antes del servicio?',
      answer:
        'No es necesario que realices esfuerzos pesados. Solo te sugerimos retirar objetos personales, cojines decorativos o piezas frágiles alrededor del área para que el técnico trabaje con total comodidad y seguridad.',
    },
    {
      id: 'domicilio',
      question: '¿Trabajan a domicilio?',
      answer:
        'Sí, todo el servicio se realiza directamente en tu hogar o negocio. Llevamos el equipo profesional de extracción hasta tu ubicación para evitar traslados y maniobras incómodas.',
    },
    {
      id: 'como-cotizar',
      question: '¿Cómo puedo solicitar una cotización?',
      answer:
        'Puedes solicitarla directamente mediante el cotizador de esta página o enviándonos un mensaje por WhatsApp al 668 184 1372 indicándonos el mueble a limpiar y tu colonia.',
    },
    {
      id: 'info-necesaria',
      question: '¿Qué información necesitan para cotizar con precisión?',
      answer:
        'Nos resulta de gran utilidad conocer el tipo de mueble (sala de 3 plazas, colchón matrimonial, sillas de comedor, etc.), la zona o sector de atención, y de ser posible, una fotografía del estado actual para evaluar el tipo de tela.',
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-24 bg-[#07080A] border-b border-white/[0.08] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#009FE3] uppercase mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Dudas frecuentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F5] tracking-tight mb-3">
            Antes de agendar
          </h2>
          <p className="text-sm sm:text-base text-[#8A8D91]">
            Respuestas a las preguntas habituales sobre el servicio de limpieza a domicilio.
          </p>
        </div>

        {/* Clean Accordion List */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-2">
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full py-4 flex items-center justify-between text-left focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#0787CF] cursor-pointer group"
                >
                  <span className="text-base font-bold text-[#F5F5F5] group-hover:text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#8A8D91] shrink-0 transition-transform duration-200 group-hover:text-white ${
                      isOpen ? 'rotate-180 text-[#09B5EA]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pb-5 pt-1 text-sm text-[#A1A4A8] leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Clean Support Contact */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-lg bg-[#0A0C0E] border border-white/[0.06] text-xs text-[#8A8D91]">
          <span>¿Tienes otra consulta sobre tu tipo de tela?</span>
          <a
            href="https://wa.me/526681841372?text=Hola%2C%20tengo%20una%20pregunta%20sobre%20el%20servicio%20de%20limpieza."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-[#09B5EA] hover:text-white transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Consultar directamente por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
