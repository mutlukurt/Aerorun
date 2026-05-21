import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050506] text-white">
      <SiteHeader />
      <PageHero
        eyebrow="AERORUN Support"
        title="Contact"
        copy="Questions about sizing, drops, performance fit, or orders? Our team keeps the experience as precise as the product."
        image="/images/contact-hero.webp"
        cta="Send A Message"
      />
      <section id="page-content" className="mx-auto max-w-[1500px] px-5 py-14 md:px-8">
        <SectionHeading eyebrow="Get In Touch" title="We Move Fast" />
        <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-4">
            {[
              [MapPin, "Visit", "88 Motion Ave, New York, NY"],
              [Mail, "Email", "hello@aerorun.co"],
              [Phone, "Phone", "+1 555 0198"],
            ].map(([Icon, title, copy]) => (
              <article key={title as string} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
                <Icon className="mb-6 size-7" />
                <h3 className="font-display text-2xl font-black uppercase tracking-[-0.05em]">{title as string}</h3>
                <p className="mt-3 text-sm text-zinc-400">{copy as string}</p>
              </article>
            ))}
          </div>
          <form className="rounded-[34px] border border-white/10 bg-[#0b0c0e] p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="min-h-12 rounded-full border border-white/15 bg-black/60 px-5 text-sm text-white placeholder:text-zinc-500 focus:border-white/50" placeholder="First name" />
              <input className="min-h-12 rounded-full border border-white/15 bg-black/60 px-5 text-sm text-white placeholder:text-zinc-500 focus:border-white/50" placeholder="Last name" />
            </div>
            <input className="mt-4 min-h-12 w-full rounded-full border border-white/15 bg-black/60 px-5 text-sm text-white placeholder:text-zinc-500 focus:border-white/50" placeholder="Email address" />
            <textarea className="mt-4 min-h-44 w-full resize-none rounded-[28px] border border-white/15 bg-black/60 p-5 text-sm text-white placeholder:text-zinc-500 focus:border-white/50" placeholder="Tell us what you need" />
            <button className="mt-4 rounded-full bg-white px-8 py-4 text-sm font-extrabold text-black transition hover:-translate-y-1 hover:bg-zinc-200">
              Send Message
            </button>
          </form>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {[
            ["delivery-payment", "Delivery & Payment", "Fast shipping options, secure checkout, and clear payment support."],
            ["returns", "Returns", "Easy return guidance for unworn pairs within the eligible window."],
            ["size-guide", "Size Guide", "Fit notes for race, training, lifestyle, and court silhouettes."],
            ["faq", "FAQ", "Quick answers for product care, launches, sizing, and order changes."],
            ["track-order", "Track Order", "Order status support from confirmation through delivery."],
          ].map(([id, title, copy]) => (
            <article key={id} id={id} className="scroll-mt-28 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-display text-xl font-black uppercase tracking-[-0.05em]">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
