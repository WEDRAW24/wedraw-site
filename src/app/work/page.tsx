import { projects } from './projects/registry'
import WorkProjectCard from '@/app/components/WorkProjectCard'
import CTA from '@/app/components/CTA'

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6">
        <div className="pt-12 mb-16">
          <h1 className="text-[85px] font-area-extrabold leading-[120%] text-marker">
            What we've<br />
            been up to...
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16 pb-32">
          {projects.map((project) => (
            <WorkProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-white">
        <CTA 
          magnetType="lines"
          magnetColor="var(--color-marker)"
          title="Let's get Started"
          buttonText="GET IN TOUCH"
          buttonHref="/contact"
          className="py-20"
        />
      </section>
    </div>
  )
}
