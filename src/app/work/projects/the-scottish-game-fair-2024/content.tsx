'use client'

import Credits from '@/app/components/Credits'

export default function ProjectContent() {
  return (
    <>
      {/* First body text section with Credits – credits last on mobile */}
      <div className="grid grid-cols-12 gap-4 mb-20">
        {/* Body text – first on mobile (order-1), right column on desktop */}
        <div className="col-span-12 px-2 md:px-0 md:col-start-5 md:col-span-8 order-1 md:order-none">
          <p className="body-lg mb-3">
            We were honored to provide site design services for The Scottish Game Fair 2024 at the historic Scone Palace. This prestigious event, organized by the Game & Wildlife Conservation Trust, celebrates Scotland's rich heritage in field sports and conservation, bringing together enthusiasts, experts, and families for three days of demonstrations, competitions, and exhibitions.
          </p>
          <p className="body-lg">
            Our team crafted a layout that respected the magnificent setting of Scone Palace while optimizing visitor flow between the various attractions, from the main ring events to the fishing lochs and shooting grounds. The design emphasized both functionality and aesthetics, ensuring that the event's numerous activities and exhibitions were seamlessly integrated into the natural landscape of this iconic Scottish venue.
          </p>
        </div>

        {/* Credits – last on mobile (order-2), left column on desktop */}
        <div className="col-span-12 px-2 md:px-0 md:col-start-1 md:col-span-3 mb-8 md:mb-0 order-2 md:order-none">
          <Credits 
            sections={[
              {
                title: "PROJECT TEAM",
                items: [
                  { role: "Operations", name: "Stable Events" },
                  { role: "Site Management", name: "REM" },
                  { role: "Site Design", name: "WEDRAW" }
                ]
              },
              {
                title: "PHOTOGRAPHY",
                items: [
                  { name: "Eilidh Cameron" }
                ]
              }
            ]}
          />
        </div>
      </div>
    </>
  )
} 