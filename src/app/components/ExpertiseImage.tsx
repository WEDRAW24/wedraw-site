'use client'

import Image from 'next/image'

// Import all expertise images
import validateImg from '../assets/images/expertise/validate.png'
import supportImg from '../assets/images/expertise/support.png'
import designImg from '../assets/images/expertise/design.png'
import markoutImg from '../assets/images/expertise/markout.png'
import surveyImg from '../assets/images/expertise/survey.png'

interface ExpertiseImageProps {
  currentExpertise: string
  debug?: boolean
}

const expertiseImages: Record<string, any> = {
  'VALIDATE': validateImg,
  'SUPPORT': supportImg,
  'DESIGN': designImg,
  'MARKOUT': markoutImg,
  'SURVEY': surveyImg
}

export default function ExpertiseImage({ currentExpertise, debug = false }: ExpertiseImageProps) {
  return (
    <div 
      className={`relative w-full h-full flex items-center justify-center p-0 ${debug ? 'border-4 border-blue-500' : ''}`}
    >
      <div 
        key={currentExpertise}
        className="relative w-full h-full animate-fadeIn"
      >
        <Image
          src={expertiseImages[currentExpertise]}
          alt={currentExpertise}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  )
}

