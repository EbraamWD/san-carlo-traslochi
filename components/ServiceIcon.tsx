import { Archive, ArrowUpFromLine, Building2, House, Package, Truck, Wrench, type LucideIcon } from "lucide-react";

// Icone a linea sottile, una per servizio (chiave: slug in lib/services.ts)
const icons: Record<string, LucideIcon> = {
  "traslochi-abitazioni-milano": House,
  "traslochi-uffici-milano": Building2,
  "sgomberi-milano": Archive,
  "noleggio-autoscala-milano": ArrowUpFromLine,
  "montaggio-mobili-milano": Wrench,
  "scatoloni-trasloco-milano": Package,
};

export default function ServiceIcon({ slug, className = "h-5 w-5" }: { slug: string; className?: string }) {
  const Icon = icons[slug] ?? Truck;
  return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />;
}
