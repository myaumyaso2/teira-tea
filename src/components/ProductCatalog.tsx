'use client';

import React, { useState } from 'react';
import { TEA_PRODUCTS, TeaProduct, TeaWeightOption } from '@/data/teaProducts';
import { ProductCard } from './ProductCard';
import { StateFilterType } from './StateFilter';
import { Filter, Sparkles, ArrowRight, Package } from 'lucide-react';

interface ProductCatalogProps {
  activeState: StateFilterType;
  onAddToCart: (product: TeaProduct, weight: TeaWeightOption) => void;
  onOpenQuiz: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  activeState,
  onAddToCart,
  onOpenQuiz,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Все упаковки и сборы' },
    { id: 'oolong', label: 'Улуны (Изумрудный тубус)' },
    { id: 'puer-sheng', label: 'Шэн Пуэры (Крафт дой-пак)' },
    { id: 'puer-shu', label: 'Шу Пуэры (Клапанный пак)' },
    { id: 'white', label: 'Белый чай (Барьерный крафт)' },
    { id: 'gift', label: 'Подарочные гранд-боксы' },
  ];

  const filteredProducts = TEA_PRODUCTS.filter((product) => {
    const matchesState =
      activeState === 'all' || product.stateEffect === activeState;
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;
    return matchesState && matchesCategory;
  });

  return (
    <section id="packaging" className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#89AA3E]/20 text-[#035224] text-xs font-bold uppercase tracking-wider mb-2">
              <Package className="w-3.5 h-3.5 text-[#89AA3E]" />
              <span>Слайды 039–041 брендбука</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#035224] tracking-tight uppercase mt-1">
              Фирменные упаковки и сборы
            </h2>
            <p className="text-sm text-[#667069] mt-2 max-w-xl font-serif italic">
              Металлические тубусы с защитой от света, крафтовые дой-паки с дегазационным клапаном и подарочные деревянные боксы с сургучной печатью.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#035224] text-white shadow-sm'
                    : 'bg-white text-[#667069] hover:text-[#035224] hover:bg-[#EEE1D5]/60 border border-[#E2D7CC]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#E2D7CC] p-8">
            <Filter className="w-10 h-10 text-[#89AA3E] mx-auto mb-3 opacity-60" />
            <h3 className="font-display text-2xl text-[#035224] uppercase">В этой категории нет позиций</h3>
            <p className="text-sm text-[#667069] mt-1 mb-4">
              Попробуйте сбросить фильтр или пройти чайный квиз
            </p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="px-6 py-2.5 rounded-full bg-[#035224] text-white text-xs font-bold uppercase tracking-wider"
            >
              Показать всю коллекцию
            </button>
          </div>
        )}

        {/* Promo Quiz Callout Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#035224] to-[#023818] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#89AA3E]/30 text-[#EEE1D5] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A456]" />
              <span>Алгоритм подбора чайного сомелье</span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide leading-none text-[#FAF7F2] mb-3">
              Не знаете, какую упаковку выбрать?
            </h3>
            <p className="font-serif text-sm sm:text-base text-[#EEE1D5]/90 italic">
              Пройдите 1-минутный квиз: подберем сорт и идеальную фасовку (пробник, тубус или гранд-сет) с промокодом TEIRA2026 на скидку 15%.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              onClick={onOpenQuiz}
              className="px-8 py-4 rounded-full bg-[#D4583D] hover:bg-[#bd4b32] text-white font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center gap-3 group"
            >
              <span>Начать подбор в квизе</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
