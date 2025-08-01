import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";
import LoaderLayout from "@/components/LoaderLayout";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akaal",
  description: "Welcome to Akaal. Discover our services, showcase, and more.",
  manifest: "/manifest.json",
  viewport: {
    width: 'device-width',
    initialScale: 1
  },
  icons: {
    icon: "/images/mono-akaal-logo.png"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <LoaderLayout>
          <AppShell>{children}</AppShell>
        </LoaderLayout>
      </body>
    </html>
  );
}