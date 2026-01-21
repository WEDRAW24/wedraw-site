import React from 'react';
import Image from 'next/image';
import QuotationMark from '@/app/assets/icons/Quotation_mark.svg';

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
}

export default function TestimonialCard({ quote, name, company }: TestimonialCardProps) {
  return (
    <div className="w-full max-w-[900px] mx-auto">
      <div className="flex flex-col w-full md:border-l-4 border-blueprint md:pl-12 md:pr-12">
        {/* Quotation mark */}
        <div className="mb-6">
          <Image 
            src={QuotationMark}
            alt="Quotation mark"
            width={40}
            height={40}
            className="w-[45px] md:w-[65px] h-auto"
          />
        </div>
        
        {/* Quote text */}
        <p className="body-xl text-dark-grey mb-6">
          {quote}
        </p>
        
        {/* Name and Company */}
        <div className="flex items-baseline gap-2">
          <p className="button text-blueprint mb-0">
            {name}
          </p>
          <span className="text-blueprint">|</span>
          <p className="link text-blueprint mb-0">
            {company}
          </p>
        </div>
      </div>
    </div>
  );
}

