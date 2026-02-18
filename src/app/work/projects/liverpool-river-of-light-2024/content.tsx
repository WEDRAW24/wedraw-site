'use client'

import PullQuoteLarge from '@/app/components/PullQuoteLarge'
import PullQuoteSmall from '@/app/components/PullQuoteSmall'
import GalleryGrid from '@/app/components/GalleryGrid'
import Credits from '@/app/components/Credits'
import Image from 'next/image'
import { images } from './images'

// Define gallery grid images with their positions
const galleryImages = [
  {
    image: images.gallery.droneChess,
    gridPosition: {
      x: 1,
      y: -1,
      width: 10,
      height: 8
    }
  },
  {
    image: images.gallery.rolCopy,
    gridPosition: {
      x: 15,
      y: 1,
      width: 10,
      height: 10
    }
  },
  {
    image: images.gallery.shot7,
    gridPosition: {
      x: -1,
      y: 10,
      width: 14,
      height: 8
    }
  },
  {
    image: images.gallery.waterfront,
    gridPosition: {
      x: 14,
      y: 17,
      width: 10,
      height: 8
    }
  }
]

export default function ProjectContent() {
  return (
    <>
      {/* First body text section */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 px-2 md:px-0 md:col-start-5 md:col-span-8">
          <p className="body-lg mb-20">
            We were proud to deliver site design services for the 2024 Liverpool River of Light, a ten-night celebration of art and illumination set across the city's iconic waterfront. With 12 large-scale installations positioned along a 3km public trail, the event transformed Liverpool's waterfront into an open-air gallery, welcoming thousands of visitors into the city centre each evening.
          </p>
        </div>
      </div>

      <PullQuoteLarge 
        text="A spectacular celebration of creativity and illumination along Liverpool's iconic waterfront, inviting people of all ages to engage with the city in a whole new light."
        className="mb-20"
      />

      {/* Second body text section with side quote */}
      <div className="grid grid-cols-12 gap-4 mb-20">
        {/* Small pull quote - full width on mobile, side column on desktop */}
        <div className="col-span-12 px-2 md:px-0 md:col-start-1 md:col-span-3 pt-[0.45em] mb-8 md:mb-0">
          <PullQuoteSmall 
            text="Featuring installations by artists from across the globe."
            className="md:sticky md:top-8"
            image={{
              src: images.gallery.dronePositiveSpin,
              alt: "Positive Spin light installation at Liverpool River of Light",
              objectPosition: "center 30%",
              scale: 1.9
            }}
          />
        </div>

        <div className="col-span-12 px-2 md:px-0 md:col-start-5 md:col-span-8">
          <p className="body-lg">
            Our role was to translate creative ambition into clear, coordinated site plans that could be delivered safely and efficiently. Each installation brought its own technical requirements, from power distribution and access routes to sightlines and audience interaction. Working closely with the production team, artists and stakeholders, we positioned every element to achieve maximum impact while ensuring it functioned seamlessly within a live public space.
          </p>
        </div>
      </div>

      {/* Full width image section */}
      <section className="relative w-screen -mx-[calc((100vw-100%)/2)] h-[600px] mb-20">
        <Image 
          src={images.gallery.shot6}
          alt="Liverpool River of Light installation featuring illuminated arches with cyclists"
          fill
          className="object-cover object-[center_90%]"
          priority
        />
      </section>

      {/* Third body text section */}
      <div className="grid grid-cols-12 gap-4 mb-20">
        <div className="col-span-12 px-2 md:px-0 md:col-start-5 md:col-span-8">
          <p className="body-lg">
            The waterfront setting introduced further complexity. Narrow walkways, bridges, access limitations and existing street furniture coupled with significant pedestrian flow required careful consideration. Through detailed drawing packages and structured planning, we addressed crowd movement, emergency access, accessibility and back-of-house logistics long before arriving on site allowing the build to progress smoothly and ensuring a seamless experience for visitors.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <GalleryGrid className="my-48 mb-48" images={galleryImages} />

      {/* Fourth body text section with Credits side by side */}
      <div className="grid grid-cols-12 gap-4 mb-20">
        {/* Credits – desktop only (left column); mobile version rendered at end of article */}
        <div className="hidden md:block col-span-12 md:col-start-1 md:col-span-3">
          <Credits 
            sections={[
              {
                title: "PROJECT TEAM",
                items: [
                  { role: "Operations", name: "REM events" },
                  { role: "Site Management", name: "REM events" },
                  { role: "Site Design", name: "WEDRAW" }
                ]
              },
              {
                title: "PHOTOGRAPHY",
                items: [
                  { name: "Liverpool City Council" }
                ]
              }
            ]}
          />
        </div>

        {/* Body text on the right */}
        <div className="col-span-12 px-2 md:px-0 md:col-start-5 md:col-span-8">
          <p className="body-lg">
            Working alongside the local council, what stood out most was the shared drive to improve and build upon what had gone before. There is real pride in creating an event that reflects the city at its best, and a determination to raise the standard each year. Seeing thousands of people gather purely to experience free public art is a powerful reminder of the value these events bring, strengthening community connection while generating meaningful footfall for local businesses. It is a privilege to contribute to events that not only illuminate a city but energise it.
          </p>
        </div>
      </div>

      {/* Credits – mobile only, always last in article */}
      <div className="md:hidden px-2 mb-20">
        <Credits 
          sections={[
            {
              title: "PROJECT TEAM",
              items: [
                { role: "Operations", name: "REM events" },
                { role: "Site Management", name: "REM events" },
                { role: "Site Design", name: "WEDRAW" }
              ]
            },
            {
              title: "PHOTOGRAPHY",
              items: [
                { name: "Liverpool City Council" }
              ]
            }
          ]}
        />
      </div>
    </>
  )
} 
