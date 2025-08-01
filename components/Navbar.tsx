// Navbar component extracted from app/page.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useLayoutEffect } from "react";
import { useEffect } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Akaal", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Showcase", href: "/showcase" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeIdx, setActiveIdx] = useState(
    NAV_ITEMS.findIndex(item => item.href === pathname)
  );
  const [underlineStyle, setUnderlineStyle] = useState({});
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useLayoutEffect(() => {
    const idx = hoveredIdx !== null ? hoveredIdx : activeIdx;
    if (idx === -1 || !itemRefs.current[idx]) {
      setUnderlineStyle({ opacity: 0 });
      return;
    }
    const el = itemRefs.current[idx];
    const containerRect = containerRef.current?.getBoundingClientRect();
    const elRect = el?.getBoundingClientRect();
    if (elRect && containerRect) {
      setUnderlineStyle({
        width: elRect.width,
        transform: `translateX(${elRect.left - containerRect.left}px)`,
        opacity: 1,
      });
    }
  }, [hoveredIdx, activeIdx]);

  return (
    <header className="w-full px-6 md:px-12 bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-gray-800 sticky top-0 z-50">
              <div className="max-w-7xl mx-auto flex items-center justify-between h-[80px]">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img src="/images/akaal-logo.png" alt="Akaal Logo" className="h-8 w-auto object-contain cursor-pointer" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block relative h-full">
          <div
            ref={containerRef}
            className="flex gap-12 justify-center h-full"
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                ref={el => {
                  itemRefs.current[idx] = el;
                }}
                data-id={item.href}
                className={`relative px-3 flex items-center h-full text-sm font-medium transition-all duration-200
                  ${activeIdx === idx ? "text-purple-400" : "text-gray-300 hover:text-white"}
                  ${hoveredIdx === idx ? "text-purple-300" : ""}
                `}
                onMouseEnter={() => setHoveredIdx(idx)}
                onClick={() => setActiveIdx(idx)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <span
            className="pointer-events-none absolute left-0 bottom-0 h-0.5 rounded-full transition-all duration-300 ease-in-out"
            style={{
              ...underlineStyle,
              background: "linear-gradient(90deg, #a78bfa 0%, #8b5cf6 100%)",
              height: "2px",
              transition: "width 300ms ease-in-out, transform 300ms ease-in-out, opacity 150ms",
            }}
          />
        </nav>

        {/* Contact Button */}
        <div className="flex items-center">
          <a
            href="#contact"
            className="hidden md:inline-block px-6 py-2.5 rounded-full border border-purple-400/30 bg-transparent font-medium text-sm text-purple-400 hover:bg-purple-400/10 hover:border-purple-400/50 transition-all duration-200"
            onClick={e => {
              e.preventDefault();
              setContactModalOpen(true);
            }}
          >
            Contact Us
          </a>
        </div>
      {/* Contact Modal */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setContactModalOpen(false)}>
          <div className="bg-[#18122b] rounded-xl shadow-lg p-8 flex flex-col items-center gap-6 min-w-[280px] relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-white text-2xl" onClick={() => setContactModalOpen(false)} aria-label="Close">&times;</button>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-2">Contact Us</h2>
            <a
              href="https://wa.me/6285117326065"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold text-lg transition-colors duration-200"
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.18 1.6 6.01L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52ZM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.67.96.98-3.58-.23-.37A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.54 0 4.93.99 6.73 2.77A9.48 9.48 0 0 1 22 12c0 5.52-4.48 10-10 10Zm5.2-7.6c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3.01.15.19 2.03 3.1 5.01 4.23.7.24 1.25.38 1.68.48.71.17 1.36.15 1.87.09.57-.07 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34Z"/></svg>
              WhatsApp Us Now
            </a>
            <a
              href="mailto:admin@akaal.id"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-lg transition-colors duration-200"
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 20v-9.99l7.29 6.7c.38.35.96.35 1.34 0L20 10.01V20H4Z"/></svg>
              Email Us Now
            </a>
          </div>
        </div>
      )}
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          aria-label="Open menu"
          onClick={() => setSidebarOpen(true)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex md:hidden">
          <div className="w-80 bg-gradient-to-b from-gray-900 to-black h-full p-8 flex flex-col gap-8 animate-slide-in-left border-r border-gray-800">
            <div className="flex items-center justify-between mb-8">
              <img src="/images/akaal-logo.png" alt="Akaal Logo" className="h-8 w-auto object-contain" />
              <button
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close menu"
                onClick={() => setSidebarOpen(false)}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {NAV_ITEMS.map((item, idx) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-lg font-medium transition-colors duration-200 ${
                    activeIdx === idx 
                      ? "text-cyan-400 border-b border-cyan-400 pb-2" 
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => {
                    setActiveIdx(idx);
                    setSidebarOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto">
              <a
                href="#contact"
                className="w-full px-6 py-3 rounded-full border border-purple-400/30 bg-transparent font-medium text-purple-400 hover:bg-purple-400/10 hover:border-purple-400/50 transition-all duration-200 text-center block"
                onClick={e => {
                  e.preventDefault();
                  setContactModalOpen(true);
                  setSidebarOpen(false);
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="flex-1" onClick={() => setSidebarOpen(false)} />
        </div>
      )}
    </header>
  );
}
