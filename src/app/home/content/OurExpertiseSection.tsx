'use client'

import { useState } from 'react'
import Image from 'next/image'
import Button from '../../components/Button'
import UnderlineLink from '../../components/UnderlineLink'
import VerticalExpertiseCarousel from '../../components/VerticalExpertiseCarousel'
import ExpertiseImage from '../../components/ExpertiseImage'
import WESVGMeadow from '../../assets/svg/WE_SVG_meadow.svg'

export default function OurExpertiseSection() {
  // Debug mode - set to false to hide all container borders
  const DEBUG = false;
  const [currentExpertise, setCurrentExpertise] = useState('DESIGN')

  return (
    <div className={`relative py-fluid-xl md:pb-[100px] md:pt-[30px] min-h-screen md:min-h-0 ${DEBUG ? 'border-4 border-purple-500' : ''}`}>
      <div className={`max-w-[1680px] mx-auto px-fluid-md md:px-4 sm:px-6 lg:px-[60px] ${DEBUG ? 'border-4 border-blue-500' : ''}`}>
        {/* Section Header */}
        <div className={`${DEBUG ? 'border-2 border-green-500' : ''}`}>
          {/* Mobile: Title only, Desktop: Title + Button */}
          <div className="flex justify-between items-center mb-fluid-md md:mb-3">
            {/* Title */}
            <h2 className="text-display-xl md:text-[clamp(36px,4vw,58px)] font-sans font-black md:font-extrabold text-meadow leading-[1.15] md:leading-normal uppercase md:normal-case">
              <span className="block md:inline">Our</span>
              <span className="block md:inline md:ml-2">expertise</span>
            </h2>
            
            {/* Button - Hidden on mobile */}
            <div className="hidden md:block">
              <Button variant="meadow" size="md" href="/studio">
                READ ABOUT OUR STUDIO
              </Button>
            </div>
          </div>
          
          {/* Green Divider Line */}
          <div className={`h-[2px] bg-meadow mb-fluid-lg md:mb-12 ${DEBUG ? 'border-2 border-cyan-500' : ''}`}></div>
        </div>

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
                <span className="text-heading-1 font-sans font-extrabold text-meadow">Design</span>
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
                  <p className="text-body-lg font-sans font-normal text-dark-grey">
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
                <span className="text-heading-1 font-sans font-extrabold text-meadow">Mark out</span>
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
                  <p className="text-body-lg font-sans font-normal text-dark-grey">
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
                <span className="text-heading-1 font-sans font-extrabold text-meadow">Survey</span>
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
                  <p className="text-body-lg font-sans font-normal text-dark-grey">
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
                <span className="text-heading-1 font-sans font-extrabold text-meadow">Validate</span>
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
                  <p className="text-body-lg font-sans font-normal text-dark-grey">
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
                <span className="text-heading-1 font-sans font-extrabold text-meadow">Support</span>
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
                  <p className="text-body-lg font-sans font-normal text-dark-grey">
                    Whether it's full CAD drawing setups, troubleshooting tech headaches or more general advice, we provide reliable, responsive support to help your team deliver with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT - 2x2 Grid (unchanged) */}
        <div className={`hidden md:grid grid-cols-2 gap-8 ${DEBUG ? 'border-2 border-orange-500' : ''}`}>
          {/* Container 1 - Top Left */}
          <div className={`min-h-[600px] ${DEBUG ? 'border-4 border-red-500' : ''}`}>
            <div className={`flex h-full ${DEBUG ? 'border-2 border-purple-500' : ''}`}>
              {/* Left Container - 30% */}
              <div className={`flex items-center justify-end pr-2 ${DEBUG ? 'border-4 border-cyan-500' : ''}`} style={{ width: '30%' }}>
                <Image 
                  src={WESVGMeadow}
                  alt="WE"
                  style={{ height: 'clamp(32px, 6.5vw, 67px)', width: 'auto' }}
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
          <div className={`min-h-[600px] ${DEBUG ? 'border-4 border-blue-500' : ''}`}>
            <ExpertiseImage currentExpertise={currentExpertise} debug={DEBUG} />
          </div>

          {/* Container 3 - Bottom Left - Expertise Description */}
          <div className={`min-h-[300px] ${DEBUG ? 'border-4 border-green-500' : ''}`}>
            <div className={`flex h-full ${DEBUG ? 'border-2 border-purple-500' : ''}`}>
              {/* Left Container - 30% (empty to align with WE logo) */}
              <div className={`${DEBUG ? 'border-4 border-cyan-500' : ''}`} style={{ width: '30%' }}>
              </div>

              {/* Right Container - 70% - Description Content */}
              <div className={`flex flex-col justify-center ${DEBUG ? 'border-4 border-yellow-500' : ''}`} style={{ width: '70%', paddingLeft: '8px' }}>
                {/* Meadow Divider Line */}
                <div className={`h-[2px] bg-meadow mb-8 ${DEBUG ? 'border-2 border-cyan-500' : ''}`}></div>
                
                {/* Dynamic Description Text */}
                <div key={currentExpertise} className="animate-fadeIn">
                  <p className="font-sans font-normal leading-[160%] text-dark-grey mb-6" style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}>
                    {currentExpertise === 'VALIDATE' && "We help future-proof events by capturing vital on-site data on what really happened, so we can learn and improve for next year"}
                    {currentExpertise === 'SUPPORT' && "Whether it's full CAD drawing setups, troubleshooting tech headaches or more general advice, we provide reliable, responsive support to help your tema deliver with confidence."}
                    {currentExpertise === 'DESIGN' && "We work closely with clients to shape event layouts that are both visionary and buildable, blending creativity with real-world logistics from day one."}
                    {currentExpertise === 'MARKOUT' && "Armed with GPS and a sharp eye for detail, we're the first team on site, getting the build off on the right foot,setting the foundations for a successful build"}
                    {currentExpertise === 'SURVEY' && "From terrain mapping to utility plans, we map the space so planning can begin with accurate up to date information"}
                  </p>
                  
                  <UnderlineLink href="/studio" className="text-meadow uppercase font-mono text-[14px]">
                    READ MORE
                  </UnderlineLink>
                </div>
              </div>
            </div>
          </div>

          {/* Container 4 - Bottom Right - Empty */}
          <div className={`min-h-[300px] ${DEBUG ? 'border-4 border-yellow-500' : ''}`}>
          </div>
        </div>
      </div>
    </div>
  )
}
