/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  // Height configurations
  const heightMap = {
    sm: 'h-8',
    md: 'h-11',
    lg: 'h-16',
    xl: 'h-24 md:h-28',
  };

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <svg
        viewBox="0 0 520 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${heightMap[size]} w-auto drop-shadow-[0_2px_12px_rgba(7,135,207,0.25)]`}
        aria-label="DR Limpieza Integral"
      >
        <defs>
          {/* Metallic Chrome Gradients */}
          <linearGradient id="chromeBevel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#D5D7D9" />
            <stop offset="50%" stopColor="#8A8D91" />
            <stop offset="70%" stopColor="#E2E4E6" />
            <stop offset="100%" stopColor="#55585B" />
          </linearGradient>

          <linearGradient id="chromeHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#E5E7EB" stopOpacity="0.5" />
            <stop offset="52%" stopColor="#9CA3AF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#4B5563" stopOpacity="0.8" />
          </linearGradient>

          {/* Electric Blue Swoosh Gradient */}
          <linearGradient id="drBlueSwoosh" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#054D7A" />
            <stop offset="20%" stopColor="#0787CF" />
            <stop offset="65%" stopColor="#009FE3" />
            <stop offset="90%" stopColor="#09B5EA" />
            <stop offset="100%" stopColor="#67E8F9" />
          </linearGradient>

          {/* Silver Blade Gradient */}
          <linearGradient id="silverBlade" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8E9398" />
            <stop offset="40%" stopColor="#E6E8EA" />
            <stop offset="75%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#A1A5A9" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- DYNAMIC AERODYNAMIC SWOOSH (Back / Lower layer) --- */}
        {/* Outer Silver Blade Arc */}
        <path
          d="M 90 148 C 70 140, 60 115, 85 92 C 105 74, 150 65, 230 65 C 160 74, 115 90, 102 110 C 90 130, 110 145, 150 152 C 210 162, 310 152, 420 120 C 370 144, 280 162, 195 160 C 130 158, 102 153, 90 148 Z"
          fill="url(#silverBlade)"
          opacity="0.85"
        />

        {/* Vivid DR Blue / Cyan Swoosh Arc */}
        <path
          d="M 108 140 C 92 134, 88 118, 104 102 C 122 85, 175 74, 260 72 C 185 80, 138 94, 126 110 C 114 126, 134 137, 175 142 C 240 150, 360 134, 480 82 C 400 120, 290 148, 190 146 C 142 145, 118 143, 108 140 Z"
          fill="url(#drBlueSwoosh)"
          filter="url(#cyanGlow)"
        />

        {/* Sharp inner cyan speed-line */}
        <path
          d="M 140 137 C 220 144, 340 130, 465 86 C 390 116, 280 138, 170 137 C 150 137, 142 137, 140 137 Z"
          fill="#09B5EA"
          opacity="0.9"
        />

        {/* --- LETTER D (Chrome 3D Italicized) --- */}
        <g transform="skewX(-14)">
          {/* D Dark bevel drop */}
          <path
            d="M 185 24 L 235 24 C 285 24, 305 48, 305 78 C 305 108, 280 134, 230 134 L 185 134 Z"
            fill="#1A1C1E"
            stroke="#0A0B0C"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          {/* D Chrome Body */}
          <path
            d="M 185 24 L 235 24 C 285 24, 305 48, 305 78 C 305 108, 280 134, 230 134 L 185 134 Z"
            fill="url(#chromeBevel)"
            stroke="url(#chromeHighlight)"
            strokeWidth="2.5"
          />
          {/* D Inner Cutout */}
          <path
            d="M 213 46 L 233 46 C 262 46, 276 58, 276 78 C 276 98, 260 112, 233 112 L 213 112 Z"
            fill="#050505"
            stroke="#34373A"
            strokeWidth="1.5"
          />
        </g>

        {/* --- LETTER R (Chrome 3D Italicized, overlapping D) --- */}
        <g transform="skewX(-14)">
          {/* R Outer bevel & shadow */}
          <path
            d="M 295 24 L 358 24 C 392 24, 412 40, 412 66 C 412 85, 396 99, 372 103 L 418 134 L 382 134 L 344 106 L 323 106 L 323 134 L 295 134 Z"
            fill="#1A1C1E"
            stroke="#0A0B0C"
            strokeWidth="7"
            strokeLinejoin="round"
          />
          {/* R Chrome Body */}
          <path
            d="M 295 24 L 358 24 C 392 24, 412 40, 412 66 C 412 85, 396 99, 372 103 L 418 134 L 382 134 L 344 106 L 323 106 L 323 134 L 295 134 Z"
            fill="url(#chromeBevel)"
            stroke="url(#chromeHighlight)"
            strokeWidth="2.5"
          />
          {/* R Inner Loop Cutout */}
          <path
            d="M 323 44 L 354 44 C 374 44, 384 52, 384 65 C 384 78, 372 87, 354 87 L 323 87 Z"
            fill="#050505"
            stroke="#34373A"
            strokeWidth="1.5"
          />
        </g>

        {/* --- "LIMPIEZA" (Metallic Chrome Embossed Sans-Serif) --- */}
        {showSubtitle && (
          <>
            <text
              x="260"
              y="182"
              textAnchor="middle"
              fill="url(#chromeBevel)"
              stroke="#FFFFFF"
              strokeWidth="0.75"
              fontFamily="Manrope, -apple-system, sans-serif"
              fontSize="34"
              fontWeight="800"
              letterSpacing="7"
            >
              LIMPIEZA
            </text>

            {/* --- "— INTEGRAL —" with dynamic cyan wing accents --- */}
            {/* Left Accent line */}
            <path
              d="M 95 204 L 180 204"
              stroke="url(#drBlueSwoosh)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Center Text */}
            <text
              x="260"
              y="209"
              textAnchor="middle"
              fill="#009FE3"
              fontFamily="Manrope, -apple-system, sans-serif"
              fontSize="16"
              fontWeight="700"
              letterSpacing="9"
            >
              INTEGRAL
            </text>
            {/* Right Accent line */}
            <path
              d="M 340 204 L 425 204"
              stroke="url(#drBlueSwoosh)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </>
        )}
      </svg>
    </div>
  );
};
