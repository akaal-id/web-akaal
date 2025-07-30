import React from "react";

export default function AksessSection() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center py-24 px-8 md:px-0 overflow-hidden"
      style={{
        minHeight: "600px",
        background:
          "linear-gradient(120deg, #6C3DD1 0%, #2A1A5E 60%, #4F8CFF 100%)",
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center w-full max-w-4xl mx-auto">
        {/* Logo */}
        <img
          src="/images/aksess-logo.png"
          alt="Aksess Logo"
          className="w-36 mb-6 object-contain"
          style={{ alignSelf: "flex-start" }}
        />
        {/* Title & Description Left-Aligned */}
        <div className="w-full flex flex-col items-start">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-left max-w-2xl"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FEFFFF 0%, #B6F0FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The Ultimate Ticketing Solution for Seamless Events.
          </h2>
          <p className="text-base md:text-base text-white/80 mb-12 text-left font-normal max-w-2xl">
            Kelola dan jual tiket event dengan lebih mudah, cepat, dan aman dengan
            AKSESS platform ticketing inovatif yang dirancang untuk penyelenggara
            event modern.
          </p>
        </div>
        {/* Features */}
        <div className="flex flex-col md:flex-row gap-8 w-full mb-10">
          <div className="flex-1 flex items-center gap-3 transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <span className="text-2xl text-[#B6F0FF]">
              <img
                src="/images/ticket.png"
                alt="Ticket Icon"
                width={48}
                height={48}
                style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
              />
            </span>
            <div>
              <h3 className="font-semibold text-lg text-white mb-1">
                Pemesanan Tiket Mudah
              </h3>
              <p className="text-white/70 text-sm">
                Sistem whitelabel dengan kategori tiket yang fleksibel
              </p>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-4 transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <span className="text-2xl text-[#B6F0FF]">
              <img
                src="/images/dashboard.png"
                alt="Dashboard Icon"
                width={32}
                height={32}
                style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
              />
            </span>
            <div>
              <h3 className="font-semibold text-lg text-white mb-1">
                Dashboard Manajemen
              </h3>
              <p className="text-white/70 text-sm">
                Pantau penjualan, pemesanan, dan check-in dalam satu tempat
              </p>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-4 transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <span className="text-2xl text-[#B6F0FF]">
              <img
                src="/images/credit-card.png"
                alt="Credit Card Icon"
                width={36}
                height={36}
                style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
              />
            </span>
            <div>
              <h3 className="font-semibold text-lg text-white mb-1">
                Pembayaran Terintegrasi
              </h3>
              <p className="text-white/70 text-sm">
                Dukungan berbagai metode pembayaran yang aman dan efisien
              </p>
            </div>
          </div>
        </div>
        {/* CTA Button */}
        <div className="w-full flex justify-start">
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-full text-white font-normal text-lg hover:opacity-90 transition-colors duration-200 mt-2"
          style={{
            background: "linear-gradient(90deg, #9747FF 0%, #5B2B99 100%)",
            color: "#fff",
          }}>
            Explore Aksess
          </a>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          width: "200%",
          maxWidth: "1920px",
          minWidth: "564px",
          height: "auto",
          zIndex: 0,
          opacity: 0.16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/images/aksess-black-mono.svg"
          alt="Aksess Black Mono Overlay"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>
    </section>
  );
}
