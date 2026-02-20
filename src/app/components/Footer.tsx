'use client';

// src/components/Footer.tsx

import Link from "next/link";
import Image from "next/image";
import LogoSvg from "../assets/logos/WEDRAW Logo Primary White.svg";
import LinkedInWhite from "../assets/icons/LinkedIn_white.svg";

export default function Footer() {
  // Debug mode - set to false to hide all container borders
  const DEBUG = false;
  
  return (
    <footer className={`bg-[#2424FF] text-white ${DEBUG ? 'border-4 border-purple-500' : ''}`} style={{ paddingTop: 'clamp(32px, 6vw, 96px)' }}>
      <div className={`container mx-auto px-4 md:px-6 ${DEBUG ? 'border-4 border-blue-500' : ''}`}>
        
        {/* MOBILE LAYOUT (< 768px) */}
        <div className="md:hidden min-h-[calc(100vh-56px-32px)] flex flex-col justify-between">
          
          {/* Animated Logo Marquee */}
          <div className={`overflow-hidden ${DEBUG ? 'border-4 border-green-500' : ''}`}>
            <div className="flex animate-logo-sweep">
              {/* First logo */}
              <Image
                src={LogoSvg}
                alt="WEDRAW Logo"
                width={1200}
                height={300}
                className="h-auto flex-shrink-0 max-w-none"
                style={{ width: '300vw', minWidth: '300vw', marginRight: '20vw' }}
                priority
              />
              {/* Second logo for seamless loop */}
              <Image
                src={LogoSvg}
                alt="WEDRAW Logo"
                width={1200}
                height={300}
                className="h-auto flex-shrink-0 max-w-none"
                style={{ width: '300vw', minWidth: '300vw', marginRight: '20vw' }}
                priority
              />
            </div>
          </div>

          {/* Footer Content Group - Pushed to bottom */}
          <div className={`flex flex-col ${DEBUG ? 'border-4 border-yellow-500' : ''}`}>
            {/* Navigation Links */}
            <nav className={`mb-8 ${DEBUG ? 'border-4 border-orange-500' : ''}`}>
              <ul className="flex flex-col gap-4 uppercase">
                <li><Link href="/work" className="link">Work</Link></li>
                <li><Link href="/studio" className="link">Studio</Link></li>
                <li><Link href="/journal" className="link">Journal</Link></li>
                <li><Link href="/contact" className="link">Contact</Link></li>
              </ul>
            </nav>

            {/* Social Section - Icon first on mobile */}
            <div className={`mb-6 pb-6 border-b border-white/30 ${DEBUG ? 'border-4 border-cyan-500' : ''}`}>
              <div className="flex items-center gap-3">
                <Link 
                  href="https://www.linkedin.com/company/wedraw-uk/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition"
                >
                  <Image
                    src={LinkedInWhite}
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </Link>
                <p className="font-mono text-link">Let's be social</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className={`mb-6 ${DEBUG ? 'border-4 border-pink-500' : ''}`}>
              <a href="mailto:info@wedraw.uk" className="block font-mono text-link mb-4 hover:opacity-80 transition">
                info@wedraw.uk
              </a>
              <p className="font-mono text-link">
                59 Prince Street<br />
                Bristol, BS1 4QH
              </p>
            </div>

            {/* Footer Credits */}
            <div className={`flex flex-col gap-4 font-mono text-link pb-6 ${DEBUG ? 'border-4 border-lime-500' : ''}`}>
              <div className="flex flex-col gap-4">
                <span>© {new Date().getFullYear()} WEDRAW LTD. All rights reserved.</span>
                <Link href="/privacy-policy" className="link">
                  Privacy Policy
                </Link>
              </div>
              <span className="link">Company Number - 15857641</span>
              <a href="https://www.aidanjonesdesign.co.uk/" target="_blank" rel="noopener noreferrer" className="link">
                Branding by...
              </a>
            </div>
          </div>
        </div>

        {/* TABLET & DESKTOP LAYOUT (≥ 768px) */}
        <div className="hidden md:block">
          
          {/* Top Navigation Bar */}
          <div className={DEBUG ? 'border-4 border-orange-500' : ''} style={{ marginBottom: 'clamp(24px, 8vw, 96px)' }}>
            <nav className={`w-full max-w-[1200px] mx-auto ${DEBUG ? 'border-4 border-red-500' : ''}`}>
              <ul className={`flex justify-between items-center uppercase ${DEBUG ? 'border-4 border-yellow-500' : ''}`}>
                <li><Link href="/work" className="link">WORK</Link></li>
                <li><Link href="/studio" className="link">STUDIO</Link></li>
                <li><Link href="/journal" className="link">JOURNAL</Link></li>
                <li><Link href="/contact" className="link">CONTACT</Link></li>
                <li className="flex items-center" style={{ gap: 'clamp(4px, 1vw, 12px)' }}>
                  <span className="font-mono text-sm hidden min-[600px]:inline">Let's be social</span>
                  <Link 
                    href="https://www.linkedin.com/company/wedraw-uk/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition"
                  >
                    <Image
                      src={LinkedInWhite}
                      alt="LinkedIn"
                      width={16}
                      height={16}
                      className="w-4 h-4 min-[600px]:w-5 min-[600px]:h-5"
                    />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Logo Section */}
          <div className={DEBUG ? 'border-4 border-green-500' : ''} style={{ marginBottom: 'clamp(24px, 8vw, 96px)' }}>
            <Image
              src={LogoSvg}
              alt="WEDRAW Logo"
              width={1200}
              height={300}
              className="w-full max-w-[1200px] mx-auto h-auto"
              priority
            />
          </div>

          {/* Contact Info */}
          <div className={`border-b border-white ${DEBUG ? 'border-4 border-cyan-500' : ''}`} style={{ paddingBottom: 'clamp(8px, 2vw, 24px)' }}>
            <div className={`flex justify-between items-center font-mono ${DEBUG ? 'border-4 border-pink-500' : ''}`} style={{ fontSize: 'clamp(9px, 2vw, 14px)' }}>
              <a href="mailto:info@wedraw.uk" className="hover:opacity-80 transition">
                info@wedraw.uk
              </a>
              <span>59 Prince Street, Bristol, BS1 4QH</span>
            </div>
          </div>

          {/* Footer Credits */}
          <div className={`flex justify-center items-center ${DEBUG ? 'border-4 border-lime-500' : ''}`} style={{ gap: 'clamp(8px, 2vw, 32px)', paddingTop: 'clamp(8px, 2vw, 24px)', paddingBottom: 'clamp(8px, 2vw, 24px)' }}>
            <span className="link">© {new Date().getFullYear()} WEDRAW LTD. All rights reserved.</span>
            <Link href="/privacy-policy" className="link">
              Privacy Policy
            </Link>
            <span className="link">Company Number - 15857641</span>
            <a href="https://www.aidanjonesdesign.co.uk/" target="_blank" rel="noopener noreferrer" className="link">
              Branding by...
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
