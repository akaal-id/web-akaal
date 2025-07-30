// Footer component extracted from app/page.tsx
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a0e36] pt-12 pb-4 px-12 md:px-12">
      <div className="w-[1152px] max-w-full mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-0">
        {/* Logo and Address */}
        <div className="flex-1 flex flex-col items-start mb-0 md:mb-0">
          <Link href="/">
            <img
              src="/images/akaal-logo.png"
              alt="Akaal Logo"
              className="w-32 mb-4 cursor-pointer"
            />
          </Link>
          <div className="text-white text-lg font-medium mb-2">
            PT. Asia Karya Lumina
          </div>
          <div className="text-neutral-300 text-sm mb-4 text-left max-w-xs md:max-w-md lg:max-w-xs">
            <a
              href="https://maps.app.goo.gl/xyRxwY17C6C8VB8C8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline focus:underline outline-none"
            >
              Jl. Gotong Royong | No.50 Rt.004/01, RT.3/RW.1, Ragunan, Ps. Minggu, Kota Jakarta Selatan,Daerah Khusus Ibukota Jakarta 12550
            </a>
          </div>
        </div>
        {/* Links */}
        <div className="flex-[1.5] flex flex-col md:flex-row justify-between w-full md:w-auto gap-8 md:gap-0">
          <div className="mb-2 md:mb-0">
            <div className="text-white text-xl font-bold mb-4">
              Navigation
            </div>
            <ul className="space-y-2 text-neutral-300 text-base text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors"
                >
                  About AKAAL
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#partnership"
                  className="hover:text-white transition-colors"
                >
                  Partnership
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-white transition-colors"
                >
                  Frequently Asked Question
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-2 md:mb-0">
            <div className="text-white text-xl font-bold mb-4">
              Tentang Event
            </div>
            <ul className="space-y-2 text-neutral-300 text-base text-sm">
              <li>
                <a
                  href="#buat-event"
                  className="hover:text-white transition-colors"
                >
                  Buat Event
                </a>
              </li>
              <li>
                <a
                  href="#biaya"
                  className="hover:text-white transition-colors"
                >
                  Biaya
                </a>
              </li>
              <li>
                <a
                  href="#lihat-event"
                  className="hover:text-white transition-colors"
                >
                  Lihat Event
                </a>
              </li>
              <li>
                <a
                  href="#snk-event"
                  className="hover:text-white transition-colors"
                >
                  S&K Event
                </a>
              </li>
              <li>
                <a
                  href="#faq-event"
                  className="hover:text-white transition-colors"
                >
                  FAQ Event
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-white text-xl font-bold mb-4">Follow us</div>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white text-2xl hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white text-2xl hover:opacity-80 transition-opacity"
                aria-label="TikTok"
              >
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 17V8h3V6a3 3 0 0 1 6 0v2h-3v9a5 5 0 1 1-6-4.9" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white text-2xl hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                </svg>
              </a>
            </div>
            <li></li>
            <div className="flex items-center gap-2 text-neutral-300 text-sm mb-2">
            <a
              href="https://wa.me/6285117326065"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline focus:underline outline-none"
            >          
                <img
                  src="/images/whatsapp.png"
                  alt="White WhatsApp icon, set against a dark background, representing contact information"
                  className="w-4 h-4"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
                +62 851-1732-6065
              </a>
          </div>
          <div className="flex items-center gap-2 text-neutral-300 text-sm">
            <a
              href="mailto:admin@akaal.id"
              className="flex items-center gap-2 hover:underline focus:underline outline-none"
            >        
                <img
                  src="/images/mail-inbox-app.png"
                  alt="White mail inbox icon with envelope flap open, set against a dark background, representing contact information"
                  className="w-4 h-4"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              admin@akaal.id
            </a>
          </div>
          </div>
        </div>
      </div>
      <hr className="my-8 border-[#3a2a5d]" />
      <div className="text-center text-light text-sm text-white/20">
        © 2025 Asia Karya Lumina. All Rights Reserved
      </div>
    </footer>
  );
}
