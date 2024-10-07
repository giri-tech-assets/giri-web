import React from 'react';
import { Link } from 'gatsby';

interface ButtonProps {
  text: string;
  variant: 'primary' | 'secondary' | 'accent';
  to?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, variant = 'accent', to="/#newsletter", className = '' }) => {
  const color: Record<ButtonProps['variant'], string> = {
    primary: 'bg-blue-950',
    secondary: 'bg-gray-900',
    accent: 'bg-yellow-400'
  };

  const textColor = variant === 'primary' ? 'text-white' : 'text-gray-900';

  const buttonClasses = `
    inline-flex overflow-hidden gap-2 justify-center items-center
    px-7 py-2 mt-8 ${color[variant]} rounded-2xl
    shadow-[8px_24px_35px_rgba(253,195,46,0.15)] max-md:px-5
    w-fit ${className}
  `.trim();

  const content = (
    <span className={`self-stretch my-auto text-lg font-medium leading-loose ${textColor} font-semibold whitespace-nowrap`}>
      {text}
    </span>
  );

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={buttonClasses}>
      {content}
    </button>
  );
};

export default Button;
