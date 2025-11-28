import { ponder } from "ponder:registry"
import { jobs_job_created } from "ponder:schema"

ponder.on("Jobs:JobCreated", async ({ event, context }) => {
  const { jobId, poster, minScore, fee } = event.args

  await context.db.insert(jobs_job_created).values({
    id: `${event.transaction.hash}-${event.log.logIndex}`,
    jobId,
    poster,
    minScore,
    fee,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
  })
})

