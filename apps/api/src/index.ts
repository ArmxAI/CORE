import express from "express";
import cors from "cors";
import morgan from "morgan";
import { scoreRisk } from "@armx/core/risk";
import { getLatestVelocity } from "@armx/clients/solana";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

const API_KEY = process.env.API_KEY || "";
app.use((req, res, next) => {
  if (!API_KEY) return next();
  if (req.headers["x-api-key"] !== API_KEY) return res.status(401).json({ error: "unauthorized" });
  next();
});

app.get("/health", (_req, res) => res.json({ ok: true }));

app.get("/risk/:mint", async (req, res) => {
  const mint = req.params.mint;
  const velocity = await getLatestVelocity(mint);
  const risk = scoreRisk({ velocity, holdersDelta: 0, social: 0 });
  res.json({ mint, velocity, risk });
});

app.post("/scan", async (req, res) => {
  // TODO: push to queue and return requestId
  res.json({ ok: true, requestId: Date.now().toString() });
});

const port = Number(process.env.API_PORT || 8080);
app.listen(port, () => console.log(`[ARMX] API listening on :${port}`));
