'use client';

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { projects } from "@/app/work/projects/registry";

interface NavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavDrawer({ isOpen, onClose }: NavDrawerProps) {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  
  // Debug mode - set to false to hide all container borders
  const DEBUG = false

  // Get first 3 projects for featured work links
  const featuredProjects = projects.slice(0, 3).map(project => ({
    label: project.title.toUpperCase(),
    href: `/work/projects/${project.slug}`
  }));

  // Desktop animation - slides in from left
  const desktopVariants = {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "-100%" }
  };

  // Mobile animation - slides down from top
  const mobileVariants = {
    initial: { y: "-100%" },
    animate: { y: 0 },
    exit: { y: "-100%" }
  };

  // Shared navigation content
  const navigationContent = [
    {
      title: "Work",
      color: "marker",
      href: "/work",
      links: featuredProjects
    },
    {
      title: "Studio",
      color: "meadow",
      href: "/studio",
      links: [
        { label: "EXPERTISE", href: "/studio/expertise" },
        { label: "VALUES", href: "/studio/values" },
        { label: "ABOUT US", href: "/studio/about-us" }
      ]
    },
    {
      title: "Journal",
      color: "sunny",
      href: "/journal",
      links: [
        { label: "NEWS", href: "/journal/news" },
        { label: "MEDIA", href: "/journal/media" },
        { label: "EXPLORATIONS", href: "/journal/explorations" }
      ]
    },
    {
      title: "Contact",
      color: "blueprint",
      href: "/contact",
      links: [
        { label: "PROJECT ENQUIRY", href: "/contact/project-enquiry" },
        { label: "GENERAL CONTACT", href: "/contact/general" },
        { label: "CAREERS", href: "/contact/careers" }
      ]
    }
  ];

  return (
    <>
      {/* ==================== DESKTOP DRAWER ==================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={desktopVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
              mass: 1,
              restDelta: 0.001
            }}
            className={`hidden md:block fixed left-[68px] right-0 bottom-0 top-0 -ml-6
                       z-10 overflow-hidden transition-colors duration-300 
                       ${hoveredSection === 'Work' ? 'bg-marker' : 
                         hoveredSection === 'Studio' ? 'bg-meadow' :
                         hoveredSection === 'Journal' ? 'bg-sunny' :
                         hoveredSection === 'Contact' ? 'bg-blueprint' :
                         'bg-white'}
                       ${DEBUG ? 'border-4 border-purple-500' : ''}`}
          >
          <div className={`h-screen max-w-[1440px] relative flex flex-col pl-24 ${DEBUG ? 'border-4 border-blue-500' : ''}`} style={{ paddingRight: 'clamp(48px, 25vw, 400px)' }}>
            <ul className={`flex-1 pt-12 flex flex-col ${DEBUG ? 'border-4 border-orange-500' : ''}`} style={{ gap: 'clamp(40px, 3vw, 48px)' }}>
              {navigationContent.map(({ title, href, color, links }) => (
                <li
                  key={title}
                  className={`border-b-2 border-${color} group transition-all duration-300 ${
                    hoveredSection ? 
                      title === hoveredSection ? 'border-white' : 'border-white border-opacity-50'
                      : ''
                  } ${DEBUG ? 'border-4 border-red-500' : ''}`}
                  style={{ paddingBottom: 'clamp(40px, 3vw, 48px)' }}
                  onMouseEnter={() => setHoveredSection(title)}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <div className={`flex justify-between items-end ${DEBUG ? 'border-4 border-yellow-500' : ''}`}>
                    <h2
                      className={`text-${color} leading-none font-bold transition-all duration-300 ${
                        hoveredSection ? 
                          title === hoveredSection ? 'text-white' : 'text-white opacity-50' 
                          : ''
                      } ${DEBUG ? 'border-2 border-green-500' : ''}`}
                      style={{ fontSize: 'clamp(100px, 8.5vw, 120px)' }}
                    >
                      <Link href={href} onClick={onClose} className="block">
                        {title}
                      </Link>
                    </h2>

                    {/* Sub-links - hidden on smaller desktops, visible from 1100px+ */}
                    <div className={`hidden min-[1100px]:block text-right font-mono text-[18px] flex flex-col justify-end ${DEBUG ? 'border-4 border-cyan-500' : ''}`}>
                      {links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={onClose}
                          className={`block text-${color} transition-all duration-300 ${
                            hoveredSection ? 
                              title === hoveredSection ? 'text-white' : 'text-white opacity-50'
                              : ''
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Contact Info - Desktop only */}
            <div className={`absolute bottom-[40px] right-12 font-mono text-[16px] space-y-12 transition-all duration-300 ${
              hoveredSection ? 'text-white opacity-50' : ''
            } ${DEBUG ? 'border-4 border-pink-500' : ''}`}>
              <div>
                <h3 className={`mb-2 text-blueprint transition-all duration-300 ${
                  hoveredSection ? 'text-white opacity-50' : ''
                }`}>OFFICE</h3>
                <p className={`font-sans text-[18px] leading-[140%] font-semibold text-black transition-all duration-300 ${
                  hoveredSection ? 'text-white opacity-50' : ''
                }`}>
                  59 Prince Street<br />
                  Bristol<br />
                  BS1 4QH
                </p>
              </div>
              <div>
                <h3 className={`mb-2 text-blueprint transition-all duration-300 ${
                  hoveredSection ? 'text-white opacity-50' : ''
                }`}>EMAIL ADDRESS</h3>
                <a
                  href="mailto:info@we-draw.co.uk"
                  className={`font-sans text-[18px] leading-[140%] font-semibold text-black transition-all duration-300 ${
                    hoveredSection ? 'text-white opacity-50' : ''
                  }`}
                >
                  info@we-draw.co.uk
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        )}
      </AnimatePresence>

      {/* ==================== MOBILE DRAWER ==================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
              mass: 1,
              restDelta: 0.001
            }}
            className={`md:hidden fixed left-0 right-0 top-0 
                       z-10 overflow-hidden transition-colors duration-300 
                       ${hoveredSection === 'Work' ? 'bg-marker' : 
                         hoveredSection === 'Studio' ? 'bg-meadow' :
                         hoveredSection === 'Journal' ? 'bg-sunny' :
                         hoveredSection === 'Contact' ? 'bg-blueprint' :
                         'bg-white'}
                       ${DEBUG ? 'border-4 border-purple-500' : ''}`}
            style={{ height: '100vh', maxHeight: '100vh' }}
          >
          <div className={`px-6 pt-[65px] pb-4 h-full flex flex-col justify-between ${DEBUG ? 'border-4 border-blue-500' : ''}`}>
            <ul className={`space-y-4 flex-shrink-0 ${DEBUG ? 'border-4 border-orange-500' : ''}`}>
              {navigationContent.map(({ title, href, color, links }) => (
                <li
                  key={title}
                  className={`border-b-2 border-${color} pb-5 ${DEBUG ? 'border-4 border-red-500' : ''}`}
                >
                  <div className="flex justify-between items-end">
                    <h2 className={`text-${color} leading-none font-extrabold ${DEBUG ? 'border-2 border-yellow-500' : ''}`} style={{ fontSize: 'clamp(48px, 14vw, 72px)' }}>
                      <Link href={href} onClick={onClose} className="block">
                        {title}
                      </Link>
                    </h2>

                    {/* Sub-links - hidden on small phones, visible on tablets */}
                    <div className="hidden min-[500px]:block text-right font-mono flex flex-col justify-end" style={{ fontSize: 'clamp(10px, 2.5vw, 14px)' }}>
                      {links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={onClose}
                          className={`block text-${color}`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Contact Info & Social Icons - Mobile */}
            <div className={`flex justify-between items-end flex-shrink-0 ${DEBUG ? 'border-4 border-green-500' : ''}`}>
              {/* Contact Info - LEFT */}
              <div className={`font-mono text-[12px] space-y-4 ${DEBUG ? 'border-4 border-cyan-500' : ''}`}>
                <div>
                  <h3 className="mb-1 text-blueprint font-semibold">OFFICE</h3>
                  <p className="font-sans text-[14px] leading-[140%] font-semibold text-black">
                    59 Prince Street<br />
                    Bristol<br />
                    BS1 4QH
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-blueprint font-semibold">EMAIL ADDRESS</h3>
                  <a
                    href="mailto:info@we-draw.co.uk"
                    className="font-sans text-[14px] leading-[140%] font-semibold text-black"
                  >
                    info@we-draw.co.uk
                  </a>
                </div>
              </div>

              {/* Social Icons - RIGHT */}
              <div className={`flex flex-col gap-3 pb-1 ${DEBUG ? 'border-4 border-pink-500' : ''}`}>
                <Link 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blueprint"
                >
                  <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7277 0H5.57001C2.49378 0 0 2.58454 0 5.77272V14.2273C0 17.4155 2.49378 20 5.57001 20H13.7277C16.8039 20 19.2976 17.4155 19.2976 14.2273V5.77272C19.2976 2.58454 16.8039 0 13.7277 0ZM17.5205 14.3759C17.5205 16.4922 15.8651 18.2079 13.8231 18.2079H5.47454C3.43253 18.2079 1.77716 16.4922 1.77716 14.3759V5.72347C1.77716 3.60714 3.43253 1.89151 5.47454 1.89151H13.8231C15.8651 1.89151 17.5205 3.60714 17.5205 5.72347V14.3759Z" fill="currentColor"/>
                    <path d="M9.64968 4.86035C6.88434 4.86035 4.64258 7.18369 4.64258 10.0497C4.64258 12.9157 6.88433 15.239 9.64968 15.239C12.415 15.239 14.6567 12.9157 14.6567 10.0497C14.6567 7.18369 12.415 4.86035 9.64968 4.86035ZM9.64968 13.4136C7.85706 13.4136 6.40386 11.9075 6.40386 10.0497C6.40386 8.19181 7.85706 6.68573 9.64968 6.68573C11.4423 6.68573 12.8955 8.19182 12.8955 10.0497C12.8955 11.9075 11.4423 13.4136 9.64968 13.4136Z" fill="currentColor"/>
                    <path d="M14.8227 5.87194C15.4669 5.87194 15.9892 5.33069 15.9892 4.66302C15.9892 3.99535 15.4669 3.4541 14.8227 3.4541C14.1785 3.4541 13.6562 3.99535 13.6562 4.66302C13.6562 5.33069 14.1785 5.87194 14.8227 5.87194Z" fill="currentColor"/>
                  </svg>
                </Link>
                <Link 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blueprint"
                >
                  <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.443 17.0431H13.5836V12.4021C13.5836 11.2943 13.5627 9.87114 12.0959 9.87114C10.606 9.87114 10.3788 11.0761 10.3788 12.3208V17.0431H7.51949V7.49858H10.2637V8.80232H10.3024C10.6845 8.05197 11.6185 7.26094 13.0109 7.26094C15.908 7.26094 16.443 9.23745 16.443 11.8086V17.0431ZM4.29266 6.1932C3.37341 6.1932 2.63214 5.42275 2.63214 4.47277C2.63214 3.5244 3.37341 2.7534 4.29266 2.7534C5.20773 2.7534 5.95215 3.5244 5.95215 4.47277C5.95215 5.42274 5.20774 6.1932 4.29266 6.1932ZM5.72495 17.0431H2.8593V7.49858H5.72495V17.0431ZM17.869 0H1.42286C0.637617 0 0 0.645602 0 1.44101V18.5579C0 19.3554 0.637617 20 1.42286 20H17.869C18.6553 20 19.2982 19.3554 19.2982 18.5579V1.44101C19.2982 0.645596 18.6553 0 17.869 0Z" fill="currentColor"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
