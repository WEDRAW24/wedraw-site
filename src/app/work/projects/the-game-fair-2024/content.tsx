'use client'

import Credits from '@/app/components/Credits'

export default function ProjectContent() {
  return (
    <>
      {/* First body text section with Credits side by side */}
      <div className="grid grid-cols-12 gap-4 mb-20">
        {/* Credits section on the left */}
        <div className="col-start-1 col-span-3 px-4 md:px-0">
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
                  { name: "Stable Events" }
                ]
              }
            ]}
          />
        </div>

        {/* Body text on the right */}
        <div className="col-span-12 px-4 md:px-0 md:col-start-5 md:col-span-8">
          <p className="font-area-normal text-[18px] leading-[180%] mb-3">
            We were proud to provide site design services for The Game Fair 2024 at Blenheim Palace, Europe's largest outdoor countryside festival. This prestigious event brings together the best of country sports, outdoor activities, and rural lifestyle, showcasing everything from shooting and fishing to food, drink, and countryside crafts.
          </p>
          <p className="font-area-normal text-[18px] leading-[180%]">
            Our team worked to create an intuitive and engaging layout that enhanced visitor experience across the extensive grounds of Blenheim Palace. The design carefully considered the flow between different zones and activities, ensuring easy navigation while maintaining the event's traditional charm and prestigious atmosphere.
          </p>
        </div>
      </div>
    </>
  )
} 