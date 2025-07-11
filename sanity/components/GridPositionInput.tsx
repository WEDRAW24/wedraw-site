import React, { useCallback, useState, useEffect } from 'react'
import { Box, Stack, Text, Grid, Card } from '@sanity/ui'
import { PatchEvent, set } from 'sanity'

interface GridPosition {
  columnStart: number
  columnSpan: number
  rowStart: number
  rowSpan: number
}

export const GridPositionInput = React.forwardRef((props: any, ref) => {
  const { 
    value,
    onChange,
    type
  } = props

  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  const handleDragStart = useCallback((e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({
      x: e.clientX,
      y: e.clientY
    })
  }, [])

  const handleDrag = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return

    // Calculate grid position based on mouse movement
    const deltaX = Math.floor((e.clientX - dragStart.x) / 50) // 50px per grid cell
    const deltaY = Math.floor((e.clientY - dragStart.y) / 50)

    const newPosition: GridPosition = {
      columnStart: Math.max(1, Math.min(12, (value?.columnStart || 1) + deltaX)),
      columnSpan: value?.columnSpan || 1,
      rowStart: Math.max(1, (value?.rowStart || 1) + deltaY),
      rowSpan: value?.rowSpan || 1
    }

    onChange(PatchEvent.from(set(newPosition)))
  }, [isDragging, dragStart, value, onChange])

  const handleDragEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleResize = useCallback((direction: 'width' | 'height', delta: number) => {
    const newPosition = { ...value }
    
    if (direction === 'width') {
      newPosition.columnSpan = Math.max(1, Math.min(12 - (value.columnStart - 1), value.columnSpan + delta))
    } else {
      newPosition.rowSpan = Math.max(1, Math.min(8, value.rowSpan + delta))
    }

    onChange(PatchEvent.from(set(newPosition)))
  }, [value, onChange])

  return (
    <Stack space={4}>
      <Card padding={4} radius={2} shadow={1}>
        <Stack space={4}>
          <Text weight="semibold">Visual Grid Position</Text>
          
          {/* Grid visualization */}
          <Box 
            style={{
              position: 'relative',
              width: '100%',
              height: '600px',
              border: '1px solid var(--card-border-color)',
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gridTemplateRows: 'repeat(8, 1fr)',
              gap: '1px',
              background: 'var(--card-bg-color)'
            }}
          >
            {/* Grid lines */}
            {Array(13).fill(null).map((_, i) => (
              <Box
                key={`col-${i}`}
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '1px',
                  left: `${(i / 12) * 100}%`,
                  background: 'var(--card-border-color)',
                  opacity: 0.3
                }}
              />
            ))}
            {Array(9).fill(null).map((_, i) => (
              <Box
                key={`row-${i}`}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '1px',
                  top: `${(i / 8) * 100}%`,
                  background: 'var(--card-border-color)',
                  opacity: 0.3
                }}
              />
            ))}

            {/* Current project card */}
            {value && (
              <Box
                style={{
                  position: 'relative',
                  gridColumn: `${value.columnStart} / span ${value.columnSpan}`,
                  gridRow: `${value.rowStart} / span ${value.rowSpan}`,
                  background: 'var(--card-focus-ring-color)',
                  opacity: 0.5,
                  cursor: 'move'
                }}
                onMouseDown={handleDragStart}
                onMouseMove={handleDrag}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
              >
                <Text size={1}>Current Project</Text>
                
                {/* Resize handles */}
                <Box
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: '16px',
                    cursor: 'ew-resize'
                  }}
                  onMouseDown={(e) => {
                    e.stopPropagation()
                    const startX = e.clientX
                    
                    const handleMouseMove = (e: MouseEvent) => {
                      const delta = Math.round((e.clientX - startX) / 50)
                      handleResize('width', delta)
                    }
                    
                    const handleMouseUp = () => {
                      document.removeEventListener('mousemove', handleMouseMove)
                      document.removeEventListener('mouseup', handleMouseUp)
                    }
                    
                    document.addEventListener('mousemove', handleMouseMove)
                    document.addEventListener('mouseup', handleMouseUp)
                  }}
                />
                
                <Box
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: '16px',
                    cursor: 'ns-resize'
                  }}
                  onMouseDown={(e) => {
                    e.stopPropagation()
                    const startY = e.clientY
                    
                    const handleMouseMove = (e: MouseEvent) => {
                      const delta = Math.round((e.clientY - startY) / 50)
                      handleResize('height', delta)
                    }
                    
                    const handleMouseUp = () => {
                      document.removeEventListener('mousemove', handleMouseMove)
                      document.removeEventListener('mouseup', handleMouseUp)
                    }
                    
                    document.addEventListener('mousemove', handleMouseMove)
                    document.addEventListener('mouseup', handleMouseUp)
                  }}
                />
              </Box>
            )}
          </Box>

          {/* Manual input fields */}
          <Grid columns={4} gap={2}>
            <Stack space={2}>
              <Text size={1}>Column Start (1-12)</Text>
              <input
                type="number"
                value={value?.columnStart || 1}
                min={1}
                max={12}
                onChange={(e) => {
                  const newValue = parseInt(e.target.value)
                  if (newValue >= 1 && newValue <= 12) {
                    onChange(PatchEvent.from(set({ ...value, columnStart: newValue })))
                  }
                }}
              />
            </Stack>
            <Stack space={2}>
              <Text size={1}>Width (1-12)</Text>
              <input
                type="number"
                value={value?.columnSpan || 1}
                min={1}
                max={12}
                onChange={(e) => {
                  const newValue = parseInt(e.target.value)
                  if (newValue >= 1 && newValue <= 12) {
                    onChange(PatchEvent.from(set({ ...value, columnSpan: newValue })))
                  }
                }}
              />
            </Stack>
            <Stack space={2}>
              <Text size={1}>Row Start (1+)</Text>
              <input
                type="number"
                value={value?.rowStart || 1}
                min={1}
                onChange={(e) => {
                  const newValue = parseInt(e.target.value)
                  if (newValue >= 1) {
                    onChange(PatchEvent.from(set({ ...value, rowStart: newValue })))
                  }
                }}
              />
            </Stack>
            <Stack space={2}>
              <Text size={1}>Height (1-8)</Text>
              <input
                type="number"
                value={value?.rowSpan || 1}
                min={1}
                max={8}
                onChange={(e) => {
                  const newValue = parseInt(e.target.value)
                  if (newValue >= 1 && newValue <= 8) {
                    onChange(PatchEvent.from(set({ ...value, rowSpan: newValue })))
                  }
                }}
              />
            </Stack>
          </Grid>
        </Stack>
      </Card>
    </Stack>
  )
})

GridPositionInput.displayName = 'GridPositionInput' 