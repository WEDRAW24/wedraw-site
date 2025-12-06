'use client';

import { useRef, useEffect } from "react";

interface MagnetLinesProps {
  rows?: number;
  columns?: number;
  containerSize?: string;
  lineColor?: string;
  lineWidth?: string;
  lineHeight?: string;
  baseAngle?: number;
  className?: string;
  style?: React.CSSProperties;
  centerGap?: {
    width: number;
    height: number;
  };
  isAnimating?: boolean;
}

function MagnetLines({
  rows = 9,
  columns = 9,
  containerSize = "80vmin",
  lineColor = "#efefef",
  lineWidth = "1vmin",
  lineHeight = "6vmin",
  baseAngle = -10,
  className = "",
  style = {},
  centerGap,
  isAnimating = false
}: MagnetLinesProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useRef<boolean>(false);
  const previousAngles = useRef<Map<HTMLSpanElement, number>>(new Map());
  const rafId = useRef<number>();
  const pendingUpdate = useRef<{ x: number; y: number } | null>(null);

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

    // CRITICAL: Initialize ALL elements with baseAngle immediately
    items.forEach((item) => {
      item.style.setProperty('--rotate', `${baseAngle}deg`);
      item.style.transform = `rotate(${baseAngle}deg)`;
      previousAngles.current.set(item, baseAngle);
    });

    const normalizeAngle = (angle: number): number => {
      angle = angle % 360;
      if (angle > 180) angle -= 360;
      if (angle < -180) angle += 360;
      return angle;
    };

    const calculateShortestRotation = (currentAngle: number, targetAngle: number): number => {
      const diff = normalizeAngle(targetAngle - currentAngle);
      return currentAngle + diff;
    };

    // Use requestAnimationFrame for smooth, performant updates
    const updateRotations = () => {
      if (!pendingUpdate.current || isAnimating) {
        rafId.current = undefined;
        return;
      }

      const pointer = pendingUpdate.current;
      pendingUpdate.current = null;

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;

        const b = pointer.x - centerX;
        const a = pointer.y - centerY;
        const c = Math.sqrt(a * a + b * b) || 1;
        const angle = ((Math.acos(b / c) * 180) / Math.PI) * (pointer.y > centerY ? 1 : -1);
        
        const prevAngle = previousAngles.current.get(item) ?? baseAngle;
        const newAngle = calculateShortestRotation(prevAngle, angle);
        
        previousAngles.current.set(item, newAngle);
        // Set BOTH: CSS variable (for animation) AND direct transform (for performance)
        item.style.setProperty('--rotate', `${newAngle}deg`);
        item.style.transform = `rotate(${newAngle}deg)`;
      });

      rafId.current = undefined;
    };

    const onPointerMove = (pointer: { x: number; y: number }) => {
      if (isAnimating) return;

      // Store the latest position
      pendingUpdate.current = pointer;

      // Schedule update if not already scheduled
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(updateRotations);
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
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      previousAngles.current.clear();
      pendingUpdate.current = null;
      observer.disconnect();
    };
  }, [isAnimating, baseAngle, rows, columns]); // CRITICAL: Reinitialize when grid dimensions change

  const shouldRenderLine = (row: number, col: number) => {
    if (!centerGap) return true;
    
    const centerColStart = Math.floor((columns - centerGap.width) / 2);
    const centerColEnd = centerColStart + centerGap.width;
    const centerRowStart = Math.floor((rows - centerGap.height) / 2);
    const centerRowEnd = centerRowStart + centerGap.height;

    return !(row >= centerRowStart && row < centerRowEnd && 
             col >= centerColStart && col < centerColEnd);
  };

  const lines = Array.from({ length: rows * columns }).map((_, i) => {
    const row = Math.floor(i / columns);
    const col = i % columns;

    if (!shouldRenderLine(row, col)) {
      return <div key={i} style={{ gridArea: `${row + 1} / ${col + 1}` }} />;
    }

    return (
      <span
        key={i}
        className={`block origin-center ${isAnimating ? 'animate-spin-twice transition-transform' : ''}`}
        style={{
          backgroundColor: lineColor,
          width: lineWidth,
          height: lineHeight,
          // Transform will be set directly via JavaScript for better mobile performance
          willChange: "transform",
          gridArea: `${row + 1} / ${col + 1}`,
          // No transition during interaction for instant response
          transition: isAnimating ? undefined : 'none',
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
      {lines}
    </div>
  );
}

export { MagnetLines };
