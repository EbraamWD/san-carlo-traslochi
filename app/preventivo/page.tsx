import type { Metadata } from "next";
import { Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import JsonLd from "@/components/JsonLd";
import { site, telHref } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Preventivo Trasloco Milano Gratuito",
  description:
    "Richiedi un preventivo gratuito per trasloco, sgombero o noleggio autoscala a Milano. Compila il modulo e inviacelo su WhatsApp o via email: rispondiamo in giornata.",
  alternates: { canonical: "/preventivo" },
  openGraph: { url: "/preventivo" },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Preventivo", path: "/preventivo" },
];

export default function QuotePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Preventivo gratuito"
        title="Preventivo trasloco a Milano"
        lead="Qualche informazione e ti richiamiamo per un sopralluogo gratuito, a domicilio o in videochiamata."
        crumbs={crumbs}
      />
      <section className="mx-auto -mt-12 grid max-w-7xl gap-16 px-5 pb-24 md:px-8 lg:grid-cols-12">
        <div className="relative lg:col-span-7">
          <QuoteForm />
        </div>
        <div className="pt-4 lg:col-span-4 lg:col-start-9 lg:pt-24">
          <h2 className="font-serif text-3xl">Preferisci parlarne?</h2>
          <p className="mt-4 leading-relaxed text-stone">
            Chiamaci: ti facciamo qualche domanda e fissiamo il sopralluogo. Per gli sgomberi bastano spesso alcune foto
            su WhatsApp.
          </p>
          <a href={telHref} className="mt-6 inline-flex items-center gap-3 font-serif text-3xl text-gold-dark hover:text-gold">
            <Phone className="h-5 w-5" /> {site.phoneDisplay}
          </a>
          <ul className="mt-10 space-y-3 border-t border-line pt-8 text-sm text-stone">
            <li>Sopralluogo e preventivo gratuiti e senza impegno</li>
            <li>Preventivo scritto, senza costi a sorpresa</li>
            <li>Sgomberi a partire da 75 €</li>
          </ul>
        </div>
      </section>
    </>
  );
}
