import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { guides } from "@/lib/guides";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Guide al Trasloco a Milano",
  description:
    "Guide pratiche per organizzare un trasloco a Milano: permesso di suolo pubblico, costi, checklist settimana per settimana.",
  alternates: { canonical: "/guide" },
  openGraph: { url: "/guide" },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Guide", path: "/guide" },
];

export default function GuidesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Guide"
        title="Guide al trasloco a Milano"
        lead="Permessi, costi e organizzazione: tutto quello che serve sapere prima di cambiare casa o ufficio."
        crumbs={crumbs}
      />
      <section className="mx-auto max-w-5xl px-5 py-24 md:px-8">
        <ul className="divide-y divide-line border-y border-line">
          {guides.map((g) => (
            <li key={g.slug}>
              <Link href={`/guide/${g.slug}`} className="group flex items-start justify-between gap-8 py-10">
                <div>
                  <h2 className="font-serif text-3xl transition-colors group-hover:text-gold-dark">{g.title}</h2>
                  <p className="mt-3 max-w-2xl text-stone">{g.metaDescription}</p>
                </div>
                <ArrowUpRight className="mt-2 h-6 w-6 shrink-0 text-gold" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
