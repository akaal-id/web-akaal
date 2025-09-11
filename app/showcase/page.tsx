import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Showcase - Our Digital Projects & Portfolio | Akaal",
  description: "Explore Akaal's portfolio of successful digital projects including web applications, mobile solutions, and cloud platforms. See our expertise in action through real-world implementations.",
  keywords: [
    "portfolio showcase",
    "digital projects",
    "web application examples",
    "mobile app portfolio",
    "cloud platform projects",
    "technology showcase",
    "Akaal portfolio",
    "project examples",
    "digital solutions showcase",
    "technology implementations"
  ],
  openGraph: {
    title: "Showcase - Our Digital Projects & Portfolio | Akaal",
    description: "Explore Akaal's portfolio of successful digital projects including web applications, mobile solutions, and cloud platforms. See our expertise in action through real-world implementations.",
    url: "https://akaal.id/showcase",
    siteName: "Akaal",
    images: [
      {
        url: "/images/og-showcase.jpg",
        width: 1200,
        height: 630,
        alt: "Showcase - Our Digital Projects & Portfolio | Akaal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Showcase - Our Digital Projects & Portfolio | Akaal",
    description: "Explore Akaal's portfolio of successful digital projects including web applications, mobile solutions, and cloud platforms. See our expertise in action through real-world implementations.",
    images: ["/images/og-showcase.jpg"],
    creator: "@akaal",
  },
  alternates: {
    canonical: "https://akaal.id/showcase",
  },
};

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-dotted-grid opacity-30"></div>
      
      <section className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">Showcase</h1>
        <div className="max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-lg p-6 shadow-lg flex flex-col items-center">
            <img src="/images/photo-1.jpg" alt="Modern Web Application - Akaal Project Portfolio" className="w-full h-40 object-cover rounded mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-violet-300">Project One</h2>
            <p className="text-muted-foreground text-center">A modern web application built for performance and scalability, featuring a beautiful UI and seamless user experience.</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-lg p-6 shadow-lg flex flex-col items-center">
            <img src="/images/photo-2.jpg" alt="Custom Mobile Solution - Akaal Project Portfolio" className="w-full h-40 object-cover rounded mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-violet-300">Project Two</h2>
            <p className="text-muted-foreground text-center">A custom mobile solution designed to streamline business operations and enhance productivity on the go.</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-lg p-6 shadow-lg flex flex-col items-center">
            <img src="/images/photo-3.jpg" alt="Cloud-Based Platform - Akaal Project Portfolio" className="w-full h-40 object-cover rounded mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-violet-300">Project Three</h2>
            <p className="text-muted-foreground text-center">A cloud-based platform enabling real-time collaboration and data-driven decision making for enterprises.</p>
          </div>
        </div>
      </section>
    </div>
  );
}