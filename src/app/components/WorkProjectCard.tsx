import Image from 'next/image'
import Link from 'next/link'
import UnderlineLink from './UnderlineLink'
import { ProjectMetadata } from '@/app/work/projects/types'

interface WorkProjectCardProps {
  project: ProjectMetadata
  size?: 'default' | 'small'
}

export default function WorkProjectCard({ project, size = 'default' }: WorkProjectCardProps) {
  const { title, slug, location, year, coverImage } = project
  const projectUrl = `/work/projects/${slug}`

  const textSizes = {
    default: {
      meta: 'text-sm',
      title: 'text-[32px]'
    },
    small: {
      meta: 'text-xs',
      title: 'text-[28px]'
    }
  }

  return (
    <div className="block">
      <Link href={projectUrl} className="block">
        <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden hover:cursor-pointer">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-out hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        
        <div className={`font-mono font-mono-normal uppercase tracking-wider mb-2 transition-colors duration-300 hover:text-marker ${textSizes[size].meta}`}>{location} | {year}</div>
        <h2 className={`font-display font-area-extrabold leading-none mb-4 transition-colors duration-300 hover:text-marker ${textSizes[size].title}`}>{title}</h2>
      </Link>
      <UnderlineLink href={projectUrl} className="text-marker">
        More about the project
      </UnderlineLink>
    </div>
  )
} 