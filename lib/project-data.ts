export interface Project {
  id: number;
  title: string;
  client: string;
  image_url: string;
  slug: string;
  description: string;
  image: string;
  year: string;
  overview?: string;
  features?: string[];
  technologies: string[];
  duration?: string;
  teamSize?: string;
  liveUrl?: string;
  github?: string;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AKAAL Digital Platform",
    client: "AKAAL Technologies",
    image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    slug: "akaal-digital-platform",
    description: "A comprehensive digital platform that revolutionizes how businesses manage their operations and connect with customers.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    year: "2024",
    overview: "This project represents a complete digital transformation solution for modern businesses, featuring advanced analytics, real-time collaboration tools, and seamless integration capabilities.",
    features: [
      "Real-time analytics dashboard",
      "Multi-tenant architecture",
      "Advanced security protocols",
      "Mobile-responsive design",
      "API-first approach"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    duration: "6 months",
    teamSize: "8 members",
    liveUrl: "https://akaal-digital.com",
    github: "https://github.com/akaal/digital-platform"
  },
  {
    id: 2,
    title: "AKAAL Mobile App",
    client: "AKAAL Solutions",
    image_url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    slug: "akaal-mobile-app",
    description: "A cutting-edge mobile application that brings enterprise functionality to your fingertips with an intuitive user experience.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    year: "2024",
    overview: "Native mobile application built for both iOS and Android platforms, featuring offline capabilities and push notifications.",
    features: [
      "Cross-platform compatibility",
      "Offline data synchronization",
      "Biometric authentication",
      "Push notifications",
      "Dark mode support"
    ],
    technologies: ["React Native", "TypeScript", "Redux", "Firebase", "Expo"],
    duration: "4 months",
    teamSize: "5 members",
    liveUrl: "https://apps.apple.com/akaal-mobile",
    github: "https://github.com/akaal/mobile-app"
  },
  {
    id: 3,
    title: "AKAAL E-commerce",
    client: "AKAAL Commerce",
    image_url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    slug: "akaal-ecommerce",
    description: "A modern e-commerce platform designed to handle high-volume transactions with advanced inventory management and customer analytics.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    year: "2023",
    overview: "Full-featured e-commerce solution with payment processing, inventory management, and customer relationship tools.",
    features: [
      "Multi-payment gateway integration",
      "Advanced inventory tracking",
      "Customer analytics dashboard",
      "Automated order processing",
      "Multi-language support"
    ],
    technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS", "Vercel"],
    duration: "5 months",
    teamSize: "6 members",
    liveUrl: "https://akaal-commerce.com",
    github: "https://github.com/akaal/ecommerce"
  },
  {
    id: 4,
    title: "AKAAL CREATING SOME COOL TITLE HERE",
    client: "AKAAL Analytics",
    image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    slug: "akaal-dashboard",
    description: "An intelligent analytics dashboard that provides real-time insights and data visualization for business decision-making.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    year: "2023",
    overview: "Comprehensive data visualization platform with customizable widgets and real-time data streaming capabilities.",
    features: [
      "Real-time data visualization",
      "Customizable dashboard widgets",
      "Advanced filtering options",
      "Export capabilities",
      "Role-based access control"
    ],
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "ClickHouse"],
    duration: "3 months",
    teamSize: "4 members",
    liveUrl: "https://dashboard.akaal.com",
    github: "https://github.com/akaal/dashboard"
  },
  {
    id: 5,
    title: "AKAAL Web Portal",
    client: "AKAAL Services",
    image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    slug: "akaal-web-portal",
    description: "A comprehensive web portal that serves as the central hub for all AKAAL services and client interactions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    year: "2023",
    overview: "Multi-service web portal with integrated authentication, service management, and client communication tools.",
    features: [
      "Single sign-on authentication",
      "Service management interface",
      "Client communication portal",
      "Document management system",
      "Multi-tenant support"
    ],
    technologies: ["Angular", "Spring Boot", "MySQL", "JWT", "Azure"],
    duration: "7 months",
    teamSize: "10 members",
    liveUrl: "https://portal.akaal.com",
    github: "https://github.com/akaal/web-portal"
  },
  {
    id: 6,
    title: "AKAAL Cloud System",
    client: "AKAAL Infrastructure",
    image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    slug: "akaal-cloud-system",
    description: "A scalable cloud infrastructure solution that provides reliable and secure hosting for enterprise applications.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    year: "2022",
    overview: "Enterprise-grade cloud infrastructure with auto-scaling, load balancing, and comprehensive monitoring capabilities.",
    features: [
      "Auto-scaling capabilities",
      "Load balancing",
      "Comprehensive monitoring",
      "Backup and disaster recovery",
      "Security compliance"
    ],
    technologies: ["Kubernetes", "Docker", "Terraform", "Prometheus", "AWS"],
    duration: "8 months",
    teamSize: "12 members",
    liveUrl: "https://cloud.akaal.com",
    github: "https://github.com/akaal/cloud-system"
  },
  {
    id: 7,
    title: "AKAAL AI Platform AAAAAAAAAAAAAAAAAAAAAAAAA",
    client: "AKAAL Intelligence",
    image_url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    slug: "akaal-ai-platform",
    description: "An advanced AI platform that leverages machine learning to provide intelligent insights and automation capabilities.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    year: "2024",
    overview: "Cutting-edge AI platform with machine learning models, natural language processing, and predictive analytics.",
    features: [
      "Machine learning models",
      "Natural language processing",
      "Predictive analytics",
      "Automated decision making",
      "Real-time model training"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "FastAPI", "Redis"],
    duration: "9 months",
    teamSize: "15 members",
    liveUrl: "https://ai.akaal.com",
    github: "https://github.com/akaal/ai-platform"
  },
  {
    id: 8,
    title: "AKAAL Design System",
    client: "AKAAL Creative",
    image_url: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
    slug: "akaal-design-system",
    description: "A comprehensive design system that ensures consistency and efficiency across all AKAAL products and services.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
    year: "2022",
    overview: "Complete design system including components, patterns, guidelines, and tools for consistent user experiences.",
    features: [
      "Reusable component library",
      "Design tokens",
      "Accessibility guidelines",
      "Documentation portal",
      "Version control"
    ],
    technologies: ["Storybook", "Figma", "React", "TypeScript", "Styled Components"],
    duration: "4 months",
    teamSize: "6 members",
    liveUrl: "https://design.akaal.com",
    github: "https://github.com/akaal/design-system"
  },
  {
    id: 9,
    title: "AKAAL Data Hub",
    client: "AKAAL Insights",
    image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    slug: "akaal-data-hub",
    description: "A centralized data management platform that processes, stores, and analyzes large volumes of business data.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    year: "2023",
    overview: "Enterprise data platform with ETL capabilities, data warehousing, and advanced analytics tools.",
    features: [
      "ETL data processing",
      "Data warehousing",
      "Real-time analytics",
      "Data quality monitoring",
      "API data access"
    ],
    technologies: ["Apache Spark", "Kafka", "PostgreSQL", "Grafana", "Docker"],
    duration: "6 months",
    teamSize: "8 members",
    liveUrl: "https://data.akaal.com",
    github: "https://github.com/akaal/data-hub"
  },
  {
    id: 10,
    title: "AKAAL Automation",
    client: "AKAAL Process",
    image_url: "/images/dashboard.png",
    slug: "akaal-automation",
    description: "An intelligent automation platform that streamlines business processes and reduces manual workload through smart workflows.",
    image: "/images/dashboard.png",
    year: "2024",
    overview: "Process automation platform with workflow management, task scheduling, and integration capabilities.",
    features: [
      "Workflow automation",
      "Task scheduling",
      "Integration APIs",
      "Process monitoring",
      "Error handling"
    ],
    technologies: ["Python", "Celery", "Redis", "PostgreSQL", "Docker"],
    duration: "5 months",
    teamSize: "7 members",
    liveUrl: "https://automation.akaal.com",
    github: "https://github.com/akaal/automation"
  },
  {
    id: 11,
    title: "AKAAL Digital Platform",
    client: "AKAAL Technologies",
    image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    slug: "akaal-digital-platform",
    description: "A comprehensive digital platform that revolutionizes how businesses manage their operations and connect with customers.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    year: "2024",
    overview: "This project represents a complete digital transformation solution for modern businesses, featuring advanced analytics, real-time collaboration tools, and seamless integration capabilities.",
    features: [
      "Real-time analytics dashboard",
      "Multi-tenant architecture",
      "Advanced security protocols",
      "Mobile-responsive design",
      "API-first approach"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    duration: "6 months",
    teamSize: "8 members",
    liveUrl: "https://akaal-digital.com",
    github: "https://github.com/akaal/digital-platform"
  },
];
