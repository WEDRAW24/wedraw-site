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
        font-mono text-sm uppercase 
        border-b-2
        hover:font-semibold 
        transition-all duration-200 
        inline-block w-fit px-[2px]
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </Link>
  );
}
