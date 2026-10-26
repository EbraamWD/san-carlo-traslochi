import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Faqs from "@/components/Faqs";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import ServiceIcon from "@/components/ServiceIcon";
import { comuni, getComune } from "@/lib/zones";
import { services } from "@/lib/services";
import { site, telHref } from "@/lib/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return comuni.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/zone/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const comune = getComune(slug);
  if (!comune) return {};
  const title = `Traslochi ${comune.name} | Sgomberi e Preventivo Gratuito`;
  return {
    title: { absolute: title },
    description: comune.intro,
    alternates: { canonical: `/zone/${slug}` },
    openGraph: { url: `/zone/${slug}`, title, description: comune.intro },
  };
}

export default async function ComunePage({ params }: PageProps<"/zone/[slug]">) {
  const { slug } = await params;
  const comune = getComune(slug);
  if (!comune) notFound();

  const path = `/zone/${slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Zone servite", path: "/zone" },
    { name: comune.name, path },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: `Traslochi ${comune.name}`, description: comune.intro, path, areaName: comune.name }),
          faqSchema(comune.faqs),
          breadcrumbSchema(crumbs),
        ]}
      />
      <PageHero
        icon={<MapPin className="h-12 w-12" strokeWidth={1.5} />}
        eyebrow={`Traslochi · ${comune.name}`}
        title={`Traslochi a ${comune.name}`}
        lead={comune.intro}
        crumbs={crumbs}
      >
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
      </PageHero>
      <section aria-labelledby="in-breve" className="border-b border-line bg-sand/40">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
          <h2 id="in-breve" className="text-lg font-semibold">
            Traslochi a {comune.name} in breve
          </h2>
          <dl className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Servizi", "Traslochi di case e uffici, sgomberi, montaggio mobili, autoscala e scatoloni."],
              ["Dove", `${comune.name}, Milano e tutta la provincia, in entrambe le direzioni.`],
              ["Prezzo", "Preventivo scritto gratuito dopo il sopralluogo. Sgomberi a partire da 75 €."],
              ["Come richiederlo", `Modulo online, WhatsApp o telefono al ${site.phoneDisplay}.`],
            ].map(([term, def]) => (
              <div key={term}>
                <dt className="eyebrow">{term}</dt>
                <dd className="mt-1 leading-relaxed text-[#2e2b27]">{def}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <article className="prose-lux mx-auto max-w-3xl px-5 py-20 md:px-8">
        {comune.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </article>
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <h2 className="font-serif text-4xl">Servizi a {comune.name}</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={`/${s.slug}`} className="flex h-full gap-4 border border-line px-6 py-5 hover:border-gold">
                <ServiceIcon slug={s.slug} className="mt-0.5 h-6 w-6 shrink-0 text-gold-dark" />
                <span>
                  <span className="block font-semibold">
                    {s.name} a {comune.name}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-stone">{s.summary}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <div className="border-t border-line">
        <Faqs faqs={comune.faqs} />
      </div>
      <CtaBand />
    </>
  );
}
