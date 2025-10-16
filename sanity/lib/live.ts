import { client } from './client'

// For live preview support
export const token = process.env.SANITY_API_READ_TOKEN

// Live queries configuration
export const experimental = {
  stega: {
    enabled: process.env.NODE_ENV === 'development',
    studioUrl: '/sanity'
  }
}
