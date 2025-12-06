import { ProjectMetadata } from '../types'
import { images } from './images'

export const metadata: ProjectMetadata = {
  slug: 'blenheim-palace-horse-trials-2024',
  title: 'Blenheim Palace Horse Trials',
  year: 2024,
  location: 'Blenheim Palace',
  description: "Creating an exceptional experience at one of the world's premier equestrian events, set in the stunning grounds of Blenheim Palace.",
  category: 'sports',
  coverImage: images.hero,
  gridColumn: 2,
  gridRow: 14,
  gridWidth: 10,
  gridHeight: 4
} as const 