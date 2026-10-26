"use client";
import { useRef } from "react";
import { Mail } from "lucide-react";
import { WhatsAppIcon } from "./Icons";
import { services } from "@/lib/services";
import { site, whatsappHref } from "@/lib/site";

const fields = [
  { name: "nome", label: "Nome e cognome", type: "text", required: true, autoComplete: "name" },
  { name: "telefono", label: "Telefono", type: "tel", required: true, autoComplete: "tel" },
  { name: "partenza", label: "Da (indirizzo o zona)", type: "text", required: false, autoComplete: "off" },
  { name: "destinazione", label: "A (indirizzo o zona)", type: "text", required: false, autoComplete: "off" },
  { name: "data", label: "Data indicativa", type: "date", required: false, autoComplete: "off" },
] as const;

const inputClass =
  "w-full border-0 border-b border-line bg-transparent px-0 py-3 text-ink placeholder:text-stone/60 focus:border-gold focus:outline-none focus:ring-0";

export default function QuoteForm() {
  const formRef = useRef<HTMLFormElement>(null);

  function buildMessage() {
    const data = new FormData(formRef.current!);
    const lines = [
      "Richiesta preventivo dal sito",
      `Servizio: ${data.get("servizio")}`,
      `Nome: ${data.get("nome")}`,
      `Telefono: ${data.get("telefono")}`,
      data.get("partenza") && `Da: ${data.get("partenza")}`,
      data.get("destinazione") && `A: ${data.get("destinazione")}`,
      data.get("data") && `Data: ${data.get("data")}`,
      data.get("note") && `Dettagli: ${data.get("note")}`,
    ];
    return lines.filter(Boolean).join("\n");
  }

  function send(channel: "whatsapp" | "email") {
    const form = formRef.current!;
    if (!form.reportValidity()) return;
    const text = buildMessage();
    if (channel === "whatsapp") {
      window.open(whatsappHref(text), "_blank", "noopener");
    } else {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Richiesta preventivo")}&body=${encodeURIComponent(text)}`;
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        send("whatsapp");
      }}
      className="bg-white p-6 shadow-[0_30px_80px_-30px_rgba(13,18,32,0.35)] md:p-10"
    >
      <label className="block">
        <span className="eyebrow">Servizio</span>
        <select name="servizio" className={`${inputClass} mt-1`} defaultValue={services[0].name}>
          {services.map((s) => (
            <option key={s.slug}>{s.name}</option>
          ))}
          <option>Altro</option>
        </select>
      </label>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {fields.map((f) => (
          <label key={f.name} className="block">
            <span className="eyebrow">
              {f.label}
              {f.required && " *"}
            </span>
            <input name={f.name} type={f.type} required={f.required} autoComplete={f.autoComplete} className={`${inputClass} mt-1`} />
          </label>
        ))}
      </div>

      <label className="mt-6 block">
        <span className="eyebrow">Dettagli</span>
        <textarea
          name="note"
          rows={4}
          placeholder="Metratura, piani, ascensore, mobili da smontare, oggetti delicati…"
          className={`${inputClass} mt-1 resize-none`}
        />
      </label>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="flex flex-1 items-center justify-center gap-2 bg-ink px-6 py-4 text-base font-semibold text-ivory transition-colors hover:bg-ink-3"
        >
          <WhatsAppIcon className="h-4 w-4 text-gold" /> Invia la richiesta su WhatsApp
        </button>
        <button
          type="button"
          onClick={() => send("email")}
          className="flex items-center justify-center gap-2 border border-ink/20 px-6 py-4 text-base font-semibold transition-colors hover:border-gold"
        >
          <Mail className="h-4 w-4" /> Invia via email
        </button>
      </div>
      <p className="mt-4 text-xs text-stone">
        I dati vengono usati solo per rispondere alla tua richiesta di preventivo.
      </p>
    </form>
  );
}
