import { StaticImageData } from 'next/image'

export interface ArticleMetadata {
  slug: string                                    // URL-friendly identifier
  title: string                                   // Article title
  date: string                                    // Publication date (e.g., "1 May 2025")
  category: 'news' | 'media' | 'explorations'    // Article category
  blurb: string                                   // Short description for cards
  coverImage: string | StaticImageData           // Cover image for cards/hero
  featured?: boolean                              // Optional: highlight in featured sections
}

