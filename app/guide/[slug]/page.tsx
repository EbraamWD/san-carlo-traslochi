import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Faqs from "@/components/Faqs";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { getGuide, guides } from "@/lib/guides";
import { services } from "@/lib/services";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps<"/guide/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: `/guide/${slug}` },
    openGraph: {
      type: "article",
      url: `/guide/${slug}`,
      title: guide.metaTitle,
      description: guide.metaDescription,
      publishedTime: guide.datePublished,
      modifiedTime: guide.dateModified,
    },
  };
}

export default async function GuidePage({ params }: PageProps<"/guide/[slug]">) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const path = `/guide/${slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Guide", path: "/guide" },
    { name: guide.title.split(":")[0], path },
  ];
  const updated = new Date(guide.dateModified).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" });

  return (
    <>
      <JsonLd
        data={[
          articleSchema({ title: guide.title, description: guide.metaDescription, path, datePublished: guide.datePublished, dateModified: guide.dateModified }),
          faqSchema(guide.faqs),
          breadcrumbSchema(crumbs),
        ]}
      />
      <PageHero eyebrow="Guida" title={guide.title} lead={guide.lead} crumbs={crumbs}>
        <p className="mt-8 text-sm text-ivory/40">
          Aggiornata il <time dateTime={guide.dateModified}>{updated}</time>
        </p>
      </PageHero>

      <article className="mx-auto max-w-3xl px-5 py-24 md:px-8">
        {guide.sections.map((section) => (
          <section key={section.title} className="mb-14 last:mb-0">
            <h2 className="font-serif text-3xl md:text-4xl">{section.title}</h2>
            <div className="prose-lux mt-5">
              {section.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {section.list && (
              <ul className="mt-6 space-y-3">
                {section.list.map((item) => (
                  <li key={item} className="flex gap-4 leading-relaxed text-[#3d3a35]">
                    <span className="mt-3 h-px w-4 shrink-0 bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <aside className="mt-16 border border-line bg-sand/40 p-8">
          <p className="eyebrow">Servizi collegati</p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="text-base font-semibold underline decoration-gold/50 underline-offset-4 hover:text-gold-dark">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </article>

      <div className="border-t border-line">
        <Faqs faqs={guide.faqs} />
      </div>
      <CtaBand />
    </>
  );
}
