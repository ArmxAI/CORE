// Placeholder: replace with @solana/web3.js or custom RPC calls
export async function getLatestVelocity(mint: string): Promise<number> {
  const hash = [...mint].reduce((a, c) => a + c.charCodeAt(0), 0);
  return (hash % 150) + 10;
}
