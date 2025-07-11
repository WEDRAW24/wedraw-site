import { StaticImageData } from 'next/image'

export interface ProjectMetadata {
  slug: string    // Required for routing and identification
  title: string   // Required for display
  year: number    // Required per the memory about including year in slugs
  location: string // Required for ProjectLabel display
  description?: string // Optional project description
  category?: string   // Optional project category
  coverImage: string | StaticImageData // Required cover image
}