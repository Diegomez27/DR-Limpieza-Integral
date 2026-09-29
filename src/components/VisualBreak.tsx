/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const VisualBreak: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-28 bg-[#050505] overflow-hidden border-b border-white/[0.08] select-none">
      <div className="absolute inset-0 z-0">
        <svg
          viewBox="0 0 1440 360"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="breakGrad" cx="50%" cy="50%" r="65%">
              <stop offset="0%" stopColor="#11161C" />
              <stop offset="70%" stopColor="#060709" />
              <stop offset="100%" stopColor="#030405" />
            </radialGradient>
            <linearGradient id="brandCurve" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0787CF" stopOpacity="0" />
              <stop offset="40%" stopColor="#0787CF" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#09B5EA" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0787CF" stopOpacity="0" />
            </linearGradient>
          </defs>

          <rect width="1440" height="360" fill="url(#breakGrad)" />

          {/* Sweeping aerodynamic curve */}
          <path
            d="M -40 280 C 400 320, 800 120, 1480 180"
            stroke="url(#brandCurve)"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-[#0787CF]" />
          <span className="text-[11px] font-mono font-semibold tracking-widest text-[#09B5EA] uppercase">
            DR Limpieza Integral
          </span>
          <span className="w-8 h-[1px] bg-[#0787CF]" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F5] tracking-tight">
          Limpieza que <span className="metallic-text">se nota.</span>
        </h2>
      </div>
    </section>
  );
};
