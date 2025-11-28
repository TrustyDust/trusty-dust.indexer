import { ponder } from "ponder:registry"
import { jobs_worker_assigned } from "ponder:schema"

ponder.on("Jobs:WorkerAssigned", async ({ event, context }) => {
  const { jobId, worker } = event.args

  await context.db.insert(jobs_worker_assigned).values({
    id: `${event.transaction.hash}-${event.log.logIndex}`,
    jobId,
    worker,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
  })
})

