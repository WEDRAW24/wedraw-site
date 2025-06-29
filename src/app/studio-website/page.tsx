import CTA from '../components/CTA'

export default function StudioPage() {
  return (
    <main className="min-h-screen px-12 pb-48 pt-12 max-w-[90vw] mx-auto relative z-0">
      {/* Hero Section */}
      <div className="flex items-end gap-8 mb-16">
        <h1 className="text-[85px] font-bold leading-[120%] text-blueprint -mb-2">Studio</h1>
        <p className="text-blueprint text-[24px] font-bold leading-[100%] tracking-[0%] mb-1">
          Design-led development and creative technology
        </p>
      </div>

      {/* Expertise Section */}
      <section className="mb-32">
        <h2 className="text-[48px] font-bold mb-8">Expertise</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Add your expertise cards/content here */}
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-32">
        <h2 className="text-[48px] font-bold mb-8">Values</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Add your values content here */}
        </div>
      </section>

      {/* About Us Section */}
      <section className="mb-32">
        <h2 className="text-[48px] font-bold mb-8">About Us</h2>
        <div className="prose max-w-none">
          {/* Add your about us content here */}
        </div>
      </section>

      {/* CTA Section */}
      <div className="mt-32">
        <CTA
          magnetType="grid"
          magnetColor="var(--color-blueprint)"
          title="Let's create something together"
          buttonText="GET IN TOUCH"
          buttonHref="/contact"
        />
      </div>
    </main>
  )
}
