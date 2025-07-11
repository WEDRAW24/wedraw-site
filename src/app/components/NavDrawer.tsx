'use client';

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface NavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavDrawer({ isOpen, onClose }: NavDrawerProps) {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const variants = {
    initial: {
      x: isMobile ? 0 : "-100%",
      y: isMobile ? "-100%" : 0,
    },
    animate: {
      x: 0,
      y: 0,
    },
    exit: {
      x: isMobile ? 0 : "-100%",
      y: isMobile ? "-100%" : 0,
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={variants}
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
          className={`fixed md:left-[68px] md:right-0 md:bottom-0 md:top-0 md:-ml-6
                     left-0 right-0 bottom-0 top-[56px] md:mt-0 -mt-12
                     z-10 overflow-hidden transition-colors duration-300 
                     ${hoveredSection === 'Work' ? 'bg-marker' : 
                       hoveredSection === 'Studio' ? 'bg-meadow' :
                       hoveredSection === 'Journal' ? 'bg-sunny' :
                       hoveredSection === 'Contact' ? 'bg-blueprint' :
                       'bg-white'}`}
        >
          <div className="pl-6 md:pl-24 pr-[32rem] h-screen max-w-[1440px] relative flex flex-col">
            <ul className="space-y-4 md:space-y-12 flex-1 pt-12">
              {[
                {
                  title: "Work",
                  color: "marker",
                  href: "/work",
                  links: [
                    { label: "LIVERPOOL RIVER OF LIGHT", href: "/work/liverpool-river-of-light" },
                    { label: "BRISTOL INTERNATIONAL BALLOON FIESTA", href: "/work/bristol-balloon-fiesta" },
                    { label: "THE GAME SHOW", href: "/work/the-game-show" }
                  ]
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
              ].map(({ title, href, color, links }) => (
                <li
                  key={title}
                  className={`border-b-2 border-${color} pb-6 md:pb-12 group transition-all duration-300 ${
                    hoveredSection ? 
                      title === hoveredSection ? 'border-white' : 'border-white border-opacity-50'
                      : ''
                  }`}
                  onMouseEnter={() => setHoveredSection(title)}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <div className="flex justify-between items-end">
                    <h2
                      className={`text-${color} text-[72px] md:text-[100px] lg:text-[120px] leading-none font-bold transition-all duration-300 ${
                        hoveredSection ? 
                          title === hoveredSection ? 'text-white' : 'text-white opacity-50' 
                          : ''
                      }`}
                    >
                      <Link href={href} onClick={onClose} className="block">
                        {title}
                      </Link>
                    </h2>

                    <div className="text-right font-mono text-[16px] flex flex-col justify-end md:block hidden">
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

            {/* Contact Info */}
            <div className={`absolute bottom-[40px] right-0 font-mono text-[16px] space-y-12 transition-all duration-300 ${
              hoveredSection ? 'text-white opacity-50' : ''
            }`}>
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
  );
}
