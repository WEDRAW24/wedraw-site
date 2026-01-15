'use client'

import TestimonialCard from '../../components/TestimonialCard'
import HatchedPattern from '../../components/HatchedPattern'

export default function TestimonialsSection() {
  // Debug mode - set to false to hide all container borders
  const DEBUG = false;

  return (
    <div className={`relative pb-[100px] pt-[100px] ${DEBUG ? 'border-4 border-purple-500' : ''}`}>
      {/* Section Header - Green Container */}
      <div className={`max-w-[1680px] mx-auto px-fluid-md md:px-4 sm:px-6 lg:px-[60px] ${DEBUG ? 'border-4 border-green-500' : ''}`}>
        <h2 className="text-display-lg md:text-[clamp(36px,4vw,58px)] font-sans font-black md:font-extrabold text-blueprint mb-fluid-lg md:mb-12 leading-[1.15] md:leading-normal uppercase md:normal-case">
          Testimonials
        </h2>
      </div>

      {/* Testimonials Content - Blue Container */}
      <div className={`relative w-full px-fluid-md md:px-4 sm:px-6 lg:px-[60px] ${DEBUG ? 'border-4 border-blue-500' : ''}`}>
        {/* Blueprint Hatched Pattern Bar - Hidden on mobile, shown on desktop */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-full h-[200px] z-0">
          <HatchedPattern 
            color="var(--color-blueprint)"
            strokeWidth={10} 
            gap={28}
            borderWidth={5}
          />
        </div>
        
        {/* Testimonials Grid - Stacked on mobile, side by side on desktop */}
        <div className="relative flex flex-col md:flex-row gap-fluid-xl md:gap-24 justify-center items-center md:flex-wrap">
          {/* Testimonial Cards - positioned above pattern */}
          <div className="relative z-10 w-full md:w-auto">
            <TestimonialCard
              quote="Working with WEDRAW has felt like gaining an extra member of our team. Approachable, reliable, and genuinely invested in our success, they've made the entire process, from site planning to mark out, smoother and more enjoyable."
              name="Ben Hardy"
              company="Richmond Event Management"
            />
          </div>
          <div className="relative z-10 w-full md:w-auto">
            <TestimonialCard
              quote="'Insert kind words here!'"
              name="Maddy? Nick? Catherine? Chris? Brita?"
              company="UK"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
