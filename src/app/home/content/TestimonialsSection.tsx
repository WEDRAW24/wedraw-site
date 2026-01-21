'use client'

import { useState, useEffect } from 'react'
import SectionHeader from '../../components/SectionHeader'
import TestimonialCard from '../../components/TestimonialCard'

const testimonials = [
  {
    quote: "Working with WEDRAW has felt like gaining an extra member of our team. Approachable, reliable, and genuinely invested in our success, they've made the entire process, from site planning to mark out, smoother and more enjoyable.",
    name: "Ben Hardy",
    company: "REM"
  },
  {
    quote: "'Insert kind words here!'",
    name: "Nick Brooks-Ward",
    company: "H Power"
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 7500) // Change every 7.5 seconds

    return () => clearInterval(interval)
  }, [])

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
      </div>
    </div>
  )
}
