"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { useCommerce } from "./commerce-context";
import type { Product } from "./product-data";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCommerce();

  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0c0e] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-2 hover:border-white/30 hover:bg-[#111216]">
      <div className="absolute inset-x-8 top-16 h-20 rounded-full bg-white/0 blur-3xl transition group-hover:bg-white/10" />
      <span className="relative z-10 rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[10px] font-extrabold text-zinc-200">
        {product.badge}
      </span>
      <div className="relative my-5 aspect-[1.45] overflow-hidden rounded-[24px]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:-translate-y-3 group-hover:scale-105"
        />
      </div>
      <div className="flex items-end justify-between gap-3">
        <div>
          <h3 className="font-display text-sm font-extrabold tracking-[-0.04em]">{product.name}</h3>
          <p className="mt-1 text-xs text-zinc-500">{product.subtitle}</p>
          <p className="mt-3 text-lg font-black">{product.price}</p>
        </div>
        <button
          aria-label={`Add ${product.name} to cart`}
          onClick={() => addToCart(product)}
          className="grid size-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition group-hover:rotate-90 group-hover:bg-white group-hover:text-black"
        >
          <Plus className="size-4" />
        </button>
      </div>
    </article>
  );
}
