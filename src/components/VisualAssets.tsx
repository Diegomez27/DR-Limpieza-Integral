/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

/**
 * High-contrast documentary visual renders representing authentic upholstery extraction cleaning.
 * These are styled to match the dark, tactile, industrial photography in the business advertisement.
 */

// 1. Hero / Sofa Extraction Visual
export const SofaExtractionVisual: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative overflow-hidden rounded-lg bg-[#0A0C0E] border border-white/10 ${className}`}>
    <svg
      viewBox="0 0 800 520"
      className="w-full h-full object-cover select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Fabric Weave Pattern */}
        <pattern id="fabricWeave" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="8" height="8" fill="#13161A" />
          <path d="M0 4 L8 4 M4 0 L4 8" stroke="#1D2228" strokeWidth="1" />
        </pattern>

        <pattern id="cleanFabricWeave" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="8" height="8" fill="#222830" />
          <path d="M0 4 L8 4 M4 0 L4 8" stroke="#323B45" strokeWidth="1" />
        </pattern>

        {/* Gradient for dark sofa lighting */}
        <radialGradient id="sofaLighting" cx="65%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#252C34" />
          <stop offset="50%" stopColor="#12161A" />
          <stop offset="100%" stopColor="#060708" />
        </radialGradient>

        {/* Extractor Head Chrome & Glass */}
        <linearGradient id="wandChrome" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#9CA3AF" />
          <stop offset="80%" stopColor="#374151" />
          <stop offset="100%" stopColor="#1F2937" />
        </linearGradient>

        <linearGradient id="clearHead" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#09B5EA" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#0787CF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#003A60" stopOpacity="0.8" />
        </linearGradient>

        <linearGradient id="cleanPathGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#009FE3" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#009FE3" stopOpacity="0.0" />
        </linearGradient>
      </defs>

      {/* Sofa Base */}
      <rect width="800" height="520" fill="url(#sofaLighting)" />
      <rect width="800" height="520" fill="url(#fabricWeave)" opacity="0.6" />

      {/* Couch Cushions Geometry / Seams */}
      <path
        d="M -20 180 C 180 200, 420 160, 820 220"
        stroke="#0B0D0F"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M -20 180 C 180 200, 420 160, 820 220"
        stroke="#2E3742"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.4"
      />

      {/* Clean Track Created by Extraction Wand */}
      <path
        d="M 120 480 L 360 210 L 490 225 L 310 510 Z"
        fill="url(#cleanFabricWeave)"
        opacity="0.95"
      />
      <path
        d="M 120 480 L 360 210 L 490 225 L 310 510 Z"
        fill="url(#cleanPathGlow)"
      />
      {/* Crisp division boundary */}
      <line
        x1="360"
        y1="210"
        x2="120"
        y2="480"
        stroke="#09B5EA"
        strokeWidth="2"
        strokeDasharray="4 2"
        opacity="0.7"
      />

      {/* Extraction Wand (Commercial Clear Plastic Head) */}
      <g transform="translate(10, -10)">
        {/* Transparent nozzle body */}
        <polygon
          points="350,210 490,225 460,130 400,120"
          fill="url(#clearHead)"
          stroke="#09B5EA"
          strokeWidth="2"
        />

        {/* Liquid Suction Vortex lines */}
        <path
          d="M 380 215 C 390 180, 420 160, 430 130"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M 420 218 C 425 190, 435 170, 440 135"
          stroke="#A5F3FC"
          strokeWidth="2"
          opacity="0.9"
        />
        <circle cx="395" cy="190" r="3" fill="#FFFFFF" opacity="0.8" />
        <circle cx="430" cy="165" r="4" fill="#A5F3FC" opacity="0.9" />
        <circle cx="415" cy="145" r="2.5" fill="#FFFFFF" opacity="0.7" />

        {/* Chrome Vacuum Tube Extension */}
        <path
          d="M 400 120 L 460 130 L 590 -40 L 540 -60 Z"
          fill="url(#wandChrome)"
          stroke="#111827"
          strokeWidth="2"
        />
        {/* Chrome Tube Highlight */}
        <line
          x1="430"
          y1="125"
          x2="565"
          y2="-50"
          stroke="#FFFFFF"
          strokeWidth="4"
          opacity="0.6"
        />
        {/* Hand in Black Nitrile Glove holding wand */}
        <path
          d="M 500 20 C 520 40, 560 60, 580 40 C 600 20, 610 -10, 570 -20 C 540 -30, 510 0, 500 20 Z"
          fill="#111417"
          stroke="#2A3038"
          strokeWidth="2"
        />
      </g>

      {/* Light glow on fresh wet fibers */}
      <ellipse cx="260" cy="370" rx="90" ry="40" fill="#009FE3" opacity="0.15" />
    </svg>

    {/* Discreet authentic overlay tag */}
    <div className="absolute bottom-3 right-3 text-[11px] font-mono tracking-wider text-neutral-400 bg-black/70 px-2 py-0.5 rounded border border-white/10 backdrop-blur-xs select-none">
      Imagen demostrativa
    </div>
  </div>
);

// 2. Colchones (Mattress) Deep Extraction Visual
export const MattressVisual: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative overflow-hidden rounded-lg bg-[#090B0D] border border-white/10 ${className}`}>
    <svg viewBox="0 0 600 400" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="mattressTufts" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="15" cy="15" r="2.5" fill="#3A4450" />
          <path d="M 0 15 Q 15 12 30 15 M 15 0 Q 12 15 15 30" stroke="#1E242B" strokeWidth="1" fill="none" />
        </pattern>
        <linearGradient id="mattressCleanSplit" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#151A20" />
          <stop offset="50%" stopColor="#1E252E" />
          <stop offset="51%" stopColor="#2A3442" />
          <stop offset="100%" stopColor="#354254" />
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill="url(#mattressCleanSplit)" />
      <rect width="600" height="400" fill="url(#mattressTufts)" opacity="0.7" />
      {/* Half Clean Indicator */}
      <line x1="300" y1="0" x2="300" y2="400" stroke="#009FE3" strokeWidth="2" strokeDasharray="6 4" opacity="0.8" />
      <text x="140" y="50" fill="#8A8D91" fontSize="13" fontWeight="700" letterSpacing="3" fontFamily="Manrope, sans-serif">ANTES</text>
      <text x="420" y="50" fill="#09B5EA" fontSize="13" fontWeight="700" letterSpacing="3" fontFamily="Manrope, sans-serif">DESINFECTADO</text>
    </svg>
    <div className="absolute bottom-3 right-3 text-[10px] font-mono tracking-wider text-neutral-400 bg-black/70 px-2 py-0.5 rounded border border-white/10">
      Imagen demostrativa
    </div>
  </div>
);

// 3. Alfombras (Carpet / Rug) Visual
export const RugVisual: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative overflow-hidden rounded-lg bg-[#090B0D] border border-white/10 ${className}`}>
    <svg viewBox="0 0 600 400" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="rugTexture" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="3" fill="#1A2027" />
          <path d="M 0 0 L 12 12 M 12 0 L 0 12" stroke="#2B3440" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="600" height="400" fill="#0E1217" />
      <rect width="600" height="400" fill="url(#rugTexture)" opacity="0.8" />
      {/* Diagonal extraction clean track */}
      <path d="M 0 400 L 400 0 L 600 0 L 200 400 Z" fill="#1E2836" opacity="0.9" />
      <line x1="0" y1="400" x2="400" y2="0" stroke="#0787CF" strokeWidth="2.5" opacity="0.8" />
      <line x1="200" y1="400" x2="600" y2="0" stroke="#009FE3" strokeWidth="1.5" opacity="0.6" />
    </svg>
    <div className="absolute bottom-3 right-3 text-[10px] font-mono tracking-wider text-neutral-400 bg-black/70 px-2 py-0.5 rounded border border-white/10">
      Imagen demostrativa
    </div>
  </div>
);

// 4. Sillas (Chairs) Visual
export const ChairVisual: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative overflow-hidden rounded-lg bg-[#090B0D] border border-white/10 ${className}`}>
    <svg viewBox="0 0 600 400" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="400" fill="#0D1014" />
      {/* Chair Back and Seat Silhouette */}
      <path d="M 220 70 C 220 50, 380 50, 380 70 L 370 230 C 370 240, 230 240, 230 230 Z" fill="#1A222B" stroke="#2F3B4A" strokeWidth="2" />
      <path d="M 180 240 C 180 220, 420 220, 420 240 L 440 310 C 440 330, 160 330, 160 310 Z" fill="#24303E" stroke="#009FE3" strokeWidth="2" />
      {/* Chair Legs */}
      <line x1="190" y1="320" x2="160" y2="390" stroke="#4B5563" strokeWidth="6" strokeLinecap="round" />
      <line x1="410" y1="320" x2="440" y2="390" stroke="#4B5563" strokeWidth="6" strokeLinecap="round" />
      {/* Extractor Tool over Seat */}
      <polygon points="260,280 340,280 320,230 280,230" fill="#09B5EA" opacity="0.6" stroke="#FFFFFF" strokeWidth="1.5" />
    </svg>
    <div className="absolute bottom-3 right-3 text-[10px] font-mono tracking-wider text-neutral-400 bg-black/70 px-2 py-0.5 rounded border border-white/10">
      Imagen demostrativa
    </div>
  </div>
);

// 5. Persianas (Blinds) Visual
export const BlindsVisual: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative overflow-hidden rounded-lg bg-[#090B0D] border border-white/10 ${className}`}>
    <svg viewBox="0 0 600 400" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="400" fill="#0B0E12" />
      {/* Slats */}
      {[...Array(14)].map((_, i) => (
        <g key={i}>
          <rect
            x="80"
            y={35 + i * 24}
            width="440"
            height="18"
            rx="2"
            fill={i % 2 === 0 ? '#1C232C' : '#222B36'}
            stroke="#2A3542"
            strokeWidth="1"
          />
          {/* Subtle light reflection on clean slats */}
          <line
            x1="120"
            y1={44 + i * 24}
            x2="350"
            y2={44 + i * 24}
            stroke="#09B5EA"
            strokeWidth="1.5"
            opacity="0.3"
          />
        </g>
      ))}
      {/* Pull cords */}
      <line x1="160" y1="20" x2="160" y2="380" stroke="#009FE3" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
      <line x1="440" y1="20" x2="440" y2="380" stroke="#009FE3" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
    </svg>
    <div className="absolute bottom-3 right-3 text-[10px] font-mono tracking-wider text-neutral-400 bg-black/70 px-2 py-0.5 rounded border border-white/10">
      Imagen demostrativa
    </div>
  </div>
);

// 6. Before / After Interactive Graphic Component for Cushion Fabric
export const BeforeFabricTexture: React.FC = () => (
  <svg viewBox="0 0 800 600" className="w-full h-full object-cover select-none" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="dirtyVignette" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#2E241E" stopOpacity="0.8" />
        <stop offset="40%" stopColor="#251E1A" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#141110" />
      </radialGradient>
      <pattern id="dirtyPattern" width="10" height="10" patternUnits="userSpaceOnUse">
        <rect width="10" height="10" fill="#1C1816" />
        <circle cx="5" cy="5" r="2" fill="#2E2620" />
        <path d="M0 5 L10 5 M5 0 L5 10" stroke="#120F0D" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="800" height="600" fill="url(#dirtyVignette)" />
    <rect width="800" height="600" fill="url(#dirtyPattern)" opacity="0.7" />
    {/* Stains & wear marks */}
    <ellipse cx="320" cy="280" rx="90" ry="60" fill="#3D2E24" opacity="0.85" filter="blur(8px)" />
    <ellipse cx="500" cy="350" rx="70" ry="45" fill="#33251D" opacity="0.9" filter="blur(6px)" />
    <path d="M 180 180 Q 280 230 400 200" stroke="#1A1512" strokeWidth="18" opacity="0.6" filter="blur(4px)" />
    {/* Dust particles */}
    <circle cx="280" cy="240" r="12" fill="#4A3B30" opacity="0.6" filter="blur(2px)" />
    <circle cx="340" cy="300" r="16" fill="#3E3025" opacity="0.7" filter="blur(3px)" />
  </svg>
);

export const AfterFabricTexture: React.FC = () => (
  <svg viewBox="0 0 800 600" className="w-full h-full object-cover select-none" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="cleanLuminance" cx="50%" cy="45%" r="65%">
        <stop offset="0%" stopColor="#2E3A49" />
        <stop offset="60%" stopColor="#1A222B" />
        <stop offset="100%" stopColor="#0D1116" />
      </radialGradient>
      <pattern id="cleanPattern" width="10" height="10" patternUnits="userSpaceOnUse">
        <rect width="10" height="10" fill="#1B232D" />
        <circle cx="5" cy="5" r="1.5" fill="#39485C" />
        <path d="M0 5 L10 5 M5 0 L5 10" stroke="#25313F" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="800" height="600" fill="url(#cleanLuminance)" />
    <rect width="800" height="600" fill="url(#cleanPattern)" opacity="0.9" />
    {/* Clean texture highlights and sanitization sheen */}
    <ellipse cx="400" cy="300" rx="280" ry="160" fill="#009FE3" opacity="0.12" filter="blur(20px)" />
    <ellipse cx="420" cy="260" rx="140" ry="80" fill="#09B5EA" opacity="0.15" filter="blur(15px)" />
  </svg>
);
