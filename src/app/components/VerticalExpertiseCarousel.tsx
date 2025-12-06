'use client'

import { useState, useEffect, useRef } from 'react'

interface VerticalExpertiseCarouselProps {
  debug?: boolean
  onExpertiseChange?: (expertise: string) => void
}

const expertiseItems = [
  'VALIDATE',
  'SUPPORT',
  'DESIGN',
  'MARKOUT',
  'SURVEY'
]

export default function VerticalExpertiseCarousel({ debug = false, onExpertiseChange }: VerticalExpertiseCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(7) // Start at index 7 (DESIGN in middle set)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const totalItems = expertiseItems.length
  const rowHeight = 120 // Height of each row in pixels (600px / 5 rows)

  // Create extended array with full clones on each end for smooth infinite loop
  const extendedItems = [
    ...expertiseItems,  // Full clone set at start
    ...expertiseItems,  // Real items
    ...expertiseItems   // Full clone set at end
  ]

  const handlePrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setIsTransitioning(true)
    
    const newIndex = currentIndex - 1
    setCurrentIndex(newIndex)
    
    setTimeout(() => {
      setIsAnimating(false)
      // If we scroll past the first clone set, jump to real items
      if (newIndex < totalItems) {
        setTimeout(() => {
          setIsTransitioning(false)
          setCurrentIndex(newIndex + totalItems)
          setTimeout(() => setIsTransitioning(true), 50)
        }, 50)
      }
    }, 500)
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setIsTransitioning(true)
    
    const newIndex = currentIndex + 1
    setCurrentIndex(newIndex)
    
    setTimeout(() => {
      setIsAnimating(false)
      // If we scroll past the second clone set, jump to real items
      if (newIndex >= totalItems * 2) {
        setTimeout(() => {
          setIsTransitioning(false)
          setCurrentIndex(newIndex - totalItems)
          setTimeout(() => setIsTransitioning(true), 50)
        }, 50)
      }
    }, 500)
  }

  // Mouse wheel handler for desktop
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) return
      
      e.preventDefault()
      
      if (isAnimating) return
      
      if (e.deltaY > 0) {
        // Scrolling down - go to next
        handleNext()
      } else if (e.deltaY < 0) {
        // Scrolling up - go to previous
        handlePrevious()
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [currentIndex, isAnimating, handleNext, handlePrevious])

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientY)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const minSwipeDistance = 50
    
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swiped up - go to next
        handleNext()
      } else {
        // Swiped down - go to previous
        handlePrevious()
      }
    }
    
    setTouchStart(0)
    setTouchEnd(0)
  }

  // Calculate track offset
  const trackOffset = -(currentIndex * rowHeight)

  // Notify parent of current expertise
  useEffect(() => {
    if (onExpertiseChange) {
      const currentExpertise = extendedItems[currentIndex]
      onExpertiseChange(currentExpertise)
    }
  }, [currentIndex])

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${debug ? 'border-4 border-yellow-500' : ''}`}
      style={{ width: '70%', height: '600px', paddingLeft: '8px' }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Vertical Track */}
      <div
        className="flex flex-col"
        style={{
          transform: `translateY(${trackOffset + 240}px)`, // +240px to center (600px height / 5 rows * 2 rows offset)
          transition: isTransitioning ? 'transform 500ms ease-in-out' : 'none'
        }}
      >
        {extendedItems.map((item, index) => {
          // Calculate distance from current centered item
          const distance = Math.abs(index - currentIndex)
          
          // Determine opacity based on distance from center
          let opacity = 1
          if (distance === 1) {
            opacity = 0.14 // Rows 2 and 4 (adjacent to center)
          } else if (distance === 2) {
            opacity = 0.06 // Rows 1 and 5 (furthest from center)
          } else if (distance > 2) {
            opacity = 0 // Items outside visible range
          }
          
          return (
            <div
              key={`${item}-${index}`}
              className={`flex items-center ${debug ? 'border-2 border-green-500' : ''}`}
              style={{ height: `${rowHeight}px` }}
            >
              <p 
                className="font-sans font-area-black text-meadow" 
                style={{ 
                  fontSize: 'clamp(32px, 7vw, 84px)', 
                  lineHeight: '0.85', 
                  transform: 'translateY(-0.075em)',
                  opacity: opacity,
                  transition: isTransitioning ? 'opacity 500ms ease-in-out' : 'none',
                  WebkitTextStroke: '3px currentColor',
                  letterSpacing: '0.03em',
                }}
              >
                {item}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

