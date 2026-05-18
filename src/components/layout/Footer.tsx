import { Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FOOTER_LINKS, SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-dark-800 border-t border-white/6 overflow-hidden">

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64
        bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">

        {/* Top grid: brand + links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-14">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 max-w-xs">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg
                bg-gradient-to-br from-brand-500 to-purple-600 shadow-glow-sm
                group-hover:shadow-glow-md transition-all duration-300">
                <Zap size={16} className="text-white" fill="white" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight">
                Block<span className="text-gradient">Brute</span>
              </span>
            </a>
            <p className="text-sm text-slate-500 leading-relaxed mb-5">
              Enterprise-grade blockchain security and analytics for the next generation of Web3.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={cn(
                    'w-9 h-9 flex items-center justify-center rounded-lg',
                    'bg-white/5 border border-white/8 text-slate-400',
                    'hover:text-white hover:bg-white/8 hover:border-white/14',
                    'transition-all duration-200',
                  )}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {(Object.entries(FOOTER_LINKS) as [string, readonly string[]][]).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-display font-semibold text-sm text-white mb-4 tracking-wide uppercase">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 text-center sm:text-left">
            © {year} BlockBrute, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] animate-pulse" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
