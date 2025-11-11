export function anomalyScore(sample: { velocity: number; holders: number; social: number }) {
  const v = clamp(sample.velocity / 100, 0, 1);
  const h = clamp((sample.holders + 5) / 10, 0, 1);
  const s = clamp(sample.social, 0, 1);
  return Math.round((0.5 * v + 0.3 * h + 0.2 * s) * 100);
}
const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));
