'use client'

import Image from 'next/image'
import Link from 'next/link'
import UnderlineLink from './UnderlineLink'
import Tag from './Tag'
import { ProjectMetadata } from '@/app/work/projects/types'
import { useEffect, useState } from 'react'

interface WorkProjectCardProps {
  project: ProjectMetadata
  displayRow?: number // Optional override for dynamic positioning
  displayColumn?: number // Optional override for dynamic positioning
  size?: 'default' | 'small'
  isMobile?: boolean // Mobile layout flag
  isTablet?: boolean // Tablet layout flag
}

export default function WorkProjectCard({ project, displayRow, displayColumn, size = 'default', isMobile = false, isTablet = false }: WorkProjectCardProps) {
  const { title, slug, location, year, coverImage, category, gridColumn, gridRow, gridWidth, gridHeight } = project
  const projectUrl = `/work/projects/${slug}`
  const [cellSize, setCellSize] = useState(0)
  
  // Use display position if provided, otherwise use original grid position
  const activeRow = displayRow ?? gridRow
  const activeColumn = displayColumn ?? gridColumn

  useEffect(() => {
    // Skip grid calculations for mobile and tablet
    if (isMobile || isTablet) return
    
    const updateGrid = () => {
      const container = document.querySelector('.work-grid-container')
      if (!container) return
      
      const containerWidth = container.clientWidth
      const calculatedCellSize = containerWidth / 12 // 12 columns
      
      setCellSize(calculatedCellSize)
    }

    updateGrid()
    window.addEventListener('resize', updateGrid)
    return () => window.removeEventListener('resize', updateGrid)
  }, [isMobile])

  // Mobile Layout - Simple block
  if (isMobile) {
    return (
      <div className="block w-full">
        <Link href={projectUrl} className="block">
          <div className="relative w-full aspect-[4/3] mb-fluid-sm overflow-hidden hover:cursor-pointer">
            {/* Category Tag */}
            <div 
              className="absolute z-10"
              style={{ 
                top: 'clamp(12px, 2vw, 16px)', 
                left: 'clamp(12px, 2vw, 16px)' 
              }}
            >
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
            sizes="100vw"
          />
        </div>
        
          <div className="link mb-fluid-xs">{location.toLowerCase()} | {year}</div>
          <h2 className="title-card mb-fluid-sm uppercase transition-colors duration-300 hover:text-marker active:text-marker">{title}</h2>
      </Link>
      <UnderlineLink href={projectUrl} className="text-marker uppercase">
        more about the project
      </UnderlineLink>
    </div>
  )
}

  // Tablet Layout - Single column
  if (isTablet) {
    return (
      <div className="block w-full">
        <Link href={projectUrl} className="block">
          <div className="relative w-full aspect-[4/3] mb-fluid-sm overflow-hidden hover:cursor-pointer">
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
              sizes="100vw"
            />
        </div>
        
          <div className="link mb-fluid-xs">{location.toLowerCase()} | {year}</div>
          <h2 className="title-card mb-fluid-sm uppercase transition-colors duration-300 hover:text-marker active:text-marker">{title}</h2>
      </Link>
      <UnderlineLink href={projectUrl} className="text-marker uppercase">
        more about the project
      </UnderlineLink>
    </div>
  )
}

// Desktop/Tablet Layout - Grid positioning
  // Calculate position and size based on grid (using active positions)
  const left = (activeColumn - 1) * cellSize
  const top = (activeRow - 1) * cellSize
  const width = gridWidth * cellSize
  const height = gridHeight * cellSize

  if (cellSize === 0) return null // Don't render until we have grid size

  return (
    <div 
      className="absolute block transition-all duration-700 ease-in-out"
      style={{
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`
      }}
    >
      <Link href={projectUrl} className="block">
        <div 
          className="relative w-full mb-fluid-sm overflow-hidden hover:cursor-pointer"
          style={{ height: `${height}px` }}
        >
          {/* Category Tag */}
          <div className="absolute top-6 left-6 z-10">
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
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        
          <div className="link mb-fluid-xs">{location.toLowerCase()} | {year}</div>
          <h2 className="title-card mb-fluid-sm uppercase transition-colors duration-300 hover:text-marker active:text-marker">{title}</h2>
      </Link>
      <UnderlineLink href={projectUrl} className="text-marker uppercase">
        more about the project
      </UnderlineLink>
    </div>
  )
} 