// src/app/journal/page.tsx

import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { getAllJournalPostsQuery, debugQuery, testQuery } from '@/sanity/lib/queries'
import Image from 'next/image'
import Link from 'next/link'

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

// Force dynamic to prevent caching
export const dynamic = 'force-dynamic'
export const revalidate = 0

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
    console.log('Fetched posts:', posts)

    // Additional debug query
    const debugResults = await client.fetch(debugQuery)
    console.log('Debug results:', debugResults)

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
      <main className="min-h-screen px-6 py-12 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Journal</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link 
              href={`/journal/${post.slug.current}`} 
              key={post._id}
              className="group"
            >
              <article className="border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                {post.mainImage && (
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                      src={urlFor(post.mainImage).width(800).height(450).url()}
                      alt={post.mainImage.alt || post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-gray-600">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                    <span className="text-sm font-medium text-gray-600">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600">
                    {post.title}
                  </h2>
                  {post.blurb && (
                    <p className="text-gray-600 line-clamp-2">{post.blurb}</p>
                  )}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    )
  } catch (error) {
    console.error('Error fetching posts:', error)
    return (
      <main className="min-h-screen px-6 py-12 max-w-7xl mx-auto">
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
