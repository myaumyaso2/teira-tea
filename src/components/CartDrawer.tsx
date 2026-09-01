'use client';

import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Truck, Gift, ArrowRight, ShieldCheck } from 'lucide-react';
import { TeaProduct, TeaWeightOption } from '@/data/teaProducts';

export interface CartItem {
  id: string; // combination of productId and weight
  product: TeaProduct;
  weightOption: TeaWeightOption;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const [giftBox, setGiftBox] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(false);
  const [orderDone, setOrderDone] = useState(false);

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 3500;
  const itemsTotal = items.reduce(
    (sum, item) => sum + item.weightOption.price * item.quantity,
    0
  );
  const giftBoxPrice = giftBox ? 350 : 0;
  const grandTotal = itemsTotal + giftBoxPrice;
  const amountNeeded = Math.max(0, FREE_SHIPPING_THRESHOLD - itemsTotal);
  const progressPercent = Math.min(
    100,
    (itemsTotal / FREE_SHIPPING_THRESHOLD) * 100
  );

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderDone(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end transition-opacity">
      <div className="w-full max-w-md bg-[#FAF7F2] h-full shadow-drawer flex flex-col justify-between border-l border-[#E2D7CC] animate-slideLeft">
        
        {/* Drawer Header */}
        <div className="bg-[#035224] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#89AA3E]" />
            <h3 className="font-display text-2xl uppercase tracking-wider leading-none">
              Корзина сборов ({items.reduce((s, i) => s + i.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Free Delivery Progress Bar */}
        <div className="bg-[#EEE1D5] p-4 border-b border-[#E2D7CC]">
          <div className="flex items-center justify-between text-xs font-semibold text-[#035224] mb-1.5">
            <div className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#D4583D]" />
              <span>
                {amountNeeded > 0
                  ? `До бесплатной доставки СДЭК: ${amountNeeded.toLocaleString('ru-RU')} ₽`
                  : '🎉 Вам доступна бесплатная доставка СДЭК!'}
              </span>
            </div>
            <span className="text-[10px] text-[#667069]">порог 3 500 ₽</span>
          </div>
          <div className="w-full bg-white h-2 rounded-full overflow-hidden border border-[#E2D7CC]">
            <div
              className="bg-[#89AA3E] h-full transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Drawer Content */}
        <div className="flex-grow overflow-y-auto p-4 sm:p-5 space-y-4">
          {orderDone ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#89AA3E]/20 text-[#035224] flex items-center justify-center mx-auto text-3xl">
                ✓
              </div>
              <h4 className="font-display text-3xl text-[#035224] uppercase">
                Заказ №TEIRA-8492 оформлен!
              </h4>
              <p className="text-xs sm:text-sm text-[#667069] max-w-xs mx-auto">
                Менеджер чайного клуба уже связывается с вами в Telegram/WhatsApp для подтверждения деталей доставки.
              </p>
              <button
                onClick={() => {
                  setOrderDone(false);
                  setCheckoutStep(false);
                  onClose();
                }}
                className="px-6 py-3 rounded-full bg-[#035224] text-white text-xs font-bold uppercase tracking-wider mt-4"
              >
                Вернуться к витрине
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <ShoppingBag className="w-12 h-12 text-[#667069]/40 mx-auto" />
              <div className="font-display text-2xl text-[#035224] uppercase">
                Ваша корзина пуста
              </div>
              <p className="text-xs text-[#667069] max-w-xs mx-auto">
                Выберите свежие сборы из каталога или пройдите квиз для подбора
              </p>
            </div>
          ) : checkoutStep ? (
            /* One-Page Fast Checkout Form */
            <form onSubmit={handleCheckoutSubmit} className="space-y-4 text-left">
              <div className="font-display text-xl text-[#035224] uppercase mb-2">
                Быстрое оформление (СДЭК / Курьер)
              </div>

              <div>
                <label className="text-xs font-bold text-[#121A14] uppercase block mb-1">
                  Ваше имя:
                </label>
                <input
                  required
                  type="text"
                  placeholder="Алексей"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2D7CC] bg-white text-sm focus:outline-none focus:border-[#035224]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#121A14] uppercase block mb-1">
                  Телефон / Telegram:
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+7 (999) 000-00-00"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2D7CC] bg-white text-sm focus:outline-none focus:border-[#035224]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#121A14] uppercase block mb-1">
                  Город и пункт выдачи СДЭК:
                </label>
                <input
                  required
                  type="text"
                  placeholder="Москва, ул. Тверская 12 или ПВЗ"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2D7CC] bg-white text-sm focus:outline-none focus:border-[#035224]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#121A14] uppercase block mb-1">
                  Способ оплаты:
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <label className="flex items-center gap-2 p-2.5 rounded-xl border border-[#035224] bg-[#EEE1D5]/40 font-semibold cursor-pointer">
                    <input type="radio" name="pay" defaultChecked className="accent-[#035224]" />
                    <span>СБП (QR-код)</span>
                  </label>
                  <label className="flex items-center gap-2 p-2.5 rounded-xl border border-[#E2D7CC] bg-white font-semibold cursor-pointer">
                    <input type="radio" name="pay" className="accent-[#035224]" />
                    <span>Карта РФ / Сплит</span>
                  </label>
                </div>
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => setCheckoutStep(false)}
                  className="px-4 py-3 rounded-full bg-[#EEE1D5] text-[#035224] text-xs font-bold uppercase"
                >
                  Назад
                </button>
                <button
                  type="submit"
                  className="flex-grow py-3.5 rounded-full bg-[#D4583D] text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-[#bd4b32]"
                >
                  Оплатить {grandTotal.toLocaleString('ru-RU')} ₽
                </button>
              </div>
            </form>
          ) : (
            /* Items List */
            items.map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-2xl bg-white border border-[#E2D7CC] flex items-center justify-between gap-3 shadow-sm"
              >
                <img
                  src={item.product.image}
                  alt={item.product.nameRu}
                  className="w-14 h-14 rounded-xl object-cover shrink-0"
                />

                <div className="flex-grow min-w-0">
                  <h4 className="font-display text-lg text-[#035224] leading-tight truncate">
                    {item.product.nameRu}
                  </h4>
                  <div className="text-xs text-[#89AA3E] font-medium">
                    {item.weightOption.weight} г • {item.weightOption.price} ₽
                  </div>
                  <div className="text-[11px] text-[#667069]">
                    {item.product.origin.region}
                  </div>
                </div>

                {/* Quantity Stepper */}
                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <div className="flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D7CC] rounded-lg p-1">
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="p-1 hover:bg-[#EEE1D5] rounded text-[#667069]"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold px-1.5 min-w-[20px] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="p-1 hover:bg-[#EEE1D5] rounded text-[#667069]"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-[10px] text-red-600 hover:underline flex items-center gap-0.5"
                  >
                    <Trash2 className="w-2.5 h-2.5" /> Удалить
                  </button>
                </div>
              </div>
            ))
          )}

          {/* Gift Box Addon Option */}
          {items.length > 0 && !checkoutStep && !orderDone && (\n            <label className="p-3.5 rounded-2xl bg-white border border-dashed border-[#89AA3E] flex items-center justify-between cursor-pointer hover:bg-[#FAF7F2] transition-colors">\n              <div className="flex items-center gap-2.5">\n                <Gift className="w-4 h-4 text-[#D4583D]" />\n                <div>\n                  <div className="text-xs font-bold text-[#121A14]">\n                    Подарочный крафт-бокс с открыткой\n                  </div>\n                  <div className="text-[10px] text-[#667069]">\n                    Каллиграфия ручной работы и запечатывание сургучом\n                  </div>\n                </div>\n              </div>\n              <div className="flex items-center gap-2">\n                <span className="text-xs font-bold text-[#035224]">+350 ₽</span>\n                <input\n                  type="checkbox"\n                  checked={giftBox}\n                  onChange={(e) => setGiftBox(e.target.checked)}\n                  className="w-4 h-4 accent-[#035224] rounded"\n                />\n              </div>\n            </label>\n          )}\n        </div>\n\n        {/* Drawer Footer */}\n        {items.length > 0 && !checkoutStep && !orderDone && (\n          <div className="p-5 bg-white border-t border-[#E2D7CC] space-y-3">\n            <div className="flex items-center justify-between text-xs text-[#667069]">\n              <span>Стоимость сборов:</span>\n              <span className="font-semibold text-[#121A14]">\n                {itemsTotal.toLocaleString('ru-RU')} ₽\n              </span>\n            </div>\n\n            {giftBox && (\n              <div className="flex items-center justify-between text-xs text-[#667069]">\n                <span>Подарочное оформление:</span>\n                <span className="font-semibold text-[#121A14]">350 ₽</span>\n              </div>\n            )}\n\n            <div className="flex items-center justify-between text-base font-bold text-[#035224] pt-2 border-t border-[#E2D7CC]">\n              <span>Итого к оплате:</span>\n              <span className="font-display text-3xl">\n                {grandTotal.toLocaleString('ru-RU')} ₽\n              </span>\n            </div>\n\n            <button\n              onClick={() => setCheckoutStep(true)}\n              className="w-full py-4 rounded-full bg-[#035224] hover:bg-[#023818] text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95 group"\n            >\n              <span>Перейти к оформлению</span>\n              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />\n            </button>\n\n            <div className="flex items-center justify-center gap-4 text-[10px] text-[#667069] pt-1">\n              <span className="flex items-center gap-1">\n                <ShieldCheck className="w-3 h-3 text-[#89AA3E]" /> Оплата по СБП\n              </span>\n              <span>•</span>\n              <span>Доставка СДЭК / Почта</span>\n            </div>\n          </div>\n        )}\n\n      </div>\n    </div>\n  );\n};\n