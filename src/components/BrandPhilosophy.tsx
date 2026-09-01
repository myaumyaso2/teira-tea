'use client';

import React from 'react';
import { Coffee, Waves, Leaf, Bird, Sun } from 'lucide-react';

export const BrandPhilosophy: React.FC = () => {
  const elements = [
    {
      title: 'Чашка / Пиала',
      desc: 'Символ чайной культуры, гостеприимства и момента тишины наедине с собой.',
      icon: <Coffee className="w-5 h-5 text-[#C9A456]" />,
      color: 'bg-[#C9A456]/15',
    },
    {
      title: 'Чайные террасы / Волны',
      desc: 'Плавность горных склонов и органическое происхождение чая из чистейших терруаров.',
      icon: <Waves className="w-5 h-5 text-[#89AA3E]" />,
      color: 'bg-[#89AA3E]/15',
    },
    {
      title: 'Чайный лист с прожилками',
      desc: 'Символ свежести сырья, ручного сбора почек и бережного мастерства ферментации.',
      icon: <Leaf className="w-5 h-5 text-[#035224]" />,
      color: 'bg-[#035224]/15',
    },
    {
      title: 'Парящая чайка',
      desc: 'Свобода, лёгкость, чистота горного воздуха и морского бриза на плантациях.',
      icon: <Bird className="w-5 h-5 text-[#D4583D]" />,
      color: 'bg-[#D4583D]/15',
    },
    {
      title: 'Солнце / Капля',
      desc: 'Тепло природы, утренняя роса и прозрачная янтарная чистота чайного настоя.',
      icon: <Sun className="w-5 h-5 text-[#C9A456]" />,
      color: 'bg-[#C9A456]/15',
    },
  ];

  return (
    <section id="philosophy" className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#E2D7CC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#89AA3E]">
            Визуальный образ и метафора знака
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#035224] mt-1">
            Смысловая анатомия логотипа TEIRA
          </h2>
          <p className="font-serif text-base sm:text-lg text-[#667069] italic mt-3">
            В утвержденном знаке (Слайд 002 & 034 брендбука) соединены пять фундаментальных символов чайной культуры и живой природы.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Interactive Breakdown of 5 Elements */}
          <div className="lg:col-span-6 space-y-4">
            {elements.map((el, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#E2D7CC] shadow-soft hover:shadow-card transition-all flex items-start gap-4 group"
              >
                <div className={`w-10 h-10 rounded-xl ${el.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  {el.icon}
                </div>
                <div>
                  <h4 className="font-display text-2xl text-[#035224] group-hover:text-[#89AA3E] transition-colors leading-tight">
                    {el.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#667069] font-sans mt-0.5 leading-relaxed">
                    {el.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: The Full Emblem Graphic from Slide 034 */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center text-center">
            <div className="relative p-8 sm:p-12 rounded-3xl bg-white border border-[#E2D7CC] shadow-card w-full max-w-lg">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEE1D5] text-[#035224] text-xs font-semibold uppercase tracking-wider mb-6">
                <span>Слайд 034 брендбука</span>
              </div>

              <img
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/176a74be-18a4-47a4-9c54-5e5b64dee5d9"
                alt="TEIRA Botanical Multi-Color Emblem"
                className="w-full max-w-xs mx-auto h-auto object-contain transition-transform duration-500 hover:scale-105"
              />

              <div className="mt-8 pt-6 border-t border-[#E2D7CC]">
                <div className="font-display text-3xl text-[#035224] uppercase tracking-wider">
                  ТЕЙРА • TEIRA
                </div>
                <div className="text-xs text-[#667069] uppercase tracking-widest mt-0.5">
                  Утвержденный графический знак
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
