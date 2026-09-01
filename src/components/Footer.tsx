'use client';

import React from 'react';
import { MapPin, Phone, Mail, Send, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#023818] text-[#EEE1D5] pt-16 pb-12 border-t border-[#035224]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#EEE1D5]/15">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#89AA3E]/20 flex items-center justify-center text-[#EEE1D5] border border-[#89AA3E]/40">
                <svg viewBox="0 0 100 100" className="w-6 h-6 fill-current text-[#EEE1D5]">
                  <circle cx="50" cy="30" r="12" fill="#C9A456" opacity="0.9" />
                  <path d="M20,65 Q50,45 80,65 Q50,85 20,65 Z" fill="#EEE1D5" />
                  <path d="M35,45 Q50,30 65,45 Q50,38 35,45 Z" fill="#89AA3E" />
                </svg>
              </div>
              <div>
                <span className="font-display text-3xl tracking-wider text-[#FAF7F2] leading-none block">
                  TEIRA
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-[#89AA3E] font-bold">
                  Чайная Компания
                </span>
              </div>
            </div>

            <p className="font-serif text-xs sm:text-sm text-[#EEE1D5]/80 leading-relaxed italic max-w-sm">
              Прямой импорт селекционного чая с высокогорных плантаций Юньнани, гор Уи и Тайваня. Бережная вакуумная фасовка и церемониальная эстетика.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#FAF7F2]/10 hover:bg-[#89AA3E] text-white flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <span className="text-xs text-[#EEE1D5]/70">
                Чайный канал в Telegram @teiratea
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-xl uppercase tracking-wider text-[#FAF7F2]">
              Каталог
            </h4>
            <ul className="space-y-2 text-xs text-[#EEE1D5]/80 font-medium">
              <li><a href="#catalog" className="hover:text-[#89AA3E] transition-colors">Светлые и темные улуны</a></li>
              <li><a href="#catalog" className="hover:text-[#89AA3E] transition-colors">GABA улуны для медитации</a></li>
              <li><a href="#catalog" className="hover:text-[#89AA3E] transition-colors">Шэн и Шу пуэры</a></li>
              <li><a href="#catalog" className="hover:text-[#89AA3E] transition-colors">Белый чай Фудин</a></li>
              <li><a href="#catalog" className="hover:text-[#89AA3E] transition-colors">Красный Дянь Хун</a></li>
            </ul>
          </div>

          {/* Knowledge / Culture */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-xl uppercase tracking-wider text-[#FAF7F2]">
              Чайная культура
            </h4>
            <ul className="space-y-2 text-xs text-[#EEE1D5]/80 font-medium">
              <li><a href="#terroirs" className="hover:text-[#89AA3E] transition-colors">Карта высокогорных терруаров</a></li>
              <li><a href="#brewing" className="hover:text-[#89AA3E] transition-colors">Гайд по завариванию Гунфу Ча</a></li>
              <li><a href="#brewing" className="hover:text-[#89AA3E] transition-colors">Интерактивный таймер пролива</a></li>
              <li><a href="#b2b" className="hover:text-[#89AA3E] transition-colors">Поставки в HoReCa и кофейни</a></li>
            </ul>
          </div>

          {/* Contacts & Delivery */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-xl uppercase tracking-wider text-[#FAF7F2]">
              Контакты & Шоурум
            </h4>
            <div className="space-y-2 text-xs text-[#EEE1D5]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#89AA3E] shrink-0 mt-0.5" />
                <span>Москва, Чистопрудный бульвар, 14 (Клуб ТЕЙРА)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#89AA3E] shrink-0" />
                <a href="tel:+78005553535" className="hover:text-white">+7 (800) 555-35-35 (Бесплатно по РФ)</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#89AA3E] shrink-0" />
                <a href="mailto:info@teiratea.ru" className="hover:text-white">order@teiratea.ru</a>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-[10px] text-[#EEE1D5]/60 uppercase tracking-wider mb-1">
                Службы доставки:
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#FAF7F2]">
                <span className="px-2 py-0.5 rounded bg-white/10">СДЭК Экспресс</span>
                <span className="px-2 py-0.5 rounded bg-white/10">Почта РФ</span>
                <span className="px-2 py-0.5 rounded bg-white/10">Курьер МСК/СПб</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EEE1D5]/60">
          <div className="flex items-center gap-2">
            <span>© 2026 ООО «ТЕЙРА ЧАЙНАЯ КОМПАНИЯ». Все права защищены.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Оферта и доставка</a>
            <span className="text-[#89AA3E] font-mono text-[10px]">v1.0 Final Selection</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
