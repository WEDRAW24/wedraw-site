'use client';

import Button from './Button'
import JournalCard from './JournalCard'
import SectionHeader from './SectionHeader'
import MobileJournalCarousel from './MobileJournalCarousel'
import { articles } from '@/app/journal/articles/registry'

type MoreFromJournalProps = {
  currentArticleSlug: string;
}

export default function MoreFromJournal({ currentArticleSlug }: MoreFromJournalProps) {
  // Filter out current article and get up to 3 random articles
  const otherArticles = articles
    .filter(article => article.slug !== currentArticleSlug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  // Don't render anything if there are no other articles
  if (otherArticles.length === 0) {
    return null;
  }

  return (
    <section className="pt-24 pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[60px] max-w-[1680px]">
        <SectionHeader
          title={
            <>
              <span className="md:hidden">More from<br />the journal</span>
              <span className="hidden md:inline">More from the journal</span>
            </>
          }
          color="sunny"
          buttonText={otherArticles.length > 1 ? "MORE ARTICLES" : undefined}
          buttonHref={otherArticles.length > 1 ? "/journal" : undefined}
          className="mb-12"
        />

        {/* MOBILE: Swipe carousel */}
        <div className="md:hidden">
          <MobileJournalCarousel articles={otherArticles} />
          
          {/* All Articles Button - Below carousel on mobile, only if multiple articles */}
          {articles.length > 2 && (
            <div className="flex justify-center mt-fluid-xl">
              <Button variant="sunny" href="/journal">
                MORE ARTICLES
              </Button>
            </div>
          )}
        </div>

        {/* DESKTOP: Responsive grid based on article count */}
        <div className={`hidden md:grid gap-16 ${
          otherArticles.length === 1 
            ? 'md:grid-cols-1 max-w-xl' 
            : otherArticles.length === 2 
              ? 'md:grid-cols-2' 
              : 'md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {otherArticles.map((article) => (
            <JournalCard 
              key={article.slug}
              article={article}
              showReadMoreLink={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 