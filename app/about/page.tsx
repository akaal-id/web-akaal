import type { Metadata } from "next";

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
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-dotted-grid opacity-30"></div>
      
      <section className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">About Akaal</h1>
        <p className="max-w-2xl text-lg md:text-xl text-center mb-4">
          Akaal is a forward-thinking company dedicated to delivering innovative solutions and exceptional services. Our mission is to empower businesses and individuals through technology, creativity, and a commitment to excellence.
        </p>
        <p className="max-w-2xl text-base md:text-lg text-center text-muted-foreground">
          With a team of passionate professionals, we strive to exceed expectations and build lasting relationships with our clients. Discover how Akaal can help you achieve your goals and transform your vision into reality.
        </p>
      </section>
    </div>
  );
}