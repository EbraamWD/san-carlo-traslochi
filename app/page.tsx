import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, ClipboardCheck, FileSignature, KeyRound, MapPin, Phone, Truck } from "lucide-react";
import ServiceIcon from "@/components/ServiceIcon";
import Reveal from "@/components/Reveal";
import Faqs from "@/components/Faqs";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { WhatsAppIcon } from "@/components/Icons";
import { services, type Faq } from "@/lib/services";
import { guides } from "@/lib/guides";
import { comuni } from "@/lib/zones";
import { site, telHref, whatsappHref } from "@/lib/site";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

const steps = [
  {
    icon: ClipboardCheck,
    title: "Sopralluogo",
    text: "Gratuito, a domicilio o in videochiamata. Valutiamo volumi, accessi, piani e oggetti delicati.",
  },
  {
    icon: FileSignature,
    title: "Preventivo scritto",
    text: "Prezzo chiaro con data, operatori e mezzi. Nessuna voce a sorpresa il giorno del trasloco.",
  },
  {
    icon: Truck,
    title: "Il giorno del trasloco",
    text: "Protezione di pavimenti e ascensori, smontaggio, imballaggio e trasporto con un unico referente.",
  },
  {
    icon: KeyRound,
    title: "Tutto al suo posto",
    text: "Rimontiamo i mobili stanza per stanza e portiamo via imballi e materiali di scarto.",
  },
];

const inlineLink = "font-semibold text-ink underline decoration-gold underline-offset-4 hover:text-gold-dark";

const faqs: Faq[] = [
  {
    q: "Quanto costa un trasloco a Milano?",
    a: "Il prezzo di un trasloco a Milano dipende da volume, piani, ascensore, distanza e servizi richiesti. Dopo un sopralluogo gratuito ricevi un preventivo scritto e definitivo.",
  },
  {
    q: "In quali zone lavora San Carlo Traslochi?",
    a: "Lavoriamo a Milano città e in provincia di Milano. Organizziamo anche traslochi da e verso altre città italiane.",
  },
  {
    q: "Il preventivo è gratuito?",
    a: "Sì. Sopralluogo e preventivo sono gratuiti e senza impegno, anche in videochiamata o tramite foto su WhatsApp.",
  },
  {
    q: "Quanto costa uno sgombero a Milano?",
    a: "Gli sgomberi partono da 75 €. Il prezzo finale dipende da volume, piano e tipo di materiali da smaltire.",
  },
  {
    q: "Avete l'autoscala per i piani alti?",
    a: "Sì, forniamo il noleggio autoscala con operatore, sia all'interno di un trasloco sia come servizio singolo.",
  },
  {
    q: "Come posso richiedere un preventivo?",
    a: `Puoi compilare il modulo nella pagina Preventivo, scriverci su WhatsApp o chiamare il ${site.phoneDisplay}.`,
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      {/* Hero */}
      <section className="bg-ink text-ivory">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-32 md:px-8 md:pt-40 lg:grid-cols-12 lg:items-center">
          <div className="hero-reveal lg:col-span-7">
            <Reveal>
              <p className="eyebrow !text-gold-light">Ditta di traslochi a Milano e provincia</p>
              <h1 className="mt-4 font-serif text-5xl leading-[1.05] md:text-7xl">Traslochi e sgomberi a Milano</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/85 md:text-xl">
                Traslochi di case e uffici, sgomberi da 75 €, montaggio mobili e noleggio autoscala. Sopralluogo e
                preventivo gratuiti.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/preventivo"
                  className="bg-gold px-7 py-4 text-center text-base font-semibold text-ink transition-colors hover:bg-gold-light"
                >
                  Richiedi preventivo gratuito
                </Link>
                <a
                  href={telHref}
                  className="flex items-center justify-center gap-2 border border-ivory/40 px-7 py-4 text-base font-semibold transition-colors hover:border-gold hover:text-gold-light"
                >
                  <Phone className="h-5 w-5" /> Chiama {site.phoneDisplay}
                </a>
              </div>
              <a href={whatsappHref()} className="mt-5 inline-flex items-center gap-2 text-ivory/80 underline-offset-4 hover:text-gold-light hover:underline">
                <WhatsAppIcon className="h-5 w-5 text-gold" /> Oppure scrivici su WhatsApp, anche con foto
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="border border-ivory/15 bg-ink-2 p-6 md:p-8">
              <p className="text-lg font-semibold">I nostri servizi</p>
              <ul className="mt-4 divide-y divide-ivory/10">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/${s.slug}`} className="group flex items-center justify-between gap-4 py-3.5">
                      <span className="flex items-center gap-3 group-hover:text-gold-light">
                        <ServiceIcon slug={s.slug} className="h-5 w-5 text-gold" />
                        {s.name}
                      </span>
                      <span className="flex items-center gap-2 text-sm text-ivory/60">
                        {s.priceFrom && <span className="text-gold-light">da {s.priceFrom} €</span>}
                        <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <div className="border-t border-ivory/10">
          <ul className="mx-auto grid max-w-7xl gap-4 px-5 py-6 text-ivory/85 sm:grid-cols-3 md:px-8">
            {[
              { icon: ClipboardCheck, text: "Sopralluogo gratuito" },
              { icon: FileSignature, text: "Preventivo scritto, senza sorprese" },
              { icon: MapPin, text: "Milano e provincia" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} /> {text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Introduzione */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">Ditta di traslochi a Milano</h2>
        </Reveal>
        <Reveal delay={0.1} className="prose-lux lg:col-span-6 lg:col-start-7">
          <p>
            San Carlo Traslochi è una ditta di traslochi a Milano e provincia. Ci occupiamo di{" "}
            <Link href="/traslochi-abitazioni-milano" className={inlineLink}>traslochi di case e appartamenti</Link>,{" "}
            <Link href="/traslochi-uffici-milano" className={inlineLink}>trasloco uffici</Link>,{" "}
            <Link href="/sgomberi-milano" className={inlineLink}>sgomberi di cantine e appartamenti</Link>,{" "}
            <Link href="/montaggio-mobili-milano" className={inlineLink}>montaggio mobili</Link> e{" "}
            <Link href="/noleggio-autoscala-milano" className={inlineLink}>noleggio autoscala con operatore</Link>.
            Seguiamo ogni trasloco dal sopralluogo all&apos;ultimo mobile rimontato, con un preventivo scritto e un
            unico referente.
          </p>
          <p>
            Conosciamo bene la città: palazzi d&apos;epoca senza ascensore, cortili interni, ZTL, Area C e permessi per
            l&apos;occupazione del suolo pubblico. Pianifichiamo tutto in anticipo, così il giorno del trasloco è
            semplicemente il giorno in cui cambi casa.
          </p>
        </Reveal>
      </section>

      {/* Servizi */}
      <section id="servizi" className="border-t border-line bg-sand/40">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <h2 className="font-serif text-4xl md:text-5xl">Servizi di trasloco a Milano</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="group flex flex-col border border-line bg-ivory p-7 transition-colors hover:border-gold"
              >
                <ServiceIcon slug={s.slug} className="h-9 w-9 text-gold-dark" />
                <h3 className="mt-5 text-xl font-semibold">{s.name}</h3>
                <p className="mt-2 leading-relaxed text-stone">{s.summary}</p>
                <span className="mt-auto flex items-center gap-2 pt-6 font-semibold text-gold-dark">
                  Dettagli e preventivo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Metodo */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <h2 className="font-serif text-4xl md:text-5xl">Come funziona il trasloco</h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 0.1}>
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/60 text-gold-dark">
                  <step.icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 text-xl font-semibold">
                  {i + 1}. {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-stone">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* Zone */}
      <section className="bg-ink-2 text-ivory">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-8 lg:grid-cols-2">
          <Reveal>
            <MapPin className="h-9 w-9 text-gold-light" strokeWidth={1.25} />
            <h2 className="mt-5 font-serif text-4xl md:text-5xl">Zone servite: Milano e provincia</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-ivory/85">
              Operiamo in tutti i quartieri di Milano, dal centro storico ai Navigli, da Città Studi a CityLife, e nei
              comuni della provincia. Per traslochi verso altre regioni organizziamo trasporti dedicati, con la stessa
              cura.
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              <li>
                <Link href="/zone" className="flex items-center gap-2 border border-gold px-4 py-2 text-sm font-semibold text-gold-light hover:bg-gold hover:text-ink">
                  Tutti i quartieri <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
              {comuni.map((c) => (
                <li key={c.slug}>
                  <Link href={`/zone/${c.slug}`} className="block border border-gold/30 px-4 py-2 text-sm text-gold-light hover:border-gold">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Guide */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl">Guide utili prima del trasloco</h2>
          </Reveal>
          <Link href="/guide" className="text-sm tracking-wide text-gold-dark underline-offset-4 hover:underline">
            Tutte le guide
          </Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {guides.map((g) => (
            <Link key={g.slug} href={`/guide/${g.slug}`} className="group border-t border-line pt-6">
              <BookOpen className="mb-4 h-6 w-6 text-gold-dark" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold leading-snug transition-colors group-hover:text-gold-dark">{g.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">{g.metaDescription}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="border-t border-line">
        <Faqs faqs={faqs} />
      </div>

      <CtaBand />
    </>
  );
}
