export type RiskInput = {
  velocity: number;      // tx / 5 min
  holdersDelta: number;  // % change
  social: number;        // [0..1]
};

export function scoreRisk(input: RiskInput) {
  const v = clamp(input.velocity / 100, 0, 1);
  const h = clamp((input.holdersDelta + 5) / 10, 0, 1);
  const s = clamp(input.social, 0, 1);
  return Math.round((0.5 * v + 0.3 * h + 0.2 * s) * 100);
}

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));
