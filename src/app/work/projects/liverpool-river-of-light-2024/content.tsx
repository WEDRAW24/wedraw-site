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
          <p className="body-lg mb-3">
            We were delighted to provide site design services for the 2024 Liverpool River of Light, a spectacular celebration of creativity and illumination along the city's iconic waterfront. Taking place over 10 nights, this year's event embraced the theme of 'Play,' showcasing 12 large-scale light installations crafted by both local and international artists.
          </p>
          <p className="body-lg mb-20">
            The carefully curated 3km trail transformed Liverpool's waterfront into an open-air gallery, with some installations turning the area into a playful experience while others explored the deeper meanings of play and its impact on individuals, communities, and the city. It was a joy to collaborate on an event that not only celebrates artistic expression but also enriches the cultural fabric of Liverpool, inviting people of all ages to engage with the city in a whole new light.
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
            text="A spectacular celebration of creativity and illumination along the city's iconic waterfront."
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
          <p className="body-lg mb-3">
            We were delighted to provide site design services for the 2024 Liverpool River of Light, a spectacular celebration of creativity and illumination along the city's iconic waterfront. Taking place over 10 nights, this year's event embraced the theme of 'Play,' showcasing 12 large-scale light installations crafted by both local and international artists.
          </p>
          <p className="body-lg">
            The carefully curated 3km trail transformed Liverpool's waterfront into an open-air gallery, with some installations turning the area into a playful experience while others explored the deeper meanings of play and its impact on individuals, communities, and the city. It was a joy to collaborate on an event that not only celebrates artistic expression but also enriches the cultural fabric of Liverpool, inviting people of all ages to engage with the city in a whole new light.
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
          <p className="body-lg mb-3">
            We were delighted to provide site design services for the 2024 Liverpool River of Light, a spectacular celebration of creativity and illumination along the city's iconic waterfront. Taking place over 10 nights, this year's event embraced the theme of 'Play,' showcasing 12 large-scale light installations crafted by both local and international artists.
          </p>
          <p className="body-lg">
            The carefully curated 3km trail transformed Liverpool's waterfront into an open-air gallery, with some installations turning the area into a playful experience while others explored the deeper meanings of play and its impact on individuals, communities, and the city. It was a joy to collaborate on an event that not only celebrates artistic expression but also enriches the cultural fabric of Liverpool, inviting people of all ages to engage with the city in a whole new light.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <GalleryGrid className="my-48 mb-48" images={galleryImages} />

      {/* Fourth body text section with Credits side by side */}
      <div className="grid grid-cols-12 gap-4 mb-20">
        {/* Credits section - full width on mobile, left column on desktop */}
        <div className="col-span-12 px-2 md:px-0 md:col-start-1 md:col-span-3 mb-8 md:mb-0">
          <Credits 
            sections={[
              {
                title: "PROJECT TEAM",
                items: [
                  { role: "Operations", name: "REM" },
                  { role: "Site Management", name: "REM" },
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
          <p className="body-lg mb-3">
            We were delighted to provide site design services for the 2024 Liverpool River of Light, a spectacular celebration of creativity and illumination along the city's iconic waterfront. Taking place over 10 nights, this year's event embraced the theme of 'Play,' showcasing 12 large-scale light installations crafted by both local and international artists.
          </p>
          <p className="body-lg">
            The carefully curated 3km trail transformed Liverpool's waterfront into an open-air gallery, with some installations turning the area into a playful experience while others explored the deeper meanings of play and its impact on individuals, communities, and the city. It was a joy to collaborate on an event that not only celebrates artistic expression but also enriches the cultural fabric of Liverpool, inviting people of all ages to engage with the city in a whole new light.
          </p>
        </div>
      </div>
    </>
  )
} 
