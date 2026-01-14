'use client'

import { motion } from 'framer-motion'

interface BlurInProps {
  children: string
  className?: string
  variant?: {
    hidden: { filter: string; opacity: number }
    visible: { filter: string; opacity: number }
  }
  duration?: number
  delay?: number
  staggerChildren?: boolean
}

const BlurIn = ({ 
  children, 
  className,
  variant,
  duration = 1,
  delay = 0,
  staggerChildren = true
}: BlurInProps) => {
  const defaultVariants = {
    hidden: { filter: 'blur(10px)', opacity: 0 },
    visible: { filter: 'blur(0px)', opacity: 1 },
  }
  const combinedVariants = variant || defaultVariants

  // Split text into words for stagger effect
  const words = children.split(' ')

  if (staggerChildren) {
    return (
      <motion.h1
        initial="hidden"
        animate="visible"
        transition={{ 
          staggerChildren: 0.15,
          delayChildren: delay
        }}
        className={className}
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            variants={combinedVariants}
            transition={{ 
              duration,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>
    )
  }

  // Non-staggered version (entire text at once)
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={combinedVariants}
      transition={{ 
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.h1>
  )
}

export default BlurIn

