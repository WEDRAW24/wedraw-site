import { StaticImageData } from 'next/image'

export interface ProjectMetadata {
  slug: string    // Required for routing and identification
  title: string   // Required for display
  year: number    // Required per the memory about including year in slugs
  location: string // Required for ProjectLabel display
  description?: string // Optional project description
  category: 'festivals' | 'exhibitions' | 'sports' | 'cultural' // Project category
  coverImage: string | StaticImageData // Required cover image
  gridColumn: number  // Starting column (1-12) for grid positioning
  gridRow: number     // Starting row for grid positioning
  gridWidth: number   // Number of columns to span (1-12)
  gridHeight: number  // Number of rows to span
}