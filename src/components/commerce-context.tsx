"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "./product-data";

type CartLine = {
  product: Product;
  quantity: number;
};

type CommerceContextValue = {
  cart: CartLine[];
  cartCount: number;
  subtotal: number;
  isCartOpen: boolean;
  isSearchOpen: boolean;
  addToCart: (product: Product) => void;
  decrementItem: (name: string) => void;
  incrementItem: (name: string) => void;
  removeItem: (name: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  openSearch: () => void;
  closeSearch: () => void;
};

const CommerceContext = createContext<CommerceContextValue | null>(null);

const storageKey = "aerorun-cart";

function getPriceValue(price: string) {
  return Number(price.replace(/[^0-9.]/g, "")) || 0;
}

export function CommerceProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [hasLoadedCart, setHasLoadedCart] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      const saved = window.localStorage.getItem(storageKey);
      if (!saved) {
        setHasLoadedCart(true);
        return;
      }

      try {
        const parsed = JSON.parse(saved) as CartLine[];
        if (Array.isArray(parsed)) setCart(parsed);
      } catch {
        window.localStorage.removeItem(storageKey);
      } finally {
        setHasLoadedCart(true);
      }
    });
  }, []);

  useEffect(() => {
    if (!hasLoadedCart) return;
    window.localStorage.setItem(storageKey, JSON.stringify(cart));
  }, [cart, hasLoadedCart]);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce(
    (total, item) => total + getPriceValue(item.product.price) * item.quantity,
    0,
  );

  const value = useMemo<CommerceContextValue>(
    () => ({
      cart,
      cartCount,
      subtotal,
      isCartOpen,
      isSearchOpen,
      addToCart: (product) => {
        setCart((items) => {
          const existing = items.find((item) => item.product.name === product.name);
          if (existing) {
            return items.map((item) =>
              item.product.name === product.name
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            );
          }
          return [...items, { product, quantity: 1 }];
        });
        setIsCartOpen(true);
      },
      decrementItem: (name) => {
        setCart((items) =>
          items
            .map((item) =>
              item.product.name === name
                ? { ...item, quantity: Math.max(0, item.quantity - 1) }
                : item,
            )
            .filter((item) => item.quantity > 0),
        );
      },
      incrementItem: (name) => {
        setCart((items) =>
          items.map((item) =>
            item.product.name === name ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        );
      },
      removeItem: (name) => {
        setCart((items) => items.filter((item) => item.product.name !== name));
      },
      clearCart: () => setCart([]),
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      openSearch: () => setIsSearchOpen(true),
      closeSearch: () => setIsSearchOpen(false),
    }),
    [cart, cartCount, isCartOpen, isSearchOpen, subtotal],
  );

  return <CommerceContext.Provider value={value}>{children}</CommerceContext.Provider>;
}

export function useCommerce() {
  const context = useContext(CommerceContext);
  if (!context) {
    throw new Error("useCommerce must be used within CommerceProvider");
  }
  return context;
}
