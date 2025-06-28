'use client';

import Link from 'next/link'
import Button from './Button'
import JournalCard from './JournalCard'

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

type MoreFromJournalProps = {
  currentPostId: string;
  posts: JournalPost[];
}

export default function MoreFromJournal({ currentPostId, posts }: MoreFromJournalProps) {
  // Filter out current post and get 3 random posts
  const otherPosts = posts
    .filter(post => post._id !== currentPostId)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <section className="pt-24 pb-32">
      <div className="max-w-[90vw] mx-auto px-12">
        <div className="flex justify-between items-end mb-16 pb-8 border-b-2 border-sunny">
          <h2 className="text-[72px] font-area-extrabold leading-[120%] text-sunny">More from the journal</h2>
          <Link href="/journal">
            <Button variant="sunny" size="md">
              MORE JOURNAL ARTICLES
            </Button>
          </Link>
        </div>

        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          {otherPosts.map((post) => (
            <JournalCard 
              key={post._id}
              post={post}
              showReadMoreLink={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 