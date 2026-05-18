import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'brand' | 'neon' | 'purple' | 'success' | 'warning';
  size?: 'sm' | 'md';
  dot?: boolean;
}

export function Badge({
  className,
  variant = 'default',
  size = 'sm',
  dot = false,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-medium font-display',
        'border backdrop-blur-sm transition-all duration-200',

        // Variants
        variant === 'default' && 'bg-white/5 border-white/10 text-slate-300',
        variant === 'brand'   && 'bg-brand-500/10 border-brand-500/30 text-brand-300',
        variant === 'neon'    && 'bg-neon-blue/10 border-neon-blue/30 text-neon-blue',
        variant === 'purple'  && 'bg-purple-500/10 border-purple-500/30 text-purple-300',
        variant === 'success' && 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
        variant === 'warning' && 'bg-amber-500/10 border-amber-500/30 text-amber-400',

        // Sizes
        size === 'sm' && 'text-xs px-2.5 py-0.5',
        size === 'md' && 'text-sm px-3.5 py-1',

        className,
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full',
            variant === 'default' && 'bg-slate-400',
            variant === 'brand'   && 'bg-brand-400 shadow-[0_0_6px_rgba(99,102,241,0.8)]',
            variant === 'neon'    && 'bg-neon-blue shadow-[0_0_6px_rgba(0,212,255,0.8)]',
            variant === 'purple'  && 'bg-purple-400 shadow-[0_0_6px_rgba(168,85,247,0.8)]',
            variant === 'success' && 'bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]',
            variant === 'warning' && 'bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.8)]',
          )}
        />
      )}
      {children}
    </span>
  );
}
