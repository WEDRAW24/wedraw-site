'use client'

import { usePathname } from 'next/navigation'
import SidebarNav from './SidebarNav'
import Footer from './Footer'

interface ConditionalLayoutProps {
  children: React.ReactNode
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname()
  
  // Return early for Sanity Studio routes
  if (pathname?.startsWith('/sanity')) {
    return <>{children}</>
  }

  return (
    <>
      <SidebarNav />
      <div className="min-h-screen md:ml-[68px] relative" style={{ zIndex: 1 }}>
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
} 