interface PullQuoteLargeProps {
  text: string
  className?: string
}

export default function PullQuoteLarge({ text, className = '' }: PullQuoteLargeProps) {
  return (
    <div className={`relative grid grid-cols-12 gap-4 ${className}`}>
      {/* Mobile background - full viewport width */}
      <div 
        className="md:hidden absolute top-0 bottom-0 bg-marker"
        style={{
          left: 'calc(-1 * (100vw - 100%) / 2)',
          right: 'calc(-1 * (100vw - 100%) / 2)',
        }}
      />
      
      {/* Desktop background - starts at col-5 (33.333%) and extends to right edge */}
      <div 
        className="hidden md:block absolute top-0 bottom-0 bg-marker"
        style={{
          left: 'calc(33.333% - 8px)', // col-5 position minus half gap
          right: 'calc(-1 * (100vw - 100%) / 2)',
        }}
      />
      
      {/* Content - matches body text margins */}
      <div className="relative col-span-12 px-4 md:px-0 md:col-start-5 md:col-span-8 py-8 md:py-16">
        <p className="pull-quote-lg text-white md:pl-16">
          {text}
        </p>
      </div>
    </div>
  )
} 