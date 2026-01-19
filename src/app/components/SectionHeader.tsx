import React from 'react';
import Button from './Button';

type SectionHeaderProps = {
  title: string | React.ReactNode;
  color: 'meadow' | 'marker' | 'sunny' | 'blueprint';
  buttonText?: string;
  buttonHref?: string;
  showLine?: boolean;
  className?: string;
};

export default function SectionHeader({
  title,
  color,
  buttonText,
  buttonHref,
  showLine = true,
  className = '',
}: SectionHeaderProps) {
  const colorClasses = {
    meadow: {
      text: 'text-meadow',
      bg: 'bg-meadow',
      button: 'meadow' as const,
    },
    marker: {
      text: 'text-marker',
      bg: 'bg-marker',
      button: 'marker' as const,
    },
    sunny: {
      text: 'text-sunny',
      bg: 'bg-sunny',
      button: 'sunny' as const,
    },
    blueprint: {
      text: 'text-blueprint',
      bg: 'bg-blueprint',
      button: 'blueprint' as const,
    },
  };

  const colors = colorClasses[color];

  return (
    <div className={className}>
      {/* Title + Optional Button */}
      <div className="flex justify-between items-center mb-fluid-md md:mb-3">
        {/* Title */}
        <h2
          className={`
            section-heading-mobile md:section-heading
            ${colors.text}
          `}
        >
          {typeof title === 'string' ? (
            // Split on spaces and wrap each word for mobile line breaks
            title.split(' ').map((word, index) => (
              <span key={index} className="block md:inline md:ml-2 first:md:ml-0">
                {word}
              </span>
            ))
          ) : (
            title
          )}
        </h2>

        {/* Optional Button - Hidden on mobile */}
        {buttonText && buttonHref && (
          <div className="hidden md:block">
            <Button variant={colors.button} href={buttonHref}>
              {buttonText}
            </Button>
          </div>
        )}
      </div>

      {/* Divider Line */}
      {showLine && (
        <div className={`h-[2px] ${colors.bg} mb-fluid-lg md:mb-12`}></div>
      )}
    </div>
  );
}
