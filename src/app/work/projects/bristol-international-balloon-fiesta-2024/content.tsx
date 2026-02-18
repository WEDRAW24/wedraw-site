'use client'

import Credits from '@/app/components/Credits'
import GalleryGrid from '@/app/components/GalleryGrid'
import PullQuoteLarge from '@/app/components/PullQuoteLarge'
import PullQuoteSmall from '@/app/components/PullQuoteSmall'
import { images } from './images'

// Gallery grid – asymmetric layout with overhang and visible grid (24-column grid)
const galleryImages = [
  { image: images.all.pb9901, gridPosition: { x: 1, y: -1, width: 10, height: 8 } },
  { image: images.all.fiesta75, gridPosition: { x: 13, y: 1, width: 10, height: 9 } },
  { image: images.all.pb8377, gridPosition: { x: 11, y: 12, width: 14, height: 11 } },
  { image: images.all.pb9858, gridPosition: { x: -1, y: 10, width: 10, height: 15 } }
]

export default function ProjectContent() {
  return (
    <>
      {/* First body text section */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 px-2 md:px-0 md:col-start-5 md:col-span-8">
          <p className="body-lg mb-20">
            We were proud to provide site survey, design and mark out services for the 2024 Bristol International Balloon Fiesta at Ashton Court Estate. As Europe's largest annual gathering of hot air balloons, the Fiesta draws hundreds of thousands of visitors to witness mass ascents and nightglows set against Bristol's skyline. Approaching its 50th year, the event stands as a testament to the city's enduring relationship with ballooning, and as a Bristol-based studio, supporting it is something we care deeply about.
          </p>
        </div>
      </div>

      <PullQuoteLarge 
        text="Few events bring a city together quite like the Balloon Fiesta. Thousands gather beneath a sky filled with colour, united by a heritage that runs deep in Bristol. It is a celebration of community, history and a tradition the city continues to be proud of."
        className="mb-20"
      />

      {/* Second body text section with side quote */}
      <div className="grid grid-cols-12 gap-4 mb-20">
        {/* Small pull quote - full width on mobile, side column on desktop */}
        <div className="col-span-12 px-2 md:px-0 md:col-start-1 md:col-span-3 pt-[0.45em] mb-8 md:mb-0">
          <PullQuoteSmall 
            text="Our Co-Founder Theo helping cold inflate a balloon in Switzerland"
            className="md:sticky md:top-8"
            image={{
              src: images.all.dscf1448,
              alt: "Our Co-Founder Theo helping cold inflate a balloon in Switzerland",
              objectPosition: "center",
              scale: 1
            }}
          />
        </div>

        <div className="col-span-12 px-2 md:px-0 md:col-start-5 md:col-span-8">
          <p className="body-lg">
            Bristol has a rich history in ballooning and is home to Cameron Balloons, one of the world's leading manufacturers, whose innovation and craftsmanship have supported record-breaking flights and world-first achievements. Anyone fortunate enough to have flown in a hot air balloon will understand the quiet magic of the experience, the stillness, perspective and sense of freedom that is unlike anything else. To see that spirit celebrated annually on this scale is something we are incredibly proud of, and something we believe everyone in Bristol should be too.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <GalleryGrid className="my-48 mb-48" images={galleryImages} />

      {/* Third body text section with Credits side by side */}
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
                  { name: "George Blagdon" },
                  { name: "Paul Box" },
                  { name: "Inaz Hussein" },
                  { name: "Colin Rayner" }
                ]
              }
            ]}
          />
        </div>

        {/* Body text on the right */}
        <div className="col-span-12 px-2 md:px-0 md:col-start-5 md:col-span-8">
          <p className="body-lg mb-12">
            The Balloon Fiesta is delivered by people whose dedication, passion and work ethic we see on a daily basis. As a free-to-attend event of this size, it requires extraordinary coordination and commitment behind the scenes. The scale of infrastructure, safety planning and operational management involved is significant, yet the experience remains open, welcoming and accessible to all. It is inspiring to work alongside a team so invested in protecting the heritage of the event while ensuring it continues to thrive.
          </p>
          <p className="body-lg">
            Our role was to support that vision through clear site planning process. Managing launch fields, spectator areas, trading zones and emergency access within the historic landscape of Ashton Court requires careful coordination. Through detailed survey work and accurate mark out, we helped create a framework that allowed pilots, crew and visitors alike to focus on what makes the Fiesta so special. We are proud to contribute to an event that celebrates our city’s heritage and brings Bristol together beneath a sky filled with colour.
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
                { name: "George Blagdon" },
                { name: "Paul Box" },
                { name: "Inaz Hussein" },
                { name: "Colin Rayner" }
              ]
            }
          ]}
        />
      </div>
    </>
  )
} 