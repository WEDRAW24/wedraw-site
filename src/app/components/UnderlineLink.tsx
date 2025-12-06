// src/components/UnderlineLink.tsx

import Link from "next/link";
import type { ReactNode } from "react";

type UnderlineLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'sunny';
};

export default function UnderlineLink({ 
  href, 
  children, 
  className = "",
  variant = 'default'
}: UnderlineLinkProps) {
  const variantClasses = {
    default: 'border-neutral-300 hover:border-current',
    sunny: 'text-sunny border-sunny hover:border-sunny'
  };

  return (
    <Link
      href={href}
      className={`
        font-mono font-mono-normal tracking-wider
        hover:font-semibold active:font-semibold
        transition-all duration-200 
        inline-block w-fit
        ${className}
      `}
      style={{ fontSize: 'clamp(13px, 1.5vw, 14px)' }}
    >
      {children}
    </Link>
  );
}
