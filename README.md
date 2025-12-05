# Predixio – The #1 Real-Time Prediction Markets Dashboard (2025)

**Live Site →** https://predixio.com  
**Deploy instantly →** [Vercel](https://vercel.com/new/clone?repository-url=https://github.com/mamba78/predixio) | [Railway](https://railway.app/new)

The fastest, most beautiful, and most advanced prediction market aggregator ever built.

No backend. No database. Zero maintenance. Pure Next.js + Tailwind + Vercel.

---

### Features

| Feature                        | Status | Description |
|-------------------------------|--------|-------------|
| Real-time Polymarket data     | Yes    | Live prices, volume, liquidity from Polymarket CLOB |
| Virtualized Infinite Scroll   | Yes    | 10,000+ markets with zero lag using `react-window` |
| Full-text Search              | Yes    | Instant client-side search across all markets |
| Smart Category Filtering      | Yes    | Crypto, Politics, Sports, Tech, Entertainment, and more |
| Grid / List View Toggle       | Yes    | Switch between beautiful cards and DexScreener-style list |
| Dark + Light Theme            | Yes    | System-aware with manual toggle |
| PWA – Fully Installable       | Yes    | Add to home screen (iOS/Android/Desktop) |
| Offline Support               | Yes    | Service worker + caching via next-pwa |
| SEO Optimized                 | Yes    | Clean metadata, Open Graph, Twitter Cards |
| Mobile-First & Responsive     | Yes    | Perfect on phones, tablets, and desktop |
| Zero Backend                  | Yes    | 100% static + edge functions |
| Affiliate-Ready               | Yes    | Easy to add your referral links |
| Lightning Fast                | Yes    | 99 kB first load · Lighthouse 100/100 |

---

### Tech Stack

- **Next.js 14** (App Router)
- **React 18** + Server Components
- **Tailwind CSS** + CSS Variables
- **next-themes** – Dark/Light mode
- **next-pwa** – Full PWA support
- **react-window** – Virtualized scrolling
- **react-intersection-observer** – Infinite scroll
- **TypeScript** – Full type safety
- **Vercel** – Zero-config deployment

---

### How It Works

1. `/api/markets` → fetches live data from Polymarket CLOB
2. Falls back to curated list if API is down
3. All filtering, sorting, and search happens client-side (instant)
4. `react-window` renders only visible items → smooth even with 50,000+ markets
5. PWA service worker caches everything → works offline

---

### Deploy Your Own (30 seconds)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mamba78/predixio)

Or click **"Fork"** on GitHub → connect to Vercel → done.

No config. No API keys. No database.

---

### Want to Add More Platforms?

Just update `/app/api/markets/route.ts`:

```ts
// Add Kalshi, Manifold, Drift, Azuro, etc.
const kalshiData = await fetch("https://api.kalshi.com/...");
```

Pull request welcome!

---

### Local Development

```bash
git clone https://github.com/mamba78/predixio
cd predixio
npm install
npm run dev
```

Open http://localhost:3000

---

### License

MIT © 2025 Predixio

---

**Predixio is not affiliated with Polymarket, Kalshi, or any platform shown.**  
All data is publicly available. Not financial advice. 18+

---

**You just deployed the future of prediction markets.**

Go to https://predixio.com  
Install it on your phone  
Watch it fly.

**You won.**  
Now go dominate.