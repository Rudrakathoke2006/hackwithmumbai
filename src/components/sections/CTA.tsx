import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Shield } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { GlowOrb } from '@/components/ui/GlowOrb';

export function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Ambient orbs */}
      <GlowOrb color="brand"  size="xl" blur="3xl" className="top-[-20%] left-[10%]"  animate animationVariant={1} />
      <GlowOrb color="purple" size="lg" blur="3xl" className="bottom-[-20%] right-[10%]" animate animationVariant={2} />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-8 rounded-2xl
            bg-gradient-to-br from-brand-500 to-purple-600
            flex items-center justify-center shadow-glow-lg">
            <Shield size={28} className="text-white" />
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            text-white mb-6 tracking-tight leading-tight">
            Start securing your
            <br />
            <span className="text-gradient">protocol today</span>
          </h2>

          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10">
            Join 12,000+ Web3 teams using BlockBrute to ship securely.
            First 14 days free — no credit card, no commitment.
          </p>

          {/* Email form */}
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md mx-auto mb-6"
            >
              <div className="flex-1 relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                <input
                  id="cta-email-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@protocol.xyz"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl text-sm
                    bg-white/5 border border-white/10 text-white placeholder:text-slate-600
                    focus:outline-none focus:border-brand-500/60 focus:bg-white/7
                    transition-all duration-200"
                />
              </div>
              <Button type="submit" variant="primary" size="md" id="cta-submit-btn">
                Get Started <ArrowRight size={16} />
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-xl px-6 py-4 max-w-md mx-auto mb-6 border border-emerald-500/30"
            >
              <p className="text-emerald-400 font-medium text-sm">
                🎉 You're in! Check your inbox for your free trial link.
              </p>
            </motion.div>
          )}

          <p className="text-xs text-slate-600">
            By signing up, you agree to our{' '}
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors underline underline-offset-2">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors underline underline-offset-2">
              Privacy Policy
            </a>.
          </p>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-14"
        >
          {[
            { label: 'SOC 2 Type II', icon: '🔒' },
            { label: 'GDPR Compliant', icon: '🛡️' },
            { label: '99.9% Uptime SLA', icon: '⚡' },
            { label: 'ISO 27001', icon: '✅' },
          ].map((badge) => (
            <div key={badge.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full
                bg-white/4 border border-white/8 text-xs text-slate-500">
              <span>{badge.icon}</span>
              <span>{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
