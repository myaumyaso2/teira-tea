'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { BrandPhilosophy } from '@/components/BrandPhilosophy';
import { ProductCatalog } from '@/components/ProductCatalog';
import { ColorSystem } from '@/components/ColorSystem';
import { DigitalEcosystem } from '@/components/DigitalEcosystem';
import { B2BSection } from '@/components/B2BSection';
import { Footer } from '@/components/Footer';
import { CartDrawer, CartItem } from '@/components/CartDrawer';
import { TeaQuizModal } from '@/components/TeaQuizModal';
import { TeaProduct, TeaWeightOption } from '@/data/teaProducts';

export default function HomePage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Load initial cart from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('teira_cart');
      if (saved) {
        setCartItems(JSON.parse(saved));
      }
    } catch (e) {
      // ignore
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('teira_cart', JSON.stringify(cartItems));
    } catch (e) {
      // ignore
    }
  }, [cartItems]);

  const handleAddToCart = (product: TeaProduct, weightOption: TeaWeightOption) => {
    const itemId = `${product.id}-${weightOption.weight}`;
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {\n          id: itemId,
          product,
          weightOption,
          quantity: 1,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.weightOption.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen flex flex-col bg-[#FAF7F2]">
      {/* Navigation Header */}
      <Header
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenB2B={() => {
          const el = document.getElementById('b2b');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Atmospheric Hero from Slide 001 Cover & Metaphor */}
      <Hero onOpenQuiz={() => setIsQuizOpen(true)} />

      {/* Visual Metaphor & Anatomy of TEIRA Mark (Slides 002 & 034) */}
      <BrandPhilosophy />

      {/* Official Packaging Showcase & Sourcing Catalog (Slides 039–041) */}
      <ProductCatalog
        activeState="all"
        onAddToCart={handleAddToCart}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Official Brand Colors (PANTONE) & Quality Stamps (Slides 028, 032, 035) */}
      <ColorSystem />

      {/* Digital Ecosystem & App Mockups (Slides 023, 025, 027) */}
      <DigitalEcosystem />

      {/* B2B / HoReCa Partnership Section */}
      <B2BSection />

      {/* Brand Footer */}
      <Footer />

      {/* Cart Drawer Modal */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Interactive 4-step Tea Matcher Quiz Modal */}
      <TeaQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onAddToCart={handleAddToCart}
      />
    </main>
  );
}
