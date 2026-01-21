'use client'

import { useState, useEffect } from 'react'
import SelectedProjectCard from './SelectedProjectCard'
import { ProjectMetadata } from '@/app/work/projects/types'

interface SelectedProjectsCarouselProps {
  projects: ProjectMetadata[]
  debug?: boolean
}

export default function SelectedProjectsCarousel({ projects, debug = false }: SelectedProjectsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(2) // Start at 2 (first real card after two clones)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1920)

  const totalProjects = projects.length
  
  // Responsive card width and gap based on viewport
  const getResponsiveValues = () => {
    if (windowWidth >= 1800) {
      return { cardWidth: 1050, gap: 150, containerMaxWidth: 1200 }
    } else if (windowWidth >= 1440) {
      return { cardWidth: 900, gap: 120, containerMaxWidth: 1020 }
    } else if (windowWidth >= 1200) {
      return { cardWidth: 750, gap: 100, containerMaxWidth: 850 }
    } else if (windowWidth >= 768) {
      return { cardWidth: 650, gap: 80, containerMaxWidth: 730 }
    } else {
      // Mobile: Card takes 85% of viewport to allow peek, gap is small
      const mobileCardWidth = Math.floor(windowWidth * 0.85)
      return { cardWidth: mobileCardWidth, gap: 20, containerMaxWidth: windowWidth }
    }
  }

  const { cardWidth, gap, containerMaxWidth } = getResponsiveValues()

  // Update windowWidth on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Create extended array with TWO clones on each end for smooth infinite loop
  const extendedProjects = [
    projects[projects.length - 2], // Clone of second-to-last card
    projects[projects.length - 1], // Clone of last card
    ...projects,                    // All real cards
    projects[0],                    // Clone of first card
    projects[1]                     // Clone of second card
  ]

  const handlePrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setIsTransitioning(true)
    
    const newIndex = currentIndex - 1
    setCurrentIndex(newIndex)
    
    setTimeout(() => {
      setIsAnimating(false)
      // If we're at the first clone (index 1), jump to real last card (index totalProjects + 1)
      if (newIndex === 1) {
        setTimeout(() => {
          setIsTransitioning(false)
          setCurrentIndex(totalProjects + 1)
          setTimeout(() => setIsTransitioning(true), 50)
        }, 50)
      }
    }, 700)
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setIsTransitioning(true)
    
    const newIndex = currentIndex + 1
    setCurrentIndex(newIndex)
    
    setTimeout(() => {
      setIsAnimating(false)
      // If we're at the last clone (index totalProjects + 2), jump to real first card (index 2)
      if (newIndex === totalProjects + 2) {
        setTimeout(() => {
          setIsTransitioning(false)
          setCurrentIndex(2)
          setTimeout(() => setIsTransitioning(true), 50)
        }, 50)
      }
    }, 700)
  }

  // Re-enable transitions after instant jump
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 50)
      return () => clearTimeout(timer)
    }
  }, [isTransitioning])

  // Touch handlers for mobile swipe
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
        // Swiped left - go to next
        handleNext()
      } else {
        // Swiped right - go to previous
        handlePrevious()
      }
    }
    
    setTouchStart(0)
    setTouchEnd(0)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevious()
      if (e.key === 'ArrowRight') handleNext()
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, isAnimating])

  // Calculate track offset with responsive centering
  const centerOffset = windowWidth >= 1800 ? 75 : windowWidth >= 1440 ? 60 : windowWidth >= 1200 ? 50 : windowWidth >= 768 ? 40 : 20
  const trackOffset = -(currentIndex * (cardWidth + gap))
  
  // Calculate arrow position: halfway between main card edge and side card start
  // Main card edge is at cardWidth/2 from center, gap is between cards
  // Halfway point = cardWidth/2 + gap/2
  const arrowPositionFromCenter = (cardWidth / 2) + (gap / 2)

  return (
    <div className="relative w-full">
      {/* Carousel Viewport - Allow overflow to show adjacent cards peeking */}
      <div 
        className="relative w-full overflow-visible"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ minHeight: windowWidth < 768 ? 'auto' : windowWidth < 1024 ? '600px' : '800px' }}
      >
        {/* Inner container - centered, no clipping so cards can peek */}
        <div className="relative w-full mx-auto overflow-visible" style={{ maxWidth: `${containerMaxWidth}px` }}>
          
                {/* Carousel Track - All cards in a row, with responsive offset to center the first card */}
                <div
                  className="flex ease-in-out items-center"
                  style={{
                    transform: `translateX(${trackOffset + centerOffset}px)`,
                    gap: `${gap}px`,
                    transition: isTransitioning ? 'transform 700ms' : 'none'
                  }}
                >
                  {/* Render all project cards (including clones) */}
                  {extendedProjects.map((project, index) => {
                    const isActive = index === currentIndex
                    return (
                      <div
                        key={`${project.slug}-${index}`}
                        className={`flex-shrink-0 ${debug ? 'border-4 border-purple-500' : ''}`}
                        style={{ 
                          width: `${cardWidth}px`,
                          transform: isActive ? 'scale(1)' : 'scale(0.85)',
                          transformOrigin: 'center center',
                          transition: isTransitioning ? 'transform 700ms ease-in-out' : 'none'
                        }}
                      >
                        <SelectedProjectCard project={project} debug={debug} />
                      </div>
                    )
                  })}
          </div>
        </div>

        {/* Navigation Arrows - Positioned halfway between main and side cards */}
        {!isAnimating && (
          <>
            <button
              onClick={handlePrevious}
              className="hidden lg:flex absolute z-40 w-12 h-12 items-center justify-center rounded-full border-2 border-marker text-marker hover:bg-marker hover:text-white transition-colors duration-300"
              style={{
                left: `calc(50% - ${arrowPositionFromCenter}px)`,
                top: '38%',
                transform: 'translate(-50%, -50%)' // Center the arrow button itself
              }}
              aria-label="Previous project"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="hidden lg:flex absolute z-40 w-12 h-12 items-center justify-center rounded-full border-2 border-marker text-marker hover:bg-marker hover:text-white transition-colors duration-300"
              style={{
                left: `calc(50% + ${arrowPositionFromCenter}px)`,
                top: '38%',
                transform: 'translate(-50%, -50%)' // Center the arrow button itself
              }}
              aria-label="Next project"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </>
        )}
      </div>

          {/* Navigation Dots - Mobile */}
          <div className="flex lg:hidden justify-center gap-3 mt-8">
            {projects.map((_, index) => {
              // Map currentIndex to real project index (accounting for two clones at start)
              const realIndex = currentIndex <= 1 ? (currentIndex + totalProjects - 2 + totalProjects) % totalProjects :
                                currentIndex >= totalProjects + 2 ? (currentIndex - 2) % totalProjects : 
                                currentIndex - 2
              
              return (
                <button
                  key={index}
                  onClick={() => {
                    if (index !== realIndex && !isAnimating) {
                      setIsAnimating(true)
                      setIsTransitioning(true)
                      setCurrentIndex(index + 2) // +2 because of two clones at start
                      setTimeout(() => {
                        setIsAnimating(false)
                      }, 700)
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === realIndex
                      ? 'bg-marker w-8'
                      : 'bg-marker opacity-30 hover:opacity-50'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              )
            })}
          </div>
    </div>
  )
}

