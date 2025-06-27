// src/app/journal/page.tsx

import type { Metadata } from "next"
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { getAllJournalPostsQuery, debugQuery, testQuery } from '@/sanity/lib/queries'
import Image from 'next/image'
import Link from 'next/link'
import CategoryLabel from '../components/CategoryLabel'
import UnderlineLink from '../components/UnderlineLink'
import CTA from '../components/CTA'

// Force dynamic rendering and disable cache
export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'

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
  try {
    // Log environment variables (without sensitive data)
    console.log('Environment check:', {
      hasProjectId: !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      hasDataset: !!process.env.NEXT_PUBLIC_SANITY_DATASET,
      apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION
    })

    // Test basic connectivity
    console.log('Testing basic query...')
    const testResults = await client.fetch(testQuery)
    console.log('Test results:', testResults)

    // Fetch all posts
    console.log('Fetching posts with query:', getAllJournalPostsQuery)
    const posts = await client.fetch<JournalPost[]>(getAllJournalPostsQuery)
    
    // Debug log for all post categories
    console.log('All post categories:', posts.map(post => ({
      title: post.title,
      category: post.category
    })))

    if (!posts || posts.length === 0) {
      return (
        <main className="min-h-screen px-6 py-12 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Journal</h1>
          <div className="space-y-4">
            <p className="text-gray-600">No posts found. Debug information below:</p>
            <div className="bg-gray-100 p-4 rounded-lg space-y-4">
              <div>
                <h2 className="font-bold">Environment Check:</h2>
                <pre className="overflow-auto">
                  <code>{JSON.stringify({
                    hasProjectId: !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
                    hasDataset: !!process.env.NEXT_PUBLIC_SANITY_DATASET,
                    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION
                  }, null, 2)}</code>
                </pre>
              </div>
              <div>
                <h2 className="font-bold">Basic Query Test:</h2>
                <pre className="overflow-auto">
                  <code>{JSON.stringify(testResults, null, 2)}</code>
                </pre>
              </div>
              <div>
                <h2 className="font-bold">Main Query Results:</h2>
                <pre className="overflow-auto">
                  <code>{JSON.stringify(posts, null, 2)}</code>
                </pre>
              </div>
              <div>
                <h2 className="font-bold">Debug Query Results:</h2>
                <pre className="overflow-auto">
                  <code>{JSON.stringify(debugResults, null, 2)}</code>
                </pre>
              </div>
            </div>
          </div>
        </main>
      )
    }

    // If we have posts, display them
    return (
      <main className="min-h-screen px-6 py-12 max-w-7xl mx-auto relative z-0">
        <h1 className="text-[85px] font-bold leading-[120%] mb-16 text-sunny">Journal</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link 
              href={`/journal/${post.slug.current}`}
              key={post._id}
              className="block group cursor-pointer"
            >
              <article className="relative">
                {/* Category Label - Absolute positioned on top of image */}
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
                  <p className="font-mono text-sunny text-sm">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }).toUpperCase()}
                  </p>

                  {/* Title */}
                  <h2 className="text-2xl font-bold">
                    {post.title}
                  </h2>

                  {/* Blurb */}
                  {post.blurb && (
                    <p className="text-gray-600 line-clamp-3">{post.blurb}</p>
                  )}

                  {/* Read More Link */}
                  <div className="pt-2">
                    <UnderlineLink href={`/journal/${post.slug.current}`} variant="sunny">
                      READ MORE
                    </UnderlineLink>
                  </div>
                </div>
              </article>
            </Link>
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
    )
  } catch (error) {
    console.error('Error fetching posts:', error)
    return (
      <main className="min-h-screen px-6 py-12 max-w-7xl mx-auto relative z-0">
        <h1 className="text-4xl font-bold mb-8">Journal</h1>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600">Error loading posts. Debug information below:</p>
          <div className="mt-4 space-y-4">
            <div>
              <h2 className="font-bold">Error Details:</h2>
              <pre className="mt-2 bg-white p-4 rounded-lg overflow-auto">
                <code>{JSON.stringify(error, null, 2)}</code>
              </pre>
            </div>
            <div>
              <h2 className="font-bold">Environment Check:</h2>
              <pre className="mt-2 bg-white p-4 rounded-lg overflow-auto">
                <code>{JSON.stringify({
                  hasProjectId: !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
                  hasDataset: !!process.env.NEXT_PUBLIC_SANITY_DATASET,
                  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION
                }, null, 2)}</code>
              </pre>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
