import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/project-data";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Akaal`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.imageSrc],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-dotted-grid opacity-30"></div>

      {/* Header */}
      <div className="relative z-10 pt-20 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Project Hero Section */}
      <section className="relative z-10 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Project Info */}
            <div className="space-y-6">
              <div className="text-sm text-gray-400 font-medium uppercase tracking-wide">
                {project.category}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                {project.title}
              </h1>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                {project.description}
              </p>
              
              <div className="text-sm text-gray-500">
                Client: {project.company}
              </div>
            </div>

            {/* Right Side - Project Image */}
            <div className="relative">
              <div 
                className="rounded-[2rem] p-1.5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)]"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
                }}
              >
                <div className="relative overflow-hidden rounded-[1.5rem] bg-black">
                  <div className="relative w-full aspect-[9/19.5]">
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Project Overview</h2>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                This project represents a comprehensive approach to modern digital solutions, 
                combining cutting-edge technology with user-centered design principles. Our 
                team worked closely with {project.company} to deliver a solution that not 
                only meets their current needs but also positions them for future growth.
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Responsive design optimized for all devices</li>
                <li>Modern user interface with intuitive navigation</li>
                <li>Performance optimization for fast loading times</li>
                <li>SEO-friendly structure for better search visibility</li>
                <li>Accessibility compliance for inclusive user experience</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Let&apos;s work together to bring your vision to life with innovative digital solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
