'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

// Row content
const ROW_1_WORDS = ['We', 'Pencil', 'Research', 'Fun', 'Tea', 'Creative', 'Innovative', 'Playful', 'Curious', 'Inquisitive', 'Journey', 'Cheese', 'Landscape', 'Experiment', 'Ingenuity', 'Sustainable']
const ROW_2_WORDS = ['Play', 'Sketch', 'Design', 'Share', 'Collaboration', 'Communication', 'Interaction', 'Opener', 'Independent', 'Draw', 'Empowerment']
const ROW_3_WORDS = ['Music', 'Learning', 'Lateral', 'Clarity', 'Efficiency', 'Apples', 'Cake', 'Innovation', 'Place']
const ROW_4_WORDS = ['Hands', 'Tools', 'Thinking', 'Solutions', 'Ideas', 'Together', 'Community', 'Paper', 'Pen', 'Outdoors', 'Materials']

// Connection pairs - A (above) connects to B (below)
const CONNECTIONS: Record<string, Set<string>> = {
  // Row 1 connections
  'Fun': new Set(['Solutions', 'Learning', 'Ideas']),
  'Tea': new Set(['Cake', 'Share']),
  'Playful': new Set(['Hands', 'Tools', 'Thinking']),
  'Creative': new Set(['Communication', 'Innovation', 'Collaboration']),
  'Innovative': new Set(['Solutions', 'Tools', 'Thinking']),
  'Journey': new Set(['Together']),
  'Cheese': new Set(['Share', 'Hands']),
  'Curious': new Set(['Apples', 'Innovation', 'Thinking', 'Solutions']),
  'Inquisitive': new Set(['Ideas', 'Play', 'Interaction']),
  'We': new Set(['Draw', 'Design', 'Sketch', 'Play']),
  'Research': new Set(['Learning', 'Ideas', 'Design']),
  'Pencil': new Set(['Sketch', 'Design']),
  'Landscape': new Set(['Design']),
  'Sustainable': new Set(['Tools', 'Thinking', 'Solutions']),
  // Row 2 connections
  'Play': new Set(['Music']),
  'Share': new Set(['Ideas', 'Solutions', 'Innovation']),
  'Independent': new Set(['Thinking', 'Ideas']),
  'Sketch': new Set(['Apples', 'Hands', 'Ideas']),
  'Design': new Set(['Together', 'Efficiency', 'Clarity']),
  // Row 3 connections
  'Learning': new Set(['Together', 'Tools', 'Community']),
  'Music': new Set(['Hands']),
  'Lateral': new Set(['Thinking', 'Solutions']),
  'Efficiency': new Set(['Tools']),
  'Innovation': new Set(['Ideas']),
}

function MarqueeRow({ 
  words, 
  direction, 
  speed, 
  rowIndex,
  isPaused,
  flashingElements,
  startOffset = 0,
}: { 
  words: string[]
  direction: 'left' | 'right'
  speed: number // pixels per second
  rowIndex: number
  isPaused: boolean
  flashingElements: Set<string>
  startOffset?: number // percentage offset (0–100) for staggering duplicate rows
}) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [duration, setDuration] = useState(50) // default fallback
  const [offsetPx, setOffsetPx] = useState(0)
  
  const getElementKey = (copy: number, index: number) => `${rowIndex}-${copy}-${index}`
  
  // Calculate duration and offset based on content width and desired speed
  useEffect(() => {
    if (rowRef.current) {
      const contentWidth = rowRef.current.scrollWidth / 2 // Half because we have 2 copies
      const calculatedDuration = contentWidth / speed
      setDuration(calculatedDuration)
      if (startOffset > 0) {
        setOffsetPx(contentWidth * (startOffset / 100))
      }
    }
  }, [speed, words, startOffset])
  
  
  return (
    <div className="overflow-hidden py-1 md:py-2">
      <div
        ref={rowRef}
        data-row={rowIndex}
        className="flex w-max"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
          animationPlayState: isPaused ? 'paused' : 'running',
          marginLeft: startOffset > 0 ? `${-offsetPx}px` : undefined,
        }}
      >
        {/* Two identical copies for seamless loop */}
        {[0, 1].map((copy) => (
          <div key={copy} className="flex" data-copy={copy}>
            {words.map((word, i) => {
              const elKey = getElementKey(copy, i)
              return (
                <span
                  key={`${copy}-${i}`}
                  data-word={word}
                  data-copy={copy}
                  data-index={i}
                  className={`inline-block px-3 md:px-6 lg:px-8 font-area-extrabold uppercase transition-colors duration-300 ${
                    flashingElements.has(elKey) ? 'text-meadow' : 'text-gray-300'
                  }`}
                  style={{
                    fontSize: 'clamp(40px, 8vw, 90px)',
                    lineHeight: '110%',
                  }}
                >
                  {word}
                </span>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ValuesAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mobileContainerRef = useRef<HTMLDivElement>(null)
  const [flashingElements, setFlashingElements] = useState<Set<string>>(new Set())
  const [pausedRows, setPausedRows] = useState<Set<number>>(new Set())
  
  // Track individual elements that have connected this viewport pass (can only connect once per pass)
  const connectedElementsRef = useRef<Set<string>>(new Set())
  // Global cooldown - no connections allowed during this time
  const globalCooldownRef = useRef<boolean>(false)
  
  const PAUSE_DURATION = 1200
  const GLOBAL_COOLDOWN = 4000 // 4 seconds after any connection before another can happen
  const ALIGNMENT_THRESHOLD = 60
  
  const getElementKey = (rowIndex: number, copy: number, index: number) => {
    return `${rowIndex}-${copy}-${index}`
  }
  
  const triggerConnection = useCallback((
    row1: number, 
    row2: number, 
    el1Key: string,
    el2Key: string
  ) => {
    // Set global cooldown immediately
    globalCooldownRef.current = true
    
    // Mark these individual elements as having connected (one connection per viewport pass)
    connectedElementsRef.current.add(el1Key)
    connectedElementsRef.current.add(el2Key)
    
    setPausedRows(new Set([0, 1, 2, 3, 4, 5, 6, 7])) // Pause all rows (0–3 primary, 4–7 staggered mobile)
    setFlashingElements(new Set([el1Key, el2Key])) // Flash specific elements, not all words with same name
    
    // Resume animation after pause
    setTimeout(() => {
      setPausedRows(new Set())
      setFlashingElements(new Set())
    }, PAUSE_DURATION)
    
    // Release global cooldown after longer period
    setTimeout(() => {
      globalCooldownRef.current = false
    }, GLOBAL_COOLDOWN)
  }, [])
  
  const checkConnections = useCallback(() => {
    // Don't check if paused, or during global cooldown
    if (pausedRows.size > 0 || globalCooldownRef.current) return
    
    const desktopVisible = containerRef.current && containerRef.current.getBoundingClientRect().width > 0
    const activeContainer = desktopVisible ? containerRef.current : mobileContainerRef.current
    if (!activeContainer) return
    
    const containerRect = activeContainer.getBoundingClientRect()
    const rows = activeContainer.querySelectorAll('[data-row]')
    
    // First, check for elements that have gone off-screen and reset their connection status
    rows.forEach((row) => {
      const words = row.querySelectorAll('span[data-word]')
      words.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const rowIndex = parseInt(row.getAttribute('data-row') || '0')
        const copy = parseInt(el.getAttribute('data-copy') || '0')
        const index = parseInt(el.getAttribute('data-index') || '0')
        const elKey = getElementKey(rowIndex, copy, index)
        
        // If element is off-screen, remove from connected set so it can connect again when it comes back
        if (rect.right < containerRect.left || rect.left > containerRect.right) {
          connectedElementsRef.current.delete(elKey)
        }
      })
    })
    
    // Check all adjacent row pairs in DOM order (each row can connect to the row directly below it)
    for (let i = 0; i < rows.length - 1; i++) {
      const upperRow = rows[i]
      const lowerRow = rows[i + 1]
      if (!upperRow || !lowerRow) continue
      
      const upperWords = upperRow.querySelectorAll('span[data-word]')
      const lowerWords = lowerRow.querySelectorAll('span[data-word]')
      
      for (const upperEl of upperWords) {
        const upperRect = upperEl.getBoundingClientRect()
        
        // Check if FULLY visible in viewport
        if (upperRect.left < containerRect.left || upperRect.right > containerRect.right) continue
        
        const upperWord = upperEl.getAttribute('data-word') || ''
        const upperCopy = parseInt(upperEl.getAttribute('data-copy') || '0')
        const upperIndex = parseInt(upperEl.getAttribute('data-index') || '0')
        const upperRowId = parseInt(upperRow.getAttribute('data-row') || '0')
        const upperKey = getElementKey(upperRowId, upperCopy, upperIndex)
        
        const upperCenterX = upperRect.left + upperRect.width / 2
        
        for (const lowerEl of lowerWords) {
          const lowerRect = lowerEl.getBoundingClientRect()
          
          // Check if FULLY visible in viewport
          if (lowerRect.left < containerRect.left || lowerRect.right > containerRect.right) continue
          
          const lowerWord = lowerEl.getAttribute('data-word') || ''
          const lowerCopy = parseInt(lowerEl.getAttribute('data-copy') || '0')
          const lowerIndex = parseInt(lowerEl.getAttribute('data-index') || '0')
          const lowerRowId = parseInt(lowerRow.getAttribute('data-row') || '0')
          const lowerKey = getElementKey(lowerRowId, lowerCopy, lowerIndex)
          
          const lowerCenterX = lowerRect.left + lowerRect.width / 2
          
          // Check alignment
          if (Math.abs(upperCenterX - lowerCenterX) > ALIGNMENT_THRESHOLD) continue
          
          // Check if either element has already connected this viewport pass
          if (connectedElementsRef.current.has(upperKey) || connectedElementsRef.current.has(lowerKey)) {
            continue // One connection per element per viewport pass
          }
          
          // Check if valid connection (words must be specified in CONNECTIONS)
          const isValid = CONNECTIONS[upperWord]?.has(lowerWord) || CONNECTIONS[lowerWord]?.has(upperWord)
          
          if (isValid) {
            triggerConnection(upperRowId, lowerRowId, upperKey, lowerKey)
            return
          }
        }
      }
    }
  }, [pausedRows, triggerConnection])
  
  useEffect(() => {
    const interval = setInterval(checkConnections, 150)
    return () => clearInterval(interval)
  }, [checkConnections])
  
  return (
    <>
      <style jsx global>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
      
      {/* Desktop: 4 rows */}
      <div ref={containerRef} className="w-full overflow-hidden hidden md:block">
        <MarqueeRow words={ROW_1_WORDS} rowIndex={0} direction="right" speed={100} isPaused={pausedRows.has(0)} flashingElements={flashingElements} />
        <MarqueeRow words={ROW_2_WORDS} rowIndex={1} direction="left" speed={100} isPaused={pausedRows.has(1)} flashingElements={flashingElements} />
        <MarqueeRow words={ROW_3_WORDS} rowIndex={2} direction="right" speed={100} isPaused={pausedRows.has(2)} flashingElements={flashingElements} />
        <MarqueeRow words={ROW_4_WORDS} rowIndex={3} direction="left" speed={100} isPaused={pausedRows.has(3)} flashingElements={flashingElements} />
      </div>

      {/* Mobile: 8 rows — order 1,2,1,2,3,4,3,4 with alternating directions and 50% stagger on duplicates, half speed */}
      {/* Staggered duplicates use rowIndex 4–7 so their element keys don't collide with primaries */}
      <div ref={mobileContainerRef} className="w-full overflow-hidden md:hidden">
        <MarqueeRow words={ROW_1_WORDS} rowIndex={0} direction="right" speed={50} isPaused={pausedRows.has(0)} flashingElements={flashingElements} />
        <MarqueeRow words={ROW_2_WORDS} rowIndex={1} direction="left" speed={50} isPaused={pausedRows.has(1)} flashingElements={flashingElements} />
        <MarqueeRow words={ROW_1_WORDS} rowIndex={4} direction="right" speed={50} isPaused={pausedRows.has(4)} flashingElements={flashingElements} startOffset={50} />
        <MarqueeRow words={ROW_2_WORDS} rowIndex={5} direction="left" speed={50} isPaused={pausedRows.has(5)} flashingElements={flashingElements} startOffset={50} />
        <MarqueeRow words={ROW_3_WORDS} rowIndex={2} direction="right" speed={50} isPaused={pausedRows.has(2)} flashingElements={flashingElements} />
        <MarqueeRow words={ROW_4_WORDS} rowIndex={3} direction="left" speed={50} isPaused={pausedRows.has(3)} flashingElements={flashingElements} />
        <MarqueeRow words={ROW_3_WORDS} rowIndex={6} direction="right" speed={50} isPaused={pausedRows.has(6)} flashingElements={flashingElements} startOffset={50} />
        <MarqueeRow words={ROW_4_WORDS} rowIndex={7} direction="left" speed={50} isPaused={pausedRows.has(7)} flashingElements={flashingElements} startOffset={50} />
      </div>
    </>
  )
}
