import type { Metadata } from "next";
import Background from "@/components/Background";
import StartupAnimation from "@/components/StartupAnimation";
import FadeInAnimation from "@/components/FadeInAnimation";
import CardAbout from "@/components/card-about";
import CardService from "@/components/card-service";
import CardHegira from "@/components/card-hegira";
import JourneyCard from "@/components/card-journey";
import SponsorSlider from "@/components/sponsor-slider";
import { User, ArrowDown, Eye, Target, BadgePlus, Blocks, Handshake, UsersRound, Unplug, Volume2, Settings } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Akaal - Digital Innovation & Technology Solutions",
  description: "Learn about Akaal's mission to empower businesses through innovative technology solutions. Discover our team of passionate professionals dedicated to digital transformation and excellence.",
  keywords: [
    "about akaal",
    "company mission",
    "digital innovation team",
    "technology professionals",
    "business empowerment",
    "digital transformation experts",
    "innovative solutions",
    "technology excellence",
    "Akaal team",
    "company values"
  ],
  openGraph: {
    title: "About Akaal - Digital Innovation & Technology Solutions",
    description: "Learn about Akaal's mission to empower businesses through innovative technology solutions. Discover our team of passionate professionals dedicated to digital transformation and excellence.",
    url: "https://akaal.id/about",
    siteName: "Akaal",
    images: [
      {
        url: "/images/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Akaal - Digital Innovation & Technology Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Akaal - Digital Innovation & Technology Solutions",
    description: "Learn about Akaal's mission to empower businesses through innovative technology solutions. Discover our team of passionate professionals dedicated to digital transformation and excellence.",
    images: ["/images/og-about.jpg"],
    creator: "@akaal",
  },
  alternates: {
    canonical: "https://akaal.id/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StartupAnimation />
      <Background variant="top-radial" />
      
      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-4 pt-32">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Tag */}
          <FadeInAnimation delay={200}>
          <div className="flex justify-center mb-8">
                  <div className="inline-flex gap-2 px-6 py-4 rounded-full text-sm font-medium text-purple-100 bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
                    <img 
                      src="/images/logo-fullcolor-rgb.png" 
                      alt="AKAAL Logo" 
                      className="h-6 w-auto filter brightness-0 invert"
                    />
                   
                  </div>
                </div>
          </FadeInAnimation>

          {/* Main Title */}
          <FadeInAnimation delay={400}>
            <h1 
              className="text-4xl md:text-[64px] lg:text-[64px] font-medium text-white mb-8 leading-[1.1] tracking-[-0.05em]"
              style={{ fontFamily: 'Plus Jakarta Sans' }}
            >
              Bringing Vision to Life,
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Delivering Solutions.
              </span>
            </h1>
          </FadeInAnimation>
          
          {/* Subtitle */}
          <FadeInAnimation delay={600}>
            <p 
              className="text-sm md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              We build trust and strengthen brand identity. By combining cutting-edge technology with creative innovation, 
              we enhance the effectiveness and reach of transformative campaigns. Our commitment to understanding each 
              unique need ensures that every solution we deliver creates real impact, resonates with your audience, 
              and drives sustainable growth.
            </p>
          </FadeInAnimation>
  

        
        </div>
      </div>

      {/* Sponsor Section */}
      <div className="relative z-10 py-20 px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="mx-auto">
          <FadeInAnimation delay={1000}>
            <div className="text-center space-y-8">
              
              {/* Sponsor Slider */}
              <SponsorSlider />
            </div>
          </FadeInAnimation>
        </div>
      </div>

      {/* First Section - Value Propositions */}
      <div id="first-section" className="relative z-10 py-32 pt-10 pb-20 px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="max-w-[1574px] mx-auto">


          {/* 4 Value Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "We're a Proven Partner",
                description: "Over 100 brands have successfully grown with us, building trust through consistent results and long-term partnerships.",
                icon: "shield"
              },
              {
                title: "We Make Their Brand Speak",
                description: "Transforming brands into powerful and influential voices that resonate with audiences and drive meaningful connections.",
                icon: "speech"
              },
              {
                title: "We Create Loyalists", 
                description: "Building emotional connections that create loyal customers who become advocates for your brand and drive long-term growth.",
                icon: "crown"
              },
              {
                title: "We Increase Value",
                description: "Optimizing strategies to enhance competitiveness and value, delivering impactful measurable results.",
                icon: "arrow"
              }
            ].map((value, index) => (
              <FadeInAnimation key={index} delay={600 + (index * 200)}>
                <CardAbout
                  number={String(index + 1).padStart(2, '0')}
                  title={value.title}
                  description={value.description}
                  index={index}
                  iconType={value.icon}
                />
              </FadeInAnimation>
            ))}
          </div>
        </div>
      </div>


      {/* Tabs and Content Sections */}
      <div className="relative z-10 py-20 px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="max-w-[1574px] mx-auto">

          {/* About Section */}
          <div className="mb-20 mt-20">
            <FadeInAnimation delay={800}>
              <div className="space-y-8">
                {/* First Row - Tag (Centered) */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full text-sm font-medium text-white-100 bg-white/10 border border-white-500/20 backdrop-blur-sm w-fit">
                        <User className="h-4 w-4" />
                        About AKAAL
                </div>
                
                {/* Second Row - Title and Text in Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Left Column - Title */}
                  <div>
                    <h2 
                      className="text-4xl md:text-[40px] lg:text-[40px] font-medium text-white leading-[1.2] tracking-[-0.05em]"
                      style={{ fontFamily: 'Plus Jakarta Sans' }}
                    >
                      Be the Game Changer with One
                      <br />
                      Stop Digi-Solution,
                      <br />
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        driving innovation and transformation.
                      </span>
                    </h2>
                  </div>
                  
                  {/* Right Column - Description */}
                  <div className="flex items-center">
                    <p 
                      className="text-gray-300 text-base md:text-[20px] leading-[1.4] tracking-[-0.02em]"
                      style={{ fontFamily: 'Inter' }}
                    >
                      AKAAL is an innovative partner ready to bring businesses into the digital era with cutting-edge technology. Based in Jakarta, we provide the best solutions in digital marketing, creative branding, IT solutions, and AI automation, custom-designed to meet each client&apos;s unique needs. As a strategic partner, we are committed to driving digital success through expertise, creativity, and the latest technology.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInAnimation>
          </div>

          {/* Vision & Mission Section - 3 Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            
            {/* Column 1: Vision and Image */}
            <div className="lg:col-span-1 flex flex-col gap-4">
              {/* Vision Container - Top */}
              <div id="vision" className="flex">
                <FadeInAnimation delay={1200}>
                  <div className="relative rounded-xl h-[350px] overflow-hidden border border-white/10 hover: transition-all duration-300 w-full group">
                    {/* Purple radial blur at top */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[320px] opacity-40 group-hover:opacity-100 transition-opacity duration-300" style={{
                      background: 'radial-gradient(ellipse at center top, rgba(139,92,246,0.3) 0%, rgba(139,92,246,0.1) 40%, rgba(139,92,246,0.02) 70%, transparent 100%)',
                      filter: 'blur(10px)',
                      mixBlendMode: 'screen',
                      zIndex: 1
                    }}></div>
                    
                    {/* Grid background */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      style={{ 
                        zIndex: 2,
                        backgroundImage: `
                          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px'
                      }}
                    />
                    <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start h-full">
                      {/* Tag */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full text-sm font-medium text-purple-100 bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm w-fit">
                        <Eye className="h-4 w-4" />
                        Our Vision
                      </div>
                      
                      {/* Title */}
                      <h3 
                        className="text-xl md:text-3xl mt-8 font-medium text-white leading-tight"
                        style={{ fontFamily: 'Plus Jakarta Sans' }}
                      >
                        To build a collaborative, integrated, and innovative digital ecosystem that creates a wider positive impact.
                      </h3>
                    </div>
                  </div>
                </FadeInAnimation>
              </div>

              {/* Image Container - Bottom */}
              <div id="image" className="flex">
                <FadeInAnimation delay={1300}>
                  <div className="relative rounded-xl h-[371px] overflow-hidden border border-white/10 hover: transition-all duration-300 w-full group">
                    {/* Vision background image overlay */}
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 group-hover:opacity-80 transition-opacity duration-300 transform scale-x-[-1]" style={{ backgroundImage: 'url(/images/vision-bg.png)', zIndex: 1 }} />
                    
                    <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-24 flex justify-center items-center h-full">
                      <div className="relative max-h-7xl">
                        {/* Glow effect behind image - only on hover */}
                        <div className="absolute inset-0 bg-white/10 rounded-full blur-xl scale-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <img 
                          src="/images/kv-cloth.png" 
                          alt="Vision Illustration"
                          className="relative z-10 h-full max-h-xl animate-spin"
                          style={{ animationDuration: '60s' }}
                        />
                      </div>
                    </div>
                  </div>
                </FadeInAnimation>
              </div>
            </div>

            {/* Columns 2-3: Mission Container */}
            <div id="mission" className="flex lg:col-span-2">
              <FadeInAnimation delay={1400}>
                <div className="relative rounded-xl overflow-hidden border border-white/10 hover:transition-all duration-300 w-full group">
                  {/* Cyan radial blur at top */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] opacity-40 group-hover:opacity-100 transition-opacity duration-300" style={{
                    background: 'radial-gradient(ellipse at center top, rgba(20,184,166,0.3) 0%, rgba(20,184,166,0.1) 40%, rgba(20,184,166,0.02) 70%, transparent 100%)',
                    filter: 'blur(10px)',
                    mixBlendMode: 'screen',
                    zIndex: 1
                  }}></div>
                  
                  {/* Grid background */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ 
                      zIndex: 2,
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '60px 60px'
                    }}
                  />
                  <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12">
                      {/* Tag */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full text-sm font-medium text-cyan-100 bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm w-fit">
                        <Target className="h-4 w-4" />
                        Our Mission
                      </div>
                    
                    {/* Grid 2x3: Title + Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                      {/* First row, first column - Title */}
                      <div className="flex flex-col justify-center  ">
                        <h3 
                          className="text-xl md:text-2xl font-medium text-white leading-tight"
                          style={{ fontFamily: 'Plus Jakarta Sans' }}
                        >
                          We are committed to delivering innovative digital solutions, fostering strategic partnerships, and empowering businesses through technology and creativity.
                        </h3>
                      </div>
                      
                      {/* First row, second column - First Card */}
                      <div className="bg-black/20 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 h-[180px] flex flex-col">
                        <div className="mb-4 flex">
                          <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                            <BadgePlus className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <div className="flex-1"></div>
                        <h3 className="text-base font-semibold text-white leading-tight mb-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                          Creating Digital Solutions
                        </h3>
                        <p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Inter' }}>
                          Developing technologies that align with the evolving needs of businesses, industries, and communities.
                        </p>
                      </div>
                      
                      {/* Second row - Two Cards */}
                      <div className="bg-black/20 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 h-[180px] flex flex-col">
                        <div className="mb-4 flex">
                          <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                            <Blocks className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <div className="flex-1"></div>
                        <h3 className="text-base font-semibold text-white leading-tight mb-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                          Building Long-Term Partnerships
                        </h3>
                        <p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Inter' }}>
                          Providing excellent services to establish sustainable business relationships and connections.
                        </p>
                      </div>
                      
                      <div className="bg-black/20 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 h-[180px] flex flex-col">
                        <div className="mb-4 flex">
                          <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                            <Handshake className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <div className="flex-1"></div>
                        <h3 className="text-base font-semibold text-white leading-tight mb-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                          Becoming a Strategic Partner
                        </h3>
                        <p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Inter' }}>
                          Leading digital transformation to boost productivity and strengthen business competitiveness.
                        </p>
                      </div>
                      
                      {/* Third row - Two Cards */}
                      <div className="bg-black/20 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 h-[180px] flex flex-col">
                        <div className="mb-4 flex">
                          <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                            <UsersRound className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <div className="flex-1"></div>
                        <h3 className="text-base font-semibold text-white leading-tight mb-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                          Innovating for Social Impact
                        </h3>
                        <p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Inter' }}>
                          Designing applications that support entrepreneurship growth and address social challenges.
                        </p>
                      </div>
                      
                      <div className="bg-black/20 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 h-[180px] flex flex-col">
                        <div className="mb-4 flex">
                          <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                            <Unplug className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <div className="flex-1"></div>
                        <h3 className="text-base font-semibold text-white leading-tight mb-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                          Integrating Sales & Marketing
                        </h3>
                        <p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Inter' }}>
                          Optimizing digital strategies with precise data-driven insights for more effective results.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInAnimation>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="relative z-10 py-20 px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="max-w-[1574px] mx-auto">
          <div className="space-y-12">
            {/* Tag */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-purple-100 bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
                <Settings className="h-4 w-4" />
                <span style={{ fontFamily: 'Inter' }}>Our Services</span>
              </div>
            </div>
            
            {/* Title */}
            <div className="text-center">
              <h2 
                className="text-4xl md:text-[40px] lg:text-[40px] font-medium text-white leading-[1.2] tracking-[-0.05em]"
                style={{ fontFamily: 'Plus Jakarta Sans' }}
              >
                Comprehensive Digital Solutions
                <br />
                <span className="bg-gradient-to-r from-teal-400 to-teal-800 bg-clip-text text-transparent">
                  for Your Business
                </span>
              </h2>
              
              {/* Subtitle */}
              <p 
                className="text-gray-300 text-base md:text-xl leading-relaxed max-w-4xl mx-auto mt-6"
                style={{ fontFamily: 'Inter' }}
              >
                Technology-driven solutions designed to strengthen your business digital foundation, optimize operations, and create captivating visual experiences that drive growth and engagement.
              </p>
            </div>
            
            {/* Grid 3x3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Slots 1-2: Combined Hegira Card */}
              <div className="col-span-1 md:col-span-2 lg:col-span-2">
                <FadeInAnimation delay={400}>
                  <CardHegira />
                </FadeInAnimation>
              </div>
              
              {/* Slots 3-9: Service Cards */}
              {[
                
                {
                  title: "High-Conversion Landing Pages",
                  description: "Responsive and strategic designs crafted to boost sales, enhance engagement, and build deeper connections with your audience through optimized user experience and conversion-focused layouts.",
                  image: "/images/service-card.png",
                  tag: "digital"
                },
                {
                  title: "Website Maintenance",
                  description: "Comprehensive services including security updates, routine performance checks, and bug fixes to ensure your website remains stable, fast, and secure at all times with monitoring and optimization.",
                  image: "/images/service-card-2.png",
                  tag: "digital"
                },
                {
                  title: "Professional UI/UX Design",
                  description: "Intuitive and user-friendly interfaces designed to deliver the best experience for visitors while effectively supporting your business goals through thoughtful design and seamless user journeys.",
                  image: "/images/service-card-3.png",
                  tag: "digital"
                },
                {
                  title: "SEO Optimization",
                  description: "Strategic keyword implementation and relevant content optimization to enhance search engine visibility and drive quality traffic to your website through proven SEO techniques and continuous monitoring.",
                  image: "/images/service-card-4.png",
                  tag: "digital"
                },
                {
                  title: "Branding and Visual Identity",
                  description: "Complete brand development including logo design, brand guidelines, packaging design, brand strategy, typography systems, business collateral, and comprehensive brand experience across physical and digital touchpoints.",
                  image: "/images/service-card-5.png",
                  tag: "agency"
                },
                {
                  title: "Creative Content Production",
                  description: "Professional content creation including photo and video production, motion graphics, website design, infographics, data visualization, 3D rendering, AR filters, and curated user-generated content for maximum engagement.",
                  image: "/images/service-card-6.png",
                  tag: "agency"
                },
                {
                  title: "Digital Marketing",
                  description: "Comprehensive digital marketing solutions including social media advertising across Meta, TikTok, and LinkedIn platforms, influencer campaigns, email marketing automation, SEO strategy, Google Ads management, and detailed analytics tracking.",
                  image: "/images/service-card-7.png",
                  tag: "agency"
                }
              ].map((service, index) => (
                <FadeInAnimation key={index} delay={600 + (index * 100)}>
                  <CardService
                    number={String(index + 1).padStart(2, '0')}
                    title={service.title}
                    description={service.description}
                    image={service.image}
                    tag={service.tag}
                    index={index}
                  />
                </FadeInAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How Section */}
      <div className="relative z-10 py-20 px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="max-w-[1574px] mx-auto">
          <div className="space-y-12">
            {/* Tag */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-purple-100 bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
                <span style={{ fontFamily: 'Inter' }}>How AKAAL Handle Your Brand</span>
              </div>
            </div>
            
            {/* Title and Description */}
            <div className="text-center max-w-4xl mx-auto">
              <h2 
                className="text-4xl md:text-[48px] lg:text-[48px] font-medium text-white leading-[1.2] tracking-[-0.05em] mb-6"
                style={{ fontFamily: 'Plus Jakarta Sans' }}
              >
                Crafting Experiences, <span className="bg-gradient-to-r from-purple-400 to-purple-800 bg-clip-text text-transparent">Empowering Impact.</span>
              </h2>
              
              <p 
                className="text-gray-300 text-base md:text-xl leading-relaxed"
                style={{ fontFamily: 'Inter' }}
              >
                AKAAL helps brands grow through creative journeys, marketing strategies, and strong visual identity. We bring ideas to life, build emotional connections, and create impactful campaigns. Every step we design delivers authentic and memorable brand stories.
              </p>
            </div>
            
            {/* Journey Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FadeInAnimation delay={400}>
                <JourneyCard
                  title="Creative Journey"
                  description="From mood boards to prototypes – we make ideas tangible"
                  image="/images/hexa.png"
                  index={0}
                />
              </FadeInAnimation>
              
              <FadeInAnimation delay={600}>
                <JourneyCard
                  title="Marketing Journey"
                  description="Omnichannel campaigns that blend storytelling and ROI"
                  image="/images/arrow-up.png"
                  index={1}
                />
              </FadeInAnimation>
              
              <FadeInAnimation delay={800}>
                <JourneyCard
                  title="Branding Journey"
                  description="Building emotional connections through logos, voice, and visual ecosystems"
                  image="/images/Star.png"
                  index={2}
                />
              </FadeInAnimation>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}