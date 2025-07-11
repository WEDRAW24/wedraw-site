import Image from 'next/image'
import { type StaticImageData } from 'next/image'

interface PullQuoteSmallProps {
  text: string
  className?: string
  image?: {
    src: StaticImageData | string
    alt: string
    objectPosition?: string
    scale?: number
  }
}

export default function PullQuoteSmall({ text, className = '', image }: PullQuoteSmallProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {/* Optional image */}
      {image && (
        <div className="w-full aspect-[4/3] relative mb-4 overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            style={{ 
              objectPosition: image.objectPosition || 'center',
              transform: `scale(${image.scale || 1})`,
              transformOrigin: 'center center'
            }}
          />
        </div>
      )}

      {/* Red box with hatch pattern */}
      <div className="w-full h-[18px] relative">
        <div className="absolute inset-0 border-2 border-marker">
          <div className="w-full h-full" style={{
            backgroundImage: 'repeating-linear-gradient(135deg, #E44E37, #E44E37 3px, transparent 3px, transparent 6px)'
          }} />
        </div>
      </div>
      
      {/* Quote text */}
      <p className="font-mono font-mono-normal text-[20px] leading-[140%] text-marker uppercase">
        {text}
      </p>
    </div>
  )
} 