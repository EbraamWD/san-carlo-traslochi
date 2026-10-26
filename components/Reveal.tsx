// Animazione d'ingresso solo CSS: il contenuto è sempre presente e visibile
// anche senza JavaScript (importante per SEO e LCP).
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={`reveal ${className}`} style={delay ? { animationDelay: `${delay}s` } : undefined}>
      {children}
    </div>
  );
}
