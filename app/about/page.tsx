import type { Metadata } from "next";
import Background from "@/components/Background";
import StartupAnimation from "@/components/StartupAnimation";
import FadeInAnimation from "@/components/FadeInAnimation";
import CardAbout from "@/components/card-about";
import CardService from "@/components/card-service";
import CardHegira from "@/components/card-hegira";
import JourneyCard from "@/components/card-journey";
import SponsorSlider from "@/components/sponsor-slider";
import { User, Eye, Target, BadgePlus, Blocks, Handshake, UsersRound, Unplug, Settings } from "lucide-react";
import styles from "./page.module.css";

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
  const valueProps = [
    {
      title: "We're a Proven Partner",
      description:
        "Over 100 brands have successfully grown with us, building trust through consistent results and long-term partnerships.",
      icon: "shield",
    },
    {
      title: "We Make Their Brand Speak",
      description:
        "Transforming brands into powerful and influential voices that resonate with audiences and drive meaningful connections.",
      icon: "speech",
    },
    {
      title: "We Create Loyalists",
      description:
        "Building emotional connections that create loyal customers who become advocates for your brand and drive long-term growth.",
      icon: "crown",
    },
    {
      title: "We Increase Value",
      description:
        "Optimizing strategies to enhance competitiveness and value, delivering impactful measurable results.",
      icon: "arrow",
    },
  ];

  const services = [
    {
      title: "High-Conversion Landing Pages",
      description:
        "Responsive and strategic designs crafted to boost sales, enhance engagement, and build deeper connections with your audience through optimized user experience and conversion-focused layouts.",
      image: "/images/service-card.png",
      tag: "digital",
    },
    {
      title: "Website Maintenance",
      description:
        "Comprehensive services including security updates, routine performance checks, and bug fixes to ensure your website remains stable, fast, and secure at all times with monitoring and optimization.",
      image: "/images/service-card-2.png",
      tag: "digital",
    },
    {
      title: "Professional UI/UX Design",
      description:
        "Intuitive and user-friendly interfaces designed to deliver the best experience for visitors while effectively supporting your business goals through thoughtful design and seamless user journeys.",
      image: "/images/service-card-3.png",
      tag: "digital",
    },
    {
      title: "SEO Optimization",
      description:
        "Strategic keyword implementation and relevant content optimization to enhance search engine visibility and drive quality traffic to your website through proven SEO techniques and continuous monitoring.",
      image: "/images/service-card-4.png",
      tag: "digital",
    },
    {
      title: "Branding and Visual Identity",
      description:
        "Complete brand development including logo design, brand guidelines, packaging design, brand strategy, typography systems, business collateral, and comprehensive brand experience across physical and digital touchpoints.",
      image: "/images/service-card-5.png",
      tag: "agency",
    },
    {
      title: "Creative Content Production",
      description:
        "Professional content creation including photo and video production, motion graphics, website design, infographics, data visualization, 3D rendering, AR filters, and curated user-generated content for maximum engagement.",
      image: "/images/service-card-6.png",
      tag: "agency",
    },
    {
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing solutions including social media advertising across Meta, TikTok, and LinkedIn platforms, influencer campaigns, email marketing automation, SEO strategy, Google Ads management, and detailed analytics tracking.",
      image: "/images/service-card-7.png",
      tag: "agency",
    },
  ];

  return (
    <div className={styles.pageRoot}>
      <StartupAnimation />
      <Background variant="top-radial" />
      
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroInner}>
          
          {/* Tag */}
          <FadeInAnimation delay={200}>
            <div className={styles.heroTagWrap}>
              <div className={styles.heroTag}>
                <img src="/images/logo-fullcolor-rgb.png" alt="AKAAL Logo" className={styles.heroTagLogo} />
              </div>
            </div>
          </FadeInAnimation>

          {/* Main Title */}
          <FadeInAnimation delay={400}>
            <h1 className={styles.heroTitle}>
              Bringing Vision to Life,
              <br />
              <span className={styles.heroTitleGradient}>Delivering Solutions.</span>
            </h1>
          </FadeInAnimation>
          
          {/* Subtitle */}
          <FadeInAnimation delay={600}>
            <p className={styles.heroSubtitle}>
              We build trust and strengthen brand identity. By combining cutting-edge technology with creative innovation, 
              we enhance the effectiveness and reach of transformative campaigns. Our commitment to understanding each 
              unique need ensures that every solution we deliver creates real impact, resonates with your audience, 
              and drives sustainable growth.
            </p>
          </FadeInAnimation>
  

        
        </div>
      </div>

      {/* Sponsor Section */}
      <div className={styles.sponsorSection}>
        <div className={styles.sponsorInner}>
          <FadeInAnimation delay={1000}>
            <div className={styles.sponsorContent}>
              
              {/* Sponsor Slider */}
              <SponsorSlider />
            </div>
          </FadeInAnimation>
        </div>
      </div>

      {/* First Section - Value Propositions */}
      <div id="first-section" className={styles.valueSection}>
        <div className={styles.maxContainer}>
          {/* 4 Value Cards */}
          <div className={styles.valueGrid}>
            {valueProps.map((value, index) => (
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
      <div className={styles.tabsContentSection}>
        <div className={styles.maxContainer}>

          {/* About Section */}
          <div id="about" className={styles.aboutSection}>
            <FadeInAnimation delay={800}>
              <div className={styles.aboutStack}>
                {/* First Row - Tag (Centered) */}
                <div className={styles.aboutTag}>
                  <User className={styles.smallIcon} />
                  About AKAAL
                </div>
                
                {/* Second Row - Title and Text in Columns */}
                <div className={styles.aboutGrid}>
                  {/* Left Column - Title */}
                  <div>
                    <h2 className={styles.aboutTitle}>
                      Be the Game Changer with One
                      <br />
                      Stop Digi-Solution,
                      <br />
                      <span className={styles.aboutTitleGradient}>driving innovation and transformation.</span>
                    </h2>
                  </div>
                  
                  {/* Right Column - Description */}
                  <div className={styles.aboutDescriptionWrap}>
                    <p className={styles.aboutDescription}>
                      AKAAL is an innovative partner ready to bring businesses into the digital era with cutting-edge technology. Based in Jakarta, we provide the best solutions in digital marketing, creative branding, IT solutions, and AI automation, custom-designed to meet each client&apos;s unique needs. As a strategic partner, we are committed to driving digital success through expertise, creativity, and the latest technology.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInAnimation>
          </div>

          {/* Vision & Mission Section - 3 Column Grid */}
          <div className={styles.visionMissionGrid}>
            
            {/* Column 1: Vision and Image */}
            <div className={styles.visionColumn}>
              {/* Vision Container - Top */}
              <div id="vision" className={styles.visionContainer}>
                <FadeInAnimation delay={1200}>
                  <div className={styles.visionCard}>
                    {/* Purple radial blur at top */}
                    <div className={styles.visionBlur}></div>
                    
                    {/* Grid background */}
                    <div className={styles.gridOverlay} />
                    <div className={styles.visionCardContent}>
                      {/* Tag */}
                      <div className={styles.visionTag}>
                        <Eye className={styles.smallIcon} />
                        Our Vision
                      </div>
                      
                      {/* Title */}
                      <h3 className={styles.visionTitle}>
                        To build a collaborative, integrated, and innovative digital ecosystem that creates a wider positive impact.
                      </h3>
                    </div>
                  </div>
                </FadeInAnimation>
              </div>

              {/* Image Container - Bottom */}
              <div id="image" className={styles.imageContainer}>
                <FadeInAnimation delay={1300}>
                  <div className={styles.imageCard}>
                    {/* Vision background image overlay */}
                    <div className={styles.imageBgOverlay} />
                    
                    <div className={styles.imageCardContent}>
                      <div className={styles.imageFigureWrap}>
                        {/* Glow effect behind image - only on hover */}
                        <div className={styles.imageGlow}></div>
                        <img src="/images/kv-cloth.png" alt="Vision Illustration" className={styles.visionImage} />
                      </div>
                    </div>
                  </div>
                </FadeInAnimation>
              </div>
            </div>

            {/* Columns 2-3: Mission Container */}
            <div id="mission" className={styles.missionContainer}>
              <FadeInAnimation delay={1400}>
                <div className={styles.missionCard}>
                  {/* Cyan radial blur at top */}
                  <div className={styles.missionBlur}></div>
                  
                  {/* Grid background */}
                  <div className={styles.gridOverlay} />
                  <div className={styles.missionCardContent}>
                      {/* Tag */}
                      <div className={styles.missionTag}>
                        <Target className={styles.smallIcon} />
                        Our Mission
                      </div>
                    
                    {/* Grid 2x3: Title + Cards */}
                    <div className={styles.missionGrid}>
                      {/* First row, first column - Title */}
                      <div className={styles.missionTitleWrap}>
                        <h3 className={styles.missionTitle}>
                          We are committed to delivering innovative digital solutions, fostering strategic partnerships, and empowering businesses through technology and creativity.
                        </h3>
                      </div>
                      
                      {/* First row, second column - First Card */}
                      <div className={styles.missionItemCard}>
                        <div className={styles.missionItemIconWrapOuter}>
                          <div className={styles.missionItemIconWrap}>
                            <BadgePlus className={styles.smallIcon} />
                          </div>
                        </div>
                        <div className={styles.spacer}></div>
                        <h3 className={styles.missionItemTitle}>
                          Creating Digital Solutions
                        </h3>
                        <p className={styles.missionItemDescription}>
                          Developing technologies that align with the evolving needs of businesses, industries, and communities.
                        </p>
                      </div>
                      
                      {/* Second row - Two Cards */}
                      <div className={styles.missionItemCard}>
                        <div className={styles.missionItemIconWrapOuter}>
                          <div className={styles.missionItemIconWrap}>
                            <Blocks className={styles.smallIcon} />
                          </div>
                        </div>
                        <div className={styles.spacer}></div>
                        <h3 className={styles.missionItemTitle}>
                          Building Long-Term Partnerships
                        </h3>
                        <p className={styles.missionItemDescription}>
                          Providing excellent services to establish sustainable business relationships and connections.
                        </p>
                      </div>
                      
                      <div className={styles.missionItemCard}>
                        <div className={styles.missionItemIconWrapOuter}>
                          <div className={styles.missionItemIconWrap}>
                            <Handshake className={styles.smallIcon} />
                          </div>
                        </div>
                        <div className={styles.spacer}></div>
                        <h3 className={styles.missionItemTitle}>
                          Becoming a Strategic Partner
                        </h3>
                        <p className={styles.missionItemDescription}>
                          Leading digital transformation to boost productivity and strengthen business competitiveness.
                        </p>
                      </div>
                      
                      {/* Third row - Two Cards */}
                      <div className={styles.missionItemCard}>
                        <div className={styles.missionItemIconWrapOuter}>
                          <div className={styles.missionItemIconWrap}>
                            <UsersRound className={styles.smallIcon} />
                          </div>
                        </div>
                        <div className={styles.spacer}></div>
                        <h3 className={styles.missionItemTitle}>
                          Innovating for Social Impact
                        </h3>
                        <p className={styles.missionItemDescription}>
                          Designing applications that support entrepreneurship growth and address social challenges.
                        </p>
                      </div>
                      
                      <div className={styles.missionItemCard}>
                        <div className={styles.missionItemIconWrapOuter}>
                          <div className={styles.missionItemIconWrap}>
                            <Unplug className={styles.smallIcon} />
                          </div>
                        </div>
                        <div className={styles.spacer}></div>
                        <h3 className={styles.missionItemTitle}>
                          Integrating Sales & Marketing
                        </h3>
                        <p className={styles.missionItemDescription}>
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

      {/* Brand Handling Section (moved here) */}
      <div id="brand-handling" className={styles.brandSection}>
        <div className={styles.maxContainer}>
          <div className={styles.brandStack}>
            {/* Tag */}
            <div className={styles.centered}>
              <div className={styles.brandTag}>
                <span>Brand Handling</span>
              </div>
            </div>
            
            {/* Title and Description */}
            <div className={styles.brandHead}>
              <h2 className={styles.brandTitle}>
                Crafting Experiences, <span className={styles.brandTitleGradient}>Empowering Impact.</span>
              </h2>
              
              <p className={styles.brandDescription}>
                AKAAL helps brands grow through creative journeys, marketing strategies, and strong visual identity. We bring ideas to life, build emotional connections, and create impactful campaigns. Every step we design delivers authentic and memorable brand stories.
              </p>
            </div>
            
            {/* Journey Cards */}
            <div className={styles.journeyGrid}>
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

      {/* Our Services Section */}
      <div id="services" className={styles.servicesSection}>
        <div className={styles.maxContainer}>
          <div className={styles.servicesStack}>
            {/* Tag */}
            <div className={styles.centered}>
              <div className={styles.servicesTag}>
                <Settings className={styles.smallIcon} />
                <span>Our Services</span>
              </div>
            </div>
            
            {/* Title */}
            <div className={styles.servicesHead}>
              <h2 className={styles.servicesTitle}>
                Comprehensive Digital Solutions
                <br />
                <span className={styles.servicesTitleGradient}>for Your Business</span>
              </h2>
              
              {/* Subtitle */}
              <p className={styles.servicesDescription}>
                Technology-driven solutions designed to strengthen your business digital foundation, optimize operations, and create captivating visual experiences that drive growth and engagement.
              </p>
            </div>
            
            {/* Grid 3x3 */}
            <div className={styles.servicesGrid}>
              {/* Slots 1-2: Combined Hegira Card */}
              <div className={styles.hegiraSpan}>
                <FadeInAnimation delay={400}>
                  <CardHegira />
                </FadeInAnimation>
              </div>
              
              {/* Slots 3-9: Service Cards */}
              {services.map((service, index) => (
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
      
    </div>
  );
}