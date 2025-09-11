"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function LoaderLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, [pathname, mounted]);

  if (!mounted) {
    return <>{children}</>;
  }

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-dotted-grid opacity-30"></div>

        {/* Custom loader */}
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
