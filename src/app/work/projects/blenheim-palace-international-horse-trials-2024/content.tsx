'use client'

import Credits from '@/app/components/Credits'
import GalleryGrid from '@/app/components/GalleryGrid'
import PullQuoteSmall from '@/app/components/PullQuoteSmall'
import { images } from './images'

// Gallery grid – asymmetric layout with overhang and visible grid (like Liverpool River of Light)
const galleryImages = [
  { image: images.all.rh2258, gridPosition: { x: 1, y: -1, width: 10, height: 8 } },
  { image: images.all.rh3992, gridPosition: { x: 15, y: 1, width: 10, height: 10 } },
  { image: images.all.collett, gridPosition: { x: -1, y: 10, width: 13, height: 9 } },
  { image: images.all.parryAshcroft, gridPosition: { x: 14, y: 15, width: 9, height: 10 } }
]

export default function ProjectContent() {
  return (
    <>
      {/* First body text section */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 px-2 md:px-0 md:col-start-5 md:col-span-8">
          <p className="body-lg mb-20">
            Few venues carry the weight of expectation quite like Blenheim Palace. Hosting an international equestrian competition within a UNESCO World Heritage landscape demands precision and respect for both sport and setting. The Blenheim Palace International Horse Trials is not just an event, it is a fixture with history, reputation and responsibility attached to it.
          </p>
        </div>
      </div>

      {/* Second body text section with side quote */}
      <div className="grid grid-cols-12 gap-4 mb-20">
        <div className="col-span-12 px-2 md:px-0 md:col-start-1 md:col-span-3 pt-[0.45em] mb-8 md:mb-0">
          <PullQuoteSmall 
            text="When an event carries decades of history, every design decision must respect what came before while enabling what comes next."
            className="md:sticky md:top-8"
          />
        </div>

        <div className="col-span-12 px-2 md:px-0 md:col-start-5 md:col-span-8">
          <p className="body-lg">
            As the event enters a new phase of commercial direction, careful planning becomes essential. Growth in hospitality, sponsor presence and visitor facilities must sit alongside the integrity of elite competition. Every spatial decision influences sightlines, course access, ground conditions and the rhythm of the sporting programme. The site must evolve, but it must do so without losing the character that has defined it for decades.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <GalleryGrid className="my-48 mb-48" images={galleryImages} />

      {/* Third body text section with Credits – credits above/first on mobile, left column on desktop */}
      <div className="grid grid-cols-12 gap-4 mb-20">
        {/* Credits – above/first on mobile (order-1), left column on desktop */}
        <div className="col-span-12 px-2 md:px-0 md:col-start-1 md:col-span-3 mb-8 md:mb-0 order-1 md:order-none">
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
                  { name: "India Hodder" },
                  { name: "Libby Law" }
                ]
              }
            ]}
          />
        </div>

        {/* Third + fourth body text – below credits on mobile (order-2), right column on desktop */}
        <div className="col-span-12 px-2 md:px-0 md:col-start-5 md:col-span-8 order-2 md:order-none">
          <p className="body-lg mb-12">
            Working alongside individuals who have shaped the event for over twenty years brought invaluable insight to the planning process. Their deep understanding of ground conditions, crowd patterns, sporting sequencing and course history informed every revision. That depth of experience ensured that change was considered, deliberate and grounded in understanding rather than assumption.
          </p>
          <p className="body-lg">
            Our involvement spanned site survey, design coordination and full GNSS mark out. From mapping existing constraints across the estate to setting out arenas, cross-country routes, trade stands and hospitality structures, we translated complex designs into a clear on-the-ground instruction. At a time of transition, an event with such a rich history demands a deliberate design approach that respects its heritage while supporting its future ambitions, made possible by collective experience, clear communication and careful planning.
          </p>
        </div>
      </div>
    </>
  )
} 