'use client'

import { ArticleMetadata } from './types'
import CTA from '@/app/components/CTA'
import MoreFromJournal from '@/app/components/MoreFromJournal'
import Image, { StaticImageData } from 'next/image'

interface ArticleLayoutProps {
  metadata: ArticleMetadata
  heroImage: string | StaticImageData
  children: React.ReactNode
}

export default function ArticleLayout({ metadata, heroImage, children }: ArticleLayoutProps) {
  return (
    <div className="article-page">
      {/* Hero Section - Full width */}
      <section className="relative h-[60vh] min-h-[400px]">
        <div className="absolute inset-0">
          <Image 
            src={heroImage}
            alt={metadata.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Article Info Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-[60px] max-w-[1680px]">
          <div className="max-w-[800px] mx-auto">
            <div className="tag text-sunny border-none mb-4 px-0">
              {metadata.category.toUpperCase()} | {metadata.date.toUpperCase()}
            </div>
            <h1 className="section-heading text-black mb-6">
              {metadata.title}
            </h1>
            <p className="body-lg">
              {metadata.blurb}
            </p>
          </div>
        </div>
      </section>

      {/* Custom Content */}
      <main className="relative z-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-[60px] max-w-[1680px]">
          <div className="max-w-[800px] mx-auto">
            {children}
          </div>
        </div>
      </main>

      {/* More from Journal Section */}
      <MoreFromJournal currentArticleSlug={metadata.slug} />

      {/* CTA Section */}
      <section className="bg-white">
        <CTA 
          magnetType="grid"
          magnetColor="var(--color-sunny)"
          title="Let's get Started"
          buttonText="GET IN TOUCH"
          buttonHref="/contact"
        />
      </section>
    </div>
  )
}

