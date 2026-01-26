'use client'

import { useState } from 'react'
import Button from '@/app/components/Button'

export default function ContactPage() {
  const [showWarning, setShowWarning] = useState(false)

  const handleDotClick = () => {
    setShowWarning(true)
    // Hide warning after 3 seconds
    setTimeout(() => setShowWarning(false), 3000)
  }

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
            {/* Dot 1 - Current page */}
            <div className="w-4 h-4 border-2 border-blueprint bg-blueprint"></div>
            <div className="w-8 h-[2px] border border-blueprint"></div>
            {/* Dot 2 - Clickable with warning */}
            <button 
              onClick={handleDotClick}
              className="w-4 h-4 border-2 border-blueprint hover:bg-blueprint/20 transition-colors cursor-pointer"
              aria-label="Page 2"
            />
            <div className="w-8 h-[2px] border border-blueprint"></div>
            {/* Dot 3 - Clickable with warning */}
            <button 
              onClick={handleDotClick}
              className="w-4 h-4 border-2 border-blueprint hover:bg-blueprint/20 transition-colors cursor-pointer"
              aria-label="Page 3"
            />
            {/* Warning message - inline */}
            {showWarning && (
              <span className="text-marker body-md ml-4">Please select a form</span>
            )}
          </div>

          {/* Subtitle */}
          <h2 className="form-heading text-blueprint mb-fluid-xl">
            Why are you reaching out today?
          </h2>

          {/* Contact Options Section */}
          <div>
            {/* Contact Options - Stack on mobile, row on tablet+ */}
            <div className="flex flex-col sm:flex-row flex-wrap items-start gap-fluid-sm">
              <Button 
                variant="blueprint" 
                href="/contact/project-enquiry"
              >
                PROJECT ENQUIRY
              </Button>
              <Button 
                variant="blueprint" 
                href="/contact/general"
              >
                GENERAL CONTACT
              </Button>
              <Button 
                variant="blueprint" 
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
