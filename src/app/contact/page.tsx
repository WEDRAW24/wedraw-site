'use client'

import Button from '@/app/components/Button'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-fluid-md max-w-[1440px]">
        <div className="py-fluid-2xl">
          {/* Main Title - Using new display-xl class */}
          <h1 className="display-xl text-dark-grey mb-fluid-xl">
            Ready to collaborate?
          </h1>

          {/* Progress Indicator - Scales for mobile */}
          <div className="flex items-center gap-1 mb-fluid-lg scale-75 sm:scale-100 origin-left">
            <div className="w-4 h-4 bg-blueprint"></div>
            <div className="w-8 h-[2px] border border-blueprint"></div>
            <div className="w-4 h-4 border-2 border-blueprint"></div>
            <div className="w-8 h-[2px] border border-blueprint"></div>
            <div className="w-4 h-4 border-2 border-blueprint"></div>
          </div>

          {/* Subtitle - Using new display-md class */}
          <h2 className="display-md text-blueprint mb-fluid-xl">
            Why are you reaching out today?
          </h2>

          {/* Contact Options Section */}
          <div>
            {/* Contact Options - Stack on mobile, row on tablet+ */}
            <div className="flex flex-col sm:flex-row flex-wrap items-start gap-fluid-sm">
              <Button 
                variant="blueprint" 
                size="md"
                href="/contact/project-enquiry"
              >
                PROJECT ENQUIRY
              </Button>
              <Button 
                variant="blueprint" 
                size="md"
                href="/contact/general"
              >
                GENERAL CONTACT
              </Button>
              <Button 
                variant="blueprint" 
                size="md"
                href="/contact/careers"
              >
                CAREERS / INTERNSHIPS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
