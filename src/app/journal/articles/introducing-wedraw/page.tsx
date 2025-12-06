import ArticleLayout from '../ArticleLayout'
import ArticleContent from './content'
import { metadata } from './metadata'

export default function IntroducingWedrawArticle() {
  return (
    <ArticleLayout
      metadata={metadata}
      heroImage={metadata.coverImage}
    >
      <ArticleContent />
    </ArticleLayout>
  )
}

