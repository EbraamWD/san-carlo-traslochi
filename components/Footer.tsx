import Link from "next/link";
import Wordmark from "./Wordmark";
import { services } from "@/lib/services";
import { guides } from "@/lib/guides";
import { fullAddress, site, telHref, whatsappHref } from "@/lib/site";

export default function Footer() {
  const address = fullAddress();
  return (
    <footer className="bg-ink text-ivory/75">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div>
          <Wordmark className="text-ivory" />
          <p className="mt-6 text-sm leading-relaxed">
            Traslochi, sgomberi e noleggio autoscala a {site.city} e provincia. Sopralluogo e preventivo gratuiti.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4 !text-gold-light">Servizi</p>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="hover:text-gold-light">
                  {s.name} {s.slug.endsWith("milano") ? "Milano" : ""}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4 !text-gold-light">Guide</p>
          <ul className="space-y-2 text-sm">
            {guides.map((g) => (
              <li key={g.slug}>
                <Link href={`/guide/${g.slug}`} className="hover:text-gold-light">
                  {g.title.split(":")[0]}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/zone" className="hover:text-gold-light">Zone servite a Milano</Link>
            </li>
            <li>
              <Link href="/chi-siamo" className="hover:text-gold-light">Chi siamo</Link>
            </li>
          </ul>
        </div>

        <address className="not-italic">
          <p className="eyebrow mb-4 !text-gold-light">Contatti</p>
          <p className="text-base font-semibold text-ivory">{site.legalName || site.name}</p>
          {address && <p className="mt-2 text-sm">{address}</p>}
          <ul className="mt-3 space-y-1 text-sm">
            <li>
              Tel. <a href={telHref} className="hover:text-gold-light">{site.phoneDisplay}</a>
            </li>
            <li>
              <a href={whatsappHref()} className="hover:text-gold-light">WhatsApp</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-gold-light">{site.email}</a>
            </li>
            {site.hours.map((h) => (
              <li key={h.label}>
                {h.label} {h.opens}–{h.closes}
              </li>
            ))}
          </ul>
          {site.vatId && <p className="mt-3 text-sm">P.IVA {site.vatId.replace(/^IT/, "")}</p>}
        </address>
      </div>

      <div className="border-t border-gold/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs md:flex-row md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} {site.name}. Tutti i diritti riservati.</p>
          <p>
            Sito realizzato da{" "}
            <a href="https://react-portfolio-blond-nu.vercel.app/" className="text-gold-light hover:underline">
              Ebraam Saad
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
