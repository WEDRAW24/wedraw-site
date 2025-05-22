import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black py-section">
      <div className="container max-w-6xl mx-auto space-y-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Style Guide</h1>
          <p className="text-lg text-black/70">A comprehensive view of colors and typography</p>
        </div>

        {/* Colors Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Color Palette</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="h-32 bg-blueprint flex items-end p-4">
                <span className="text-white font-mono text-sm">blueprint: #2242FF</span>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold">Blueprint Blue</h3>
                <p className="text-sm text-black/70">Primary brand color</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="h-32 bg-marker flex items-end p-4">
                <span className="text-white font-mono text-sm">marker: #E44E37</span>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold">Marker Red</h3>
                <p className="text-sm text-black/70">Accent color</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="h-32 bg-meadow flex items-end p-4">
                <span className="text-white font-mono text-sm">meadow: #04A573</span>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold">Meadow Green</h3>
                <p className="text-sm text-black/70">Success states</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="h-32 bg-sunny flex items-end p-4">
                <span className="text-black font-mono text-sm">sunny: #FFB300</span>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold">Sunny Orange</h3>
                <p className="text-sm text-black/70">Warning states</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="h-32 bg-black flex items-end p-4">
                <span className="text-white font-mono text-sm">black: #000014</span>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold">Black</h3>
                <p className="text-sm text-black/70">Primary text</p>
              </div>
            </div>

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
        </section>

        {/* Typography Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Typography</h2>
          
          <div className="space-y-8 bg-white p-8 rounded-lg border">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-black/70 mb-4">Headers</h3>
              <div className="space-y-4">
                <div>
                  <h1 className="text-[72px] font-bold leading-[120%]">Header 1</h1>
                  <p className="text-sm text-black/70 mt-1">72px / Bold / 120% leading</p>
                </div>
                <div>
                  <h2 className="text-[58px] font-bold leading-[120%]">Header 2</h2>
                  <p className="text-sm text-black/70 mt-1">58px / Bold / 120% leading</p>
                </div>
                <div>
                  <h3 className="text-[44px] font-bold leading-[120%]">Header 3</h3>
                  <p className="text-sm text-black/70 mt-1">44px / Bold / 120% leading</p>
                </div>
                <div>
                  <h4 className="text-[36px] font-bold leading-[130%]">Header 4</h4>
                  <p className="text-sm text-black/70 mt-1">36px / Bold / 130% leading</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t">
              <h3 className="text-sm font-medium text-black/70 mb-4">Body Text</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-[24px] font-semibold leading-[140%]">Paragraph Intro</p>
                  <p className="text-sm text-black/70 mt-1">24px / Semibold / 140% leading</p>
                </div>
                <div>
                  <p className="text-[16px] font-normal leading-[140%] max-w-2xl">
                    Standard paragraph text. This reflects your base typography settings, ensuring consistent readability across the site. 
                    Here's a longer sample to show how the text flows: The quick brown fox jumps over the lazy dog.
                  </p>
                  <p className="text-sm text-black/70 mt-1">16px / Normal / 140% leading</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t">
              <h3 className="text-sm font-medium text-black/70 mb-4">Monospace & UI Text</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[20px] font-medium uppercase font-mono">Subhead Mono 20</p>
                  <p className="text-sm text-black/70 mt-1">20px / Medium / Uppercase / Mono</p>
                </div>
                <div>
                  <p className="text-[14px] font-medium uppercase font-mono">Subhead Mono 14</p>
                  <p className="text-sm text-black/70 mt-1">14px / Medium / Uppercase / Mono</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Button Examples */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <button className="text-[16px] uppercase font-normal border-2 border-blueprint px-6 py-3 hover:bg-blueprint hover:text-white transition-colors duration-200">
              Primary Button
            </button>
            <button className="text-[16px] uppercase font-normal bg-blueprint text-white px-6 py-3 hover:bg-blueprint/90 transition-colors duration-200">
              Secondary Button
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
