export interface Project {
  id: number
  category: "agency" | "social media management" | "KV" | "Digital"
  title: string
  company: string
  slug: string
  imageSrc: string
  description: string
  gradientFrom: string
  gradientTo: string
}

export const projects: Project[] = [
  // Digital Projects (3)
  {
    id: 1,
    category: "Digital",
    title: "E-commerce Platform Redesign",
    company: "TechFlow Solutions",
    slug: "ecommerce-platform-redesign",
    imageSrc: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=800&fit=crop&crop=center",
    description: "Complete redesign of a modern e-commerce platform with enhanced user experience and mobile-first approach.",
    gradientFrom: "#0f172a",
    gradientTo: "#3b82f6"
  },
  {
    id: 2,
    category: "Digital",
    title: "Mobile Banking App",
    company: "FinTech Innovations",
    slug: "mobile-banking-app",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=800&fit=crop&crop=center",
    description: "Secure and intuitive mobile banking application with advanced security features and seamless user interface.",
    gradientFrom: "#1e293b",
    gradientTo: "#10b981"
  },
  {
    id: 3,
    category: "Digital",
    title: "SaaS Dashboard Interface",
    company: "CloudSync Inc",
    slug: "saas-dashboard-interface",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=800&fit=crop&crop=center",
    description: "Comprehensive dashboard interface for SaaS platform with real-time analytics and customizable widgets.",
    gradientFrom: "#7c3aed",
    gradientTo: "#ec4899"
  },
  
  // Agency Projects (4)
  {
    id: 4,
    category: "agency",
    title: "Brand Identity & Strategy",
    company: "Creative Minds Co",
    slug: "brand-identity-strategy",
    imageSrc: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=800&fit=crop&crop=center",
    description: "Complete brand identity development including logo design, brand guidelines, and marketing strategy.",
    gradientFrom: "#dc2626",
    gradientTo: "#f59e0b"
  },
  {
    id: 5,
    category: "agency",
    title: "Corporate Website Development",
    company: "Global Enterprises Ltd",
    slug: "corporate-website-development",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=800&fit=crop&crop=center",
    description: "Professional corporate website with CMS integration, multilingual support, and SEO optimization.",
    gradientFrom: "#059669",
    gradientTo: "#0d9488"
  },
  {
    id: 6,
    category: "agency",
    title: "Marketing Campaign Design",
    company: "Growth Partners",
    slug: "marketing-campaign-design",
    imageSrc: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=800&fit=crop&crop=center",
    description: "Comprehensive marketing campaign including print materials, digital assets, and social media content.",
    gradientFrom: "#be185d",
    gradientTo: "#7c2d12"
  },
  {
    id: 7,
    category: "agency",
    title: "Product Launch Strategy",
    company: "Innovation Labs",
    slug: "product-launch-strategy",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=800&fit=crop&crop=center",
    description: "End-to-end product launch strategy including market research, positioning, and go-to-market execution.",
    gradientFrom: "#1d4ed8",
    gradientTo: "#7c3aed"
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter(project => project.category === category)
}
