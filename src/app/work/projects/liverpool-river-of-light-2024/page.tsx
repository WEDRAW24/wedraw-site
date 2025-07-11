import { Metadata } from 'next'
import ProjectLayout from '../ProjectLayout'
import ProjectContent from './content'
import { metadata } from './metadata'
import { images } from './images'

export const generateMetadata = (): Metadata => {
  return {
    title: metadata.title,
  }
}

export default function ProjectPage() {
  return (
    <ProjectLayout 
      metadata={metadata}
      heroImage={images.hero.src}
    >
      <ProjectContent />
    </ProjectLayout>
  )
} 