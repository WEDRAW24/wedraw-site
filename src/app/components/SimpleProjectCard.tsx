'use client'

import Image from 'next/image'
import Link from 'next/link'
import UnderlineLink from './UnderlineLink'
import CategoryLabel from './CategoryLabel'
import { ProjectMetadata } from '@/app/work/projects/types'

interface SimpleProjectCardProps {
  project: ProjectMetadata
  size?: 'default' | 'small'
}

export default function SimpleProjectCard({ project, size = 'default' }: SimpleProjectCardProps) {
  const { title, slug, location, year, coverImage, category } = project
  const projectUrl = `/work/projects/${slug}`

  const textSizes = {
    default: {
      meta: 'text-sm',
      title: 'text-[32px]'
    },
    small: {
      meta: 'text-xs',
      title: 'text-[28px]'
    }
  }

  return (
    <div className="block">
      <Link href={projectUrl} className="block">
        <div 
          className="relative w-full mb-4 overflow-hidden hover:cursor-pointer"
          style={{ paddingBottom: '75%' }} // 4:3 aspect ratio
        >
          {/* Category Label */}
          <div className="absolute top-4 left-4 z-10">
            <CategoryLabel 
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
        
        <div className={`font-mono font-mono-normal uppercase tracking-wider mb-2 transition-colors duration-300 hover:text-marker ${textSizes[size].meta}`}>
          {location} | {year}
        </div>
        <h2 className={`font-display font-area-extrabold leading-none mb-4 transition-colors duration-300 hover:text-marker ${textSizes[size].title}`}>
          {title}
        </h2>
      </Link>
      <UnderlineLink href={projectUrl} className="text-marker">
        More about the project
      </UnderlineLink>
    </div>
  )
}

