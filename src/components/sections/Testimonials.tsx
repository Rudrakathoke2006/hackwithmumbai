import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { TESTIMONIALS } from '@/lib/constants';
import { staggerContainer, staggerItem } from '@/lib/utils';

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/3 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="neon" size="md" dot className="mb-5">Testimonials</Badge>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-5 tracking-tight">
            Trusted by teams{' '}
            <span className="text-gradient">shipping Web3</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            From indie developers to enterprise protocols, BlockBrute is the security stack teams rely on.
          </p>
        </motion.div>

        {/* Testimonial grid */}
        <motion.div
          ref={scrollRef}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={staggerItem}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="glass rounded-2xl p-6 border border-white/7
                hover:border-white/14 transition-colors duration-300 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote size={20} className="text-brand-500/40" />

              {/* Quote text */}
              <p className="text-sm text-slate-400 leading-relaxed flex-1">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/6">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-500 to-purple-600
                  flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  {t.avatar}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold font-display text-white truncate">{t.name}</p>
                  <p className="text-xs text-slate-500 truncate">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
