import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
import Script from "next/script";

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
  metadataBase: new URL("https://malhotrastourandtravel.in/"),

  title: {
    default:
      "Malhotra's Tour & Travel | Best Travel Agency in India for Kashmir, Himachal & Uttarakhand Tours",

    template: "%s | Malhotra's Tour & Travel",
  },

  description:
    "Discover handcrafted travel experiences across India with Malhotra's Tour & Travel. Explore Kashmir, Manali, Shimla, Kedarnath, Rajasthan, Goa, Ladakh and more with personalized itineraries, hotel bookings, sightseeing, transport and group tours.",

  keywords: [
    // Brand
    "Malhotra Tour and Travel",
    "Malhotra's Tour & Travel",
    "Malhotra Tours",

    // Main Travel Keywords
    "Best Travel Agency India",
    "Travel Agency Delhi",
    "Tour and Travel Services",
    "India Tour Packages",
    "Holiday Packages India",
    "Affordable Tour Packages",
    "Luxury Travel Packages",
    "Family Tour Packages",
    "Honeymoon Tour Packages",
    "Group Tour Packages",
    "Adventure Tour Packages",
    "Custom Travel Itinerary",
    "Travel Planner India",
    "Domestic Tour Packages",

    // Destination Keywords
    "Kashmir Tour Package",
    "Kashmir Honeymoon Package",
    "Manali Tour Package",
    "Shimla Tour Package",
    "Kedarnath Yatra Package",
    "Char Dham Yatra Package",
    "Ladakh Tour Package",
    "Rajasthan Tour Package",
    "Goa Tour Package",
    "Spiti Valley Tour",
    "Himachal Pradesh Tour",
    "Uttarakhand Tour Package",
    "Amritsar Tour Package",

    // Intent Keywords
    "Book Tour Packages Online",
    "Best Tour Operator India",
    "Affordable Kashmir Trip",
    "Best Travel Company Delhi",
    "Travel Booking Services",
    "Vacation Packages India",
    "Road Trip Packages India",

    // Service Keywords
    "Hotel Booking",
    "Sightseeing Packages",
    "Cab Booking for Tours",
    "Travel Consultation",
    "Guided Tours India",
    "Private Tour Packages",
  ],

  category: "Travel",

  classification: "Travel Agency",

  other: {
    "google-site-verification":
      "67bIOatIfM0M7PEWbnnmd3KPGoUTdnrW4623ZCugFiE",
  },

  authors: [
    {
      name: "Malhotra's Tour & Travel",
      url: "https://malhotrastourandtravel.in/",
    },
  ],

  creator: "Malhotra's Tour & Travel",

  publisher: "Malhotra's Tour & Travel",

  applicationName: "Malhotra's Tour & Travel",

  alternates: {
    canonical: "https://malhotrastourandtravel.in/",
  },

  robots: {
    index: true,
    follow: true,

    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: "https://malhotrastourandtravel.in/",

    siteName: "Malhotra's Tour & Travel",

    title:
      "Malhotra's Tour & Travel — Premium Travel Experiences Across India",

    description:
      "Explore Kashmir, Manali, Shimla, Kedarnath, Rajasthan, Goa and more with customized holiday packages, premium stays, sightseeing and unforgettable journeys.",

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

    title:
      "Malhotra's Tour & Travel | Curated India Tour Packages",

    description:
      "Personalized travel experiences across India including Kashmir, Himachal, Kedarnath, Rajasthan and Goa.",

    images: ["/logo.jpeg"],
  },

  icons: {
    icon: [
      {
        url: "/logo.jpeg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo.jpeg",
        media: "(prefers-color-scheme: dark)",
      },
    ],

    shortcut: "/logo.jpeg",

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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
        >
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5J4ZJZVQ');
          `}
        </Script>
      </head>

      <body className="font-body">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5J4ZJZVQ"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>
        {/* SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Malhotra's Tour & Travel",
              url: "https://malhotrastourandtravel.in/",
              logo: "https://malhotrastourandtravel.in/logo.jpeg",
              image: "https://malhotrastourandtravel.in/logo.jpeg",
              description:
                "Premium handcrafted travel experiences across India.",
            }),
          }}
        />
        <Navbar />

        {children}
        <Footer />
        <FloatingCTA />
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
