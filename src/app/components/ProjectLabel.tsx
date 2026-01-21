type ProjectLabelProps = {
  location: string;
  year: string;
  className?: string;
  variant?: 'marker' | 'white';
};

export default function ProjectLabel({
  location,
  year,
  className = '',
  variant = 'marker'
}: ProjectLabelProps) {
  return (
    <div 
      className={`
        inline-flex items-center
        button border-2
        ${variant === 'marker' ? 'border-marker text-marker' : 'border-white text-white'}
        ${className}
      `}
      style={{ padding: 'clamp(6px, 1vw, 8px) clamp(16px, 2.5vw, 24px)' }}
    >
      <span>{location}</span>
      <span className="mx-4">|</span>
      <span>{year}</span>
    </div>
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