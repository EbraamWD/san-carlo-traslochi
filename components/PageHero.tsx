import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHero({
  icon,
  eyebrow,
  title,
  lead,
  crumbs,
  children,
}: {
  icon?: React.ReactNode;
  eyebrow: string;
  title: string;
  lead?: string;
  crumbs: { name: string; path: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-ivory">
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-44">
        <nav aria-label="Breadcrumb" className="mb-10 text-sm text-ivory/60">
          <ol className="flex flex-wrap items-center gap-1.5">
            {crumbs.map((c, i) => (
              <li key={c.path} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3 w-3" />}
                {i < crumbs.length - 1 ? (
                  <Link href={c.path} className="hover:text-gold-light">{c.name}</Link>
                ) : (
                  <span aria-current="page" className="text-ivory/80">{c.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {icon && <div className="mb-6 text-gold-light">{icon}</div>}
        <p className="eyebrow !text-gold-light">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.05] md:text-7xl">{title}</h1>
        {lead && <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/80 md:text-xl">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
