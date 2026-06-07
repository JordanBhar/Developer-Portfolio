import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles =
      'font-medium rounded-lg transition-all duration-300 cursor-pointer font-sans';

    const variants = {
      primary:
        'bg-gradient-to-r from-accent-teal to-accent-cyan text-white hover:shadow-lg hover:shadow-teal-500/50 active:scale-95',
      secondary:
        'border border-accent-teal/30 text-accent-teal hover:border-accent-teal hover:bg-accent-teal/10',
      ghost: 'text-accent-teal hover:text-accent-cyan hover:bg-accent-teal/10',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
