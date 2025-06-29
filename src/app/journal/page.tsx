// src/app/journal/page.tsx

import type { Metadata } from "next"
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { getAllJournalPostsQuery } from '@/sanity/lib/queries'
import JournalContent from './JournalContent'

// Remove dynamic and revalidate exports
export const dynamic = 'force-dynamic'

// Define the type for our journal post
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

export default async function JournalPage() {
  // Fetch posts on the server
  const posts = await client.fetch<JournalPost[]>(getAllJournalPostsQuery);

  return <JournalContent initialPosts={posts} />;
}
