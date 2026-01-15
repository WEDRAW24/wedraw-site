'use client'

import Button from '../../components/Button'
import JournalCard from '../../components/JournalCard'

// Journal article metadata
import { metadata as introducingWedrawMetadata } from '../../journal/articles/introducing-wedraw/metadata'
import { metadata as craftingExperiencesMetadata } from '../../journal/articles/crafting-experiences-not-just-spaces/metadata'
import { metadata as drawingCommunicationMetadata } from '../../journal/articles/drawing-a-means-of-communication/metadata'

export default function JournalHighlightsSection() {
  // Debug mode - set to false to hide all container borders
  const DEBUG = false;

  return (
    <div className={`relative pb-fluid-3xl md:pb-[100px] pt-fluid-3xl md:pt-[100px] ${DEBUG ? 'border-4 border-purple-500' : ''}`}>
      <div className={`max-w-[1680px] mx-auto px-fluid-md md:px-4 sm:px-6 lg:px-[60px] ${DEBUG ? 'border-4 border-blue-500' : ''}`}>
        {/* Section Header */}
        <div className={`${DEBUG ? 'border-2 border-green-500' : ''}`}>
          <div className="flex justify-between items-center mb-fluid-md md:mb-3">
            {/* Title */}
            <h2 className="text-display-xl md:text-[clamp(36px,4vw,58px)] font-sans font-black md:font-extrabold text-sunny leading-[1.15] md:leading-normal uppercase md:normal-case">
              <span className="block md:inline">Journal</span>
              <span className="block md:inline md:ml-2">Highlights</span>
            </h2>
            
            {/* Button - Hidden on mobile */}
            <div className="hidden md:block">
              <Button variant="sunny" size="md" href="/journal">
                MORE JOURNAL ARTICLES
              </Button>
            </div>
          </div>
          
          {/* Sunny Divider Line */}
          <div className={`h-[2px] bg-sunny mb-fluid-lg md:mb-12 ${DEBUG ? 'border-2 border-cyan-500' : ''}`}></div>
        </div>

        {/* Journal Cards Grid */}
        <div className={`grid gap-fluid-xl md:gap-16 md:grid-cols-2 lg:grid-cols-3 ${DEBUG ? 'border-2 border-orange-500' : ''}`}>
          <JournalCard 
            article={introducingWedrawMetadata}
            showReadMoreLink={true}
          />
          <JournalCard 
            article={drawingCommunicationMetadata}
            showReadMoreLink={true}
          />
          <JournalCard 
            article={craftingExperiencesMetadata}
            showReadMoreLink={true}
          />
        </div>

        {/* Button - Bottom on mobile */}
        <div className="md:hidden flex justify-center mt-fluid-xl">
          <Button variant="sunny" size="md" href="/journal">
            MORE JOURNAL ARTICLES
          </Button>
        </div>
      </div>
    </div>
  )
}
