'use client'

import Image from 'next/image'
import Link from 'next/link'
import UnderlineLink from './UnderlineLink'
import { ProjectMetadata } from '@/app/work/projects/types'

interface SelectedProjectCardProps {
  project: ProjectMetadata
  debug?: boolean
}

export default function SelectedProjectCard({ project, debug = false }: SelectedProjectCardProps) {
  const { title, slug, year, coverImage, description, location } = project
  const projectUrl = `/work/projects/${slug}`

  return (
    <div className={`w-full relative ${debug ? 'border-4 border-purple-500' : ''}`}>
      {/* MOBILE LAYOUT - Clean card with all information */}
      <div className="block md:hidden w-full max-w-full overflow-hidden">
        <Link href={projectUrl} className="block w-full">
          <div className="relative w-full aspect-[4/3] mb-fluid-sm overflow-hidden max-w-full">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 ease-out hover:scale-105"
              sizes="(max-width: 768px) 85vw, 1050px"
            />
          </div>
          
          <div className="link text-dark-grey mb-fluid-xs">
            {location.toLowerCase()} | {year}
          </div>
          <h3 className="title-card mb-fluid-sm uppercase transition-colors duration-300 hover:text-marker">
            {title}
          </h3>
        </Link>
        
        {/* Description - Now included on mobile */}
        {description && (
          <p className="body-md mb-fluid-sm">
            {description}
          </p>
        )}
        
        <UnderlineLink href={projectUrl} className="text-marker uppercase">
          more about the project
        </UnderlineLink>
      </div>

      {/* DESKTOP LAYOUT - Original complex design */}
      <div className="hidden md:block max-w-[1050px]">
        {/* Wrapper with padding to contain vertical label */}
        <div className="relative pl-[30px]">
          {/* Vertical Project Label */}
          <Link 
            href={projectUrl}
            className={`absolute link text-marker uppercase ${debug ? 'border-2 border-pink-500' : ''}`}
            style={{
              left: '0px',
              top: '0px',
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)'
            }}
          >
            {location} | {year}
          </Link>

          {/* Image */}
          <Link href={projectUrl} className="block group">
            <div 
              className={`relative w-full overflow-hidden ${debug ? 'border-4 border-cyan-500' : ''}`}
              style={{ 
                aspectRatio: '1050 / 600',
                maxHeight: '600px',
                marginBottom: 'clamp(16px, 2vw, 24px)'
              }}
            >
              <Image
                src={coverImage}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="1050px"
              />
            </div>
          </Link>
        </div>

        {/* Text Content Container */}
        <div className={`w-[62%] pl-[30px] ${debug ? 'border-4 border-green-500' : ''}`}>
          {/* Red Divider Line */}
          <div 
            className={`h-[2px] bg-marker ${debug ? 'border-2 border-yellow-500' : ''}`}
            style={{
              marginBottom: 'clamp(16px, 2vw, 24px)'
            }}
          ></div>

          {/* Stacked Layout: Title, Description, Link */}
          <div className={`${debug ? 'border-4 border-orange-500' : ''}`}>
            {/* Title */}
            <Link href={projectUrl} className="group">
              <h3 
                className="title-card transition-colors duration-300 group-hover:text-marker"
                style={{
                  marginBottom: 'clamp(12px, 1.5vw, 20px)'
                }}
              >
                {title}
              </h3>
            </Link>

            {/* Description */}
            {description && (
              <p 
                className="body-md"
                style={{
                  marginBottom: 'clamp(16px, 2vw, 24px)'
                }}
              >
                {description}
              </p>
            )}
            
            {/* Link */}
            <UnderlineLink href={projectUrl} className="text-marker uppercase">
              More about the project
            </UnderlineLink>
          </div>
        </div>
      </div>
    </div>
  )
}

