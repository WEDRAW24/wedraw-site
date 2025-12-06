'use client'

import Image from 'next/image'
import Button from '@/app/components/Button'
import HatchedPattern from '@/app/components/HatchedPattern'
import CTA from '@/app/components/CTA'
import AnimatedExpertiseBox from '@/app/components/AnimatedExpertiseBox'
import { useState } from 'react'
import { images } from './images'
import { truncate } from 'fs/promises'

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
            <div className="relative flex-1 bg-meadow flex flex-col justify-center px-6">
              <Button 
                variant="white-meadow"
                size="md"
                className="mb-6 self-start"
                href="/work/projects/bristol-international-balloon-fiesta-2024"
              >
                BRISTOL BALLOON FIESTA
              </Button>
              <div style={{ fontSize: 'clamp(40px, 10vw, 85px)' }}>
                <h1 className="text-white font-area-black leading-[120%] text-[1em]">
                  <div className="flex items-center">
                    <div className="relative flex-shrink-0" style={{ marginBottom: '-0.118em' }}>
                      <Image
                        src={images.WE_SVG}
                        alt="WE"
                        width={160}
                        height={85}
                        style={{ 
                          height: '1em',
                          width: '1.882em',
                          marginRight: '0.188em'
                        }}
                      />
                    </div>
                    <span className="flex-shrink-0">ELEVATE</span>
                  </div>
                  EVENTS
                </h1>
              </div>
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
          
          {/* Green Background Block */}
          <div className="absolute right-0 top-0 h-[calc(100vh-300px)] bg-meadow w-1/2" />
          
          {/* Hatched Pattern Section */}
          <div className="absolute right-0 bottom-0 w-1/2 h-[300px]">
            <HatchedPattern 
              color="var(--color-meadow)"
              strokeWidth={10} 
              gap={28}
              borderWidth={5}
            />
          </div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-start-7 col-span-6 pl-16">
                  <Button 
                    variant="white-meadow"
                    size="md"
                    className="mb-6"
                    href="/work/projects/bristol-international-balloon-fiesta-2024"
                  >
                    BRISTOL BALLOON FIESTA
                  </Button>
                  <div style={{ fontSize: 'clamp(40px, 4.5vw, 85px)' }}>
                    <h1 className="text-white font-area-black leading-[120%] text-[1em]">
                      <div className="flex items-center">
                        <div className="relative flex-shrink-0" style={{ marginBottom: '-0.153em' }}>
                          <Image
                            src={images.WE_SVG}
                            alt="WE"
                            width={160}
                            height={85}
                            style={{ 
                              height: '0.98em',
                              width: '1.845em',
                              marginRight: '0.188em'
                            }}
                          />
                        </div>
                        <span className="flex-shrink-0">ELEVATE</span>
                      </div>
                      EVENTS
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className={`relative py-fluid-2xl min-h-screen ${DEBUG ? 'border-4 border-purple-500' : ''}`}>
        <div className={`container mx-auto px-6 ${DEBUG ? 'border-4 border-blue-500' : ''}`}>
          <div className={`grid grid-cols-12 gap-fluid-sm ${DEBUG ? 'border-4 border-orange-500' : ''}`}>
            {/* Title */}
            <div className={`col-span-12 ${DEBUG ? 'border-4 border-cyan-500' : ''}`}>
              <h2 className="display-md text-meadow border-b-2 border-meadow pb-2 mb-fluid-xl">
                About us
              </h2>
            </div>

            {/* Content Grid */}
            <div className={`col-span-12 grid grid-cols-1 md:grid-cols-12 gap-fluid-md ${DEBUG ? 'border-4 border-yellow-500' : ''}`}>
              {/* Image */}
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

              {/* Text Content */}
              <div className={`md:col-start-7 md:col-span-6 lg:col-start-6 lg:col-span-7 xl:col-start-6 xl:col-span-7 ${DEBUG ? 'border-4 border-green-500' : ''}`}>
                <h3 className="heading-3 mb-fluid-md">
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
                  size="md"
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

      {/* Our Expertise Section - Mobile, Tablet & Small Desktop Accordion */}
      <section className="xl:hidden relative py-fluid-2xl min-h-screen">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-fluid-sm">
            {/* Title */}
            <div className="col-span-12">
              <h2 className="display-md text-meadow border-b-2 border-meadow pb-2 mb-fluid-xl">
                Our expertise
              </h2>
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
                      <span className="heading-1 text-meadow">{item.title}</span>
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
                        <h4 className="heading-4 mb-fluid-md">
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
                <h2 className="display-md text-meadow border-b-2 border-meadow pb-2 mb-fluid-xl">
                  Our expertise
                </h2>
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
                        <h4 className="heading-4 mb-fluid-md">
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

      {/* Our Mission Section */}
      <section className="relative py-fluid-2xl min-h-screen">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-fluid-sm">
            {/* Title */}
            <div className="col-span-12">
              <h2 className="display-md text-meadow border-b-2 border-meadow pb-2 mb-fluid-xl">
                Our mission
              </h2>
            </div>

            {/* Content Grid */}
            <div className="col-span-12 grid grid-cols-1 md:grid-cols-12 gap-fluid-sm">
              {/* Arrow Icon */}
              <div className="hidden md:block md:col-span-1 text-meadow">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4L44 24L24 44" stroke="currentColor" strokeWidth="2"/>
                  <path d="M44 24H4" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>

              {/* Main Text */}
              <div className="col-span-12 md:col-start-5 md:col-span-9">
                <h3 className="display-sm mb-fluid-lg">
                  Transforming spaces into unforgettable experiences through creative ambition and technical precision. We collaborate closely, communicate clearly and map out what matters.
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-fluid-lg border-t-2 border-meadow pt-fluid-md">
                  <div>
                    <h4 className="heading-4 mb-fluid-xs">
                      We believe that great events<br />begin with great design.
                    </h4>
                  </div>
                  <div className="space-y-fluid-lg">
                    <p className="body-sm">
                      With a balance of creative vision and technical expertise we create environments that not only function seamlessly but inspire and engage. Collaboration and communication are at the core of everything we do. Working closely with event organisers and production teams, we ensure that every detail is considered and each requirement met.
                    </p>
                    <p className="body-sm">
                      We recognise that each event is unique which is why we tailor our approach from the initial concept to the final layout, delivering solutions that work for everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className={`relative py-fluid-2xl min-h-screen ${DEBUG ? 'border-4 border-purple-500' : ''}`}>
        <div className={`container mx-auto px-6 ${DEBUG ? 'border-4 border-blue-500' : ''}`}>
          <div className={`grid grid-cols-12 gap-fluid-sm ${DEBUG ? 'border-4 border-orange-500' : ''}`}>
            {/* Title */}
            <div className={`col-span-12 ${DEBUG ? 'border-4 border-cyan-500' : ''}`}>
              <h2 className="display-md text-meadow border-b-2 border-meadow pb-2 mb-fluid-xl">
                Our values
              </h2>
            </div>

            {/* Content Grid */}
            <div className={`col-span-12 ${DEBUG ? 'border-4 border-yellow-500' : ''}`}>
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-fluid-3xl md:gap-fluid-xl ${DEBUG ? 'border-4 border-green-500' : ''}`}>
                {/* Clarity First */}
                <div className={`flex flex-col ${DEBUG ? 'border-4 border-red-500' : ''}`}>
                  <div className={`h-[120px] flex items-center mb-fluid-xs ${DEBUG ? 'border-2 border-pink-500' : ''}`}>
                    <Image 
                    src={images.icons.eye}
                    alt="Eye icon representing clarity"
                    width={120}
                    height={120}
                  />
                  </div>
                  <div className={`mb-fluid-xs md:min-h-[80px] ${DEBUG ? 'border-2 border-yellow-500' : ''}`}>
                    <h3 className="heading-2">Clarity first</h3>
                  </div>
                  <div className={`${DEBUG ? 'border-2 border-cyan-500' : ''}`}>
                    <p className="body-sm">
                      We transform complex ideas into precise, easy-to-understand visual plans. Every design choice enhances comprehension and usability.
                    </p>
                  </div>
                </div>

                {/* Creative at Heart */}
                <div className={`flex flex-col ${DEBUG ? 'border-4 border-red-500' : ''}`}>
                  <div className={`h-[120px] flex items-center mb-fluid-xs ${DEBUG ? 'border-2 border-pink-500' : ''}`}>
                    <Image 
                    src={images.icons.heart}
                    alt="Heart icon representing creativity"
                    width={100}
                    height={100}
                  />
                  </div>
                  <div className={`mb-fluid-xs md:min-h-[80px] ${DEBUG ? 'border-2 border-yellow-500' : ''}`}>
                    <h3 className="heading-2">Creative at heart</h3>
                  </div>
                  <div className={`${DEBUG ? 'border-2 border-cyan-500' : ''}`}>
                    <p className="body-sm">
                      We are driven by the joy of shaping novel and inspiring event experiences. We take ambitious ideas and ground them in careful, calculated design, ensuring every plan is both visionary and flawlessly executed in the real world.
                    </p>
                  </div>
                </div>

                {/* Precise by Nature */}
                <div className={`flex flex-col ${DEBUG ? 'border-4 border-red-500' : ''}`}>
                  <div className={`h-[120px] flex items-center mb-fluid-xs ${DEBUG ? 'border-2 border-pink-500' : ''}`}>
                    <Image 
                    src={images.icons.target}
                    alt="Target icon representing precision"
                    width={100}
                    height={100}
                  />
                  </div>
                  <div className={`mb-fluid-xs md:min-h-[80px] ${DEBUG ? 'border-2 border-yellow-500' : ''}`}>
                    <h3 className="heading-2">Precise by nature</h3>
                  </div>
                  <div className={`${DEBUG ? 'border-2 border-cyan-500' : ''}`}>
                    <p className="body-sm">
                      We push creative boundaries while ensuring that every plan is grounded in careful, real-world execution. Our site plans are rigorously detailed, leveraging the latest technology to enhance ease-of-use and accuracy.
                    </p>
                  </div>
                </div>

                {/* Adaptable and Responsive */}
                <div className={`flex flex-col ${DEBUG ? 'border-4 border-red-500' : ''}`}>
                  <div className={`h-[120px] flex items-center mb-fluid-xs ${DEBUG ? 'border-2 border-pink-500' : ''}`}>
                    <Image 
                    src={images.icons.adaptable}
                    alt="Adaptable icon"
                    width={110}
                    height={110}
                  />
                  </div>
                  <div className={`mb-fluid-xs md:min-h-[80px] ${DEBUG ? 'border-2 border-yellow-500' : ''}`}>
                    <h3 className="heading-2">Adaptable and responsive</h3>
                  </div>
                  <div className={`${DEBUG ? 'border-2 border-cyan-500' : ''}`}>
                    <p className="body-sm">
                      We thrive in the ever-changing landscape of event planning, acting as a calming presence that quickly adapts to new challenges and evolving needs without compromising clarity or execution.
                    </p>
                  </div>
                </div>

                {/* Facilitating Collaboration */}
                <div className={`flex flex-col ${DEBUG ? 'border-4 border-red-500' : ''}`}>
                  <div className={`h-[120px] flex items-center mb-fluid-xs ${DEBUG ? 'border-2 border-pink-500' : ''}`}>
                    <Image 
                    src={images.icons.collaboration}
                    alt="Collaboration icon"
                    width={100}
                    height={100}
                  />
                  </div>
                  <div className={`mb-fluid-xs md:min-h-[80px] ${DEBUG ? 'border-2 border-yellow-500' : ''}`}>
                    <h3 className="heading-2">Facilitating collaboration</h3>
                  </div>
                  <div className={`${DEBUG ? 'border-2 border-cyan-500' : ''}`}>
                    <p className="body-sm">
                      As a central point of connection in event planning, we are the main touchpoint to various stakeholder teams, offering insights that inspire and refine creative visions.
                    </p>
                  </div>
                </div>

                {/* Innovative Approach */}
                <div className={`flex flex-col ${DEBUG ? 'border-4 border-red-500' : ''}`}>
                  <div className={`h-[120px] flex items-center mb-fluid-xs ${DEBUG ? 'border-2 border-pink-500' : ''}`}>
                    <Image 
                    src={images.icons.lightbulb}
                    alt="Lightbulb icon representing innovation"
                    width={70}
                    height={70}
                  />
                  </div>
                  <div className={`mb-fluid-xs md:min-h-[80px] ${DEBUG ? 'border-2 border-yellow-500' : ''}`}>
                    <h3 className="heading-2">Innovative approach</h3>
                  </div>
                  <div className={`${DEBUG ? 'border-2 border-cyan-500' : ''}`}>
                    <p className="body-sm">
                      We're at the forefront of industry trends, continuously refining our methodologies and embracing new technologies to set higher standards in event design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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