'use client';

import React, { useState } from 'react';
import { Coffee, Award, Users, PackageCheck, Send, CheckCircle, Sparkles } from 'lucide-react';

interface B2BSectionProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const B2BSection: React.FC<B2BSectionProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    establishment: '',
    city: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="b2b" className="py-20 sm:py-28 bg-[#EEE1D5]/50 border-b border-[#E2D7CC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#035224]/10 text-[#035224] text-xs font-bold uppercase tracking-widest mb-3">
            <Coffee className="w-3.5 h-3.5 text-[#89AA3E]" />
            <span>TEIRA для HoReCa & Бизнеса</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#035224]">
            Повысьте средний чек вашего заведения
          </h2>
          <p className="font-serif text-base sm:text-lg text-[#667069] italic mt-3">
            Поставляем селекционный чай в спешелти-кофейни, рестораны авторской кухни и премиальные спа-комплексы по всей России.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Benefits Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            <div className="p-6 bg-white rounded-2xl border border-[#E2D7CC] shadow-soft">
              <div className="w-10 h-10 rounded-xl bg-[#035224]/10 text-[#035224] flex items-center justify-center mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-display text-2xl text-[#035224] uppercase mb-1">
                Калиброванная чайная карта
              </h4>
              <p className="text-xs sm:text-sm text-[#667069] font-sans leading-relaxed">
                Составляем сбалансированное меню из 6–10 позиций с высокой маржинальностью (от 400% на чашку) под вашу концепцию.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E2D7CC] shadow-soft">
              <div className="w-10 h-10 rounded-xl bg-[#89AA3E]/15 text-[#035224] flex items-center justify-center mb-3">
                <Users className="w-5 h-5 text-[#89AA3E]" />
              </div>
              <h4 className="font-display text-2xl text-[#035224] uppercase mb-1">
                Обучение и аттестация персонала
              </h4>
              <p className="text-xs sm:text-sm text-[#667069] font-sans leading-relaxed">
                Шеф-титестер TEIRA проводит мастер-классы для ваших бариста и официантов: стандарты заваривания и эффектная подача.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E2D7CC] shadow-soft">
              <div className="w-10 h-10 rounded-xl bg-[#D4583D]/15 text-[#D4583D] flex items-center justify-center mb-3">
                <PackageCheck className="w-5 h-5" />
              </div>
              <h4 className="font-display text-2xl text-[#035224] uppercase mb-1">
                Оптовые фасовки от 1 кг
              </h4>
              <p className="text-xs sm:text-sm text-[#667069] font-sans leading-relaxed">
                Прямые оптовые цены с герметичной защитой свежести азотом, отгрузка со склада в Москве и Санкт-Петербурге за 24 часа.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E2D7CC] shadow-soft">
              <div className="w-10 h-10 rounded-xl bg-[#C9A456]/20 text-[#035224] flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5 text-[#C9A456]" />
              </div>
              <h4 className="font-display text-2xl text-[#035224] uppercase mb-1">
                Посуда и тизеры подачи
              </h4>
              <p className="text-xs sm:text-sm text-[#667069] font-sans leading-relaxed">
                Комплектуем заведения типотами, фарфоровыми гайванями, термосами и песочными таймерами с вашим логотипом.
              </p>
            </div>

          </div>

          {/* Right: Request Form */}
          <div className="lg:col-span-5 bg-white p-7 sm:p-9 rounded-3xl border border-[#E2D7CC] shadow-card">
            {submitted ? (\n              <div className="text-center py-10 space-y-4">\n                <div className="w-14 h-14 rounded-full bg-[#89AA3E]/20 text-[#035224] flex items-center justify-center mx-auto text-2xl">\n                  <CheckCircle className="w-8 h-8 text-[#035224]" />\n                </div>\n                <h4 className="font-display text-3xl text-[#035224] uppercase">\n                  Заявка принята!\n                </h4>\n                <p className="text-xs sm:text-sm text-[#667069]">\n                  Мы свяжемся с вами в течение 30 минут и отправим бесплатный дегустационный сет из 6 сортов для вашего заведения.\n                </p>\n              </div>\n            ) : (\n              <form onSubmit={handleSubmit} className="space-y-4 text-left">\n                <div className="mb-2">\n                  <h4 className="font-display text-2xl text-[#035224] uppercase">\n                    Запросить дегустационный сет\n                  </h4>\n                  <p className="text-xs text-[#667069] mt-0.5">\n                    Бесплатный набор из 6 сортов и оптовый прайс-лист для юрлиц\n                  </p>\n                </div>\n\n                <div>\n                  <label className="text-xs font-bold text-[#121A14] uppercase block mb-1">\n                    Ваше имя:\n                  </label>\n                  <input\n                    required\n                    type="text"\n                    placeholder="Константин (Управляющий)"\n                    value={formData.name}\n                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}\n                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2D7CC] bg-[#FAF7F2] text-sm focus:outline-none focus:border-[#035224]"\n                  />\n                </div>\n\n                <div>\n                  <label className="text-xs font-bold text-[#121A14] uppercase block mb-1">\n                    Телефон для связи:\n                  </label>\n                  <input\n                    required\n                    type="tel"\n                    placeholder="+7 (999) 123-45-67"\n                    value={formData.phone}\n                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}\n                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2D7CC] bg-[#FAF7F2] text-sm focus:outline-none focus:border-[#035224]"\n                  />\n                </div>\n\n                <div>\n                  <label className="text-xs font-bold text-[#121A14] uppercase block mb-1">\n                    Название заведения / Город:\n                  </label>\n                  <input\n                    required\n                    type="text"\n                    placeholder="Кофейня «Зерно & Лист», Москва"\n                    value={formData.establishment}\n                    onChange={(e) => setFormData({ ...formData, establishment: e.target.value })}\n                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2D7CC] bg-[#FAF7F2] text-sm focus:outline-none focus:border-[#035224]"\n                  />\n                </div>\n\n                <button\n                  type="submit"\n                  className="w-full py-4 rounded-full bg-[#035224] hover:bg-[#023818] text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"\n                >\n                  <Send className="w-4 h-4" />\n                  <span>Получить дегустационный сет HoReCa</span>\n                </button>\n\n                <p className="text-[10px] text-center text-[#667069]">\n                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных\n                </p>\n              </form>\n            )}\n          </div>\n\n        </div>\n\n      </div>\n    </section>\n  );\n};\n