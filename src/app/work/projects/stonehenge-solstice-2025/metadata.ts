import { ProjectMetadata } from '../types'
import { images } from './images'

export const metadata: ProjectMetadata = {
  slug: 'stonehenge-solstice-2025',
  title: 'Stonehenge Solstice',
  year: 2025,
  location: 'Stonehenge',
  description: 'Site design and planning for the summer solstice celebrations at Stonehenge.',
  category: 'cultural',
  coverImage: images.hero,
  gridColumn: 2,
  gridRow: 32,
  gridWidth: 10,
  gridHeight: 5
} as const
