import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our projects',
  description:
    'Case studies in event site design, survey and mark out for festivals, exhibitions and cultural events.',
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
