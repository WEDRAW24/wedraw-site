'use client'

import Image from 'next/image'
import Button from '@/app/components/Button'
import HatchedPattern from '@/app/components/HatchedPattern'
import CTA from '@/app/components/CTA'
import AnimatedExpertiseBox from '@/app/components/AnimatedExpertiseBox'
import SectionHeader from '@/app/components/SectionHeader'
import ValuesAnimation from '@/app/components/ValuesAnimation'
import { useState } from 'react'
import { images } from './images'

export default function StudioContent() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [mobileAccordionIndex, setMobileAccordionIndex] = useState(0)
  const DEBUG = false

  // Expertise content data
  const expertiseItems = [
    {
      title: "Event design",
      heading: "Creating events is a collaborative process that draws on the expertise of many.",
      description: "Our priority as designers is to ensure every voice is heard and all key information gathered; this ensures we fully understand the event vision and logistical needs. From here, we work closely with the team to develop a design that balances creativity with operational demands. Our drawings evolve throughout the project, with every decision driven by one goal: to deliver a seamless event that engages and leaves a lasting impression."
    },
    {
      title: "Mark out",
      heading: "A thorough plan is only as good as its implementation, and that begins with the Mark Out.",
      description: "As the first team on-site, we set the project on the right path by accurately plotting infrastructure using GPS technology and clear, color-coded markers. If unforeseen obstacles arise, our technical expertise enables us to adapt while maintaining precision, design integrity and avoiding delays. By providing clear and accurate guidance on the ground, we make sure the build gets the best possible start."
    },
    {
      title: "Survey",
      heading: "Our first task is gathering critical information.",
      description: "This often includes a detailed site survey, particularly for outdoor greenfield locations. Understanding the terrain, vegetation, utilities, and other key factors is essential for making informed design decisions. We recommend using up-to-date OS data and conducting a thorough survey before any design work begins to address site-specific challenges and avoid surprises later. By fully understanding the site, we uncover its hidden potential, allowing us to design an event that not only works with but elevates its surroundings."
    },
    {
      title: "Site validation",
      heading: "Gathering feedback is crucial for continuous improvement and success.",
      description: "It offers insights into what works and what needs refining, guiding the design process toward better outcomes. In the event industry, especially with annual events, opportunities for direct feedback are limited, so it's important to capture insights whenever possible. This can be done through GPS surveys, drone imagery, user feedback, or simply attending the event. By immersing ourselves in the experience and collecting data, we ensure each event builds on the last driving improvement year on year."
    },
    {
      title: "Technical support",
      heading: "With over a decade of experience, we've become specialists in drafting, drawings management and troubleshooting.",
      description: "While drawing software is powerful, it can be frustrating when issues arise. Our expertise enables us to resolve problems quickly and avoid delays. Recognising that outsourcing isn't ideal for everyone, we also offer flexible support to help you stay in control of your CAD model. Our services include drawing setup, technical support and active troubleshooting. Whether you need a full setup or targeted assistance, we ensure a stress-free process from start to finish."
    }
  ]
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Mobile Layout (Stacked) */}
        <div className="md:hidden h-[calc(100vh-56px)] flex flex-col">
          {/* Top: Image */}
          <div className="relative h-1/2 w-full">
            <Image 
              src={images.heroLeft}
              alt="WEDRAW Studio showcase"
              fill
              className="object-cover object-center"
              priority
              unoptimized={true}
              sizes="100vw"
            />
          </div>
          
          {/* Bottom: Green section with content + Hatched Pattern */}
          <div className="relative h-1/2 w-full flex flex-col">
            {/* Green section with content */}
            <div className="relative flex-1 bg-meadow flex flex-col justify-end px-6 py-6">
              <h1 className="text-white font-area-black leading-[110%]" style={{ fontSize: 'clamp(36px, 8vw, 65px)' }}>
                A STUDIO FOR HANDS ON THINKING
              </h1>
            </div>
            
            {/* Hatched Pattern section */}
            <div className="relative h-32 w-full">
              <HatchedPattern 
                color="var(--color-meadow)"
                strokeWidth={6} 
                gap={18}
                borderWidth={3}
              />
            </div>
          </div>
        </div>

        {/* Tablet/Desktop Layout (Side by side) */}
        <div className="hidden md:block h-screen">
        {/* Left Hero Image */}
        <div className="absolute left-0 top-0 w-1/2 h-screen">
          <Image 
            src={images.heroLeft}
            alt="WEDRAW Studio showcase"
            fill
            className="object-cover object-center"
            priority
            unoptimized={true}
              sizes="50vw"
          />
        </div>
        
          {/* Green Background Block - 72% of viewport height */}
          <div className="absolute right-0 top-0 h-[72vh] bg-meadow w-1/2" />
        
        {/* Hatched Pattern Section - 28% of viewport height to maintain ratio */}
        <div className="absolute right-0 bottom-0 w-1/2 h-[28vh]">
          <HatchedPattern 
            color="var(--color-meadow)"
            strokeWidth={10} 
            gap={28}
            borderWidth={5}
          />
        </div>
        
        {/* Content Overlay - aligned to bottom-left of solid green area */}
        <div className="absolute top-0 right-0 bottom-[28vh] left-1/2 flex flex-col justify-end p-[clamp(32px,5vw,60px)] pr-[clamp(48px,8vw,80px)]">
          <h1 className="text-white font-area-black leading-[110%]" style={{ fontSize: 'clamp(40px, 4.5vw, 85px)' }}>
            A STUDIO FOR HANDS-ON THINKING
          </h1>
        </div>
        </div>
      </section>

      {/* About Us Section - HIDDEN FOR LAUNCH
      <section className={`relative py-fluid-2xl min-h-screen ${DEBUG ? 'border-4 border-purple-500' : ''}`}>
        <div className={`container mx-auto px-6 ${DEBUG ? 'border-4 border-blue-500' : ''}`}>
          <div className={`grid grid-cols-12 gap-fluid-sm ${DEBUG ? 'border-4 border-orange-500' : ''}`}>
            <div className={`col-span-12 ${DEBUG ? 'border-4 border-cyan-500' : ''}`}>
              <SectionHeader title={<span>About us</span>} color="meadow" className="mb-fluid-lg" />
            </div>
            <div className={`col-span-12 grid grid-cols-1 md:grid-cols-12 gap-fluid-md ${DEBUG ? 'border-4 border-yellow-500' : ''}`}>
              <div className={`md:col-span-6 lg:col-span-5 xl:col-span-5 flex items-start justify-center ${DEBUG ? 'border-4 border-red-500' : ''}`}>
                <div className={`relative aspect-[4/5] w-full max-w-[280px] ${DEBUG ? 'border-4 border-pink-500' : ''}`}>
                  <Image
                    src={images.headshot}
                    alt="WEDRAW team member"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className={`md:col-start-7 md:col-span-6 lg:col-start-6 lg:col-span-7 xl:col-start-6 xl:col-span-7 ${DEBUG ? 'border-4 border-green-500' : ''}`}>
                <h3 className="subtitle mb-fluid-md">
                  We believe that great events<br />
                  begin with great design.
                </h3>
                <div className="space-y-fluid-lg">
                  <p className="body-lg">
                    With a balance of creative vision and technical expertise we create environments that not only function seamlessly but inspire and engage. Collaboration and communication are at the core of everything we do. Working closely with event organisers and production teams, we ensure that every detail is considered and each requirement met. We recognise that each event is unique which is why we tailor our approach from the initial concept to the final layout, delivering solutions that work for everyone.
                  </p>
                </div>
                <Button 
                  variant="meadow"
                  className="mt-fluid-xl"
                  href="/contact"
                >
                  ORGANISE A MEETING
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* How We Work Section */}
      <section id="our-studio" className={`relative py-fluid-2xl ${DEBUG ? 'border-4 border-purple-500' : ''}`}>
        <div className={`container mx-auto px-6 mb-fluid-lg ${DEBUG ? 'border-4 border-blue-500' : ''}`}>
          <SectionHeader title="Our Studio" color="meadow" />
        </div>
        <ValuesAnimation />
      </section>

      {/* Our Expertise Section - Mobile, Tablet & Small Desktop Accordion */}
      <div id="our-expertise" />
      <section className="xl:hidden relative py-fluid-2xl min-h-screen">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-fluid-sm">
            {/* Title */}
            <div className="col-span-12">
              <SectionHeader title="Our Expertise" color="meadow" className="mb-fluid-lg" />
            </div>

            {/* Accordion Items */}
            <div className="col-span-12">
              <div className="space-y-fluid-sm">
                {expertiseItems.map((item, index) => (
                  <div key={index} className="border-b-2 border-meadow">
                    <button
                      type="button"
                      onClick={() => setMobileAccordionIndex(mobileAccordionIndex === index ? -1 : index)}
                      className="w-full flex items-center justify-between py-fluid-sm text-left cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      <span className="accordion-heading text-meadow">{item.title}</span>
                      <svg 
                        className={`w-6 h-6 text-meadow transition-transform duration-300 flex-shrink-0 ml-4 ${mobileAccordionIndex === index ? 'rotate-90' : ''}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileAccordionIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pt-fluid-lg pb-fluid-lg">
                        <h4 className="body-xl mb-fluid-md">
                          {item.heading}
                        </h4>
                        <p className="body-lg">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section - Large Desktop Sticky */}
      <section className="hidden xl:block relative min-h-[300vh]">
        {/* Sticky container for entire section */}
        <div className="sticky top-0 min-h-screen bg-white">
          <div className="container mx-auto px-6 pt-fluid-lg">
            <div className="grid grid-cols-12 gap-fluid-sm">
              {/* Title */}
              <div className="col-span-12">
                <SectionHeader title="Our Expertise" color="meadow" className="mb-fluid-lg" />
              </div>

              {/* Content Grid */}
              <div className="col-span-12 grid grid-cols-1 md:grid-cols-12 gap-fluid-md">
                {/* Left Side - Service List */}
                <div className="md:col-span-5">
                  <div className="space-y-fluid-sm">
                    {expertiseItems.map((item, index) => (
                    <AnimatedExpertiseBox 
                        key={index}
                        title={item.title}
                        isInitiallyActive={index === 0}
                        index={index}
                        totalBoxes={expertiseItems.length}
                        onActiveChange={(idx, isActive) => isActive && setActiveIndex(idx)}
                    />
                    ))}
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="md:col-span-6 md:col-start-7">
                  <div className="relative">
                    {expertiseItems.map((item, index) => (
                      <div key={index} className={`absolute inset-0 transition-opacity duration-700 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                        <h4 className="body-xl mb-fluid-md">
                          {item.heading}
                      </h4>
                        <p className="body-lg">
                          {item.description}
                      </p>
                    </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section - HIDDEN FOR LAUNCH
      <section className="relative py-fluid-2xl min-h-screen">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-fluid-sm">
            <div className="col-span-12">
              <SectionHeader title="Our mission" color="meadow" className="mb-fluid-lg" />
            </div>
            <div className="col-span-12 grid grid-cols-1 md:grid-cols-12 gap-fluid-sm">
              <div className="hidden md:block md:col-span-1 text-meadow">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4L44 24L24 44" stroke="currentColor" strokeWidth="2"/>
                  <path d="M44 24H4" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="col-span-12 md:col-start-5 md:col-span-9">
                <h3 className="featured-text mb-fluid-lg">
                  Transforming spaces into unforgettable experiences through creative ambition and technical precision. We collaborate closely, communicate clearly and map out what matters.
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-fluid-lg border-t-2 border-meadow pt-fluid-md">
                  <div>
                    <h4 className="body-xl mb-fluid-xs">
                      We believe that great events<br />begin with great design.
                    </h4>
                  </div>
                  <div className="space-y-fluid-lg">
                    <p className="body-md">
                      With a balance of creative vision and technical expertise we create environments that not only function seamlessly but inspire and engage. Collaboration and communication are at the core of everything we do. Working closely with event organisers and production teams, we ensure that every detail is considered and each requirement met.
                    </p>
                    <p className="body-md">
                      We recognise that each event is unique which is why we tailor our approach from the initial concept to the final layout, delivering solutions that work for everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="bg-white my-fluid-2xl">
        <CTA 
          magnetType="cross"
          magnetColor="var(--color-meadow)"
          title="Let's get Started"
          buttonText="GET IN TOUCH"
          buttonHref="/contact"
          className="py-fluid-2xl"
        />
      </section>
    </>
  )
}