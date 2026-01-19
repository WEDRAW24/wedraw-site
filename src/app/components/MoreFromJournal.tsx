'use client';

import Link from 'next/link'
import Button from './Button'
import JournalCard from './JournalCard'
import { articles } from '@/app/journal/articles/registry'

type MoreFromJournalProps = {
  currentArticleSlug: string;
}

export default function MoreFromJournal({ currentArticleSlug }: MoreFromJournalProps) {
  // Filter out current article and get 3 random articles
  const otherArticles = articles
    .filter(article => article.slug !== currentArticleSlug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <section className="pt-24 pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[60px] max-w-[1680px]">
        <div className="flex justify-between items-end mb-16 pb-8 border-b-2 border-sunny">
          <h2 className="text-[72px] font-area-extrabold leading-[120%] text-sunny">More from the journal</h2>
          <Link href="/journal">
            <Button variant="sunny">
              MORE JOURNAL ARTICLES
            </Button>
          </Link>
        </div>

        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
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