import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../config/env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false to prevent caching issues
  perspective: 'published',
  stega: {
    enabled: process.env.NODE_ENV === 'development',
    studioUrl: '/sanity'
  }
})