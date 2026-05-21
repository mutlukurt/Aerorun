import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050506] text-white">
      <SiteHeader />
      <PageHero
        eyebrow="Brand Story"
        title="About"
        copy="AERORUN designs performance footwear for people who treat movement as a daily standard, not a special occasion."
        image="/images/about-hero.webp"
        cta="Our Philosophy"
      />
      <section id="page-content" className="mx-auto max-w-[1500px] px-5 py-14 md:px-8">
        <span id="story" className="block scroll-mt-28" />
        <SectionHeading
          eyebrow="Inside AERORUN"
          title="Speed With Intention"
          copy="We pair technical running construction with a restrained visual language made for modern city athletes."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            ["technology", "01", "Material First", "Every upper, foam, and outsole is chosen for feel, durability, and visual restraint."],
            ["sustainability", "02", "Movement Tested", "Silhouettes are shaped around training, commuting, and the fast transitions between them."],
            ["blog", "03", "Quiet Premium", "No noise, no excess, just confident footwear with technical depth."],
          ].map(([id, number, title, copy]) => (
            <article key={id} id={id} className="scroll-mt-28 rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs font-black text-zinc-500">{number}</p>
              <h3 className="mt-8 font-display text-3xl font-black uppercase tracking-[-0.06em]">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{copy}</p>
            </article>
          ))}
        </div>
        <div className="mt-14 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative min-h-[430px] overflow-hidden rounded-[34px] border border-white/10">
            <Image src="/images/tech-sole.webp" alt="" fill sizes="60vw" className="object-cover" />
          </div>
          <div className="rounded-[34px] border border-white/10 bg-[#0b0c0e] p-8">
            <h2 id="careers" className="scroll-mt-28 font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em]">
              Built In The Details
            </h2>
            <p className="mt-6 text-sm leading-7 text-zinc-400">
              Our design language is deliberately dark, technical, and precise. Each product has to look sharp in a studio and feel natural under pressure.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
