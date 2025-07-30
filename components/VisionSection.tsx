// VisionSection.tsx

export default function VisionSection() {
  return (
    <section className="w-full flex flex-col md:flex-row justify-center items-center md:items-center gap-12 px-8 py-8 md:py-24 bg-transparent">
      <div className="flex-1 flex flex-col justify-center items-start max-w-xl">
        <h1 className="text-4xl md:text-4xl font-semibold mb-6 text-left leading-tight"
        style={{
        backgroundImage: "linear-gradient(90deg, #FEFFFF 0%, #C191FF 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
          }}>
          Bringing Vision to Life,<br />
          Delivering Solutions.
        </h1>
        <p className="text-lg md:text-sm text-gray-200 mb-8 text-left">
          Kami membangun kepercayaan dan memperkuat identitas. Dengan menggabungkan teknologi terkini dan inovasi kreatif, kami meningkatkan efektivitas serta jangkauan kampanye transformatif. Komitmen kami untuk memahami setiap kebutuhan unik memastikan bahwa setiap solusi yang kami hadirkan memberikan dampak nyata, beresonansi dengan audiens Anda, dan mendorong pertumbuhan yang berkelanjutan.
        </p>
        <button className="mt-2 px-7 py-3 rounded-full bg-[#6543EC] text-white font-semibold text-base hover:bg-[#8b5cf6] transition-colors duration-200 shadow-md">Tell Us Your Idea</button>
      </div>
      <div className="flex-1 flex flex-col gap-12 max-w-md w-full">
        <div className="flex items-center gap-4 transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mt-1 text-white"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
          <div>
            <div className="font-semibold text-white text-l mb-1">We're a proven partner</div>
            <div className="text-gray-300 text-base text-sm">lebih dari 100 brand telah sukses berkembang bersama kami</div>
          </div>
        </div>
        <div className="flex items-center gap-4 transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mt-1 text-white"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
          <div>
            <div className="font-semibold text-white text-l mb-1">We Make Their Brand Speak</div>
            <div className="text-gray-300 text-base text-sm">Mengubah brand menjadi suara yang kuat dan berpengaruh.</div>
          </div>
        </div>
        <div className="flex items-center gap-4 transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mt-1 text-white"><circle cx="12" cy="12" r="10"/><path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/></svg>
          <div>
            <div className="font-semibold text-white text-l mb-1">We Create Loyalist</div>
            <div className="text-gray-300 text-base text-sm">Membangun hubungan emosional yang menciptakan pelanggan setia.</div>
          </div>
        </div>
        <div className="flex items-center gap-4 transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mt-1 text-white"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 16h8"/></svg>
          <div>
            <div className="font-semibold text-white text-l mb-1">We Increase Value</div>
            <div className="text-gray-400 text-base text-sm">Mengoptimalkan strategi untuk meningkatkan daya saing dan nilai.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
