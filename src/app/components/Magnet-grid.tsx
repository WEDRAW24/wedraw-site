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
  // Store both filled state and opacity level
  const [cellStates, setCellStates] = useState<Map<string, number>>(new Map());

  const toggleCell = (row: number, col: number) => {
    if (isAnimating) return; // Don't allow toggling while animating
    
    const cellKey = `${row}-${col}`;
    setCellStates((prev) => {
      const newMap = new Map(prev);
      if (newMap.has(cellKey)) {
        newMap.delete(cellKey);
      } else {
        // When manually clicking, randomly choose one of the opacity levels
        const opacities = [0.25, 0.5, 0.75, 1];
        const randomOpacity = opacities[Math.floor(Math.random() * opacities.length)];
        newMap.set(cellKey, randomOpacity);
      }
      return newMap;
    });
  };

  // Animation effect: Fill random 30% of cells when animating starts
  useEffect(() => {
    if (isAnimating) {
      // First clear all cells
      setCellStates(new Map());
      
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

        // Calculate target number of filled cells (20% of available cells)
        const targetFilledCells = Math.floor(availableCells.length * 0.2);
        
        // Initial fill with target number
        const selectedCells = new Map<string, number>();
        const opacities = [0.25, 0.5, 0.75, 1];
        
        while (selectedCells.size < targetFilledCells) {
          const randomIndex = Math.floor(Math.random() * availableCells.length);
          const cellKey = availableCells[randomIndex];
          const randomOpacity = opacities[Math.floor(Math.random() * opacities.length)];
          selectedCells.set(cellKey, randomOpacity);
        }

        setCellStates(selectedCells);

        // Start the sparkling effect
        const sparkleInterval = setInterval(() => {
          setCellStates(prev => {
            const newMap = new Map(prev);
            const currentSize = newMap.size;
            
            // If we have too many cells, remove some
            if (currentSize > targetFilledCells) {
              const cellsToRemove = currentSize - targetFilledCells;
              const keys = Array.from(newMap.keys());
              for (let i = 0; i < cellsToRemove; i++) {
                const randomKey = keys[Math.floor(Math.random() * keys.length)];
                newMap.delete(randomKey);
              }
            }
            
            // If we have too few cells, add some
            if (currentSize < targetFilledCells) {
              const cellsToAdd = targetFilledCells - currentSize;
              const availableKeys = availableCells.filter(key => !newMap.has(key));
              for (let i = 0; i < cellsToAdd; i++) {
                const randomIndex = Math.floor(Math.random() * availableKeys.length);
                const cellKey = availableKeys[randomIndex];
                const randomOpacity = opacities[Math.floor(Math.random() * opacities.length)];
                newMap.set(cellKey, randomOpacity);
                availableKeys.splice(randomIndex, 1); // Remove used key
              }
            }
            
            // Randomly change opacity of some existing cells (25% chance)
            newMap.forEach((_, key) => {
              if (Math.random() < 0.25) {
                const randomOpacity = opacities[Math.floor(Math.random() * opacities.length)];
                newMap.set(key, randomOpacity);
              }
            });
            
            // Move some cells to maintain visual interest
            const numCellsToMove = Math.floor(Math.random() * 3) + 1; // Move 1-3 cells
            for (let i = 0; i < numCellsToMove; i++) {
              const filledKeys = Array.from(newMap.keys());
              const emptyKeys = availableCells.filter(key => !newMap.has(key));
              
              if (filledKeys.length && emptyKeys.length) {
                // Remove a random filled cell
                const randomFilledIndex = Math.floor(Math.random() * filledKeys.length);
                const filledKey = filledKeys[randomFilledIndex];
                const opacity = newMap.get(filledKey)!;
                newMap.delete(filledKey);
                
                // Add to a random empty cell
                const randomEmptyIndex = Math.floor(Math.random() * emptyKeys.length);
                const emptyKey = emptyKeys[randomEmptyIndex];
                newMap.set(emptyKey, opacity);
              }
            }
            
            return newMap;
          });
        }, 225);

        // Clean up interval when animation ends or component unmounts
        return () => clearInterval(sparkleInterval);
      }, 50);
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
          const opacity = cellStates.get(cellKey);

          if (!shouldRenderCell(row, col)) {
            return <div key={cellKey} style={{ gridArea: `${row + 1} / ${col + 1}` }} />;
          }
          
          return (
            <div
              key={cellKey}
              onClick={() => toggleCell(row, col)}
              style={{
                background: opacity ? gridColor : 'transparent',
                opacity: opacity || 0,
                cursor: 'pointer',
                transition: 'background-color 0.3s ease-in-out, opacity 0.3s ease-in-out',
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

