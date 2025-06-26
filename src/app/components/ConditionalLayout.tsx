'use client'

import { usePathname } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'
import SidebarNavWithColor from './SidebarNavWithColor'
import Footer from './Footer'

interface ConditionalLayoutProps {
  children: ReactNode
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname()
  const [isSanityStudio, setIsSanityStudio] = useState(false)

  useEffect(() => {
    setIsSanityStudio(pathname?.startsWith('/sanity') ?? false)
  }, [pathname])

  return (
    <>
      {!isSanityStudio && <SidebarNavWithColor />}
      {children}
      {!isSanityStudio && <Footer />}
    </>
  )
} 