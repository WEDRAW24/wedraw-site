import CTA from "../components/CTA";

export default function WorkPage() {
  return (
    <main className="min-h-screen px-12 pb-48 pt-12 max-w-[90vw] mx-auto relative z-0">
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-5 lg:gap-6">
        <div className="col-span-full flex items-end gap-8 mb-16">
          <h1 className="text-[85px] font-bold leading-[120%] text-marker -mb-2">Work</h1>
          <p className="text-marker text-[24px] font-bold leading-[100%] tracking-[0%] mb-1">
            LIVERPOOL RIVER OF LIGHT<br />
            BRISTOL INTERNATIONAL BALLOON FIESTA<br />
            THE GAME SHOW
          </p>
        </div>

        {/* Project grid section */}
        <div className="col-span-full relative mb-16 w-full">
          <div className="w-full pb-[66.666%] relative">
            <div className="absolute inset-0">
              {/* Vertical lines */}
              <div className="absolute inset-0">
                {Array(13).fill(null).map((_, i) => (
                  <div key={i} className="absolute h-full" style={{ left: `${(i / 12) * 100}%` }}>
                    <div className="absolute h-full w-[1px] bg-marker opacity-30" />
                  </div>
                ))}
              </div>
              {/* Horizontal lines */}
              <div className="absolute inset-0">
                {Array(9).fill(null).map((_, i) => (
                  <div key={i} className="absolute w-full" style={{ top: `${(i / 8) * 100}%` }}>
                    <div className="absolute w-full h-[1px] bg-marker opacity-30" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Project cards will be placed here later */}
        </div>

        <div className="col-span-full mt-32">
          <CTA
            magnetType="lines"
            magnetColor="var(--color-marker)"
            title="Let's get started"
            buttonText="GET IN TOUCH"
            buttonHref="/contact"
          />
        </div>
      </div>
    </main>
  );
}
