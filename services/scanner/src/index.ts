import { WebSocket } from "ws";

const WS_URL = process.env.WS_URL || "";
if (!WS_URL) {
  console.warn("[ARMX] WS_URL not set. Scanner idle.");
  process.exit(0);
}

console.log("[ARMX] scanner →", WS_URL);
const ws = new WebSocket(WS_URL);
ws.on("open", () => console.log("[ARMX] WS connected"));
ws.on("message", (msg) => {
  // TODO: parse slots/transactions, compute velocity & signals
  console.log("[ARMX] WS message:", String(msg).slice(0, 140));
});
ws.on("close", () => console.log("[ARMX] WS closed"));
ws.on("error", (e) => console.error("[ARMX] WS error", e));
