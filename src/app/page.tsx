import Image from "next/image";
import Button from "./components/Button";
import UnderlineLink from "./components/UnderlineLink";
import SidebarNav from "./components/SidebarNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <SidebarNav />
      <div className="ml-[68px]">
        <div className="px-8 py-section">
          <div className="mx-auto max-w-[1440px] w-full
                      grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 
                      gap-4 md:gap-5 lg:gap-6">
            {/* Header Section */}
            <div className="col-span-3 md:col-span-6 lg:col-span-8 mb-16">
              <h1 className="text-4xl font-bold mb-2">Style Guide</h1>
              <p className="text-lg text-black/70">A comprehensive view of colors and typography</p>
            </div>

            {/* Colors Section */}
            <section className="col-span-full mb-16">
              <h2 className="text-2xl font-bold mb-6">Color Palette</h2>
              <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-5 lg:gap-6">
                {/* Blueprint Blue */}
                <div className="col-span-3 md:col-span-3 lg:col-span-2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <div className="h-32 bg-blueprint flex items-end p-4">
                      <span className="text-white font-mono text-sm">blueprint: #2242FF</span>
                    </div>
                    <div className="p-4 bg-white">
                      <h3 className="font-semibold">Blueprint Blue</h3>
                      <p className="text-sm text-black/70">Primary brand color</p>
                    </div>
                  </div>
                </div>

                {/* Marker Red */}
                <div className="col-span-3 md:col-span-3 lg:col-span-2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <div className="h-32 bg-marker flex items-end p-4">
                      <span className="text-white font-mono text-sm">marker: #E44E37</span>
                    </div>
                    <div className="p-4 bg-white">
                      <h3 className="font-semibold">Marker Red</h3>
                      <p className="text-sm text-black/70">Secondary brand color</p>
                    </div>
                  </div>
                </div>

                {/* Meadow Green */}
                <div className="col-span-3 md:col-span-3 lg:col-span-2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <div className="h-32 bg-meadow flex items-end p-4">
                      <span className="text-white font-mono text-sm">meadow: #04A573</span>
                    </div>
                    <div className="p-4 bg-white">
                      <h3 className="font-semibold">Meadow Green</h3>
                      <p className="text-sm text-black/70">Secondary brand color</p>
                    </div>
                  </div>
                </div>

                {/* Sunny Orange */}
                <div className="col-span-3 md:col-span-3 lg:col-span-2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <div className="h-32 bg-sunny flex items-end p-4">
                      <span className="text-black font-mono text-sm">sunny: #FFB300</span>
                    </div>
                    <div className="p-4 bg-white">
                      <h3 className="font-semibold">Sunny Orange</h3>
                      <p className="text-sm text-black/70">Secondary brand color</p>
                    </div>
                  </div>
                </div>

                {/* Black */}
                <div className="col-span-3 md:col-span-3 lg:col-span-2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <div className="h-32 bg-black flex items-end p-4">
                      <span className="text-white font-mono text-sm">black: #000014</span>
                    </div>
                    <div className="p-4 bg-white">
                      <h3 className="font-semibold">Black</h3>
                      <p className="text-sm text-black/70">Primary text</p>
                    </div>
                  </div>
                </div>

                {/* White */}
                <div className="col-span-3 md:col-span-3 lg:col-span-2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <div className="h-32 bg-white border flex items-end p-4">
                      <span className="text-black font-mono text-sm">white: #FFFFFF</span>
                    </div>
                    <div className="p-4 bg-white border-x border-b">
                      <h3 className="font-semibold">White</h3>
                      <p className="text-sm text-black/70">Background color</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="col-span-full mb-16">
              <div className="h-1 bg-blueprint"></div>
            </div>

            {/* Typography Section */}
            <section className="col-span-full space-y-6 mb-16">
              <h2 className="text-2xl font-bold">Typography</h2>
              
              <div className="space-y-8 bg-white p-8 rounded-lg border">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-black/70 mb-4">Area Normal Font Weights</h3>
                  <div className="grid gap-y-4">
                    <div className="col-span-full">
                      <p style={{ fontFamily: 'area-normal', fontWeight: 100 }} className="text-[32px]">Area Normal Thin (100)</p>
                    </div>
                    <div className="col-span-full">
                      <p style={{ fontFamily: 'area-normal', fontWeight: 200 }} className="text-[32px]">Area Normal Extrablack (200)</p>
                    </div>
                    <div className="col-span-full">
                      <p style={{ fontFamily: 'area-normal', fontWeight: 400 }} className="text-[32px]">Area Normal Regular (400)</p>
                    </div>
                    <div className="col-span-full">
                      <p style={{ fontFamily: 'area-normal', fontWeight: 500 }} className="text-[32px]">Area Normal Medium (500)</p>
                    </div>
                    <div className="col-span-full">
                      <p style={{ fontFamily: 'area-normal', fontWeight: 600 }} className="text-[32px]">Area Normal Semibold (600)</p>
                    </div>
                    <div className="col-span-full">
                      <p style={{ fontFamily: 'area-normal', fontWeight: 700 }} className="text-[32px]">Area Normal Bold (700)</p>
                    </div>
                    <div className="col-span-full">
                      <p style={{ fontFamily: 'area-normal', fontWeight: 800 }} className="text-[32px]">Area Normal Extrabold (800)</p>
                    </div>
                    <div className="col-span-full">
                      <p style={{ fontFamily: 'area-normal', fontWeight: 900 }} className="text-[32px]">Area Normal Black (900)</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-8 border-t">
                  <h3 className="text-sm font-medium text-black/70 mb-4">Degular Mono Font Weights</h3>
                  <div className="grid gap-y-4">
                    <div className="col-span-full">
                      <p style={{ fontFamily: 'degular-mono', fontWeight: 200 }} className="text-[32px]">Degular Mono Thin (200)</p>
                    </div>
                    <div className="col-span-full">
                      <p style={{ fontFamily: 'degular-mono', fontWeight: 300 }} className="text-[32px]">Degular Mono Light (300)</p>
                    </div>
                    <div className="col-span-full">
                      <p style={{ fontFamily: 'degular-mono', fontWeight: 400 }} className="text-[32px]">Degular Mono Regular (400)</p>
                    </div>
                    <div className="col-span-full">
                      <p style={{ fontFamily: 'degular-mono', fontWeight: 500 }} className="text-[32px]">Degular Mono Medium (500)</p>
                    </div>
                    <div className="col-span-full">
                      <p style={{ fontFamily: 'degular-mono', fontWeight: 600 }} className="text-[32px]">Degular Mono Semibold (600)</p>
                    </div>
                    <div className="col-span-full">
                      <p style={{ fontFamily: 'degular-mono', fontWeight: 700 }} className="text-[32px]">Degular Mono Bold (700)</p>
                    </div>
                    <div className="col-span-full">
                      <p style={{ fontFamily: 'degular-mono', fontWeight: 800 }} className="text-[32px]">Degular Mono Black (800)</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-8 border-t">
                  <h3 className="text-sm font-medium text-black/70 mb-4">Headers</h3>
                  <div className="grid gap-y-8">
                    <div className="col-span-full">
                      <h1 className="text-[72px] font-bold leading-[120%]">Header 1</h1>
                      <p className="text-sm text-black/70 mt-1">72px / Bold / 120% leading</p>
                    </div>
                    <div className="col-span-full">
                      <h2 className="text-[58px] font-bold leading-[120%]">Header 2</h2>
                      <p className="text-sm text-black/70 mt-1">58px / Bold / 120% leading</p>
                    </div>
                    <div className="col-span-full">
                      <h3 className="text-[44px] font-bold leading-[120%]">Header 3</h3>
                      <p className="text-sm text-black/70 mt-1">44px / Bold / 120% leading</p>
                    </div>
                    <div className="col-span-full">
                      <h4 className="text-[36px] font-bold leading-[130%]">Header 4</h4>
                      <p className="text-sm text-black/70 mt-1">36px / Bold / 130% leading</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-8 border-t">
                  <h3 className="text-sm font-medium text-black/70 mb-4">Body Text</h3>
                  <div className="grid gap-y-6">
                    <div className="col-span-full">
                      <p className="text-[24px] font-semibold leading-[140%]">Paragraph Intro</p>
                      <p className="text-sm text-black/70 mt-1">24px / Semibold / 140% leading</p>
                    </div>
                    <div className="col-span-full lg:col-span-8">
                      <p className="text-[16px] font-normal leading-[140%]">
                        Standard paragraph text. This reflects your base typography settings, ensuring consistent readability across the site. 
                        Here's a longer sample to show how the text flows: The quick brown fox jumps over the lazy dog.
                      </p>
                      <p className="text-sm text-black/70 mt-1">16px / Normal / 140% leading</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-8 border-t">
                  <h3 className="text-sm font-medium text-black/70 mb-4">Monospace & UI Text</h3>
                  <div className="grid gap-y-4">
                    <div className="col-span-full">
                      <p className="text-[20px] font-medium uppercase font-mono">Subhead Mono 20</p>
                      <p className="text-sm text-black/70 mt-1">20px / Medium / Uppercase / Mono</p>
                    </div>
                    <div className="col-span-full">
                      <p className="text-[14px] font-medium uppercase font-mono">Subhead Mono 14</p>
                      <p className="text-sm text-black/70 mt-1">14px / Medium / Uppercase / Mono</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Button Examples */}
            <section className="col-span-full space-y-6 mb-16">
              <h2 className="text-2xl font-bold mb-4">Button Variants</h2>
              <div className="flex flex-wrap gap-4">
                <Button variant="blueprint">blueprint</Button>
                <Button variant="marker">marker</Button>
                <Button variant="meadow">meadow</Button>
                <Button variant="sunny">sunny</Button>
                <Button variant="black">black</Button>
              </div>
            </section>

            {/* Underline Link Examples */}
            <section className="col-span-full space-y-6">
              <h2 className="text-2xl font-bold mb-4">Underline Link Variants</h2>
              <div className="flex flex-col gap-4">
                <UnderlineLink href="#" className="text-blueprint">Blueprint Link</UnderlineLink>
                <UnderlineLink href="#" className="text-marker">Marker Link</UnderlineLink>
                <UnderlineLink href="#" className="text-meadow">Meadow Link</UnderlineLink>
                <UnderlineLink href="#" className="text-sunny">Sunny Link</UnderlineLink>
                <UnderlineLink href="#" className="text-black">Black Link</UnderlineLink>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
