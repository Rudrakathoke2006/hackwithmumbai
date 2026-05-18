import { type HTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeUpVariants } from '@/lib/utils';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  as?: 'section' | 'div' | 'article';
  /** Apply dot-grid background pattern */
  dotGrid?: boolean;
  /** Apply hero mesh gradient */
  heroMesh?: boolean;
  animate?: boolean;
}

export function SectionWrapper({
  className,
  id,
  as: Tag = 'section',
  dotGrid = false,
  heroMesh = false,
  animate = true,
  children,
  ...props
}: SectionWrapperProps) {
  const content = animate ? (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUpVariants}
      className="w-full"
    >
      {children}
    </motion.div>
  ) : children;

  return (
    <Tag
      id={id}
      className={cn(
        'relative w-full overflow-hidden section-pad',
        dotGrid && 'dot-grid',
        heroMesh && 'bg-hero-mesh',
        className,
      )}
      {...props}
    >
      {content}
    </Tag>
  );
}
