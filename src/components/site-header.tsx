"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, Minus, Plus, Search, ShoppingBag, Trash2, X } from "lucide-react";
import { useState } from "react";
import { useCommerce } from "./commerce-context";
import { allSearchProducts } from "./product-data";

export const navItems = [
  { label: "Catalog", href: "/catalog" },
  { label: "Men", href: "/men" },
  { label: "Women", href: "/women" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2" aria-label="AERORUN home">
      <span className="relative flex h-7 w-8 items-center justify-center overflow-hidden">
        <span className="absolute h-2 w-8 -skew-x-[28deg] bg-white transition-transform duration-300 group-hover:translate-x-1" />
        <span className="absolute bottom-1 h-1 w-5 -skew-x-[28deg] bg-zinc-500 transition-transform duration-300 group-hover:-translate-x-1" />
      </span>
      <span className="font-display text-xl font-black tracking-[-0.08em] text-white">
        AERO<span className="tracking-[-0.12em] text-zinc-400">RUN</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const {
    cart,
    cartCount,
    subtotal,
    isCartOpen,
    isSearchOpen,
    addToCart,
    decrementItem,
    incrementItem,
    removeItem,
    clearCart,
    openCart,
    closeCart,
    openSearch,
    closeSearch,
  } = useCommerce();

  const searchResults = allSearchProducts.filter((product) => {
    const haystack = `${product.name} ${product.subtitle} ${product.badge}`.toLowerCase();
    return haystack.includes(query.toLowerCase().trim());
  });

  return (
    <>
      <header id="top" className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-2xl">
        <nav className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 md:px-8">
          <Logo />
          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="nav-link text-xs font-semibold text-zinc-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="hidden items-center gap-5 text-sm text-zinc-200 md:flex">
            <button
              aria-label="Search"
              onClick={openSearch}
              className="transition hover:text-white"
            >
              <Search className="size-5" />
            </button>
            <button onClick={openCart} className="flex items-center gap-2 transition hover:text-white">
              <ShoppingBag className="size-5" />
              <span className="text-xs font-bold">Cart ({cartCount})</span>
            </button>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <button
              aria-label="Search"
              onClick={openSearch}
              className="grid size-10 place-items-center rounded-full border border-white/10"
            >
              <Search className="size-5" />
            </button>
            <button
              aria-label={`Cart with ${cartCount} items`}
              onClick={openCart}
              className="relative grid size-10 place-items-center rounded-full border border-white/10"
            >
              <ShoppingBag className="size-5" />
              {cartCount > 0 ? (
                <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-white text-[10px] font-black text-black">
                  {cartCount}
                </span>
              ) : null}
            </button>
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((value) => !value)}
              className="grid size-10 place-items-center rounded-full border border-white/10"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
        {menuOpen ? (
          <div className="border-t border-white/10 bg-black/95 px-5 py-5 md:hidden">
            <div className="grid gap-4">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} className="text-sm font-bold text-zinc-200">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      {isSearchOpen ? (
        <div className="fixed inset-0 z-[80] bg-black/75 p-4 backdrop-blur-xl" role="dialog" aria-modal="true">
          <button className="absolute inset-0 cursor-default" onClick={closeSearch} aria-label="Close search" />
          <div className="relative mx-auto mt-24 max-w-4xl overflow-hidden rounded-[34px] border border-white/10 bg-[#090a0c] shadow-[0_30px_120px_rgba(0,0,0,0.65)]">
            <div className="flex items-center gap-4 border-b border-white/10 p-5">
              <div className="flex min-h-14 flex-1 items-center gap-4 rounded-full border border-white/10 bg-black/40 px-5 transition focus-within:border-white/45 focus-within:ring-2 focus-within:ring-white/20">
                <Search className="size-5 shrink-0 text-zinc-400" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search sneakers, drops, and silhouettes"
                  className="min-h-12 flex-1 border-0 bg-transparent text-lg font-semibold text-white outline-none placeholder:text-zinc-600 focus:outline-none focus:ring-0"
              />
              </div>
              <button
                aria-label="Close search"
                onClick={closeSearch}
                className="grid size-10 place-items-center rounded-full border border-white/10 text-zinc-300 transition hover:bg-white hover:text-black"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-zinc-500">
                  {query ? `${searchResults.length} results` : "Popular Products"}
                </p>
                <Link
                  href="/catalog"
                  onClick={closeSearch}
                  className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-zinc-300 hover:text-white"
                >
                  Full Catalog
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {searchResults.map((product) => (
                  <article key={product.name} className="flex gap-4 rounded-[24px] border border-white/10 bg-white/[0.03] p-3">
                    <div className="relative size-24 shrink-0 overflow-hidden rounded-[20px] bg-black">
                      <Image src={product.image} alt={product.name} fill sizes="96px" className="object-cover" />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col justify-center">
                      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-500">
                        {product.badge}
                      </p>
                      <h3 className="mt-1 truncate font-display text-sm font-black tracking-[-0.04em]">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-xs text-zinc-500">{product.subtitle}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="font-black">{product.price}</span>
                        <button
                          onClick={() => addToCart(product)}
                          className="rounded-full bg-white px-4 py-2 text-xs font-black text-black transition hover:bg-zinc-200"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {isCartOpen ? (
        <div className="fixed inset-0 z-[90]" role="dialog" aria-modal="true">
          <button className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeCart} aria-label="Close cart" />
          <aside className="absolute bottom-0 right-0 top-0 flex w-full max-w-[480px] flex-col border-l border-white/10 bg-[#08090b] shadow-[0_0_120px_rgba(0,0,0,0.75)]">
            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-zinc-500">
                  Shopping Cart
                </p>
                <h2 className="mt-2 font-display text-3xl font-black uppercase tracking-[-0.06em]">
                  Cart ({cartCount})
                </h2>
              </div>
              <button
                aria-label="Close cart"
                onClick={closeCart}
                className="grid size-10 place-items-center rounded-full border border-white/10 text-zinc-300 transition hover:bg-white hover:text-black"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="grid size-16 place-items-center rounded-full border border-white/10">
                    <ShoppingBag className="size-7 text-zinc-500" />
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-black uppercase tracking-[-0.06em]">
                    Your Cart Is Empty
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-500">
                    Add a performance pair and keep the checkout flow ready.
                  </p>
                  <Link
                    href="/catalog"
                    onClick={closeCart}
                    className="mt-7 rounded-full bg-white px-6 py-3 text-sm font-black text-black transition hover:bg-zinc-200"
                  >
                    Shop Catalog
                  </Link>
                </div>
              ) : (
                <div className="grid gap-4">
                  {cart.map((item) => (
                    <article key={item.product.name} className="rounded-[26px] border border-white/10 bg-white/[0.03] p-3">
                      <div className="flex gap-4">
                        <div className="relative size-24 shrink-0 overflow-hidden rounded-[20px] bg-black">
                          <Image src={item.product.image} alt={item.product.name} fill sizes="96px" className="object-cover" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h3 className="font-display text-sm font-black tracking-[-0.04em]">
                                {item.product.name}
                              </h3>
                              <p className="mt-1 text-xs text-zinc-500">{item.product.subtitle}</p>
                            </div>
                            <button
                              aria-label={`Remove ${item.product.name}`}
                              onClick={() => removeItem(item.product.name)}
                              className="grid size-8 place-items-center rounded-full border border-white/10 text-zinc-500 transition hover:border-white/30 hover:text-white"
                            >
                              <Trash2 className="size-4" />
                            </button>
                          </div>
                          <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center rounded-full border border-white/10">
                              <button
                                aria-label={`Decrease ${item.product.name}`}
                                onClick={() => decrementItem(item.product.name)}
                                className="grid size-9 place-items-center text-zinc-300 transition hover:text-white"
                              >
                                <Minus className="size-4" />
                              </button>
                              <span className="min-w-8 text-center text-sm font-black">{item.quantity}</span>
                              <button
                                aria-label={`Increase ${item.product.name}`}
                                onClick={() => incrementItem(item.product.name)}
                                className="grid size-9 place-items-center text-zinc-300 transition hover:text-white"
                              >
                                <Plus className="size-4" />
                              </button>
                            </div>
                            <span className="font-black">{item.product.price}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 ? (
              <div className="border-t border-white/10 p-6">
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span className="text-zinc-400">Subtotal</span>
                  <span className="text-xl font-black">${subtotal.toFixed(0)}</span>
                </div>
                <button className="w-full rounded-full bg-white px-6 py-4 text-sm font-black text-black transition hover:-translate-y-1 hover:bg-zinc-200">
                  Checkout
                </button>
                <button
                  onClick={clearCart}
                  className="mt-3 w-full rounded-full border border-white/10 px-6 py-3 text-sm font-bold text-zinc-400 transition hover:border-white/30 hover:text-white"
                >
                  Clear Cart
                </button>
              </div>
            ) : null}
          </aside>
        </div>
      ) : null}
    </>
  );
}
