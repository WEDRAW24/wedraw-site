import Link from 'next/link';

type ButtonProps = {
    children: React.ReactNode;
    variant?: 'blueprint' | 'marker' | 'meadow' | 'sunny' | 'black' | 'white-meadow';
    size?: 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    href?: string;
  };
  
  // Typography system integrated button sizes
  // Using label-* from typography system with improved mobile minimums
  const sizeStyles = {
    // Small: label-sm typography (9px → 12px) with compact padding
    sm: { 
      fontSize: 'clamp(10px, 1.5vw, 12px)',           // Increased min from 9px to 10px
      padding: 'clamp(6px, 1vw, 8px) clamp(16px, 3vw, 20px)',  // Better touch target
      lineHeight: '100%',
      letterSpacing: '0.02em'
    },
    // Medium: label-md typography (12px → 16px) with compact padding (matches CategoryFilter ratio)
    md: { 
      fontSize: 'clamp(12px, 1.8vw, 16px)',           // Matched to CategoryLabel/Filter max
      padding: 'clamp(6px, 1vw, 8px) clamp(16px, 2.5vw, 24px)',  // Tighter ratio like CategoryFilter
      lineHeight: '100%',
      letterSpacing: '0.02em'
    },
    // Large: label-lg typography (12px → 16px) with generous padding
    lg: { 
      fontSize: 'clamp(14px, 2vw, 16px)',             // Increased min from 12px to 14px
      padding: 'clamp(12px, 2vw, 16px) clamp(32px, 5vw, 48px)',  // Large touch target
      lineHeight: '100%',
      letterSpacing: '0.02em'
    },
  };
  
  const variantClasses = {
    blueprint: 'border-blueprint text-blueprint hover:bg-blueprint',
    marker: 'border-marker text-marker hover:bg-marker',
    meadow: 'border-meadow text-meadow hover:bg-meadow',
    sunny: 'border-sunny text-sunny hover:bg-sunny',
    black: 'border-black text-black hover:bg-black',
    'white-meadow': 'border-white text-white hover:bg-white hover:!text-meadow',
  };
  
  export default function Button({
    children,
    variant = 'blueprint',
    size = 'md',
    type = 'button',
    onClick,
    className = '',
    disabled = false,
    href,
  }: ButtonProps) {
    const buttonClasses = `
      inline-block font-mono font-mono-medium uppercase border-2 transition-colors duration-200
      text-center whitespace-nowrap
      ${variant.startsWith('white-') ? '' : 'bg-white'} hover:text-white tracking-wider
      ${variantClasses[variant]}
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      ${className}
    `;

    const buttonStyle = sizeStyles[size];

    if (href) {
      return (
        <Link href={href} className={buttonClasses} style={buttonStyle}>
          {children}
        </Link>
      );
    }

    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={buttonClasses}
        style={buttonStyle}
      >
        {children}
      </button>
    );
  }
  