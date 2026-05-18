import {
  Shield, Zap, Eye, Lock, BarChart3, Globe,
  ExternalLink, Code2, Link2, MessageCircle, type LucideIcon,
} from 'lucide-react';

/* ─── Navigation ──────────────────────────────────────────────────────────── */
export const NAV_LINKS = [
  { label: 'Features',    href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing',     href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
] as const;

/* ─── Stats ───────────────────────────────────────────────────────────────── */
export interface Stat {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

export const STATS: Stat[] = [
  { value: 2.4,  suffix: 'B+', label: 'Assets Secured',    prefix: '$' },
  { value: 12,   suffix: 'K+', label: 'Active Users'                    },
  { value: 99.9, suffix: '%',  label: 'Platform Uptime'                 },
  { value: 150,  suffix: '+',  label: 'Chains Supported'                },
];

/* ─── Features ────────────────────────────────────────────────────────────── */
export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  tag?: string;
  highlight?: boolean;
}

export const FEATURES: Feature[] = [
  {
    icon: Shield,
    title: 'Smart Contract Auditing',
    description: 'Automated vulnerability scanning with AI-powered analysis across 200+ attack vectors. Get audit reports in minutes, not weeks.',
    tag: 'Core',
    highlight: true,
  },
  {
    icon: Zap,
    title: 'Real-Time Threat Detection',
    description: 'Monitor on-chain activity 24/7 with millisecond alerting. Detect rug pulls, flash loan attacks, and anomalous behavior before they impact your protocol.',
    tag: 'Live',
  },
  {
    icon: Eye,
    title: 'Blockchain Analytics',
    description: 'Deep-dive transaction analytics with wallet profiling, flow tracking, and DeFi protocol intelligence across 150+ EVM chains.',
  },
  {
    icon: Lock,
    title: 'Wallet Security Suite',
    description: 'Enterprise-grade wallet hardening with multi-sig management, hardware key integration, and phishing protection for your entire organization.',
  },
  {
    icon: BarChart3,
    title: 'Risk Scoring Engine',
    description: 'Proprietary risk models trained on 5 years of on-chain data. Score any address, token, or protocol in real-time with confidence intervals.',
    highlight: true,
  },
  {
    icon: Globe,
    title: 'Cross-Chain Intelligence',
    description: 'Unified visibility across Ethereum, Solana, BNB Chain, Polygon, and 140+ more. Bridge monitoring, cross-chain flow analysis, and unified dashboards.',
  },
];

/* ─── How It Works ────────────────────────────────────────────────────────── */
export interface Step {
  number: string;
  title: string;
  description: string;
}

export const HOW_IT_WORKS: Step[] = [
  {
    number: '01',
    title: 'Connect Your Protocol',
    description: 'Paste your contract address or integrate via our REST API or SDK. BlockBrute instantly scans and indexes your on-chain footprint.',
  },
  {
    number: '02',
    title: 'AI-Powered Analysis',
    description: 'Our multi-model AI engine runs 200+ vulnerability checks, anomaly detection, and comparative risk benchmarking across the entire ecosystem.',
  },
  {
    number: '03',
    title: 'Act on Intelligence',
    description: 'Receive actionable audit reports, real-time threat alerts via Slack/webhook, and live dashboards — with one-click remediation playbooks.',
  },
];

/* ─── Testimonials ────────────────────────────────────────────────────────── */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "BlockBrute caught a re-entrancy vulnerability in our lending contract 6 hours before mainnet launch. It saved us from what could have been an 8-figure exploit.",
    name: 'Alex Chen',
    role: 'CTO',
    company: 'Nexus Finance',
    avatar: 'AC',
  },
  {
    quote: "The real-time threat monitoring is a game-changer. We get Slack alerts within 3 seconds of any suspicious activity. Our security posture improved overnight.",
    name: 'Sarah Park',
    role: 'Head of Security',
    company: 'Meridian DAO',
    avatar: 'SP',
  },
  {
    quote: "We audited 40+ protocols using BlockBrute and the accuracy of their risk scoring is unmatched. It's become our standard security stack.",
    name: 'Marco Villa',
    role: 'Lead Auditor',
    company: 'ChainSafe Labs',
    avatar: 'MV',
  },
  {
    quote: "Cross-chain analytics used to require 5 different tools. BlockBrute replaced them all with a single unified interface. Our analysts are 3x more productive.",
    name: 'Priya Kumar',
    role: 'DeFi Analyst',
    company: 'Vertex Protocol',
    avatar: 'PK',
  },
  {
    quote: "The onboarding took 10 minutes. Full API integration took an afternoon. The ROI from the first month alone justified our enterprise subscription.",
    name: 'James O\'Brien',
    role: 'Founder',
    company: 'ArcShield',
    avatar: 'JO',
  },
  {
    quote: "BlockBrute's wallet intelligence helped us block $2.4M in suspicious withdrawals from flagged addresses. Essential for any serious protocol.",
    name: 'Ling Wei',
    role: 'VP Engineering',
    company: 'Orion Exchange',
    avatar: 'LW',
  },
];

/* ─── Pricing ─────────────────────────────────────────────────────────────── */
export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  badge?: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'Perfect for indie developers and small protocols getting started with Web3 security.',
    features: [
      '5 contract audits / month',
      'Basic threat alerts',
      '3 chains supported',
      'Email notifications',
      'Community support',
      '7-day data retention',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Pro',
    price: '$199',
    period: '/month',
    description: 'The complete security stack for growing DeFi protocols and Web3 teams.',
    features: [
      'Unlimited contract audits',
      'Real-time threat monitoring',
      '50 chains supported',
      'Slack + webhook alerts',
      'Risk scoring API',
      'Priority support',
      '90-day data retention',
      'Custom alert rules',
    ],
    cta: 'Get Started',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Custom security infrastructure for large protocols, DAOs, and institutional teams.',
    features: [
      'Everything in Pro',
      'All 150+ chains',
      'Dedicated security analyst',
      'Custom AI model training',
      'SLA guarantees (99.9%)',
      'On-premise deployment',
      'Unlimited data retention',
      'White-label reporting',
    ],
    cta: 'Contact Sales',
  },
];

/* ─── Social Links ────────────────────────────────────────────────────────── */
export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: ExternalLink,  href: '#', label: 'Twitter'  },
  { icon: Code2,         href: '#', label: 'GitHub'   },
  { icon: Link2,         href: '#', label: 'LinkedIn' },
  { icon: MessageCircle, href: '#', label: 'Discord'  },
];

/* ─── Footer Links ────────────────────────────────────────────────────────── */
export const FOOTER_LINKS = {
  Product:  ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Status'],
  Company:  ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Developers: ['Documentation', 'API Reference', 'SDK', 'GitHub', 'Status Page'],
  Legal:    ['Privacy Policy', 'Terms of Service', 'Security', 'Cookie Policy'],
} as const;

/* ─── Chain logos (text placeholders) ────────────────────────────────────── */
export const SUPPORTED_CHAINS = [
  'Ethereum', 'Solana', 'BNB Chain', 'Polygon', 'Arbitrum',
  'Optimism', 'Avalanche', 'Base', 'zkSync', 'Starknet',
];
