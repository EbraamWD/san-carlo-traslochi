import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "San Carlo Traslochi",
    "description": "Servizi di trasloco completi, sgomberi e trasporti professionali in tutta Italia",
    "url": "https://sancarlotraslochi.it",
    "telephone": "+39-XXX-XXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IT",
      "addressLocality": "Italia"
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "€€",
    "serviceArea": {
      "@type": "Country",
      "name": "Italia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servizi Traslochi",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Traslochi completi",
            "description": "Per abitazioni, uffici, magazzini, cantine e solai"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sgomberi",
            "description": "Sgomberi completi, a partire da 75,00 €"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Imballaggio professionale",
            "description": "Smontaggio, imballaggio e rimontaggio mobili con squadre qualificate"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <Header />
        <Hero />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
