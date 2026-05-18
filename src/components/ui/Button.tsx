import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'neon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'relative inline-flex items-center justify-center gap-2 font-semibold font-display',
          'rounded-xl transition-all duration-300 ease-out cursor-pointer',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900',
          'disabled:pointer-events-none disabled:opacity-50 select-none',
          'overflow-hidden',

          // Variants
          variant === 'primary' && [
            'bg-gradient-to-r from-brand-500 via-brand-600 to-purple-600',
            'text-white shadow-glow-sm',
            'hover:shadow-glow-md hover:scale-[1.02] hover:brightness-110',
            'active:scale-[0.98]',
            // Shimmer overlay on hover
            'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/15 before:to-transparent',
            'before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700',
          ],
          variant === 'outline' && [
            'glass text-white border border-white/10',
            'hover:border-white/20 hover:bg-white/7 hover:shadow-glass',
            'active:scale-[0.98]',
          ],
          variant === 'ghost' && [
            'text-slate-300 bg-transparent',
            'hover:text-white hover:bg-white/6',
            'active:scale-[0.98]',
          ],
          variant === 'neon' && [
            'bg-transparent text-neon-blue border border-neon-blue/40',
            'shadow-[0_0_16px_rgba(0,212,255,0.15)]',
            'hover:bg-neon-blue/10 hover:border-neon-blue/70 hover:shadow-glow-blue',
            'active:scale-[0.98]',
          ],

          // Sizes
          size === 'sm'  && 'text-xs px-3.5 py-1.5 gap-1.5',
          size === 'md'  && 'text-sm px-5 py-2.5',
          size === 'lg'  && 'text-base px-7 py-3.5',
          size === 'xl'  && 'text-lg px-9 py-4',

          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export { Button };
