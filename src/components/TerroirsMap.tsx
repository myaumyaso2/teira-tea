'use client';

import React, { useState } from 'react';
import { TERROIRS, Terroir } from '@/data/terroirs';
import { MapPin, Mountain, Sun, CloudRain, Sparkles, CheckCircle } from 'lucide-react';

export const TerroirsMap: React.FC = () => {
  const [selectedTerroir, setSelectedTerroir] = useState<Terroir>(TERROIRS[0]);

  return (
    <section id="terroirs" className="py-20 bg-[#023818] text-[#FAF7F2] relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-luminosity"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida/AEtjO1Xqeo2Zb8JSm5yT8q-xiGtnZlp4NggbzMcoMM91wlpcl_uMsahYk3sVSzHw9IxqcVnap3KHuooh0qf1U7gQ3YzE5jpAG4weDwXV7F6G1WPP7KbTaww30lRnZeRNPitUD3wwx_ePQsd33yo_NLmZ0UOTKgrcU28JuvigjQI6ELtBp1aB1l7Ux7br9lmTQ_E8h6DP6vu48mSfNHia4JlbDo0euRR3Tv4HKXnNjq0OIjJropzfPtzsNrp1Dcs')`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#89AA3E]/20 border border-[#89AA3E]/40 text-[#89AA3E] text-xs font-bold uppercase tracking-widest mb-3">
            <Mountain className="w-3.5 h-3.5" />
            <span>География и Терруары</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#FAF7F2]">
            Происхождение имеет решающее значение
          </h2>
          <p className="font-serif text-base sm:text-lg text-[#EEE1D5]/80 italic mt-3">
            Вкус чая формируется не на фабрике, а на высоте 1 500+ метров над уровнем моря, где горные туманы, состав почв и возраст деревьев рождают уникальный характер напитка.
          </p>
        </div>

        {/* Region Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {TERROIRS.map((terroir) => {
            const isSelected = selectedTerroir.id === terroir.id;
            return (
              <button
                key={terroir.id}
                onClick={() => setSelectedTerroir(terroir)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                  isSelected
                    ? 'bg-[#89AA3E] text-white shadow-lg scale-105 ring-2 ring-white/30'
                    : 'bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 text-[#EEE1D5] border border-[#FAF7F2]/15'
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-[#C9A456]'}`} />
                <span>{terroir.name}</span>
                <span className="text-xs opacity-75 font-sans">({terroir.nameCn})</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Terroir Showcase Card */}
        <div className="bg-[#FAF7F2] text-[#121A14] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-[#E2D7CC] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Info Column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#D4583D] text-white text-[11px] font-bold uppercase tracking-wider">
                  {selectedTerroir.tag}
                </span>
                <span className="text-xs text-[#667069] font-medium font-sans">
                  {selectedTerroir.region}
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#035224] tracking-wide uppercase leading-none mb-4">
                {selectedTerroir.name}{' '}
                <span className="text-2xl sm:text-3xl text-[#C9A456] font-normal">
                  {selectedTerroir.nameCn}
                </span>
              </h3>

              <p className="font-serif text-sm sm:text-base text-[#667069] italic leading-relaxed mb-6">
                {selectedTerroir.description}
              </p>
            </div>

            {/* Terroir Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-t border-b border-[#E2D7CC] mb-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#89AA3E]/15 flex items-center justify-center text-[#035224] shrink-0 mt-0.5">
                  <Mountain className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-[#667069] uppercase font-bold tracking-wider">Высота сбора (ASL)</div>
                  <div className="font-display text-xl text-[#035224]">{selectedTerroir.elevation}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#89AA3E]/15 flex items-center justify-center text-[#035224] shrink-0 mt-0.5">
                  <Sun className="w-4 h-4 text-[#C9A456]" />
                </div>
                <div>
                  <div className="text-[11px] text-[#667069] uppercase font-bold tracking-wider">Климат & Влажность</div>
                  <div className="text-xs text-[#121A14] font-medium mt-0.5">{selectedTerroir.climate}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#89AA3E]/15 flex items-center justify-center text-[#035224] shrink-0 mt-0.5">
                  <CloudRain className="w-4 h-4 text-[#89AA3E]" />
                </div>
                <div>
                  <div className="text-[11px] text-[#667069] uppercase font-bold tracking-wider">Особенность сырья</div>
                  <div className="text-xs text-[#121A14] font-medium mt-0.5">{selectedTerroir.speciality}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#89AA3E]/15 flex items-center justify-center text-[#035224] shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-[#D4583D]" />
                </div>
                <div>
                  <div className="text-[11px] text-[#667069] uppercase font-bold tracking-wider">Почвенный состав</div>
                  <div className="text-xs text-[#121A14] font-medium mt-0.5">{selectedTerroir.soil}</div>
                </div>
              </div>
            </div>

            {/* Famous Teas in this Region */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#035224] mb-2">
                Знаковые сборы региона в наличии:
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedTerroir.famousTeas.map((tea, idx) => (\n                  <span\n                    key={idx}\n                    className=\"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEE1D5] text-xs font-semibold text-[#035224] border border-[#E2D7CC]\"\n                  >\n                    <CheckCircle className=\"w-3 h-3 text-[#89AA3E]\" />\n                    <span>{tea}</span>\n                  </span>\n                ))}\n              </div>\n            </div>\n          </div>\n\n          {/* Right / Terroir Photo */}\n          <div className=\"lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[1/1] bg-[#E2D7CC] shadow-inner\">\n            <img\n              src={selectedTerroir.imageUrl}\n              alt={selectedTerroir.name}\n              className=\"w-full h-full object-cover transition-transform duration-700 hover:scale-105\"\n            />\n            <div className=\"absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent\" />\n            <div className=\"absolute bottom-4 left-4 right-4 text-white\">\n              <span className=\"text-xs text-[#EEE1D5]/80 uppercase tracking-widest block font-sans\">Плантация</span>\n              <span className=\"font-display text-2xl text-white uppercase\">{selectedTerroir.name}</span>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n    </section>\n  );\n};\n