'use client'

import Button from '@/app/components/Button'

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-fluid-md max-w-[1440px]">
        <div className="py-fluid-2xl">
          {/* Main Title - Using new display-xl class */}
          <h1 className="display-xl text-dark-grey mb-fluid-xl">
            Ready to collaborate?
          </h1>

          {/* Progress Indicator - 2 steps, scales for mobile */}
          <div className="flex items-center gap-1 mb-fluid-lg scale-75 sm:scale-100 origin-left">
            <div className="w-4 h-4 bg-blueprint"></div>
            <div className="w-8 h-[2px] bg-blueprint"></div>
            <div className="w-4 h-4 bg-blueprint"></div>
          </div>

          {/* Subtitle */}
          <h2 className="form-heading text-blueprint mb-fluid-lg">
            Lets get connected
          </h2>

          {/* Content */}
          <div className="max-w-[600px] space-y-fluid-sm">
            <p className="body-lg">
              We're always on the lookout for passionate and talented individuals to join our team. No matter your background or skill set, if you're eager to contribute and grow with us, we'd love to hear from you.
            </p>
            
            <p className="body-lg">
              To reach out to us about either, please email with the subject line 'Application' to info@wedraw.uk
            </p>

            {/* Buttons - Side by side on all screen sizes */}
            <div className="flex items-start gap-fluid-sm pt-fluid-md">
              <Button
                variant="blueprint"
                href="/contact"
              >
                BACK
              </Button>
              <Button
                variant="blueprint"
                href="mailto:info@wedraw.uk?subject=Application"
              >
                EMAIL US
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

