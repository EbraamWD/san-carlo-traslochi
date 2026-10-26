import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./Icons";
import { telHref, whatsappHref } from "@/lib/site";

// Barra fissa su mobile: chiamata e WhatsApp sempre a portata di pollice.
export default function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-gold/30 bg-ink text-ivory md:hidden">
      <a href={telHref} className="flex items-center justify-center gap-2 py-4 text-base font-semibold">
        <Phone className="h-4 w-4 text-gold" /> Chiama ora
      </a>
      <a
        href={whatsappHref()}
        className="flex items-center justify-center gap-2 bg-gold py-4 text-base font-semibold text-ink"
      >
        <WhatsAppIcon className="h-4 w-4" /> Scrivi su WhatsApp
      </a>
    </div>
  );
}
