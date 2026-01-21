'use client'

import Image from 'next/image'
import Link from 'next/link'
import UnderlineLink from './UnderlineLink'
import Tag from './Tag'
import { ProjectMetadata } from '@/app/work/projects/types'

interface SimpleProjectCardProps {
  project: ProjectMetadata
  size?: 'default' | 'small'
}

export default function SimpleProjectCard({ project, size = 'default' }: SimpleProjectCardProps) {
  const { title, slug, location, year, coverImage, category } = project
  const projectUrl = `/work/projects/${slug}`

  return (
    <div className="block">
      <Link href={projectUrl} className="block">
        <div 
          className="relative w-full mb-4 overflow-hidden hover:cursor-pointer"
          style={{ paddingBottom: '75%' }} // 4:3 aspect ratio
        >
          {/* Category Tag */}
          <div className="absolute top-4 left-4 z-10">
            <Tag 
              category={category}
              variant="white"
            />
          </div>
          
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-out hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        
        <div className="link mb-2 transition-colors duration-300 hover:text-marker">
          {location.toLowerCase()} | {year}
        </div>
        <h2 className="title-card mb-4 uppercase transition-colors duration-300 hover:text-marker">
          {title}
        </h2>
      </Link>
      <UnderlineLink href={projectUrl} className="text-marker uppercase">
        More about the project
      </UnderlineLink>
    </div>
  )
}

