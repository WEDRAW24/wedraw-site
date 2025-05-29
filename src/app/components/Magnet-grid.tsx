'use client';

import React, { useState, useEffect } from 'react';

interface MagnetGridProps {
  rows?: number;
  columns?: number;
  containerSize?: string;
  gridColor?: string;
  className?: string;
  style?: React.CSSProperties;
  centerGap?: {
    width: number;
    height: number;
  };
  isAnimating?: boolean;
}

function MagnetGrid({
  rows = 11,
  columns = 20,
  containerSize = "100%",
  gridColor = "var(--color-blueprint)",
  className = "",
  style = {},
  centerGap,
  isAnimating = false
}: MagnetGridProps) {
  const [filledCells, setFilledCells] = useState<Set<string>>(new Set());

  const toggleCell = (row: number, col: number) => {
    if (isAnimating) return; // Don't allow toggling while animating
    
    const cellKey = `${row}-${col}`;
    setFilledCells((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(cellKey)) {
        newSet.delete(cellKey);
      } else {
        newSet.add(cellKey);
      }
      return newSet;
    });
  };

  // Animation effect: Fill random 30% of cells when animating starts
  useEffect(() => {
    if (isAnimating) {
      // First clear all cells
      setFilledCells(new Set());
      
      // Set a small delay before filling random cells
      setTimeout(() => {
        // Get all available cell positions
        const availableCells: string[] = [];
        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < columns; col++) {
            if (shouldRenderCell(row, col)) {
              availableCells.push(`${row}-${col}`);
            }
          }
        }

        // Calculate how many cells to fill (30% of available cells)
        const cellsToFill = Math.floor(availableCells.length * 0.3);
        
        // Randomly select cells to fill
        const selectedCells = new Set<string>();
        while (selectedCells.size < cellsToFill) {
          const randomIndex = Math.floor(Math.random() * availableCells.length);
          const cellKey = availableCells[randomIndex];
          selectedCells.add(cellKey);
        }

        setFilledCells(selectedCells);
      }, 50); // Small delay to ensure clear animation is visible
    }
  }, [isAnimating, rows, columns]);

  const shouldRenderCell = (row: number, col: number) => {
    if (!centerGap) return true;
    
    const centerColStart = Math.floor((columns - centerGap.width) / 2);
    const centerColEnd = centerColStart + centerGap.width;
    const centerRowStart = Math.floor((rows - centerGap.height) / 2);
    const centerRowEnd = centerRowStart + centerGap.height;

    return !(row >= centerRowStart && row < centerRowEnd && 
             col >= centerColStart && col < centerColEnd);
  };

  return (
    <div 
      className={`relative ${className}`}
      style={{
        width: containerSize,
        height: containerSize,
        ...style
      }}
    >
      {/* Grid lines container */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {/* Vertical lines */}
        {Array.from({ length: columns + 1 }).map((_, i) => {
          const isInCenterGapX = centerGap && 
            i > Math.floor((columns - centerGap.width) / 2) && 
            i < Math.floor((columns + centerGap.width) / 2);

          return (
            <div
              key={`v-${i}`}
              style={{
                position: 'absolute',
                left: `${(i / columns) * 100}%`,
                top: 0,
                width: '1px',
                height: '100%',
                opacity: 0.3,
                background: `linear-gradient(
                  to bottom,
                  ${gridColor} 0%,
                  ${gridColor} ${centerGap ? (Math.floor((rows - centerGap.height) / 2) / rows) * 100 : 100}%,
                  ${isInCenterGapX ? 'transparent' : gridColor} ${centerGap ? (Math.floor((rows - centerGap.height) / 2) / rows) * 100 : 100}%,
                  ${isInCenterGapX ? 'transparent' : gridColor} ${centerGap ? ((Math.floor((rows + centerGap.height) / 2)) / rows) * 100 : 100}%,
                  ${gridColor} ${centerGap ? ((Math.floor((rows + centerGap.height) / 2)) / rows) * 100 : 100}%,
                  ${gridColor} 100%
                )`
              }}
            />
          );
        })}

        {/* Horizontal lines */}
        {Array.from({ length: rows + 1 }).map((_, i) => {
          const isInCenterGapY = centerGap && 
            i > Math.floor((rows - centerGap.height) / 2) && 
            i < Math.floor((rows + centerGap.height) / 2);

          return (
            <div
              key={`h-${i}`}
              style={{
                position: 'absolute',
                top: `${(i / rows) * 100}%`,
                left: 0,
                width: '100%',
                height: '1px',
                opacity: 0.3,
                background: `linear-gradient(
                  to right,
                  ${gridColor} 0%,
                  ${gridColor} ${centerGap ? (Math.floor((columns - centerGap.width) / 2) / columns) * 100 : 100}%,
                  ${isInCenterGapY ? 'transparent' : gridColor} ${centerGap ? (Math.floor((columns - centerGap.width) / 2) / columns) * 100 : 100}%,
                  ${isInCenterGapY ? 'transparent' : gridColor} ${centerGap ? ((Math.floor((columns + centerGap.width) / 2)) / columns) * 100 : 100}%,
                  ${gridColor} ${centerGap ? ((Math.floor((columns + centerGap.width) / 2)) / columns) * 100 : 100}%,
                  ${gridColor} 100%
                )`
              }}
            />
          );
        })}
      </div>

      {/* Clickable cells */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'auto',
          zIndex: 1
        }}
      >
        {Array.from({ length: rows * columns }).map((_, index) => {
          const row = Math.floor(index / columns);
          const col = index % columns;
          const cellKey = `${row}-${col}`;

          if (!shouldRenderCell(row, col)) {
            return <div key={cellKey} style={{ gridArea: `${row + 1} / ${col + 1}` }} />;
          }
          
          return (
            <div
              key={cellKey}
              onClick={() => toggleCell(row, col)}
              className={isAnimating ? 'animate-grid-fill' : ''}
              style={{
                background: filledCells.has(cellKey) ? gridColor : 'transparent',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                gridArea: `${row + 1} / ${col + 1}`,
                width: '100%',
                height: '100%'
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export { MagnetGrid };

