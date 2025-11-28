import { ponder } from "ponder:registry"
import { jobs_job_approved } from "ponder:schema"

ponder.on("Jobs:JobApproved", async ({ event, context }) => {
  const { jobId, worker, rating, rewardAmount } = event.args

  await context.db.insert(jobs_job_approved).values({
    id: `${event.transaction.hash}-${event.log.logIndex}`,
    jobId,
    worker,
    rating: BigInt(rating),
    rewardAmount,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
  })
})

