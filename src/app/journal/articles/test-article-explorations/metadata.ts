import { ArticleMetadata } from '../types'
import { images } from './images'

export const metadata: ArticleMetadata = {
  slug: 'test-article-explorations',
  title: 'Test Article Explorations',
  date: '15 March 2025',
  category: 'explorations',
  blurb: 'Another test article for the explorations category',
  coverImage: images.hero,
} as const

