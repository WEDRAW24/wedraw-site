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
    <div className={`
      inline-flex items-center
      font-mono font-mono-medium uppercase border-2
      text-[16px] px-4 py-1
      tracking-wider
      ${variant === 'marker' ? 'border-marker text-marker' : 'border-white text-white'}
      ${className}
    `}>
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