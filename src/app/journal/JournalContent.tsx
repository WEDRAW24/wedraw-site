'use client';

import { useState } from 'react'
import CategoryFilter from '../components/CategoryFilter'
import JournalCard from '../components/JournalCard'
import CTA from '../components/CTA'
import { articles } from './articles/registry'

export default function JournalContent() {
  const [selectedCategories, setSelectedCategories] = useState<('all' | 'news' | 'media' | 'explorations')[]>(['all']);

  const filteredArticles = articles.filter(article => 
    selectedCategories.includes('all') || selectedCategories.includes(article.category as 'news' | 'media' | 'explorations')
  );

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-fluid-md max-w-[1440px]">
        <div className="px-2 md:px-0">
          <div className="pt-fluid-xl mb-fluid-xl">
            <h1 className="display-xxl text-sunny mb-fluid-sm">Journal</h1>
            <p className="subtitle text-sunny">// studio updates, insights and explorations</p>
          </div>

          <div className="mb-fluid-xl">
            <CategoryFilter
              selectedCategories={selectedCategories}
              onCategoryChange={setSelectedCategories}
            />
          </div>

          <div className="grid gap-fluid-xl md:grid-cols-2 lg:grid-cols-3 pb-fluid-3xl">
            {filteredArticles.map((article) => (
              <JournalCard 
                key={article.slug}
                article={article}
                showReadMoreLink={true}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-white mt-fluid-2xl mb-fluid-2xl">
        <CTA
          magnetType="grid"
          magnetColor="var(--color-sunny)"
          title="Let's get started"
          buttonText="GET IN TOUCH"
          buttonHref="/contact"
        />
      </section>
    </main>
  );
} 