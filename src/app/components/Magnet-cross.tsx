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
}

function MagnetCross({
  rows = 9,
  columns = 9,
  containerSize = "115.6vmin",
  lineColor = "var(--color-blueprint)",
  lineWidth = "1vmin",
  lineHeight = "6vmin",
  baseAngle = -10,
  className = "",
  style = {}
}: MagnetCrossProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const previousAngles = useRef<Map<HTMLDivElement, number>>(new Map());
  const rafRef = useRef<number>();
  const lastUpdateTime = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

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
      
      if (!isPointerMoving) {
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
    if (lineContainers.length) {
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
    };
  }, [baseAngle]);

  const total = rows * columns;
  const crosses = Array.from({ length: total }, (_, i) => (
    <div
      key={i}
      className="line-container block origin-center will-change-transform"
      style={{
        transform: "rotate(var(--rotate))",
        position: "relative",
        width: lineHeight,
        height: lineHeight
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
      {crosses}
    </div>
  );
}

export { MagnetCross };
