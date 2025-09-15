import type { Metadata } from "next";
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Akaal Digital Solutions - Innovative Technology Solutions",
  description: "Transform your business with our cutting-edge digital solutions. From web development to AI automation, we bring your vision to life with innovative technology.",
  keywords: [
    "digital solutions",
    "web development", 
    "mobile apps",
    "digital marketing",
    "AI automation",
    "technology innovation",
    "digital transformation",
    "business growth",
    "akaal",
    "jakarta digital agency"
  ],
  openGraph: {
    title: "Akaal Digital Solutions - Innovative Technology Solutions",
    description: "Transform your business with our cutting-edge digital solutions. From web development to AI automation, we bring your vision to life with innovative technology.",
    url: "https://akaal.id",
    siteName: "Akaal",
    images: [
      {
        url: "/images/logo-fullcolor-rgb.png",
        width: 1200,
        height: 630,
        alt: "Akaal Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akaal Digital Solutions - Innovative Technology Solutions",
    description: "Transform your business with our cutting-edge digital solutions. From web development to AI automation, we bring your vision to life with innovative technology.",
    images: ["/images/logo-fullcolor-rgb.png"],
    creator: "@akaal",
  },
  alternates: {
    canonical: "https://akaal.id",
  },
};

export default function HomePage() {
  redirect('/work');
}