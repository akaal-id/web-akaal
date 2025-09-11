"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRef, useState, useLayoutEffect } from "react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail, Home, BookOpen, User, Briefcase } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Work", href: "/work", icon: Briefcase },
  { label: "Blog", href: "/blog", icon: BookOpen },
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
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 w-full py-2"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo-fullcolor-negative-rgb copy.png" 
                alt="Akaal Logo" 
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
                style={{
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))'
                }} 
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3">
            {/* Tabs Container */}
            <div
              ref={containerRef}
              className="relative bg-muted/80 backdrop-blur-sm rounded-full px-2 py-2 border border-border/20"
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="flex items-center gap-2">
                {NAV_ITEMS.map((item, idx) => {
                  const IconComponent = item.icon;
                  const isActive = activeIdx === idx;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      ref={el => {
                        itemRefs.current[idx] = el;
                      }}
                      className={`relative px-4 py-2 text-sm font-normal transition-all duration-200 rounded-full flex items-center gap-2
                        ${isActive 
                          ? "bg-purple-500/10 text-purple-700 dark:text-purple-300" 
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }
                        ${hoveredIdx === idx && !isActive ? "text-foreground" : ""}
                      `}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onClick={() => setActiveIdx(idx)}
                    >
                      {isActive && IconComponent && <IconComponent className="h-4 w-4" />}
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Contact Buttons Container */}
            <div className="bg-muted/80 backdrop-blur-sm rounded-full px-2 py-2 border border-border/20">
              <div className="flex items-center gap-2">
                <motion.button
                  className="p-2 border border-primary/20 text-primary rounded-full hover:bg-primary/10 transition-colors duration-200 flex items-center justify-center"
                  onClick={() => setContactModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title="Phone"
                >
                  <Phone className="h-4 w-4" />
                </motion.button>
                <motion.a
                  href="mailto:admin@akaal.id"
                  className="p-2 border border-primary/20 text-primary rounded-full hover:bg-primary/10 transition-colors duration-200 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title="Email"
                >
                  <Mail className="h-4 w-4" />
                </motion.a>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-md hover:bg-accent transition-colors duration-200"
            onClick={() => setSidebarOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </motion.button>
        </div>
      </div>
      {/* Contact Modal */}
      <AnimatePresence>
        {contactModalOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" 
            onClick={() => setContactModalOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-card rounded-xl shadow-2xl p-8 flex flex-col items-center gap-6 min-w-[320px] max-w-md mx-4 relative border"
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <button 
                className="absolute top-4 right-4 p-2 rounded-md hover:bg-accent transition-colors duration-200" 
                onClick={() => setContactModalOpen(false)} 
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <h2 className="text-2xl font-semibold text-primary mb-2">Contact Us</h2>
              <p className="text-muted-foreground text-center mb-4">
                Get in touch with our team for your next project
              </p>
              <div className="w-full space-y-3">
                <a
                  href="https://wa.me/6285117326065"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.18 1.6 6.01L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52ZM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.67.96.98-3.58-.23-.37A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.54 0 4.93.99 6.73 2.77A9.48 9.48 0 0 1 22 12c0 5.52-4.48 10-10 10Zm5.2-7.6c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3.01.15.19 2.03 3.1 5.01 4.23.7.24 1.25.38 1.68.48.71.17 1.36.15 1.87.09.57-.07 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34Z"/>
                  </svg>
                  WhatsApp Us Now
                </a>
                <a
                  href="mailto:admin@akaal.id"
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 20v-9.99l7.29 6.7c.38.35.96.35 1.34 0L20 10.01V20H4Z"/>
                  </svg>
                  Email Us Now
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Mobile Menu */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="w-80 max-w-[85vw] bg-card h-full p-6 flex flex-col gap-6 border-r"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Menu</h3>
                <button
                  className="p-2 rounded-md hover:bg-accent transition-colors duration-200"
                  aria-label="Close menu"
                  onClick={() => setSidebarOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <nav className="flex flex-col gap-2">
                {NAV_ITEMS.map((item, idx) => {
                  const IconComponent = item.icon;
                  const isActive = activeIdx === idx;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 flex items-center gap-3 ${
                        isActive 
                          ? "bg-primary text-primary-foreground" 
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      }`}
                      onClick={() => {
                        setSidebarOpen(false);
                        setActiveIdx(idx);
                      }}
                    >
                      {isActive && IconComponent && <IconComponent className="h-5 w-5" />}
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              
              <div className="mt-auto pt-6 border-t">
                <button
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
                  onClick={() => {
                    setSidebarOpen(false);
                    setContactModalOpen(true);
                  }}
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
            <div className="flex-1" onClick={() => setSidebarOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
