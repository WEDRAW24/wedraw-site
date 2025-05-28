'use client';

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface NavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavDrawer({ isOpen, onClose }: NavDrawerProps) {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
            mass: 1,
            restDelta: 0.001,
            exit: {
              type: "spring",
              stiffness: 150,
              damping: 20,
              mass: 1
            }
          }}
          className={`fixed top-0 right-0 bottom-0 left-[68px] z-10 overflow-y-auto transition-colors duration-300 ${
            hoveredSection === 'Work' ? 'bg-marker' : 
            hoveredSection === 'Studio' ? 'bg-meadow' :
            hoveredSection === 'Journal' ? 'bg-sunny' :
            hoveredSection === 'Contact' ? 'bg-blueprint' :
            'bg-white'
          }`}
        >
          <div className="pl-24 pr-[32rem] py-24 max-w-[1440px] relative">
            <ul className="space-y-12">
              {/* Section Block */}
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
                  className={`border-b-2 border-${color} pb-12 group transition-all duration-300 ${
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

                    <div className="text-right font-mono text-[16px] flex flex-col justify-end">
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
            <div className={`absolute bottom-24 right-0 font-mono text-[16px] space-y-12 transition-all duration-300 ${
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
