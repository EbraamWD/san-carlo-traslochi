import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceIcon from "@/components/ServiceIcon";
import Faqs from "@/components/Faqs";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/Icons";
import { getService, services, servicesUpdated } from "@/lib/services";
import { site, whatsappHref } from "@/lib/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: { canonical: `/${slug}` },
    openGraph: { url: `/${slug}`, title: service.metaTitle, description: service.metaDescription },
  };
}

export default async function ServicePage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const path = `/${slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: service.name, path },
  ];
  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: service.h1, description: service.metaDescription, path, priceFrom: service.priceFrom, keywords: service.keywords }),
          faqSchema(service.faqs),
          breadcrumbSchema(crumbs),
        ]}
      />

      <PageHero
        icon={<ServiceIcon slug={slug} className="h-12 w-12" />}
        eyebrow={service.eyebrow} title={service.h1} lead={service.lead} crumbs={crumbs}>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/preventivo"
            className="bg-gold px-8 py-4 text-center text-base font-semibold text-ink transition-colors hover:bg-gold-light"
          >
            Richiedi preventivo gratuito
          </Link>
          <a
            href={whatsappHref(`Buongiorno, vorrei informazioni su: ${service.name}.`)}
            className="flex items-center justify-center gap-2 border border-ivory/30 px-8 py-4 text-base font-semibold transition-colors hover:border-gold hover:text-gold-light"
          >
            <WhatsAppIcon className="h-5 w-5" /> Scrivi su WhatsApp
          </a>
        </div>
      </PageHero>

      {/* Risposte dirette: facili da leggere per le persone e da citare per i motori AI */}
      <section aria-labelledby="in-breve" className="border-b border-line bg-sand/40">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
          <h2 id="in-breve" className="text-lg font-semibold">
            {service.name} a Milano in breve
          </h2>
          <dl className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Cosa", service.summary],
              ["Dove", `${site.city}, in tutti i 9 municipi, e provincia.`],
              [
                "Prezzo",
                service.priceFrom
                  ? `A partire da ${service.priceFrom} €. Preventivo scritto gratuito.`
                  : "Su preventivo scritto, gratuito e senza impegno, dopo un sopralluogo.",
              ],
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

      <div className="mx-auto grid max-w-7xl gap-16 px-5 py-24 md:px-8 lg:grid-cols-12">
        <article className="lg:col-span-7">
          <p className="mb-10 text-sm text-stone">
            Aggiornato il{" "}
            <time dateTime={servicesUpdated}>
              {new Date(servicesUpdated).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })}
            </time>
          </p>
          {service.sections.map((section) => (
            <Reveal key={section.title} className="mb-16 last:mb-0">
              <h2 className="font-serif text-3xl md:text-4xl">{section.title}</h2>
              <div className="prose-lux mt-5">
                {section.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </article>

        <aside className="lg:col-span-4 lg:col-start-9">
          <div className="sticky top-28 bg-ink p-8 text-ivory md:p-10">
            <p className="eyebrow !text-gold-light">Cosa è incluso</p>
            {service.priceFrom && (
              <p className="mt-4 font-serif text-5xl text-gold-light">
                <span className="text-xl text-ivory/70">a partire da </span>
                {service.priceFrom} €
              </p>
            )}
            <ul className="mt-6 space-y-4">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-ivory/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {item}
                </li>
              ))}
            </ul>
            <Link
              href="/preventivo"
              className="mt-10 block border border-gold py-4 text-center text-base font-semibold text-gold-light transition-colors hover:bg-gold hover:text-ink"
            >
              Richiedi preventivo gratuito
            </Link>
          </div>
        </aside>
      </div>

      <div className="border-t border-line">
        <Faqs faqs={service.faqs} />
      </div>

      <section className="border-t border-line bg-sand/40">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <p className="eyebrow">Altri servizi</p>
          <div className="mt-8 grid gap-px border border-line bg-line md:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="group flex items-center justify-between bg-ivory p-8 transition-colors hover:bg-ink hover:text-ivory"
              >
                <span className="flex items-center gap-4 text-xl font-semibold">
                  <ServiceIcon slug={s.slug} className="h-7 w-7 text-gold-dark group-hover:text-gold-light" />
                  {s.name}
                </span>
                <ArrowUpRight className="h-5 w-5 text-gold" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
