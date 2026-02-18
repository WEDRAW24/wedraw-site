import { ProjectMetadata } from '../types'
import { images } from './images'

export const metadata: ProjectMetadata = {
  slug: 'bristol-international-balloon-fiesta-2024',
  title: 'Bristol Balloon Fiesta',
  year: 2024,
  location: 'Ashton Court',
  description: "Bringing Europe's largest hot air balloon festival to life with innovative site design and unforgettable visitor experiences at Ashton Court.",
  category: 'festivals',
  coverImage: images.hero,
  gridColumn: 2,
  gridRow: 29,
  gridWidth: 10,
  gridHeight: 6
} as const 