import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "San Carlo Traslochi - Traslochi Professionali in Italia | Preventivi Gratuiti",
  description: "San Carlo Traslochi offre servizi di trasloco completi, sgomberi, imballaggio professionale e noleggio piattaforme aeree. Preventivi gratuiti e servizi in tutta Italia.",
  keywords: "traslochi, sgomberi, trasporti, imballaggio, piattaforme aeree, San Carlo, Italia, preventivi gratuiti",
  authors: [{ name: "San Carlo Traslochi" }],
  creator: "San Carlo Traslochi",
  publisher: "San Carlo Traslochi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://sancarlotraslochi.it",
    title: "San Carlo Traslochi - Traslochi Professionali in Italia",
    description: "Servizi di trasloco completi, sgomberi e trasporti professionali. Preventivi gratuiti e servizi in tutta Italia.",
    siteName: "San Carlo Traslochi",
  },
  twitter: {
    card: "summary_large_image",
    title: "San Carlo Traslochi - Traslochi Professionali",
    description: "Servizi di trasloco completi, sgomberi e trasporti professionali.",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
