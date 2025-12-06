import { ArticleMetadata } from '../types'
import { images } from './images'

export const metadata: ArticleMetadata = {
  slug: 'test-article-news',
  title: 'Test Article News',
  date: '20 February 2025',
  category: 'news',
  blurb: 'A test news article placeholder',
  coverImage: images.hero,
} as const

