// src/components/SidebarNav.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import InstagramBlue from "../assets/icons/Instagram_blueprint.svg";
import LinkedInBlue from "../assets/icons/LinkedIn_blueprint.svg";
import WedrawLogo from "../assets/logos/WEDRAW Logo Primary Blue.svg";

export default function SidebarNav() {
  return (
    <aside className="fixed top-0 left-0 w-[68px] h-[100vh] bg-white border-r-2 border-r-blueprint">
      {/* Top: Burger Menu */}
      <div className="p-4 flex justify-center">
        <button className="text-blueprint hover:opacity-80 transition">
          <div className="flex flex-col gap-[4px]">
            <div className="w-[26px] h-[3px] bg-blueprint"></div>
            <div className="w-[26px] h-[3px] bg-blueprint"></div>
            <div className="w-[26px] h-[3px] bg-blueprint"></div>
          </div>
        </button>
      </div>

      {/* Middle: WEDRAW Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] w-[181px]">
        <Link 
          href="/"
          className="hover:opacity-80 transition"
        >
          <Image
            src={WedrawLogo}
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
          <Image
            src={InstagramBlue}
            alt="Instagram"
            width={20}
            height={20}
          />
        </Link>
        <Link 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-80 transition"
        >
          <Image
            src={LinkedInBlue}
            alt="LinkedIn"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </aside>
  );
}
