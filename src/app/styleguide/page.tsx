import Button from "../components/Button";
import UnderlineLink from "../components/UnderlineLink";
import SidebarNav from "../components/SidebarNav";

// ... other imports ...

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <SidebarNav />
      <div className="ml-[68px]">
        <div className="px-8 py-section">
          <div className="mx-auto max-w-[1440px] w-full
                      grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 
                      gap-4 md:gap-5 lg:gap-6">
            {/* ... existing sections ... */}

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