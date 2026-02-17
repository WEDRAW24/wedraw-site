'use client'

import { useState } from 'react'
import Image from 'next/image'
import Button from '../../components/Button'
import UnderlineLink from '../../components/UnderlineLink'
import VerticalExpertiseCarousel from '../../components/VerticalExpertiseCarousel'
import ExpertiseImage from '../../components/ExpertiseImage'
import SectionHeader from '../../components/SectionHeader'
import WESVGMeadow from '../../assets/svg/WE_SVG_meadow.svg'

export default function OurExpertiseSection() {
  // Debug mode - set to false to hide all container borders
  const DEBUG = false;
  const [currentExpertise, setCurrentExpertise] = useState('DESIGN')

  return (
    <div className={`relative py-fluid-xl md:pb-[100px] md:pt-[30px] min-h-screen md:min-h-0 ${DEBUG ? 'border-4 border-purple-500' : ''}`}>
      <div className={`max-w-[1680px] mx-auto px-fluid-md md:px-4 sm:px-6 lg:px-[60px] ${DEBUG ? 'border-4 border-blue-500' : ''}`}>
        {/* Section Header */}
        <SectionHeader
          title="Our Expertise"
          color="meadow"
          buttonText="READ ABOUT OUR STUDIO"
          buttonHref="/studio"
          className={DEBUG ? 'border-2 border-green-500' : ''}
        />

        {/* MOBILE LAYOUT - Accordion */}
        <div className="md:hidden min-h-screen">
          <div className="space-y-fluid-sm">
            {/* Design */}
            <div className="border-b-2 border-meadow">
              <button
                type="button"
                onClick={() => setCurrentExpertise(currentExpertise === 'DESIGN' ? 'DESIGN' : 'DESIGN')}
                className="w-full flex items-center justify-between py-fluid-sm text-left cursor-pointer hover:opacity-80 transition-opacity"
              >
                <span className="accordion-heading text-meadow">Design</span>
                <svg 
                  className={`w-6 h-6 text-meadow transition-transform duration-300 flex-shrink-0 ml-4 ${currentExpertise === 'DESIGN' ? 'rotate-90' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  currentExpertise === 'DESIGN' ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pb-fluid-lg space-y-fluid-md">
                  {/* Image */}
                  <div className="w-full h-[300px] relative">
                    <ExpertiseImage currentExpertise="DESIGN" debug={DEBUG} />
                  </div>
                  {/* Description */}
                  <p className="body-lg">
                    We work closely with clients to shape event layouts that are both visionary and buildable, blending creativity with real-world logistics from day one.
                  </p>
                </div>
              </div>
            </div>

            {/* Markout */}
            <div className="border-b-2 border-meadow">
              <button
                type="button"
                onClick={() => setCurrentExpertise(currentExpertise === 'MARKOUT' ? '' : 'MARKOUT')}
                className="w-full flex items-center justify-between py-fluid-sm text-left cursor-pointer hover:opacity-80 transition-opacity"
              >
                <span className="accordion-heading text-meadow">Mark out</span>
                <svg 
                  className={`w-6 h-6 text-meadow transition-transform duration-300 flex-shrink-0 ml-4 ${currentExpertise === 'MARKOUT' ? 'rotate-90' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  currentExpertise === 'MARKOUT' ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pb-fluid-lg space-y-fluid-md">
                  {/* Image */}
                  <div className="w-full h-[300px] relative">
                    <ExpertiseImage currentExpertise="MARKOUT" debug={DEBUG} />
                  </div>
                  {/* Description */}
                  <p className="body-lg">
                    Armed with GPS and a sharp eye for detail, we're the first team on site, getting the build off on the right foot, setting the foundations for a successful build.
                  </p>
                </div>
              </div>
            </div>

            {/* Survey */}
            <div className="border-b-2 border-meadow">
              <button
                type="button"
                onClick={() => setCurrentExpertise(currentExpertise === 'SURVEY' ? '' : 'SURVEY')}
                className="w-full flex items-center justify-between py-fluid-sm text-left cursor-pointer hover:opacity-80 transition-opacity"
              >
                <span className="accordion-heading text-meadow">Survey</span>
                <svg 
                  className={`w-6 h-6 text-meadow transition-transform duration-300 flex-shrink-0 ml-4 ${currentExpertise === 'SURVEY' ? 'rotate-90' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  currentExpertise === 'SURVEY' ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pb-fluid-lg space-y-fluid-md">
                  {/* Image */}
                  <div className="w-full h-[300px] relative">
                    <ExpertiseImage currentExpertise="SURVEY" debug={DEBUG} />
                  </div>
                  {/* Description */}
                  <p className="body-lg">
                    From terrain mapping to utility plans, we map the space so planning can begin with accurate up to date information.
                  </p>
                </div>
              </div>
            </div>

            {/* Validate */}
            <div className="border-b-2 border-meadow">
              <button
                type="button"
                onClick={() => setCurrentExpertise(currentExpertise === 'VALIDATE' ? '' : 'VALIDATE')}
                className="w-full flex items-center justify-between py-fluid-sm text-left cursor-pointer hover:opacity-80 transition-opacity"
              >
                <span className="accordion-heading text-meadow">Validate</span>
                <svg 
                  className={`w-6 h-6 text-meadow transition-transform duration-300 flex-shrink-0 ml-4 ${currentExpertise === 'VALIDATE' ? 'rotate-90' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  currentExpertise === 'VALIDATE' ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pb-fluid-lg space-y-fluid-md">
                  {/* Image */}
                  <div className="w-full h-[300px] relative">
                    <ExpertiseImage currentExpertise="VALIDATE" debug={DEBUG} />
                  </div>
                  {/* Description */}
                  <p className="body-lg">
                    We help future-proof events by capturing vital on-site data on what really happened, so we can learn and improve for next year.
                  </p>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="border-b-2 border-meadow">
              <button
                type="button"
                onClick={() => setCurrentExpertise(currentExpertise === 'SUPPORT' ? '' : 'SUPPORT')}
                className="w-full flex items-center justify-between py-fluid-sm text-left cursor-pointer hover:opacity-80 transition-opacity"
              >
                <span className="accordion-heading text-meadow">Support</span>
                <svg 
                  className={`w-6 h-6 text-meadow transition-transform duration-300 flex-shrink-0 ml-4 ${currentExpertise === 'SUPPORT' ? 'rotate-90' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  currentExpertise === 'SUPPORT' ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pb-fluid-lg space-y-fluid-md">
                  {/* Image */}
                  <div className="w-full h-[300px] relative">
                    <ExpertiseImage currentExpertise="SUPPORT" debug={DEBUG} />
                  </div>
                  {/* Description */}
                  <p className="body-lg">
                    Whether it's full CAD drawing setups, troubleshooting tech headaches or more general advice, we provide reliable, responsive support to help your team deliver with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT - 2x2 Grid (unchanged) */}
        <div className={`hidden md:grid grid-cols-2 gap-8 overflow-visible ${DEBUG ? 'border-2 border-orange-500' : ''}`}>
          {/* Container 1 - Top Left - Container query parent */}
          <div 
            className={`${DEBUG ? 'border-4 border-red-500' : ''}`}
            style={{ containerType: 'inline-size' }}
          >
            <div className={`flex h-full ${DEBUG ? 'border-2 border-purple-500' : ''}`}>
              {/* Left Container - 30% */}
              <div className={`flex items-center justify-end pr-2 ${DEBUG ? 'border-4 border-cyan-500' : ''}`} style={{ width: '30%' }}>
                <Image 
                  src={WESVGMeadow}
                  alt="WE"
                  style={{ height: 'clamp(32px, 10cqi, 67px)', width: 'auto' }}
                />
              </div>

              {/* Right Container - 70% - Vertical Carousel */}
              <VerticalExpertiseCarousel 
                debug={DEBUG} 
                onExpertiseChange={setCurrentExpertise}
              />
            </div>
          </div>

          {/* Container 2 - Top Right - Expertise Image */}
          <div className={`${DEBUG ? 'border-4 border-blue-500' : ''}`}>
            <ExpertiseImage currentExpertise={currentExpertise} debug={DEBUG} />
          </div>

          {/* Container 3 - Bottom Left - Expertise Description */}
          <div className={`${DEBUG ? 'border-4 border-green-500' : ''}`}>
            <div className={`flex h-full ${DEBUG ? 'border-2 border-purple-500' : ''}`}>
              {/* Left Container - 30% (empty to align with WE logo) */}
              <div className={`${DEBUG ? 'border-4 border-cyan-500' : ''}`} style={{ width: '30%' }}>
              </div>

              {/* Right Container - 70% - Description Content */}
              <div className={`flex flex-col justify-center ${DEBUG ? 'border-4 border-yellow-500' : ''}`} style={{ width: '70%', paddingLeft: '8px' }}>
                {/* Meadow Divider Line */}
                <div className={`h-[2px] bg-meadow mb-8 ${DEBUG ? 'border-2 border-cyan-500' : ''}`}></div>
                
                {/* Dynamic Description Text - min-height prevents section jumping */}
                <div key={currentExpertise} className="animate-fadeIn min-h-[200px]">
                  <p className="body-md mb-6">
                    {currentExpertise === 'VALIDATE' && "We help future-proof events by capturing vital on-site data on what really happened, so we can learn and improve for next year"}
                    {currentExpertise === 'SUPPORT' && "Whether it's full CAD drawing setups, troubleshooting tech headaches or more general advice, we provide reliable, responsive support to help your tema deliver with confidence."}
                    {currentExpertise === 'DESIGN' && "We work closely with clients to shape event layouts that are both visionary and buildable, blending creativity with real-world logistics from day one."}
                    {currentExpertise === 'MARKOUT' && "Armed with GPS and a sharp eye for detail, we're the first team on site, getting the build off on the right foot,setting the foundations for a successful build"}
                    {currentExpertise === 'SURVEY' && "From terrain mapping to utility plans, we map the space so planning can begin with accurate up to date information"}
                  </p>
                  
                  <UnderlineLink href="/studio" className="text-meadow uppercase">
                    READ MORE
                  </UnderlineLink>
                </div>
              </div>
            </div>
          </div>

          {/* Container 4 - Bottom Right - Empty */}
          <div className={`${DEBUG ? 'border-4 border-yellow-500' : ''}`}>
          </div>
        </div>
      </div>
    </div>
  )
}
