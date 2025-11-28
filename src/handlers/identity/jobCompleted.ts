import { ponder } from "ponder:registry"
import { identity_job_completed } from "ponder:schema"

ponder.on("Identity:JobCompleted", async ({ event, context }) => {
  const { user, totalJobsCompleted } = event.args

  await context.db.insert(identity_job_completed).values({
    id: `${event.transaction.hash}-${event.log.logIndex}`,
    user,
    totalJobsCompleted,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
  })
})

