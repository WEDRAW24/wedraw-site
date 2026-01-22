'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedExpertiseBoxProps {
  title: string
  isInitiallyActive?: boolean
  index: number
  totalBoxes: number
  onActiveChange?: (index: number, isActive: boolean) => void
}

export default function AnimatedExpertiseBox({ 
  title, 
  isInitiallyActive = false,
  index,
  totalBoxes,
  onActiveChange
}: AnimatedExpertiseBoxProps) {
  const [isActive, setIsActive] = useState(isInitiallyActive)
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!boxRef.current) return

    const handleScroll = () => {
      const box = boxRef.current
      if (!box) return

      const parentSection = box.closest('section')
      if (!parentSection) return

      const sectionRect = parentSection.getBoundingClientRect()
      const sectionHeight = parentSection.offsetHeight - window.innerHeight
      const progress = -sectionRect.top / sectionHeight

      // Calculate the range for this box
      const segmentSize = 1 / (totalBoxes + 1) // Add 1 for spacing
      const start = segmentSize * (index + 0.5) // Start halfway through previous segment
      const end = segmentSize * (index + 1.5) // End halfway through next segment

      // First box stays active until second box
      if (index === 0) {
        const newActive = progress <= end
        setIsActive(newActive)
        onActiveChange?.(index, newActive)
      }
      // Last box stays active after its start
      else if (index === totalBoxes - 1) {
        const newActive = progress >= start
        setIsActive(newActive)
        onActiveChange?.(index, newActive)
      }
      // Middle boxes are active within their range
      else {
        const newActive = progress >= start && progress <= end
        setIsActive(newActive)
        onActiveChange?.(index, newActive)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [index, totalBoxes, onActiveChange])

  const handleClick = () => {
    const box = boxRef.current
    if (!box) return

    const parentSection = box.closest('section')
    if (!parentSection) return

    const sectionHeight = parentSection.offsetHeight - window.innerHeight
    const segmentSize = 1 / (totalBoxes + 1)
    const targetProgress = segmentSize * (index + 1)
    
    const targetScroll = parentSection.offsetTop + (sectionHeight * targetProgress)

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    })
  }

  return (
    <div
      ref={boxRef}
      onClick={handleClick}
      className={`
        border-2 border-meadow px-8 py-6 transition-colors duration-700
        ${isActive ? 'bg-meadow' : 'bg-white'}
        cursor-pointer hover:opacity-90
      `}
    >
      <h3 
        className={`
          accordion-heading transition-colors duration-700
          ${isActive ? 'text-white' : 'text-black'}
        `}
      >
        {title}
      </h3>
    </div>
  )
}