'use client'

import { useEffect, useState } from 'react'

interface BackgroundGridProps {
  maxRows?: number // Optional prop to set dynamic row count
  offsetRows?: number // Optional prop to offset grid start position
}

export default function BackgroundGrid({ maxRows = 37, offsetRows = 0 }: BackgroundGridProps) {
  const [cellSize, setCellSize] = useState(0)
  const COLUMNS = 12
  const ROWS = maxRows

  useEffect(() => {
    const updateGrid = () => {
      const container = document.querySelector('.work-grid-container')
      if (!container) return
      
      // Get actual container width (accounting for padding)
      const containerWidth = container.clientWidth
      
      // Calculate cell size based on 12 columns to create squares
      const calculatedCellSize = containerWidth / COLUMNS
      
      setCellSize(calculatedCellSize)
    }

    updateGrid()
    window.addEventListener('resize', updateGrid)
    return () => window.removeEventListener('resize', updateGrid)
  }, [])

  // Calculate container height based on cell size to maintain perfect squares
  const containerHeight = cellSize * ROWS

  return (
    <>
      {cellSize > 0 && (
        <div 
          className="absolute left-0 pointer-events-none"
          style={{ 
            top: `${offsetRows * cellSize}px`,
            width: '100%', 
            height: `${containerHeight}px`, 
            zIndex: 0 
          }}
        >
          {/* Vertical lines - 13 lines to create 12 columns */}
          {Array.from({ length: COLUMNS + 1 }, (_, i) => (
            <div
              key={`v-${i}`}
              className="absolute top-0 bg-marker/30"
              style={{
                width: '0.5px',
                height: `${containerHeight}px`,
                left: `${i * cellSize}px`
              }}
            />
          ))}

          {/* Horizontal lines - 8 lines to create 7 rows */}
          {Array.from({ length: ROWS + 1 }, (_, i) => (
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
      )}
    </>
  )
} 