import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
  cta = "Explore Now",
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  cta?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden px-5 pt-28 md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.12),transparent_26rem)]" />
      <div className="mx-auto grid min-h-[560px] max-w-[1500px] items-center gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="relative z-10 py-12">
          <p className="mb-5 text-[11px] font-extrabold uppercase tracking-[0.24em] text-zinc-500">
            {eyebrow}
          </p>
          <h1 className="font-display text-6xl font-black uppercase leading-[0.88] tracking-[-0.075em] text-white md:text-8xl">
            {title}
          </h1>
          <p className="mt-7 max-w-md text-base leading-7 text-zinc-400">{copy}</p>
          <a
            href="#page-content"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-extrabold text-black transition hover:-translate-y-1 hover:bg-zinc-200"
          >
            {cta}
            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </a>
        </div>
        <div className="relative min-h-[380px] overflow-hidden rounded-[36px] border border-white/10 bg-zinc-950 shadow-[0_0_120px_rgba(255,255,255,0.08)] lg:min-h-[520px]">
          <Image src={image} alt="" fill priority sizes="(max-width: 1024px) 100vw, 64vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/10" />
        </div>
      </div>
    </section>
  );
}
