"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Linkedin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      {/* CTA Section */}
      <div className="relative w-screen overflow-hidden">
        {/* Radial teal background - behind everything */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at bottom, rgba(20, 184, 166, 0.4) 0%, rgba(6, 182, 212, 0.2) 30%, transparent 70%)'
          }}
        ></div>
        
        {/* CTA Content with blur effect - on top of radial background */}
        <div className="relative z-10 w-full h-full">
          <div className="w-full h-full py-48 bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 relative overflow-hidden group flex items-center justify-center">
            {/* Cursor glow effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168, 85, 247, 0.1) 0%, transparent 50%)`
              }}
            ></div>
            
            <div className="text-center px-8 relative z-10">
              <h2 className="text-3xl font-semibold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how we can bring your vision to life with our innovative digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-white rounded-full font-medium hover:border-purple-500 hover:text-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-white rounded-full font-medium hover:border-purple-500 hover:text-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            >
              Learn More
            </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Original Footer Content */}
      <div className="bg-black border-t border-white/20">
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

          {/* Newsletter Subscription */}
          <div className="min-w-0">
            <h3 className="text-white text-lg font-medium mb-6" style={{ fontFamily: 'Plus Jakarta Sans' }}>
              Subscribe to AKAAL&apos;s Newsletter
            </h3>
            <p className="text-gray-400 text-sm mb-4" style={{ fontFamily: 'Inter' }}>
              Our weekly newsletter about digital innovation and business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Email" 
                className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm"
                style={{ fontFamily: 'Inter' }}
              />
              <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap text-sm" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                Subscribe
              </button>
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
      </div>
    </footer>
  );
}
