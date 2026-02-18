import { ProjectMetadata } from '../types'
import { images } from './images'

export const metadata: ProjectMetadata = {
  slug: 'bristol-international-balloon-fiesta-2024',
  title: 'Bristol Balloon Fiesta',
  year: 2024,
  location: 'Ashton Court',
  description: "Europe's largest annual hot air balloon gathering, approaching its 50th year at Ashton Court. Mass ascents, nightglows and hundreds of thousands of visitors beneath Bristol's skyline.",
  category: 'festivals',
  coverImage: images.hero,
  gridColumn: 2,
  gridRow: 22,
  gridWidth: 10,
  gridHeight: 6
} as const 