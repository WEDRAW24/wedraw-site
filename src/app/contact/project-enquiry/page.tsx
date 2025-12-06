'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Button from '@/app/components/Button'

export default function ProjectEnquiryPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    projectDescription: '',
    location: '',
    sizeCapacity: '',
    startDate: null as Date | null,
    endDate: null as Date | null,
    services: {
      eventDesign: false,
      markOut: false,
      survey: false,
      siteValidation: false,
      technicalSupport: false,
    },
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  // Load data from session storage on mount
  useEffect(() => {
    const savedData = sessionStorage.getItem('projectEnquiryPage1')
    if (savedData) {
      const parsed = JSON.parse(savedData)
      // Convert date strings back to Date objects
      if (parsed.startDate) parsed.startDate = new Date(parsed.startDate)
      if (parsed.endDate) parsed.endDate = new Date(parsed.endDate)
      setFormData(parsed)
    }
  }, [])

  const handleNext = () => {
    // Validation
    const newErrors: Record<string, string> = {}
    
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please tell us about your project'
    }
    
    if (formData.projectDescription.length > 500) {
      newErrors.projectDescription = 'Project description must be under 500 characters'
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required'
    }

    if (!formData.sizeCapacity.trim()) {
      newErrors.sizeCapacity = 'Size/Capacity is required'
    }

    if (!formData.startDate || !formData.endDate) {
      newErrors.dates = 'Please select event dates'
    }

    // Check if at least one service is selected
    const servicesSelected = Object.values(formData.services).some(v => v)
    if (!servicesSelected) {
      newErrors.services = 'Please select at least one service'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Store data and navigate to next page
    sessionStorage.setItem('projectEnquiryPage1', JSON.stringify(formData))
    router.push('/contact/project-enquiry/page-2')
  }

  const handleServiceToggle = (service: keyof typeof formData.services) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: !prev.services[service],
      },
    }))
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
            <div className="w-4 h-4 bg-blueprint"></div>
            <div className="w-8 h-[2px] bg-blueprint"></div>
            <div className="w-4 h-4 bg-blueprint"></div>
            <div className="w-8 h-[2px] border border-blueprint"></div>
            <div className="w-4 h-4 border-2 border-blueprint"></div>
          </div>

          {/* Subtitle - Using new display-md class */}
          <h2 className="display-md text-blueprint mb-fluid-xl">
            Help us to understand your vision
          </h2>

          {/* Form */}
          <div className="space-y-fluid-lg max-w-[800px]">
            {/* Project Description */}
            <div>
              <label className="label-md text-blueprint block mb-3">
                Tell us a bit about your project
              </label>
              <textarea
                value={formData.projectDescription}
                onChange={(e) => {
                  setFormData(prev => ({ ...prev, projectDescription: e.target.value }))
                  setErrors(prev => ({ ...prev, projectDescription: '' }))
                }}
                className="w-full h-32 border border-black px-4 py-3 body-md leading-[180%] resize-none focus:outline-none focus:border-blueprint"
                maxLength={500}
                placeholder="Describe your project..."
              />
              <div className="flex justify-between mt-2">
                {errors.projectDescription && (
                  <span className="text-red-500 body-xs">{errors.projectDescription}</span>
                )}
                <span className="body-xs text-gray-500 ml-auto">
                  {formData.projectDescription.length}/500
                </span>
              </div>
            </div>

            {/* Three Column Inputs - Responsive: Stack on mobile, 3 columns on tablet+ */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-fluid-sm">
              {/* Location */}
              <div>
                <label className="label-md text-blueprint block mb-3">
                  Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, location: e.target.value }))
                    setErrors(prev => ({ ...prev, location: '' }))
                  }}
                  className="w-full border border-black px-4 py-3 body-md focus:outline-none focus:border-blueprint"
                />
                {errors.location && (
                  <span className="text-red-500 body-xs block mt-1">{errors.location}</span>
                )}
              </div>

              {/* Size/Capacity */}
              <div>
                <label className="label-md text-blueprint block mb-3">
                  Size/Capacity
                </label>
                <input
                  type="text"
                  value={formData.sizeCapacity}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, sizeCapacity: e.target.value }))
                    setErrors(prev => ({ ...prev, sizeCapacity: '' }))
                  }}
                  className="w-full border border-black px-4 py-3 body-md focus:outline-none focus:border-blueprint"
                />
                {errors.sizeCapacity && (
                  <span className="text-red-500 body-xs block mt-1">{errors.sizeCapacity}</span>
                )}
              </div>

              {/* Dates of Event */}
              <div>
                <label className="label-md text-blueprint block mb-3">
                  Dates of Event
                </label>
                <DatePicker
                  selected={formData.startDate}
                  onChange={(dates) => {
                    const [start, end] = dates as [Date | null, Date | null]
                    setFormData(prev => ({ ...prev, startDate: start, endDate: end }))
                    setErrors(prev => ({ ...prev, dates: '' }))
                  }}
                  startDate={formData.startDate}
                  endDate={formData.endDate}
                  selectsRange
                  minDate={new Date()}
                  wrapperClassName="w-full"
                  className="w-full border border-black px-4 py-3 body-md focus:outline-none focus:border-blueprint"
                  placeholderText="Select dates"
                  dateFormat="dd/MM/yy"
                />
                {errors.dates && (
                  <span className="text-red-500 body-xs block mt-1">{errors.dates}</span>
                )}
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
              {errors.services && (
                <span className="text-red-500 body-xs mt-2 block">{errors.services}</span>
              )}
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
                onClick={handleNext}
              >
                NEXT
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom DatePicker Styles */}
      <style jsx global>{`
        .react-datepicker {
          font-family: inherit;
          border: 2px solid var(--color-blueprint);
        }
        .react-datepicker__header {
          background-color: var(--color-blueprint);
          border-bottom: none;
        }
        .react-datepicker__current-month,
        .react-datepicker__day-name {
          color: white;
        }
        .react-datepicker__day--selected,
        .react-datepicker__day--in-range,
        .react-datepicker__day--in-selecting-range {
          background-color: var(--color-blueprint);
          color: white;
        }
        .react-datepicker__day:hover {
          background-color: var(--color-blueprint);
          color: white;
        }
      `}</style>
    </main>
  )
}

