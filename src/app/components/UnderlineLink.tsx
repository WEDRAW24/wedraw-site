// src/components/UnderlineLink.tsx

import Link from "next/link";
import type { ReactNode } from "react";

type UnderlineLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function UnderlineLink({ href, children, className = "" }: UnderlineLinkProps) {
  return (
    <Link
      href={href}
      className={`
        font-mono text-sm uppercase 
        border-b-2 border-neutral-300 
        hover:border-current hover:font-semibold 
        transition-all duration-200 
        inline-block w-fit px-[2px] ${className}
      `}
    >
      {children}
    </Link>
  );
}
