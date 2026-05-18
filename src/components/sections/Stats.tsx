import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/utils';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { STATS } from '@/lib/constants';

export function Stats() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Top/bottom gradient borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-500/3 via-purple-500/4 to-neon-blue/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/6 rounded-2xl overflow-hidden"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="relative group bg-dark-800 hover:bg-dark-700
                transition-colors duration-300 p-8 flex flex-col items-center text-center"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-500/0 to-brand-500/5
                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="font-display font-black text-4xl md:text-5xl text-white mb-2
                bg-gradient-to-br from-white to-slate-300 bg-clip-text text-transparent">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix ?? ''}
                  suffix={stat.suffix}
                  decimals={stat.value % 1 !== 0 ? 1 : 0}
                  duration={2200}
                />
              </div>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
