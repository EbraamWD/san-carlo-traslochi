import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import { businessSchema, websiteSchema } from "@/lib/schema";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Traslochi Milano | Ditta Traslochi e Sgomberi – San Carlo Traslochi",
    template: "%s – San Carlo Traslochi",
  },
  description:
    "Ditta di traslochi a Milano e provincia: traslochi di case e uffici, sgomberi da 75€, montaggio mobili e noleggio autoscala. Sopralluogo e preventivo gratuiti.",
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: site.name,
  },
  twitter: { card: "summary_large_image" },
  other: {
    "geo.region": "IT-MI",
    "geo.placename": "Milano",
  },
  // Impostare GOOGLE_SITE_VERIFICATION solo se Search Console è verificata via meta tag.
  ...(process.env.GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  }),
};

export const viewport: Viewport = {
  themeColor: "#0d1220",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${display.variable} ${body.variable}`}>
      <body className="antialiased">
        <JsonLd data={[businessSchema(), websiteSchema()]} />
        <Header />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
