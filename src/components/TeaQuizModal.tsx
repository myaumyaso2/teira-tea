'use client';

import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, ArrowLeft, RefreshCw, ShoppingBag } from 'lucide-react';
import { TEA_PRODUCTS, TeaProduct, TeaWeightOption } from '@/data/teaProducts';
import confetti from 'canvas-confetti';

interface TeaQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: TeaProduct, weight: TeaWeightOption) => void;
}

export const TeaQuizModal: React.FC<TeaQuizModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{
    timeAndState?: string;
    tasteFlavor?: string;
    method?: string;
    experience?: string;
  }>({});
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const questions = [
    {
      id: 'timeAndState',
      title: 'В какое время суток вы чаще пьете чай и какого состояния ищете?',
      subtitle: 'Чай — это тонкий регулятор внутреннего баланса',
      options: [
        {
          id: 'morning',
          title: 'Утро: Бодрость и ясность ума',
          desc: 'Свежая энергия без скачков кофеина и учащенного сердцебиения',
          icon: '⚡',
        },
        {
          id: 'day',
          title: 'День: Фокус, творчество и поток',
          desc: 'Снятие тревожности, глубокая концентрация на задачах',
          icon: '🧘',
        },
        {
          id: 'evening',
          title: 'Вечер: Теплый релакс и уют',
          desc: 'Мягкое расслабление тела и подготовка к глубокому сну',
          icon: '🌙',
        },
      ],
    },
    {
      id: 'tasteFlavor',
      title: 'Какие вкусовые профили вызывают у вас наибольший отклик?',
      subtitle: 'Выберите направление ваших вкусовых рецепторов',
      options: [
        {
          id: 'floral',
          title: 'Цветы, луговые травы и свежие фрукты',
          desc: 'Лёгкие, освежающие и воздушные ноты орхидей и ягод',
          icon: '🌸',
        },
        {
          id: 'sweet',
          title: 'Мед, карамель, печеный хлеб и фундук',
          desc: 'Обволакивающие, теплые десертные и пряные оттенки',
          icon: '🍯',
        },
        {
          id: 'smoky',
          title: 'Древесный дым, темный шоколад и минералы',
          desc: 'Плотные, маслянистые, нефтяные и глубокие вкусы',
          icon: '🪵',
        },
      ],
    },
    {
      id: 'method',
      title: 'Каким способом вы чаще всего завариваете чай?',
      subtitle: 'Мы адаптируем рекомендации под вашу чайную посуду',
      options: [
        {
          id: 'mug',
          title: 'В кружке или большом домашнем чайнике',
          desc: 'Европейский метод настаивания 3–5 минут',
          icon: '🫖',
        },
        {
          id: 'tipot',
          title: 'В типоте (чайнике Гунфу с кнопкой слива)',
          desc: 'Удобные быстрые проливы дома и в офисе',
          icon: '☕',
        },
        {
          id: 'gongfu',
          title: 'Традиционно в гайвани или исинской глине',
          desc: 'Классическая церемония Гунфу Ча короткими проливами',
          icon: '🍵',
        },
      ],
    },
    {
      id: 'experience',
      title: 'Каков ваш опыт в мире селекционного чая?',
      subtitle: 'Подберем идеальный порог вхождения и редкость сборов',
      options: [
        {
          id: 'beginner',
          title: 'Только начинаю знакомство',
          desc: 'Ищу понятные, яркие и дружелюбные вкусы без горечи',
          icon: '🌱',
        },
        {
          id: 'lover',
          title: 'Уже пробовал качественный чай',
          desc: 'Люблю экспериментировать с разными регионами и ферментациями',
          icon: '🍃',
        },
        {
          id: 'connoisseur',
          title: 'Опытный коллекционер и ценитель',
          desc: 'Охочусь за редкими высокогорными микролотами и старыми деревьями',
          icon: '👑',
        },
      ],
    },
  ];

  const handleSelectOption = (questionId: string, optionId: string) => {
    const nextAnswers = { ...answers, [questionId]: optionId };
    setAnswers(nextAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#035224', '#89AA3E', '#D4583D', '#C9A456'],
        });
      } catch (e) {
        // ignore
      }
    }
  };

  const restartQuiz = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  const recommendedTeas = TEA_PRODUCTS.slice(0, 3);

  const handleAddAllSet = () => {
    recommendedTeas.forEach((tea) => {
      const standardWeight = tea.weights.find((w) => w.isPopular) || tea.weights[0];
      onAddToCart(tea, standardWeight);
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E2D7CC] overflow-hidden animate-scaleIn">
        
        {/* Modal Header */}
        <div className="bg-[#035224] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#89AA3E]/30 flex items-center justify-center text-[#EEE1D5]">
              <Sparkles className="w-4 h-4 text-[#C9A456]" />
            </div>
            <div>
              <h3 className="font-display text-2xl tracking-wide uppercase leading-none">
                {isCompleted ? 'Ваша карта вкусов готова' : 'Чайный сомелье TEIRA'}
              </h3>
              <p className="text-[11px] text-[#EEE1D5]/80 mt-0.5">
                {isCompleted ? 'Персональный дегустационный сет' : `Вопрос ${currentStep + 1} из ${questions.length}`}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Progress Bar */}
        {!isCompleted && (
          <div className="w-full bg-[#E2D7CC] h-1.5">
            <div
              className="bg-[#D4583D] h-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            />
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {!isCompleted ? (
            <div>
              {/* Question Title */}
              <div className="mb-6">
                <h4 className="font-display text-2xl sm:text-3xl text-[#035224] uppercase tracking-wide mb-1 leading-tight">
                  {questions[currentStep].title}
                </h4>
                <p className="text-xs sm:text-sm text-[#667069] font-serif italic">
                  {questions[currentStep].subtitle}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-8">
                {questions[currentStep].options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(questions[currentStep].id, opt.id)}
                    className="w-full text-left p-4 sm:p-5 rounded-2xl bg-white hover:bg-[#EEE1D5]/50 border-2 border-[#E2D7CC] hover:border-[#035224] transition-all flex items-start gap-4 group shadow-sm active:scale-[0.99]"
                  >
                    <span className="text-2xl sm:text-3xl shrink-0 p-2 bg-[#FAF7F2] rounded-xl group-hover:scale-110 transition-transform">
                      {opt.icon}
                    </span>
                    <div className="flex-grow">
                      <div className="font-display text-xl text-[#035224] group-hover:text-[#89AA3E] transition-colors leading-tight">
                        {opt.title}
                      </div>
                      <div className="text-xs sm:text-sm text-[#667069] mt-0.5 font-sans">
                        {opt.desc}
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#667069] group-hover:text-[#035224] group-hover:translate-x-1 transition-all self-center shrink-0" />
                  </button>
                ))}
              </div>

              {/* Step Navigation Back */}
              {currentStep > 0 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="flex items-center gap-2 text-xs font-semibold text-[#667069] hover:text-[#035224] transition-colors uppercase tracking-wider"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Назад к предыдущему вопросу</span>
                </button>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-6">
              <div className="bg-[#EEE1D5]/60 rounded-2xl p-5 border border-[#E2D7CC] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#89AA3E]">
                    Промокод на скидку 15%:
                  </span>
                  <div className="font-display text-3xl text-[#035224] tracking-wider mt-0.5">
                    TEIRA2026
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#667069] block">Ваш профиль:</span>
                  <span className="text-xs font-bold text-[#D4583D] uppercase tracking-wide">
                    Гармония & Медовые ноты
                  </span>
                </div>
              </div>

              <div>
                <h5 className="font-display text-xl text-[#035224] uppercase mb-3">
                  Рекомендованные 3 сорта для вашего вкуса:
                </h5>

                <div className="space-y-3">
                  {recommendedTeas.map((tea) => (
                    <div
                      key={tea.id}
                      className="p-3.5 bg-white rounded-xl border border-[#E2D7CC] flex items-center justify-between gap-3 shadow-sm"
                    >\n                      <div className="flex items-center gap-3">\n                        <img\n                          src={tea.image}\n                          alt={tea.nameRu}\n                          className="w-12 h-12 rounded-lg object-cover"\n                        />\n                        <div>\n                          <div className="font-display text-lg text-[#035224] leading-tight">\n                            {tea.nameRu}\n                          </div>\n                          <div className="text-[11px] text-[#89AA3E] font-medium">\n                            {tea.origin.region} • {tea.tasteNotes[0]}\n                          </div>\n                        </div>\n                      </div>\n                      <div className="text-right shrink-0">\n                        <div className="font-display text-lg text-[#035224]">\n                          {tea.weights[1]?.price || tea.weights[0].price} ₽\n                        </div>\n                        <div className="text-[10px] text-[#667069]">\n                          за {tea.weights[1]?.weight || tea.weights[0].weight} г\n                        </div>\n                      </div>\n                    </div>\n                  ))}\n                </div>\n              </div>\n\n              {/* Action Buttons */}\n              <div className="pt-4 border-t border-[#E2D7CC] flex flex-col sm:flex-row items-center gap-3">\n                <button\n                  onClick={handleAddAllSet}\n                  className="w-full sm:flex-grow py-4 rounded-full bg-[#035224] hover:bg-[#023818] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"\n                >\n                  <ShoppingBag className="w-4 h-4" />\n                  <span>Добавить весь сет в корзину (со скидкой 15%)</span>\n                </button>\n\n                <button\n                  onClick={restartQuiz}\n                  className="p-3 rounded-full bg-[#EEE1D5] hover:bg-[#E2D7CC] text-[#035224] transition-colors"\n                  title="Пройти заново"\n                >\n                  <RefreshCw className="w-4 h-4" />\n                </button>\n              </div>\n            </div>\n          )}\n        </div>\n\n      </div>\n    </div>\n  );\n};\n