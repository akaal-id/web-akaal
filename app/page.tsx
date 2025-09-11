import LpCarousel from "@/components/lp-carousel";
import GetStartedButton from "@/components/GetStartedButton";
import { metadata } from "./metadata";

export { metadata };

export default function Page() {
  return (
    <div className="min-h-screen text-white akaal-bg">
      {/* 1. Title Section */}
      <section className="relative h-100% py-20 pb-24 flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-medium mb-6 leading-tight">
            Be the <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Game Changer</span> With
            <br />
            <span className="text-white">One Stop</span> <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Digital Solution</span>
          </h1>
          <p className="text-xl md:text-0.5xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transformasikan bisnis Anda dengan solusi digital inovatif. Dari branding, digital marketing, hingga AI automation—kami siap membawa bisnis Anda ke level berikutnya!
          </p>
          <div className="flex flex-col items-center gap-2">
            <GetStartedButton />
            <button className="text-white hover:text-gray-200 text-s font-light transition-colors duration-300 underline">
              See Work
            </button>
          </div>
        </div>
      </section>

      {/* 2. Carousel Section */}
      <LpCarousel />

      {/* 3. CTA Button Section - Placeholder */}
      <section className="py-20 px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals.
          </p>
          <button className="bg-akaal-primary hover:bg-akaal-primary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  )
}