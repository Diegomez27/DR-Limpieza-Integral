/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageCircle, Check, Send, AlertCircle, Phone } from 'lucide-react';

interface QuoteFormState {
  service: string;
  sizeOrQuantity: string;
  neighborhood: string;
  preferredDate: string;
  notes: string;
}

export const QuoteCalculator: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormState>({
    service: 'Sala',
    sizeOrQuantity: '',
    neighborhood: '',
    preferredDate: 'Esta semana',
    notes: '',
  });

  const [touched, setTouched] = useState<{ neighborhood: boolean }>({
    neighborhood: false,
  });

  const serviceOptions = [
    { id: 'Sala', label: 'Sala', hint: 'Sofás y esquineros' },
    { id: 'Colchón', label: 'Colchón', hint: 'Individual a King' },
    { id: 'Alfombra', label: 'Alfombra', hint: 'Tapetes de área' },
    { id: 'Sillas', label: 'Sillas', hint: 'Comedor u oficina' },
    { id: 'Persianas', label: 'Persianas', hint: 'Enrollables o tela' },
    { id: 'Otro', label: 'Otro', hint: 'Servicio especial' },
  ];

  const dateOptions = [
    'Lo antes posible',
    'Esta semana',
    'Fin de semana',
    'Próxima semana',
  ];

  const sizeSuggestions: Record<string, string[]> = {
    Sala: ['3 piezas (3-2-1)', 'Seccional en L', 'Sofá 2 plazas'],
    Colchón: ['King Size', 'Queen Size', 'Matrimonial', 'Individual'],
    Alfombra: ['Tapete mediano', 'Alfombra grande', '2 tapetes'],
    Sillas: ['Juego de 4 sillas', 'Juego de 6 sillas', 'Sillas de oficina'],
    Persianas: ['2 a 3 persianas', '4 a 6 persianas'],
    Otro: ['Paquete mixto (sala + colchón)', 'Oficina completa'],
  };

  const isNeighborhoodValid = formData.neighborhood.trim().length > 0;
  const showNeighborhoodError = touched.neighborhood && !isNeighborhoodValid;

  const constructWhatsAppMessage = (): string => {
    const lines = [
      'Hola, vi su página y quisiera solicitar una cotización.',
      '',
      `Servicio: ${formData.service || 'Por definir'}`,
      `Cantidad/tamaño: ${formData.sizeOrQuantity.trim() || 'A coordinar'}`,
      `Zona: ${formData.neighborhood.trim() || 'Por confirmar'}`,
      `Fecha preferida: ${formData.preferredDate || 'Flexible'}`,
    ];

    if (formData.notes.trim()) {
      lines.push(`Comentarios: ${formData.notes.trim()}`);
    }

    lines.push('', '¿Me pueden ayudar con una cotización?');

    return lines.join('\n');
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ neighborhood: true });

    if (!isNeighborhoodValid) {
      document.getElementById('neighborhood-input')?.focus();
      return;
    }

    const message = constructWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/526681841372?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="cotizador" className="py-20 md:py-24 bg-[#07080A] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-wider text-[#009FE3] uppercase block mb-2">
            Cotizador instantáneo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F5] tracking-tight mb-3">
            Cuéntanos qué necesitas limpiar.
          </h2>
          <p className="text-sm sm:text-base text-[#8A8D91]">
            Completa los detalles y envía tu solicitud directa a nuestro WhatsApp.
          </p>
        </div>

        {/* 2-Column Clean Grid on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Clean Organized Form Steps (7 Cols) */}
          <div className="lg:col-span-7 bg-[#0A0C0E] border border-white/[0.08] rounded-xl p-6 sm:p-8 shadow-[0_12px_36px_rgba(0,0,0,0.8)]">
            <form onSubmit={handleSendWhatsApp} className="space-y-6">
              
              {/* STEP 1: Servicio */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <label className="text-xs font-mono font-bold tracking-wider text-[#009FE3] uppercase flex items-center gap-1.5">
                    <span>01</span>
                    <span className="text-white">¿Qué necesitas limpiar?</span>
                  </label>
                  <span className="text-[11px] text-[#09B5EA] font-semibold">Requerido</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {serviceOptions.map((opt) => {
                    const isSelected = formData.service === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, service: opt.id, sizeOrQuantity: '' })}
                        className={`p-3 rounded-lg text-left transition-all duration-150 border cursor-pointer ${
                          isSelected
                            ? 'bg-[#101722] border-[#0787CF] text-white shadow-[0_0_12px_rgba(7,135,207,0.25)]'
                            : 'bg-[#111418] border-white/[0.04] text-[#A1A4A8] hover:border-white/10 hover:text-white hover:bg-[#14181F]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs sm:text-sm">{opt.label}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#09B5EA]" />}
                        </div>
                        <span className="block text-[11px] text-[#6E7378] mt-0.5 truncate">
                          {opt.hint}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* STEP 2: Cantidad o tamaño */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="size-input" className="text-xs font-mono font-bold tracking-wider text-[#009FE3] uppercase flex items-center gap-1.5">
                    <span>02</span>
                    <span className="text-white">Cantidad o tamaño</span>
                  </label>
                  <span className="text-[11px] text-[#6E7378]">Opcional</span>
                </div>

                <input
                  id="size-input"
                  type="text"
                  value={formData.sizeOrQuantity}
                  onChange={(e) => setFormData({ ...formData, sizeOrQuantity: e.target.value })}
                  placeholder="Ej. Sala en L, 6 sillas, colchón King..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#111418] border border-white/[0.08] text-white placeholder-[#6E7378] text-xs sm:text-sm focus-visible:outline-hidden focus-visible:border-[#0787CF] transition-colors"
                />

                {/* Suggestions */}
                <div className="flex items-center gap-1.5 flex-wrap mt-2">
                  <span className="text-[10px] text-[#6E7378]">Sugerencias:</span>
                  {sizeSuggestions[formData.service]?.map((sug) => (
                    <button
                      key={sug}
                      type="button"
                      onClick={() => setFormData({ ...formData, sizeOrQuantity: sug })}
                      className="text-[10px] bg-white/[0.04] hover:bg-[#0787CF]/20 text-[#A1A4A8] hover:text-[#09B5EA] px-2 py-0.5 rounded transition-colors border border-white/[0.04]"
                    >
                      {sug}
                    </button>
                  ))}
                </div>
              </div>

              {/* STEP 3: Zona o colonia */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="neighborhood-input" className="text-xs font-mono font-bold tracking-wider text-[#009FE3] uppercase flex items-center gap-1.5">
                    <span>03</span>
                    <span className="text-white">Zona o colonia</span>
                  </label>
                  <span className="text-[11px] text-[#09B5EA] font-semibold">Requerido</span>
                </div>

                <input
                  id="neighborhood-input"
                  type="text"
                  required
                  value={formData.neighborhood}
                  onBlur={() => setTouched({ ...touched, neighborhood: true })}
                  onChange={(e) => {
                    setFormData({ ...formData, neighborhood: e.target.value });
                    if (!touched.neighborhood) setTouched({ ...touched, neighborhood: true });
                  }}
                  placeholder="Ej. Col. Las Fuentes, Centro, Scally, Tabachines..."
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-[#111418] border text-white placeholder-[#6E7378] text-xs sm:text-sm transition-colors focus-visible:outline-hidden ${
                    showNeighborhoodError
                      ? 'border-red-500/80 focus-visible:border-red-500'
                      : 'border-white/[0.08] focus-visible:border-[#0787CF]'
                  }`}
                />
                {showNeighborhoodError && (
                  <div className="flex items-center gap-1 text-[11px] text-red-400 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>Por favor indica tu zona para calcular el servicio a domicilio.</span>
                  </div>
                )}
              </div>

              {/* STEP 4: Fecha preferida */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-mono font-bold tracking-wider text-[#009FE3] uppercase flex items-center gap-1.5">
                    <span>04</span>
                    <span className="text-white">Fecha tentativa</span>
                  </label>
                  <span className="text-[11px] text-[#6E7378]">Flexible</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {dateOptions.map((date) => {
                    const isSelected = formData.preferredDate === date;
                    return (
                      <button
                        key={date}
                        type="button"
                        onClick={() => setFormData({ ...formData, preferredDate: date })}
                        className={`py-2 px-2.5 rounded-md text-xs font-medium text-center transition-all border ${
                          isSelected
                            ? 'bg-[#0787CF] border-[#09B5EA] text-white shadow-xs'
                            : 'bg-[#111418] border-white/[0.04] text-[#A1A4A8] hover:text-white hover:bg-[#14181F]'
                        }`}
                      >
                        {date}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* STEP 5: Comentarios opcionales */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="notes-input" className="text-xs font-mono font-bold tracking-wider text-[#009FE3] uppercase flex items-center gap-1.5">
                    <span>05</span>
                    <span className="text-white">Detalles adicionales</span>
                  </label>
                  <span className="text-[11px] text-[#6E7378]">Opcional</span>
                </div>

                <textarea
                  id="notes-input"
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Ej. Mancha de café, pelo de mascota, segundo piso..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#111418] border border-white/[0.08] text-white placeholder-[#6E7378] text-xs sm:text-sm focus-visible:outline-hidden focus-visible:border-[#0787CF] transition-colors resize-none"
                />
              </div>

            </form>
          </div>

          {/* Right Column: Clean WhatsApp Preview & Conversion Card (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            <div className="bg-[#0A0C0E] border border-white/[0.08] rounded-xl p-6 shadow-[0_12px_36px_rgba(0,0,0,0.8)]">
              
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#009FE3]" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Mensaje para WhatsApp
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#0787CF]">668 184 1372</span>
              </div>

              {/* Clean structured message bubble */}
              <div className="bg-[#07090B] border border-white/[0.05] rounded-lg p-4 font-mono text-xs text-[#D5D7D9] space-y-2.5 leading-relaxed">
                <p className="text-white font-medium">Hola, vi su página y quisiera solicitar una cotización.</p>
                <div className="pt-2 border-t border-white/[0.06] space-y-1 text-[#A1A4A8]">
                  <p><span className="text-white">Servicio:</span> {formData.service}</p>
                  <p><span className="text-white">Cantidad/tamaño:</span> {formData.sizeOrQuantity.trim() || 'A coordinar'}</p>
                  <p><span className="text-white">Zona:</span> {formData.neighborhood.trim() || 'Por definir'}</p>
                  <p><span className="text-white">Fecha preferida:</span> {formData.preferredDate}</p>
                  {formData.notes.trim() && (
                    <p><span className="text-white">Comentarios:</span> {formData.notes.trim()}</p>
                  )}
                </div>
                <p className="pt-2 border-t border-white/[0.06] text-[#09B5EA]">¿Me pueden ayudar con una cotización?</p>
              </div>

              {/* Direct Send Button */}
              <div className="mt-5 space-y-3">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full py-3.5 px-4 rounded-lg text-sm font-bold text-white bg-[#0787CF] hover:bg-[#009FE3] active:bg-[#0575B5] transition-all duration-150 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(7,135,207,0.35)] cursor-pointer focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#09B5EA]"
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span>Enviar por WhatsApp</span>
                  <Send className="w-3.5 h-3.5 ml-1 opacity-80" />
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-[#8A8D91]">
                  <Phone className="w-3.5 h-3.5 text-[#0787CF]" />
                  <span>Atención directa al 668 184 1372</span>
                </div>
              </div>

            </div>

            {/* Quick helper note */}
            <div className="p-4 rounded-lg bg-[#07090B] border border-white/[0.04] text-xs text-[#6E7378] leading-relaxed">
              Al hacer clic se abrirá directamente tu aplicación de WhatsApp con el mensaje listo para enviar. Sin registros ni esperas.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
