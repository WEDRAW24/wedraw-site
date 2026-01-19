import React from 'react';
import Image from 'next/image';
import QuotationMark from '@/app/assets/icons/Quotation_mark.svg';
import SpeechBubble from '@/app/assets/icons/Speech_bubble.svg';

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
}

export default function TestimonialCard({ quote, name, company }: TestimonialCardProps) {
  // Debug mode - set to false to hide all container borders
  const DEBUG = false;

  return (
    <div className={`relative inline-block w-full md:w-[440px] aspect-square max-w-[440px] ${DEBUG ? 'border-4 border-purple-500' : ''}`}>
      {/* Speech bubble SVG background */}
      <div className="absolute inset-0">
        <Image 
          src={SpeechBubble}
          alt=""
          fill
          className="object-fill"
        />
      </div>
      
      {/* Outer content container with padding from edges */}
      <div className={`relative px-6 md:px-8 pt-4 md:pt-6 pb-[50px] md:pb-[60px] flex justify-center h-full ${DEBUG ? 'border-4 border-blue-500' : ''}`}>
        {/* Inner centered container with additional padding and left-aligned text */}
        <div className={`flex flex-col px-4 py-4 overflow-hidden w-full ${DEBUG ? 'border-4 border-orange-500' : ''}`}>
          {/* Large quotation mark SVG */}
          <div className="mb-3 md:mb-6">
            <Image 
              src={QuotationMark}
              alt="Quotation mark"
              width={40}
              height={40}
              className="w-[45px] md:w-[65px] h-auto"
            />
          </div>
          
          {/* Quote text */}
          <p className="body-md mb-3 md:mb-6">
            {quote}
          </p>
          
          {/* Name */}
          <p className="button text-blueprint mb-0">
            {name}
          </p>
          
          {/* Company */}
          <p className="link text-blueprint uppercase">
            {company}
          </p>
        </div>
      </div>
    </div>
  );
}

