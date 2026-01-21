'use client'

import { ProjectMetadata } from './types'
import ProjectLabel from '@/app/components/ProjectLabel'
import CTA from '@/app/components/CTA'
import Image, { StaticImageData } from 'next/image'
import MoreProjects from '@/app/components/MoreProjects'
import { projects } from './registry'

interface ProjectLayoutProps {
  metadata: ProjectMetadata
  heroImage: string | StaticImageData
  children: React.ReactNode
}

export default function ProjectLayout({ metadata, heroImage, children }: ProjectLayoutProps) {
  return (
    <div className="project-page">
      {/* Hero Section - Full width */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image 
            src={heroImage}
            alt={metadata.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Project Info Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 px-4 md:px-0 md:col-start-5 md:col-span-8">
              <ProjectLabel
                location={metadata.location}
                year={metadata.year.toString()}
                variant="marker"
                className="mb-6"
              />
              <h1 className="section-heading text-black mb-3">
                {metadata.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Content - 12 column grid */}
      <main className="relative z-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              {children}
            </div>
          </div>
        </div>
      </main>

      {/* More Projects Section */}
      <MoreProjects 
        currentProjectSlug={metadata.slug}
        projects={projects}
      />

      {/* CTA Section - Full width like Work page */}
      <section className="bg-white">
        <CTA 
          magnetType="lines"
          magnetColor="var(--color-marker)"
          title="Let's get Started"
          buttonText="GET IN TOUCH"
          buttonHref="/contact"
        />
      </section>
    </div>
  )
} 