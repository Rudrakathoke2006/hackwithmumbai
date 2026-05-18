import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { HOW_IT_WORKS } from '@/lib/constants';
import { staggerContainer, staggerItem } from '@/lib/utils';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Badge variant="purple" size="md" dot className="mb-5">How It Works</Badge>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-5 tracking-tight">
            Up and running in <span className="text-gradient">minutes</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            No complex setup. No infrastructure to manage. Connect, analyze, and protect — instantly.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="relative flex flex-col gap-16"
        >
          {/* Vertical connector */}
          <div className="absolute left-[2.125rem] sm:left-1/2 top-10 bottom-10 w-px
            bg-gradient-to-b from-brand-500/60 via-purple-500/40 to-transparent pointer-events-none" />

          {HOW_IT_WORKS.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={step.number}
                variants={staggerItem}
                className="relative flex sm:grid sm:grid-cols-[1fr_auto_1fr] items-center gap-6"
              >
                {/* Left content (even steps) or empty spacer */}
                <div className={isEven ? 'hidden sm:block' : 'hidden sm:flex sm:justify-end'}>
                  {!isEven && (
                    <div className="glass rounded-2xl p-6 max-w-xs border border-white/7
                      hover:border-white/14 transition-colors duration-300">
                      <h3 className="font-display font-bold text-lg text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                    </div>
                  )}
                </div>

                {/* Center: Step number */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="relative w-[4.25rem] h-[4.25rem] flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.9 }}
                      className="absolute inset-0 rounded-full bg-brand-500/20"
                    />
                    <div className="absolute inset-2 rounded-full border border-brand-500/30" />
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-purple-600
                      flex items-center justify-center shadow-glow-sm">
                      <span className="font-mono font-bold text-xs text-white">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Right content (even steps) or mobile content */}
                <div className={isEven ? 'flex-1 sm:flex-none' : 'hidden sm:block'}>
                  {(isEven || true) && (
                    <div className={`sm:max-w-xs ${!isEven ? 'hidden sm:block' : ''}`}>
                      {isEven && (
                        <div className="glass rounded-2xl p-6 border border-white/7
                          hover:border-white/14 transition-colors duration-300">
                          <h3 className="font-display font-bold text-lg text-white mb-2">{step.title}</h3>
                          <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Mobile-only content */}
                <div className="sm:hidden flex-1">
                  <div className="glass rounded-2xl p-5 border border-white/7">
                    <h3 className="font-display font-bold text-base text-white mb-1.5">{step.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
