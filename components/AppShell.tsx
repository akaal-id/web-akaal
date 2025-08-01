"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 200);
      
      // Calculate scroll progress (0 to 1)
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-[9999] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200"
          aria-label="Scroll to top"
          style={{
            background: 'transparent',
            boxShadow: "0 4px 24px 0 rgba(167,139,250,0.2)",
            border: `2px solid rgba(167, 139, 250, 0.3)`,
            borderImage: `conic-gradient(from 0deg, #a78bfa ${scrollProgress * 360}deg, rgba(167, 139, 250, 0.3) ${scrollProgress * 360}deg) 1`
          }}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-purple-400">
            <polyline points="8 13 12 9 16 13" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </>
  );
}
