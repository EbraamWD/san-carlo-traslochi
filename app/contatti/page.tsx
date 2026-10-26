import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { WhatsAppIcon } from "@/components/Icons";
import { fullAddress, site, telHref, whatsappHref } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contatti | Traslochi Milano",
  description: `Contatta San Carlo Traslochi a Milano: telefono ${site.phoneDisplay}, WhatsApp ed email. Sopralluogo e preventivo gratuiti.`,
  alternates: { canonical: "/contatti" },
  openGraph: { url: "/contatti" },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contatti", path: "/contatti" },
];

export default function ContactPage() {
  const address = fullAddress();
  const items = [
    { icon: Phone, label: "Telefono", value: site.phoneDisplay, href: telHref },
    { icon: WhatsAppIcon, label: "WhatsApp", value: site.phoneDisplay, href: whatsappHref() },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    ...(address ? [{ icon: MapPin, label: "Sede", value: address, href: site.googleBusinessUrl || undefined }] : []),
    { icon: Clock, label: "Orari", value: site.hours.map((h) => `${h.label} ${h.opens}–${h.closes}`).join(" · ") },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Telefono, WhatsApp, email"
        title="Contatti"
        lead="Rispondiamo in giornata. Per una stima rapida puoi inviarci anche foto o video su WhatsApp."
        crumbs={crumbs}
      />
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <>
                <Icon className="h-5 w-5 text-gold" />
                <p className="eyebrow mt-6 !text-stone">{label}</p>
                <p className="mt-2 text-xl font-semibold">{value}</p>
              </>
            );
            return href ? (
              <a key={label} href={href} className="bg-ivory p-8 transition-colors hover:bg-sand/60 md:p-10">
                {content}
              </a>
            ) : (
              <div key={label} className="bg-ivory p-8 md:p-10">
                {content}
              </div>
            );
          })}
        </div>
        {(site.vatId || site.legalName) && (
          <p className="mt-10 text-sm text-stone">
            {site.legalName || site.name}
            {site.vatId && ` · P.IVA ${site.vatId.replace(/^IT/, "")}`}
          </p>
        )}
      </section>
    </>
  );
}
