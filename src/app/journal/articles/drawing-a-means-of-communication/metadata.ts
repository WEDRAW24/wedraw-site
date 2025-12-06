import { ArticleMetadata } from '../types'
import { images } from './images'

export const metadata: ArticleMetadata = {
  slug: 'drawing-a-means-of-communication',
  title: 'Drawing: a means of communication',
  date: '1 December 2025',
  category: 'explorations',
  blurb: 'What does site design really mean in the context of events?',
  coverImage: images.hero,
} as const

