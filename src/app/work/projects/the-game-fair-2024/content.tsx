'use client'

import Credits from '@/app/components/Credits'
import GalleryGrid from '@/app/components/GalleryGrid'
import PullQuoteSmall from '@/app/components/PullQuoteSmall'
import Image from 'next/image'
import { images } from './images'

// Define gallery grid images with their positions (24-column grid, spaced like Liverpool River of Light)
const galleryImages = [
  {
    image: images.all.aerial2,
    gridPosition: { x: -1, y: -1, width: 14, height: 8 }
  },
  {
    image: images.all.fishing13,
    gridPosition: { x: 15, y: 2, width: 10, height: 10 }
  },
  {
    image: images.all.food7,
    gridPosition: { x: 2, y: 9, width: 10, height: 6 }
  },
  {
    image: images.all.shooting138,
    gridPosition: { x: 1, y: 17, width: 22, height: 8 }
  }
]

export default function ProjectContent() {
  return (
    <>
      {/* First body text section */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 px-2 md:px-0 md:col-start-5 md:col-span-8">
          <p className="body-lg mb-20">
            WEDRAW provided survey, site design and mark out services for The Game Fair 2024 at Blenheim Palace, marking the event's return to this historic Oxfordshire estate. As Europe's largest outdoor countryside festival, the show brings together hundreds of exhibitors across a variety of countryside activities and outdoor pursuits including, fishing, field sports, rural crafts, food and lifestyle. Moving an event of this scale in a short time frame introduces significant complexity, existing site conditions must be evaluated, initial designs need to be developed whilst considering the expectations and familiarity from the previous site layout whilst building on new ideas to create something unique.
          </p>
        </div>
      </div>

      {/* Second body text section with side quote */}
      <div className="grid grid-cols-12 gap-4 mb-20">
        {/* Small pull quote - full width on mobile, side column on desktop */}
        <div className="col-span-12 px-2 md:px-0 md:col-start-1 md:col-span-3 pt-[0.45em] mb-8 md:mb-0">
          <PullQuoteSmall 
            text="The site plan becomes the shared language through which ideas are tested, refined and agreed."
            className="md:sticky md:top-8"
          />
        </div>

        <div className="col-span-12 px-2 md:px-0 md:col-start-5 md:col-span-8">
          <p className="body-lg">
            Relocating a major event is more than just a copy-paste exercise. It requires drawing on the collective expertise of the wider event team, operational knowledge from production, detailed understanding of the estate from the venue, logistical requirements from site management and oversight from the safety team. What has gone before brings insight, but new site conditions bring fresh challenges and give opportunity for improvement and efficiency, every approach must be evaluated in order for good decisions to be made. Clear and effective communication becomes essential, and the site drawings become the shared language through which ideas are tested, refined and agreed. They allow the team to visualise how the event will function long before the first structure is built.
          </p>
        </div>
      </div>

      {/* Full width image section */}
      <section className="relative w-screen -mx-[calc((100vw-100%)/2)] h-[600px] mb-20">
        <Image 
          src={images.all.general58}
          alt="The Game Fair 2024 at Blenheim Palace"
          fill
          className="object-cover object-bottom"
          priority
        />
      </section>

      {/* Third body text section */}
      <div className="grid grid-cols-12 gap-4 mb-20">
        <div className="col-span-12 px-2 md:px-0 md:col-start-5 md:col-span-8">
          <p className="body-lg">
            With hundreds of exhibitors distributed across expansive parkland, the layout needed to create balance across the site. Each area required its own attraction while footfall was carefully managed to avoid congestion or unplanned quiet zones. All while managing the varying requirements of exhibitors from location and plot size to utilities and access. The design evolved through multiple revisions as operational and logistical needs were tested and refined, ensuring the final plan worked not just on paper but on the ground. Our involvement began with a comprehensive site survey and continued through to management and coordination of the drawing set. Once a final design was approved, we translated the design to the ground using GNSS mark out technology, setting out all event infrastructure with absolute precision. This level of accuracy ensured clarity for contractors and exhibitors alike, providing solid foundations from which the build could progress efficiently.
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
                  { role: "Operations", name: "Stable Events" },
                  { role: "Site Management", name: "REM events" },
                  { role: "Site Design", name: "WEDRAW" }
                ]
              },
              {
                title: "PHOTOGRAPHY",
                items: [
                  { name: "Stable Events" }
                ]
              }
            ]}
          />
        </div>

        {/* Body text on the right */}
        <div className="col-span-12 px-2 md:px-0 md:col-start-5 md:col-span-8">
          <p className="body-lg">
            Clarity sits at the centre of what we do. Its value became evident during the live event when an urgent situation arose in event control. Key personnel gathered around a large printed site plan to assess the issue and agree a course of action. With a clear and accurate visual reference in front of them, they were able to communicate effectively, test options and respond decisively. In moments where time is critical, a well-considered site plan is not just useful, it becomes an essential decision-making tool.
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
                { role: "Operations", name: "Stable Events" },
                { role: "Site Management", name: "REM events" },
                { role: "Site Design", name: "WEDRAW" }
              ]
            },
            {
              title: "PHOTOGRAPHY",
              items: [
                { name: "Stable Events" }
              ]
            }
          ]}
        />
      </div>
    </>
  )
} 