'use client';

import React from 'react';
import { Smartphone, Laptop, Globe, Sparkles } from 'lucide-react';

export const DigitalEcosystem: React.FC = () => {
  return (
    <section id="digital" className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#E2D7CC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#035224]/10 text-[#035224] text-xs font-bold uppercase tracking-widest mb-3">
            <Globe className="w-3.5 h-3.5 text-[#89AA3E]" />
            <span>Слайды 023, 025, 027</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#035224]">
            Цифровая экосистема бренда
          </h2>
          <p className="font-serif text-base sm:text-lg text-[#667069] italic mt-3">
            Единый визуальный язык в веб-магазине `teira.com/store`, мобильном приложении и клубных социальных сервисах.
          </p>
        </div>

        {/* 2-Column Mockups Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Laptop Mockup (Slide 025) */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E2D7CC] shadow-card flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#89AA3E] tracking-wider mb-2">
                <Laptop className="w-4 h-4" />
                <span>Web-витрина и онлайн-магазин • Слайд 025</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-[#035224] uppercase mb-4">
                Интуитивный опыт заказа на Desktop
              </h3>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#E2D7CC] bg-[#023818] my-4 shadow-md">
              <img
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8570cb96-8257-44ee-be28-65c3440255ba"
                alt="TEIRA MacBook Store Mockup"
                className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500"
              />
            </div>

            <p className="text-xs sm:text-sm text-[#667069] font-sans">
              Чистая эстетика, детальные паспорта терруаров, удобный селектор веса и мгновенный чекаут.
            </p>
          </div>

          {/* Mobile App Mockup (Slide 023) */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E2D7CC] shadow-card flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#D4583D] tracking-wider mb-2">
                <Smartphone className="w-4 h-4" />
                <span>Мобильное приложение & Фавикон • Слайд 023</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-[#035224] uppercase mb-4">
                Упрощенная иконка знака (PWA)
              </h3>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#E2D7CC] bg-[#023818] my-4 shadow-md">
              <img
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/61a90e11-68b1-4362-96e7-ff91583ec3ff"
                alt="TEIRA Mobile App Mockup"
                className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500"
              />
            </div>

            <p className="text-xs sm:text-sm text-[#667069] font-sans">
              Оптимизированная геометрия знака для экранов смартфонов, Apple Watch и миниатюрных иконок браузера.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
