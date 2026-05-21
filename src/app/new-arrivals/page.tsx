import { Clock3, PackageCheck, Zap } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { newArrivalProducts } from "@/components/product-data";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NewArrivalsPage() {
  return (
    <main className="min-h-screen bg-[#050506] text-white">
      <SiteHeader />
      <PageHero
        eyebrow="Fresh Product Drops"
        title="New Arrivals"
        copy="The newest AERORUN releases, tuned for clean transitions, premium materials, and a darker kind of athletic luxury."
        image="/images/new-arrivals-hero.webp"
        cta="See The Drop"
      />
      <section id="page-content" className="mx-auto max-w-[1500px] px-5 py-14 md:px-8">
        <span id="latest-drop" className="block scroll-mt-28" />
        <SectionHeading
          eyebrow="Just Landed"
          title="Drop 26.05"
          copy="A compact launch edit with race foam, daily response, and city silhouettes."
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {newArrivalProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {[
            [PackageCheck, "Early Access", "Members receive first notice on limited size runs."],
            [Zap, "Fast Rotation", "Seasonal colorways move quickly and rarely restock."],
            [Clock3, "Launch Calendar", "New performance edits arrive every month."],
          ].map(([Icon, title, copy]) => (
            <article key={title as string} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <Icon className="mb-7 size-7" />
              <h3 className="font-display text-2xl font-black uppercase tracking-[-0.05em]">{title as string}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{copy as string}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
