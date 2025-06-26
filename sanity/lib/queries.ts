import { groq } from 'next-sanity'

// Basic test query to check connectivity
export const testQuery = groq`
  *[_type == "journalPost"] {
    _id,
    title
  }
`

// Debug query to see all documents
export const debugQuery = groq`
  *[_type == "journalPost"] {
    _id,
    _type,
    title,
    slug,
    date,
    category,
    blurb,
    mainImage,
    mainBody,
    featured,
    moreArticlesTag
  }
`

// Get all journal posts
export const getAllJournalPostsQuery = groq`
*[_type == "journalPost"] | order(date desc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  title,
  slug,
  date,
  category,
  blurb,
  mainImage {
    _type,
    asset->{
      _id,
      url
    },
    alt
  },
  mainBody,
  featured,
  moreArticlesTag
}
`

// Get featured post
export const getFeaturedPostQuery = groq`
*[_type == "journalPost" && featured == true][0] {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  title,
  slug,
  date,
  category,
  blurb,
  mainImage {
    _type,
    asset->{
      _id,
      url
    },
    alt
  },
  mainBody,
  featured,
  moreArticlesTag
}
`

// Get post by slug
export const getPostBySlugQuery = groq`
*[_type == "journalPost" && slug.current == $slug][0] {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  title,
  slug,
  date,
  category,
  blurb,
  mainImage {
    _type,
    asset->{
      _id,
      url
    },
    alt
  },
  mainBody,
  featured,
  moreArticlesTag
}
`

// Get related posts by tag
export const getRelatedPostsQuery = groq`
*[_type == "journalPost" && moreArticlesTag == $tag && _id != $currentPostId] | order(date desc)[0...3] {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  title,
  slug,
  date,
  category,
  blurb,
  mainImage {
    _type,
    asset->{
      _id,
      url
    },
    alt
  },
  featured,
  moreArticlesTag
}
` 