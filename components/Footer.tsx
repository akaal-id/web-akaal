"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 max-w-sm">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo-fullcolor-negative-rgb copy.png"
                alt="Akaal Logo"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <div className="text-white text-lg font-medium mb-3">
              PT. Asia Karya Lumina
            </div>
            <div className="text-gray-400 text-sm leading-relaxed mb-6">
              <a
                href="https://maps.app.goo.gl/xyRxwY17C6C8VB8C8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors inline-flex items-start gap-2"
              >
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  Jl. Gotong Royong No.50 Rt.004/01, RT.3/RW.1, Ragunan, Ps. Minggu, 
                  Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12550
                </span>
              </a>
            </div>
            <div className="space-y-3">
              <a
                href="https://wa.me/6285117326065"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">+62 851-1732-6065</span>
              </a>
              <a
                href="mailto:admin@akaal.id"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">admin@akaal.id</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="min-w-0">
            <h3 className="text-white text-lg font-medium mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About AKAAL
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#partnership"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Partnership
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Frequently Asked Question
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="min-w-0">
            <h3 className="text-white text-lg font-medium mb-6">Follow us</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="p-2 border border-white/20 rounded-full text-gray-400 hover:text-white hover:border-yellow-400/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 border border-white/20 rounded-full text-gray-400 hover:text-white hover:border-yellow-400/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 Asia Karya Lumina. All Rights Reserved
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
