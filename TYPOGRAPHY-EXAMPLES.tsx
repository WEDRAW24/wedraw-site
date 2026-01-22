// ============================================
// WEDRAW Typography System - Usage Examples
// ============================================
// Copy these examples into your components!

import React from 'react'
import Button from '@/app/components/Button'
import UnderlineLink from '@/app/components/UnderlineLink'

// ============================================
// EXAMPLE 1: Hero Section
// ============================================
export function HeroExample() {
  return (
    <section className="relative min-h-screen py-fluid-3xl px-fluid-lg">
      {/* Hero Title - Using semantic class */}
      <h1 className="display-xl text-blueprint mb-fluid-lg">
        Shaping unforgettable experiences
      </h1>
      
      {/* Featured paragraph */}
      <p className="body-xl max-w-2xl mb-fluid-xl">
        We are a specialised event design and site planning studio dedicated 
        to transforming spaces into unforgettable experiences.
      </p>
      
      {/* CTA Button */}
      <Button variant="blueprint"  href="/contact">
        GET IN TOUCH
      </Button>
    </section>
  )
}

// ============================================
// EXAMPLE 2: Content Section with Mixed Utilities
// ============================================
export function ContentSectionExample() {
  return (
    <section className="py-fluid-2xl px-fluid-md">
      {/* Section title with custom color */}
      <div className="mb-fluid-xl">
        <h2 className="display-md text-marker mb-fluid-sm">
          Our Expertise
        </h2>
        <div className="h-[2px] bg-marker" />
      </div>
      
      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-fluid-lg">
        {/* Left column - Featured text */}
        <div>
          <p className="body-xl">
            We work closely with clients to shape event layouts that are both 
            visionary and buildable.
          </p>
        </div>
        
        {/* Right column - Standard body text */}
        <div className="space-y-fluid-md">
          <p className="body-md">
            At the core of our process is the belief that the best events are 
            built on clear communication and effective collaboration.
          </p>
          
          <p className="body-md">
            Before we begin, we take the time to understand who you are, what 
            drives you and the goals you want to achieve.
          </p>
          
          <UnderlineLink href="/studio" className="text-marker label-md">
            READ MORE ABOUT US
          </UnderlineLink>
        </div>
      </div>
    </section>
  )
}

// ============================================
// EXAMPLE 3: Card Component
// ============================================
export function ProjectCardExample() {
  return (
    <article className="group cursor-pointer">
      {/* Image */}
      <div className="relative aspect-[4/3] mb-fluid-sm overflow-hidden">
        <img 
          src="/project-image.jpg" 
          alt="Project" 
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Metadata label */}
      <p className="label-md text-marker mb-fluid-xs">
        BRISTOL | 2024
      </p>
      
      {/* Title */}
      <h3 className="heading-2 mb-fluid-sm group-hover:text-marker transition-colors">
        Bristol International Balloon Fiesta
      </h3>
      
      {/* Description */}
      <p className="body-sm text-dark-grey mb-fluid-sm">
        Creating memorable experiences for thousands of visitors at Europe's 
        largest balloon festival.
      </p>
      
      {/* Link */}
      <UnderlineLink href="/project" className="text-marker label-sm">
        VIEW PROJECT
      </UnderlineLink>
    </article>
  )
}

// ============================================
// EXAMPLE 4: Navigation Drawer (from your site)
// ============================================
export function NavDrawerExample() {
  return (
    <nav className="fixed inset-0 bg-white z-50 px-fluid-md py-fluid-lg">
      <ul className="space-y-fluid-lg">
        <li className="border-b-2 border-marker pb-fluid-md">
          <div className="flex justify-between items-end">
            {/* Main page link - Using Tailwind utility for custom size */}
            <h2 className="text-display-lg font-area-extrabold text-marker leading-none">
              <a href="/work">Work</a>
            </h2>
            
            {/* Sub-links */}
            <div className="hidden md:flex flex-col text-right gap-2">
              <a href="/work#festivals" className="label-sm text-marker">FESTIVALS</a>
              <a href="/work#exhibitions" className="label-sm text-marker">EXHIBITIONS</a>
              <a href="/work#sports" className="label-sm text-marker">SPORTS</a>
            </div>
          </div>
        </li>
        
        {/* Repeat for other pages */}
      </ul>
      
      {/* Contact info */}
      <div className="mt-fluid-2xl">
        <h3 className="label-md text-blueprint mb-fluid-sm">OFFICE</h3>
        <p className="body-sm">
          59 Prince Street<br />
          Bristol<br />
          BS1 4QH
        </p>
      </div>
    </nav>
  )
}

// ============================================
// EXAMPLE 5: Responsive Text Scaling
// Before & After Comparison
// ============================================

// ❌ OLD WAY - Fixed sizes, breaks on mobile
export function OldWayExample() {
  return (
    <div className="px-[60px] py-[100px]">
      <h1 className="text-[85px] font-extrabold leading-[120%] mb-[48px]">
        What we've been up to...
      </h1>
      <p className="text-[18px] leading-[160%]" style={{ fontSize: 'clamp(14px, 1.5vw, 18px)' }}>
        Mixing fixed sizes and inline clamp is inconsistent
      </p>
    </div>
  )
}

// ✅ NEW WAY - Fluid, responsive, consistent
export function NewWayExample() {
  return (
    <div className="px-fluid-lg py-fluid-2xl">
      <h1 className="display-xl text-marker mb-fluid-xl">
        What we've been up to...
      </h1>
      <p className="body-md">
        Using semantic classes ensures consistency across the entire site
      </p>
    </div>
  )
}

// ============================================
// EXAMPLE 6: Mixing Semantic & Utility Classes
// ============================================
export function MixedApproachExample() {
  return (
    <section className="py-fluid-2xl px-fluid-md bg-blueprint">
      {/* Semantic class + color override */}
      <h2 className="display-md text-white mb-fluid-lg">
        Proven in the field
      </h2>
      
      {/* Semantic class + responsive utilities */}
      <p className="body-lg text-white max-w-2xl mx-auto text-center">
        We collaborate with the teams behind major festivals and cultural events.
      </p>
      
      {/* Grid with fluid gap */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-fluid-md mt-fluid-xl">
        {/* Logo grid items */}
      </div>
    </section>
  )
}

// ============================================
// EXAMPLE 7: Form Styling
// ============================================
export function FormExample() {
  return (
    <form className="max-w-2xl mx-auto py-fluid-2xl px-fluid-md space-y-fluid-lg">
      {/* Form title */}
      <h2 className="display-md text-blueprint mb-fluid-md">
        Ready to collaborate?
      </h2>
      
      {/* Field */}
      <div className="space-y-fluid-sm">
        <label htmlFor="name" className="label-md text-dark-grey block">
          YOUR NAME
        </label>
        <input 
          type="text" 
          id="name"
          className="w-full border-2 border-dark-grey px-fluid-sm py-fluid-xs body-md"
        />
      </div>
      
      {/* Field */}
      <div className="space-y-fluid-sm">
        <label htmlFor="email" className="label-md text-dark-grey block">
          EMAIL ADDRESS
        </label>
        <input 
          type="email" 
          id="email"
          className="w-full border-2 border-dark-grey px-fluid-sm py-fluid-xs body-md"
        />
      </div>
      
      {/* Submit */}
      <Button variant="blueprint"  type="submit">
        SEND MESSAGE
      </Button>
      
      {/* Helper text */}
      <p className="body-xs text-center">
        By submitting this form, you agree to our privacy policy.
      </p>
    </form>
  )
}

// ============================================
// QUICK REFERENCE CHEAT SHEET
// ============================================

/*

DISPLAY HEADINGS (Hero sections)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
.display-xl    →  48px - 85px
.display-lg    →  40px - 72px
.display-md    →  36px - 58px
.display-sm    →  32px - 48px

CONTENT HEADINGS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
.heading-1     →  28px - 38px
.heading-2     →  24px - 32px
.heading-3     →  20px - 30px
.heading-4     →  18px - 24px

BODY TEXT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
.body-xl       →  18px - 24px
.body-lg       →  16px - 20px
.body-md       →  14px - 18px  ← Most common
.body-sm       →  12px - 15px
.body-xs       →  10px - 14px

LABELS (Buttons, tags, metadata)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
.label-lg      →  12px - 16px
.label-md      →  10px - 14px
.label-sm      →   9px - 12px

SPACING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
.p-fluid-xs    →   8px - 16px
.p-fluid-sm    →  12px - 24px
.p-fluid-md    →  16px - 32px  ← Most common
.p-fluid-lg    →  24px - 48px
.p-fluid-xl    →  32px - 64px
.p-fluid-2xl   →  48px - 96px
.p-fluid-3xl   →  64px - 128px

COLORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
text-blueprint → Blue (#2242FF)
text-marker    → Red (#E44E37)
text-meadow    → Green (#04A573)
text-sunny     → Yellow (#FFB300)
text-dark-grey → Grey (#232838)

*/

