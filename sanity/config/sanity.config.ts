'use client'

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `\src\app\sanity\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import '../studio/studio.css'
import {schemaTypes} from '../schemas'

export default defineConfig({
  name: 'default',
  title: 'WEDRAW Site',
  basePath: '/sanity',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [
    deskTool(),
    // Vision is for querying with GROQ from inside the Studio
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
