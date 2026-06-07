import React from 'react';
import { cn } from '../../utils/cn';

interface GlassContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
  interactive?: boolean;
}

export const GlassContainer = React.forwardRef<
  HTMLDivElement,
  GlassContainerProps
>(({ className, glow = false, interactive = false, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'glass rounded-lg p-6 transition-all duration-300',
        glow && 'glow-container',
        interactive && 'hover:shadow-lg',
        className
      )}
      {...props}
    />
  );
});

GlassContainer.displayName = 'GlassContainer';
