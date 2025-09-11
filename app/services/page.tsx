import React from 'react';
import type { Metadata } from "next";
import StructuredData, { serviceStructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Our Services - Digital Solutions & Technology Services | Akaal",
  description: "Discover Akaal's comprehensive digital services including custom software development, UI/UX design, digital transformation, IT consulting, and cloud solutions for modern businesses.",
  keywords: [
    "digital transformation services",
    "custom software development",
    "UI UX design services",
    "IT consulting",
    "cloud solutions",
    "web development services",
    "mobile app development",
    "technology consulting",
    "digital solutions",
    "business technology",
    "Akaal services"
  ],
  openGraph: {
    title: "Our Services - Digital Solutions & Technology Services | Akaal",
    description: "Discover Akaal's comprehensive digital services including custom software development, UI/UX design, digital transformation, IT consulting, and cloud solutions for modern businesses.",
    url: "https://akaal.id/services",
    siteName: "Akaal",
    images: [
      {
        url: "/images/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Our Services - Digital Solutions & Technology Services | Akaal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - Digital Solutions & Technology Services | Akaal",
    description: "Discover Akaal's comprehensive digital services including custom software development, UI/UX design, digital transformation, IT consulting, and cloud solutions for modern businesses.",
    images: ["/images/og-services.jpg"],
    creator: "@akaal",
  },
  alternates: {
    canonical: "https://akaal.id/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StructuredData data={serviceStructuredData} />
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-dotted-grid opacity-30"></div>
      
      <section className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">Our Services</h1>
        <ul className="max-w-2xl w-full text-lg md:text-xl text-center space-y-4">
          <li>
            <span className="font-semibold text-violet-300">Digital Transformation</span>: Empowering your business with the latest technology and digital strategies.
          </li>
          <li>
            <span className="font-semibold text-violet-300">Custom Software Development</span>: Tailored solutions to fit your unique business needs.
          </li>
          <li>
            <span className="font-semibold text-violet-300">UI/UX Design</span>: Creating beautiful, user-friendly interfaces for web and mobile applications.
          </li>
          <li>
            <span className="font-semibold text-violet-300">IT Consulting</span>: Expert advice to help you make the right technology decisions.
          </li>
          <li>
            <span className="font-semibold text-violet-300">Cloud Solutions</span>: Scalable and secure cloud infrastructure for modern businesses.
          </li>
        </ul>
      </section>
    </div>
  );
}