import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "THE MAGIK BRAND — Official Website",
  description:
    "DJ MAGIK  — Multidimensional creative, DJ, technologist, and culture architect. Music, AI, events, and African innovation.",
  keywords: [
    "Magik ",
    "DJ Magik",
    "VibeNinjaHQ",
    "African DJs",
    "Kenyan Music",
    "AI Creatives",
    "BraveTechnologies",
  ],
  openGraph: {
    title: "THE MAGIK BRAND",
    description:
      "Multidimensional artist building Africa's next entertainment frontier.",
    url: "https://its.magik__",
    siteName: "THE MAGIK BRAND",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "THE MAGIK BRAND",
    description:
      "Creative, DJ, technologist & founder — building Africa’s next culture platforms.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className="min-h-screen flex flex-col bg-black text-white overflow-x-hidden">

        {/* GLOBAL NAVIGATION */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="grow pt-20">{children}</main>

        {/* GLOBAL FOOTER */}
        <Footer />

      </body>
    </html>
  );
}
