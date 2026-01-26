'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

// Row content
const ROW_1_WORDS = ['Fun', 'Experiment', 'Tea', 'Ideas', 'Playful', 'Creative', 'Cake', 'Innovative', 'Ingenuity', 'Journey', 'Cheese', 'Learning', 'Play', 'Curious', 'Apples', 'Inquisitive', 'Music']
const ROW_2_WORDS = ['We', 'Share', 'Collaboration', 'Opener', 'Interaction', 'We', 'Community', 'Empowerment', 'Independent', 'Communication', 'Together']
const ROW_3_WORDS = ['Sketch', 'Draw', 'Research', 'Design', 'Lateral', 'We', 'Thinking', 'Solutions', 'Clarity', 'Efficiency']
const ROW_4_WORDS = ['Tools', 'Paper', 'Innovation', 'Wood', 'Place', 'Hands', 'Steel', 'Outdoors', 'Stationery', 'Pioneer', 'Pencil', 'Landscape', 'Materials', 'Pen', 'Sustainability']

// Connection pairs (adjacent rows only)
const CONNECTIONS: Record<string, Set<string>> = {
  // Row 1 ↔ Row 2
  'Creative': new Set(['Communication']),
  'Innovative': new Set(['Collaboration', 'Communication']),
  'Ideas': new Set(['Share', 'Collaboration']),
  'Curious': new Set(['Interaction']),
  'Playful': new Set(['Community']),
  'Journey': new Set(['Together']),
  'Fun': new Set(['Community']),
  'Cheese': new Set(['Share']),
  'Inquisitive': new Set(['Interaction']),
  'Play': new Set(['Together', 'We']),
  'Tea': new Set(['Community']),
  'Cake': new Set(['Share']),
  'Music': new Set(['Together']),
  // Row 2 ↔ Row 3
  'We': new Set(['Design', 'Draw', 'Pioneer', 'Sketch', 'Research', 'Thinking', 'Solutions', 'Innovation']),
  'Communication': new Set(['Clarity']),
  'Collaboration': new Set(['Design']),
  'Independent': new Set(['Thinking']),
  'Together': new Set(['Design']),
  // Row 3 ↔ Row 4
  'Sketch': new Set(['Pencil', 'Paper', 'Pen']),
  'Hands': new Set(['Cheese']),
  'Design': new Set(['Tools']),
  'Thinking': new Set(['Innovation', 'Sustainability']),
  'Solutions': new Set(['Sustainability']),
  'Draw': new Set(['Pen', 'Paper']),
  'Research': new Set(['Materials']),
  'Clarity': new Set(['Tools']),
  'Efficiency': new Set(['Tools', 'Materials']),
}

function MarqueeRow({ 
  words, 
  direction, 
  duration, 
  rowIndex,
  isPaused,
  flashingElements,
}: { 
  words: string[]
  direction: 'left' | 'right'
  duration: number
  rowIndex: number
  isPaused: boolean
  flashingElements: Set<string>
}) {
  const getElementKey = (copy: number, index: number) => `${rowIndex}-${copy}-${index}`
  
  return (
    <div className="overflow-hidden py-1 md:py-2">
      <div
        data-row={rowIndex}
        className="flex w-max"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
          animationPlayState: isPaused ? 'paused' : 'running',
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
                    flashingElements.has(elKey) ? 'text-blueprint' : 'text-meadow'
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
  const [flashingElements, setFlashingElements] = useState<Set<string>>(new Set()) // Now tracks element keys, not word strings
  const [pausedRows, setPausedRows] = useState<Set<number>>(new Set())
  
  // Track which element pairs have connected this cycle (by their unique identifier)
  const connectedThisCycleRef = useRef<Set<string>>(new Set())
  // Track elements that have gone off-screen (eligible to connect again)
  const offScreenElementsRef = useRef<Set<string>>(new Set())
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
    
    // Mark these specific elements as having connected
    const pairKey = `${el1Key}|${el2Key}`
    connectedThisCycleRef.current.add(pairKey)
    
    setPausedRows(new Set([row1, row2]))
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
    if (!containerRef.current || pausedRows.size > 0 || globalCooldownRef.current) return
    
    const containerRect = containerRef.current.getBoundingClientRect()
    const rows = containerRef.current.querySelectorAll('[data-row]')
    
    // First, check for elements that have gone off-screen and mark them as eligible again
    rows.forEach((row) => {
      const words = row.querySelectorAll('span[data-word]')
      words.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const rowIndex = parseInt(row.getAttribute('data-row') || '0')
        const copy = parseInt(el.getAttribute('data-copy') || '0')
        const index = parseInt(el.getAttribute('data-index') || '0')
        const elKey = getElementKey(rowIndex, copy, index)
        
        // If element is off-screen, mark it so it can connect again when it comes back
        if (rect.right < containerRect.left || rect.left > containerRect.right) {
          offScreenElementsRef.current.add(elKey)
        }
      })
    })
    
    const rowPairs: [number, number][] = [[0, 1], [1, 2], [2, 3]]
    
    for (const [upperRowIdx, lowerRowIdx] of rowPairs) {
      const upperRow = rows[upperRowIdx]
      const lowerRow = rows[lowerRowIdx]
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
        const upperKey = getElementKey(upperRowIdx, upperCopy, upperIndex)
        
        const upperCenterX = upperRect.left + upperRect.width / 2
        
        for (const lowerEl of lowerWords) {
          const lowerRect = lowerEl.getBoundingClientRect()
          
          // Check if FULLY visible in viewport
          if (lowerRect.left < containerRect.left || lowerRect.right > containerRect.right) continue
          
          const lowerWord = lowerEl.getAttribute('data-word') || ''
          const lowerCopy = parseInt(lowerEl.getAttribute('data-copy') || '0')
          const lowerIndex = parseInt(lowerEl.getAttribute('data-index') || '0')
          const lowerKey = getElementKey(lowerRowIdx, lowerCopy, lowerIndex)
          
          const lowerCenterX = lowerRect.left + lowerRect.width / 2
          
          // Check alignment
          if (Math.abs(upperCenterX - lowerCenterX) > ALIGNMENT_THRESHOLD) continue
          
          // Check if this pair has already connected this cycle
          const pairKey = `${upperKey}|${lowerKey}`
          const reversePairKey = `${lowerKey}|${upperKey}`
          
          if (connectedThisCycleRef.current.has(pairKey) || connectedThisCycleRef.current.has(reversePairKey)) {
            // Check if both have gone off-screen since connecting (eligible again)
            if (offScreenElementsRef.current.has(upperKey) && offScreenElementsRef.current.has(lowerKey)) {
              // Remove from connected set and off-screen set - they can connect again
              connectedThisCycleRef.current.delete(pairKey)
              connectedThisCycleRef.current.delete(reversePairKey)
              offScreenElementsRef.current.delete(upperKey)
              offScreenElementsRef.current.delete(lowerKey)
            } else {
              continue // Still in cooldown
            }
          }
          
          // Check if valid connection
          const isValid = CONNECTIONS[upperWord]?.has(lowerWord) || CONNECTIONS[lowerWord]?.has(upperWord)
          
          if (isValid) {
            triggerConnection(upperRowIdx, lowerRowIdx, upperKey, lowerKey)
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
      
      <div ref={containerRef} className="w-full overflow-hidden">
        <MarqueeRow 
          words={ROW_1_WORDS} 
          rowIndex={0} 
          direction="right" 
          duration={60} 
          isPaused={pausedRows.has(0)}
          flashingElements={flashingElements}
        />
        <MarqueeRow 
          words={ROW_2_WORDS} 
          rowIndex={1} 
          direction="left" 
          duration={55} 
          isPaused={pausedRows.has(1)}
          flashingElements={flashingElements}
        />
        <MarqueeRow 
          words={ROW_3_WORDS} 
          rowIndex={2} 
          direction="right" 
          duration={50} 
          isPaused={pausedRows.has(2)}
          flashingElements={flashingElements}
        />
        <MarqueeRow 
          words={ROW_4_WORDS} 
          rowIndex={3} 
          direction="left" 
          duration={65} 
          isPaused={pausedRows.has(3)}
          flashingElements={flashingElements}
        />
      </div>
    </>
  )
}
