import { ProjectMetadata } from '../types'
import { images } from './images'

export const metadata: ProjectMetadata = {
  slug: 'liverpool-river-of-light-2024',
  title: 'Liverpool River of Light',
  year: 2024,
  location: 'Liverpool Waterfront',
  description: "A spectacular light festival illuminating Liverpool's waterfront",
  category: 'Event',
  coverImage: images.hero
} as const 