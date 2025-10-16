type ButtonProps = {
    children: React.ReactNode;
    variant?: 'blueprint' | 'marker' | 'meadow' | 'sunny' | 'black' | 'white-meadow';
    size?: 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
  };
  
  const sizeClasses = {
    sm: 'text-sm px-6 py-1.5',
    md: 'text-[16px] px-8 py-2',
    lg: 'text-lg px-12 py-3',
  };
  
  const variantClasses = {
    blueprint: 'border-blueprint text-blueprint hover:bg-blueprint',
    marker: 'border-marker text-marker hover:bg-marker',
    meadow: 'border-meadow text-meadow hover:bg-meadow',
    sunny: 'border-sunny text-sunny hover:bg-sunny',
    black: 'border-black text-black hover:bg-black',
    'white-meadow': 'border-white text-white hover:bg-white hover:text-meadow',
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
          font-mono font-mono-medium uppercase border-2 transition-colors duration-200
          ${variant.startsWith('white-') ? '' : 'bg-white'} hover:text-white tracking-wider
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
  