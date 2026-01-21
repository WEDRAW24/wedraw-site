'use client'

interface CreditSection {
  title: string
  items: {
    role?: string
    name: string
  }[]
}

interface CreditsProps {
  sections: CreditSection[]
  className?: string
}

export default function Credits({ sections, className = '' }: CreditsProps) {
  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {/* Red box with hatch pattern - copied from PullQuoteSmall */}
      <div className="w-full h-[18px] relative">
        <div className="absolute inset-0 border-2 border-marker">
          <div className="w-full h-full" style={{
            backgroundImage: 'repeating-linear-gradient(135deg, #E44E37, #E44E37 3px, transparent 3px, transparent 6px)'
          }} />
        </div>
      </div>

      {/* Credits heading */}
      <h2 className="section-heading text-black">Credits</h2>

      {/* Credit sections */}
      {sections.map((section, index) => (
        <div key={index} className="flex flex-col gap-3">
          <h3 className="button text-marker">
            {section.title}
          </h3>
          <div className="flex flex-col gap-2">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-center gap-2">
                {item.role && (
                  <span className="body-md">
                    {item.role}:
                  </span>
                )}
                <span className="body-md font-area-bold">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
} 