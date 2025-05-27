type ButtonProps = {
    children: React.ReactNode;
    variant?: 'blueprint' | 'marker' | 'meadow' | 'sunny' | 'black';
    size?: 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
  };
  
  const sizeClasses = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-6 py-3',
    lg: 'text-base px-8 py-4',
  };
  
  const variantClasses = {
    blueprint: 'border-blueprint text-blueprint hover:bg-blueprint',
    marker: 'border-marker text-marker hover:bg-marker',
    meadow: 'border-meadow text-meadow hover:bg-meadow',
    sunny: 'border-sunny text-sunny hover:bg-sunny',
    black: 'border-black text-black hover:bg-black',
  };
  
  export default function Button({
    children,
    variant = 'blueprint',
    size = 'md',
    type = 'button',
    onClick,
    className = '',
    disabled = false,
  }: ButtonProps) {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`
          font-mono uppercase border-2 transition-colors duration-200
          bg-white hover:text-white
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          ${className}
        `}
      >
        {children}
      </button>
    );
  }
  