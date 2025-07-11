import ProjectLayout from '../ProjectLayout'
import ProjectContent from './content'
import { metadata } from './metadata'

export default function NationalShootingShow2024() {
  return (
    <ProjectLayout
      metadata={metadata}
      heroImage={metadata.coverImage}
    >
      <ProjectContent />
    </ProjectLayout>
  )
} 