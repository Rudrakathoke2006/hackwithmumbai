import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { GlowOrb } from '@/components/ui/GlowOrb';
import { fadeUpVariants as _fadeUp, staggerContainer, staggerItem } from '@/lib/utils';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center
        overflow-hidden bg-dark-900 pt-20"
    >
      {/* ── Background orbs ─────────────────────────────────────────────── */}
      <GlowOrb color="brand"  size="xl" blur="3xl" className="top-[-10%] left-[-10%]"  animationVariant={1} />
      <GlowOrb color="purple" size="lg" blur="3xl" className="top-[20%] right-[-5%]"   animationVariant={2} />
      <GlowOrb color="neon"   size="md" blur="2xl" className="bottom-[15%] left-[15%]" animationVariant={3} />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Subtle vignette at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48
        bg-gradient-to-t from-dark-900 to-transparent pointer-events-none" />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Announcement badge */}
          <motion.div variants={staggerItem} className="mb-8">
            <Badge variant="brand" size="md" dot className="shadow-glow-sm cursor-pointer group
              hover:shadow-glow-md transition-all duration-300">
              <Star size={11} className="fill-brand-400 text-brand-400" />
              Introducing BlockBrute v2 — Now with AI Threat Intelligence
              <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={staggerItem}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl
              leading-[1.08] tracking-tight mb-6"
          >
            <span className="text-white block">Secure Your</span>
            <span className="text-gradient block">Blockchain Future</span>
            <span className="text-white block">With Confidence</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={staggerItem}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10"
          >
            BlockBrute combines AI-powered smart contract auditing, real-time threat monitoring,
            and deep on-chain analytics — giving Web3 teams the security intelligence they need
            to ship faster and safer.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center gap-4 mb-12"
          >
            <Button variant="primary" size="xl" id="hero-primary-cta">
              Start Free — No credit card
              <ArrowRight size={18} />
            </Button>
            <Button variant="outline" size="xl" id="hero-secondary-cta">
              <Shield size={18} />
              View Live Demo
            </Button>
          </motion.div>

          {/* Social proof row */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8"
          >
            {/* Avatars */}
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['AC', 'SP', 'MV', 'PK', 'JO'].map((initials, i) => (
                  <div
                    key={initials}
                    style={{ zIndex: 5 - i }}
                    className="relative w-8 h-8 rounded-full border-2 border-dark-900
                      bg-gradient-to-br from-brand-500 to-purple-600
                      flex items-center justify-center text-[10px] font-bold text-white"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-500">Trusted by <span className="text-slate-300">12,000+</span> teams</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-white/10" />

            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-sm font-bold font-display text-white">$2.4B+</p>
                <p className="text-xs text-slate-500">Assets Secured</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold font-display text-white">150+</p>
                <p className="text-xs text-slate-500">Chains Supported</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold font-display text-white">99.9%</p>
                <p className="text-xs text-slate-500">Uptime SLA</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating hero card preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative mt-20 mx-auto max-w-2xl"
        >
          <div className="glass glow-border rounded-2xl p-px overflow-hidden
            shadow-[0_32px_80px_rgba(99,102,241,0.2)]">
            <div className="bg-dark-800/80 rounded-2xl p-4 sm:p-6">
              {/* Mock terminal / audit output */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                </div>
                <div className="flex-1 flex items-center gap-2 bg-dark-700 rounded-md px-3 py-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-xs text-slate-500">blockbrute audit — 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D</span>
                </div>
              </div>
              <div className="space-y-2 font-mono text-xs text-left">
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span className="text-slate-400">Reentrancy check</span>
                  <span className="ml-auto text-emerald-400 font-medium">PASSED</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span className="text-slate-400">Integer overflow / underflow</span>
                  <span className="ml-auto text-emerald-400 font-medium">PASSED</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-amber-400">⚠</span>
                  <span className="text-slate-400">Access control (owner)</span>
                  <span className="ml-auto text-amber-400 font-medium">WARN</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span className="text-slate-400">Flash loan resistance</span>
                  <span className="ml-auto text-emerald-400 font-medium">PASSED</span>
                </div>
                <div className="mt-3 pt-3 border-t border-white/6 flex items-center justify-between">
                  <span className="text-slate-500">Risk Score</span>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-24 bg-dark-600 rounded-full overflow-hidden">
                      <div className="h-full w-[18%] bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full" />
                    </div>
                    <span className="text-emerald-400 font-bold">18 / 100</span>
                    <Badge variant="success" size="sm">Low Risk</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge on card */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-4 -right-4 sm:-right-8 glass rounded-xl px-3 py-2
              border border-brand-500/30 shadow-glow-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-500 to-purple-600
                flex items-center justify-center">
                <Shield size={12} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-bold font-display text-white">Audit Complete</p>
                <p className="text-[10px] text-slate-500">3.2s scan time</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} className="text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
