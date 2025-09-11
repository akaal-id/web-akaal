import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akaal - Digital Innovation & Technology Solutions",
  description: "Transform your business with cutting-edge digital solutions. We specialize in web development, mobile apps, and digital transformation services.",
  keywords: [
    "digital solutions",
    "web development", 
    "mobile app development",
    "digital transformation",
    "technology consulting",
    "software development",
    "UI/UX design",
    "cloud solutions",
    "IT consulting",
    "innovation",
    "Akaal"
  ],
  openGraph: {
    title: "Akaal - Digital Innovation & Technology Solutions",
    description: "Transform your business with cutting-edge digital solutions. We specialize in web development, mobile apps, and digital transformation services.",
    url: "https://akaal.id",
    siteName: "Akaal",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Akaal - Digital Innovation & Technology Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akaal - Digital Innovation & Technology Solutions",
    description: "Transform your business with cutting-edge digital solutions. We specialize in web development, mobile apps, and digital transformation services.",
    images: ["/images/og-image.jpg"],
    creator: "@akaal",
  },
  alternates: {
    canonical: "https://akaal.id",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Empty Landing Page */}
    </div>
  )
}