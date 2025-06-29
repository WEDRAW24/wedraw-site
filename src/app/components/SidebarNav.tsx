// src/components/SidebarNav.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import WedrawLogoBlue from "../assets/logos/WEDRAW Logo Primary Blue.svg";
import WedrawLogoSunny from "../assets/logos/WEDRAW Logo Primary Yellow.svg";
import WedrawLogoMarker from "../assets/logos/WEDRAW Logo Primary Red.svg";
import NavDrawer from "./NavDrawer";

export default function SidebarNav({ color = "blueprint" }: { color?: "blueprint" | "sunny" | "marker" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Dynamic color classes
  const borderColor = color === "sunny" ? "border-r-sunny" : color === "marker" ? "border-r-marker" : "border-r-blueprint";
  const textColor = color === "sunny" ? "text-sunny" : color === "marker" ? "text-marker" : "text-blueprint";
  const bgBarColor = color === "sunny" ? "bg-sunny" : color === "marker" ? "bg-marker" : "bg-blueprint";
  // Swap logo based on color
  const logo = color === "sunny" ? WedrawLogoSunny : color === "marker" ? WedrawLogoMarker : WedrawLogoBlue;
  const iconColorClass = color === "sunny" ? "text-sunny" : color === "marker" ? "text-marker" : "text-blueprint";

  return (
    <>
      <aside className={`fixed top-0 left-0 w-[68px] h-screen bg-white border-r-2 ${borderColor} z-50 overflow-hidden`}>
        {/* Top: Burger Menu */}
        <div className={`p-4 flex justify-center ${textColor}`}>
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className={`${textColor} hover:opacity-80 transition w-[26px] h-[26px] relative`}
          >
            <motion.div 
              className="flex flex-col justify-center h-full"
              animate={menuOpen ? "open" : "closed"}
            >
              <motion.div 
                className={`w-[26px] h-[3px] ${bgBarColor} absolute`}
                variants={{
                  closed: { rotate: 0, y: -8 },
                  open: { rotate: 45, y: 0 }
                }}
                transition={{ duration: 0.4 }}
              />
              <motion.div 
                className={`w-[26px] h-[3px] ${bgBarColor} absolute`}
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
              />
              <motion.div 
                className={`w-[26px] h-[3px] ${bgBarColor} absolute`}
                variants={{
                  closed: { rotate: 0, y: 8 },
                  open: { rotate: -45, y: 0 }
                }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </button>
        </div>

        {/* Middle: WEDRAW Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] w-[181px]">
          <Link 
            href="/"
            onClick={() => setMenuOpen(false)}
            className="hover:opacity-80 transition"
          >
            <Image
              src={logo}
              alt="WEDRAW"
              width={181}
              height={26}
              className="w-full h-auto"
              priority
            />
          </Link>
        </div>

        {/* Bottom: Social Icons */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col gap-4">
          <Link 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <span className={iconColorClass} style={{ display: 'inline-block', lineHeight: 0 }}>
              {/* Instagram SVG */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7277 0H5.57001C2.49378 0 0 2.58454 0 5.77272V14.2273C0 17.4155 2.49378 20 5.57001 20H13.7277C16.8039 20 19.2976 17.4155 19.2976 14.2273V5.77272C19.2976 2.58454 16.8039 0 13.7277 0ZM17.5205 14.3759C17.5205 16.4922 15.8651 18.2079 13.8231 18.2079H5.47454C3.43253 18.2079 1.77716 16.4922 1.77716 14.3759V5.72347C1.77716 3.60714 3.43253 1.89151 5.47454 1.89151H13.8231C15.8651 1.89151 17.5205 3.60714 17.5205 5.72347V14.3759Z" fill="currentColor"/>
                <path d="M9.64968 4.86035C6.88434 4.86035 4.64258 7.18369 4.64258 10.0497C4.64258 12.9157 6.88433 15.239 9.64968 15.239C12.415 15.239 14.6567 12.9157 14.6567 10.0497C14.6567 7.18369 12.415 4.86035 9.64968 4.86035ZM9.64968 13.4136C7.85706 13.4136 6.40386 11.9075 6.40386 10.0497C6.40386 8.19181 7.85706 6.68573 9.64968 6.68573C11.4423 6.68573 12.8955 8.19182 12.8955 10.0497C12.8955 11.9075 11.4423 13.4136 9.64968 13.4136Z" fill="currentColor"/>
                <path d="M14.8227 5.87194C15.4669 5.87194 15.9892 5.33069 15.9892 4.66302C15.9892 3.99535 15.4669 3.4541 14.8227 3.4541C14.1785 3.4541 13.6562 3.99535 13.6562 4.66302C13.6562 5.33069 14.1785 5.87194 14.8227 5.87194Z" fill="currentColor"/>
              </svg>
            </span>
          </Link>
          <Link 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <span className={iconColorClass} style={{ display: 'inline-block', lineHeight: 0 }}>
              {/* LinkedIn SVG */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.443 17.0431H13.5836V12.4021C13.5836 11.2943 13.5627 9.87114 12.0959 9.87114C10.606 9.87114 10.3788 11.0761 10.3788 12.3208V17.0431H7.51949V7.49858H10.2637V8.80232H10.3024C10.6845 8.05197 11.6185 7.26094 13.0109 7.26094C15.908 7.26094 16.443 9.23745 16.443 11.8086V17.0431ZM4.29266 6.1932C3.37341 6.1932 2.63214 5.42275 2.63214 4.47277C2.63214 3.5244 3.37341 2.7534 4.29266 2.7534C5.20773 2.7534 5.95215 3.5244 5.95215 4.47277C5.95215 5.42274 5.20774 6.1932 4.29266 6.1932ZM5.72495 17.0431H2.8593V7.49858H5.72495V17.0431ZM17.869 0H1.42286C0.637617 0 0 0.645602 0 1.44101V18.5579C0 19.3554 0.637617 20 1.42286 20H17.869C18.6553 20 19.2982 19.3554 19.2982 18.5579V1.44101C19.2982 0.645596 18.6553 0 17.869 0Z" fill="currentColor"/>
              </svg>
            </span>
          </Link>
        </div>
      </aside>

      <NavDrawer isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
