import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-ink text-ivory">
      <div className="mx-auto max-w-3xl px-5 pt-24 text-center">
        <p className="eyebrow !text-gold-light">Errore 404</p>
        <h1 className="mt-6 font-serif text-5xl md:text-7xl">Pagina non trovata</h1>
        <Link
          href="/"
          className="mt-12 inline-block border border-gold px-8 py-4 text-base font-semibold text-gold-light hover:bg-gold hover:text-ink"
        >
          Vai alla home
        </Link>
      </div>
    </section>
  );
}
