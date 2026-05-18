import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wallet,
  Mail,
  Lock,
  ArrowRight,
  Shield,
  Zap,
  Database,
  Ghost,
  Coins,
  X,
  User,
} from 'lucide-react';
import { cn } from '@/lib/utils';

/* ─── Background Orbs ─────────────────────────────────────────────────────── */
function ModalBackground() {
  return (
    <>
      {/* Animated glowing orbs */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full bg-brand-500/20 blur-[80px] animate-pulse" />
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-purple-600/20 blur-[80px] animate-pulse"
        style={{ animationDelay: '2s' }}
      />
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(rgba(99,102,241,0.4) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Top highlight line */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </>
  );
}

/* ─── Wallet Button ───────────────────────────────────────────────────────── */
function WalletButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      id="create-connect-wallet-btn"
      className={cn(
        'w-full flex items-center justify-between px-5 py-4',
        'bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl',
        'transition-all group relative overflow-hidden',
      )}
    >
      <div className="flex items-center gap-3">
        <div className="p-2 bg-neon-blue/10 rounded-lg group-hover:bg-neon-blue/20 transition-colors">
          <Wallet className="w-5 h-5 text-neon-blue" />
        </div>
        <span className="font-semibold text-white">Connect Wallet</span>
      </div>

      <div className="flex -space-x-2">
        <div
          className="w-8 h-8 rounded-full bg-dark-700 border-2 border-dark-900 flex items-center justify-center p-1.5"
          title="MetaMask"
        >
          <Ghost className="w-full h-full text-orange-400" />
        </div>
        <div
          className="w-8 h-8 rounded-full bg-dark-700 border-2 border-dark-900 flex items-center justify-center p-1.5"
          title="WalletConnect"
        >
          <Database className="w-full h-full text-blue-400" />
        </div>
      </div>

      {/* Hover glow overlay */}
      <div className="absolute inset-0 bg-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.button>
  );
}

/* ─── Main Modal Component ────────────────────────────────────────────────── */
interface CreateAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignIn: () => void;
}

export function CreateAccountModal({ isOpen, onClose, onSwitchToSignIn }: CreateAccountModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleCreateAccount(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  }

  // Close on backdrop click
  function handleBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="create-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-dark-900/80 backdrop-blur-md"
            onClick={handleBackdropClick}
          />

          {/* Modal Panel */}
          <motion.div
            key="create-panel"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
          >
            {/* Scrollable wrapper so branding + card never clip the viewport */}
            <div className="w-full max-w-md pointer-events-auto max-h-[90vh] overflow-y-auto scrollbar-thin">

              {/* ── Branding ── */}
              <div className="flex flex-col items-center mb-8">
                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-2xl p-px mb-4 shadow-glow-md"
                  style={{
                    background: 'linear-gradient(135deg, #6366f1, #a855f7, #00d4ff)',
                  }}
                >
                  <div className="w-full h-full bg-dark-900 rounded-[14px] flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white fill-brand-500" />
                  </div>
                </motion.div>

                <h1 className="text-3xl font-display font-bold tracking-tight text-white mb-1">
                  Block<span className="text-gradient">Brute</span>
                </h1>
                <p className="text-slate-400 text-sm font-medium">
                  Join the Decentralized Future
                </p>
              </div>

              {/* ── Glass Card ── */}
              <div className="glass rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <ModalBackground />

                {/* Close button */}
                <button
                  id="create-close-btn"
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-xl text-slate-500
                    hover:text-white hover:bg-white/10 transition-all duration-200 z-10"
                  aria-label="Close create account"
                >
                  <X size={18} />
                </button>

                <div className="relative z-10 space-y-6">

                  {/* Wallet Section */}
                  <div className="space-y-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      Secure Connection
                    </p>
                    <WalletButton />
                  </div>

                  {/* Divider */}
                  <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/8" />
                    </div>
                    <div className="relative flex justify-center text-[10px] uppercase">
                      {/* Solid bg required so the border-t line doesn't show through the text */}
                      <span className="bg-[#0e1323] px-4 text-slate-500 font-bold tracking-widest">
                        or set up credentials
                      </span>
                    </div>
                  </div>

                  {/* Create Account Form */}
                  <form onSubmit={handleCreateAccount} className="space-y-4">

                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="create-name"
                        className="text-sm font-medium text-slate-300 ml-1"
                      >
                        Full Name
                      </label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-neon-blue transition-colors" />
                        <input
                          id="create-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          className={cn(
                            'w-full bg-white/5 border border-white/10 rounded-2xl',
                            'py-3.5 pl-12 pr-4 text-white placeholder:text-slate-600 font-medium',
                            'focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue/50',
                            'transition-all duration-200',
                          )}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="create-email"
                        className="text-sm font-medium text-slate-300 ml-1"
                      >
                        Email Address
                      </label>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-neon-blue transition-colors" />
                        <input
                          id="create-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@example.com"
                          className={cn(
                            'w-full bg-white/5 border border-white/10 rounded-2xl',
                            'py-3.5 pl-12 pr-4 text-white placeholder:text-slate-600 font-medium',
                            'focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue/50',
                            'transition-all duration-200',
                          )}
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="create-password"
                        className="text-sm font-medium text-slate-300 ml-1"
                      >
                        Password
                      </label>
                      <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-neon-blue transition-colors" />
                        <input
                          id="create-password"
                          type="password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••"
                          className={cn(
                            'w-full bg-white/5 border border-white/10 rounded-2xl',
                            'py-3.5 pl-12 pr-4 text-white placeholder:text-slate-600 font-medium',
                            'focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue/50',
                            'transition-all duration-200',
                          )}
                        />
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="create-confirm-password"
                        className="text-sm font-medium text-slate-300 ml-1"
                      >
                        Confirm Password
                      </label>
                      <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-neon-blue transition-colors" />
                        <input
                          id="create-confirm-password"
                          type="password"
                          required
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="••••••••"
                          className={cn(
                            'w-full bg-white/5 border border-white/10 rounded-2xl',
                            'py-3.5 pl-12 pr-4 text-white placeholder:text-slate-600 font-medium',
                            'focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue/50',
                            'transition-all duration-200',
                          )}
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      id="create-submit-btn"
                      disabled={isLoading}
                      className={cn(
                        'w-full font-display font-bold py-4 rounded-2xl text-white mt-2',
                        'bg-gradient-to-r from-neon-blue to-purple-500',
                        'shadow-glow-sm hover:shadow-glow-md transition-all duration-300',
                        'flex items-center justify-center gap-2 group',
                        'disabled:opacity-60 disabled:pointer-events-none',
                        // shimmer
                        'relative overflow-hidden',
                        'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/15 before:to-transparent',
                        'before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700',
                      )}
                    >
                      {isLoading ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Create Account
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </motion.button>
                  </form>

                  {/* Footer */}
                  <div className="text-center pt-1 pb-2">
                    <p className="text-slate-400 text-sm">
                      Already have an account?{' '}
                      <button 
                        onClick={onSwitchToSignIn}
                        className="text-white font-bold hover:text-neon-blue transition-colors underline underline-offset-4 decoration-neon-blue/30"
                      >
                        Sign In
                      </button>
                    </p>
                  </div>
                </div>
              </div>

              {/* Security Badges */}
              <div className="mt-7 flex justify-center gap-8 opacity-40 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-neon-blue" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    AES-256 Encrypted
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Coins className="w-4 h-4 text-purple-400" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Multi-Chain Verified
                  </span>
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
