import { ProjectMetadata } from '../types'
import { images } from './images'

export const metadata: ProjectMetadata = {
  slug: 'liverpool-river-of-light-2024',
  title: 'Liverpool River of Light',
  year: 2024,
  location: 'Liverpool Waterfront',
  description: "Site design for a ten-night celebration of art and illumination, with twelve large-scale installations positioned along a 3km public trail across Liverpool's waterfront.",
  category: 'cultural',
  coverImage: images.hero,
  gridColumn: 7,
  gridRow: 4,
  gridWidth: 6,
  gridHeight: 5
} as const 