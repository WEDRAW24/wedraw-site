type CategoryLabelProps = {
  category?: 'news' | 'media' | 'explorations';
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
    explorations: 'border-sunny text-sunny bg-white'
  },
  white: {
    news: 'border-white text-white bg-transparent',
    media: 'border-white text-white bg-transparent',
    explorations: 'border-white text-white bg-transparent'
  },
  marker: {
    news: 'border-marker text-marker bg-transparent',
    media: 'border-marker text-marker bg-transparent',
    explorations: 'border-marker text-marker bg-transparent',
    project: 'border-marker text-marker bg-transparent'
  }
};

export default function CategoryLabel({
  category,
  className = '',
  variant = 'default',
  location,
  date,
  orientation = 'horizontal'
}: CategoryLabelProps) {
  if (location && date) {
    return (
      <div className={`
        inline-block
        font-area-normal uppercase border
        text-[14px] px-4 py-8
        tracking-[0.2em]
        ${variant === 'marker' ? 'border-marker text-marker' : variantClasses[variant].news}
        ${orientation === 'vertical' ? 'writing-vertical' : ''}
        ${className}
      `}>
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
        inline-block
        font-mono font-mono-medium uppercase border-2 
        text-[16px] px-4 py-1 min-w-[90px] text-center
        tracking-wider
        ${variantClasses[variant][normalizedCategory]}
        ${className}
      `}
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