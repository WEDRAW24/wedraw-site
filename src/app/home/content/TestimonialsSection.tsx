'use client'

import { useState, useEffect, useCallback } from 'react'
import SectionHeader from '../../components/SectionHeader'
import TestimonialCard from '../../components/TestimonialCard'

const testimonials = [
  {
    quote: "Working with WEDRAW has felt like gaining an extra member of our team. Approachable, reliable, and genuinely invested in our success, they've made the entire process, from site planning to mark out, smoother and more enjoyable.",
    name: "Ben Hardy",
    company: "REM"
  },
  {
    quote: "The Event Safety Shop has worked with the WEDRAW team for several years across a range of events and projects. Their accurate, detailed plans are delivered reliably and on time, allowing us to overlay event safety and operational strategies effectively. Their strong understanding of event environments and collaborative approach make them a trusted and valued partner.",
    name: "Adam Blaxter",
    company: "The Event Saftey Shop"
  }
]

const AUTO_CYCLE_INTERVAL = 15000 // 15 seconds

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [resetKey, setResetKey] = useState(0) // Used to reset the interval timer

  // Handle manual navigation - resets the auto-cycle timer
  const goToTestimonial = useCallback((index: number) => {
    setCurrentIndex(index)
    setResetKey((prev) => prev + 1) // Reset the interval
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, AUTO_CYCLE_INTERVAL)

    return () => clearInterval(interval)
  }, [resetKey]) // Restart interval when resetKey changes

  return (
    <div className="relative pb-[100px] pt-[100px]">
      {/* Section Header */}
      <div className="max-w-[1680px] mx-auto px-fluid-md md:px-4 sm:px-6 lg:px-[60px] mb-12">
        <SectionHeader
          title="Testimonials"
          color="blueprint"
          showLine={false}
        />
      </div>

      {/* Testimonial Carousel - Single testimonial centered with slide animation */}
      <div className="max-w-[1680px] mx-auto px-fluid-md md:px-4 sm:px-6 lg:px-[60px]">
        <div className="relative overflow-hidden min-h-[400px] flex items-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute w-full transition-transform duration-700 ease-in-out ${
                index === currentIndex
                  ? 'translate-x-0'
                  : index < currentIndex
                  ? '-translate-x-full'
                  : 'translate-x-full'
              }`}
            >
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                company={testimonial.company}
              />
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-fluid-lg">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blueprint w-8'
                  : 'bg-blueprint opacity-30 w-3'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
