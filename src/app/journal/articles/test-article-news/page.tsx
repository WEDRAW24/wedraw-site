import ArticleLayout from '../ArticleLayout'
import ArticleContent from './content'
import { metadata } from './metadata'

export default function TestArticleNews() {
  return (
    <ArticleLayout
      metadata={metadata}
      heroImage={metadata.coverImage}
    >
      <ArticleContent />
    </ArticleLayout>
  )
}

