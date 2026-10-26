import Link from "next/link";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./Icons";
import { site, telHref, whatsappHref } from "@/lib/site";

export default function CtaBand({
  title = "Richiedi un preventivo gratuito",
  text = "Il sopralluogo è gratuito, anche in videochiamata. Ti rispondiamo in giornata.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-ink text-ivory">
      <div className="mx-auto max-w-4xl px-5 py-24 text-center md:px-8">
        <h2 className=" font-serif text-4xl leading-tight md:text-6xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-ivory/70">{text}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/preventivo"
            className="w-full bg-gold px-8 py-4 text-base font-semibold text-ink transition-colors hover:bg-gold-light sm:w-auto"
          >
            Richiedi preventivo gratuito
          </Link>
          <a
            href={whatsappHref()}
            className="flex w-full items-center justify-center gap-2 border border-ivory/30 px-8 py-4 text-base font-semibold transition-colors hover:border-gold hover:text-gold-light sm:w-auto"
          >
            <WhatsAppIcon className="h-5 w-5" /> Scrivi su WhatsApp
          </a>
        </div>
        <a href={telHref} className="mt-8 inline-flex items-center gap-2 text-xl font-semibold text-gold-light hover:text-gold">
          <Phone className="h-5 w-5" /> Chiama il {site.phoneDisplay}
        </a>
      </div>
    </section>
  );
}
