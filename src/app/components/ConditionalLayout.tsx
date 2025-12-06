'use client'

import SidebarNav from './SidebarNav'
import Footer from './Footer'

interface ConditionalLayoutProps {
  children: React.ReactNode
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  return (
    <>
      <SidebarNav />
      <div className="min-h-screen md:ml-[68px] pt-[56px] md:pt-0 relative" style={{ zIndex: 1 }}>
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
} 