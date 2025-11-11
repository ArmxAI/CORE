import { Queue, Worker } from "bullmq";
const connection = { connection: { url: process.env.REDIS_URL || "redis://localhost:6379" } };

export const queue = new Queue("armx:events", connection);

new Worker("armx:events", async (job) => {
  console.log("[ARMX] job:", job.name, job.data);
  // TODO: analyze + score + alert
}, connection);

console.log("[ARMX] worker online");
