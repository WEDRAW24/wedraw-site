import Link from 'next/link';

type ButtonProps = {
    children: React.ReactNode;
    variant?: 'blueprint' | 'marker' | 'meadow' | 'sunny' | 'black' | 'white-meadow';
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    href?: string;
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
    type = 'button',
    onClick,
    className = '',
    disabled = false,
    href,
  }: ButtonProps) {
    const buttonClasses = `
      button
      inline-block border-2 transition-colors duration-200
      text-center whitespace-nowrap
      ${variant.startsWith('white-') ? '' : 'bg-white'} hover:text-white
      ${variantClasses[variant]}
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      ${className}
    `;

    const buttonStyle = {
      padding: 'clamp(6px, 1vw, 8px) clamp(16px, 2.5vw, 24px)'
    };

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
  