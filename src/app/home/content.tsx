'use client'

import CTA from '../components/CTA'
import {
  HeroSection,
  OurExpertiseSection,
  SelectedProjectsSection,
  ProvenInTheFieldSection,
  JournalHighlightsSection,
  TestimonialsSection,
} from './content/index'

export default function HomeContent() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <OurExpertiseSection />
      <SelectedProjectsSection />
      <ProvenInTheFieldSection />
      <JournalHighlightsSection />
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="bg-white mt-32 mb-32">
        <CTA 
          magnetType="dots"
          magnetColor="var(--color-blueprint)"
          title="Let's get started"
          buttonText="CONTACT US"
          buttonHref="/contact"
        />
      </section>
    </main>
  )
}
