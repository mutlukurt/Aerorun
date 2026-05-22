import Image from "next/image";
import { SlidersHorizontal } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { newArrivalProducts, products } from "@/components/product-data";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const expandedProducts = [
  ...products,
  {
    ...products[0],
    badge: "FAST",
    name: "AERORUN VELOCE X",
    price: "$219",
    image: newArrivalProducts[0].image,
  },
  {
    ...products[1],
    badge: "CORE",
    name: "AERORUN PULSE KNIT",
    price: "$179",
    image: newArrivalProducts[1].image,
  },
  {
    ...products[2],
    badge: "PRO",
    name: "AERORUN APEX CARBON",
    price: "$229",
    image: newArrivalProducts[2].image,
  },
  {
    ...products[3],
    badge: "CITY",
    name: "AERORUN URBAN LOW",
    price: "$149",
    image: newArrivalProducts[3].image,
  },
];

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-[#050506] text-white">
      <SiteHeader />
      <PageHero
        eyebrow="Complete Footwear System"
        title="Catalog"
        copy="Every AERORUN silhouette, from race-day propulsion to city-ready comfort, collected in one premium performance edit."
        image="/images/catalog-hero.webp"
        cta="Shop Catalog"
      />
      <section id="page-content" className="mx-auto max-w-[1500px] px-5 py-14 md:px-8">
        <span id="all-sneakers" className="block scroll-mt-28" />
        <div className="mb-8 flex flex-col justify-between gap-5 rounded-[28px] border border-white/10 bg-white/[0.03] p-4 md:flex-row md:items-center">
          <div className="flex flex-wrap gap-3">
            {["All", "Running", "Training", "Lifestyle", "Basketball", "Limited"].map((filter) => (
              <button
                key={filter}
                className="rounded-full border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-zinc-300 transition hover:border-white/35 hover:text-white"
              >
                {filter}
              </button>
            ))}
          </div>
          <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-black">
            <SlidersHorizontal className="size-4" />
            Filter
          </button>
        </div>
        <SectionHeading
          eyebrow="Shop All"
          title="Performance Lineup"
          copy="Built with the same dark editorial product language as the launch page, ready for a real e-commerce catalog."
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {expandedProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {[
            ["/images/tech-cushion.webp", "Cushion Lab", "Foams tuned for soft landings and quick transitions."],
            ["/images/tech-sole.webp", "Grip Geometry", "Outsole patterns tested for wet concrete and studio floors."],
            ["/images/tech-texture.webp", "Air Mesh", "Breathable uppers with structure where motion needs it."],
          ].map(([image, title, copy]) => (
            <article key={title} className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0c0e]">
              <div className="relative aspect-[1.45] overflow-hidden rounded-[28px]">
                <Image src={image} alt="" fill sizes="33vw" className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-black uppercase tracking-[-0.05em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{copy}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <article id="sale" className="scroll-mt-28 rounded-[34px] border border-white/10 bg-white/[0.03] p-8">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-500">
              Seasonal Access
            </p>
            <h2 className="font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em]">
              Sale
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400">
              Limited markdowns on selected training and lifestyle pairs. Premium build, sharper entry point.
            </p>
          </article>
          <article id="gift-cards" className="scroll-mt-28 rounded-[34px] border border-white/10 bg-white/[0.03] p-8">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-500">
              Digital Gifting
            </p>
            <h2 className="font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em]">
              Gift Cards
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400">
              Send movement credit for new drops, race-day pairs, or everyday city sneakers.
            </p>
          </article>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
