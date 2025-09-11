"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag } from "lucide-react";
import { projects } from "@/lib/project-data";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative min-h-screen text-white bg-black overflow-hidden pt-16">
      {/* Background Flares 
      <div className="absolute top-0 right-0 w-[800px] h-[600px] opacity-40" style={{
        background: 'radial-gradient(ellipse at top right, #3B82F6 0%, #8B5CF6 30%, #EC4899 60%, transparent 80%)',
        filter: 'blur(120px)',
        mixBlendMode: 'screen'
      }}></div>
      
      <div className="absolute bottom-0 left-0 w-[700px] h-[500px] opacity-35" style={{
        background: 'radial-gradient(ellipse at bottom left, #8B5CF6 0%, #EC4899 40%, #F59E0B 70%, transparent 85%)',
        filter: 'blur(100px)',
        mixBlendMode: 'screen'
      }}></div>
        */}
        
      {/* Background Dots */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 0.5px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
        backgroundSize: '5px 5px'
      }}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Work
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Project Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>

            {/* Project Info */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Meta */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-sm text-gray-400">Year</p>
                    <p className="font-medium">{project.year}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-sm text-gray-400">Client</p>
                    <p className="font-medium">{project.client}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live Site
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-600 text-white rounded-full font-medium hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed mb-4">
                  {project.overview || project.description}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  This project showcases our expertise in modern web development and our commitment to delivering exceptional user experiences. Through careful planning and innovative solutions, we were able to create a platform that not only meets but exceeds client expectations.
                </p>
              </div>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features?.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                )) || (
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">Responsive design for all devices</span>
                  </li>
                )}
              </ul>
            </section>

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold mb-4">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg bg-gray-900/50">
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <section>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5 text-purple-400" />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 text-sm bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Project Stats */}
            <section>
              <h3 className="text-xl font-semibold mb-4">Project Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-800">
                  <span className="text-gray-400">Duration</span>
                  <span className="font-medium">{project.duration || '3 months'}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-800">
                  <span className="text-gray-400">Team Size</span>
                  <span className="font-medium">{project.teamSize || '4 members'}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-800">
                  <span className="text-gray-400">Status</span>
                  <span className="font-medium text-green-400">Completed</span>
                </div>
              </div>
            </section>

            {/* Related Projects */}
            <section>
              <h3 className="text-xl font-semibold mb-4">Related Projects</h3>
              <div className="space-y-4">
                {projects
                  .filter(p => p.id !== project.id)
                  .slice(0, 3)
                  .map((relatedProject) => (
                    <Link
                      key={relatedProject.id}
                      href={`/work/${relatedProject.slug}`}
                      className="block group"
                    >
                      <div className="flex gap-3 p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors">
                        <Image
                          src={relatedProject.image}
                          alt={relatedProject.title}
                          width={60}
                          height={40}
                          className="w-15 h-10 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm group-hover:text-purple-400 transition-colors truncate">
                            {relatedProject.title}
                          </h4>
                          <p className="text-xs text-gray-400 truncate">
                            {relatedProject.client}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
