'use client'

import Credits from '@/app/components/Credits'

export default function ProjectContent() {
  return (
    <>
      {/* First body text section */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 px-2 md:px-0 md:col-start-5 md:col-span-8">
          <p className="body-lg mb-20">
            In 2025, Stonehenge once again became the focal point for the Summer and Winter Solstice, as English Heritage welcomed thousands to mark the turning of the seasons at one of Britain's most significant ancient monuments. Approximately 25,000 people gathered for the summer sunrise, while thousands more returned in December, continuing a tradition of seasonal observance that spans more than four millennia.
          </p>
        </div>
      </div>

      {/* Second body text section */}
      <div className="grid grid-cols-12 gap-4 mb-20">
        <div className="col-span-12 px-2 md:px-0 md:col-start-5 md:col-span-8">
          <p className="body-lg">
            Stonehenge is widely regarded as one of the earliest known ceremonial gathering sites in Britain. Its precise alignment with the solstices reflects the ingenuity of its builders and their deep connection to the rhythms of the natural world. Supporting an event rooted in such historic significance carries both honour and responsibility.
          </p>
        </div>
      </div>

      {/* Third body text section with Credits – credits last on mobile */}
      <div className="grid grid-cols-12 gap-4 mb-20">
        {/* Body text – right column on desktop */}
        <div className="col-span-12 px-2 md:px-0 md:col-start-5 md:col-span-8">
          <p className="body-lg">
            Working on an English Heritage site demands careful balance between operational delivery and long-term conservation. Managing traffic, visitor movement and temporary infrastructure within a World Heritage landscape calls for clear coordination and disciplined planning. At Stonehenge, that approach supports safe access today while protecting a monument that has stood for over four thousand years.
          </p>
        </div>

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
                  { name: "TBC" }
                ]
              }
            ]}
          />
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
                { name: "TBC" }
              ]
            }
          ]}
        />
      </div>
    </>
  )
}
