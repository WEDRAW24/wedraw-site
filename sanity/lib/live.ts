import { client } from './client'

// For live preview support
export const token = process.env.SANITY_API_READ_TOKEN

// Live queries are currently only available with the experimental API
export const experimental = {
  stega: {
    enabled: process.env.NODE_ENV === 'development',
  },
}
