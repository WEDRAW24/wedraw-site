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
                  { role: "Operations", name: "REM" },
                  { role: "Site Management", name: "REM" },
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
        <div className="col-span-12 px-4 md:px-0 md:col-start-5 md:col-span-8">
          <p className="font-area-normal text-[18px] leading-[180%] mb-3">
            We were delighted to provide site design services for the 2024 Bristol International Balloon Fiesta at Ashton Court Estate. This iconic event, which has become Europe's largest annual meeting of hot air balloons, draws hundreds of thousands of visitors to witness the spectacular mass ascents and nightglows against Bristol's historic skyline.
          </p>
          <p className="font-area-normal text-[18px] leading-[180%]">
            Our team worked to optimize the site layout to enhance both the visitor experience and operational efficiency. The design carefully balanced the needs of balloon operators, food vendors, and entertainment areas while ensuring smooth crowd flow and maintaining clear sight lines for the event's stunning aerial displays.
          </p>
        </div>
      </div>
    </>
  )
} 