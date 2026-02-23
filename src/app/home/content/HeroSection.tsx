'use client'

import Image from 'next/image'
import Link from 'next/link'
import Button from '../../components/Button'
import UnderlineLink from '../../components/UnderlineLink'
import { motion } from 'framer-motion'
import BlurIn from '../../components/BlurIn'
import heroImage from '../../work/projects/stonehenge-solstice-2025/assets/250621_SF00466_edit.jpg'

export default function HeroSection() {
  // Debug mode - set to false to hide all container borders
  const DEBUG = false;

  return (
    <>
      {/* MOBILE LAYOUT - Full viewport image with overlays (< md breakpoint) */}
      <div className="md:hidden">
        {/* Max Width Container */}
        <div className="max-w-[1680px] mx-auto">
          {/* Mobile Hero Image Container */}
          <div className={`relative h-[calc(100vh-56px)] overflow-hidden ${DEBUG ? 'border-4 border-purple-500' : ''}`}>
            {/* Full Viewport Image - Animated */}
            <motion.div 
              className={`absolute inset-0 ${DEBUG ? 'border-4 border-cyan-500' : ''}`}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 1.4,
                ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier for smooth premium feel
              }}
            >
              <Image
                src={heroImage}
                alt="Stonehenge Solstice 2025"
                fill
                className="object-cover object-center"
                priority
                sizes="100vw"
              />
            </motion.div>

            {/* White gradient overlay for text readability */}
            <div 
              className="absolute inset-0 z-[5] pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.6) 25%, rgba(255,255,255,0) 50%)'
              }}
            />

            {/* Overlaid Content */}
            <div className={`relative z-10 h-full flex flex-col px-fluid-md pt-fluid-xl ${DEBUG ? 'border-4 border-yellow-500' : ''}`}>
              {/* Heading - Overlaid on image, positioned higher - Blur In Animation */}
              <BlurIn 
                className="display-hero text-blueprint max-w-[90%] [&>span]:block"
                duration={3.0}
                delay={0.5}
                staggerChildren={true}
                staggerDelay={1.0}
              >
                WE DRAW EVENTS
              </BlurIn>
            </div>
          </div>

          {/* Project Label - Below Image - Animated */}
          <motion.div 
            className={`px-fluid-md py-fluid-md bg-white ${DEBUG ? 'border-4 border-pink-500' : ''}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <Link 
              href="/work/projects/stonehenge-solstice-2025"
              className="link text-blueprint uppercase inline-block"
            >
              STONEHENGE SOLSTICE | 2025
            </Link>
          </motion.div>
        </div>
      </div>

      {/* TABLET/DESKTOP LAYOUT (≥ md breakpoint) */}
      <div className="hidden md:block">
        {/* Max Width Container */}
        <div className="max-w-[1680px] mx-auto">
          {/* Top Container - Contact Button Only */}
          <div className={`w-full h-[clamp(80px,8vh,100px)] relative flex items-center justify-end ${DEBUG ? 'border-4 border-purple-500' : ''}`}>
            {/* Contact Button - Top Right */}
            <div className={`mr-[30px] lg:mr-[60px] ${DEBUG ? 'border-2 border-yellow-500' : ''}`}>
              <Button variant="blueprint" href="/contact">
                CONTACT US
              </Button>
            </div>
          </div>

          {/* Hero Image + Heading Container */}
          <div className={`w-full relative ${DEBUG ? 'border-4 border-purple-500' : ''}`} style={{ height: 'clamp(600px, 70vh, 715px)' }}>
            {/* Image */}
            <div 
              className={`absolute bottom-0 right-0 ${DEBUG ? 'border-4 border-cyan-500' : ''}`}
              style={{
                width: '80%',
                height: 'clamp(520px, 60vh, 615px)',
              }}
            >
              <Image
                src={heroImage}
                alt="Stonehenge Solstice 2025"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>

            {/* Vertical Text - Project Label */}
            <Link 
              href="/work/projects/stonehenge-solstice-2025"
              className={`link text-blueprint uppercase absolute ${DEBUG ? 'border-2 border-pink-500' : ''}`}
              style={{
                left: 'calc(20% - 40px)',
                bottom: '0px',
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
              }}
            >
              STONEHENGE SOLSTICE | 2025
            </Link>

            {/* Heading overlapping the image */}
            <div 
              className={`absolute z-10 ${DEBUG ? 'border-4 border-yellow-500' : ''}`}
              style={{
                top: '0px',
                left: 'clamp(20px, 2.5vw, 30px)',
                maxWidth: 'min(700px, 55vw)',
              }}
            >
              <BlurIn 
                className="display-hero text-blueprint [&>span]:block"
                duration={3.0}
                delay={0.5}
                staggerChildren={true}
                staggerDelay={1.0}
              >
                WE DRAW EVENTS
              </BlurIn>
            </div>
          </div>
        </div>
      </div>

      {/* Text Content Section */}
      <div className={`relative py-fluid-xl md:pb-[100px] md:pt-[30px] ${DEBUG ? 'border-4 border-purple-500' : ''}`}>
        {/* Max Width Container */}
        <div className="max-w-[1680px] mx-auto">
          {/* Mobile: Full width with padding, Desktop: Original 70% width on right, max-width to not exceed image */}
          <div className={`w-full px-fluid-md md:ml-auto md:mr-[64px] md:px-0 ${DEBUG ? 'border-4 border-blue-500' : ''}`} style={{ width: '100%' }}>
            <div className="md:w-[calc(70vw-64px)] md:max-w-[1100px] md:ml-auto">
              {/* Blueprint Divider Line */}
              <div className={`h-[2px] bg-blueprint mb-fluid-lg md:mb-[20px] ${DEBUG ? 'border-2 border-cyan-500' : ''}`}></div>

              {/* Text Content Grid */}
              <div className={`grid grid-cols-1 gap-fluid-lg ${DEBUG ? 'border-4 border-orange-500' : ''}`} style={{ gridTemplateColumns: '1fr' }}>
                {/* Mobile: Stacked, Desktop: Custom grid with golden ratio */}
                <div className="md:grid md:grid-cols-1 md:gap-12" style={{ gridTemplateColumns: 'calc(38.2% - 24px) calc(61.8% - 24px)' }}>
                  {/* Left Column - Bold intro */}
                  <div className={`mb-fluid-lg md:mb-0 ${DEBUG ? 'border-2 border-red-500' : ''}`}>
                    <p className="body-xl">
                      We are an innovative studio dedicated to enhancing the process of event site planning.
                    </p>
                  </div>

                  {/* Right Column - Body text */}
                  <div className={`space-y-fluid-md md:space-y-8 ${DEBUG ? 'border-2 border-red-500' : ''}`}>
                    <p className="body-md">
                      Our philosophy is one of curiosity, collaboration and hands-on thinking. We bring our toolkit and perspective to collaborate alongside event and venue teams to transform spaces into unforgettable experiences.
                    </p>

                    <p className="body-md">
                      We facilitate team and stakeholder conversations through an iterative design workflow, informed by accurate venue data and event industry insight, balancing design aspirations with operational readiness.
                    </p>

                    <UnderlineLink href="/studio" className="text-blueprint uppercase inline-block mt-fluid-sm">
                      MORE ABOUT WEDRAW
                    </UnderlineLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
