import { services } from "@/lib/services";
import { guides } from "@/lib/guides";
import { fullAddress, site } from "@/lib/site";

export const dynamic = "force-static";

// Riassunto del sito per i motori di risposta AI (https://llmstxt.org).
export function GET() {
  const address = fullAddress();
  const lines = [
    `# ${site.name}`,
    "",
    `> Ditta di traslochi a ${site.city} e provincia: traslochi di abitazioni e uffici, sgomberi da 75 €, montaggio e smontaggio mobili, scatoloni e imballaggio, noleggio autoscala (piattaforma aerea) con operatore. Sopralluogo e preventivo gratuiti.`,
    "",
    `- Telefono e WhatsApp: ${site.phoneDisplay}`,
    `- Email: ${site.email}`,
    ...(address ? [`- Indirizzo: ${address}`] : []),
    ...(site.vatId ? [`- P.IVA: ${site.vatId.replace(/^IT/, "")}`] : []),
    `- Zone servite: ${site.areaServed.join(", ")}`,
    `- Orari: ${site.hours.map((h) => `${h.label} ${h.opens}-${h.closes}`).join("; ")}`,
    "",
    "## Servizi",
    "",
    ...services.map((s) => `- [${s.h1}](${site.url}/${s.slug}): ${s.metaDescription} Ricerche correlate: ${s.keywords.join(", ")}.`),
    "",
    "## Guide",
    "",
    ...guides.map((g) => `- [${g.title}](${site.url}/guide/${g.slug}): ${g.metaDescription}`),
    "",
    "## Contatti",
    "",
    `- [Preventivo gratuito](${site.url}/preventivo)`,
    `- [Contatti](${site.url}/contatti)`,
    `- [Chi siamo](${site.url}/chi-siamo)`,
    `- [Zone servite a Milano](${site.url}/zone)`,
    "",
    "## Optional",
    "",
    `- [Contenuto completo del sito](${site.url}/llms-full.txt)`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
