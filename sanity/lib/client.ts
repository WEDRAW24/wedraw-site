import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../config/env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false to prevent caching issues
  perspective: 'published',
  stega: false,
  cache: 'no-store',
  next: { revalidate: 0, tags: ['sanity'] }
})
