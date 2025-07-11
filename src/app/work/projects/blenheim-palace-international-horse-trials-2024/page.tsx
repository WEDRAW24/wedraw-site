import ProjectLayout from '../ProjectLayout'
import ProjectContent from './content'
import { metadata } from './metadata'
import { images } from './images'

export default function BlenheimHorseTrials2024() {
  return (
    <ProjectLayout
      metadata={metadata}
      heroImage={images.hero}
    >
      <ProjectContent />
    </ProjectLayout>
  )
} 