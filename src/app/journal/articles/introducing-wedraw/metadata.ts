import { ArticleMetadata } from '../types'
import { images } from './images'

export const metadata: ArticleMetadata = {
  slug: 'introducing-wedraw',
  title: 'Introducing WEDRAW',
  date: '1 May 2025',
  category: 'news',
  blurb: 'A short introduction into WEDRAW, who we are, what we do and where we\'re going.',
  coverImage: images.hero,
  featured: true
} as const

