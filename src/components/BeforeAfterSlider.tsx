/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useCallback } from 'react';
import { BeforeFabricTexture, AfterFabricTexture, MattressVisual, ChairVisual } from './VisualAssets.tsx';
import { ChevronsLeftRight, Sparkles } from 'lucide-react';

interface ComparisonSample {
  id: string;
  name: string;
  beforeSubtitle: string;
  afterSubtitle: string;
  beforeComponent: React.ReactNode;
  afterComponent: React.ReactNode;
}

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('sofa');
  const containerRef = useRef<HTMLDivElement>(null);

  const samples: ComparisonSample[] = [
    {
      id: 'sofa',
      name: 'Sofá / Sala',
      beforeSubtitle: 'Polvo acumulado y manchas en fibras',
      afterSubtitle: 'Fibras extraídas, limpias y desinfectadas',
      beforeComponent: <BeforeFabricTexture />,
      afterComponent: <AfterFabricTexture />,
    },
    {
      id: 'colchon',
      name: 'Colchón',
      beforeSubtitle: 'Acolchado oscurecido por sudoración y ácaros',
      afterSubtitle: 'Superficie higienizada y libre de suciedad',
      beforeComponent: (
        <div className="w-full h-full bg-[#16191D] flex items-center justify-center p-6 select-none">
          <MattressVisual className="w-full h-full opacity-80" />
        </div>
      ),
      afterComponent: (
        <div className="w-full h-full bg-[#101419] flex items-center justify-center p-6 select-none">
          <MattressVisual className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'silla',
      name: 'Silla',
      beforeSubtitle: 'Asiento percudido por uso diario',
      afterSubtitle: 'Tapicería uniforme y libre de residuos',
      beforeComponent: (
        <div className="w-full h-full bg-[#181615] flex items-center justify-center p-6 select-none">
          <ChairVisual className="w-full h-full opacity-75 contrast-90" />
        </div>
      ),
      afterComponent: (
        <div className="w-full h-full bg-[#0F1318] flex items-center justify-center p-6 select-none">
          <ChairVisual className="w-full h-full contrast-110" />
        </div>
      ),
    },
  ];

  const currentSample = samples.find((s) => s.id === activeTab) || samples[0];

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      updatePosition(e.touches[0].clientX);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <section id="resultados" className="py-20 md:py-24 bg-[#07080A] border-b border-white/[0.08] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#009FE3] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Resultados reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F5] tracking-tight mb-3">
            El resultado habla solo.
          </h2>
          <p className="text-sm sm:text-base text-[#8A8D91]">
            Mira la diferencia antes y después de una limpieza profunda con maquinaria de extracción.
          </p>

          {/* Clean Segmented Sample Switcher */}
          <div className="inline-flex items-center gap-1 p-1 bg-[#0E1114] border border-white/[0.08] rounded-lg mt-6">
            {samples.map((sample) => (
              <button
                key={sample.id}
                onClick={() => {
                  setActiveTab(sample.id);
                  setSliderPosition(50);
                }}
                className={`py-1.5 px-3.5 text-xs font-semibold rounded-md transition-all duration-150 ${
                  activeTab === sample.id
                    ? 'bg-[#0787CF] text-white shadow-xs'
                    : 'text-[#8A8D91] hover:text-white'
                }`}
              >
                {sample.name}
              </button>
            ))}
          </div>
        </div>

        {/* Slider Box */}
        <div className="relative">
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="slider"
            aria-label="Comparativa antes y después"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(sliderPosition)}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden cursor-ew-resize select-none border border-white/[0.12] bg-[#0A0C0E] shadow-[0_20px_50px_rgba(0,0,0,0.85)] focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#0787CF]"
          >
            {/* Background Layer: "DESPUÉS" */}
            <div className="absolute inset-0 w-full h-full">
              {currentSample.afterComponent}
            </div>

            {/* Foreground Layer: "ANTES" (Clipped) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                }}
              >
                {currentSample.beforeComponent}
              </div>
            </div>

            {/* Clean Dividing Line */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none shadow-[0_0_10px_rgba(0,159,227,0.7)]"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Drag Handle */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#050505] border-2 border-[#09B5EA] flex items-center justify-center text-white shadow-[0_0_16px_rgba(7,135,207,0.7)]">
                <ChevronsLeftRight className="w-4 h-4 text-[#09B5EA]" />
              </div>
            </div>

            {/* Static Clean Badges */}
            <div className="absolute top-3.5 left-3.5 pointer-events-none bg-black/80 border border-white/10 px-2.5 py-1 rounded text-xs font-bold tracking-wider text-[#A1A4A8] backdrop-blur-xs">
              ANTES
            </div>
            <div className="absolute top-3.5 right-3.5 pointer-events-none bg-[#0787CF]/90 border border-cyan-400/30 px-2.5 py-1 rounded text-xs font-bold tracking-wider text-white backdrop-blur-xs">
              DESPUÉS
            </div>

            {/* Demo indicator */}
            <div className="absolute bottom-3 right-3 pointer-events-none text-[10px] font-mono tracking-wider text-neutral-400 bg-black/75 px-2 py-0.5 rounded border border-white/10">
              Imagen demostrativa
            </div>
          </div>

          {/* Subtitle Caption */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mt-3 px-1 text-xs text-[#8A8D91]">
            <span>Desliza para comparar el resultado</span>
            <span className="font-mono text-[#D5D7D9]">
              {sliderPosition < 50 ? currentSample.beforeSubtitle : currentSample.afterSubtitle}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
