import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
// import Script from "next/script";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

/* =========================
   SEO METADATA (GLOBAL)
========================= */
export const metadata: Metadata = {
  metadataBase: new URL("https://malhotrastourandtravel.in/"), // change if needed

  title: "Malhotra's Tour & Travel — We'll help you create memories",
  description:
    "Handcrafted journeys across India — Kashmir, Ladakh, Rajasthan, Goa and beyond. Personalized itineraries, expert guides and boutique stays by Malhotra's Tour & Travel.",
  keywords: [
    "Malhotra Tour and Travel",
    "Travel Agency India",
    "Kashmir Tour Package",
    "Manali Tour Package",
    "Kedarnath Yatra Package",
    "Shimla Tour Package",
    "Travel Agency Delhi",
    "Himachal Tour",
    "India Holiday Packages",
    "Affordable Tour Packages",
  ],
    other: {
    "google-site-verification":
      "67bIOatIfM0M7PEWbnnmd3KPGoUTdnrW4623ZCugFiE",
  },

  authors: [{ name: "Malhotra's Tour & Travel" }],
  creator: "Malhotra's Tour & Travel",
  publisher: "Malhotra's Tour & Travel",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.malhotrastourandtravel.com", // change if needed
    siteName: "Malhotra's Tour & Travel",
    title: "Malhotra's Tour & Travel — Premium Travel Experiences",
    description:
      "Curated travel packages across India with personalized stays, sightseeing, transport and unforgettable memories.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Malhotra's Tour & Travel",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Malhotra's Tour & Travel",
    description:
      "Explore unforgettable travel experiences across India.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/logo.jpeg", media: "(prefers-color-scheme: light)" },
      { url: "/logo.jpeg", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/logo.jpeg",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="font-body">
        {/* Google Analytics */}
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",

              name: "Malhotra's Tour & Travel",

              url: "https://malhotrastourandtravel.in/", // change if needed

              logo: "https://malhotrastourandtravel.in//logo.jpeg",

              image: "https://malhotrastourandtravel.in//og-image.jpg",

              description:
                "Premium handcrafted travel experiences across India including Kashmir, Manali, Shimla, Kedarnath and more.",

              telephone: "+91 9211690364",

              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },

              sameAs: [
                "https://www.instagram.com/malhotrastourandtravel",
              ],

              areaServed: {
                "@type": "Country",
                name: "India",
              },

              serviceType: [
                "Tour Packages",
                "Holiday Planning",
                "Hotel Booking",
                "Travel Consultation",
                "Group Tours",
              ],
            }),
          }}
        /> */}
        <Navbar />

        {children}
        <Footer />
        <FloatingCTA />
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
