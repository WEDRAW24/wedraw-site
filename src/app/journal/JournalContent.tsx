'use client';

import { useState } from 'react'
import CategoryFilter from '../components/CategoryFilter'
import JournalCard from '../components/JournalCard'
import CTA from '../components/CTA'

type JournalPost = {
  _id: string
  _type: string
  _createdAt: string
  _updatedAt: string
  title: string
  slug: {
    _type: 'slug'
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
  mainBody?: any[]
  featured?: boolean
  moreArticlesTag?: string
}

type JournalContentProps = {
  initialPosts: JournalPost[]
}

export default function JournalContent({ initialPosts }: JournalContentProps) {
  const [selectedCategories, setSelectedCategories] = useState<('all' | 'news' | 'media' | 'explorations')[]>(['all']);

  const filteredPosts = initialPosts.filter(post => 
    selectedCategories.includes('all') || selectedCategories.includes(post.category.toLowerCase() as 'news' | 'media' | 'explorations')
  );

  return (
    <main className="min-h-screen px-12 pb-48 pt-12 max-w-[90vw] mx-auto relative z-0">
      <div className="flex items-end gap-8 mb-16">
        <h1 className="text-[85px] font-bold leading-[120%] text-sunny -mb-2">Journal</h1>
        <p className="text-sunny text-[24px] font-bold leading-[100%] tracking-[0%] mb-1">Studio updates, insights and explorations</p>
      </div>

      <div className="mb-16">
        <CategoryFilter
          selectedCategories={selectedCategories}
          onCategoryChange={setSelectedCategories}
        />
      </div>

      <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <JournalCard 
            key={post._id}
            post={post}
            showReadMoreLink={true}
          />
        ))}
      </div>

      <div className="mt-32">
        <CTA
          magnetType="grid"
          magnetColor="var(--color-sunny)"
          title="Let's get started"
          buttonText="GET IN TOUCH"
          buttonHref="/contact"
        />
      </div>
    </main>
  );
} 