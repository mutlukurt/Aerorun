import Image from "next/image";
import { Dumbbell, Footprints, Gauge } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { menProducts } from "@/components/product-data";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function MenPage() {
  return (
    <main className="min-h-screen bg-[#050506] text-white">
      <SiteHeader />
      <PageHero
        eyebrow="Men's Performance Edit"
        title="Men"
        copy="Structured cushioning, grounded grip, and sharp silhouettes for training blocks, commutes, and fast sessions after dark."
        image="/images/men-hero.webp"
        cta="Shop Men"
      />
      <section id="page-content" className="mx-auto max-w-[1500px] px-5 py-14 md:px-8">
        <SectionHeading eyebrow="Featured For Men" title="Built To Push" />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {menProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {[
            [Gauge, "Speed Work", "Lightweight response for tempo runs and intervals."],
            [Dumbbell, "Strength Days", "Stable platforms for gym floors and mixed training."],
            [Footprints, "Daily Miles", "Durable comfort for the route between every plan."],
          ].map(([Icon, title, copy]) => (
            <article key={title as string} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <Icon className="mb-7 size-7" />
              <h3 className="font-display text-2xl font-black uppercase tracking-[-0.05em]">{title as string}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{copy as string}</p>
            </article>
          ))}
        </div>
        <div className="mt-14 overflow-hidden rounded-[34px] border border-white/10">
          <div className="relative min-h-[360px]">
            <Image src="/images/banner-runner.webp" alt="" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/45 to-transparent" />
            <div className="relative z-10 max-w-xl p-8 md:p-12">
              <h2 className="font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em]">
                Train Past The Ordinary
              </h2>
              <p className="mt-5 text-sm leading-7 text-zinc-300">
                A men&apos;s edit with technical grip, sculpted soles, and restrained premium detailing.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
