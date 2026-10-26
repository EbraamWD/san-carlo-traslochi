import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { extraServices } from "@/lib/services";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Chi Siamo | Ditta di Traslochi a Milano",
  description:
    "San Carlo Traslochi è una ditta di traslochi e sgomberi a Milano. Il nostro metodo: sopralluogo gratuito, preventivo scritto e un unico referente.",
  alternates: { canonical: "/chi-siamo" },
  openGraph: { url: "/chi-siamo" },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Chi siamo", path: "/chi-siamo" },
];

const values = [
  { title: "Un solo referente", text: "Dal sopralluogo alla consegna parli sempre con la stessa persona." },
  { title: "Prezzi scritti", text: "Ogni preventivo è dettagliato e definitivo: niente voci aggiunte il giorno del trasloco." },
  { title: "Rispetto degli spazi", text: "Proteggiamo pavimenti, porte e ascensori, e lasciamo tutto in ordine." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="San Carlo Traslochi"
        title="Chi siamo"
        lead={`${site.name} è una ditta di traslochi e sgomberi con sede a ${site.city}${site.foundingYear ? `, attiva dal ${site.foundingYear}` : ""}.`}
        crumbs={crumbs}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">Il nostro lavoro</h2>
        </Reveal>
        <Reveal delay={0.1} className="prose-lux lg:col-span-6 lg:col-start-7">
          <p>
            Ci occupiamo di traslochi di abitazioni e uffici, sgomberi, smontaggio e montaggio mobili, fornitura di
            materiali da imballaggio e noleggio di piattaforme aeree con operatore, a Milano e in provincia.
          </p>
          <p>
            Crediamo che un trasloco sia prima di tutto una questione di fiducia: apri le porte di casa a persone che
            non conosci e affidi loro oggetti che hanno un valore, spesso non solo economico. Per questo lavoriamo con
            squadre qualificate, un metodo preciso e preventivi chiari.
          </p>
          {/* TODO: aggiungere storia, anni di attività, iscrizione Albo autotrasportatori, copertura assicurativa e foto reali di squadra e mezzi. */}
        </Reveal>
      </section>

      <section className="border-y border-line bg-sand/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-3 md:px-8">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1} className="border-t border-gold pt-6">
              <h3 className="text-xl font-semibold">{v.title}</h3>
              <p className="mt-3 leading-relaxed text-stone">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <p className="eyebrow">Oltre ai traslochi</p>
        <h2 className="mt-4 font-serif text-4xl">Servizi per casa e ufficio</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-stone">
          Per i nostri clienti coordiniamo anche alcuni interventi complementari, utili prima o dopo un trasloco.
          Chiedici informazioni in fase di preventivo.
        </p>
        <ul className="mt-10 flex flex-wrap gap-3">
          {extraServices.map((s) => (
            <li key={s} className="border border-line px-5 py-2.5 text-sm">
              {s}
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
