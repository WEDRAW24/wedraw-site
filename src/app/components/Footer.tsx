'use client';

// src/components/Footer.tsx

import Link from "next/link";
import Image from "next/image";
import LogoSvg from "../assets/logos/WEDRAW Logo Primary White.svg";
import InstagramWhite from "../assets/icons/Instagram_white.svg";
import LinkedInWhite from "../assets/icons/LinkedIn_white.svg";

export default function Footer() {
  return (
    <footer className="bg-[#2424FF] text-white pt-24">
      <div className="container mx-auto px-6">
        {/* Top Navigation Bar */}
        <div className="mb-24">
          <nav className="w-full max-w-[960px] mx-auto">
            <ul className="flex justify-between items-center font-mono uppercase text-sm tracking-wider">
              <li><Link href="/work" className="hover:underline">WORK</Link></li>
              <li><Link href="/studio" className="hover:underline">STUDIO</Link></li>
              <li><Link href="/journal" className="hover:underline">JOURNAL</Link></li>
              <li><Link href="/contact" className="hover:underline">CONTACT</Link></li>
              <li className="flex items-center gap-4">
                <span>FOLLOW US</span>
                <div className="flex gap-4">
                  <Link 
                    href="https://www.instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition"
                  >
                    <Image
                      src={InstagramWhite}
                      alt="Instagram"
                      width={20}
                      height={20}
                    />
                  </Link>
                  <Link 
                    href="https://www.linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition"
                  >
                    <Image
                      src={LinkedInWhite}
                      alt="LinkedIn"
                      width={20}
                      height={20}
                    />
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        {/* Logo Section */}
        <div className="mb-24">
          <Image
            src={LogoSvg}
            alt="WEDRAW Logo"
            width={960}
            height={240}
            className="w-full max-w-[960px] mx-auto h-auto"
            priority
          />
        </div>

        {/* Contact Info */}
        <div className="border-b border-white pb-6">
          <div className="flex justify-between items-center font-mono text-sm">
            <a href="mailto:info@we-draw.co.uk" className="hover:opacity-80 transition">
              info@we-draw.co.uk
            </a>
            <span>59 Prince Street, Bristol, BS1 4QH</span>
          </div>
        </div>

        {/* Footer Credits */}
        <div className="flex justify-center gap-8 font-mono text-sm pt-6 pb-6">
          <span>© {new Date().getFullYear()}</span>
          <Link href="/privacy-policy" className="hover:opacity-80 transition">
            Privacy Policy
          </Link>
          <a href="https://aidanjones.design" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            Branding by Aidan Jones Design
          </a>
        </div>
      </div>
    </footer>
  );
}
