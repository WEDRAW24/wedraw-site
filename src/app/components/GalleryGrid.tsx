'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { type StaticImageData } from 'next/image'

interface GalleryGridProps {
  className?: string
  images?: {
    image: StaticImageData
    gridPosition: {
      x: number // Starting column (0-23)
      y: number // Starting row (0-23)
      width: number // Number of columns
      height: number // Number of rows
    }
  }[]
}

export default function GalleryGrid({ className = '', images = [] }: GalleryGridProps) {
  const [cellSize, setCellSize] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const GRID_SIZE = 24 // Number of rows and columns

  useEffect(() => {
    const updateGrid = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      
      const container = document.querySelector('.grid-container')
      if (!container) return
      
      // Get actual container width (accounting for padding)
      const containerWidth = container.clientWidth
      
      // Calculate cell size based on 24 columns
      const calculatedCellSize = containerWidth / GRID_SIZE
      
      setCellSize(calculatedCellSize)
    }

    updateGrid()
    window.addEventListener('resize', updateGrid)
    return () => window.removeEventListener('resize', updateGrid)
  }, [])

  // Calculate container height based on cell size to maintain perfect squares
  const containerHeight = cellSize * GRID_SIZE

  // Mobile: Simple stacked images
  if (isMobile) {
    return (
      <div className={`px-4 ${className}`}>
        <div className="flex flex-col gap-6">
          {images.map((item, index) => (
            <div
              key={`image-${index}`}
              className="relative w-full aspect-[4/3] overflow-hidden"
            >
              <Image
                src={item.image}
                alt=""
                fill
                quality={100}
                className="object-cover"
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Desktop: Grid layout
  return (
    <div 
      className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] relative grid-container ${className}`}
      style={{ height: `${containerHeight}px` }}
    >
      {/* Grid lines - using z-index below NavDrawer's z-index of 10 */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        {/* Vertical lines */}
        {Array.from({ length: GRID_SIZE + 1 }, (_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bg-marker/30"
            style={{
              width: '0.5px',
              height: '100%',
              left: `${i * cellSize}px`
            }}
          />
        ))}

        {/* Horizontal lines */}
        {Array.from({ length: GRID_SIZE + 1 }, (_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 bg-marker/30"
            style={{
              height: '0.5px',
              width: '100%',
              top: `${i * cellSize}px`
            }}
          />
        ))}
      </div>

      {/* Images - higher than grid but still below NavDrawer's z-index of 10 */}
      {images.map((item, index) => (
        <div
          key={`image-${index}`}
          className="absolute overflow-hidden"
          style={{
            left: `${item.gridPosition.x * cellSize}px`,
            top: `${item.gridPosition.y * cellSize}px`,
            width: `${item.gridPosition.width * cellSize}px`,
            height: `${item.gridPosition.height * cellSize}px`,
            zIndex: 2
          }}
        >
          <Image
            src={item.image}
            alt=""
            fill
            quality={100}
            unoptimized
            className="object-cover"
            sizes={`(max-width: 1440px) ${(item.gridPosition.width / GRID_SIZE) * 100}vw, ${item.gridPosition.width * 60}px`}
          />
        </div>
      ))}
    </div>
  )
} 