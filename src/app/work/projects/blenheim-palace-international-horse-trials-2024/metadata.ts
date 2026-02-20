import { ProjectMetadata } from '../types'
import { images } from './images'

export const metadata: ProjectMetadata = {
  slug: 'blenheim-palace-international-horse-trials-2024',
  title: 'Blenheim Palace Horse Trials',
  year: 2024,
  location: 'Blenheim Palace',
  description: "An international equestrian competition inside a UNESCO World Heritage landscape. Precision site design for a fixture where history, reputation and responsibility come as standard.",
  category: 'sports',
  coverImage: images.hero,
  gridColumn: 1,
  gridRow: 31,
  gridWidth: 10,
  gridHeight: 4
} as const 