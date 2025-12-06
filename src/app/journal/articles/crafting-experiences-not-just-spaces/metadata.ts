import { ArticleMetadata } from '../types'
import { images } from './images'

export const metadata: ArticleMetadata = {
  slug: 'crafting-experiences-not-just-spaces',
  title: 'Crafting experiences, not just spaces',
  date: '1 November 2025',
  category: 'explorations',
  blurb: 'Communication - the foundation on which great events are built',
  coverImage: images.hero,
} as const

