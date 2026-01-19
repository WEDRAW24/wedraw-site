'use client';

import Link from 'next/link'
import Button from './Button'
import SimpleProjectCard from './SimpleProjectCard'
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
        <div className="flex justify-between items-end mb-16 pb-8 border-b-2 border-marker">
          <h2 className="text-[72px] font-area-extrabold leading-[120%] text-marker">More projects</h2>
          <Link href="/work">
            <Button variant="marker">
              ALL PROJECTS
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-8">
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