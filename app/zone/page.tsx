import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import Faqs from "@/components/Faqs";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import ServiceIcon from "@/components/ServiceIcon";
import { altriComuni, comuni, municipi } from "@/lib/zones";
import { services, type Faq } from "@/lib/services";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Traslochi Milano: Quartieri e Zone Servite",
  description:
    "Traslochi e sgomberi in tutti i 9 municipi di Milano, da Brera a Città Studi, da CityLife ai Navigli, e in provincia. Sopralluogo e preventivo gratuiti.",
  alternates: { canonical: "/zone" },
  openGraph: { url: "/zone" },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Zone servite", path: "/zone" },
];

const faqs: Faq[] = [
  {
    q: "Fate traslochi in tutti i quartieri di Milano?",
    a: "Sì, lavoriamo in tutti i 9 municipi di Milano, dal centro storico alle zone periferiche, e nei comuni della provincia.",
  },
  {
    q: "Fate traslochi in centro a Milano, dentro Area C?",
    a: "Sì. Per i traslochi all'interno della Cerchia dei Bastioni, dove vale Area C, pianifichiamo accessi, orari e sosta del mezzo in anticipo.",
  },
  {
    q: "Fate traslochi da Milano verso altre città?",
    a: "Sì, organizziamo traslochi da Milano verso la provincia, il resto della Lombardia e le altre regioni italiane.",
  },
];

export default function ZonesPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(faqs)]} />
      <PageHero
        icon={<MapPin className="h-12 w-12" strokeWidth={1.5} />}
        eyebrow="Zone servite"
        title="Traslochi in tutti i quartieri di Milano"
        lead="Lavoriamo in tutti i 9 municipi di Milano e nei comuni della provincia. Conosciamo accessi, ZTL e regole di sosta di ogni zona."
        crumbs={crumbs}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <h2 className="font-serif text-4xl md:text-5xl">I 9 municipi di Milano</h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#2e2b27]">
          Ogni zona di Milano ha le sue particolarità: nel centro storico, dentro la Cerchia dei Bastioni, vale Area C e
          molti palazzi d&apos;epoca non hanno ascensore; nelle zone più recenti, come CityLife o Porta Garibaldi, contano
          regolamenti condominiali e orari per il carico e scarico. Pianifichiamo ogni trasloco tenendone conto.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {municipi.map((m) => (
            <div key={m.n} className="border border-line bg-ivory p-7">
              <p className="eyebrow">Municipio {m.n}</p>
              <h3 className="mt-1 text-xl font-semibold">Traslochi {m.name}</h3>
              <p className="mt-3 leading-relaxed text-stone">{m.quartieri.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-sand/40">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <h2 className="font-serif text-4xl md:text-5xl">Provincia di Milano</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#2e2b27]">
            Oltre a Milano città lavoriamo nei comuni della provincia, per traslochi da e verso Milano o all&apos;interno
            dello stesso comune.
          </p>
          {comuni.length > 0 && (
            <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {comuni.map((c) => (
                <li key={c.slug}>
                  <Link href={`/zone/${c.slug}`} className="group flex items-center justify-between border border-line bg-ivory px-6 py-4 hover:border-gold">
                    <span className="font-semibold">Traslochi {c.name}</span>
                    <ArrowRight className="h-4 w-4 text-gold-dark transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <h3 className="mt-12 text-xl font-semibold">Lavoriamo anche a</h3>
          <p className="mt-3 max-w-4xl leading-relaxed text-[#2e2b27]">
            {altriComuni.join(", ")} e in tutti gli altri comuni della provincia di Milano.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <h2 className="font-serif text-4xl md:text-5xl">Servizi disponibili in tutte le zone</h2>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={`/${s.slug}`} className="flex items-center gap-3 border border-line px-6 py-4 hover:border-gold">
                <ServiceIcon slug={s.slug} className="h-5 w-5 text-gold-dark" />
                <span className="font-semibold">{s.h1}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="border-t border-line">
        <Faqs faqs={faqs} />
      </div>
      <CtaBand />
    </>
  );
}
