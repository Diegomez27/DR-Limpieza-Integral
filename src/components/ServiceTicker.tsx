/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const ServiceTicker: React.FC = () => {
  const items = [
    'SALAS',
    'COLCHONES',
    'ALFOMBRAS',
    'SILLAS',
    'PERSIANAS',
  ];

  return (
    <div className="relative border-y border-white/[0.08] bg-[#0A0C0E] py-3.5 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-y-2 gap-x-6 sm:gap-x-10 text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#A1A4A8]">
          {items.map((item, idx) => (
            <React.Fragment key={item}>
              <div className="flex items-center gap-2 transition-colors hover:text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0787CF]" />
                <span>{item}</span>
              </div>
              {idx < items.length - 1 && (
                <span aria-hidden="true" className="hidden sm:inline text-[#2A2E33] font-light">
                  /
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
