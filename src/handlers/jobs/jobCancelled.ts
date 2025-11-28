import { ponder } from "ponder:registry"
import { jobs_job_cancelled } from "ponder:schema"

ponder.on("Jobs:JobCancelled", async ({ event, context }) => {
  const { jobId, poster } = event.args

  await context.db.insert(jobs_job_cancelled).values({
    id: `${event.transaction.hash}-${event.log.logIndex}`,
    jobId,
    poster,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
  })
})

