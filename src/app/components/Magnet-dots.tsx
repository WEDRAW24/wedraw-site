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
  centerGap?: {
    width: number;  // width in columns
    height: number; // height in rows
  };
  isAnimating?: boolean;
}

function MagnetDots({
  rows = 9,
  columns = 9,
  containerSize = "80vmin",
  dotColor = "#efefef",
  minDotSize = "0.5vmin",
  maxDotSize = "2vmin",
  maxDistance = 100,
  className = "",
  style = {},
  centerGap,
  isAnimating = false
}: MagnetDotsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number>();
  const lastUpdateTime = useRef<number>(0);
  const isVisible = useRef<boolean>(false);
  const pendingUpdate = useRef<{ x: number; y: number } | null>(null);

  const calculateDistanceFromCenter = (row: number, col: number): number => {
    const centerRow = Math.floor(rows / 2);
    const centerCol = Math.floor(columns / 2);
    return Math.sqrt(Math.pow(row - centerRow, 2) + Math.pow(col - centerCol, 2));
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Setup intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible.current = entries[0].isIntersecting;
      },
      { threshold: 0 }
    );

    observer.observe(container);

    const items = container.querySelectorAll<HTMLSpanElement>("span");

    // CRITICAL: Initialize ALL elements with base scale immediately
    items.forEach((item) => {
      item.style.setProperty('--scale', '0.1');
      item.style.transform = "scale(0.1)";
    });

    // Use requestAnimationFrame for smooth, performant updates
    const updateScales = () => {
      if (!pendingUpdate.current || isAnimating) {
        rafRef.current = undefined;
        return;
      }

      const pointer = pendingUpdate.current;
      pendingUpdate.current = null;

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;

        const distance = Math.sqrt(
          Math.pow(pointer.x - centerX, 2) + Math.pow(pointer.y - centerY, 2)
        );

        const scale = Math.max(
          0.1,
          1 - Math.min(distance, maxDistance) / maxDistance
        );

        // Set BOTH: CSS variable (for animation) AND direct transform (for performance)
        item.style.setProperty('--scale', `${scale}`);
        item.style.transform = `scale(${scale})`;
      });

      rafRef.current = undefined;
    };

    const onPointerMove = (pointer: { x: number; y: number }) => {
      if (isAnimating) return;

      // Store the latest position
      pendingUpdate.current = pointer;

      // Schedule update if not already scheduled
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updateScales);
      }
    };

    // Create handler functions with proper signatures for cleanup
    const handlePointerMove = (e: PointerEvent) => {
      onPointerMove({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e: MouseEvent) => {
      onPointerMove({ x: e.clientX, y: e.clientY });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        onPointerMove({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      }
    };

    // Add ALL event listeners (pointer, mouse, AND touch for maximum compatibility)
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      // Cancel any pending animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      pendingUpdate.current = null;
      observer.disconnect();
    };
  }, [maxDistance, isAnimating, rows, columns]); // CRITICAL: Reinitialize when grid dimensions change

  const shouldRenderDot = (row: number, col: number) => {
    if (!centerGap) return true;
    
    const centerColStart = Math.floor((columns - centerGap.width) / 2);
    const centerColEnd = centerColStart + centerGap.width;
    const centerRowStart = Math.floor((rows - centerGap.height) / 2);
    const centerRowEnd = centerRowStart + centerGap.height;

    return !(row >= centerRowStart && row < centerRowEnd && 
             col >= centerColStart && col < centerColEnd);
  };

  const dots = Array.from({ length: rows * columns }).map((_, i) => {
    const row = Math.floor(i / columns);
    const col = i % columns;

    if (!shouldRenderDot(row, col)) {
      return <div key={i} style={{ gridArea: `${row + 1} / ${col + 1}` }} />;
    }

    const distanceFromCenter = calculateDistanceFromCenter(row, col);
    const maxDistance = Math.sqrt(Math.pow(rows/2, 2) + Math.pow(columns/2, 2));
    const normalizedDelay = (distanceFromCenter / maxDistance) * 0.5; // Max delay of 0.5s

    return (
      <span
        key={i}
        className={`block rounded-full transition-transform ${isAnimating ? 'animate-pulse-ripple' : ''}`}
        style={{
          backgroundColor: dotColor,
          width: maxDotSize,
          height: maxDotSize,
          transform: "scale(var(--scale, 0.1))",
          willChange: "transform",
          gridArea: `${row + 1} / ${col + 1}`,
          animationDelay: isAnimating ? `${normalizedDelay}s` : '0s',
        }}
      />
    );
  });

  return (
    <div
      ref={containerRef}
      className={`grid place-items-center ${className}`}
      style={{
        display: 'grid',
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
