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
                  { name: "India Hodder" },
                  { name: "Libby Law" }
                ]
              }
            ]}
          />
        </div>

        {/* Body text on the right */}
        <div className="col-span-12 px-4 md:px-0 md:col-start-5 md:col-span-8">
          <p className="font-area-normal text-[18px] leading-[180%] mb-3">
            We were thrilled to provide site design services for the 2024 Blenheim Palace International Horse Trials, a prestigious equestrian event set against the stunning backdrop of Blenheim Palace. This world-class competition brings together elite riders and horses from around the globe, showcasing the very best in eventing excellence.
          </p>
          <p className="font-area-normal text-[18px] leading-[180%]">
            Our team worked to ensure the event layout enhanced both the competitive experience and spectator enjoyment, carefully considering the unique requirements of this historic venue while maintaining the highest standards of safety and accessibility for all participants and visitors.
          </p>
        </div>
      </div>
    </>
  )
} 