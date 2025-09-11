import LpCarousel from "@/components/lp-carousel";
import GetStartedButton from "@/components/GetStartedButton";
import { metadata } from "./metadata";

export { metadata };

export default function Page() {
  return (
    <div className="relative min-h-screen text-white bg-black overflow-hidden pt-16">
      
      
      {/* Background Flares */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float-1"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-teal-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float-2"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-3"></div>
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-teal-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-4"></div>
      <div className="absolute bottom-1/4 left-1/3 w-[550px] h-[550px] bg-purple-400 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-float-5"></div>
      <div className="absolute top-3/4 right-1/3 w-[350px] h-[350px] bg-teal-300 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-float-6"></div>

       {/* Background Dots */}
       <div className="absolute inset-0 opacity-30" style={{
         backgroundImage: 'radial-gradient(circle at 0.5px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
         backgroundSize: '5px 5px'
       }}></div>

      {/* 1. Title Section */}
      <section className="relative z-10 h-100% py-20 pb-24 flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-medium mb-6 leading-tight">
            Be the <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">Game Changer</span> With
            <br />
            <span className="text-white">One Stop</span> <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(20,184,166,0.5)]">Digital Solution</span>
          </h1>
          <p className="text-xl md:text-0.5xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Transform your business with innovative digital solutions designed to help you grow faster. From branding and digital marketing to AI-powered automation, we provide everything you need to take your business to the next level.
          </p>
          <div className="flex flex-col items-center gap-2">
            <GetStartedButton />
            <button className="text-white hover:text-gray-200 text-s font-light transition-colors duration-300 underline">
              About - AKAAL
            </button>
          </div>
        </div>
      </section>

      {/* 2. Carousel Section */}
      <div className="relative z-10 pb-24">
        <LpCarousel />
      </div>

    </div>
  )
}