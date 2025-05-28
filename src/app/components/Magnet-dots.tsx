'use client';

import { useRef, useEffect } from "react";

interface MagnetDotsProps {
  rows?: number;
  columns?: number;
  containerSize?: string;
  dotColor?: string;
  minDotSize?: string;
  maxDotSize?: string;
  maxDistance?: number;
  className?: string;
  style?: React.CSSProperties;
}

function MagnetDots({
  rows = 11,
  columns = 11,
  containerSize = "115.6vmin",
  dotColor = "var(--color-blueprint)",
  minDotSize = "0.8vmin",
  maxDotSize = "5vmin",
  maxDistance = 300,
  className = "",
  style = {}
}: MagnetDotsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number>();
  const lastUpdateTime = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const dots = container.querySelectorAll<HTMLDivElement>(".dot");
    const FRAME_RATE = 1000 / 60; // Target 60fps
    
    const updateDotSizes = (pointer: { x: number; y: number }, timestamp: number) => {
      // Throttle updates to target frame rate
      if (timestamp - lastUpdateTime.current < FRAME_RATE) {
        rafRef.current = requestAnimationFrame((newTimestamp) => 
          updateDotSizes(pointer, newTimestamp)
        );
        return;
      }

      lastUpdateTime.current = timestamp;

      const minSize = parseFloat(minDotSize);
      const maxSize = parseFloat(maxDotSize);
      const unit = minDotSize.replace(/[\d.]/g, '');

      dots.forEach((dot) => {
        const rect = dot.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;

        const dx = pointer.x - centerX;
        const dy = pointer.y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        const dotSizeRatio = Math.max(0, 1 - (distance / maxDistance));
        const sizeValue = minSize + (dotSizeRatio * (maxSize - minSize));
        const sizeWithUnit = `${sizeValue}${unit}`;
        
        dot.style.setProperty("--dot-size", sizeWithUnit);
      });
    };

    let isPointerMoving = false;
    let lastPointerEvent: { x: number; y: number } | null = null;

    const handlePointerMove = (e: PointerEvent) => {
      lastPointerEvent = { x: e.clientX, y: e.clientY };
      
      if (!isPointerMoving) {
        isPointerMoving = true;
        rafRef.current = requestAnimationFrame((timestamp) => {
          if (lastPointerEvent) {
            updateDotSizes(lastPointerEvent, timestamp);
          }
          isPointerMoving = false;
        });
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    // Initial state - set all dots to minimum size
    dots.forEach((dot) => {
      dot.style.setProperty("--dot-size", minDotSize);
    });

    // If there are dots, set up an initial position simulation
    if (dots.length) {
      updateDotSizes({ 
        x: window.innerWidth * 2, 
        y: window.innerHeight * 2 
      }, performance.now());
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [minDotSize, maxDotSize, maxDistance]);

  const total = rows * columns;
  const dots = Array.from({ length: total }, (_, i) => (
    <div
      key={i}
      className="dot"
      style={{
        backgroundColor: dotColor,
        borderRadius: "50%",
        width: "var(--dot-size)",
        height: "var(--dot-size)",
        willChange: "width, height",
        margin: "0 auto",
      }}
    />
  ));

  return (
    <div
      ref={containerRef}
      className={`grid place-items-center ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        width: containerSize,
        height: containerSize,
        ...style
      }}
    >
      {dots}
    </div>
  );
}

export { MagnetDots };
