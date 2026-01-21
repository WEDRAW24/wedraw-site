'use client';

import SimpleProjectCard from './SimpleProjectCard'
import SectionHeader from './SectionHeader'
import MobileProjectsCarousel from './MobileProjectsCarousel'
import Button from './Button'
import { ProjectMetadata } from '@/app/work/projects/types'

type MoreProjectsProps = {
  currentProjectSlug: string;
  projects: ProjectMetadata[];
}

export default function MoreProjects({ currentProjectSlug, projects }: MoreProjectsProps) {
  // Filter out current project and get 3 random projects
  const otherProjects = projects
    .filter(project => project.slug !== currentProjectSlug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <section className="pt-24 pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
        <SectionHeader
          title="More projects"
          color="marker"
          buttonText="ALL PROJECTS"
          buttonHref="/work"
          className="mb-12"
        />

        {/* MOBILE: Swipe carousel with dots */}
        <div className="md:hidden">
          <MobileProjectsCarousel projects={otherProjects} />
          
          {/* All Projects Button - Below carousel on mobile */}
          <div className="flex justify-center mt-fluid-xl">
            <Button variant="marker" href="/work">
              ALL PROJECTS
            </Button>
          </div>
        </div>

        {/* DESKTOP: Grid layout */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {otherProjects.map((project) => (
            <div key={project.slug} className="w-full">
              <SimpleProjectCard 
                project={project}
                size="small"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 