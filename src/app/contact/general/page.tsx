'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/app/components/Button'

export default function GeneralContactPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    services: {
      eventDesign: false,
      markOut: false,
      survey: false,
      siteValidation: false,
      technicalSupport: false,
    },
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleServiceToggle = (service: keyof typeof formData.services) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: !prev.services[service],
      },
    }))
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
      const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '')
      const phoneRegex = /^[\+]?[0-9]{10,15}$/
      if (!phoneRegex.test(cleanPhone)) {
        newErrors.phone = 'Please enter a valid phone number'
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us how we can help'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    try {
      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'general-contact',
          ...formData,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      // Show success message
      alert('Thank you! Your message has been sent successfully.')
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

          {/* Progress Indicator - 2 steps, scales for mobile */}
          <div className="flex items-center gap-1 mb-fluid-lg scale-75 sm:scale-100 origin-left">
            <div className="w-4 h-4 bg-blueprint"></div>
            <div className="w-8 h-[2px] bg-blueprint"></div>
            <div className="w-4 h-4 bg-blueprint"></div>
          </div>

          {/* Subtitle - Using new display-md class */}
          <h2 className="display-md text-blueprint mb-fluid-xl">
            Tell us how we can help
          </h2>

          {/* Form */}
          <div className="space-y-fluid-lg max-w-[800px]">
            {/* Three Column Inputs - Responsive: Stack on mobile, 3 columns on tablet+ */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-fluid-sm">
              {/* Name */}
              <div>
                <label className="label-md text-blueprint block mb-3">
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
                  <span className="text-red-500 body-xs block mt-1">{errors.name}</span>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="label-md text-blueprint block mb-3">
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
                  <span className="text-red-500 body-xs block mt-1">{errors.phone}</span>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="label-md text-blueprint block mb-3">
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
                  <span className="text-red-500 body-xs block mt-1">{errors.email}</span>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="label-md text-blueprint block mb-3">
                Your Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => {
                  setFormData(prev => ({ ...prev, message: e.target.value }))
                  setErrors(prev => ({ ...prev, message: '' }))
                }}
                className="w-full h-32 border border-black px-4 py-3 body-md leading-[180%] resize-none focus:outline-none focus:border-blueprint"
                maxLength={500}
                placeholder="Tell us how we can help..."
              />
              <div className="flex justify-between mt-2">
                {errors.message && (
                  <span className="text-red-500 body-xs">{errors.message}</span>
                )}
                <span className="body-xs text-gray-500 ml-auto">
                  {formData.message.length}/500
                </span>
              </div>
            </div>

            {/* Services Interested In */}
            <div>
              <label className="label-md text-blueprint block mb-4">
                Services Interested In
              </label>
              {/* Stack vertically on mobile, all on one line on tablet+ */}
              <div className="flex flex-col sm:flex-row sm:flex-nowrap gap-3 sm:gap-4">
                {[
                  { key: 'eventDesign', label: 'Event Design' },
                  { key: 'markOut', label: 'Mark Out' },
                  { key: 'survey', label: 'Survey' },
                  { key: 'siteValidation', label: 'Site Validation' },
                  { key: 'technicalSupport', label: 'Technical Support' },
                ].map(({ key, label }) => (
                  <label key={key} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.services[key as keyof typeof formData.services]}
                      onChange={() => handleServiceToggle(key as keyof typeof formData.services)}
                      className="w-5 h-5 border-2 border-blueprint accent-blueprint cursor-pointer flex-shrink-0"
                    />
                    <span className="body-md">{label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Navigation Buttons - Side by side on all screen sizes */}
            <div className="flex items-start gap-fluid-sm pt-fluid-sm">
              <Button
                variant="blueprint"
                size="md"
                onClick={() => router.push('/contact')}
              >
                BACK
              </Button>
              <Button
                variant="blueprint"
                size="md"
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

