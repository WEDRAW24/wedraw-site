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
                  { role: "Site Management", name: "Tim Yarrow" },
                  { role: "Site Design", name: "WEDRAW" }
                ]
              },
              {
                title: "PHOTOGRAPHY",
                items: [
                  { name: "Matt Kidd" }
                ]
              }
            ]}
          />
        </div>

        {/* Body text on the right */}
        <div className="col-span-12 px-4 md:px-0 md:col-start-5 md:col-span-8">
          <p className="font-area-normal text-[18px] leading-[180%] mb-3">
            We were excited to provide site design services for the 2024 National Shooting Show at the Yorkshire Event Centre. This premier event brings together enthusiasts, professionals, and industry leaders from across the shooting sports community, showcasing the latest equipment, accessories, and innovations in the field.
          </p>
          <p className="font-area-normal text-[18px] leading-[180%]">
            Our team developed a comprehensive layout that maximized the exhibition space while ensuring smooth traffic flow between stands and demonstration areas. The design focused on creating an engaging environment that facilitated meaningful interactions between exhibitors and visitors, while maintaining the highest standards of safety and accessibility throughout the venue.
          </p>
        </div>
      </div>
    </>
  )
} 