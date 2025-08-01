'use client'

import { useEffect, useRef, useState, useCallback } from "react"
import HeroSlider from "@/components/HeroSlider";
import VisionSection from "@/components/VisionSection";
import OurServiceSection from "@/components/OurServiceSection";
import AboutAkaalSection from "@/components/AboutAkaalSection";
import AksessSection from "@/components/AksessSection";

export default function Page() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Move these inside the component
  const images = [
    "/images/photo-1.jpg",
    "/images/photo-2.jpg",
    "/images/photo-3.jpg"
  ];
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const loadTally = () => {
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        script.onload = () => {
          // @ts-ignore
          if (window.Tally) {
            // @ts-ignore
            window.Tally.loadEmbeds();
          }
        };
        document.body.appendChild(script);
      }
    };

    loadTally();
  }, []);

  // Auto-slide effect
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  // Touch/swipe support for mobile
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);
  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);
  const handleTouchEnd = useCallback(() => {
    const delta = touchEndX.current - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    }
  }, [images.length]);

  return (
    <div className="flex flex-col min-h-screen bg-black text-foreground bg-dotted-grid">
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        
        .glimmer-card {
          position: relative;
          background: rgb(23, 23, 23);
          border-radius: 12px;
          overflow: hidden;
        }
        
        .glimmer-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(236, 72, 153, 0.03),
            rgba(236, 72, 153, 0.06),
            rgba(236, 72, 153, 0.03),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .glimmer-pill {
          position: relative;
          background: rgb(23, 23, 23);
          border-radius: 9999px;
          overflow: hidden;
        }
        
        .glimmer-pill::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(236, 72, 153, 0.03),
            rgba(236, 72, 153, 0.06),
            rgba(236, 72, 153, 0.03),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .hero-glow {
          position: absolute;
          top: 85%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 140%;
          height: 600px;
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.03) 35%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 0;
          filter: blur(50px);
        }

        .scroll-animation {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scroll-animation.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-delay-1 { transition-delay: 0.1s; }
        .scroll-delay-2 { transition-delay: 0.2s; }
        .scroll-delay-3 { transition-delay: 0.3s; }
      `}</style>
      <style jsx>{`
        .slider-track {
          display: flex;
          width: 100vw;
          height: 100%;
          transition: transform 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        .slider-image {
          min-width: 100vw;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
      {/* Navigation */}
      {/* <header className="w-full py-4 px-4 md:px-8 bg-[#0a0814] flex items-center justify-between relative navbar-container"> ... </header> */}
      <main className="flex-grow flex flex-col items-center p-0 m-0">
        {/* Hero Section with Smooth Horizontal Slider */}
        <HeroSlider />
        <VisionSection />
        <OurServiceSection />
        <AboutAkaalSection />
        <AksessSection />
        {/* You can add more sections here if needed */}
      </main>
      {/* <Footer /> */}
      <style jsx global>{`
@keyframes slide-in-left {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}
.animate-slide-in-left {
  animation: slide-in-left 0.3s cubic-bezier(0.4,0,0.2,1);
}
.nav-link {
  position: relative;
  text-base: 1rem;
  font-family: inherit;
  font-weight: 400;
  color: #fff;
  padding-bottom: 1px;
  transition: color 0.2s;
}
.nav-link:hover {
  color: #a78bfa;
}
.nav-link.active {
  color: #a78bfa;
}
.nav-link.active::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: #a78bfa;
  bottom: calc(-1.5 * (var(--navbar-padding, 1rem)));
  /* Sticks to bottom of navbar */
  z-index: 1;
}
@media (min-width: 768px) {
  .navbar-container { --navbar-padding: 1rem; }
}
`}</style>
    </div>
  )
}