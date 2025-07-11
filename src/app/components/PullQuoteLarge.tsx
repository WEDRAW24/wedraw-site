interface PullQuoteLargeProps {
  text: string
  className?: string
}

export default function PullQuoteLarge({ text, className = '' }: PullQuoteLargeProps) {
  return (
    <div className={`relative grid grid-cols-12 gap-4 ${className}`}>
      {/* Background that extends to the right edge */}
      <div className="absolute left-0 right-[-100vw] top-0 bottom-0 bg-marker col-start-1 md:col-start-5" />
      
      {/* Content */}
      <div className="relative col-start-2 col-span-10 md:col-start-5 md:col-span-8 py-16">
        <p className="text-white font-area-bold text-[30px] leading-[130%] md:pl-16">
          {text}
        </p>
      </div>
    </div>
  )
} 