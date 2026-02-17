'use client'

import Button from '../../components/Button'
import SectionHeader from '../../components/SectionHeader'
import JournalCard from '../../components/JournalCard'
import { articles } from '../../journal/articles/registry'

export default function JournalHighlightsSection() {
  // Debug mode - set to false to hide all container borders
  const DEBUG = false;

  // Get up to 3 articles for display
  const displayArticles = articles.slice(0, 3);

  return (
    <div className={`relative pb-fluid-3xl md:pb-[100px] pt-fluid-3xl md:pt-[100px] ${DEBUG ? 'border-4 border-purple-500' : ''}`}>
      <div className={`max-w-[1680px] mx-auto px-fluid-md md:px-4 sm:px-6 lg:px-[60px] ${DEBUG ? 'border-4 border-blue-500' : ''}`}>
        {/* Section Header - only show "MORE" button if there are multiple articles */}
        <SectionHeader
          title="Journal Highlights"
          color="sunny"
          buttonText={articles.length > 1 ? "MORE JOURNAL ARTICLES" : undefined}
          buttonHref={articles.length > 1 ? "/journal" : undefined}
          className={DEBUG ? 'border-2 border-green-500' : ''}
        />

        {/* Journal Cards Grid - adapts based on number of articles */}
        <div className={`grid gap-fluid-xl md:gap-16 ${
          displayArticles.length === 1 
            ? 'md:grid-cols-1 max-w-xl' 
            : displayArticles.length === 2 
              ? 'md:grid-cols-2' 
              : 'md:grid-cols-2 lg:grid-cols-3'
        } ${DEBUG ? 'border-2 border-orange-500' : ''}`}>
          {displayArticles.map((article) => (
            <JournalCard 
              key={article.slug}
              article={article}
              showReadMoreLink={true}
            />
          ))}
        </div>

        {/* Button - Bottom on mobile, only show if multiple articles */}
        {articles.length > 1 && (
          <div className="md:hidden flex justify-center mt-fluid-xl">
            <Button variant="sunny" href="/journal">
              MORE JOURNAL ARTICLES
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
