```
 █████╗ ██████╗ ███╗   ███╗██╗  ██╗
██╔══██╗██╔══██╗████╗ ████║╚██╗██╔╝
███████║██████╔╝██╔████╔██║ ╚███╔╝ 
██╔══██║██╔═══╝ ██║╚██╔╝██║ ██╔██╗ 
██║  ██║██║     ██║ ╚═╝ ██║██╔╝ ██╗
╚═╝  ╚═╝╚═╝     ╚═╝     ╚═╝╚═╝  ╚═╝
     A R M X   I N T E L L I G E N C E
```
---

# ARMX Intelligence
**Autonomous Intelligence for Solana Markets — Scans. Scores. Strikes.**

> ARMX is not a bot. It’s an autonomous crypto intelligence framework.  
> It listens to Solana’s network, detects anomalies, scores risk, and predicts volatility — before the crowd reacts.

---

## ⚡ Vision

To create an autonomous layer of **market perception** on Solana —  
a self-learning system that observes liquidity, detects clustering, and identifies early momentum before it becomes noise.

ARMX does not speculate. It *measures*.  
It treats DeFi as a living organism — and reads its pulse.

---

## 🧩 System Architecture

```
┌──────────────────┐
│  WS Scanner      │  — collects tx velocity and wallet data
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Analyzer        │  — detects wallet clusters, token velocity spikes
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Risk Engine     │  — calculates ARMX Risk Index (0–100)
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  API / Alerts    │  — exposes results via REST, TG, X integrations
└──────────────────┘
```

**Core Stack:**  
TypeScript • Node.js • Redis • BullMQ • Express • WebSockets • Solana RPC  

---

## 🧠 Core Modules

| Module | Purpose |
|--------|----------|
| 🛰️ **Scanner** | WebSocket stream listener. Gathers raw transactions, slot data, and velocity changes for every mint. |
| ⚙️ **Analyzer** | Identifies wallet clustering, low-float trading loops, and high-frequency patterns. |
| 🧮 **Risk Engine** | Converts raw signals into ARMX Risk Index — unified 0–100 score combining velocity, holder delta, and social noise. |
| 🌐 **API Layer** | Public REST endpoints for integration with bots, dashboards, and trading tools. |
| 🧵 **Worker System** | Background queue (BullMQ) for async jobs, alerts, and scoring pipelines. |

---

## ⚙️ How It Works

1. **Observe:** ARMX connects to Solana’s WebSocket RPC and streams all new transaction data.  
2. **Analyze:** Each mint/wallet is mapped through time, calculating short-term velocity and delta.  
3. **Cluster:** The analyzer detects coordinated wallets, shared inflows, or synchronized buy pressure.  
4. **Score:** Risk Engine assigns a real-time ARMX Index (0–100).  
5. **Signal:** If risk or velocity passes threshold, API broadcasts alerts or triggers webhooks.

Example pseudocode:
```ts
const velocity = getVelocity(mint)
const clustering = detectWalletClusters(mint)
const risk = scoreRisk({ velocity, holdersDelta, social })
if (risk > 80) alert(mint, risk)
```

---

## 🔌 API Reference

### `GET /health`
Returns system status.

```json
{ "ok": true }
```

### `GET /risk/:mint`
Returns ARMX Risk Index for a token.

```json
{
  "mint": "4RkRqGymdpa7s3CH7ND7ozdCaowjCpfNeSUPGCJRpump",
  "velocity": 132,
  "risk": 85
}
```

### `POST /scan`
Triggers manual analysis for a token.

```json
{ "ok": true, "requestId": "1731239802" }
```

---

## 🚀 Quickstart

```bash
git clone https://github.com/yourname/armx-intelligence.git
cd armx-intelligence

pnpm i
cp .env.example .env
docker compose up -d redis

pnpm -w run dev
# → API available at http://localhost:8080/health
```

Example `.env`:
```env
RPC_URL=https://your-quicknode-url
WS_URL=wss://your-quicknode-ws
REDIS_URL=redis://localhost:6379
API_PORT=8080
API_KEY=changeme
```

---

## 🧩 Development

```bash
# Run all modules in development mode
pnpm -w run dev

# Build all packages
pnpm -w run build

# Type checking
pnpm -w run typecheck
```

---

## 🧠 Risk Engine Logic

| Input | Description | Weight |
|-------|--------------|--------|
| **Velocity** | Transaction frequency per mint | 0.5 |
| **Holders Delta** | % change in active holders | 0.3 |
| **Social Index** | Real-time sentiment and buzz | 0.2 |

Final formula:
```
risk = round((0.5*v + 0.3*h + 0.2*s) * 100)
```

---

## 📡 Integration Example (Telegram Alert)

```js
if (risk > 85) {
  bot.sendMessage(
    chatId,
    `⚠️ High-risk token detected!\n${mint}\nVelocity: ${velocity}\nScore: ${risk}`
  );
}
```

---

## 🗺️ Roadmap

| Phase | Status | Description |
|-------|---------|-------------|
| **P1** | ✅ Done | Realtime Scanner + Risk Engine + REST API |
| **P2** | 🚧 In Progress | Telegram / X alert system + Persistent Redis metrics |
| **P3** | 🧩 Planned | Dashboard UI + Social Data Correlation + ML risk forecasting |

---

## 🧬 Philosophy

> Markets are chaos. Intelligence is pattern.  
> ARMX is not predicting — it’s perceiving.  
>  
> Each wallet, each trade, each movement contributes to the hum of Solana.  
> ARMX listens. It listens for meaning.

---

## ⚖️ Disclaimer

ARMX Intelligence is an open research framework built for educational and experimental purposes only.  
It does **not** provide financial advice, investment guidance, or trading recommendations.  
Use responsibly and at your own risk.  
The maintainers and contributors assume **no liability** for financial losses or actions based on its output.

---

## License
MIT © ARMX Intelligence
