import type { Metadata } from "next";
import "./globals.css";
import AppShell from "@/components/AppShell";
import LoaderLayout from "@/components/LoaderLayout";

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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-[#040016]">
        <LoaderLayout>
          <AppShell>{children}</AppShell>
        </LoaderLayout>
      </body>
    </html>
  );
}