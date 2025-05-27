'use client';

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function NavDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="fixed top-0 left-0 w-screen h-screen bg-blueprint z-50 text-white px-12 py-16"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-white hover:opacity-70 transition"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>

          {/* Main Navigation */}
          <nav className="mt-12 space-y-8 font-mono uppercase text-3xl">
            <Link href="/work" onClick={onClose} className="block hover:opacity-80 transition">Work</Link>
            <Link href="/studio" onClick={onClose} className="block hover:opacity-80 transition">Studio</Link>
            <Link href="/journal" onClick={onClose} className="block hover:opacity-80 transition">Journal</Link>
            <Link href="/contact" onClick={onClose} className="block hover:opacity-80 transition">Contact</Link>
          </nav>

          {/* Sub-navigation (example layout) */}
          <div className="mt-12 space-y-2 text-sm font-mono uppercase opacity-80">
            <p>Work:</p>
            <Link href="/work/project-1" onClick={onClose} className="block hover:opacity-100">Selected Project</Link>
            <p className="mt-4">Studio:</p>
            <Link href="/studio#expertise" onClick={onClose} className="block hover:opacity-100">Expertise</Link>
            <p className="mt-4">Journal:</p>
            <Link href="/journal?category=news" onClick={onClose} className="block hover:opacity-100">News</Link>
            <Link href="/journal?category=media" onClick={onClose} className="block hover:opacity-100">Media</Link>
            <Link href="/journal?category=explorations" onClick={onClose} className="block hover:opacity-100">Explorations</Link>
            <p className="mt-4">Contact:</p>
            <Link href="/contact?type=project" onClick={onClose} className="block hover:opacity-100">Project Enquiry</Link>
            <Link href="/contact?type=general" onClick={onClose} className="block hover:opacity-100">General</Link>
            <Link href="/contact?type=careers" onClick={onClose} className="block hover:opacity-100">Careers</Link>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
