import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { SignInModal } from '@/components/ui/SignInModal';
import { CreateAccountModal } from '@/components/ui/CreateAccountModal';
import { NAV_LINKS } from '@/lib/constants';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export function Navbar() {
  const scrollY = useScrollPosition();
  const [menuOpen, setMenuOpen]     = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [createAccountOpen, setCreateAccountOpen] = useState(false);
  const scrolled = scrollY > 20;

  // Close menu on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  function handleNavClick(href: string) {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-dark-900/80 backdrop-blur-xl border-b border-white/6 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'bg-transparent border-b border-transparent',
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">

            {/* Logo */}
            <a
              href="#"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2.5 group flex-shrink-0"
              aria-label="BlockBrute home"
            >
              <div className="relative w-8 h-8 flex items-center justify-center rounded-lg
                bg-gradient-to-br from-brand-500 to-purple-600 shadow-glow-sm
                group-hover:shadow-glow-md transition-all duration-300">
                <Zap size={16} className="text-white" fill="white" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight">
                Block<span className="text-gradient">Brute</span>
              </span>
            </a>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm font-medium text-slate-400 rounded-lg
                    hover:text-white hover:bg-white/5 transition-all duration-200
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                id="navbar-signin-btn"
                onClick={() => setSignInOpen(true)}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
              >
                Sign In
              </button>
              <Button 
                size="sm" 
                variant="primary"
                onClick={() => setCreateAccountOpen(true)}
              >
                Get Started Free
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-toggle"
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white
                hover:bg-white/5 transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-dark-900/90 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              key="panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw]
                bg-dark-800 border-l border-white/6 shadow-2xl md:hidden
                flex flex-col"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between p-5 border-b border-white/6">
                <span className="font-display font-bold text-lg">
                  Block<span className="text-gradient">Brute</span>
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-1 p-4 flex-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-3 text-base font-medium text-slate-300
                      rounded-xl hover:text-white hover:bg-white/5 transition-all duration-200"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              {/* Mobile CTAs */}
              <div className="p-4 pt-0 flex flex-col gap-3 border-t border-white/6">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={() => { setMenuOpen(false); setSignInOpen(true); }}
                >
                  Sign In
                </Button>
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-full"
                  onClick={() => { setMenuOpen(false); setCreateAccountOpen(true); }}
                >
                  Get Started Free
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Sign-In Modal */}
      <SignInModal 
        isOpen={signInOpen} 
        onClose={() => setSignInOpen(false)} 
        onSwitchToSignUp={() => { setSignInOpen(false); setCreateAccountOpen(true); }}
      />
      
      {/* Create Account Modal */}
      <CreateAccountModal
        isOpen={createAccountOpen}
        onClose={() => setCreateAccountOpen(false)}
        onSwitchToSignIn={() => { setCreateAccountOpen(false); setSignInOpen(true); }}
      />
    </>
  );
}
