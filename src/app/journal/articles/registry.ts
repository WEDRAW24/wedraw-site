import { metadata as introducingWedrawMetadata } from './introducing-wedraw/metadata'
// import { metadata as craftingExperiencesMetadata } from './crafting-experiences-not-just-spaces/metadata'
// import { metadata as drawingCommunicationMetadata } from './drawing-a-means-of-communication/metadata'
// import { metadata as testArticleExplorationsMetadata } from './test-article-explorations/metadata'
// import { metadata as testArticleNewsMetadata } from './test-article-news/metadata'
import { ArticleMetadata } from './types'

export const articles: ArticleMetadata[] = [
  introducingWedrawMetadata,
  // craftingExperiencesMetadata,
  // drawingCommunicationMetadata,
  // testArticleExplorationsMetadata,
  // testArticleNewsMetadata,
  // Add other articles here as they are created
] as const

export type Article = typeof articles[number]

