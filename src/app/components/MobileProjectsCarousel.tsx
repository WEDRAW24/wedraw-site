'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import UnderlineLink from './UnderlineLink'
import { ProjectMetadata } from '@/app/work/projects/types'

interface MobileProjectsCarouselProps {
  projects: ProjectMetadata[]
}

export default function MobileProjectsCarousel({ projects }: MobileProjectsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const minSwipeDistance = 50
    
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swiped left - next
        setCurrentIndex((prev) => (prev + 1) % projects.length)
      } else {
        // Swiped right - previous
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
      }
    }
    
    setTouchStart(0)
    setTouchEnd(0)
  }

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div 
        className="relative w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Carousel Track */}
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}
        >
          {projects.map((project) => {
            const projectUrl = `/work/projects/${project.slug}`
            
            return (
              <div 
                key={project.slug}
                className="w-full flex-shrink-0"
              >
                <div className="w-full max-w-full">
                  <Link href={projectUrl} className="block">
                    <div className="relative w-full aspect-[4/3] mb-fluid-sm overflow-hidden">
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                        sizes="100vw"
                      />
                    </div>
                    
                    <div className="font-mono font-mono-normal text-body-sm tracking-wider mb-fluid-xs text-dark-grey">
                      {project.location.toLowerCase()} | {project.year}
                    </div>
                    <h3 className="text-heading-1 font-sans font-extrabold leading-none mb-fluid-sm uppercase transition-colors duration-300 hover:text-marker">
                      {project.title}
                    </h3>
                  </Link>
                  
                  {project.description && (
                    <p className="text-body-md font-sans font-normal text-dark-grey mb-fluid-sm leading-[180%]">
                      {project.description}
                    </p>
                  )}
                  
                  <UnderlineLink href={projectUrl} className="text-marker text-label-md uppercase">
                    more about the project
                  </UnderlineLink>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-3 mt-fluid-lg">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-marker w-8'
                : 'bg-marker opacity-30 w-3'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

