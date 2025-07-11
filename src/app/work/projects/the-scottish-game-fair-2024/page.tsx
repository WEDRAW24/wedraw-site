import ProjectLayout from '../ProjectLayout'
import { metadata } from './metadata'
import ProjectContent from './content'

export default function Page() {
  return (
    <ProjectLayout
      metadata={metadata}
      heroImage={metadata.coverImage}
    >
      <ProjectContent />
    </ProjectLayout>
  )
} 