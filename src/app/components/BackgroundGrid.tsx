'use client'

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
      <div className="container mx-auto px-6 md:ml-[68px] relative w-full max-w-[1440px] left-1/2 -translate-x-1/2">
        <div className="relative">
          {/* Grid container */}
          <div className="absolute" style={{ top: '30px' }}>
            {/* Vertical lines - 13 lines to create 12 columns */}
            {Array.from({ length: 13 }).map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute border-l border-marker/30"
                style={{
                  left: `${i * 118}px`,
                  height: '1180px'
                }}
              />
            ))}

            {/* Horizontal lines - 11 lines to create 10 rows */}
            {Array.from({ length: 11 }).map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute border-t border-marker/30"
                style={{
                  top: `${i * 118}px`,
                  width: '1416px'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 