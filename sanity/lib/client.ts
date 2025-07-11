import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../config/env'
import { experimental, token } from './live'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'published',
  stega: experimental.stega,
  token
})
