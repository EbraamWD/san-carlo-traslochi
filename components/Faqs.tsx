import { Plus } from "lucide-react";
import type { Faq } from "@/lib/services";

export default function Faqs({ faqs, title = "Domande frequenti" }: { faqs: Faq[]; title?: string }) {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 md:px-8">
      <h2 className=" font-serif text-4xl md:text-5xl">{title}</h2>
      <div className="mt-10 divide-y divide-line border-y border-line">
        {faqs.map((f) => (
          <details key={f.q} className="group py-6">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
              <h3 className="text-lg font-semibold md:text-xl">{f.q}</h3>
              <Plus className="mt-1.5 h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-open:rotate-45" />
            </summary>
            <p className="mt-4 text-lg leading-relaxed text-[#2e2b27]">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
