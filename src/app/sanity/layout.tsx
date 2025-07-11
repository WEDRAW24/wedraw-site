'use client'

export default function SanityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen">
      {children}
    </div>
  )
} 