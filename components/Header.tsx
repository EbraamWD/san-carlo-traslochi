"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Wordmark from "./Wordmark";
import ServiceIcon from "./ServiceIcon";
import { services } from "@/lib/services";
import { site, telHref } from "@/lib/site";

const links = [
  { href: "/zone", label: "Zone" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/guide", label: "Guide" },
  { href: "/contatti", label: "Contatti" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-ivory transition-all duration-500 ${
        scrolled || open ? "bg-ink/95 backdrop-blur-md shadow-[0_1px_0_rgba(180,138,85,0.25)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" aria-label={`${site.name} – home`}>
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-9 text-sm tracking-wide lg:flex" aria-label="Principale">
          <div className="group relative">
            <button className="flex items-center gap-1 py-2 transition-colors hover:text-gold-light">
              Servizi <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <ul className="border border-gold/20 bg-ink-2 p-2 shadow-2xl">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/${s.slug}`}
                      className="flex items-center gap-3 px-4 py-2.5 text-ivory/80 transition-colors hover:bg-ink-3 hover:text-gold-light"
                    >
                      <ServiceIcon slug={s.slug} className="h-4 w-4 text-gold" />
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="py-2 transition-colors hover:text-gold-light">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a href={telHref} className="flex items-center gap-2 text-sm tracking-wide hover:text-gold-light">
            <Phone className="h-4 w-4 text-gold" /> {site.phoneDisplay}
          </a>
          <Link
            href="/preventivo"
            className="border border-gold px-5 py-2.5 text-base font-semibold text-gold-light transition-colors hover:bg-gold hover:text-ink"
          >
            Preventivo gratuito
          </Link>
        </div>

        <button
          className="p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-gold/20 px-5 pb-8 pt-4 lg:hidden" aria-label="Mobile" onClick={() => setOpen(false)}>
          <p className="eyebrow mb-3 !text-gold-light">Servizi</p>
          <ul className="mb-6 space-y-1">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="flex items-center gap-3 py-2 text-lg">
                  <ServiceIcon slug={s.slug} className="h-5 w-5 text-gold" />
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-1 border-t border-gold/20 pt-4">
            {[...links, { href: "/preventivo", label: "Preventivo gratuito" }].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="block py-2 text-lg">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
