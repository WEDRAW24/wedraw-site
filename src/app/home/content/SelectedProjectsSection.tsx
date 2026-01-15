'use client'

import Button from '../../components/Button'
import SelectedProjectsCarousel from '../../components/SelectedProjectsCarousel'
import MobileProjectsCarousel from '../../components/MobileProjectsCarousel'

// Project metadata
import { metadata as riverOfLightMetadata } from '../../work/projects/liverpool-river-of-light-2024/metadata'
import { metadata as blenheimMetadata } from '../../work/projects/blenheim-palace-international-horse-trials-2024/metadata'
import { metadata as balloonFiestaMetadata } from '../../work/projects/bristol-international-balloon-fiesta-2024/metadata'

export default function SelectedProjectsSection() {
  // Debug mode - set to false to hide all container borders
  const DEBUG = false;

  const projects = [riverOfLightMetadata, blenheimMetadata, balloonFiestaMetadata]

  return (
    <div className={`relative pb-[100px] pt-[30px] ${DEBUG ? 'border-4 border-purple-500' : ''}`}>
      <div className={`max-w-[1680px] mx-auto px-fluid-md md:px-4 sm:px-6 lg:px-[60px] ${DEBUG ? 'border-4 border-blue-500' : ''}`}>
        {/* Section Header */}
        <div className={`${DEBUG ? 'border-2 border-green-500' : ''}`}>
          <div className="flex justify-between items-center mb-fluid-md md:mb-3">
            {/* Title */}
            <h2 className="text-display-xl md:text-[clamp(36px,4vw,58px)] font-sans font-black md:font-extrabold text-marker leading-[1.15] md:leading-normal uppercase md:normal-case">
              <span className="block md:inline">Selected</span>
              <span className="block md:inline md:ml-2">Projects</span>
            </h2>
            
            {/* Button - Hidden on mobile */}
            <div className="hidden md:block">
              <Button variant="marker" size="md" href="/work">
                ALL PROJECTS
              </Button>
            </div>
          </div>
          
          {/* Marker Red Divider Line */}
          <div className={`h-[2px] bg-marker mb-fluid-lg md:mb-24 ${DEBUG ? 'border-2 border-cyan-500' : ''}`}></div>
        </div>

        {/* MOBILE: Simple swipe carousel */}
        <div className={`md:hidden ${DEBUG ? 'border-2 border-orange-500' : ''}`}>
          <MobileProjectsCarousel projects={projects} />
          
          {/* All Projects Button - Below carousel on mobile */}
          <div className="flex justify-center mt-fluid-xl">
            <Button variant="marker" size="md" href="/work">
              ALL PROJECTS
            </Button>
          </div>
        </div>

        {/* DESKTOP: Full carousel with arrows */}
        <div className={`hidden md:block ${DEBUG ? 'border-2 border-orange-500' : ''}`}>
          <SelectedProjectsCarousel 
            projects={projects} 
            debug={DEBUG} 
          />
        </div>
      </div>
    </div>
  )
}
