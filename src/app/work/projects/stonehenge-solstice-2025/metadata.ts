import { ProjectMetadata } from '../types'
import { images } from './images'

export const metadata: ProjectMetadata = {
  slug: 'stonehenge-solstice-2025',
  title: 'Stonehenge Solstice',
  year: 2025,
  location: 'Stonehenge',
  description: 'Site planning for the summer and winter solstice gatherings at one of Britain\'s most significant ancient monuments.',
  category: 'cultural',
  coverImage: images.hero,
  gridColumn: 2,
  gridRow: 15,
  gridWidth: 10,
  gridHeight: 5
} as const
