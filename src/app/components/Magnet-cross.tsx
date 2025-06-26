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
  const isVisible = useRef<boolean>(false);
  const previousAngles = useRef<Map<HTMLDivElement, number>>(new Map());

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

    const items = container.querySelectorAll<HTMLDivElement>(".cross-container");

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

    const onPointerMove = (pointer: { x: number; y: number }) => {
      if (isAnimating || !isVisible.current) return; // Don't respond if animating or not visible

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;

        const b = pointer.x - centerX;
        const a = pointer.y - centerY;
        const c = Math.sqrt(a * a + b * b) || 1;
        const angle = ((Math.acos(b / c) * 180) / Math.PI) * (pointer.y > centerY ? 1 : -1);
        
        const prevAngle = previousAngles.current.get(item) ?? angle;
        const newAngle = calculateShortestRotation(prevAngle, angle);
        
        previousAngles.current.set(item, newAngle);
        item.style.setProperty("--rotate", `${newAngle}deg`);
      });
    };

    window.addEventListener("pointermove", (e: PointerEvent) => {
      onPointerMove({ x: e.clientX, y: e.clientY });
    });

    // Initial position
    if (items.length && isVisible.current) {
      const middleIndex = Math.floor(items.length / 2);
      const rect = items[middleIndex].getBoundingClientRect();
      onPointerMove({ x: rect.x, y: rect.y });
    }

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      previousAngles.current.clear();
      observer.disconnect();
    };
  }, [isAnimating]);

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
        className={`cross-container block origin-center transition-transform ${isAnimating ? 'animate-spin-twice' : ''}`}
        style={{
          transform: "rotate(var(--rotate))",
          position: "relative",
          width: lineHeight,
          height: lineHeight,
          gridArea: `${row + 1} / ${col + 1}`,
          willChange: "transform"
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
