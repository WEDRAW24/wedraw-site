import { ProjectMetadata } from '../types'
import { images } from './images'

export const metadata: ProjectMetadata = {
  slug: 'liverpool-river-of-light-2024',
  title: 'Liverpool River of Light',
  year: 2024,
  location: 'Liverpool Waterfront',
  description: "We were delighted to provide site design services for the 2024 Liverpool River of Light, a spectacular celebration of creativity and illumination along the city's iconic waterfront.",
  category: 'cultural',
  coverImage: images.hero,
  gridColumn: 7,
  gridRow: 4,
  gridWidth: 6,
  gridHeight: 5
} as const 