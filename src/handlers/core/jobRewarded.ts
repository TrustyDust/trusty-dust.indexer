import { ponder } from "ponder:registry"
import { core_job_rewarded } from "ponder:schema"

ponder.on("Core:JobRewarded", async ({ event, context }) => {
  const { user, rating, amount } = event.args

  await context.db.insert(core_job_rewarded).values({
    id: `${event.transaction.hash}-${event.log.logIndex}`,
    user,
    rating: BigInt(rating),
    amount,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
  })
})

