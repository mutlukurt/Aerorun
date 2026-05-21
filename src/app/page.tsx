"use client";

import Image from "next/image";
import { useEffect } from "react";
import {
  ArrowRight,
  CircleGauge,
  Dumbbell,
  Footprints,
  Plus,
  ShieldCheck,
  Sparkles,
  Timer,
  Zap,
} from "lucide-react";
import { useCommerce } from "@/components/commerce-context";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const products = [
  {
    badge: "HOT",
    name: "AERORUN VELOCE",
    subtitle: "Race-day foam for forward momentum.",
    price: "$189",
    image: "/images/product-veloce.webp",
  },
  {
    badge: "NEW",
    name: "AERORUN PULSE",
    subtitle: "Responsive rhythm for daily miles.",
    price: "$169",
    image: "/images/product-pulse.webp",
  },
  {
    badge: "HOT",
    name: "AERORUN APEX",
    subtitle: "Maximum propulsion with soft landings.",
    price: "$199",
    image: "/images/product-apex.webp",
  },
  {
    badge: "LIMITED",
    name: "AERORUN URBAN",
    subtitle: "Street comfort with training DNA.",
    price: "$159",
    image: "/images/product-urban.webp",
  },
];

const techFeatures = [
  {
    title: "Comfort",
    copy: "Adaptive cushioning and breathable materials built for long sessions.",
    image: "/images/tech-cushion.webp",
  },
  {
    title: "Technology",
    copy: "Lightweight sole geometry designed for smooth energy return.",
    image: "/images/tech-sole.webp",
  },
  {
    title: "Style",
    copy: "Modern silhouettes and premium details made for everyday movement.",
    image: "/images/tech-texture.webp",
  },
];

const collections = [
  {
    title: "Running",
    subtitle: "Distance. Speed. Discipline.",
    image: "/images/collection-running.webp",
    icon: Footprints,
  },
  {
    title: "Training",
    subtitle: "Power. Control. Stability.",
    image: "/images/collection-training.webp",
    icon: Dumbbell,
  },
  {
    title: "Lifestyle",
    subtitle: "Built for the pace between plans.",
    image: "/images/collection-lifestyle.webp",
    icon: Sparkles,
  },
  {
    title: "Basketball",
    subtitle: "Impact. Lift. Court command.",
    image: "/images/collection-basketball.webp",
    icon: CircleGauge,
  },
];

function SectionHeader({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: string;
  action?: string;
}) {
  return (
    <div className="reveal mb-6 flex items-end justify-between gap-5 md:mb-8">
      <div>
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-500">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-white md:text-5xl">
          {title}
        </h2>
      </div>
      {action ? (
        <a
          href="#"
          className="group hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-zinc-300 transition hover:text-white sm:flex"
        >
          {action}
          <ArrowRight className="size-4 transition group-hover:translate-x-1" />
        </a>
      ) : null}
    </div>
  );
}

export default function Home() {
  const { addToCart } = useCommerce();

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-hero]");
    const onMove = (event: MouseEvent) => {
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      hero.style.setProperty("--my", `${event.clientY - rect.top}px`);
    };
    hero?.addEventListener("mousemove", onMove);

    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { rootMargin: "220px 0px", threshold: 0.08 },
    );
    reveals.forEach((item) => observer.observe(item));

    return () => {
      hero?.removeEventListener("mousemove", onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#050506] text-white">
      <link rel="preload" as="image" href="/images/hero-athlete.webp" fetchPriority="high" />
      <SiteHeader />

      <section
        data-hero
        className="hero-glow noise relative isolate min-h-[780px] overflow-hidden pt-20 lg:min-h-[840px]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050506_0%,rgba(5,5,6,0.84)_31%,rgba(5,5,6,0.18)_72%,#050506_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050506] to-transparent" />
        <div className="relative mx-auto grid max-w-[1500px] gap-10 px-5 pb-12 pt-14 md:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:pb-8 lg:pt-20">
          <div className="z-10 flex flex-col justify-center">
            <p className="reveal mb-6 text-[11px] font-extrabold uppercase tracking-[0.22em] text-zinc-400">
              Premium Performance Footwear
            </p>
            <h1 className="reveal font-display text-[17vw] font-black uppercase leading-[0.82] tracking-[-0.085em] text-white sm:text-8xl lg:text-[8.3rem] xl:text-[10rem]">
              Speed.
              <br />
              Style.
              <br />
              Motion.
            </h1>
            <p className="reveal mt-7 max-w-md text-base leading-7 text-zinc-400 md:text-lg">
              Created for people who move fast, train hard, and refuse to choose
              between performance and style.
            </p>
            <div className="reveal mt-8 flex items-center gap-6">
              <a
                href="#products"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-extrabold text-black shadow-[0_20px_60px_rgba(255,255,255,0.18)] transition hover:-translate-y-1 hover:bg-zinc-200"
              >
                Explore Collection
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </a>
            </div>
            <div className="reveal mt-16 flex gap-8 text-xs font-bold text-zinc-500">
              {["01", "02", "03"].map((item, index) => (
                <button
                  key={item}
                  className={`relative pb-3 ${index === 0 ? "text-white" : ""}`}
                >
                  {item}
                  {index === 0 ? (
                    <span className="absolute bottom-0 left-0 h-px w-8 bg-white" />
                  ) : null}
                </button>
              ))}
            </div>
          </div>
          <div className="relative min-h-[500px] lg:min-h-[680px]">
            <Image
              src="/images/hero-athlete.webp"
              alt="AERORUN athlete wearing premium running sneakers in a dark urban training space"
              fill
              priority
              loading="eager"
              fetchPriority="high"
              decoding="sync"
              sizes="(max-width: 1024px) 100vw, 62vw"
              className="rounded-[36px] object-cover object-center opacity-95 shadow-[0_0_120px_rgba(255,255,255,0.08)] transition duration-700 hover:scale-[1.015]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050506] via-transparent to-black/20 lg:hidden" />
            <div className="absolute right-3 top-1/2 hidden -translate-y-1/2 space-y-7 lg:block">
              {[
                ["Innovative Materials", ShieldCheck],
                ["Speed Engineered", Zap],
                ["All-Day Comfort", Timer],
              ].map(([label, Icon]) => (
                <div key={label as string} className="reveal flex w-48 items-center gap-4">
                  <span className="grid size-10 place-items-center rounded-full border border-white/15 bg-black/45 backdrop-blur-xl">
                    <Icon className="size-4" />
                  </span>
                  <span className="text-xs font-bold leading-5 text-zinc-200">
                    {label as string}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-[1500px] px-5 py-12 md:px-8">
        <SectionHeader eyebrow="Best Sellers" title="Champion Picks" action="View All" />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.name}
              className="reveal group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0c0e] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-2 hover:border-white/30 hover:bg-[#111216]"
            >
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
                  <h3 className="font-display text-sm font-extrabold tracking-[-0.04em]">
                    {product.name}
                  </h3>
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
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1500px] gap-8 border-t border-white/10 px-5 py-14 md:px-8 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="reveal">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-500">
            Technology & Benefits
          </p>
          <h2 className="font-display text-4xl font-black uppercase leading-[0.92] tracking-[-0.06em] md:text-6xl">
            Built For Your
            <br />
            Best Result
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {techFeatures.map((feature) => (
            <article
              key={feature.title}
              className="reveal border-l border-white/10 pl-5 transition duration-300 hover:border-white/35"
            >
              <div className="relative mb-6 aspect-[1.3] overflow-hidden rounded-[28px] bg-zinc-900">
                <Image
                  src={feature.image}
                  alt={`${feature.title} sneaker technology detail`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <h3 className="font-display text-sm font-black uppercase tracking-[-0.02em]">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{feature.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-6 md:px-8">
        <div className="reveal relative min-h-[410px] overflow-hidden rounded-[34px] border border-white/10 bg-zinc-950">
          <Image
            src="/images/banner-runner.webp"
            alt="Runner sprinting through a concrete urban training space"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/45 to-transparent" />
          <div className="relative z-10 flex min-h-[410px] max-w-xl flex-col justify-center px-7 py-10 md:px-16">
            <h2 className="font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] md:text-7xl">
              Move On
              <br />
              Your Terms
            </h2>
            <p className="mt-6 text-sm leading-7 text-zinc-300 md:text-base">
              Wherever the day takes you — city streets, training zones, or
              late-night runs — AERORUN keeps your pace, your style, your rhythm.
            </p>
            <a
              href="#"
              className="group mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-black transition hover:-translate-y-1"
            >
              Get Inspired
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-12 md:px-8">
        <SectionHeader eyebrow="Collections" title="For Every Movement" action="View All Categories" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {collections.map(({ title, subtitle, image, icon: Icon }) => (
            <article
              key={title}
              className="reveal group relative min-h-[230px] overflow-hidden rounded-[28px] border border-white/10 bg-zinc-950"
            >
              <Image
                src={image}
                alt={`${title} collection`}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <Icon className="mb-4 size-6 text-white" />
                <h3 className="font-display text-xl font-black uppercase tracking-[-0.05em]">
                  {title}
                </h3>
                <p className="mt-2 text-xs font-semibold text-zinc-300">{subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 pb-14 md:px-8">
        <div className="reveal grid overflow-hidden rounded-[34px] border border-white/10 bg-[#0b0c0e] md:grid-cols-[0.8fr_1fr_0.7fr]">
          <div className="flex items-center border-b border-white/10 p-7 md:border-b-0 md:border-r">
            <h2 className="font-display text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-5xl">
              Be First
              <br />
              In Motion
            </h2>
          </div>
          <div className="flex flex-col justify-center p-7">
            <p className="mb-5 max-w-md text-sm leading-6 text-zinc-300">
              Subscribe for product drops, training stories, and exclusive offers.
            </p>
            <form className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="min-h-12 flex-1 rounded-full border border-white/15 bg-black/70 px-5 text-sm text-white placeholder:text-zinc-400 focus:border-white/50"
              />
              <button className="rounded-full bg-white px-7 py-3 text-sm font-extrabold text-black transition hover:-translate-y-1 hover:bg-zinc-200">
                Subscribe
              </button>
            </form>
            <label className="mt-4 flex gap-3 text-xs leading-5 text-zinc-400">
              <input type="checkbox" className="mt-1 accent-white" />
              I agree to receive updates and accept the privacy policy.
            </label>
          </div>
          <div className="relative min-h-[220px] overflow-hidden">
            <Image
              src="/images/shoebox.webp"
              alt="AERORUN premium black shoebox packaging"
              fill
              sizes="(max-width: 768px) 100vw, 30vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c0e] to-transparent md:bg-gradient-to-l" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
