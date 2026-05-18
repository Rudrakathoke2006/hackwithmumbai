import { motion } from 'framer-motion';
import { cn, staggerContainer, staggerItem } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import { GlowOrb } from '@/components/ui/GlowOrb';
import { FEATURES } from '@/lib/constants';

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      <GlowOrb color="brand"  size="lg" blur="3xl" className="top-1/4 right-[-8%]"  animate animationVariant={2} />
      <GlowOrb color="purple" size="md" blur="3xl" className="bottom-1/4 left-[-5%]" animate animationVariant={1} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <Badge variant="brand" size="md" dot className="mb-5">Platform Features</Badge>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-5 tracking-tight">
            Everything you need to{' '}
            <span className="text-gradient">ship secure</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From automated audits to live threat intelligence, BlockBrute gives your team
            complete visibility and control over your on-chain security posture.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                className={cn(
                  'group relative rounded-2xl p-6 overflow-hidden',
                  'border transition-all duration-300 cursor-default',
                  feature.highlight
                    ? 'border-brand-500/30 bg-gradient-to-br from-brand-500/8 to-purple-500/6 hover:border-brand-500/50'
                    : 'border-white/7 bg-white/3 hover:border-white/14 hover:bg-white/5',
                  'hover:-translate-y-1.5 hover:shadow-glass-lg',
                  // Make first and last highlighted cards span wider on lg
                  i === 0 && 'lg:col-span-1',
                )}
              >
                {/* Hover glow overlay */}
                <div className={cn(
                  'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                  feature.highlight
                    ? 'bg-gradient-to-br from-brand-500/8 to-purple-600/6'
                    : 'bg-gradient-to-br from-white/3 to-transparent',
                )} />

                {/* Feature tag */}
                {feature.tag && (
                  <Badge
                    variant={feature.highlight ? 'brand' : 'neon'}
                    size="sm"
                    dot
                    className="mb-4"
                  >
                    {feature.tag}
                  </Badge>
                )}

                {/* Icon */}
                <div className={cn(
                  'w-11 h-11 rounded-xl flex items-center justify-center mb-5',
                  'transition-all duration-300',
                  feature.highlight
                    ? 'bg-brand-500/15 text-brand-400 group-hover:bg-brand-500/25 group-hover:shadow-glow-sm'
                    : 'bg-white/7 text-slate-300 group-hover:bg-white/12',
                )}>
                  <Icon size={22} />
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.description}
                </p>

                {/* Subtle corner decoration on highlighted cards */}
                {feature.highlight && (
                  <div className="absolute top-0 right-0 w-20 h-20
                    bg-gradient-radial from-brand-500/20 to-transparent
                    rounded-full -translate-y-10 translate-x-10 pointer-events-none" />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
