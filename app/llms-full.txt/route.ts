import { services } from "@/lib/services";
import { guides } from "@/lib/guides";
import { altriComuni, comuni, municipi } from "@/lib/zones";
import { fullAddress, site } from "@/lib/site";

export const dynamic = "force-static";

// Versione completa di llms.txt: tutti i contenuti testuali in Markdown,
// così i motori AI possono citare il sito senza dover interpretare l'HTML.
export function GET() {
  const address = fullAddress();
  const out: string[] = [
    `# ${site.name} — traslochi e sgomberi a ${site.city}`,
    "",
    `${site.name} è una ditta di traslochi a ${site.city} e provincia. Servizi: ${services.map((s) => s.name.toLowerCase()).join(", ")}. Sopralluogo e preventivo gratuiti. Sgomberi a partire da 75 €.`,
    "",
    `- Sito: ${site.url}`,
    `- Telefono e WhatsApp: ${site.phoneDisplay}`,
    `- Email: ${site.email}`,
    ...(address ? [`- Indirizzo: ${address}`] : []),
    ...(site.vatId ? [`- P.IVA: ${site.vatId.replace(/^IT/, "")}`] : []),
    `- Zone servite: ${site.areaServed.join(", ")}`,
    `- Orari: ${site.hours.map((h) => `${h.label} ${h.opens}-${h.closes}`).join("; ")}`,
    `- Preventivo: ${site.url}/preventivo`,
    "",
  ];

  for (const s of services) {
    out.push(`## ${s.h1}`, "", `URL: ${site.url}/${s.slug}`, "", s.lead, "");
    if (s.priceFrom) out.push(`Prezzo: a partire da ${s.priceFrom} €.`, "");
    for (const section of s.sections) out.push(`### ${section.title}`, "", ...section.body.flatMap((p) => [p, ""]));
    out.push("Incluso:", ...s.includes.map((i) => `- ${i}`), "", "### Domande frequenti", "");
    for (const f of s.faqs) out.push(`**${f.q}**`, f.a, "");
  }

  out.push("## Zone servite a Milano", "", `URL: ${site.url}/zone`, "");
  for (const m of municipi) out.push(`- Municipio ${m.n} (${m.name}): ${m.quartieri.join(", ")}`);
  out.push("");
  for (const c of comuni) {
    out.push(`### Traslochi a ${c.name}`, "", `URL: ${site.url}/zone/${c.slug}`, "", c.intro, "", ...c.body.flatMap((p) => [p, ""]));
  }
  out.push(`Altri comuni serviti: ${altriComuni.join(", ")} e tutta la provincia di Milano.`, "");

  for (const g of guides) {
    out.push(`## ${g.title}`, "", `URL: ${site.url}/guide/${g.slug}`, "", g.lead, "");
    for (const section of g.sections) {
      out.push(`### ${section.title}`, "", ...section.body.flatMap((p) => [p, ""]));
      if (section.list) out.push(...section.list.map((i) => `- ${i}`), "");
    }
    for (const f of g.faqs) out.push(`**${f.q}**`, f.a, "");
  }

  return new Response(out.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
