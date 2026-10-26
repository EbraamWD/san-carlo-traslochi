import { site } from "./site";
import { services, type Faq } from "./services";
import { comuni } from "./zones";

export const businessId = `${site.url}/#business`;

export function businessSchema() {
  const a = site.address;
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": businessId,
    name: site.name,
    ...(!!site.legalName && { legalName: site.legalName }),
    url: site.url,
    logo: `${site.url}/media/images/sancarlotraslochi.png`,
    image: `${site.url}/opengraph-image`,
    telephone: site.phone,
    email: site.email,
    ...(!!site.vatId && { vatID: site.vatId }),
    ...(!!site.foundingYear && { foundingDate: String(site.foundingYear) }),
    address: {
      "@type": "PostalAddress",
      ...(!!a.street && { streetAddress: a.street }),
      ...(!!a.postalCode && { postalCode: a.postalCode }),
      addressLocality: a.locality,
      addressRegion: a.province,
      addressCountry: "IT",
    },
    ...(!!site.geo.lat && {
      geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    }),
    ...(!!site.googleBusinessUrl && { hasMap: site.googleBusinessUrl }),
    areaServed: [...site.areaServed, ...comuni.map((c) => c.name)].map((name) => ({ "@type": "AdministrativeArea", name })),
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    priceRange: "€€",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      email: site.email,
      contactType: "customer service",
      areaServed: "IT",
      availableLanguage: ["Italian"],
    },
    knowsAbout: services.flatMap((s) => s.keywords),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servizi di trasloco a Milano",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.h1, url: `${site.url}/${s.slug}` },
        ...(!!s.priceFrom && {
          priceSpecification: { "@type": "PriceSpecification", minPrice: s.priceFrom, priceCurrency: "EUR" },
        }),
      })),
    },
    ...(!!site.sameAs.length && { sameAs: site.sameAs }),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: "it-IT",
    publisher: { "@id": businessId },
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  priceFrom?: number;
  keywords?: string[];
  areaName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    ...(!!opts.keywords?.length && { alternateName: opts.keywords }),
    serviceType: opts.name,
    description: opts.description,
    url: `${site.url}${opts.path}`,
    provider: { "@id": businessId },
    areaServed: (opts.areaName ? [opts.areaName] : site.areaServed).map((name) => ({ "@type": "AdministrativeArea", name })),
    ...(!!opts.priceFrom && {
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        priceSpecification: { "@type": "PriceSpecification", minPrice: opts.priceFrom, priceCurrency: "EUR" },
      },
    }),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function articleSchema(opts: { title: string; description: string; path: string; datePublished: string; dateModified: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: `${site.url}${opts.path}`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    inLanguage: "it-IT",
    author: { "@id": businessId },
    publisher: { "@id": businessId },
  };
}
