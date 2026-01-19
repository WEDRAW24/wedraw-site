'use client';

import Image from 'next/image'
import Link from 'next/link'
import Tag from './Tag'
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
        {/* Category Tag */}
        <div className="absolute z-10" style={{ top: 'clamp(12px, 2vw, 16px)', left: 'clamp(12px, 2vw, 16px)' }}>
          <Tag 
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
          <p className="link text-sunny uppercase">
            {article.date}
          </p>

          {/* Title */}
          <h3 className="title-card">
            {article.title}
          </h3>

          {/* Blurb */}
          {article.blurb && (
            <p className="body-md text-gray-600 line-clamp-3">{article.blurb}</p>
          )}

          {/* Read More Text - Only shown if showReadMoreLink is true */}
          {showReadMoreLink && (
            <div className="pt-2">
              <span className="link text-sunny uppercase">
                READ MORE
              </span>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
} 