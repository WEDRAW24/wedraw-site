import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project enquiry',
  description:
    'Request a quote for event site survey, design and mark out.',
}

export default function ProjectEnquiryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
