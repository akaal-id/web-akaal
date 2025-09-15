import type { Metadata } from "next";
import LandingPageClient from "@/components/LandingPageClient";

export const metadata: Metadata = {
  title: "Our Work - Akaal Digital Solutions",
  description: "Explore our portfolio of innovative digital solutions that have transformed businesses and created lasting impact. From web development to AI automation, see how we bring visions to life.",
  keywords: [
    "our work",
    "portfolio",
    "digital solutions",
    "web development", 
    "mobile apps",
    "digital marketing",
    "AI automation",
    "technology innovation",
    "digital transformation",
    "business growth",
    "akaal work",
    "jakarta digital agency"
  ],
  openGraph: {
    title: "Our Work - Akaal Digital Solutions",
    description: "Explore our portfolio of innovative digital solutions that have transformed businesses and created lasting impact. From web development to AI automation, see how we bring visions to life.",
    url: "https://akaal.id/work",
    siteName: "Akaal",
    images: [
      {
        url: "/images/og-work.jpg",
        width: 1200,
        height: 630,
        alt: "Our Work - Akaal Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work - Akaal Digital Solutions",
    description: "Explore our portfolio of innovative digital solutions that have transformed businesses and created lasting impact. From web development to AI automation, see how we bring visions to life.",
    images: ["/images/og-work.jpg"],
    creator: "@akaal",
  },
  alternates: {
    canonical: "https://akaal.id/work",
  },
};

export default function WorkPage() {
  return <LandingPageClient />;
}
