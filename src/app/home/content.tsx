'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../components/Button'
import UnderlineLink from '../components/UnderlineLink'
import CTA from '../components/CTA'
import TestimonialCard from '../components/TestimonialCard'
import HatchedPattern from '../components/HatchedPattern'
import SelectedProjectCard from '../components/SelectedProjectCard'
import SelectedProjectsCarousel from '../components/SelectedProjectsCarousel'
import JournalCard from '../components/JournalCard'
import VerticalExpertiseCarousel from '../components/VerticalExpertiseCarousel'
import ExpertiseImage from '../components/ExpertiseImage'
import WESVGMeadow from '../assets/svg/WE_SVG_meadow.svg'

// Project metadata
import { metadata as riverOfLightMetadata } from '../work/projects/liverpool-river-of-light-2024/metadata'
import { metadata as blenheimMetadata } from '../work/projects/blenheim-palace-international-horse-trials-2024/metadata'
import { metadata as balloonFiestaMetadata } from '../work/projects/bristol-international-balloon-fiesta-2024/metadata'

// Journal article metadata
import { metadata as introducingWedrawMetadata } from '../journal/articles/introducing-wedraw/metadata'
import { metadata as craftingExperiencesMetadata } from '../journal/articles/crafting-experiences-not-just-spaces/metadata'
import { metadata as drawingCommunicationMetadata } from '../journal/articles/drawing-a-means-of-communication/metadata'

// Client logos
import LogoBristol from '../assets/logos_client/Logo_bristol_balloon_fiesta.svg'
import LogoEnglishHeritage from '../assets/logos_client/Logo_english_heritage.svg'
import LogoFarmFest from '../assets/logos_client/Logo_farm_fest.svg'
import LogoFEI from '../assets/logos_client/Logo_fei_european_champs.svg'
import LogoGlastonbury from '../assets/logos_client/Logo_glastonbury.svg'
import LogoREM from '../assets/logos_client/Logo_rem.svg'
import LogoRiverOfLight from '../assets/logos_client/Logo_river_of_light.svg'
import LogoGameFair from '../assets/logos_client/Logo_the_game_fair.svg'

export default function HomeContent() {
  // Debug mode - set to false to hide all container borders
  const DEBUG = false;
  const [currentExpertise, setCurrentExpertise] = useState('DESIGN')

  return (
    <main className="min-h-screen bg-white">
      {/* Top Container - Contact Button Only */}
      <div className={`w-full h-[100px] relative flex items-center justify-end ${DEBUG ? 'border-4 border-purple-500' : ''}`}>
        {/* Contact Button - Top Right */}
        <div className={`mr-[30px] ${DEBUG ? 'border-2 border-yellow-500' : ''}`}>
          <Button variant="blueprint" size="md" href="/contact">
            CONTACT US
          </Button>
        </div>
      </div>

      {/* Hero Image + Heading Container */}
      <div className={`w-full h-[715px] relative ${DEBUG ? 'border-4 border-purple-500' : ''}`}>
        {/* Image */}
        <div 
          className={`absolute bottom-0 right-0 ${DEBUG ? 'border-4 border-cyan-500' : ''}`}
          style={{
            width: '80%',
            height: '615px',
          }}
        >
          <Image
            src="/home-hero.jpg"
            alt="Hot air balloons at festival"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Vertical Text - Project Label */}
        <Link 
          href="/work/projects/bristol-international-balloon-fiesta-2024"
          className={`absolute hover:opacity-70 transition-opacity ${DEBUG ? 'border-2 border-pink-500' : ''}`}
          style={{
            left: 'calc(20% - 40px)',
            bottom: '0px',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
          }}
        >
          <p className="font-mono font-mono-medium text-[14px] tracking-wider text-blueprint uppercase">
            BRISTOL BALLOON FIESTA | 2024
          </p>
        </Link>

        {/* Heading overlapping the image */}
        <div 
          className={`absolute z-10 ${DEBUG ? 'border-4 border-yellow-500' : ''}`}
          style={{
            top: '0px',
            left: '30px',
            maxWidth: 'min(600px, 50vw)',
          }}
        >
          <h1 className="text-[48px] sm:text-[48px] md:text-[60px] lg:text-[85px] xl:text-[85px] font-sans font-extrabold leading-[120%] text-blueprint">
            Shaping unforgettable experiences
          </h1>
        </div>
      </div>

      {/* Text Content Section */}
      <div className={`relative pb-[100px] pt-[30px] ${DEBUG ? 'border-4 border-purple-500' : ''}`}>
        <div className={`ml-auto mr-[64px] ${DEBUG ? 'border-4 border-blue-500' : ''}`} style={{ width: 'calc(70% - 64px)' }}>
          {/* Blueprint Divider Line */}
          <div className={`h-[2px] bg-blueprint mb-[20px] ${DEBUG ? 'border-2 border-cyan-500' : ''}`}></div>

          {/* Text Content Grid */}
          <div className={`grid grid-cols-1 gap-12 ${DEBUG ? 'border-4 border-orange-500' : ''}`} style={{ gridTemplateColumns: 'calc(38.2% - 24px) calc(61.8% - 24px)' }}>
          {/* Left Column */}
          <div className={DEBUG ? 'border-2 border-red-500' : ''}>
            <p className="font-sans font-bold leading-[160%] text-dark-grey" style={{ fontSize: 'clamp(12px, 1.4vw, 20px)' }}>
              We are a specialised event design and site planning studio dedicated to transforming spaces into unforgettable experiences.
            </p>
          </div>

          {/* Right Column */}
          <div className={`space-y-8 ${DEBUG ? 'border-2 border-red-500' : ''}`}>
            <p className="font-sans font-normal leading-[160%] text-dark-grey" style={{ fontSize: 'clamp(10px, 1.05vw, 15px)' }}>
              At the core of our process is the belief that the best events are built on clear communication and effective collaboration. Before we begin, we take the time to understand who you are, what drives you and the goals you want to achieve.
            </p>

            <p className="font-sans font-normal leading-[160%] text-dark-grey" style={{ fontSize: 'clamp(10px, 1.05vw, 15px)' }}>
              The primary aim is to enable us to deliver tailored solutions that are specific to your needs and enhance your workflow.
            </p>

            <UnderlineLink href="/studio" className="text-blueprint uppercase font-mono text-[14px]">
              MORE ABOUT WEDRAW
            </UnderlineLink>
          </div>
        </div>
        </div>
      </div>

      {/* Studio Section */}
      <div className={`relative pb-[100px] pt-[30px] ${DEBUG ? 'border-4 border-purple-500' : ''}`}>
        <div className={`max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-[60px] ${DEBUG ? 'border-4 border-blue-500' : ''}`}>
          {/* Section Header */}
          <div className={`${DEBUG ? 'border-2 border-green-500' : ''}`}>
            <div className="flex justify-between items-center mb-3">
              {/* Title */}
              <h2 className="font-sans font-extrabold text-meadow" style={{ fontSize: 'clamp(36px, 4vw, 58px)' }}>
                Our expertise
              </h2>
              
              {/* Button */}
              <Button variant="meadow" size="md" href="/studio">
                READ ABOUT OUR STUDIO
              </Button>
            </div>
            
            {/* Green Divider Line */}
            <div className={`h-[2px] bg-meadow mb-12 ${DEBUG ? 'border-2 border-cyan-500' : ''}`}></div>
          </div>

          {/* 2x2 Grid Container */}
          <div className={`grid grid-cols-2 gap-8 ${DEBUG ? 'border-2 border-orange-500' : ''}`}>
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

      {/* Selected Projects Section */}
      <div className={`relative pb-[100px] pt-[30px] ${DEBUG ? 'border-4 border-purple-500' : ''}`}>
        <div className={`max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-[60px] ${DEBUG ? 'border-4 border-blue-500' : ''}`}>
          {/* Section Header */}
          <div className={`${DEBUG ? 'border-2 border-green-500' : ''}`}>
            <div className="flex justify-between items-center mb-3">
              {/* Title */}
              <h2 className="font-sans font-extrabold text-marker" style={{ fontSize: 'clamp(36px, 4vw, 58px)' }}>
                Selected Projects
              </h2>
              
              {/* Button */}
              <Button variant="marker" size="md" href="/work">
                ALL PROJECTS
              </Button>
            </div>
            
            {/* Marker Red Divider Line */}
            <div className={`h-[2px] bg-marker mb-24 ${DEBUG ? 'border-2 border-cyan-500' : ''}`}></div>
          </div>

          {/* Selected Projects Carousel */}
          <div className={`${DEBUG ? 'border-2 border-orange-500' : ''}`}>
            <SelectedProjectsCarousel 
              projects={[riverOfLightMetadata, blenheimMetadata, balloonFiestaMetadata]} 
              debug={DEBUG} 
            />
          </div>
        </div>
      </div>

      {/* Proven in the Field Section */}
      <section className={`relative w-full bg-blueprint h-auto lg:h-[400px] overflow-hidden flex items-center my-[100px] ${DEBUG ? 'border-4 border-purple-500' : ''}`}>
        {/* White Dots Pattern Overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full">
            <div className="w-full h-full" style={{ 
              backgroundImage: 'radial-gradient(circle, white 1.75px, transparent 1.75px)',
              backgroundSize: '30px 30px'
            }} />
          </div>
        </div>

        {/* Content Container */}
        <div className={`relative w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-[60px] py-12 lg:py-0 flex flex-col lg:flex-row gap-12 items-center ${DEBUG ? 'border-4 border-blue-500' : ''}`}>
          {/* Left Side - Text Content */}
          <div className={`lg:w-1/2 text-white ${DEBUG ? 'border-4 border-yellow-500' : ''}`}>
            <h2 className="font-sans font-extrabold mb-6" style={{ fontSize: 'clamp(36px, 4vw, 58px)' }}>
              Proven in the field
            </h2>
            <p className="font-sans leading-relaxed" style={{ fontSize: 'clamp(16px, 1.5vw, 20px)' }}>
              We collaborate with the teams behind major festivals, cultural events and large-scale activations, delivering clarity where it matters most.
            </p>
          </div>

          {/* Right Side - Logo Grid (8 equal containers) */}
          <div className={`lg:w-1/2 ${DEBUG ? 'border-4 border-orange-500' : ''}`}>
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center ${DEBUG ? 'border-4 border-cyan-500' : ''}`}>
              {/* Client Logos */}
              {[
                { logo: LogoREM, alt: 'Richmond Event Management', width: 90 },
                { logo: LogoRiverOfLight, alt: 'River of Light', width: 100 },
                { logo: LogoFarmFest, alt: 'Farm Fest', width: 140 },
                { logo: LogoBristol, alt: 'Bristol Balloon Fiesta', width: 120 },
                { logo: LogoGlastonbury, alt: 'Glastonbury Festival', width: 190 },
                { logo: LogoGameFair, alt: 'The Game Fair', width: 130 },
                { logo: LogoFEI, alt: 'FEI European Championships', width: 130 },
                { logo: LogoEnglishHeritage, alt: 'English Heritage', width: 160 },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-center w-full h-[120px] max-w-[160px] ${DEBUG ? 'border-2 border-pink-500' : ''}`}
                >
                  {item.logo ? (
                    <Image 
                      src={item.logo}
                      alt={item.alt}
                      width={item.width}
                      height={item.width}
                      className="object-contain w-full h-full"
                      style={{ maxWidth: `${item.width}px`, maxHeight: `${item.width}px` }}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journal Highlights Section */}
      <div className={`relative pb-[100px] pt-[100px] ${DEBUG ? 'border-4 border-purple-500' : ''}`}>
        <div className={`max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-[60px] ${DEBUG ? 'border-4 border-blue-500' : ''}`}>
          {/* Section Header */}
          <div className={`${DEBUG ? 'border-2 border-green-500' : ''}`}>
            <div className="flex justify-between items-center mb-3">
              {/* Title */}
              <h2 className="font-sans font-extrabold text-sunny" style={{ fontSize: 'clamp(36px, 4vw, 58px)' }}>
                Journal Highlights
              </h2>
              
              {/* Button */}
              <Button variant="sunny" size="md" href="/journal">
                MORE JOURNAL ARTICLES
              </Button>
            </div>
            
            {/* Sunny Divider Line */}
            <div className={`h-[2px] bg-sunny mb-12 ${DEBUG ? 'border-2 border-cyan-500' : ''}`}></div>
          </div>

          {/* Journal Cards Grid */}
          <div className={`grid gap-16 md:grid-cols-2 lg:grid-cols-3 ${DEBUG ? 'border-2 border-orange-500' : ''}`}>
            <JournalCard 
              article={introducingWedrawMetadata}
              showReadMoreLink={true}
            />
            <JournalCard 
              article={drawingCommunicationMetadata}
              showReadMoreLink={true}
            />
            <JournalCard 
              article={craftingExperiencesMetadata}
              showReadMoreLink={true}
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className={`relative pb-[100px] pt-[100px] ${DEBUG ? 'border-4 border-purple-500' : ''}`}>
        {/* Section Header - Green Container */}
        <div className={`max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-[60px] ${DEBUG ? 'border-4 border-green-500' : ''}`}>
          <h2 className="font-sans font-extrabold text-blueprint mb-12" style={{ fontSize: 'clamp(36px, 4vw, 58px)' }}>
            Testimonials
          </h2>
        </div>

        {/* Testimonials Content - Blue Container */}
        <div className={`relative w-full px-4 sm:px-6 lg:px-[60px] ${DEBUG ? 'border-4 border-blue-500' : ''}`}>
          {/* Blueprint Hatched Pattern Bar - Full width, centered in blue container */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[200px] z-0">
            <HatchedPattern 
              color="var(--color-blueprint)"
              strokeWidth={10} 
              gap={28}
              borderWidth={5}
            />
          </div>
          
          {/* Testimonials Grid - centered in blue container */}
          <div className="relative flex gap-24 justify-center flex-wrap">
            {/* Testimonial Cards - positioned above pattern */}
            <div className="relative z-10">
              <TestimonialCard
                quote="Working with WEDRAW has felt like gaining an extra member of our team. Approachable, reliable, and genuinely invested in our success, they've made the entire process, from site planning to mark out, smoother and more enjoyable."
                name="Ben Hardy"
                company="Richmond Event Management"
              />
            </div>
            <div className="relative z-10">
              <TestimonialCard
                quote="'Insert kind words here!'"
                name="Maddy? Nick? Catherine? Chris? Brita?"
                company="UK"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className={`bg-white mt-32 mb-32 ${DEBUG ? 'border-4 border-purple-500' : ''}`}>
        <CTA 
          magnetType="dots"
          magnetColor="var(--color-blueprint)"
          title="Let's get started"
          buttonText="CONTACT US"
          buttonHref="/contact"
        />
      </section>
    </main>
  )
}

