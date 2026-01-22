'use client'

import Credits from '@/app/components/Credits'

export default function ProjectContent() {
  return (
    <>
      {/* First body text section with Credits side by side */}
      <div className="grid grid-cols-12 gap-4 mb-20">
        {/* Credits section - full width on mobile, left column on desktop */}
        <div className="col-span-12 px-4 md:px-0 md:col-start-1 md:col-span-3 mb-8 md:mb-0">
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

        {/* Body text on the right */}
        <div className="col-span-12 px-4 md:px-0 md:col-start-5 md:col-span-8">
          <p className="body-lg mb-3">
            We were honored to provide site design services for The Scottish Game Fair 2024 at the historic Scone Palace. This prestigious event, organized by the Game & Wildlife Conservation Trust, celebrates Scotland's rich heritage in field sports and conservation, bringing together enthusiasts, experts, and families for three days of demonstrations, competitions, and exhibitions.
          </p>
          <p className="body-lg">
            Our team crafted a layout that respected the magnificent setting of Scone Palace while optimizing visitor flow between the various attractions, from the main ring events to the fishing lochs and shooting grounds. The design emphasized both functionality and aesthetics, ensuring that the event's numerous activities and exhibitions were seamlessly integrated into the natural landscape of this iconic Scottish venue.
          </p>
        </div>
      </div>
    </>
  )
} 