import type { Metadata } from "next";
import Background from "@/components/Background";
import StartupAnimation from "@/components/StartupAnimation";

export const metadata: Metadata = {
  title: "About Akaal - Digital Innovation & Technology Solutions",
  description: "Learn about Akaal's mission to empower businesses through innovative technology solutions. Discover our team of passionate professionals dedicated to digital transformation and excellence.",
  keywords: [
    "about akaal",
    "company mission",
    "digital innovation team",
    "technology professionals",
    "business empowerment",
    "digital transformation experts",
    "innovative solutions",
    "technology excellence",
    "Akaal team",
    "company values"
  ],
  openGraph: {
    title: "About Akaal - Digital Innovation & Technology Solutions",
    description: "Learn about Akaal's mission to empower businesses through innovative technology solutions. Discover our team of passionate professionals dedicated to digital transformation and excellence.",
    url: "https://akaal.id/about",
    siteName: "Akaal",
    images: [
      {
        url: "/images/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Akaal - Digital Innovation & Technology Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Akaal - Digital Innovation & Technology Solutions",
    description: "Learn about Akaal's mission to empower businesses through innovative technology solutions. Discover our team of passionate professionals dedicated to digital transformation and excellence.",
    images: ["/images/og-about.jpg"],
    creator: "@akaal",
  },
  alternates: {
    canonical: "https://akaal.id/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StartupAnimation />
      <Background variant="top-radial" />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-purple-400 mb-4">AKAAL</h1>
          <p className="text-xl text-gray-300">Digital Innovation & Technology Solutions</p>
        </div>
      </div>
    </div>
  );
}