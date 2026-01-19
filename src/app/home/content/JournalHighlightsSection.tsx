'use client'

import Button from '../../components/Button'
import SectionHeader from '../../components/SectionHeader'
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
        <SectionHeader
          title="Journal Highlights"
          color="sunny"
          buttonText="MORE JOURNAL ARTICLES"
          buttonHref="/journal"
          className={DEBUG ? 'border-2 border-green-500' : ''}
        />

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
          <Button variant="sunny" href="/journal">
            MORE JOURNAL ARTICLES
          </Button>
        </div>
      </div>
    </div>
  )
}
