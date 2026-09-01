'use client';

import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, Eye } from 'lucide-react';

interface HeroProps {
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#035224] text-white">
      {/* Background from Final Choice Cover: Slide 001 */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/170bd845-788b-4056-a4e2-26cf5ffba1ae')`,
        }}
      />

      {/* Atmospheric Brand Gradients */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#035224] via-[#035224]/70 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#035224]/95 via-transparent to-[#035224]/95" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Headline & Story Column */}
        <div className="lg:col-span-7 text-center sm:text-left flex flex-col items-center sm:items-start">
          
          {/* Brand Identity Badge */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6 justify-center sm:justify-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#89AA3E]/25 backdrop-blur-md border border-[#89AA3E]/50 text-[#EEE1D5] text-xs font-semibold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#89AA3E] animate-ping" />
              <span>Финальный выбор • Брендбук 2026</span>
            </div>
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2]/10 backdrop-blur-md border border-[#FAF7F2]/20 text-[#EEE1D5] text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C9A456]" />
              <span>Утвержденный визуальный стиль</span>
            </div>
          </div>

          {/* Bebas Neue Headline with Outline Style as in Slide 001 & 008 */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-[#FAF7F2] max-w-2xl leading-[0.92] mb-6 uppercase">
            ТЕЙРА • <span className="text-[#89AA3E]">TEIRA</span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl text-[#EEE1D5]/90 tracking-wide font-normal mt-2">
              Чайная Компания
            </span>
          </h1>

          {/* Authentic Brand Metaphor Quote from Slide 002 */}
          <blockquote className="border-l-2 border-[#89AA3E] pl-4 mb-8 text-sm sm:text-base text-[#EEE1D5]/90 font-serif italic max-w-xl text-left">
            «Чашка ароматного чая на фоне бескрайней чайной плантации, чьи изумрудные террасы уходят за горизонт, подчёркивая натуральное происхождение напитка, а над ней легко и безмятежно, как глоток чая, парит чайка».
          </blockquote>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
            <button
              onClick={onOpenQuiz}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D4583D] text-white hover:bg-[#bd4b32] font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 flex items-center justify-center gap-3 active:scale-95 group"
            >
              <Sparkles className="w-4 h-4 text-[#FAF7F2] group-hover:rotate-12 transition-transform" />
              <span>Подобрать чай в квизе</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#packaging"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 text-[#FAF7F2] font-semibold text-xs sm:text-sm uppercase tracking-wider border border-[#FAF7F2]/30 backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              <Eye className="w-4 h-4" />
              <span>Коллекция упаковок</span>
            </a>
          </div>

          {/* Quick Pillars from Logobook */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#FAF7F2]/15 w-full max-w-xl text-left">
            <div>
              <div className="font-display text-2xl text-[#89AA3E]">PANTONE 6182 C</div>
              <div className="text-[10px] text-[#EEE1D5]/70 uppercase tracking-wider">Основной изумрудный</div>
            </div>
            <div>
              <div className="font-display text-2xl text-[#FAF7F2]">BEBAS & AKROBAT</div>
              <div className="text-[10px] text-[#EEE1D5]/70 uppercase tracking-wider">Шрифтовая пара</div>
            </div>
            <div>
              <div className="font-display text-2xl text-[#C9A456]">100% ORGANIC</div>
              <div className="text-[10px] text-[#EEE1D5]/70 uppercase tracking-wider">Чистота сбора</div>
            </div>
          </div>

        </div>

        {/* Right Visual Column: The Approved Brand Poster Slide 001 */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#89AA3E]/40 group bg-[#023818]">
            <img
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/170bd845-788b-4056-a4e2-26cf5ffba1ae"
              alt="TEIRA Final Selection Logobook Cover"
              className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-700"
            />

            {/* Floating Authenticity Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#035224]/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 flex items-center justify-between text-xs text-white">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#89AA3E]" />
                <span className="font-semibold">Утвержденная страница Figma (10:2)</span>
              </div>
              <span className="font-mono text-[10px] text-[#C9A456]">ID: 10-2</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
