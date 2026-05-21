import Image from "next/image";
import { Activity, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { products } from "@/components/product-data";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function WomenPage() {
  return (
    <main className="min-h-screen bg-[#050506] text-white">
      <SiteHeader />
      <PageHero
        eyebrow="Women's Performance Edit"
        title="Women"
        copy="Fast, fluid, and refined. Technical sneakers shaped for long training days, sharp city movement, and all-day confidence."
        image="/images/women-hero.webp"
        cta="Shop Women"
      />
      <section id="page-content" className="mx-auto max-w-[1500px] px-5 py-14 md:px-8">
        <SectionHeading eyebrow="Featured For Women" title="Light On Impact" />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[products[0], products[2], products[1], products[3]].map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
        <div className="mt-14 grid gap-4 lg:grid-cols-[1fr_1.25fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
            <h2 className="font-display text-5xl font-black uppercase leading-[0.92] tracking-[-0.07em]">
              Fluid Fit.
              <br />
              Firm Return.
            </h2>
            <div className="mt-8 grid gap-5">
              {[
                [Activity, "Adaptive ride for changing pace."],
                [ShieldCheck, "Supportive overlays without bulk."],
                [Sparkles, "Premium finishes that move beyond training."],
              ].map(([Icon, copy]) => (
                <div key={copy as string} className="flex items-center gap-4 text-sm text-zinc-300">
                  <span className="grid size-10 place-items-center rounded-full border border-white/10">
                    <Icon className="size-4" />
                  </span>
                  {copy as string}
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[34px] border border-white/10">
            <Image src="/images/collection-lifestyle.webp" alt="" fill sizes="60vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
