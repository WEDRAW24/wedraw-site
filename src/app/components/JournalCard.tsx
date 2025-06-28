'use client';

import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'
import CategoryLabel from './CategoryLabel'
import UnderlineLink from './UnderlineLink'

type JournalPost = {
  _id: string
  title: string
  slug: {
    current: string
  }
  date: string
  category: string
  blurb: string | null
  mainImage: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt: string
  }
}

type JournalCardProps = {
  post: JournalPost;
  showReadMoreLink?: boolean;
}

export default function JournalCard({ post, showReadMoreLink = false }: JournalCardProps) {
  return (
    <Link 
      href={`/journal/${post.slug.current}`}
      className="block group cursor-pointer"
    >
      <article className="relative">
        {/* Category Label */}
        <div className="absolute top-4 left-4 z-10">
          <CategoryLabel 
            category={post.category.toLowerCase() as 'news' | 'media' | 'explorations'} 
            variant="white"
          />
        </div>

        {/* Main Image */}
        <div className="aspect-[4/3] relative overflow-hidden">
          {post.mainImage && (
            <Image
              src={urlFor(post.mainImage).width(800).height(600).url()}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          )}
        </div>

        {/* Content Section */}
        <div className="mt-6 space-y-4">
          {/* Date */}
          <p className="font-mono text-sunny text-[16px] font-semibold leading-[100%] tracking-[0%] uppercase">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>

          {/* Title */}
          <h3 className="text-[30px] font-extrabold leading-[130%] tracking-[0%]">
            {post.title}
          </h3>

          {/* Blurb */}
          {post.blurb && (
            <p className="text-[18px] text-gray-600 line-clamp-3">{post.blurb}</p>
          )}

          {/* Read More Link - Only shown if showReadMoreLink is true */}
          {showReadMoreLink && (
            <div className="pt-2">
              <UnderlineLink href={`/journal/${post.slug.current}`} variant="default" className="text-sunny hover:text-sunny">
                READ MORE
              </UnderlineLink>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
} 