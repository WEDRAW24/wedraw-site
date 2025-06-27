import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { getPostBySlugQuery, debugIntroPostQuery } from '@/sanity/lib/queries'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import CategoryLabel from '@/app/components/CategoryLabel'

// Force dynamic rendering
export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'

type Props = {
  params: {
    slug: string
  }
}

export default async function JournalPostPage({ params }: Props) {
  const post = await client.fetch(getPostBySlugQuery, { slug: params.slug })

  if (!post) {
    notFound()
  }

  // Debug log for category
  console.log('Post category from Sanity:', post.category)
  
  // Additional debug for Introducing WEDRAW post
  if (post.title === "Introducing WEDRAW") {
    const debugData = await client.fetch(debugIntroPostQuery)
    console.log('Debug data for Introducing WEDRAW:', debugData)
  }

  // Custom components for PortableText
  const components = {
    block: {
      h1: ({children}: any) => (
        <h1 className="text-[72px] font-bold leading-[120%] text-dark-grey">{children}</h1>
      ),
      h2: ({children}: any) => (
        <h2 className="text-[58px] font-bold leading-[120%] text-dark-grey">{children}</h2>
      ),
      h3: ({children}: any) => (
        <h3 className="text-[24px] font-area-extrabold leading-[130%] text-dark-grey mb-6">{children}</h3>
      ),
      h4: ({children}: any) => (
        <h4 className="text-[24px] font-area-extrabold leading-[130%] text-dark-grey mb-6">{children}</h4>
      ),
      normal: ({children}: any) => (
        <p className="text-[18px] leading-[180%] mb-3 font-area-normal text-dark-grey">{children}</p>
      ),
    },
  }

  return (
    <div className="bg-white min-h-screen relative z-0">
      {/* Full-width hero image, no rounded corners, wider */}
      {post.mainImage && (
        <div className="w-full flex justify-end max-w-screen-2xl mx-auto pl-[100px] pr-8">
          <div className="w-full">
            <div className="relative aspect-[1316/738] overflow-hidden">
              <Image
                src={urlFor(post.mainImage).width(1920).height(900).url()}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1920px) 100vw, 1920px"
              />
            </div>
          </div>
        </div>
      )}

      {/* Article content */}
      <main className="relative flex justify-end max-w-screen-2xl mx-auto pl-[230px] pr-8">
        <article className="w-[800px] bg-white py-16 mt-12 flex flex-col relative">
          {/* Header group - similar to Figma grouping */}
          <div className="relative">
            {/* Category label */}
            <div className="absolute -left-32 top-[40px] hidden lg:block">
              <CategoryLabel 
                category={post.category} 
                className="rotate-[-90deg] origin-top-right translate-x-[-100%]"
              />
            </div>

            {/* Header content */}
            <header className="mb-12">
              <div className="flex items-center gap-2 mb-4 text-sm text-dark-grey">
              </div>
              <h1 className="text-[72px] leading-[120%] font-extrabold font-sans mb-12 text-dark-grey">{post.title}</h1>
              <time dateTime={post.date} className="block text-[30px] leading-[130%] font-extrabold font-sans mb-12 text-dark-grey">
                {new Date(post.date).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </header>
          </div>

          {/* Main Sub Heading */}
          {post.mainSubHeading && (
            <h2 className="text-[24px] font-area-extrabold leading-[130%] text-dark-grey mb-8">{post.mainSubHeading}</h2>
          )}
          {/* Main Body */}
          {post.mainBody && (
            <PortableText value={post.mainBody} components={components} />
          )}
          {/* Sub Heading 1 */}
          {post.subHeading1 && (
            <h3 className="text-[24px] font-area-extrabold leading-[130%] text-dark-grey mb-8 mt-12">{post.subHeading1}</h3>
          )}
          {/* Body 1 */}
          {post.body1 && (
            <PortableText value={post.body1} components={components} />
          )}
          {/* Sub Heading 2 */}
          {post.subHeading2 && (
            <h3 className="text-[24px] font-area-extrabold leading-[130%] text-dark-grey mb-8 mt-12">{post.subHeading2}</h3>
          )}
          {/* Body 2 */}
          {post.body2 && (
            <PortableText value={post.body2} components={components} />
          )}
          {/* Sub Heading 3 */}
          {post.subHeading3 && (
            <h3 className="text-[24px] font-area-extrabold leading-[130%] text-dark-grey mb-8 mt-12">{post.subHeading3}</h3>
          )}
          {/* Body 3 */}
          {post.body3 && (
            <PortableText value={post.body3} components={components} />
          )}
        </article>
      </main>
    </div>
  )
} 