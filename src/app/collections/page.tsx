import Image from "next/image";
import { Dumbbell, Footprints, Gauge, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const collections = [
  ["/images/collections-running.webp", Footprints, "Running", "Distance, pace, and late-night discipline."],
  ["/images/collections-training.webp", Dumbbell, "Training", "Stability for power days and mixed sessions."],
  ["/images/collections-lifestyle.webp", Sparkles, "Lifestyle", "Premium movement for the city between plans."],
  ["/images/collections-basketball.webp", Gauge, "Basketball", "Impact support and court-ready lift."],
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-[#050506] text-white">
      <SiteHeader />
      <PageHero
        eyebrow="AERORUN Worlds"
        title="Collections"
        copy="Four movement systems, one performance language: cinematic, precise, and built for daily motion."
        image="/images/collections-hero.webp"
        cta="Explore Collections"
      />
      <section id="page-content" className="mx-auto max-w-[1500px] px-5 py-14 md:px-8">
        <SectionHeading eyebrow="Shop By Movement" title="Choose Your Pace" />
        <div className="grid gap-4 md:grid-cols-2">
          {collections.map(([image, Icon, title, copy]) => (
            <article key={title as string} className="group relative min-h-[420px] overflow-hidden rounded-[34px] border border-white/10">
              <Image src={image as string} alt="" fill sizes="50vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
              <div className="absolute bottom-0 p-8">
                <Icon className="mb-5 size-8" />
                <h2 className="font-display text-5xl font-black uppercase tracking-[-0.07em]">{title as string}</h2>
                <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-300">{copy as string}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
