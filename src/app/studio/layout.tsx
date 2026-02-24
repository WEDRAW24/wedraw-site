import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Event design, survey & mark out',
  description:
    'We support event organisers and production companies with site survey, CAD design and mark out for event design and site planning.',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
