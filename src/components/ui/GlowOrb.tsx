import { cn } from '@/lib/utils';

interface GlowOrbProps {
  className?: string;
  color?: 'brand' | 'purple' | 'neon' | 'pink';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Extra blur for softer glow */
  blur?: 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  animate?: boolean;
  animationVariant?: 1 | 2 | 3;
}

/** Decorative background glow orb — fully accessible (aria-hidden) */
export function GlowOrb({
  className,
  color = 'brand',
  size = 'md',
  blur = '3xl',
  animate = true,
  animationVariant = 1,
}: GlowOrbProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'absolute rounded-full opacity-20 pointer-events-none select-none',
        'will-change-transform',

        // Colors
        color === 'brand'  && 'bg-brand-500',
        color === 'purple' && 'bg-purple-500',
        color === 'neon'   && 'bg-neon-blue',
        color === 'pink'   && 'bg-neon-pink',

        // Sizes
        size === 'sm' && 'w-32 h-32',
        size === 'md' && 'w-64 h-64',
        size === 'lg' && 'w-96 h-96',
        size === 'xl' && 'w-[600px] h-[600px]',

        // Blur
        blur === 'md'  && 'blur-md',
        blur === 'lg'  && 'blur-lg',
        blur === 'xl'  && 'blur-xl',
        blur === '2xl' && 'blur-2xl',
        blur === '3xl' && 'blur-3xl',

        // Animations
        animate && animationVariant === 1 && 'animate-orb-1',
        animate && animationVariant === 2 && 'animate-orb-2',
        animate && animationVariant === 3 && 'animate-orb-3',

        className,
      )}
    />
  );
}
