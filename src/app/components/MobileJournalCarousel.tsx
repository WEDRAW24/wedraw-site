'use client'

import { useState } from 'react'
import JournalCard from './JournalCard'
import { ArticleMetadata } from '@/app/journal/articles/types'

interface MobileJournalCarouselProps {
  articles: ArticleMetadata[]
}

export default function MobileJournalCarousel({ articles }: MobileJournalCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const minSwipeDistance = 50
    
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swiped left - next
        setCurrentIndex((prev) => (prev + 1) % articles.length)
      } else {
        // Swiped right - previous
        setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length)
      }
    }
    
    setTouchStart(0)
    setTouchEnd(0)
  }

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div 
        className="relative w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Carousel Track */}
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}
        >
          {articles.map((article) => (
            <div 
              key={article.slug}
              className="w-full flex-shrink-0 px-4"
            >
              <JournalCard 
                article={article}
                showReadMoreLink={true}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-3 mt-fluid-lg">
        {articles.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-sunny w-8'
                : 'bg-sunny opacity-30 w-3'
            }`}
            aria-label={`Go to article ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
