export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 text-center">
      <p>© {new Date().getFullYear()} San Carlo Traslochi. Tutti i diritti riservati.</p>
      <p>
        Website created by{" "}
        <a
          href="https://react-portfolio-blond-nu.vercel.app/"
          style={{
            background: "linear-gradient(90deg, #0070f3, #7928ca)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          Ebraam Saad
        </a>
      </p>

    </footer>
  );
}
