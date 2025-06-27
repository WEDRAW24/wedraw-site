'use client'

import Link from 'next/link'

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-7xl mx-auto">
      {/* Main Title */}
      <h1 className="text-[72px] font-bold mb-32">Ready to collaborate?</h1>

      {/* Contact Options Section */}
      <div className="space-y-16">
        {/* Subtitle with decorative element */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-[3px] bg-blueprint"></div>
            <div className="w-4 h-[3px] border border-blueprint"></div>
            <div className="w-4 h-[3px] border border-blueprint"></div>
          </div>
          <h2 className="text-[48px] text-blueprint">Why are you reaching out today?</h2>
        </div>

        {/* Contact Options Grid */}
        <div className="flex gap-6">
          <Link 
            href="/contact/project-enquiry"
            className="px-8 py-4 border-2 border-blueprint text-blueprint font-mono hover:bg-blueprint hover:text-white transition-colors duration-300"
          >
            PROJECT ENQUIRY
          </Link>
          <Link 
            href="/contact/general"
            className="px-8 py-4 border-2 border-blueprint text-blueprint font-mono hover:bg-blueprint hover:text-white transition-colors duration-300"
          >
            GENERAL CONTACT
          </Link>
          <Link 
            href="/contact/careers"
            className="px-8 py-4 border-2 border-blueprint text-blueprint font-mono hover:bg-blueprint hover:text-white transition-colors duration-300"
          >
            CAREERS / INTERNSHIPS
          </Link>
        </div>
      </div>
    </main>
  )
}
