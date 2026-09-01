'use client';

import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Thermometer, Droplets, Clock, Flame, Sparkles } from 'lucide-react';

export const BrewingGuide: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [timerSeconds, setTimerSeconds] = useState(15);
  const [initialSeconds, setInitialSeconds] = useState(15);
  const [isRunning, setIsRunning] = useState(false);
  const [completed, setCompleted] = useState(false);

  // Steeping options
  const presetTimes = [\n    { label: '1-й пролив (10с)', seconds: 10, note: 'Нежный раскрывающийся настой' },\n    { label: '2-й пролив (15с)', seconds: 15, note: 'Пик аромата и маслянистости' },\n    { label: '3-й пролив (25с)', seconds: 25, note: 'Глубокая сладость и послевкусие' },\n    { label: '4+ пролив (45с)', seconds: 45, note: 'Экстракция плотных древесных нот' },\n  ];

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && isRunning) {
      setIsRunning(false);
      setCompleted(true);
      if (typeof window !== 'undefined' && 'AudioContext' in window) {
        try {
          const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.frequency.setValueAtTime(587.33, ctx.currentTime);
          gain.gain.setValueAtTime(0.2, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
          osc.start();
          osc.stop(ctx.currentTime + 0.8);
        } catch (e) {
          // ignore
        }
      }
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timerSeconds]);

  const handleSelectPreset = (seconds: number) => {
    setIsRunning(false);
    setCompleted(false);
    setInitialSeconds(seconds);
    setTimerSeconds(seconds);
  };

  const toggleTimer = () => {
    if (completed) {
      setTimerSeconds(initialSeconds);
      setCompleted(false);
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setCompleted(false);
    setTimerSeconds(initialSeconds);
  };

  return (
    <section id="brewing" className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#E2D7CC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#89AA3E]">
            Церемониальный гид
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#035224] mt-1">
            Искусство заваривания Гунфу Ча
          </h2>
          <p className="font-serif text-base sm:text-lg text-[#667069] italic mt-3">
            Чай раскрывается как музыкальная партитура: от первых легких цветочных обертонов до глубокого сладкого послевкусия на седьмом проливе.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1 */}
            <div
              onClick={() => setActiveStep(1)}
              className={`p-6 sm:p-7 rounded-2xl border-2 transition-all cursor-pointer ${
                activeStep === 1
                  ? 'bg-white border-[#035224] shadow-card'
                  : 'bg-white/60 border-[#E2D7CC] hover:bg-white'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#035224] text-white flex items-center justify-center font-display text-2xl shrink-0">
                  1
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-display text-2xl text-[#035224] uppercase">
                      Прогрев посуды и знакомство
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-md bg-[#EEE1D5] text-[#035224] font-semibold">
                      90–95°C
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#667069] font-sans leading-relaxed">
                    Ошпарьте гайвань или чайник крутым кипятком. Слейте воду и засыпьте сухой лист (5–7 г). Закройте крышку на 5 секунд и вдохните сладкий аромат распаренного листа из прогретой посуды.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div
              onClick={() => setActiveStep(2)}
              className={`p-6 sm:p-7 rounded-2xl border-2 transition-all cursor-pointer ${
                activeStep === 2
                  ? 'bg-white border-[#035224] shadow-card'
                  : 'bg-white/60 border-[#E2D7CC] hover:bg-white'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#89AA3E] text-white flex items-center justify-center font-display text-2xl shrink-0">
                  2
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-display text-2xl text-[#035224] uppercase">
                      Пробуждение листа (Нулевой пролив)
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-md bg-[#EEE1D5] text-[#D4583D] font-semibold">
                      Мгновенный слив
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#667069] font-sans leading-relaxed">
                    Залейте воду и сразу слейте её в чахай или на чайную доску (не пьется). Это очищает лист от чайной пыли и дает скрученным чаинкам расправиться для идеальной экстракции.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div
              onClick={() => setActiveStep(3)}
              className={`p-6 sm:p-7 rounded-2xl border-2 transition-all cursor-pointer ${
                activeStep === 3
                  ? 'bg-white border-[#035224] shadow-card'
                  : 'bg-white/60 border-[#E2D7CC] hover:bg-white'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4583D] text-white flex items-center justify-center font-display text-2xl shrink-0">
                  3
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-display text-2xl text-[#035224] uppercase">
                      Рабочие проливы по таймеру
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-md bg-[#EEE1D5] text-[#035224] font-semibold">
                      10 → 45 сек
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#667069] font-sans leading-relaxed">
                    Начиная с 10–15 секунд, увеличивайте каждый последующий пролив на 5–10 секунд. Качественный высокогорный чай выдерживает от 8 до 15 проливов без потери тела и сладости.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive Digital Brewing Timer */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#035224] to-[#023818] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#035224] relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#C9A456]" />
                <span className="font-display text-2xl uppercase tracking-wider text-[#FAF7F2]">
                  Таймер пролива
                </span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#89AA3E]/30 text-[#EEE1D5]">
                Гунфу Ча
              </span>
            </div>

            {/* Display */}
            <div className="text-center py-6 bg-[#FAF7F2]/10 rounded-2xl border border-white/10 backdrop-blur-md mb-6 relative">
              <div className="font-display text-7xl sm:text-8xl tracking-tight text-[#FAF7F2] font-mono leading-none">
                00:{timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}
              </div>
              <div className="text-xs text-[#EEE1D5]/70 uppercase tracking-widest mt-2">
                {completed ? '🎉 Чай заварен! Сливайте в чахай' : isRunning ? 'Идет экстракция...' : 'Нажмите старт для заваривания'}
              </div>

              <div className="w-full bg-white/10 h-1.5 absolute bottom-0 left-0">
                <div
                  className="bg-[#89AA3E] h-full transition-all duration-1000"
                  style={{
                    width: `${((initialSeconds - timerSeconds) / initialSeconds) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Presets Selection */}
            <div className="space-y-2 mb-6">
              <div className="text-[11px] text-[#EEE1D5]/70 uppercase font-semibold tracking-wider">
                Выберите номер пролива:
              </div>
              <div className="grid grid-cols-2 gap-2">
                {presetTimes.map((p) => (
                  <button
                    key={p.seconds}
                    onClick={() => handleSelectPreset(p.seconds)}
                    className={`p-2.5 rounded-xl text-xs font-semibold text-left transition-all ${
                      initialSeconds === p.seconds
                        ? 'bg-[#89AA3E] text-white shadow ring-2 ring-white/30'
                        : 'bg-white/10 text-[#EEE1D5] hover:bg-white/20'
                    }`}
                  >
                    <div className="font-bold">{p.label}</div>
                    <div className="text-[10px] opacity-80 truncate">{p.note}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTimer}
                className={`flex-grow py-4 rounded-full font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 ${
                  isRunning
                    ? 'bg-[#D4583D] hover:bg-[#bd4b32] text-white'
                    : 'bg-[#FAF7F2] hover:bg-white text-[#035224]'
                }`}
              >
                {isRunning ? (
                  <>
                    <Pause className="w-4 h-4" />
                    <span>Пауза</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>{completed ? 'Заварить еще раз' : 'Запустить таймер'}</span>
                  </>
                )}
              </button>

              <button
                onClick={resetTimer}
                className="p-4 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] transition-colors"
                title="Сбросить"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
