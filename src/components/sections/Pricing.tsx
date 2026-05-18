import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { cn, staggerContainer, staggerItem } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { GlowOrb } from '@/components/ui/GlowOrb';
import { PRICING_PLANS } from '@/lib/constants';

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 overflow-hidden">
      <GlowOrb color="brand"  size="lg" blur="3xl" className="top-1/4 left-[-5%]"   animate animationVariant={1} />
      <GlowOrb color="purple" size="md" blur="3xl" className="bottom-1/4 right-[-5%]" animate animationVariant={2} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="brand" size="md" dot className="mb-5">Pricing</Badge>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-5 tracking-tight">
            Simple, <span className="text-gradient">transparent</span> pricing
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Start free and scale as you grow. No hidden fees, no surprise charges.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {PRICING_PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              variants={staggerItem}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className={cn(
                'relative rounded-2xl p-px overflow-hidden',
                plan.highlight
                  ? 'bg-gradient-to-b from-brand-500 via-purple-500 to-brand-500/30 shadow-glow-lg'
                  : 'bg-white/6',
              )}
            >
              <div className={cn(
                'relative h-full rounded-[15px] p-7 flex flex-col',
                plan.highlight ? 'bg-dark-800' : 'bg-dark-800/80',
              )}>
                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge variant="brand" size="sm" dot className="shadow-glow-sm whitespace-nowrap">
                      <Zap size={10} fill="currentColor" />
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                {/* Plan name + description */}
                <div className="mb-6">
                  <h3 className="font-display font-bold text-xl text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="flex items-end gap-1 mb-7">
                  <span className={cn(
                    'font-display font-black text-5xl tracking-tight',
                    plan.highlight ? 'text-gradient' : 'text-white',
                  )}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-slate-500 mb-2 text-sm">{plan.period}</span>
                  )}
                </div>

                {/* Feature list */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={cn(
                        'w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5',
                        plan.highlight ? 'bg-brand-500/20 text-brand-400' : 'bg-white/8 text-slate-400',
                      )}>
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span className="text-sm text-slate-400">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.highlight ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                  id={`pricing-cta-${plan.name.toLowerCase()}`}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-slate-600 mt-8"
        >
          All plans include a 14-day free trial. No credit card required to start.
        </motion.p>
      </div>
    </section>
  );
}
