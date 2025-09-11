import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";
import LoaderLayout from "@/components/LoaderLayout";
import StructuredData, { organizationStructuredData, websiteStructuredData } from "@/components/StructuredData";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Akaal - Digital Innovation & Technology Solutions",
    template: "%s | Akaal"
  },
  description: "Transform your business with cutting-edge digital solutions. We specialize in web development, mobile apps, and digital transformation services.",
  keywords: ["digital solutions", "web development", "mobile apps", "technology", "innovation", "digital transformation"],
  authors: [{ name: "Akaal Team" }],
  creator: "Akaal",
  publisher: "Akaal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://akaal.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akaal.id",
    title: "Akaal - Digital Innovation & Technology Solutions",
    description: "Transform your business with cutting-edge digital solutions. We specialize in web development, mobile apps, and digital transformation services.",
    siteName: "Akaal",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Akaal - Digital Innovation & Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akaal - Digital Innovation & Technology Solutions",
    description: "Transform your business with cutting-edge digital solutions. We specialize in web development, mobile apps, and digital transformation services.",
    images: ["/images/og-image.jpg"],
    creator: "@akaal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/mono-akaal-logo.png", type: "image/png" },
    ],
    apple: "/images/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} dark`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Meta Pixel (Facebook Pixel) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <StructuredData data={organizationStructuredData} />
        <StructuredData data={websiteStructuredData} />
        <LoaderLayout>
          <AppShell>{children}</AppShell>
        </LoaderLayout>
      </body>
    </html>
  );
}