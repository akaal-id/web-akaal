import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Insights & Updates | Akaal",
  description: "Stay updated with the latest insights, technology trends, and company updates from Akaal. Read our blog for expert opinions on digital transformation, web development, and innovation.",
  keywords: [
    "blog",
    "technology insights",
    "digital transformation blog",
    "web development articles",
    "tech trends",
    "innovation updates",
    "Akaal blog",
    "technology news",
    "digital solutions blog",
    "tech insights"
  ],
  openGraph: {
    title: "Blog - Insights & Updates | Akaal",
    description: "Stay updated with the latest insights, technology trends, and company updates from Akaal. Read our blog for expert opinions on digital transformation, web development, and innovation.",
    url: "https://akaal.id/blog",
    siteName: "Akaal",
    images: [
      {
        url: "/images/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Blog - Insights & Updates | Akaal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Insights & Updates | Akaal",
    description: "Stay updated with the latest insights, technology trends, and company updates from Akaal. Read our blog for expert opinions on digital transformation, web development, and innovation.",
    images: ["/images/og-blog.jpg"],
    creator: "@akaal",
  },
  alternates: {
    canonical: "https://akaal.id/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-dotted-grid opacity-30"></div>

      <main className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-muted-foreground">Coming soon - Stay tuned for insights and updates!</p>
        </div>
      </main>
    </div>
  )
}
