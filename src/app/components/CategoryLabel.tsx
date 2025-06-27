type CategoryLabelProps = {
  category: 'news' | 'media' | 'explorations';
  className?: string;
  variant?: 'default' | 'white';
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
  }
};

export default function CategoryLabel({
  category,
  className = '',
  variant = 'default'
}: CategoryLabelProps) {
  const normalizedCategory = category.toLowerCase() as keyof typeof variantClasses.default;
  
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