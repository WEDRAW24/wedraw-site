'use client'

import { useId } from 'react'

interface HatchedPatternProps {
  color?: string;
  strokeWidth?: number;
  gap?: number;
  className?: string;
  borderWidth?: number;
}

export default function HatchedPattern({ 
  color = 'white', 
  strokeWidth = 8,
  gap = 24,
  className = '',
  borderWidth = 4
}: HatchedPatternProps) {
  const patternId = useId();

  return (
    <div className={`relative w-full h-full ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id={patternId}
            width={gap}
            height={gap}
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2={gap}
              stroke={color}
              strokeWidth={strokeWidth}
            />
          </pattern>
        </defs>
        <rect 
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={`url(#${patternId})`}
          stroke={color}
          strokeWidth={borderWidth * 2}
          strokeInset="inside"
        />
      </svg>
    </div>
  );
}