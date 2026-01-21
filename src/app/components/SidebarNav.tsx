// src/components/SidebarNav.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import WedrawLogoBlue from "../assets/logos/WEDRAW Logo Primary Blue.svg";
import WedrawLogoSunny from "../assets/logos/WEDRAW Logo Primary Yellow.svg";
import WedrawLogoMarker from "../assets/logos/WEDRAW Logo Primary Red.svg";
import WedrawLogoMeadow from "../assets/logos/WEDRAW Logo Primary Green.svg";
import NavDrawer from "./NavDrawer";

interface SidebarNavProps {
  color?: "blueprint" | "sunny" | "marker" | "meadow";
}

export default function SidebarNav({ color: colorProp }: SidebarNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Determine color based on path, unless overridden by prop
  let color = colorProp;
  if (!color) {
    if (pathname.startsWith("/journal")) color = "sunny";
    else if (pathname.startsWith("/work")) color = "marker";
    else if (pathname.startsWith("/studio")) color = "meadow";
    else color = "blueprint";
  }

  // Dynamic color classes
  const borderColor = color === "sunny" ? "border-r-sunny" : 
                    color === "marker" ? "border-r-marker" : 
                    color === "meadow" ? "border-r-meadow" : 
                    "border-r-blueprint";
  const textColor = color === "sunny" ? "text-sunny" : 
                   color === "marker" ? "text-marker" : 
                   color === "meadow" ? "text-meadow" : 
                   "text-blueprint";
  const bgBarColor = color === "sunny" ? "bg-sunny" : 
                    color === "marker" ? "bg-marker" : 
                    color === "meadow" ? "bg-meadow" : 
                    "bg-blueprint";
  // Swap logo based on color
  const logo = color === "sunny" ? WedrawLogoSunny : 
             color === "marker" ? WedrawLogoMarker : 
             color === "meadow" ? WedrawLogoMeadow : 
             WedrawLogoBlue;
  const iconColorClass = color === "sunny" ? "text-sunny" : 
                        color === "marker" ? "text-marker" : 
                        color === "meadow" ? "text-meadow" : 
                        "text-blueprint";

  return (
    <>
      {/* ==================== DESKTOP NAV BAR ==================== */}
      <aside className={`hidden md:block fixed bg-white z-50 w-[68px] h-screen left-0 top-0 border-r-2 ${borderColor}`}>
        {/* Menu Button */}
        <div className={`p-4 flex justify-center ${textColor}`}>
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className={`${textColor} w-[26px] h-[26px] relative`}
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

        {/* WEDRAW Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] w-[181px]">
          <Link 
            href="/"
            onClick={() => setMenuOpen(false)}
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

        {/* Social Icon */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex-col flex gap-2">
          <Link 
            href="https://www.linkedin.com/company/wedraw-uk/" 
            target="_blank" 
            rel="noopener noreferrer"
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

      {/* ==================== MOBILE NAV BAR ==================== */}
      <aside className={`md:hidden fixed bg-white z-50 w-screen h-[56px] top-0 left-0 right-0 border-b-2 ${borderColor} flex items-center justify-between px-4`}>
        {/* WEDRAW Logo */}
        <div className="w-[160px] flex-shrink-0">
          <Link 
            href="/"
            onClick={() => setMenuOpen(false)}
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

        {/* Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className={`w-[26px] h-[26px] relative flex-shrink-0 ${textColor}`}
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
      </aside>

      <NavDrawer isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
