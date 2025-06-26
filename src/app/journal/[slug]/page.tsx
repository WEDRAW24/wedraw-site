import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { getPostBySlugQuery } from '@/sanity/lib/queries'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'

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
        <h3 className="text-[44px] font-bold leading-[120%] text-dark-grey">{children}</h3>
      ),
      h4: ({children}: any) => (
        <h4 className="text-[36px] font-bold leading-[130%] text-dark-grey">{children}</h4>
      ),
      normal: ({children}: any) => (
        <p className="text-[16px] leading-[140%] mb-6 font-area-normal font-normal text-dark-grey">{children}</p>
      ),
    },
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Full-width hero image, no rounded corners, wider */}
      {post.mainImage && (
        <div className="w-full flex justify-center">
          <div className="w-full max-w-screen-2xl p-0">
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
      <main className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0 justify-center">
        <article className="w-full bg-white px-8 py-16 mt-12 flex flex-col col-span-1 lg:col-span-5
         lg:col-start-6">
          {/* Vertical label */}
          <div className="absolute left-0 top-24 hidden md:flex flex-col items-center">
            <span className="bg-white border border-sunny text-sunny font-mono text-xs font-semibold px-2 py-1 rounded-md rotate-[-90deg] tracking-widest shadow-sm">
              REFLECTIONS
            </span>
          </div>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
            </div>
            <h1 className="text-[72px] leading-[120%] font-extrabold font-sans mb-12">{post.title}</h1>
            <time dateTime={post.date} className="block text-[30px] leading-[130%] font-extrabold font-sans mb-12 text-dark-grey">
              {new Date(post.date).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </header>

          {/* Main Sub Heading */}
          {post.mainSubHeading && (
            <h2 className="text-[58px] font-bold leading-[120%] text-dark-grey mb-6">{post.mainSubHeading}</h2>
          )}
          {/* Main Body */}
          {post.mainBody && (
            <PortableText value={post.mainBody} components={components} />
          )}
          {/* Sub Heading 1 */}
          {post.subHeading1 && (
            <h3 className="text-[44px] font-bold leading-[120%] text-dark-grey mb-4">{post.subHeading1}</h3>
          )}
          {/* Body 1 */}
          {post.body1 && (
            <PortableText value={post.body1} components={components} />
          )}
          {/* Sub Heading 2 */}
          {post.subHeading2 && (
            <h3 className="text-[44px] font-bold leading-[120%] text-dark-grey mb-4">{post.subHeading2}</h3>
          )}
          {/* Body 2 */}
          {post.body2 && (
            <PortableText value={post.body2} components={components} />
          )}
          {/* Sub Heading 3 */}
          {post.subHeading3 && (
            <h3 className="text-[44px] font-bold leading-[120%] text-dark-grey mb-4">{post.subHeading3}</h3>
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