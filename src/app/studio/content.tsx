'use client'

import Image from 'next/image'
import Button from '@/app/components/Button'
import HatchedPattern from '@/app/components/HatchedPattern'
import CTA from '@/app/components/CTA'
import { images } from './images'

export default function StudioContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Left Hero Image */}
        <div className="absolute left-0 top-0 w-1/2 h-screen">
          <Image 
            src={images.heroLeft}
            alt="WEDRAW Studio showcase"
            fill
            className="object-cover object-center"
            priority
            unoptimized={true}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        
        {/* Green Background Block - Using 6 columns (half of our 12-column grid) */}
        {/* Main green background */}
        <div className="absolute right-0 top-0 h-[calc(100vh-300px)] bg-meadow col-span-6 w-1/2" />
        
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
                  size="sm"
                  className="mb-6"
                >
                  BRISTOL BALLOON FIESTA
                </Button>
                <h1 className="text-[85px] font-area-black leading-[120%] text-white">
                  WE ELEVATE<br/>
                  EVENTS
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative min-h-screen pt-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-4">
            {/* Title */}
            <div className="col-span-12 pt-16">
              <h2 className="text-[58px] font-area-extrabold text-meadow border-b-2 border-meadow pb-2 mb-24">
                About us
              </h2>
            </div>

            {/* Content Grid */}
            <div className="col-span-12 grid grid-cols-12 gap-8">
              {/* Image */}
              <div className="col-span-5">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/studio/team-member.jpg"
                    alt="WEDRAW team member"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="col-span-7">
                <h3 className="text-[24px] font-area-normal mb-8">
                  We believe that great events<br />
                  begin with great design.
                </h3>

                <div className="space-y-6 text-[18px] leading-[180%]">
                  <p>
                    With a balance of creative vision and technical expertise we create environments that not only function seamlessly but inspire and engage. Collaboration and communication are at the core of everything we do. Working closely with event organisers and production teams, we ensure that every detail is considered and each requirement met. We recognise that each event is unique which is why we tailor our approach from the initial concept to the final layout, delivering solutions that work for everyone.
                  </p>
                </div>

                <Button 
                  variant="meadow"
                  size="sm"
                  className="mt-12"
                >
                  ORGANIZE A MEETING
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="relative min-h-screen pt-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-4">
            {/* Title */}
            <div className="col-span-12 pt-16">
              <h2 className="text-[58px] font-area-extrabold text-meadow border-b-2 border-meadow pb-2 mb-24">
                Our expertise
              </h2>
            </div>

            {/* Content Grid */}
            <div className="col-span-12 grid grid-cols-12 gap-8">
              {/* Content will go here */}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="relative min-h-screen pt-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-4">
            {/* Title */}
            <div className="col-span-12 pt-16">
              <h2 className="text-[58px] font-area-extrabold text-meadow border-b-2 border-meadow pb-2 mb-12">
                Our mission
              </h2>
            </div>

            {/* Content Grid */}
            <div className="col-span-12 grid grid-cols-12 gap-4">
              {/* Arrow Icon */}
              <div className="col-span-1 text-meadow">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4L44 24L24 44" stroke="currentColor" strokeWidth="2"/>
                  <path d="M44 24H4" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>

              {/* Main Text */}
              <div className="col-start-5 col-span-9">
                <h3 className="text-[52px] font-area-bold leading-[120%] mb-16">
                  Transforming spaces into unforgettable experiences through creative ambition and technical precision. We collaborate closely, communicate clearly and map out what matters.
                </h3>

                <div className="grid grid-cols-2 gap-16 border-t-2 border-meadow pt-8">
                  <div>
                    <h4 className="text-[24px] font-area-normal mb-4">
                      We believe that great events<br />begin with great design.
                    </h4>
                  </div>
                  <div>
                    <p className="text-[15px] leading-[180%]">
                      With a balance of creative vision and technical expertise we create environments that not only function seamlessly but inspire and engage. Collaboration and communication are at the core of everything we do. Working closely with event organisers and production teams, we ensure that every detail is considered and each requirement met.
                    </p>
                    <p className="text-[15px] leading-[180%] mt-6">
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
      <section className="relative min-h-screen pt-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-4">
            {/* Title */}
            <div className="col-span-12 pt-16">
              <h2 className="text-[58px] font-area-extrabold text-meadow border-b-2 border-meadow pb-2 mb-12">
                Our values
              </h2>
            </div>

            {/* Content Grid */}
            <div className="col-span-12">
              <div className="grid grid-cols-3 gap-16">
                {/* Clarity First */}
                <div className="flex flex-col">
                  <div className="h-[120px] flex items-center">
                    <Image 
                    src={images.icons.eye}
                    alt="Eye icon representing clarity"
                    width={120}
                    height={120}
                    className="mb-4"
                  />
                  </div>
                  <h3 className="text-[30px] font-area-bold mb-0 h-[64px] flex items-center">Clarity first</h3>
                  <p className="text-[15px] leading-[180%]">
                    We transform complex ideas into precise, easy-to-understand visual plans. Every design choice enhances comprehension and usability.
                  </p>
                </div>

                {/* Creative at Heart */}
                <div className="flex flex-col">
                  <div className="h-[120px] flex items-center">
                    <Image 
                    src={images.icons.heart}
                    alt="Heart icon representing creativity"
                    width={100}
                    height={100}
                    className="mb-6"
                  />
                  </div>
                  <h3 className="text-[30px] font-area-bold mb-0 h-[64px] flex items-center">Creative at heart</h3>
                  <p className="text-[15px] leading-[180%]">
                    We are driven by the joy of shaping novel and inspiring event experiences. We take ambitious ideas and ground them in careful, calculated design, ensuring every plan is both visionary and flawlessly executed in the real world.
                  </p>
                </div>

                {/* Precise by Nature */}
                <div className="flex flex-col">
                  <div className="h-[120px] flex items-center">
                    <Image 
                    src={images.icons.target}
                    alt="Target icon representing precision"
                    width={100}
                    height={100}
                    className="mb-6"
                  />
                  </div>
                  <h3 className="text-[30px] font-area-bold mb-0 h-[64px] flex items-center">Precise by nature</h3>
                  <p className="text-[15px] leading-[180%]">
                    We push creative boundaries while ensuring that every plan is grounded in careful, real-world execution. Our site plans are rigorously detailed, leveraging the latest technology to enhance ease-of-use and accuracy.
                  </p>
                </div>

                {/* Adaptable and Responsive */}
                <div className="flex flex-col">
                  <div className="h-[120px] flex items-center">
                    <Image 
                    src={images.icons.adaptable}
                    alt="Adaptable icon"
                    width={110}
                    height={110}
                    className="mb-6"
                  />
                  </div>
                  <h3 className="text-[30px] font-area-bold mb-0 h-[64px] flex items-center">Adaptable and responsive</h3>
                  <p className="text-[15px] leading-[180%]">
                    We thrive in the ever-changing landscape of event planning, acting as a calming presence that quickly adapts to new challenges and evolving needs without compromising clarity or execution.
                  </p>
                </div>

                {/* Facilitating Collaboration */}
                <div className="flex flex-col">
                  <div className="h-[120px] flex items-center">
                    <Image 
                    src={images.icons.collaboration}
                    alt="Collaboration icon"
                    width={100}
                    height={100}
                    className="mb-6"
                  />
                  </div>
                  <h3 className="text-[30px] font-area-bold mb-0 h-[64px] flex items-center">Facilitating collaboration</h3>
                  <p className="text-[15px] leading-[180%]">
                    As a central point of connection in event planning, we are the main touchpoint to various stakeholder teams, offering insights that inspire and refine creative visions.
                  </p>
                </div>

                {/* Innovative Approach */}
                <div className="flex flex-col">
                  <div className="h-[120px] flex items-center">
                    <Image 
                    src={images.icons.lightbulb}
                    alt="Lightbulb icon representing innovation"
                    width={70}
                    height={70}
                    className="mb-6"
                  />
                  </div>
                  <h3 className="text-[30px] font-area-bold mb-0 h-[64px] flex items-center">Innovative approach</h3>
                  <p className="text-[15px] leading-[180%]">
                    We're at the forefront of industry trends, continuously refining our methodologies and embracing new technologies to set higher standards in event design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white mb-32">
        <CTA 
          magnetType="cross"
          magnetColor="var(--color-meadow)"
          title="Let's get Started"
          buttonText="GET IN TOUCH"
          buttonHref="/contact"
          className="py-20"
        />
      </section>
    </>
  )
}