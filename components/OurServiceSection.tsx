// OurServiceSection.tsx

import React from "react";
import { useState, useEffect } from 'react';

function ServiceTitleText() {
  return (
    <div className="container mx-auto mb-4 text-center max-w-4xl px-8 py-0">
      <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-[#B6F0FF]"
      style={{
        backgroundImage: "linear-gradient(90deg, #FEFFFF 30%, #2ACFEA 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
          }}
        >
          What We Do:<br />Creative. Strategic. Transformative.
        </h2>
      <p className="text-base md:text-sm text-white font-normal max-w-l mx-auto p-0 md:p-2 mb-2">
        Solusi digital menyeluruh yang dirancang untuk membentuk masa depan bisnis Anda. Kami membaginya menjadi dua pilar utama: Akaal Digital untuk transformasi teknologi, dan Akaal Agency untuk kekuatan strategi serta komunikasi brand.
      </p>
    </div>
  );
}

function ServiceTab({ selected, setSelected }: { selected: string; setSelected: React.Dispatch<React.SetStateAction<string>> }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextSelected, setNextSelected] = useState(selected);

  const handleTabChange = (newSelection: string) => {
    if (selected === newSelection) return;
    setIsTransitioning(true);
    setNextSelected(newSelection);
    setTimeout(() => {
      setSelected(newSelection);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="w-full flex flex-col items-center mb-8">
      <style jsx>{`
        .pill-tab-wrapper {
          display: flex;
          align-items: center;
          gap: 10px;
          border-radius: 9999px;
          padding: 8px;
          width: 100%;
          justify-content: center;
          max-width: 1152px;
        }
        .pill-tab-wrapper .input {
          display: none;
        }
        .pill-tab {
          flex-grow: 1;
          text-align: center;
          padding: 10px 32px;
          border-radius: 9999px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s, transform 0.2s;
          border: 1px solid #6543EC;
          background: transparent;
          color: #6543EC;
          box-shadow: none;
        }
        .pill-tab.selected {
          background: #6543EC;
          color: #fff;
          border: none;
          box-shadow: 0 2px 12px 0 #6543EC22;
        }
        .pill-tab:not(.selected):hover {
          animation: pillTabHover 0.3s;
          background:rgba(255, 255, 255, 0.1);
          color: #6543EC;
          border: 1px solid #6543EC;
        }
        @keyframes pillTabHover {
          0% { transform: scale(1); }
          100% { transform: scale(1); }
        }
      `}</style>
      <div className="pill-tab-wrapper">
        <input
          type="radio"
          id="digital"
          name="service-tab"
          className="input"
          checked={selected === 'Digital & Tech'}
          onChange={() => handleTabChange('Digital & Tech')}
        />
        <label
          htmlFor="digital"
          className={`pill-tab${selected === 'Digital & Tech' ? ' selected' : ''}`}
        >
          Digital & Tech
        </label>
        <input
          type="radio"
          id="creative"
          name="service-tab"
          className="input"
          checked={selected === 'Creative Agency'}
          onChange={() => handleTabChange('Creative Agency')}
        />
        <label
          htmlFor="creative"
          className={`pill-tab${selected === 'Creative Agency' ? ' selected' : ''}`}
        >
          Creative Agency
        </label>
      </div>
    </div>
  );
}

function AkaalDigitalTechServices() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full max-w-6xl mx-auto mb-16 rounded-2xl bg-gradient-to-br from-[#150439] to-[#3B0B9F] p-10 md:p-14 shadow-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Section - Always Visible */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Left Content */}
        <div className="flex-1 z-10">
          <div className="mb-6">
            {/* Line 1: Logo */}
            <div className="flex items-center gap-3 mb-8">
              <img src="/images/icon-white-rgb.png" alt="Akaal Digital & Tech Logo" className="w-8 h-8" />
            </div>
            <div className="mb-0">
              <span className="text-white text-lg font-medium">Our Services:</span>
            </div>
            <div className="mb-4">
              <span className="italic text-white text-4xl font-semibold">AKAAL DIGITAL & TECH</span>
            </div>
            <p className="text-white text-base md:text-sm max-w-sm">
              Solusi berbasis teknologi yang dirancang untuk memperkuat fondasi digital bisnis Anda, mengoptimalkan operasional, dan menciptakan pengalaman visual yang memikat.
            </p>
          </div>
        </div>
        {/* Top Right Image */}
        <div className="absolute right-36 top-20 hidden md:block z-0">
          <img src="/images/digitech-1.png" alt="Akaal Digital & Tech Visual" className="w-[380px] rounded-xl translate-x-12 -translate-y-8" />
        </div>
      </div>

      {/* Bottom Section - Cards Container (Hidden by default, shown on hover) */}
      <div className={`transition-all duration-500 ease-in-out ${isHovered ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-[#D5B5FF] rounded-xl p-6 bg-transparent flex flex-col gap-2 transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <div className="mb-2">
              <svg width="32" height="32" fill="none" stroke="#ffffff" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10"/><path d="M7 14l5-5 5 5"/></svg>
            </div>
            <div className="font-bold text-white text-lg">High-Conversion Landing Pages</div>
            <div className="text-white/80 text-sm">Desain yang responsif dan strategis, dirancang untuk meningkatkan penjualan, memperkuat keterlibatan, dan membangun koneksi yang lebih dalam dengan audiens Anda.</div>
          </div>
          <div className="border border-[#D5B5FF] rounded-xl p-6 bg-transparent flex flex-col gap-2 transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <div className="mb-2">
              <svg width="32" height="32" fill="none" stroke="#ffffff" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 6v4l3 3"/></svg>
            </div>
            <div className="font-bold text-white text-lg">Website Maintenance</div>
            <div className="text-white/80 text-sm">Layanan menyeluruh mencakup pembaruan keamanan, pengecekan performa rutin, dan perbaikan bug, agar website Anda tetap stabil, cepat, dan aman sepanjang waktu.</div>
          </div>
          <div className="border border-[#D5B5FF] rounded-xl p-6 bg-transparent flex flex-col gap-2 transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <div className="mb-2">
              <svg width="32" height="32" fill="none" stroke="#ffffff" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
            </div>
            <div className="font-bold text-white text-lg">Professional UI/UX Design</div>
            <div className="text-white/80 text-sm">Antarmuka yang intuitif dan ramah pengguna, dirancang untuk memberikan pengalaman terbaik bagi pengunjung serta mendukung pencapaian tujuan bisnis Anda secara efektif.</div>
          </div>
          <div className="border border-[#D5B5FF] rounded-xl p-6 bg-transparent flex flex-col gap-2 transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <div className="mb-2">
              <svg width="32" height="32" fill="none" stroke="#ffffff" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 21l-6-6"/><circle cx="11" cy="11" r="8"/></svg>
            </div>
            <div className="font-bold text-white text-lg">SEO Optimization</div>
            <div className="text-white/80 text-sm">Penerapan strategi kata kunci yang tepat dan penyesuaian konten yang relevan untuk meningkatkan visibilitas di search engine serta mendatangkan trafik berkualitas ke website.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AkaalCreativeAgencyServices() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full max-w-6xl mx-auto mb-16 rounded-2xl bg-gradient-to-br from-[#22A6BB] to-[#150439] p-8 md:p-14 shadow-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Section - Always Visible */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Top Left Image */}
        <div className="absolute left-0 top-0 hidden md:block z-0">
          <img src="/images/agencies-1.png" alt="Akaal Creative Agency Visual" className="w-[420px] rounded-xl -translate-x-0 -translate-y-0" />
        </div>
        {/* Right Content */}
        <div className="flex-1 z-10 flex flex-col items-end w-full">
          <div className="mb-6 w-full md:w-auto text-right">
            <div className="flex items-center gap-3 justify-end mb-8">
              <img src="/images/icon-white-rgb.png" alt="Akaal Creative Agency Logo" className="w-8 h-8" />
            </div>
            <div className="mb-0">
              <span className="text-white text-lg font-medium">Our Services:</span>
            </div>
            <div className="mb-4">
              <span className="italic text-white text-4xl font-semibold">AKAAL CREATIVE AGENCY</span>
            </div>
            <p className="text-white text-base md:text-sm max-w-xl ml-auto">
              Solusi berbasis teknologi yang dirancang untuk memperkuat fondasi digital bisnis Anda, mengoptimalkan operasional, dan menciptakan pengalaman visual yang memikat.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section - Cards Container (Hidden by default, shown on hover) */}
      <div className={`transition-all duration-500 ease-in-out ${isHovered ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="border border-[#D5B5FF] rounded-xl p-6 bg-transparent flex flex-col gap-2 transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <div className="mb-2">
              <svg width="32" height="32" fill="none" stroke="#ffffff" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l2 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7L3 9h7z"/></svg>
            </div>
            <div className="font-bold text-white text-lg">Branding & Visual Identity</div>
            <div className="text-white/80 text-sm">Membangun identitas merek yang kuat dan konsisten di setiap titik interaksi.</div>
          </div>
          <div className="border border-[#D5B5FF] rounded-xl p-6 bg-transparent flex flex-col gap-2 transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <div className="mb-2">
              <svg width="32" height="32" fill="none" stroke="#ffffff" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <div className="font-bold text-white text-lg">Creative Content Production</div>
            <div className="text-white/80 text-sm">Konten visual kreatif yang menarik dan relevan untuk memperkuat pesan brand Anda.</div>
          </div>
          <div className="border border-[#D5B5FF] rounded-xl p-6 bg-transparent flex flex-col gap-2 transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <div className="mb-2">
              <svg width="32" height="32" fill="none" stroke="#ffffff" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M16 6V4a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v2"/><rect x="8" y="6" width="8" height="8" rx="2"/><path d="M12 10v2"/></svg>
            </div>
            <div className="font-bold text-white text-lg">Digital Marketing</div>
            <div className="text-white/80 text-sm">Strategi pemasaran digital yang tepat sasaran untuk menjangkau audiens dan meningkatkan performa bisnis.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PromoSection() {
  return (
    <div className="relative w-full max-w-6xl mx-auto mb-16 rounded-2xl bg-gradient-to-br from-[#1B0B3A] to-[#2B176B] p-10 md:p-16 shadow-xl overflow-hidden flex flex-col md:flex-row items-center gap-8">
      {/* Left Content */}
      <div className="flex-1 z-10">
        <h2
          className="text-3xl md:text-4xl font-semibold mb-4 text-transparent bg-clip-text"
          style={{
        backgroundImage: "linear-gradient(90deg, #FEFFFF 0%, #2ACFEA 75%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
          }}
        >
          Start Your Journey With AKAAL
        </h2>
        <p className="text-white text-sm md:text-lg mb-8 max-w-xl">
          Setiap bisnis punya tantangan dan tujuan unik, kami siap mendengarkan dan membantu Anda menemukan solusinya.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-4 items-start md:items-center">
          <a href="#contact" className="px-6 py-2 rounded-full bg-[#6543EC] text-white font-semibold text-sm hover:bg-[#8b5cf6] transition-colors duration-200 shadow-md mb-2 md:mb-0">Tell Us Your Idea</a>
            <a href="https://wa.me/6285117326065" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#B6F0FF] text-white font-normal text-sm hover:bg-[#3FE0FF]/10 transition-colors duration-200">
            <img src="/images/whatsapp.png" alt="WhatsApp" className="w-4 h-4" style={{ filter: "brightness(0) invert(1)" }} />
            +62 851-1732-6065
            </a>
          <a href="mailto:admin@akaal.id" className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#B6F0FF] text-white font-normal text-sm hover:bg-[#3FE0FF]/10 transition-colors duration-200">
            <img src="/images/mail-inbox-app.png" alt="mail" className="w-4 h-4" style={{ filter: "brightness(0) invert(1)" }} />
            admin@akaal.id
          </a>
        </div>
      </div>
      {/* Right Image */}
      <div className="absolute top-6 right-12 bottom-0 hidden md:block z-0">
        <img src="/images/mono-akaal-white.png" alt="Akaal Logo" className="w-[340px] md:w-[360px]" />
      </div>
    </div>
  );
}

function ServiceCTA() {
  return (
    <div className="container mx-auto text-center mb-2">
      <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-[#6543EC] text-white font-semibold text-lg hover:bg-[#8b5cf6] transition-colors duration-200 shadow-md">Get Started with Us</a>
    </div>
  );
}

export default function OurServiceSection() {
  return (
    <section className="w-full py-24 flex flex-col items-center bg-transparent" id="our-service">
      <ServiceTitleText />
      <AkaalDigitalTechServices />
      <AkaalCreativeAgencyServices />
      <PromoSection />
      <ServiceCTA />
    </section>
  );
}
