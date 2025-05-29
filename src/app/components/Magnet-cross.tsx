'use client';

import { useRef, useEffect } from "react";

interface MagnetCrossProps {
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

function MagnetCross({
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
}: MagnetCrossProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const previousAngles = useRef<Map<HTMLDivElement, number>>(new Map());
  const rafRef = useRef<number>();
  const lastUpdateTime = useRef<number>(0);
  const isVisible = useRef<boolean>(false);

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

    const lineContainers = container.querySelectorAll<HTMLDivElement>(".line-container");
    const FRAME_RATE = 1000 / 60; // Target 60fps

    // Set initial rotation based on baseAngle
    lineContainers.forEach((item) => {
      item.style.setProperty("--rotate", `${baseAngle}deg`);
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

    const updateRotations = (pointer: { x: number; y: number }, timestamp: number) => {
      if (isAnimating || !isVisible.current) return; // Don't respond if animating or not visible

      // Throttle updates to target frame rate
      if (timestamp - lastUpdateTime.current < FRAME_RATE) {
        rafRef.current = requestAnimationFrame((newTimestamp) => 
          updateRotations(pointer, newTimestamp)
        );
        return;
      }

      lastUpdateTime.current = timestamp;

      lineContainers.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;

        const dx = pointer.x - centerX;
        const dy = pointer.y - centerY;
        const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
        
        const prevAngle = previousAngles.current.get(item) ?? angle;
        const newAngle = calculateShortestRotation(prevAngle, angle);
        
        previousAngles.current.set(item, newAngle);
        item.style.setProperty("--rotate", `${newAngle}deg`);
      });
    };

    let isPointerMoving = false;
    let lastPointerEvent: { x: number; y: number } | null = null;

    const handlePointerMove = (e: PointerEvent) => {
      lastPointerEvent = { x: e.clientX, y: e.clientY };
      
      if (!isPointerMoving && isVisible.current) {
        isPointerMoving = true;
        rafRef.current = requestAnimationFrame((timestamp) => {
          if (lastPointerEvent) {
            updateRotations(lastPointerEvent, timestamp);
          }
          isPointerMoving = false;
        });
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    // Initial position
    if (lineContainers.length && isVisible.current) {
      const middleIndex = Math.floor(lineContainers.length / 2);
      const rect = lineContainers[middleIndex].getBoundingClientRect();
      updateRotations({ x: rect.x, y: rect.y }, performance.now());
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      previousAngles.current.clear();
      observer.disconnect();
    };
  }, [baseAngle, isAnimating]);

  const shouldRenderCross = (row: number, col: number) => {
    if (!centerGap) return true;
    
    const centerColStart = Math.floor((columns - centerGap.width) / 2);
    const centerColEnd = centerColStart + centerGap.width;
    const centerRowStart = Math.floor((rows - centerGap.height) / 2);
    const centerRowEnd = centerRowStart + centerGap.height;

    return !(row >= centerRowStart && row < centerRowEnd && 
             col >= centerColStart && col < centerColEnd);
  };

  const crosses = Array.from({ length: rows * columns }).map((_, i) => {
    const row = Math.floor(i / columns);
    const col = i % columns;

    if (!shouldRenderCross(row, col)) {
      return <div key={i} style={{ gridArea: `${row + 1} / ${col + 1}` }} />;
    }

    return (
      <div
        key={i}
        className={`line-container block origin-center will-change-transform ${isAnimating ? 'animate-cross-spin' : ''}`}
        style={{
          transform: "rotate(var(--rotate))",
          position: "relative",
          width: lineHeight,
          height: lineHeight,
          gridArea: `${row + 1} / ${col + 1}`,
        }}
      >
        {/* Horizontal line */}
        <span
          className="absolute"
          style={{
            backgroundColor: lineColor,
            width: lineHeight,
            height: lineWidth,
            left: "0",
            top: "50%",
            transform: "translateY(-50%)"
          }}
        />
        {/* Vertical line */}
        <span
          className="absolute"
          style={{
            backgroundColor: lineColor,
            width: lineWidth,
            height: lineHeight,
            top: "0",
            left: "50%",
            transform: "translateX(-50%)"
          }}
        />
      </div>
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
      {crosses}
    </div>
  );
}

export { MagnetCross };
