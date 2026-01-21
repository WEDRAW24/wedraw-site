type TagProps = {
  category?: 'news' | 'media' | 'explorations' | 'festivals' | 'exhibitions' | 'sports' | 'cultural';
  className?: string;
  variant?: 'default' | 'white' | 'marker';
  location?: string;
  date?: string;
  orientation?: 'horizontal' | 'vertical';
};

const variantClasses = {
  default: {
    news: 'border-sunny text-sunny bg-white',
    media: 'border-sunny text-sunny bg-white',
    explorations: 'border-sunny text-sunny bg-white',
    festivals: 'border-marker text-marker bg-white',
    exhibitions: 'border-marker text-marker bg-white',
    sports: 'border-marker text-marker bg-white',
    cultural: 'border-marker text-marker bg-white'
  },
  white: {
    news: 'border-white text-white bg-transparent',
    media: 'border-white text-white bg-transparent',
    explorations: 'border-white text-white bg-transparent',
    festivals: 'border-white text-white bg-transparent',
    exhibitions: 'border-white text-white bg-transparent',
    sports: 'border-white text-white bg-transparent',
    cultural: 'border-white text-white bg-transparent'
  },
  marker: {
    news: 'border-marker text-marker bg-transparent',
    media: 'border-marker text-marker bg-transparent',
    explorations: 'border-marker text-marker bg-transparent',
    festivals: 'border-marker text-marker bg-transparent',
    exhibitions: 'border-marker text-marker bg-transparent',
    sports: 'border-marker text-marker bg-transparent',
    cultural: 'border-marker text-marker bg-transparent'
  }
};

export default function Tag({
  category,
  className = '',
  variant = 'default',
  location,
  date,
  orientation = 'horizontal'
}: TagProps) {
  if (location && date) {
    return (
      <div 
        className={`
          inline-block
          font-area-normal uppercase border
          px-4 py-8
          tracking-[0.2em]
          ${variant === 'marker' ? 'border-marker text-marker' : variantClasses[variant].news}
          ${orientation === 'vertical' ? 'writing-vertical' : ''}
          ${className}
        `}
        style={{ fontSize: 'clamp(11px, 1.8vw, 14px)' }}
      >
        <div className="flex flex-col items-center gap-4">
          <span className={orientation === 'vertical' ? 'writing-mode-vertical' : ''}>{location}</span>
          <span>|</span>
          <span className={orientation === 'vertical' ? 'writing-mode-vertical' : ''}>{date}</span>
        </div>
      </div>
    );
  }

  const normalizedCategory = category?.toLowerCase() as keyof typeof variantClasses.default;
  
  return (
    <span
      className={`
        block
        tag border 
        text-center
        ${variantClasses[variant][normalizedCategory]}
        ${className}
      `}
      style={{ 
        padding: 'clamp(5px, 0.85vw, 7px) clamp(14px, 2.1vw, 20px)'
      }}
    >
      {normalizedCategory.toUpperCase()}
    </span>
  );
}

const styles = `
  .writing-mode-vertical {
    writing-mode: vertical-lr;
    text-orientation: mixed;
  }
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}
