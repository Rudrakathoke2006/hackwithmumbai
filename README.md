# SkillPass

> "The only Web3 certification platform where beginners can earn blockchain credentials without touching ETH."

![Demo](./docs/demo.gif) — Add your demo GIF here

---

## Problem / Solution

Most Web3 skill platforms require users to already understand wallets, gas fees, and testnets before they can prove they understand wallets, gas fees, and testnets. The onboarding friction is the exact problem the platform is supposed to solve. Learners drop off before they ever earn a credential.

SkillPass removes every barrier between learning and proof. Users connect MetaMask, answer a challenge, get AI-verified by Gemini 1.5 Flash, and mint a tamper-proof ERC-721 badge on Base Sepolia — without paying a single wei. Gas is sponsored by UGF (Universal Gas Framework). The badge lives in their wallet forever, verifiable by anyone at a public URL, shareable as a PNG achievement card, and portable across every Web3 app.

---

> **What makes SkillPass different from 1000 other teams solving the same problem:**
>
> 1. **AI Personalized Learning Path** — When you fail, Gemini generates a 3-step custom study plan based on your specific weak areas. Not generic advice. Actionable steps with time estimates.
> 2. **Real-time AI Hint System** — Socratic hints that guide your thinking without giving away the answer. Streamed token-by-token.
> 3. **Shareable Achievement Card Generator** — Canvas-based PNG cards (800×400) with tier color, score ring, and verify URL. Download or copy to clipboard for Twitter/LinkedIn.
> 4. **Adaptive Challenge Recommendation** — Gemini analyzes your performance history and recommends the single best next challenge for your skill level.
> 5. **On-Chain Reputation Passport** — `/passport/:wallet` — a public learner profile with reputation tier (Newcomer → Expert), progress bar, badge timeline, and skills map. The LinkedIn for Web3 skills.

---

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | TanStack Start + React 19, TanStack Router (file-based) |
| Styling | Tailwind CSS v4, Framer Motion, Cormorant Garamond + DM Sans + JetBrains Mono |
| UI | Radix UI primitives, custom components |
| Backend | Express.js, ethers.js v6, Helmet, express-rate-limit |
| AI | Google Gemini 1.5 Flash (keyword fallback when unavailable) |
| Blockchain | Base Sepolia (ERC-721), UGF for gasless transactions |
| Build | Vite 7, Cloudflare Workers (wrangler) |

---

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Browser (React 19)                    │
│  TanStack Router · WalletContext · UgfContext            │
└──────────────────────┬──────────────────────────────────┘
                       │ fetch (30s timeout)
┌──────────────────────▼──────────────────────────────────┐
│              Express API (port 3001)                     │
│  Rate limiting · Helmet · CORS · Async error handler     │
│                                                          │
│  /api/verify-answer  →  Gemini 1.5 Flash                 │
│  /api/hint           →  Gemini (Socratic)                │
│  /api/learning-path  →  Gemini (personalized)            │
│  /api/mint-badge     →  UGF quote                        │
│  /api/confirm-mint   →  UGF settle → mintOnChain         │
│  /api/passport/:w    →  Local store aggregation          │
└──────────┬───────────────────────┬──────────────────────┘
           │                       │
┌──────────▼──────────┐  ┌────────▼────────────────────┐
│  data/store.json    │  │  Base Sepolia RPC            │
│  (local fallback)   │  │  SkillPass ERC-721 contract  │
└─────────────────────┘  └─────────────────────────────┘
```

---

## Prerequisites

- Node.js 18+
- MetaMask browser extension
- Base Sepolia added to MetaMask (chain ID 84532, RPC: https://sepolia.base.org)
- Google Gemini API key (free tier works): https://aistudio.google.com/app/apikey
- UGF testnet API key: https://tychilabs.com

---

## Setup

```bash
# 1. Clone
git clone <repo-url> && cd skillpass

# 2. Install frontend deps
npm install

# 3. Install backend deps
npm install --prefix backend

# 4. Configure environment
cp .env.example .env
# Edit .env — fill in VITE_BACKEND_URL, VITE_CONTRACT_ADDRESS

cp .env.example backend/.env
# Edit backend/.env — fill in GEMINI_API_KEY, UGF_API_KEY, CONTRACT_ADDRESS, RPC_URL

# 5. (Optional) Deploy contract to Base Sepolia
#    Requires hardhat + funded wallet
node scripts/deploy.js

# 6. Start backend
npm run dev --prefix backend

# 7. Start frontend (separate terminal)
npm run dev:web

# Frontend: http://localhost:5173
# Backend:  http://localhost:3001
```

---

## Getting Mock USD from UGF faucet

1. Go to https://tychilabs.com and connect your wallet
2. Navigate to the faucet section
3. Request Mock USD — it funds minting fees (no real crypto involved)
4. Mock USD appears in your UGF balance automatically

---

## API endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Status check |
| GET | `/api/challenges` | All 8 challenges |
| POST | `/api/verify-answer` | AI verification `{ challengeId, userAnswer, walletAddress }` |
| POST | `/api/hint` | Socratic hint `{ challengeId }` |
| POST | `/api/learning-path` | Personalized study plan `{ challengeId, score, weakAreas }` |
| POST | `/api/adaptive-challenge` | Next challenge recommendation `{ wallet }` |
| GET | `/api/claimed/:wallet/:id` | Check claim status |
| POST | `/api/mint-badge` | Get UGF quote `{ walletAddress, challengeId, score, tier }` |
| POST | `/api/confirm-mint` | Settle and mint `{ quoteId, walletAddress }` |
| GET | `/api/leaderboard` | Top 10 by reputation |
| GET | `/api/user/:wallet/badges` | User badges + reputation |
| GET | `/api/passport/:wallet` | Full learner profile |
| GET | `/api/verify/:tokenId` | Public badge verification |
| GET | `/api/metadata/:tokenId` | ERC-721 metadata |
| POST | `/api/contact` | Contact form |

Rate limits: 10/min on verify, 5/min on mint endpoints.

---

## Folder structure

```
├── backend/
│   ├── constants/
│   │   ├── abi.json          # ERC-721 ABI
│   │   └── challenges.js     # 8 challenge definitions
│   ├── data/store.json       # Local badge + quote persistence
│   ├── lib/
│   │   ├── contract.js       # ethers.js v6 helpers
│   │   ├── logger.js         # Timestamped logger
│   │   ├── poll.js           # Tx receipt polling
│   │   ├── store.js          # JSON store operations
│   │   └── verify.js         # Gemini AI + fallback + learning path
│   └── server.js             # Express API
├── contracts/SkillPass.sol   # ERC-721 contract
├── scripts/
│   ├── check-env.js          # Env validation
│   └── deploy.js             # Hardhat deployment
├── src/
│   ├── components/layout/    # Navbar, Footer, AppLayout
│   ├── components/sections/  # Hero, Features, HowItWorks, FAQ
│   ├── components/ui/        # Button, Badge, Toast, etc.
│   ├── constants/            # Frontend challenges + ABI
│   ├── context/              # WalletContext, UgfContext
│   ├── pages/                # All page components
│   ├── routes/               # TanStack Router file routes
│   └── utils/                # api.js, wallet.js, contract.js
└── .env.example
```

---

## Demo flow (for judges)

1. Open http://localhost:5173
2. Click "Connect wallet" — MetaMask prompts, auto-switches to Base Sepolia
3. Go to /challenges — see the adaptive recommendation card at top (after first badge)
4. Open "What is a Smart Contract?" — click "Get AI hint" for a Socratic nudge
5. Write your answer (50+ chars) and click "Submit Answer"
6. Watch the score count up from 0 to your score with animated bar
7. See strengths/improvements breakdown from Gemini
8. If failed: see the 3-step personalized learning path
9. If passed: click "Claim Badge" → confirm the Mock USD fee → badge mints
10. Go to /dashboard — see your badge with Download/Share card buttons
11. Click "Share" — generates an 800×400 PNG achievement card
12. Go to /leaderboard — click any wallet address → /passport/:wallet
13. See the full reputation passport with tier, progress bar, badge timeline

---

## Future scope

- Cross-chain badge minting on Optimism and Arbitrum
- Employer verification API — query any wallet's skill passport programmatically
- Organization profiles — bootcamps and teams issue custom skill tracks
