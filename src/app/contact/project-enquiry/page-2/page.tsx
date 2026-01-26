'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/app/components/Button'

export default function ProjectEnquiryPage2() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    profession: '',
    howDidYouHear: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load data from session storage on mount
  useEffect(() => {
    const savedData = sessionStorage.getItem('projectEnquiryPage2')
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
    setIsLoaded(true)
  }, [])

  // Save to session storage on change (but only after initial load)
  useEffect(() => {
    if (isLoaded) {
      sessionStorage.setItem('projectEnquiryPage2', JSON.stringify(formData))
    }
  }, [formData, isLoaded])

  const handleBack = () => {
    router.push('/contact/project-enquiry')
  }

  const handleSubmit = async () => {
    // Validation
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address'
      }
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required'
    } else {
      // Remove spaces, dashes, parentheses for validation
      const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '')
      // Check if it contains only numbers and + (for international)
      const phoneRegex = /^[\+]?[0-9]{10,15}$/
      if (!phoneRegex.test(cleanPhone)) {
        newErrors.phone = 'Please enter a valid phone number'
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    try {
      // Get data from page 1
      const page1Data = sessionStorage.getItem('projectEnquiryPage1')
      const page1 = page1Data ? JSON.parse(page1Data) : {}

      // Combine all form data
      const fullFormData = {
        ...page1,
        ...formData,
      }

      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'project-enquiry',
          ...fullFormData,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      // Clear session storage
      sessionStorage.removeItem('projectEnquiryPage1')
      sessionStorage.removeItem('projectEnquiryPage2')

      // Redirect to success page or show success message
      alert('Thank you! Your enquiry has been submitted successfully.')
      router.push('/contact')
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-fluid-md max-w-[1440px]">
        <div className="py-fluid-2xl">
          {/* Main Title - Using new display-xl class */}
          <h1 className="display-xl text-dark-grey mb-fluid-xl">
            Ready to collaborate?
          </h1>

          {/* Progress Indicator - Only current page filled, scales for mobile */}
          <div className="flex items-center gap-1 mb-fluid-lg scale-75 sm:scale-100 origin-left">
            {/* Dot 1 - Form selection (/contact) - Clickable */}
            <button 
              onClick={() => router.push('/contact')}
              className="w-4 h-4 border-2 border-blueprint hover:bg-blueprint/20 transition-colors cursor-pointer"
              aria-label="Go to form selection"
            />
            <div className="w-8 h-[2px] border border-blueprint"></div>
            {/* Dot 2 - Project enquiry page 1 - Clickable */}
            <button 
              onClick={() => router.push('/contact/project-enquiry')}
              className="w-4 h-4 border-2 border-blueprint hover:bg-blueprint/20 transition-colors cursor-pointer"
              aria-label="Go to project details"
            />
            <div className="w-8 h-[2px] border border-blueprint"></div>
            {/* Dot 3 - Current page */}
            <div className="w-4 h-4 border-2 border-blueprint bg-blueprint"></div>
          </div>

          {/* Subtitle */}
          <h2 className="form-heading text-blueprint mb-fluid-xl">
            Now let's get your information
          </h2>

          {/* Form */}
          <div className="space-y-fluid-lg max-w-[800px]">
            {/* Three Column Inputs - Responsive: Stack on mobile, 3 columns on tablet+ */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-fluid-sm">
              {/* Name */}
              <div>
                <label className="button text-blueprint block mb-3">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, name: e.target.value }))
                    setErrors(prev => ({ ...prev, name: '' }))
                  }}
                  className="w-full border border-black px-4 py-3 body-md focus:outline-none focus:border-blueprint"
                />
                {errors.name && (
                  <span className="text-red-500 body-sm block mt-1">{errors.name}</span>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="button text-blueprint block mb-3">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, phone: e.target.value }))
                    setErrors(prev => ({ ...prev, phone: '' }))
                  }}
                  className="w-full border border-black px-4 py-3 body-md focus:outline-none focus:border-blueprint"
                />
                {errors.phone && (
                  <span className="text-red-500 body-sm block mt-1">{errors.phone}</span>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="button text-blueprint block mb-3">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, email: e.target.value }))
                    setErrors(prev => ({ ...prev, email: '' }))
                  }}
                  className="w-full border border-black px-4 py-3 body-md focus:outline-none focus:border-blueprint"
                />
                {errors.email && (
                  <span className="text-red-500 body-sm block mt-1">{errors.email}</span>
                )}
              </div>
            </div>

            {/* Two Column Text Areas - Responsive: Stack on mobile, 2 columns on tablet+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-fluid-sm">
              {/* Profession */}
              <div>
                <label className="button text-blueprint block mb-3">
                  Tell us a bit about you
                </label>
                <textarea
                  value={formData.profession}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, profession: e.target.value }))
                  }}
                  className="w-full h-32 border border-black px-4 py-3 body-md leading-[180%] resize-none focus:outline-none focus:border-blueprint"
                  maxLength={200}
                  placeholder=""
                />
                <div className="flex justify-end mt-2">
                  <span className="body-sm text-gray-500">{formData.profession.length}/200</span>
                </div>
              </div>

              {/* How Did You Learn About Us */}
              <div>
                <label className="button text-blueprint block mb-3">
                  How did you learn about us?
                </label>
                <textarea
                  value={formData.howDidYouHear}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, howDidYouHear: e.target.value }))
                  }}
                  className="w-full h-32 border border-black px-4 py-3 body-md leading-[180%] resize-none focus:outline-none focus:border-blueprint"
                  maxLength={200}
                  placeholder=""
                />
                <div className="flex justify-end mt-2">
                  <span className="body-sm text-gray-500">{formData.howDidYouHear.length}/200</span>
                </div>
              </div>
            </div>

            {/* Navigation Buttons - Side by side on all screen sizes */}
            <div className="flex items-start gap-fluid-sm pt-fluid-sm">
              <Button
                variant="blueprint"
                onClick={handleBack}
              >
                BACK
              </Button>
              <Button
                variant="blueprint"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

