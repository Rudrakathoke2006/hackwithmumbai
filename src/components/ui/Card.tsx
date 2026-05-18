import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'solid' | 'bordered' | 'glow';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card({
  className,
  variant = 'glass',
  hover = true,
  padding = 'md',
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl transition-all duration-300',

        // Variants
        variant === 'glass' && [
          'glass',
          hover && 'glass-hover',
        ],
        variant === 'solid' && [
          'bg-dark-700 border border-dark-500',
          hover && 'hover:border-dark-400 hover:-translate-y-1',
        ],
        variant === 'bordered' && [
          'bg-transparent border border-white/8',
          hover && 'hover:border-white/15 hover:bg-white/3 hover:-translate-y-1',
        ],
        variant === 'glow' && [
          'glass glow-border',
          hover && 'hover:-translate-y-2 hover:shadow-glow-md',
        ],

        // Padding
        padding === 'none' && 'p-0',
        padding === 'sm'   && 'p-4',
        padding === 'md'   && 'p-6',
        padding === 'lg'   && 'p-8',

        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
