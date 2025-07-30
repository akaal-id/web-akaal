import React from "react";

export default function AboutAkaalSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center py-36 px-4 md:px-0 overflow-hidden" style={{ minHeight: '600px', background: 'radial-gradient(circle, #492281 0%, #040016 70%)' }}>
      {/* Triangle Overlay */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden" style={{width: '1080px', zIndex: 1}}>
        <img
          src="/images/triangle-gradient-big.png"
          alt="Triangle Overlay"
          className="w-full"
          style={{ minWidth: '360px' }}
        />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-center"
        style={{
        backgroundImage: "linear-gradient(90deg, #FEFFFF 0%, #2ACFEA 75%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
          }}>
          <span className="text-white">Be the Game Changer with <br/> One Stop Digi-Solution.</span>
        </h2>
        <div className="flex justify-center items-center mb-4 w-full">
          <img src="/images/bulb-vector.png" alt="Bulb Vector" className="w-[340px] md:w-[420px] lg:w-[480px]" style={{zIndex:2}} />
        </div>
        <p className="text-sm md:text-sm text-white/80 mb-8 text-center max-w-2xl mx-auto font-normal px-4">
          Kami adalah mitra inovatif yang siap membawa bisnis Anda ke era digital dengan teknologi mutakhir. Berbasis di Jakarta, Akaal menghadirkan solusi terbaik dalam digital marketing, branding kreatif, IT solutions, dan AI automation yang dirancang khusus untuk memenuhi kebutuhan unik setiap klien. Sebagai partner strategis, kami berkomitmen untuk mendorong kesuksesan digital Anda melalui keahlian, kreativitas, dan teknologi terbaru.
        </p>
        <a
          href="#about"
          className="inline-block px-8 py-3 rounded-full font-semibold text-base hover:opacity-90 transition-colors duration-200 shadow-md"
          style={{
            background: "linear-gradient(90deg, #22A6BB 0%, #187584 100%)",
            color: "#fff",
          }}
        >
          About AKAAL
        </a>
      </div>
    </section>
  );
}
