'use client';

import Image from 'next/image'
import Link from 'next/link'
import CategoryLabel from './CategoryLabel'
import { ArticleMetadata } from '@/app/journal/articles/types'

type JournalCardProps = {
  article: ArticleMetadata;
  showReadMoreLink?: boolean;
}

export default function JournalCard({ article, showReadMoreLink = false }: JournalCardProps) {
  return (
    <Link 
      href={`/journal/articles/${article.slug}`}
      className="block group cursor-pointer"
    >
      <article className="relative">
        {/* Category Label */}
        <div className="absolute z-10" style={{ top: 'clamp(12px, 2vw, 16px)', left: 'clamp(12px, 2vw, 16px)' }}>
          <CategoryLabel 
            category={article.category as 'news' | 'media' | 'explorations'} 
            variant="white"
          />
        </div>

        {/* Main Image */}
        <div className="aspect-[4/3] relative overflow-hidden">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="mt-fluid-sm space-y-4">
          {/* Date */}
          <p className="font-mono text-sunny font-semibold leading-[100%] tracking-[0%] uppercase" style={{ fontSize: 'clamp(12px, 1.8vw, 16px)' }}>
            {article.date}
          </p>

          {/* Title */}
          <h3 className="heading-3 font-extrabold leading-[130%] tracking-[0%]">
            {article.title}
          </h3>

          {/* Blurb */}
          {article.blurb && (
            <p className="body-md text-gray-600 line-clamp-3">{article.blurb}</p>
          )}

          {/* Read More Text - Only shown if showReadMoreLink is true */}
          {showReadMoreLink && (
            <div className="pt-2">
              <span className="text-sunny font-mono font-medium tracking-wider uppercase underline underline-offset-4 decoration-2" style={{ fontSize: 'clamp(11px, 1.5vw, 14px)' }}>
                READ MORE
              </span>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
} 