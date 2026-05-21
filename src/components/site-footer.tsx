import Link from "next/link";
import { siInstagram, siTiktok, siX } from "simple-icons";
import { Logo } from "./site-header";

const footerColumns = [
  {
    title: "Catalog",
    href: "/catalog",
    links: [
      ["All Sneakers", "/catalog#all-sneakers"],
      ["New Arrivals", "/new-arrivals#latest-drop"],
      ["Best Sellers", "/#products"],
      ["Sale", "/catalog#sale"],
      ["Gift Cards", "/catalog#gift-cards"],
    ],
  },
  {
    title: "Customer",
    href: "/contact",
    links: [
      ["Delivery & Payment", "/contact#delivery-payment"],
      ["Returns", "/contact#returns"],
      ["Size Guide", "/contact#size-guide"],
      ["FAQ", "/contact#faq"],
      ["Track Order", "/contact#track-order"],
    ],
  },
  {
    title: "Company",
    href: "/about",
    links: [
      ["About", "/about#story"],
      ["Technology", "/about#technology"],
      ["Sustainability", "/about#sustainability"],
      ["Blog", "/about#blog"],
      ["Careers", "/about#careers"],
    ],
  },
];

function SocialIcon({ icon, label }: { icon: typeof siInstagram; label: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="grid size-9 place-items-center rounded-full border border-white/10 text-zinc-300 transition hover:border-white/35 hover:bg-white hover:text-black focus-visible:bg-white focus-visible:text-black"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-current">
        <path d={icon.path} />
      </svg>
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 md:px-8">
      <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1.1fr_2fr_0.9fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-6 text-zinc-500">
            Premium performance footwear for people who move with speed, style, and intention.
          </p>
          <div className="mt-6 flex gap-3">
            <SocialIcon icon={siInstagram} label="Instagram" />
            <SocialIcon icon={siTiktok} label="TikTok" />
            <SocialIcon icon={siX} label="X" />
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <Link
                href={column.href}
                className="mb-4 block text-xs font-black uppercase tracking-[0.18em] text-white transition hover:text-zinc-300"
              >
                {column.title}
              </Link>
              <div className="grid gap-3">
                {column.links.map(([label, href]) => (
                  <Link key={label} href={href} className="text-sm text-zinc-500 transition hover:text-white">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3 className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-white">
            Contact
          </h3>
          <div className="grid gap-3 text-sm text-zinc-500">
            <p>88 Motion Ave, New York, NY</p>
            <a href="mailto:hello@aerorun.co" className="hover:text-white">
              hello@aerorun.co
            </a>
            <a href="tel:+15550198" className="hover:text-white">
              +1 555 0198
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-[1500px] flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-zinc-600 md:flex-row">
        <p>© 2026 AERORUN. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
